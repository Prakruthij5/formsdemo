import React from "react";
import  PropTypes from 'prop-types';

export default class Greeting extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <h1>Hello,{this.props.name}</h1>
        )
    }
}
Greeting.propTypes={
    name:PropTypes.string,
    time:PropTypes.string
}