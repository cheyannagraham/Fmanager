import React from 'react';
import Toolbar from './Toolbar'


// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
export const ThemeContext = React.createContext('df');

const Test = props =>  {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
        <>
            <ThemeContext.Provider value={{name:'chey'}}>
                <Toolbar />
            </ThemeContext.Provider>
            
                <Toolbar />
        </>
    );
}



export default Test;