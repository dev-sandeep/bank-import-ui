

import React, { useState, useEffect, setState } from 'react'
import UseBaseContext from './../ContextApi/UseBaseContext'
import UriCall from './../ContextApi/UrlCall'
import WarnIcon from './WarnIcon'
import { convertPrice } from './../Utility/Utility'

import Modal, { closeStyle } from 'simple-react-modal'
import { STATUS_PROCESS } from '../Utility/Constants'

function Table() {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [confirmModalVisibility, setConfirmModalVisibility] = useState(false);
    const { setData, getData } = UseBaseContext();
    const [localData, setLocaldata] = useState({});
    const { postCall } = UriCall();
    // const [formData, setFormData] = useState({});
    const closeModal = () => {
        setModalVisibility(false);
    }

    const closeConfirmDialog = () => {
        setConfirmModalVisibility(false);
    }

    //handles the click function of an action item in a row
    const clickStatus = (row, key) => {
        let selectedRow = {
            fromDate: row.cells[0].cleanedValue,
            toDate: row.cells[1].cleanedValue,
            details: row.cells[2].cleanedValue,
            balance: row.cells[3].cleanedValue,
            amount: row.cells[4].cleanedValue,
            id: row.index,
            key
        };
        //saving the data from temporarily
        setData(selectedRow, "selectedRow");
        setLocaldata(selectedRow);

        //check if the data already existing
        let param = {
            "transactions": [
                {
                    "id": selectedRow.id,
                    "date": selectedRow.fromDate,
                    "text": selectedRow.details,
                    "amount": parseFloat(convertPrice(selectedRow.amount))
                }
            ]
        }
        postCall(param, 'Preview').then((resp) => {
            if (resp[0].ignore) {
                setConfirmModalVisibility(true);
            } else {
                setModalVisibility(true);

            }
        });

    }

    //responsible for saving the reviewed data
    const saveRowData = () => {
        console.log("", localData);
        let param = [
            {
                "id": localData.id,
                "date": localData.fromDate,
                "text": localData.details,
                "amount": parseFloat(convertPrice(localData.amount))
            }
        ];

        postCall(param, '').then((resp) => {
            setData(resp, "mainData");
            setData(STATUS_PROCESS, "appStatus");
            //close the modal
            closeModal();

            //remove from the suggestion data
            let newData = getData("parseData");
            newData.rows = newData.rows.filter((item, key) => key != localData.key);
            setData(newData, "parseData");
        });
    }

    //use have confirmed that he/she wants to save the duplicate data
    const confirmSaveDuplicate = () => {
        setModalVisibility(true);
        closeConfirmDialog(false);
    }

    //gettin all the data for the given table
    let tblData = getData("parseData");
    /* all of the maon content goes here  */
    return (
        <section className="table-copmponent">

            <Modal show={modalVisibility} onClose={closeModal} transitionSpeed={500}>
                <section className="modal-body">
                    <div className="modal-title">Review</div>

                    <div className="modal-form-elems">
                        <div className="company-name">
                            {/* <label className="block-display">Date</label> */}
                            <input onChange={(e) => { setLocaldata({ ...localData, fromDate: e.target.value }) }} defaultValue={localData.fromDate} type="text" placeholder="date"></input>
                            <input onChange={(e) => { setLocaldata({ ...localData, details: e.target.value }) }} defaultValue={localData.details} type="text" placeholder="descriprion"></input>
                            <input onChange={(e) => { setLocaldata({ ...localData, amount: e.target.value }) }} defaultValue={localData.amount} type="text" placeholder="amount"></input>

                            <div className="button-submit">
                                <button type="submit" onClick={saveRowData} className="submit-btn">Submit</button>
                            </div>
                        </div>
                    </div>
                </section>
            </Modal>
            <Modal show={confirmModalVisibility} onClose={closeConfirmDialog} transitionSpeed={500}>
                <section className="modal-body">
                    <div className="modal-title">Data Already Existing</div>
                    <p>Are you sure you want to continue?</p>
                    <div className="modal-form-elems">
                        <div className="company-name">

                            <div className="button-submit">
                                <button type="submit" onClick={confirmSaveDuplicate} className="submit-btn">Yes</button>
                                <button type="submit" onClick={closeConfirmDialog} className="close-btn">Close</button>
                            </div>
                        </div>
                    </div>
                </section>
            </Modal>

            <div className="process-page-left">
                <p className="title">Suggestions</p>

                <div className="processed-tbl">
                    <table border="1" className="tbl tbl-standard">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Balance Date</th>
                                <th>Transaction Date</th>
                                <th>Details</th>
                                <th>Balance</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {tblData.rows.map((item, key) => (
                                <tr key={key}>
                                    <td>{item.index}</td>
                                    <td className="text-small">{item.cells[0].cleanedValue || 'NA'}</td>
                                    <td className="text-small">{item.cells[1].cleanedValue || 'NA'}</td>
                                    <td>{item.cells[2].cleanedValue || 'NA'}</td>
                                    <td>{item.cells[3].cleanedValue.replace(/ /g, '') || 'NA'}</td>
                                    <td>{item.cells[4].cleanedValue.replace(/ /g, '') || 'NA'}</td>
                                    <td>
                                        <button className='btn-no-css' onClick={() => clickStatus.apply(this, [item, key])}>  <WarnIcon /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section >
    );
}

export default Table;