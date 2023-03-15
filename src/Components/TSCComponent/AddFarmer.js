import React from "react";

export default function AddFarmer() {

    const onUpdateUser = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="container">
                <form className="register-form">
                    <table className="table add-farmer-table">
                        <tbody>   
                            <tr>
                                <td className="farmer-image" rowSpan={2}>   
                                    <img className="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-3.jpg" alt="Bologna" />
                                </td>
                                <td>
                                    <div className="form-group mt-3">
                                        <label>Farmer Id:</label>
                                        <input
                                            name="fid"
                                            type="input"
                                            readOnly
                                            className="form-control mt-1"
                                        />
                                    </div>
                                </td>
                                <td>
                                <div className="form-group mt-3">
                                        <label>EPIC No:</label>
                                        <input
                                            name="epicid"
                                            type="input"
                                            required
                                            className="form-control mt-1"
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="form-group mt-3">
                                        <label>Resham Crad No:</label>
                                        <input
                                            name="fmobile"
                                            type="input"
                                            required
                                            className="form-control mt-1"
                                            placeholder="Mobile Number"
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="form-group mt-3">
                                        <label>Aadhar No:</label>
                                        <input
                                            name="faadhar"
                                            type="input"
                                            required
                                            className="form-control mt-1"
                                            placeholder="AADHAR Number"
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr> 
                                <td>
                                <div className="form-group mt-3">
                                        <label>Name:</label>
                                        <input
                                            name="fname"
                                            type="input"
                                            required
                                            className="form-control mt-1"
                                            placeholder="Farmer Name"
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="form-group mt-3">
                                        <label>Father Name:</label>
                                        <input
                                            name="fmobile"
                                            type="input"
                                            required
                                            className="form-control mt-1"
                                            placeholder="Mobile Number"
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="form-group mt-3">
                                        <label>Mobile No:</label>
                                        <input
                                            name="faadhar"
                                            type="input"
                                            required
                                            className="form-control mt-1"
                                            placeholder="Mobile Number"
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="form-group mt-3">
                                        <label>Village</label>
                                        <input
                                            name="faadhar"
                                            type="input"
                                            required
                                            className="form-control mt-1"
                                            placeholder="Village"
                                        />
                                    </div>
                                </td>
                            </tr>
                        </tbody>                       
                    </table>
                    <div className="gap-2 mt-3" style={{textAlign:"center"}}>
                        <button type="submit" className="btn btn-primary" onClick={onUpdateUser}>
                            Update
                        </button>
                    </div>
                </form>
                <div className="d-grid-2 mt-3">
                    <div className="wrap-collabsible">
                        <input id="collapsible1" className="toggle" type="checkbox" />
                        <label htmlFor="collapsible1" className="lbl-toggle">Kuluvaru Register</label>
                        <div className="collapsible-content"><div className="content-inner">
                        </div>
                        </div>
                    </div>
                </div>
                <div className="d-grid-2 mt-3">
                    <div className="wrap-collabsible">
                        <input id="collapsible2" className="toggle" type="checkbox" />
                        <label htmlFor="collapsible2" className="lbl-toggle">Mulberry Statistics Register</label>
                        <div className="collapsible-content"><div className="content-inner">
                        </div>
                        </div>
                    </div>
                </div>
                <div className="d-grid-2 mt-3">
                    <div className="wrap-collabsible">
                        <input id="collapsible3" className="toggle" type="checkbox" />
                        <label htmlFor="collapsible3" className="lbl-toggle">Worm Test Register</label>
                        <div className="collapsible-content"><div className="content-inner">
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}