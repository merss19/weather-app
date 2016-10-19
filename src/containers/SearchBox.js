import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCity } from '../actions'
//import { searchCity, addCities, getLocation } from '../actions';
//import Search from '../components/Search';
//import SearchedCity from '../components/SearchedCity';
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
    console.log('search')
    console.log(this.state.text)
    this.setState({ text: e.target.value })

  }

  save(text){
    console.log('save')
    if (text.length !== 0) {
      this.props.addCity(text)
    }
  }

  searchSubmit(e){
    e.preventDefault()
    console.log('searchSubmit')
    const text = this.state.text
    console.log(this.state.text)
    this.save(text)
      this.setState({ text: '' })

  }

  render() {
    const { addCity } = this.props
    return (
      <div>
        <form onSubmit ={this.searchSubmit.bind(this)} >
          <input value = {this.state.text} type='text' onChange={this.search.bind(this)}/>
          <button type="submit" >
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default connect((state) =>{
  const { cities} = state
  return {cities}
},{addCity}
)(SearchBox)
//export default connect(stateToProps, { searchCity, addCities, getLocation })(SearchContainer);
