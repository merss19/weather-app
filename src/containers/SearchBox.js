import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCity,loadCity } from '../actions'
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
    this.setState({ text: e.target.value })

  }

  save(text){
    console.log('save')
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
      this.setState({ text: '' })

  }

  render() {
    const { city, addCity } = this.props
      console.log('city')
      console.log(city)
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
        const { city } = state
  return { city}
},{addCity,loadCity}
)(SearchBox)

