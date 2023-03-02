import {useState} from "react";

export default function Setstate(props){


    const [admin, setAdmin] = useState("Sandeep");

    return(
        <>
            <div>
                <h1 style = {{
                    backgroundColor : 'red',
                    color: 'black',
                }}>
                    Admin: {admin}
                </h1>

                <button onClick={() => setAdmin("Sandeep K. Dasari")
                }>Change Admin</button>
                
                <br />
                <button onClick={()=> {
                    window.location.reload()
                }}>Refresh</button>
            </div>
        </>
    )
}