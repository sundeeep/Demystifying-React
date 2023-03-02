import {useState} from "react";
import Setstate from './useState-Examples/Setstate';

const App = () => {
    
    const [admin, setAdmin] = useState("Sandeep");

    return(
        <Setstate sandeep={admin} setSandeep={setAdmin}/>
        // <h1>App Component Code</h1>
    )
}

export default App;