import { useState, useRef } from "react";
import Modal from "../UI/Modal"
import "./newentry.css"
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"; // for plus icon
import {useDispatch} from "react-redux"
import {dataActions} from "../store/index"

const FormnewEntry = (props) => {
    // Default disptch func setting
    const dispatch = useDispatch()

    // Extracting the current date 
    const date = new Date();

    // setting the start date(defaultvalue) to currnet date  
    let currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;




    // chnaging the minium date for end date. The date as the user chnage the start date 
    const [miniumdate, setminiumdate] = useState(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 1}`);
    const [enddate, setenddate] = useState("")

    // Hnadling it with onchange hanlder 
    const miniumdateHandler = (event) => {
        const newdate = new Date(event.target.value)
        setminiumdate(`${newdate.getFullYear()}-${newdate.getMonth() + 1}-${newdate.getDate() + 1}`)
    }
    const enddatehanlder = (event) => {
        const newdate = new Date(event.target.value)
        setenddate(`${newdate.getFullYear()}-${newdate.getMonth() + 1}-${newdate.getDate()}`)
    }

    // creating a state that conatins all the value or date wwhich should be excluded for dates
    const [excludedDates, setexcludedDates] = useState([])
    const excludeddateRef = useRef("")

    // adding exluded dates in array and updating them when ever we add one more date
    const excludeddateaddHandler = () => {

        // Check if already exist or not 
        let index = excludedDates.filter((date) => date === excludeddateRef.current.value)
        if (index.length > 0) return

        setexcludedDates([...excludedDates, excludeddateRef.current.value])
    }
    const excludeddateminusHandler = (date) => {
        const newdates = excludedDates.filter((element) => element !== date)
        setexcludedDates(newdates)
    }

    // Lead count input handler
    const leadcountRef = useRef("")

    // calcuation for number of days 
    let numberofday  = 0
    const numberofdays = () => {
        let date1 = new Date(miniumdate)
        let date2 = new Date(enddate)
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        numberofday = (diffDays+1) - excludedDates.length
        
    }
    numberofdays()


    const submitHandler = (e) => {
        const date = new Date()
        e.preventDefault()
        let usernewentrydata ={
            startdate: miniumdate , 
            enddate : enddate,
            excludingdate:excludedDates,
            leadcount:leadcountRef.current.value,
            monthYear:miniumdate.slice(0, 7).replace("-", ","),
            numbersofday:numberofday,
            lastUpdated:{
                date:`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
                time:`${date.getHours()}:${date.getMinutes()}`
            },
        } 
        // console.log({
        //     startdate: miniumdate , 
        //     enddate : enddate,
        //     excludingdate:excludedDates,
        //     leadcount:leadcountRef.current.value,
        //     monthYear:miniumdate.slice(0, 7).replace("-", ","),
        //     numbersofday:numberofday,
        //     lastUpdated:date,
        // })
        dispatch(dataActions.addtodata(usernewentrydata))
        props.tooglechange()
    }

    return (
        <Modal>
            <div className="modalcontainer">

                <header> <h3>Create new entry</h3> </header>
                <main>
                    <div className="date_container">
                        <div className="input_container">
                            <p>Start date</p>
                            <input type="date" defaultValue={currentDate} onChange={miniumdateHandler} />
                        </div>
                        <div className="input_container" >
                            <p>End date</p>
                            <input type="date" min={miniumdate} onChange={enddatehanlder} />
                        </div>
                    </div>
                    <div className="date_container">
                        <div className="input_container" >
                            <p>Excluded date</p>
                            <input
                                type="date"
                                defaultValue={currentDate}
                                min={miniumdate}
                                max={enddate}
                                ref={excludeddateRef} />
                            <button className="adddate" onClick={excludeddateaddHandler} > <AiOutlinePlusCircle /> Add</button>
                        </div>
                        <div className="input_container" >
                            <p>Lead Count</p>
                            <input type="number" defaultValue="1" ref={leadcountRef} />
                        </div>
                    </div>
                    <div className="excludeddateshow"  >
                        {excludedDates.map((date) => <small key={Math.random()} onClick={excludeddateminusHandler.bind(null, date)}  > <AiOutlineMinusCircle /> {date}</small>)}
                    </div>
                    <div className="autocompletedinfo">
                        <p>Auto complted details  </p>
                        <small>Year,Month : {miniumdate.slice(0, 7).replace("-", ",")}</small>
                        <br />
                        <small>Number of Days : {numberofday}</small>
                    </div>
                </main>
                <footer>
                    <div>
                        <button onClick={props.tooglechange} > Cancel </button>
                        <button onClick={submitHandler}>Add entry</button>
                    </div>
                </footer>
            </div>
        </Modal>
    )
}

export default FormnewEntry