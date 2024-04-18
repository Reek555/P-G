import "../styles/home.css"
import dummyPic from "../test pictures/dummy-post-square-1-1.jpg"
import BASE_URL from '../config/urls';
import axios from "axios" 
import { useState, useEffect } from "react";
import Image from "../components/image"
import Modal from "../components/modal"



axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers["Authorization"] = localStorage.getItem("token")
    return config
  });



function Profile({setPage, userInfo}) {

    const [images, setImages] = useState()
    const [visible1, setVisible1] = useState("none")
    const [visible2, setVisible2] = useState("none")
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [modalPic, setModalPic] = useState()
    const [moto, setMoto] = useState("Express yourself visually. Be seen.")
    const [loaderDisplay, setDisplay] = useState("block")


 

    useEffect (()=> {
        axios.get(`${BASE_URL}/images`)
        .then((res) => {
            //response form: {photos: [], user: {}}
            let photos = res.data.map(photo =>  <Image 
                                                        pic = {photo}
                                                        setVisible = {setVisible1}
                                                        setTitle = {setTitle}
                                                        setDescription = {setDescription}
                                                        setModalPic = {setModalPic}
                                                        userInfo={userInfo}
                                                         />
            )
            setImages(photos)
            setDisplay("none")

        })


    }, [])



    function galleryClickHandler () {

        setDisplay ("block")

        let ImageY = Image.bind({})

        axios.get(`${BASE_URL}/me`, {
            headers: {
                "Authorization": localStorage.getItem("token")
        }
        })
        .then((res) => {
            //response form: {photos: [], user: {}}
            
            let photos = res.data.photos.map(photo =>
                <ImageY 
                pic = {photo}
                setVisible = {setVisible2}
                setTitle = {setTitle}
                setDescription = {setDescription}
                setModalPic = {setModalPic}
                userInfo={res.data} />
            )
            setImages(photos)
            setMoto(`Hi ${userInfo.user.name}, your uploads will appear here ...`)
            setDisplay ("none")

            
        })
    }



    function logOutHandler () {
        localStorage.token = ""
        window.location.reload()
    }
    

    function saveHandler(event) {
        setDisplay ("block")

        event.preventDefault();

        let name = modalPic.split("/")
        name = name[name.length - 1]
        axios({
            method: 'post',
            url: `${BASE_URL}/edit`, 
            data: {name: name, title: title, description: description},
            /*
            headers: {
                "Authorization": localStorage.getItem("token")
            }
            */
          })
          .then (
            (res) => {window.location.reload()
            }
          )
    }

    
    function deleteHandler () {
        let a = window.confirm("This item will be deleted!")
        if (!a) return

        setDisplay ("block")

        let name = modalPic.split("/")
        name = name[name.length - 1]
        console.log(name)
        axios.get(`${BASE_URL}/delete/${name}`)
        .then(
            (res) => {window.location.reload()}
        )
    }



    return (
        <>
        <div>
            <h1 id = "logo" onClick = {() => window.location.reload()}>Insta.</h1>
            <div id = "buttons-container">
                <button id = "middle-button" onClick={() => document.getElementById("modal2").style.display= "block"}>upload</button>
                <button id = "left-button" onClick={logOutHandler}>{"log out"}</button>
                <button id = "right-button" onClick={ galleryClickHandler }>{"gallery"}</button>
            </div>
        </div>

        <div id = "moto" ><h3>{moto}</h3></div>

        <div id="images-container">

            {images}

        </div>

        <Modal visible = {visible1}
                setVisible={setVisible1}
                modalPic={modalPic}
                title = {title}
                description={description}
        />


        <div id = "modal2">
            <img src = {dummyPic} className="modal-pic"></img>
            <p className="close" onClick={() => document.getElementById("modal2").style.display= "none"}>x</p>
            <div className="modal-right-area">
                <form action = {`${BASE_URL}/uploads`} method="post" encType="multipart/form-data" target="_parent">
                    <input name = "title" type = "text" className="modal-input" placeholder="Title" maxLength = "17" required></input>
                    <textarea name = "description" style = {{height: 140, marginTop: 28, width: 261}} placeholder="description" maxLength="512" required></textarea>
                    <input type="file"  style = {{marginTop: 18}} accept = ".png, .jpg" name= "photo" required></input>
                    <input type = "text" name = "authorization" value = {localStorage.getItem("token")} style = {{display: "none"}}></input>
                    <input id = "submit-button" type="submit"></input>

                </form>
            </div>
        </div>

        <div id = "modal" style = {{display: visible2}}>
            <img src = {modalPic} className="modal-pic"></img>
            <p className="close" onClick={() => setVisible2 ("none")}>x</p>
            <div className="modal-right-area">
                <form id = "form1" onSubmit={saveHandler}>
                <input type = "text" value = {title} className="modal-input" onChange={(event) => setTitle(event.target.value)} required></input>
                <textarea style = {{height: 167, marginTop: 28, width: 261}} value = {description} onChange = { (event) => setDescription(event.target.value)} maxLength="512" required>
                </textarea>
                </form>
                <button type = "submit" form = "form1" id = "save-button" >save</button>
                <button id = "delete-button" onClick={deleteHandler}>delete</button>

            </div>
        </div>

        <div style = {{display: loaderDisplay}} className="loader"></div>



        </>
    )
    }




export default Profile; 