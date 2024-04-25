import "../styles/signUp.css"
import axios from "axios" 
import { useState} from "react";

const BASE_URL = process.env.REACT_APP_BASE_URL


function LogIn ({setPage }) {
    const [email, setEmail]= useState("") 
    const [password, setPassword]= useState("") 
    const [error, setError] = useState("")
    const [hidden, setHidden] = useState(true)
    const [loaderDisplay, setDisplay] = useState("none")

    function fetchData () {
        setDisplay("block")
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
                setDisplay("none")
            }
        )
    }

    return (
        <>
        <h1 id = "logo" onClick = {() => window.location.reload()}>Insta.</h1>
        <div id = "form-container">
            <h2>Log in</h2>

            <input className = "input" type = "text" placeholder="email" value = {email} onChange={(event) => setEmail(event.target.value)}></input>

            <input style = {{marginBottom: 5}}className = "input" type = {hidden? "password": "text"} placeholder="password" value = {password} onChange={(event) => setPassword(event.target.value)}></input>
            {error? <p className = "error">{error}</p> :null}

            <div style = {{marginBottom: 15}}>
                <input style = {{marginLeft: -211}}type = "checkbox" onClick={() => setHidden(!hidden)}></input>
                <p id = "checkbox-label">show my password</p>
            </div>

            <button id = "button" onClick={fetchData}>log in</button>
        </div>

        <div style = {{display: loaderDisplay, top: 173, left: 614}} className="loader"></div>

        </>
    )
}


export default LogIn
