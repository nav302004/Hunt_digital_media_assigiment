import React , {useState} from "react";
import "./utility.css"
import Newentry from "./newentry"

const Utility = () => {
    const [show, setshow] = useState(false)
    const toogleShow = () => {
        setshow(!show)
    }

    return (
        <React.Fragment>
            {show && <Newentry tooglechange={toogleShow} />}
            <div className="utility">
                <div className="utility_search">
                    <h3>DRR Report</h3>
                    <p>Hunt Digital Media</p>
                </div>
                <div className="utility_button">
                    <a href="">Report a bug</a>
                    <button onClick={() => {setshow(!show)}} >Add new</button>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Utility