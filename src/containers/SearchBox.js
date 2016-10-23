import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCity, loadCity, autocomplete,autocompleteDelete} from '../actions'
import ItemCity from '../components/ItemCity'
import { FormControl,Button, Grid ,Col, Row} from 'react-bootstrap';

console.log('add')
console.log(addCity)
 class SearchBox extends Component {
  constructor(props) {
    super(props)
      this.state = {
          text:''
    }
  }

  search(e){
      e.preventDefault()
    this.setState({ text: e.target.value.trim() })

      const text = e.target.value.trim()
      this.autocomplete(text)
  }
     autocomplete(text){
         console.log('autocomplete-sb')
         console.log(text)
         if (text.length !== 0) {
             this.props.autocomplete(text)
         }
     }

  save(text){
    console.log('sav')
      console.log(text)
      console.log('save-text')
      console.log(this.state.text)
    if (text.length !== 0) {
      //this.props.addCity(text)
        this.props.loadCity(text)
    }

  }

  searchSubmit(e){
    e.preventDefault()
    console.log('searchSubmit')
    const text = this.state.text
    console.log(this.state.text)
    this.save(text)
    this.props.autocompleteDelete()
    this.setState({ text: '' })

  }


  render() {
    const { cities, autoObj } = this.props
      const autoItem =autoObj.id ?  <ItemCity item = {autoObj} selectClick ={this.autocompleteClick.bind(this)}/> : null
      console.log('city')
      console.log(autoObj.id)
      console.log(cities)
    return (
      <div className="search-box">
        <form onSubmit ={this.searchSubmit.bind(this)} >


                <Row className="show-grid search-box__line">

                    <Col xs={8}>
                        <FormControl
                            value = {this.state.text}
                            placeholder="Enter city"
                            type='text'
                            onChange={this.search.bind(this)}
                        />
                        { autoItem }
                    </Col>

                    <Col xs={4}>
                        <Button bsStyle="primary" className="search-box__btn" type="submit">Add city</Button>
                    </Col>

                </Row>

        </form>
      </div>
    );
  }
     autocompleteClick(city){
         console.log('autocompleteClick')
         console.log(city)
         this.setState({ text: city })


     }
}
export default connect((state) =>{
        console.log('state-59')
        console.log(state)
        const { cities,auto } = state
        const autoObj = auto.toJS()
      return { cities,autoObj }
},{addCity, loadCity, autocomplete,autocompleteDelete}
)(SearchBox)

