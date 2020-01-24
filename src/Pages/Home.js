import React from 'react'
import UseBaseContext from './../ContextApi/UseBaseContext'
import MainForm from './../Component/MainForm'
import Table from './../Component/Table'
import MainTable from './../Component/MainTable'
import DefaultImg from '../Component/DefaultImg'
import {STATUS_INIT, STATUS_PROCESS, STATUS_TRANSACTION} from '../Utility/Constants'


function Home() {
    /* get the context instance */
    const { getData } = UseBaseContext();

    let status = getData("appStatus");
    // console.log("status", status);
    /* all of the maon content goes here  */
    return (
        <section className="home-page">
            <div className="main-container">
                { /* All great things starts from here */}
                <div className="outer">

                    <div className="half">
                        {status === STATUS_INIT || status === STATUS_PROCESS ? <Table /> : <DefaultImg />}
                    </div>
                    <div className="half">
                        {status === STATUS_PROCESS || status === STATUS_TRANSACTION ? <MainTable /> : <MainForm />}
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Home;