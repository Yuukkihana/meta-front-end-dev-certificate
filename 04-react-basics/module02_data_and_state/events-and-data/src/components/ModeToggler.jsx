function ModeToggler(){
    let darkModeOn = true;
    const darkMode = <h1>Dark mode is on</h1>
    const lightMode = <h1>Light mode is on</h1>

    function handleClick(){
        darkModeOn = !darkModeOn; //changing the value to the opposite on click
        if (darkModeOn == true){
            console.log("Dark mode is on")
        } else {
            console.log("Light mode is on")
        }
    }

    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick = {handleClick}>
                Click here
            </button>
        </div>
    )
}

export default ModeToggler;