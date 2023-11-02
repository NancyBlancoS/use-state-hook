import React from 'react'

export default function InputField() {

    const [inputField, setInputField] = React.useState('');

    const handleInputChange = (e) => {
        setInputField(e.target.value);
    }

    const handleOnClick = (e) => {
        e.preventDefault();

        setInputField('');
    };

    return (
        <form onSubmit={handleOnClick}>
            <div className="input-field container">
                <div className='field-ipt'>
                    <input type="text" name="field-ipt" value={inputField} id="field-ipt" onChange={handleInputChange} placeholder="Enter Text..."/>
                </div>
                <div>
                    <button className="field btn" onClick={handleOnClick} type="submit" >Clear</button>
                </div>
            </div>
        </form>
    )
}
