import React, { useState } from "react";


export default function RSForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onLogin = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="container">
                <form className="register-form">
                    <div className="register-form-content">
                        <h3 className="register-form-title">Rearing Sheet</h3>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="form-group mt-3">
                                    <label>Lot number</label>
                                    <input
                                        name="lot"
                                        type="email"
                                        required
                                        className="form-control mt-1"
                                        placeholder="Enter Lot number"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="form-group mt-3">
                                    <label>Laid on (L/O) date</label>
                                    <input
                                        name="lod"
                                        type="date"
                                        required
                                        className="form-control mt-1"
                                        placeholder="Enter Laid on date"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="form-group mt-3">
                                    <label>Brushing date</label>
                                    <input
                                        name="brushingdated"
                                        type="date"
                                        required
                                        className="form-control mt-1"
                                        placeholder="Enter Brushing date"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="form-group mt-3">
                                    <label>Spun on (S/O) date</label>
                                    <input
                                        name="Spunondate"
                                        type="date"
                                        required
                                        className="form-control mt-1"
                                        placeholder="Enter Spun on date"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row"> 
                            <div className="col-lg-3">
                                <div className="form-group mt-3">
                                    <label>Relative temperature and humidity</label>
                                    <input
                                        name="RTAH"
                                        type="number"
                                        required
                                        className="form-control mt-1"
                                        placeholder="Enter Relative temperature and humidity"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>                            
                        </div>

                        <div className="d-grid gap-2 mt-3 j-c-c" >
                            <button type="submit" className="btn btn-primary btn-lg" onClick={onLogin}>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}