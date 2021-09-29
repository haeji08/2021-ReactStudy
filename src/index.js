import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBI1UfuDbGm0qWOqkm_HQI3B7zWVfYXnKI';

//create a new component. This component should produce some html
const App = () =>{
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//Take this component's generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
