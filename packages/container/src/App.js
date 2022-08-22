import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Header from './coponents/Header';
import MarketingApp from './coponents/MarketingApp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={MarketingApp} />
      </BrowserRouter>
    </StylesProvider>
  );
};
