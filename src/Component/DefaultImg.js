

import React, { useState, useEffect, setState } from 'react'
import UseBaseContext from '../ContextApi/UseBaseContext'
import UriCall from '../ContextApi/UrlCall'
import {IMAGE_DEFAULT} from './../Utility/Constants'

function DefaultImg() {


    /* all of the maon content goes here  */
    return (
        <section className="defaultimg-copmponent">
            <img className="left-img" src={IMAGE_DEFAULT} />
        </section >
    );
}

export default DefaultImg;