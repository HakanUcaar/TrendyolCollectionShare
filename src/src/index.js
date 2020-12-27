import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import EmbedCollectionList from '../src/Components/EmbedCollectionList';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./Redux/ReduxStore";
import { Route ,Switch, HashRouter,Redirect } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

const GetCollection = ({ match }) => {
  return <App collectionId={match.params.collectionId}></App> 
}
const GetEmbedCollection = ({ match }) => {
  return <EmbedCollectionList collectionId={match.params.collectionId}></EmbedCollectionList> 
}

window.store = store;

ReactDOM.render(
  <Provider store={store}> 
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/:collectionId" component={GetCollection}/>
          <Route exact path="/embed/:collectionId" component={GetEmbedCollection}/>
          <Route path = "*" component={App}/>
          <Redirect to="/" />
        </Switch>
      </HashRouter>   
    </SnackbarProvider>        
  </Provider>
  , document.getElementById('root')
);


serviceWorker.unregister();
