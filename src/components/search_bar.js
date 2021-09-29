import React, { Component } from 'react';
//JSX를 평범한 자바스크립트로 변환할 때마다 필요

class SearchBar extends Component{
  constructor(props) {
    super(props);

    this.state = { term: 'Starting Value'};
  }

  render () {
    //this.state.term = event.target.value로 쓸 수 없음!!!
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({term: event.target.value})} />
      </div>
    );
  }
}
export default SearchBar
