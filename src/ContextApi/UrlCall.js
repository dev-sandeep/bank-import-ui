import Axios from 'axios'
import UseBaseContext from './../ContextApi/UseBaseContext'

function UrlCall() {
    const { setData, getData } = UseBaseContext();
    let companyName = 'apple';

    const BASE_URL = 'https://bokiotestbankapi.azurewebsites.net/api/' + companyName + '/Transactions/';

    function getCall() {
        let url = BASE_URL;
        return new Promise((resolve, reject) => {
            Axios.get(url).then((promise) => {
                resolve(promise.data);
            });
        })
    };


    function postCall(data, url) {
        url = BASE_URL + url;
        let params = {
            method: 'post',
            url,
            data
        };
        console.log(params);
        return new Promise((resolve, reject) => {
            Axios(
                params
            ).then((promise) => {
                resolve(promise.data);
            });
        })
    }


    return {
        postCall,
        getCall
    }
}

export default UrlCall;