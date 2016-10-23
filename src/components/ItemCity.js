import React, { Component } from 'react';
import { autocompleteDelete} from '../actions'
import { connect } from 'react-redux';
import { FormControl,Button, Grid ,Col, Row, Panel} from 'react-bootstrap';
 class Itemcity extends Component {
    render(){
        const {item, selectClick} = this.props
        return (
            <div className = "item-city" onClick = {this.handlerClick.bind(this)}>{item.city }</div>

        )
    }

    handlerClick(){
        const {item, selectClick,autocompleteDelete} = this.props
        selectClick(item.city)
        autocompleteDelete()
    }

}
export default connect((state) =>{
        console.log('state-itemcity')
        console.log(state)
        const { cities,auto } = state

        return { cities,auto }
    },{autocompleteDelete}
)(Itemcity)

