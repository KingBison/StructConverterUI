import axios from "axios";

const getUrl = async () => {
    try{
        const resp = await fetch("/config.json");
        if (!resp.ok) throw new Error('unable to retrieve api url');
        const data = await resp.json();
        return data.structConverterAPIurl
    } catch (error) {
        console.log(error);
        return "";
    }
}   

const URL = await getUrl()

const convert = async (fromBody, fromType, toType, setToBody, setError) => {
    // try to get url again if not already retrieved
    if (URL === "") {
        setToBody("unable to get api url")
        setError(true)
        return
    } 

    axios.post(URL, fromBody, {
        headers: {
            'Content-Type': 'text/plain'
        },
        params: {
            from: fromType,
            to: toType
        }
    })
    .then(
        (resp) => {
            setError(false)
            setToBody(resp.data)
        }
    )
    .catch(
        (error) => {
            setError(true);
            if (error.response) {
                setToBody(String(error.response.status) + ' returned: ' + String(error.response.data))
            } else if (error.request) {
                setToBody("no response received from converter api, it is likely down")
            } else {
                setToBody("ERROR: " + String(error.message))
            }
        }
    )
}; 

export default convert;