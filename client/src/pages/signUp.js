import "../styles/signUp.css"
import axios from "axios" 
import BASE_URL from '../config/urls';
import LogIn from "./logIn";
import { useState } from "react";




function SignUp ({setPage}) {
    const [name, setName]= useState("") 
    const [email, setEmail]= useState("") 
    const [password, setPassword]= useState("") 
    const [confirmation, setConfirmation] = useState("")
    const [validationErrors, setValidationErrors] = useState({})


    function fetchData () {
        if ( password != confirmation) return

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

            <input className = "input" type = "text" placeholder="password" value = {password} onChange={(event) => setPassword(event.target.value)}></input>
            {validationErrors.password? <p style = {{color: "red", marginTop: -12}}> {validationErrors.password} </p> :null}

            <input  className = "input" type = "text" placeholder="confirm password" value = {confirmation} onChange={(event) => setConfirmation(event.target.value)}></input>
            {password != confirmation? <p style = {{color: "red", marginTop: -12}}> password don't match</p> :null}

            <button id = "button" onClick={fetchData}>sign up</button>

            <p>already have an account? <span id = "login-word" onClick = {() => setPage(<LogIn setPage={setPage}/>) }>log in.</span></p>
        </div>
        </>
    )
}


export default SignUp