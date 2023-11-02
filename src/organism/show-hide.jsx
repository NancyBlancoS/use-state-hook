import React, {useState} from "react";

import '../styles/styles.css';

export default function ShowHideText() {

    const [isTextVisible, setTextVisible] = useState(false);

    const handleOnClick = () => {
        setTextVisible(!isTextVisible);
    };

    return (
        <div className="show-hide-text container">
            <button className="show-hide btn" onClick={handleOnClick}>{isTextVisible ? 'Hide' : 'Show'}</button>
            {isTextVisible && <p>"We are what we leave in people's hearts"</p>}
        </div>
    )
}

