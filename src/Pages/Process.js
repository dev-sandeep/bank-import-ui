import React, { useState, useEffect, setState } from 'react'
import UseBaseContext from './../ContextApi/UseBaseContext'
import UriCall from './../ContextApi/UrlCall'
import MainForm from '../Component/MainForm'
import Table from '../Component/Table'

function Process() {
    /* get the context instance */
    const { getData } = UseBaseContext();
    const { defaultCall } = UriCall();
    const [data, setData] = useState([]);

    /* load the data by default */
    useEffect(() => {
        //component did mount
        defaultCall().then((data) => {
            setData(data);
        });
    }, []);//the [] is useful to load the data only once

    /* all of the maon content goes here  */
    return (
        <section className="home-page">
            <div className="main-container">
                <div className="outer">
                    <div className="half">
                        {/* The table goes here */}
                        <Table />
                    </div>
                    <div className="half">
                        <MainForm />
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Process;