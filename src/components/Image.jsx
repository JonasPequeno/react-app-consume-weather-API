import React from 'react';
import './Image.css'

export default (props) => {
    return (
        <img src={require(`../images/${props.name}.png`)} alt="" />
    )

}