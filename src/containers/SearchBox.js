import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCity, loadCity, autocomplete,autocompleteDelete} from '../actions'
import ItemCity from '../components/ItemCity'

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
    this.setState({ text: e.target.value })
      console.log('e.target')
      console.log(e.target.value)
      console.log(this.state.text)
      const text = e.target.value
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
      this.setState({ text: '' })

  }


  render() {
    const { cities, auto } = this.props
      const autoList =auto ? auto.map((item) => <li key={item.id}><ItemCity item = {item} selectClick ={this.autocompleteClick.bind(this)}/> </li>) : null
      console.log('city')
      console.log(cities)
    return (
      <div>
        <form onSubmit ={this.searchSubmit.bind(this)} >
          <input value = {this.state.text} type='text' onChange={this.search.bind(this)}/>
            <ul>{ autoList }</ul>
          <button type="submit" >
            Add
          </button>
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
        console.log(auto)
        const { cities,auto } = state

  return { cities,auto }
},{addCity, loadCity, autocomplete,autocompleteDelete}
)(SearchBox)

