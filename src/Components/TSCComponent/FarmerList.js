import React, { useEffect, useRef } from "react";
import './TSC.css';



export default function FarmerList(props) {

    const selectFarmer = () =>{
        
    }

    return (
        <>
            <table className="table table-bordered table-stripped table-hover farmer-list-table" style={{fontSize:12}}>
                <thead>
                    <tr onClick={selectFarmer}>
                        <th>Farmer ID</th>
                        <th>Farmer Name</th>
                        <th>Mobile</th>
                        <th>Aadhar No</th>
                        {
                            props.userRole === 'tscuser' &&
                            <th></th>
                        } 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1001</td>
                        <td>Farmer One</td>
                        <td>000000000</td>
                        <td>1234-568-9012</td>
                        {
                            props.userRole === 'tscuser' &&
                            <td>
                                <button className="btn btn-sm btn-success">Update</button>
                            </td>
                        } 
                    </tr> 
                    <tr>
                        <td>1002</td>
                        <td>Farmer Two</td>
                        <td>000000000</td>
                        <td>1234-568-9012</td>
                        {
                            props.userRole === 'tscuser' &&
                            <td>
                                <button className="btn btn-sm btn-success">Update</button>
                            </td>
                        } 
                    </tr> 
                                      
                </tbody>
            </table>
        </>
    )
}