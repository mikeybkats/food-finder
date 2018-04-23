import React, { Component } from 'react';

class Form extends Component {
  handleKeyPress(event) {
    if(event.charCode===13){
      event.preventDefault();
    }

  }

  render(){
    return(
      <div className="row around-xs find-food">
        <div className="col-sm-8 find-food-search">
          <div className="row start-xs">
            <div className="col-xs-12 col-sm-4">
              <h5>Find your food</h5>
            </div>
            <form className="col-xs-12 col-sm-8">
              <div className="col-xs-12">
                <input
                  type="text"
                  className="form-control" 
                  name="searchQuery"
                  placeholder="Search"
                  value={this.props.searchQuery}
                  onChange={this.props.handleChanges} 
                  onKeyPress={this.handleKeyPress}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
