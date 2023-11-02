import React, { useState } from 'react'

export default function TextReverser() {
    const [inputField, setInputField] = React.useState('');

    const [textReversed, setTextReversed] = useState('');

    const handleInputChange = (e) => {
        const typedText = e.target.value;

        setInputField(typedText);
        setTextReversed(typedText.split('').reverse('').join(''));
    }

    const handleOnClick = (e) => {
        e.preventDefault();

        setInputField('');
        setTextReversed('');
    };


    return (
        <form onSubmit={handleOnClick}>
            <div className="text-reverser container">
                <div className="typing-container">
                    <div className='field-ipt'>
                        <input type="text" name="field-ipt" value={inputField} id="field-ipt" onChange={handleInputChange} placeholder="Enter Text..."/>
                    </div>
                    <div>
                        <button className="field btn" onClick={handleOnClick} type="submit" >Clear</button>
                    </div>
                </div>
                <div className='result-text-reversed'>
                    <p>Typed Text: {inputField}</p>
                    <p>Reversed Text: {textReversed}</p>
                </div>
            </div>
        </form>
    )
}

