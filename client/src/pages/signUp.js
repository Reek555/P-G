import "../styles/signUp.css"
import axios from "axios" 
import LogIn from "./logIn";
import { useState } from "react";
const BASE_URL = process.env.REACT_APP_BASE_URL





function SignUp ({setPage}) {
    const [name, setName]= useState("") 
    const [email, setEmail]= useState("") 
    const [password, setPassword]= useState("") 
    const [confirmation, setConfirmation] = useState("")
    const [validationErrors, setValidationErrors] = useState({})
    const [hidden, setHidden] = useState("true")
    const [loaderDisplay, setDisplay] = useState("none")


    function fetchData () {
        if ( password != confirmation) return
        setDisplay("block")
        axios({
            method: 'post',
            url: `${BASE_URL}/register`, 
            data: {name: name, email: email, password: password}
    
          })
          .then (
            (res) => {
              localStorage.token = res.data.accessToken
              window.location.reload()
            }
          )
          .catch (
            (err) => {
              setValidationErrors(err.response.data)
              setDisplay("none")

            })
    }

    return (
        <>
        <h1 id = "logo" onClick = {() => window.location.reload()}>Insta.</h1>
        <div id = "form-container">
            <h2>Sign up</h2>
            <input className = "input" type = "text" placeholder="name" value = {name} onChange={(event) => setName(event.target.value)}></input>
            {validationErrors.name? <p style = {{color: "red", marginTop: -12}}> {validationErrors.name} </p> :null}

            <input className = "input" type = "text" placeholder="email" value = {email} onChange={(event) => setEmail(event.target.value)}></input>
            {validationErrors.email? <p style = {{color: "red", marginTop: -12}}> {validationErrors.email} </p> :null}

            <input className = "input" type = {hidden? "password": "text"} placeholder="password" value = {password} onChange={(event) => setPassword(event.target.value)}></input>
            {validationErrors.password? <p style = {{color: "red", marginTop: -12}}> {validationErrors.password} </p> :null}

            <input  style = {{marginBottom: 5}} className = "input" type = {hidden? "password": "text"}  placeholder="confirm password" value = {confirmation} onChange={(event) => setConfirmation(event.target.value)}></input>
            {password != confirmation? <p className="error"> password don't match</p> :null}

            <div style = {{marginBottom: 15}}>
                <input style = {{marginLeft: -211}} type = "checkbox" onClick={() => setHidden(!hidden)}></input>
                <p id = "checkbox-label">show my password</p>
            </div>

            <button id = "button" onClick={fetchData}>sign up</button>

            <p>already have an account? <span id = "login-word" onClick = {() => setPage(<LogIn setPage={setPage}/>) }>log in.</span></p>
        </div>
            <div style = {{display: loaderDisplay, top: 173, left: 614}} className="loader"></div>

        </>
    )
}


export default SignUp
