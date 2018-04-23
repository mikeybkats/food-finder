import React, { Component } from 'react';
import Form from './Form.js';
import Results from './Results.js';
import Selection from './Selection.js';
import API_TOKEN from './API_TOKEN.js';

class FoodFinder extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchQuery: '',
      searchSelection: '',
      searchText: '',
      error: '',
      isLoaded: false,
      items: [],
      itemsToShow: 6,
      selection: []
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
  }

  makeSearchRequest = () => {
    let baseURL = "https://api.nal.usda.gov/ndb/";
    let item = this.state.searchQuery;
    let search = "search/";
    let format = "?format=json"; 
    let param = "&ds=Standard Reference&q=";
    let apiKey = "&api_key=" + API_TOKEN;
    let searchURL = baseURL + search + format + param + item + apiKey;
    fetch(searchURL)
    .then(res => res.json())
    .then(
      (result) => {
        if(!result.error){
          this.setState({
            isLoaded: true,
            items: result.list
          });
        }
        if(result.errors){
          console.log(result.errors.error[0].message);
          this.setState({
            isLoaded: false,
            error: result.errors.error[0].message
          });
        }
      }
    )    
  }

  makeSearchSelection = () => {
    let baseURL = "https://api.nal.usda.gov/ndb/";
    let search = "reports/";
    let format = "?format=json"; 
    let param = "&ndbno=";
    let target = this.state.selection;
    let apiKey = "&api_key=" + API_TOKEN;
    let searchURL = baseURL + search + format + param + target + apiKey;
    fetch(searchURL)
    .then(res => res.json())
    .then(
      (result) => {
        if(!result.error){
          if(result === undefined){
            result = 0;
          }
          this.setState({
            searchSelection: result
          });
        }
        if(result.errors){
          //console.log(result.errors.error[0].message);
          this.setState({
            isLoaded: false,
            error: result.errors.error[0].message
          });
        }
      }
    )    
  }

  handleChanges = (event) => {
    event.preventDefault();
    this.handleSearchBox(event);
  }
  
  showMore = (event) => {
    let newNumOfItemsToShow = this.state.itemsToShow + 6;
    this.setState({
      itemsToShow: newNumOfItemsToShow
    });
  }

  handleSearchBox = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      itemsToShow: 6
    }, () => {
        this.makeSearchRequest();
    });
  }

  handleClickSearch = (event) => {
    event.preventDefault();
    this.setState({
      selection: event.target.getAttribute('value')
    }, () => {
        this.makeSearchSelection();
    });
  }

  render(){
    return (
      <div>
        <Form handleChanges={this.handleChanges} 
              searchQuery={this.state.searchQuery} 
        /> 
        <Results handleClickSearch={this.handleClickSearch} 
                 resultsData={this.state.items}
                 itemsToShow={this.state.itemsToShow}
                 showMore={this.showMore}
                 isLoaded={this.state.isLoaded}
                 error={this.state.error}
        />
        <Selection searchSelection={this.state.searchSelection}
        />
      </div>
    );
  }
}

export default FoodFinder;
