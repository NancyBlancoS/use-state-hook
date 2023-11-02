import '../styles/styles.css'

function Layout ({children}) {
    const [showHideComponent, inputFieldComponent, textReverserComponent, textStylerComponent] = children;
    
    return (
        <div className="main-container">
            <div className="show-hide">{showHideComponent}</div>
            <div className="input-field">{inputFieldComponent}</div>
            <div className="text-reverser">{textReverserComponent}</div>
            <div className="text-styler">{textStylerComponent}</div>
        </div>
    )
}

export default Layout;