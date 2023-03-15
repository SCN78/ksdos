import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Contexts/AuthContext';
import ComponentContext from '../../Contexts/ComponentContext';
import './DashBoard.css';
import appComponents from '../../Services/AppService';

function DashBoard(){
    const authCtx = useContext(AuthContext);
    const componentCtx = useContext(ComponentContext);
    const [text,updateText] = useState({
        BSF:"Basic Seed Farm",
        KNGL:"Kunigal"
    });    

    useEffect(()=> {
        if(authCtx.isEnglish){
            updateText({
                BSF:"Basic Seed Farm",
                KNGL:"Kunigal",
                GRNG:"Grainages",
                MSRS:"Mysorerace ",
                SDFM:"Seed Farms",
                CCNMRKT:"Cocoon Market",
                TSC:"Technical Service Centre",
                RLNG:"Reeling",
                SLKExng:"Silk Exchange",
                SCTI:"Sericulture Training Institutes"
            })
        }
        else{
            updateText({
                BSF:"ಬೇಸಿಕ್ ಸೀಡ್ ಫಾರ್ಮ್",
                KNGL:"ಕುಣಿಗಲ್ ",
                GRNG:"ಗ್ರಾಯಿನಾಗೇಶ್ ",
                MSRS:"ಮೈಸೂರೇರಸ್ ",
                SDFM:"ಸೀಡ್ ಫಾರ್ಮ್ಸ್ ",
                CCNMRKT:"ಕಕೂನ್ ಮಾರ್ಕೆಟ್ ",
                TSC:"ಟೆಕ್ನಿಕಲ್ ಸರ್ವಿಸ್ ಸೆಂಟರ್",
                RLNG:"ರೀಲಿಂಗ್",
                SLKExng:"ಸಿಲ್ಕ್ ಎಕ್ಸ್ಚೇಂಜ್",
                SCTI:"ಸೇರಿಚುಲ್ಟುರೆ ಟ್ರೇನಿಂಗ ಇನ್ಸ್ಟಿಟ್ಯುಟ್ಸ್   "
            })
        }
    },[authCtx.isEnglish]);
    const navigate = (id) =>{
        componentCtx.changeComponent(1000);
    }
    return (
        <>         
            <div className="container">
                <div className="row m-b-10">
                    <div className="col-8 col-sm-6 col-md-4 col-lg-3">
                        <div className="card" onClick={navigate} >
                            <img className="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-3.jpg" alt="Bologna" />
                                <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                    <h4 className="card-title">{text.BSF}</h4>                                                                       
                                </div>
                        </div>
                    </div>
                    <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                        <div className="card" onClick={navigate}>
                            <img className="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-3.jpg" alt="Cologna" />
                                <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                    <h4 className="card-title">{text.GRNG}</h4>
                                    <h6 className="card-subtitle mb-2">(P3,P2,P1)-{text.MSRS}</h6>                                    
                                </div>
                        </div>
                    </div>
                    <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                        <div className="card" onClick={navigate}>
                            <img className="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-3.jpg" alt="Cologna" />
                                <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                    <h4 className="card-title">{text.SDFM} </h4>
                                    <h6 className="card-subtitle mb-2">(P4,P3)</h6>                                    
                                </div>
                        </div>
                    </div>
                    <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                        <div className="card" onClick={navigate}>
                            <img className="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-3.jpg" alt="Cologna" />
                                <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                    <h4 className="card-title">{text.CCNMRKT}</h4>
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
                                <h4 className="card-title">{text.TSC}</h4>
                                <h6 className="card-subtitle mb-2">(General &Seed Area- MSC &BV)</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col-sm-6 col-md-4 col-lg-3">
                        <div className="card" onClick={navigate}>
                            <img className="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-3.jpg" alt="Bologna" />
                            <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                <h4 className="card-title">{text.TSC}</h4>
                                <h6 className="card-subtitle mb-2">(Reeling)</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col-sm-6 col-md-4 col-lg-3">
                        <div className="card" onClick={navigate}>
                            <img className="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-3.jpg" alt="Bologna" />
                            <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                <h4 className="card-title">{text.SLKExng}</h4>                                
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col-sm-6 col-md-4 col-lg-3">
                        <div className="card" onClick={navigate}>
                            <img className="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-3.jpg" alt="Bologna" />
                            <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                <h4 className="card-title">{text.SCTI}</h4>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )

}

export default DashBoard;