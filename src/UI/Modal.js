import ReactDOM from "react-dom";
import "./modal.css"
const Overlay = () => {
    return (
        <div className="overlay">
        </div>
    )
}

const Modaloverlay = (props) => {
    return (
        <div className="modal">
            {props.children}
        </div>
    )
}


const Modal = (props) => {
    return (
        <div>
            {ReactDOM.createPortal(<Overlay />, document.getElementById("overlay"))}
            {ReactDOM.createPortal(<Modaloverlay> {props.children} </Modaloverlay >, document.getElementById("overlay"))}
        </div>
    )
}
export default Modal 