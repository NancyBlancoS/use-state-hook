import React from 'react'

export default function TextStyler() {
    const [inputField, setInputField] = React.useState('');
    const [textSize, setTextSize] = React.useState(20);


    const handleInputChange = (e) => {
        setInputField(e.target.value);
    }

    const handleDecrease = () => {
        setTextSize(textSize - 5);
    }

    const handleIncrease = () => {
        setTextSize(textSize + 5);
    }

    return (
        <div className="text-styler container">
            <div className='field-ipt'>
                <input type="text" name="field-ipt" value={inputField} id="field-ipt" onChange={handleInputChange} placeholder="Enter Text..."/>
            </div>
            <div>
                <button className="decrease btn" onClick={handleDecrease} type="submit" >Decrease</button>
                <button className="increase btn" onClick={handleIncrease} type="submit" >Increase</button>
            </div>
            <p style={{fontSize: `${textSize}px`}}>{inputField}</p>
        </div>
    )
}
