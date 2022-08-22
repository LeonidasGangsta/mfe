import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './coponents/Header';
import MarketingApp from './coponents/MarketingApp';

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <hr />
      <Route path="/" exact component={MarketingApp} />
    </BrowserRouter>
  );
};
