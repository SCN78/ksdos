import React, { useContext } from "react";
import ComponentContext from '../../Contexts/ComponentContext';
import './Unit1.css';

export default function Unit1(){
    const componentCtx = useContext(ComponentContext);
    const navigate = () =>{
        componentCtx.changeComponent(1);
    }
    return(
        <>
            <button className="btn btn-success" onClick={navigate}>Navigate</button>
        </>
    )

}

{/* <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                        <div className="card" onClick={navigate}>
                            <img className="card-img" src="https://assets.codepen.io/460692/internal/avatars/users/default.png" alt="Cologna" />
                                <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                    <h4 className="card-title">Cross Breed Grainages</h4>
                                    <h6 className="card-subtitle mb-2">Emilia-Romagna Region, Italy</h6>
                                    <p className="card-text">It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people. </p>
                                    <div className="link d-flex">
                                        <a href="#" className="card-link text-warning">Read More</a>
                                        <a href="#" className="card-link text-warning">Book a Trip</a>
                                    </div>
                                </div>
                        </div>
                    </div> */}