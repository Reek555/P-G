import "../styles/home.css"
import BASE_URL from '../config/urls';
import axios from "axios" 
import { useState, useEffect } from "react";
import LogIn from "./logIn";
import Image from "../components/image"
import Profile from "./profile"
import SignUp from "./signUp"
import Modal from "../components/modal"



function Home({setPage}) {

    const [images, setImages] = useState()
    const [visible, setVisible] = useState("none")
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [modalPic, setModalPic] = useState()
    const [loaderDisplay, setDisplay] = useState("block")


    useEffect (()=> {

         axios.get(`${BASE_URL}/me`, {
            headers: {
                "Authorization": localStorage.getItem("token")
        }
        })
        .then((res) => {
            //response form: {photos: [], user: {}}
            setPage(<Profile setPage = {setPage} userInfo = {res.data}/>)
        }, (err) => {})

        axios.get (`${BASE_URL}/images`)
        .then (
            (res) => {
                let photos = res.data.map(photo =>
                                    <Image 
                                    pic = {photo}
                                    setVisible = {setVisible}
                                    setTitle = {setTitle}
                                    setDescription = {setDescription}
                                    setModalPic = {setModalPic} />
                    )
                setImages(photos)
                setDisplay("none")
            }
        )
    }, [])




    function logInHandler () {

        setPage(<LogIn setPage={setPage}/>)
    }

    function signUpHandler () {
        setPage (<SignUp setPage={setPage}/>)
    }




    return (
        <>

        <div>
            <h1 id = "logo" onClick = {() => window.location.reload()}>Insta.</h1>
            <div id = "buttons-container">
                <button id = "middle-button" onClick={() => setPage(<SignUp setPage ={setPage}/>)}>upload</button>
                <button id = "left-button" onClick={logInHandler}>{"log in"}</button>
                <button id = "right-button" onClick={signUpHandler}>{"sign up"}</button>
            </div>
        </div>

        <div id = "moto" ><h3>Express yourself visually. Be seen.</h3></div>

        <div id="images-container">

            {images}

        </div>


        <Modal visible = {visible}
                setVisible={setVisible}
                modalPic={modalPic}
                title = {title}
                description={description}
        />
        
        
        <div style = {{display: loaderDisplay}} className="loader"></div>


        </>
    )
}


export default Home; 