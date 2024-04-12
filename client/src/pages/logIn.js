import "../styles/signUp.css"
import axios from "axios" 
import BASE_URL from '../config/urls';
import { useState} from "react";

function LogIn ({setPage }) {
    const [email, setEmail]= useState("") 
    const [password, setPassword]= useState("") 
    const [error, setError] = useState("")

    function fetchData () {
        axios({
            method: 'post',
            url: `${BASE_URL}/login`, 
            data: {email: email, password: password}

        }).then (
            (res) => {
                console.log (res)
                localStorage.token = res.data.accessToken
                window.location.reload()
            }
        )
        .catch (
            () => {
                setError("email or password is incorrect")
            }
        )
    }

    return (
        <>
        <h1 id = "logo" onClick = {() => window.location.reload()}>Insta.</h1>
        <div id = "form-container">
            <h2>Log in</h2>

            <input className = "input" type = "text" placeholder="email" value = {email} onChange={(event) => setEmail(event.target.value)}></input>

            <input className = "input" type = "text" placeholder="password" value = {password} onChange={(event) => setPassword(event.target.value)}></input>
            {error? <p style = {{color: "red", marginTop: -12}}>{error}</p> :null}


            <button id = "button" onClick={fetchData}>log in</button>
        </div>
        </>
    )
}


export default LogIn