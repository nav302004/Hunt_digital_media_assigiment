import ReactDOM from "react-dom";
const Overlay = () => {
    return (
        <div className="overlay">
        </div>
    )
}

const Modaloverlay = (props) => {
    return (
        <div className="modal">
            <h1>Hello owrld </h1>
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