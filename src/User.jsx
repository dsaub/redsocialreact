import { useLoaderData } from "react-router";
import MainBar from "./elements/MainBar";
import "./User.css";
import { useState } from "react";
import config from "./config.json";
import FatalError from './elements/FatalError';

function User() {

    const [ crashed, setCrashed ] = useState(false);
    const [ crashCode, setCrashCode ] = useState("GENERIC_ERROR_UNKNOWN");

    let data = useLoaderData();
    let username = "";
    let fullname = "";
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors',
        body: JSON.stringify({ username: data.username })
    };
    try {
        fetch("/api/v1/getUser", requestOptions)
        .then(response => {
            console.log(response);

            if (response.status == 404) {
                setCrashCode("API_404_ERROR");
                setCrashed(true);
            }

            if (response.status == 500) {
                setCrashCode("API_500_ERROR");
                setCrashed(true);
            }

            if (!crashed) {
                try {
                    JSON.parse(response);
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

            { crashed ? <FatalError code={ crashCode } /> : ''}
        </div>
    )
}

export default User;
