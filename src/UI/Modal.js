import ReactDOM from "react-dom";
import "./modal.css"

const Modaloverlay = (props) => {
    return (
        <div className="overlay">
            <div className="modal">
                {props.children}
            </div>
        </div>
    )
}


const Modal = (props) => {
    return (
        <div>
            {ReactDOM.createPortal(<Modaloverlay> {props.children} </Modaloverlay >, document.getElementById("overlay"))}
        </div>
    )
}
export default Modal 