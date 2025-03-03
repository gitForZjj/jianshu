import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import { GlobalStyle } from './style'
import { GlobalFont } from './statics/iconfont/iconfont'
import Home from './pages/home';
import Detail from './pages/detail'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <GlobalFont />
      <Header ></Header>
      <BrowserRouter>
        <div>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
