import React from "react";
import Utility from "./utility";
import "./tables.css"

const Table = () => {
    return (
        <React.Fragment>
            {/* Here the main content start */}
            <div className="table">
                {/* Utility contains heading as well as new entry button  */}
                <Utility />

                {/* Table were all the data shown */}
                <div className="data-table">

                    <table>
                        <thead>
                            <tr>
                                {/* All the table headers  */}
                                <th>Action</th>
                                <th>ID</th>
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
                            <tr>
                                <td>Pending</td>
                                <td>12</td>
                                <td>12/23/3444</td>
                                <td>xx/xx/xxxx</td>
                                <td>12,1212</td>
                                <td>12/34/1221  1212/232/32</td>
                                <td>12</td>
                                <td>12</td>
                                <td>1200</td>
                                <td>12/12/1212</td>
                                <td>xx XX</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Pending</td>
                                <td>12</td>
                                <td>12/23/3444</td>
                                <td>xx/xx/xxxx</td>
                                <td>12,1212</td>
                                <td>12/34/1221  1212/232/32</td>
                                <td>12</td>
                                <td>12</td>
                                <td>1200</td>
                                <td>12/12/1212</td>
                                <td>xx XX</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Table