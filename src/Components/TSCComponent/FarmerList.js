import React, { useEffect, useRef } from "react";
import './TSC.css';



export default function FarmerList(props) {

    const selectFarmer = () => {
        props.showFarmer(2);
    }

    return (
        <>
            <table className="table table-bordered table-stripped table-hover farmer-list-table" style={{ fontSize: 12 }}>
                <thead>
                    <tr>
                        <th>Farmer ID</th>
                        <th>EPIC ID</th>
                        <th>Farmer Name</th>
                        <th>Mobile</th>
                        <th>Aadhar No</th>
                    </tr>
                </thead>
                <tbody>
                    <tr onClick={selectFarmer}>
                        <td>1001</td>
                        <td>11112</td>
                        <td>Farmer One</td>
                        <td>000000000</td>
                        <td>1234-568-9012</td>
                    </tr>
                    <tr onClick={selectFarmer}>
                        <td>1002</td>
                        <td>11112</td>
                        <td>Farmer Two</td>
                        <td>000000000</td>
                        <td>1234-568-9012</td>
                    </tr>

                </tbody>
            </table>
        </>
    )
}