import React, { useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import MovieList from './Movies/MovieList';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Router exact path="/" exact component={MovieList} />
    </div>
  );
};

export default App;
