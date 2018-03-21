import React, { Component } from 'react';

class Results extends Component {
  handleClick = (event) => {
    this.props.handleClickSearch(event);
  }

  generateResults = (data) => {
    if(data !== undefined && data.item !== undefined){
      let results =
        data.item.slice(0, 6).map( (element, index) => {
          return (
            <div name="selection"
                  className="row around-xs result-item" 
                  key={index}
                  value={element.ndbno}
                  onClick={this.handleClick}
              >
              <div className="col-xs-12 col-sm-6 no-pointer" value={element.ndbno}>{element.name}</div>
              <div className="col-xs-12 col-sm-4 no-pointer" value={element.ndbno}>{element.group}</div>
            </div>
          )});
      //console.log(results);
      return ( results );  
    }
    else{
      return this.props.error;
    }
  }

  render() {
    let results = this.generateResults(this.props.resultsData);
    return (
      <div>
        <div className="row around-xs">
          <div className="col-xs-12 col-sm-8">
            <h5>Results</h5>
          </div>
        </div>
        <div className="row around-xs">
          <div className="food-table col-xs-12 col-sm-8">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                name
              </div>
              <div className="col-xs-12 col-sm-6">
                group
              </div>
            </div>
            <div className="results-box">
              {results}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
