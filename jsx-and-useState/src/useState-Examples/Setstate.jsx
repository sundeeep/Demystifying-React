import {useState} from "react";

export default function Setstate(props){

    const {sandeep, setSandeep} = props;

    return(
        <>
            <div>
                <h1 style = {{
                    backgroundColor : 'red',
                    color: 'black',
                }}>
                    Admin: {sandeep}
                </h1>

                <button onClick={() => setSandeep("Sandeep K. Dasari")
                }>Change Admin</button>
                
                <br />
                <button onClick={()=> {
                    window.location.reload()
                }}>Refresh</button>
            </div>
        </>
    )
}