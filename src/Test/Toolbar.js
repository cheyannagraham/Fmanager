import React, {useContext} from 'react';
import {ThemeContext} from './Test'


// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar(props) {
    // const ctx = useContext(ThemeContext);
    // console.log(ctx);
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

const ThemedButton = props => {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
   const ctx = useContext(ThemeContext)   
    return (
        <>
            <Button theme = {ctx} />
{/*             
            <Button>
                What am I?
            </Button> */}

            {/* <ThemeContext.Consumer> */}
                {/* {value =>  (<Button theme={value} />)} */}
            {/* </ThemeContext.Consumer> */}
        </>

        
    )
}

const Button = props => {
    return (console.log(props.theme),
        <button>click{props.children}</button>
    )
}

export default Toolbar;