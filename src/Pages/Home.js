import React, { useState, setState, useEffect } from 'react'
import UseBaseContext from './../ContextApi/UseBaseContext'
import MainForm from './../Component/MainForm'
import Table from './../Component/Table'
import MainTable from './../Component/MainTable'
import DefaultImg from '../Component/DefaultImg'

function Home() {
    /* get the context instance */
    const { getData } = UseBaseContext();
    
    let status = getData("appStatus");
    console.log("status", status);
    /* all of the maon content goes here  */
    return (
        <section className="home-page">
            <div className="main-container">
                { /* All great things starts from here */}
                <div className="outer">

                    <div className="half">
                        {status == 1 || status == 2 ? <Table />: <DefaultImg /> }
                    </div>
                    <div className="half">
                        {status == 2 || status == 3 ? <MainTable />: <MainForm /> }
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Home;