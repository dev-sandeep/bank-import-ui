

import React, { useState, useEffect, setState } from 'react'
import UseBaseContext from './../ContextApi/UseBaseContext'
import UriCall from './../ContextApi/UrlCall'
import BrandLogo from './BrandLogo'
import { STATUS_INIT } from '../Utility/Constants'
function MainForm() {
    /* get the context instance */
    const { setData, getData } = UseBaseContext();
    const [localData, setLocaldata] = useState('');
    const { postCall } = UriCall();

    const onSubmit = () => {
        /* make a POST query */
        let param = {
            text: localData.csv
        }

        postCall(param, 'Parse').then((resp) => {
            setData(resp, "parseData");
            //changing the app status, based on which the content will load in home page
            setData(STATUS_INIT, "appStatus");

            //set the companyname in the global variable
            // setData(localData.company, "company");
        });
    }

    /* all of the main content goes here  */
    return (
        <section className="main-form-copmponent">
            <div className="start-form">
                <div className="title-icon">
                    <BrandLogo />
                </div>
                <div className="detail-text">
                    Copy and paste your transaction from bank account, and let the magic begin!
                            </div>

                <div className="form-elems">
                    <div className="company-name">
                        <label className="block-display">Company</label>
                        <input disabled type="text" value="apple" onChange={(e) => { setLocaldata({ ...localData, company: e.target.value }) }} placeholder="Your beautiful company name."></input>
                    </div>
                    <div className="textarea">
                        <label className="block-display">CSV Transaction text</label>
                        <textarea onChange={(e) => { setLocaldata({ ...localData, csv: e.target.value }) }} rows="10" placeholder="CSV text" />
                    </div>
                    <div className="button-submit">
                        <button type="submit" onClick={onSubmit} className="submit-btn">Submit</button>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default MainForm;