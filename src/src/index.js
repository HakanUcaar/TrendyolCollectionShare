import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./Redux/ReduxStore";
import { BrowserRouter, Route ,Switch } from 'react-router-dom'

const GetCollection = ({ match }) => {
  return <App collectionId={match.params.collectionId}></App> 
}
window.store = store;

ReactDOM.render(
  <Provider store={store}> 
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/:collectionId" component={GetCollection} />
      </Switch>
    </BrowserRouter>        
  </Provider>
  , document.getElementById('root')
);


serviceWorker.unregister();
