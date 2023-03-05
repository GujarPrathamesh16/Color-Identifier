import colornames from 'colornames';
const Color = ({colorValue, setColorValue, hexValue, setHexValue, isDark, setIsDark }) => {

    function handleColorChange(e) {
        setColorValue (e.target.value)
        setHexValue(colornames(e.target.value))   
    }
    return (
        <>
            <div className="main-container">
                <h2>Set Colors</h2>
                <div className="display-container" 
                     style={
                        {backgroundColor : colorValue,
                         color : isDark ? "black" : "white"}
                     }
                >
                    <p>{colorValue ? colorValue : "Empty value"}</p>
                    <p>{hexValue ? hexValue : "Empty value"}</p>
                </div>

                <label htmlFor="color-name"></label>
                <input
                    type='text'
                    className="color-name"
                    id="color-name"
                    placeholder="Enter color"
                    value = {colorValue}
                    onChange={handleColorChange}>
                </input>
                <button 
                    type='button'
                    onClick={
                    () => setIsDark(!isDark)
                }>
                    Toggle Text Color
                </button>
            </div>
        </>
    );
}
export default Color