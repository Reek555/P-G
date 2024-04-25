import "../styles/home.css"
import dislikeIcon from "../test pictures/heart.png"
import likeIcon from "../test pictures/heart (1).png"
import axios from "axios" 
import { useEffect, useState } from "react";

const BASE_URL = process.env.REACT_APP_BASE_URL


function ImageX ({pic, setVisible, setTitle, setDescription, setModalPic, userInfo}) {
    const [liked, setLiked] = useState(false)
    const [count, setCount]  = useState(pic.likes.length)

      
    useEffect (() => {
        if (!userInfo) return
        let userIndex =  pic.likes.findIndex(i => i._id == userInfo.user.id)

        if (userIndex === -1) return
        setLiked(true)
    }, []) 
    

    function clickHandler() {
        //making the corresponding modal visible with picInfo
        //document.getElementById("modal1").style.display = "block"
    
            setVisible("block")
            setTitle(pic.title)
            setDescription(pic.description)
            setModalPic(`${BASE_URL}/images/${pic.name}`)
    
    }

    function likeClickHandler () {
        if(!userInfo) return
    
        let newIsLiked = !liked

        setCount(newIsLiked? count + 1: count - 1)
        setLiked(newIsLiked)
    
        axios({
            method: 'post',
            url: `${BASE_URL}/edit`, 
            data: {name: pic.name, title: pic.title, description: pic.description, updatedLikes: {liked: newIsLiked}},
            headers: {
                "Authorization": localStorage.getItem("token")
            }
          })

    }

    return (
        <div className="image-frame">
            <img className="image" src = {`${BASE_URL}/images/${pic.name}`} onClick={clickHandler }></img>
            <div>
                <img style = {{width: 25.6, marginLeft: 94}} src = {liked? likeIcon: dislikeIcon} onClick={likeClickHandler}></img>
                <p style = {{marginTop: -24, marginLeft: 125}}>{count}</p>
            </div>
        </div>
    )
}

export default ImageX





/* function clickHandler(pic, setVisible, setTitle, setDescription, setModalPic) {
    //making the corresponding modal visible with picInfo
    //document.getElementById("modal1").style.display = "block"

        setVisible("block")
        setTitle(pic.title)
        setDescription(pic.description)
        setModalPic(`${BASE_URL}/images/${pic.name}`)

} 

function likeClickHandler (pic, liked, setLiked, count, setCount, userInfo) {
    if(!userInfo) return

    let newIsLiked = !liked

    axios({
        method: 'post',
        url: `${BASE_URL}/edit`, 
        data: {name: pic.name, title: pic.title, description: pic.description, updatedLikes: {liked: newIsLiked}},
        headers: {
            "Authorization": localStorage.getItem("token")
        }
      })
      .then (
        (res) => {
            setCount(newIsLiked? count + 1: count - 1)
            setLiked(newIsLiked)
        }

      )
}
*/
