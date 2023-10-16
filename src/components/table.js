import React from "react";
import Utility from "./utility";
import "./tables.css"
import Button from '@mui/material/Button';
import {dataActions} from "../store/index"
import { useSelector,useDispatch } from "react-redux"

const Table = () => {
    let i = 1
    const dispatch = useDispatch()
    const allentry = useSelector(state => state.data.data)
    console.log(allentry)

    const deleteHandler = (binddata) => {
        dispatch(dataActions.deletedata(binddata))
    }
    return (

        <React.Fragment>
            {/* Here the main content start */}
            <div className="table">
                {/* Utility contains heading as well as new entry button  */}
                <Utility />

                {/* Table where all the data shown */}
                <div className="data-table">

                    <table>
                        <thead>
                            <tr>
                                {/* All the table headers  */}
                                <th className="sticky_prop" >ID</th>
                                <th>Action</th>
                                <th>Start date</th>
                                <th>End date</th>
                                <th>Month,Year</th>
                                <th>Dates Excluded</th>
                                <th>Number of Days </th>
                                <th>Lead Count</th>
                                <th>Expected DRR</th>
                                <th>Last Updated</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allentry.map(entry => {
                                return (
                                    <React.Fragment key={Math.random()}>
                                        <tr >
                                            <td className="sticky_prop" >{i++}</td>
                                            <td>-</td>
                                            <td>{entry.startdate ? entry.startdate:"-"}</td>
                                            <td>{entry.enddate ? entry.enddate :"-"}</td>
                                            <td>{entry.monthYear ? entry.monthYear :"-"}</td>
                                            <td>{entry.excludingdate.map(excl => excl)}</td>
                                            <td>{entry.numbersofday ? entry.numbersofday :"-"}</td>
                                            <td>{entry.leadcount ? entry.leadcount :"-"}</td>
                                            <td>{Math.round(entry.leadcount / entry.numbersofday)}</td>
                                            <td>{entry.lastUpdated.date ? entry.lastUpdated.date :"-"} <br /> {entry.lastUpdated.time ? entry.lastUpdated.time :"-"}</td>
                                            <td><Button 
                                            variant="outlined" 
                                            color="error"
                                            onClick={deleteHandler.bind(null,{start:entry.startdate,end:entry.enddate})}>
                                                Delete
                                            </Button></td>
                                        </tr>
                                    </React.Fragment>
                                )
                            })}
                        </tbody>
                    </table>
                    {Object.keys(allentry).length < 0 && <h1 style={{ textAlign: "center", margin: "20px 0px" }} >No data found</h1>}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Table