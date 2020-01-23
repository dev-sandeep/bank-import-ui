

import React, { useState, useEffect, setState } from 'react'
import UseBaseContext from '../ContextApi/UseBaseContext'
import UriCall from '../ContextApi/UrlCall'
import WarnIcon from './WarnIcon'

import Modal, { closeStyle } from 'simple-react-modal'

function MainTable() {
    const { setData, getData } = UseBaseContext();

    //gettin all the data for the given table
    let tblData = getData("mainData");
    /* all of the maon content goes here  */
    return (
        <section className="table-copmponent">
            <div className="process-page-left">
                <p className="title">Final Data</p>

                <div className="processed-tbl">
                    <table border="1" className="tbl tbl-standard">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>

                            {tblData.map((item, key) => (
                                <tr key={key}>
                                    <td>{item.id}</td>
                                    <td>{item.date}</td>
                                    <td>{item.text}</td>
                                    <td>{item.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section >
    );
}

export default MainTable;