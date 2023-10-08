const getToBodyStyle = (err) => {
    if (err) {
        return "error-resp"
    } else {
        return "no-error-resp"
    };
}

export default getToBodyStyle;