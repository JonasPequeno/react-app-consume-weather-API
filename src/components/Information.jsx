import React from 'react';
import './Information.css'

export default (props) => {
    return (
        <div className="card">
            {/* <img src={require('../images/rain.png')} alt="" /> */}
            <h4>{props.label}: {props.value} {props.medida}</h4>
        </div>
    )

}