import { useLoaderData } from "react-router";
import MainBar from "./elements/MainBar";
import "./User.css";
import { useState } from "react";
import config from "./config.json";

function User() {
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

    fetch("/config.json", {method: 'GET'})
        .then(response => response.json())
        .then(data1 => {
            fetch(data1["BACKEND_URL"]+"/api/v1/getUser", requestOptions)
                .then(response => response.json())
                .then(data => {
                    username = data.username;
                    fullname = data.fullname;
            });
        });
    
    


    return (
        <div id="app">
            <MainBar />
            <main>
                <p id="fullname">{fullname}</p>
                <p id="username">@{username}</p>
            </main>
        </div>
    )
}

export default User;
