import React from "react";

export default function AddFarmer() {

    const onAddFarmer = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="container">
                <form className="register-form">
                    <div className="register-form-content">
                        <h3 className="register-form-title">Rearing Sheet</h3>
                        <div class="row">
                            <div class="col-md-2">
                                <div class="well" style={{height:10,width:20}}>
                                <img src="%PUBLIC_URL%/favicon.ico" class="img-circle" />
                                </div>
                            </div>
                            <div class="col-md-10">
                                <div class="row">
                                    <div className="col-md-3 col-lg-3">
                                        <div className="form-group">
                                            <label>Farmer Id</label>
                                            <input
                                                name="fid"
                                                type="input"
                                                required
                                                className="form-control"
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-lg-3">
                                        <div className="form-group">
                                            <label>Fruit Id</label>
                                            <input
                                                name="fid"
                                                type="input"
                                                required
                                                className="form-control"                                                
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-3 col-lg-3">
                                        <div className="form-group ">
                                            <label>Aadhar No:</label>
                                            <input
                                                name="fid"
                                                type="input"
                                                required
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-3 col-lg-3">
                                        <div className="form-group">
                                            <label>Mobile No:</label>
                                            <input
                                                name="fid"
                                                type="input"
                                                required
                                                className="form-control"
                                            />
                                        </div>
                                    </div>


                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="well">2</div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="well">2</div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="well">2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="well">6</div>
                            </div>
                            <div class="col-md-4">
                                <div class="well">7</div>
                            </div>
                            <div class="col-md-4">
                                <div class="well">8</div>
                            </div>
                        </div>

                        <div className="d-grid gap-2 mt-3 j-c-c" >
                            <button type="submit" className="btn btn-primary btn-lg" onClick={onAddFarmer}>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )


}