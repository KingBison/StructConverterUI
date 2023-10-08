import { useState } from 'react';
import './App.css';
import convert from './helpers/request';
import getToBodyStyle from './helpers/styleHelpers';

function App() {

  const [selectedFrom, setSelectedFrom] = useState('')
  const [selectedTo, setSelectedTo] = useState('')
  const [fromBody, setFromBody] = useState('')
  const [toBody, setToBody] = useState('')

  const [err, setErr] = useState(false)

  return (
  <>
    <div className='top-bar'>
      <h1>Struct Converter</h1>
    </div>
    <div className='middle'>
        <div className='from-selector'>
          <h2>From</h2>
        </div>
        <div className='from-body'>
          <textarea
            onChange={(e) => {setFromBody(e.target.value)}}
            value={fromBody}
            placeholder='enter the body you would like to convert here'
          ></textarea>
        </div>
        <div className='convert-button-container'>
          <h2 
            className='convert-button' 
            onClick={()=>convert(fromBody, selectedFrom, selectedTo, setToBody, setErr)}>CONVERT
          </h2>
        </div>
        <div className='to-body'>
          <textarea
            value={toBody}
            readOnly={true}
            className={getToBodyStyle(err)}
          ></textarea>
        </div>
        <div className='to-selector'>
          <h2>To</h2>
        </div>
    </div>
  </>
  );
}

export default App;
