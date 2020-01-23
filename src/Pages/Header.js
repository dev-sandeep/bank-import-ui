import React, { useState } from 'react'
import BrandLogo from './../Component/BrandLogo'
import UseBaseContext from './../ContextApi/UseBaseContext'
import UriCall from './../ContextApi/UrlCall'
function Header() {
    /* get the context instance */
    const { setData, getData } = UseBaseContext();
    const { getCall } = UriCall();
    //handle the search click button
    function companyChange(e) {
        getCall('').then(function (resp) {
            setData(resp, "mainData");
            //changing the app status, based on which the content will load in home page
            setData(3, "appStatus");
        });
    }

    const refresh = ()=>{
        window.location.reload(false);
    }

    return (<>
        <nav>
            <ul>
                <li className="icon">
                    <button className="btn-no-css" onClick={refresh}>
                    <BrandLogo />
                    </button>
                </li>
                <li className="select-comp">
                    <select className="select-opt" onChange={companyChange}>
                        <option value="null">None</option>
                        <option value="apple">Apple</option>
                    </select>
                </li>
            </ul>
        </nav>
    </>);
}

export default Header;