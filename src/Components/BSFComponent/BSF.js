import React, { useContext } from "react";
import ComponentContext from "../../Contexts/ComponentContext";

export default function BSF()
{
    const componentCtx = useContext(ComponentContext);
    const navigate = () =>{
        componentCtx.changeComponent(111);
    }
    return(
        <>
            <div className="container">
            <div className="row m-b-10">
                    <div className="col-8 col-sm-6 col-md-4 col-lg-2">
                        <div className="card" onClick={navigate}>
                            <img className="card-img-register" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-3.jpg" alt="Bologna" />
                            <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                <h5 className="card-title">Rearing Sheet</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col-sm-6 col-md-4 col-lg-2">
                        <div className="card" onClick={navigate}>
                            <img className="card-img-register" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-3.jpg" alt="Bologna" />
                            <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                <h5 className="card-title">Line Maintenance Record</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col-sm-6 col-md-4 col-lg-2">
                        <div className="card" onClick={navigate}>
                            <img className="card-img-register" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-3.jpg" alt="Bologna" />
                            <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                <h5 className="card-title">Daily Rearing Register</h5>                                
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col-sm-6 col-md-4 col-lg-2">
                        <div className="card" onClick={navigate}>
                            <img className="card-img-register" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-3.jpg" alt="Bologna" />
                            <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                <h5 className="card-title">Screening Batch Maintenance Record</h5>                                
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col-sm-6 col-md-4 col-lg-2">
                        <div className="card" onClick={navigate}>
                            <img className="card-img-register" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-3.jpg" alt="Bologna" />
                            <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                <h5 className="card-title">Invoice Book</h5>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}