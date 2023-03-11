import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Contexts/AuthContext';
import ComponentContext from '../../Contexts/ComponentContext';
import './DashBoard.css'

function DashBoard(){
    const authCtx = useContext(AuthContext);
    const componentCtx = useContext(ComponentContext);
    const [text,updateText] = useState('English');    

    useEffect(()=> {
        // if(authCtx.isEnglish){
        //     updateText('English')
        // }
        // else{
        //     updateText('ಕೊರೋನಾ ಬಗ್ಗೆ ಮಾಹಿತಿ ')
        // }
    },[authCtx.isEnglish]);
    const navigate = (id) =>{
        componentCtx.changeComponent(11);
    }
    return (
        <>         
            <div className="container">
                <div className="row m-b-10">
                    <div className="col-8 col-sm-6 col-md-4 col-lg-3">
                        <div className="card" onClick={navigate} >
                            <img className="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-3.jpg" alt="Bologna" />
                                <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                    <h4 className="card-title">Basic Seed Farm</h4>
                                    <h6 className="card-subtitle mb-2">Kunigal</h6>                                    
                                </div>
                        </div>
                    </div>
                    <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                        <div className="card" onClick={navigate}>
                            <img className="card-img" src="https://assets.codepen.io/460692/internal/avatars/users/default.png" alt="Cologna" />
                                <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                    <h4 className="card-title">Grainages </h4>
                                    <h6 className="card-subtitle mb-2">(P3,P2,P1)-Mysorerace</h6>                                    
                                </div>
                        </div>
                    </div>
                    <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                        <div className="card" onClick={navigate}>
                            <img className="card-img" src="https://assets.codepen.io/460692/internal/avatars/users/default.png" alt="Cologna" />
                                <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                    <h4 className="card-title">Seed Farms </h4>
                                    <h6 className="card-subtitle mb-2">(P4,P3)</h6>                                    
                                </div>
                        </div>
                    </div>
                    <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                        <div className="card" onClick={navigate}>
                            <img className="card-img" src="https://assets.codepen.io/460692/internal/avatars/users/default.png" alt="Cologna" />
                                <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                    <h4 className="card-title">Cocoon Market</h4>
                                    <h6 className="card-subtitle mb-2">(Commercial,Seed)</h6>                                   
                                </div>
                        </div>
                    </div>                    
                </div>
                
                <div className="row m-b-10">
                    <div className="col-8 col-sm-6 col-md-4 col-lg-3">
                        <div className="card" onClick={navigate}>
                            <img className="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-3.jpg" alt="Bologna" />
                            <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                <h4 className="card-title">Technical Service Centre</h4>
                                <h6 className="card-subtitle mb-2">(General &Seed Area- MSC &BV)</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col-sm-6 col-md-4 col-lg-3">
                        <div className="card" onClick={navigate}>
                            <img className="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-3.jpg" alt="Bologna" />
                            <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                <h4 className="card-title">Technical Service Centre</h4>
                                <h6 className="card-subtitle mb-2">(Reeling)</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col-sm-6 col-md-4 col-lg-3">
                        <div className="card" onClick={navigate}>
                            <img className="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-3.jpg" alt="Bologna" />
                            <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                <h4 className="card-title">Silk Exchange</h4>                                
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col-sm-6 col-md-4 col-lg-3">
                        <div className="card" onClick={navigate}>
                            <img className="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-3.jpg" alt="Bologna" />
                            <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                <h4 className="card-title">Sericulture Training Institutes</h4>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )

}

export default DashBoard;