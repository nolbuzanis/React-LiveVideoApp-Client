import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const pageOne = () => {
  return (
    <div>
      Page One
      <Link to='/pagetwo'>Navigate to page2</Link>
    </div>
  );
};

const pageTwo = () => {
  return (
    <div>
      Page Two
      <Link to='/'>Navigate to page1</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path='/' exact component={pageOne} />
          <Route path='/pagetwo' component={pageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
