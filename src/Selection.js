import React, { Component } from 'react';

class Selection extends Component {
  loadSelection = (data) => {
    let nutrients= data.report.food.nutrients.map( (element, index) => {
      return(
        <div className="row around-xs results-box" key={index}>
          <div className="col-xs-6 col-sm-6">{element.name}</div>
          <div className="col-xs-6 col-sm-6">{element.value}{element.unit}</div>
        </div>
      );
    });
    let selection=
      <div name="selection" className="row around-xs result-item selection" >
        <div className="col-xs-6" ><h5>{data.report.food.name}</h5></div>
        <div className="col-xs-6">
          {nutrients}
        </div>
      </div>
    return(selection);
  }

  render(){
    let selection;
    if(this.props.searchSelection){
      selection = this.loadSelection(this.props.searchSelection);
    }
    return (
      <div className="selection-result">
        <div className="row around-xs">
          <div className="col-xs-12 col-sm-8">
            <h5>Selection</h5>
          </div>
        </div>
        <div className="row around-xs">
          <div className="food-table col-xs-12 col-sm-8">
            {selection} 
          </div>
        </div>
      </div>
    );
  }
}

export default Selection;
