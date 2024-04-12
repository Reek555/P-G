



function Modal ({visible, modalPic, setVisible, title, description}) {
    return (
        <div id = "modal" style = {{display: visible}}>
        <img src = {modalPic} className="modal-pic"></img>
        <p  className = "close" onClick={ () => setVisible("none")}>x</p>
        <div className="modal-right-area">
            <div id = "title" style = {{height: 40, fontSize: 30, fontWeight: "bold"}}>  
                {title}           
            </div>
            <div id = "description" style = {{height: 184, marginTop: 28}}>  
                {description}
            </div>
        </div>
    </div>
    )
}


export default Modal