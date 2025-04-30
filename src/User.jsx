import { useLoaderData } from "react-router";
import MainBar from "./elements/MainBar";
import "./User.css";
import { useState } from "react";
import FatalError from './elements/FatalError';

function User() {

    const [ crashed, setCrashed ] = useState(false);
    const [ crashCode, setCrashCode ] = useState("GENERIC_ERROR_UNKNOWN");
    const [ crashStatus, setCrashStatus ] = useState(500);

    let data = useLoaderData();
    let [ username, setUsername ] = useState("");
    let [ fullname, setFullname ] = useState("");
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    try {
        fetch("/api/v1/getUser?username=" + data.username, requestOptions)
        .then(response => {
            console.log(response);

            if (response.status == 404) {
                setCrashCode("API_404_ERROR");
                setCrashed(true);
                setCrashStatus(400);
            }

            if (response.status == 500) {
                setCrashCode("API_500_ERROR");
                setCrashed(true);
            }

            if (!crashed) {
                try {
                    let out = response.json();
                    setUsername(out.username);
                    setFullname(out.fullname);
                } catch (error) {
                    setCrashCode("API_JSON_PARSE_ERROR");
                    setCrashed(true);
                }
            }
            
    });

        
    } catch (error) {
        setCrashCode("API_CONTACT_ERROR");
        setCrashed(true);
    }
            
    
    


    return (
        <div id="app">
            <MainBar />
            <main>
                <p id="fullname">{fullname}</p>
                <p id="username">@{username}</p>
            </main>

            { crashed ? <FatalError code={ crashCode } status={ crashStatus } /> : ''}
        </div>
    )
}

export default User;
