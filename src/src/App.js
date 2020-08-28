import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider  } from "@material-ui/styles";
import {createMuiTheme,responsiveFontSizes } from "@material-ui/core";
import Main from './Components/Main';
import CssBaseline from '@material-ui/core/CssBaseline';
import Switch from '@material-ui/core/Switch';

import { withSnackbar } from 'notistack';
import { readCollection,loadingCollection,loadedCollection } from "./Redux/ReduxActions";

const CollectionServ = require('./Services/CollectionService');

export class App extends Component {
  constructor(){
    super();

    this.state={
      switchCheck:false,
      theme : {
        palette: {
          type: "light"
        }
      }
    }
  }

   toggleDarkTheme = () => {
    let newPaletteType = this.state.theme.palette.type === "light" ? "dark" : "light";
    this.setState({
      theme:{
        palette: {
          type: newPaletteType
        }
      }
    });
  };

  handleSwitchChange = (event) => {
    this.toggleDarkTheme()
    this.setState({switchCheck:event.target.checked});
  };

  async componentDidMount(){
    try {
      console.log(window.location);
      this.props.loadingCollection();     
      if(this.props.collectionId !== undefined && this.props.collectionId !== "")
      {             
        
        let data = await CollectionServ.getCollection(this.props.collectionId);
        if(data){
          console.log(data);
          this.props.readCollection(data);  
        }     
      }  
    } catch (error) {
      this.props.enqueueSnackbar("Veri bulunumadı",{ 
        variant: 'error',
      });
    }
    finally{
      this.props.loadedCollection();
    }    
  }
  
  render() {
    const muiTheme = createMuiTheme(this.state.theme);
    const theme = responsiveFontSizes(muiTheme);
    if(!this.props.IsFetching) this.props.loadedCollection(); else this.props.loadingCollection()

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Switch
          checked={this.state.switchCheck}
          onChange={this.handleSwitchChange}
        />          
        <Main/>     
      </ThemeProvider> 
    )
  }
}

function mapStateToProps(state) {
  return { 
    MyCollection: state.MyCollection, 
    Link : state.Link,
    IsFetching: state.IsFetching,
    IsReadCollectionData : state.IsReadCollectionData
  };  
}

const mapDispatchToProps = (dispatch) => {
  return {
    readCollection: Todos => dispatch(readCollection(Todos)),
    loadingCollection:Todos => dispatch(loadingCollection(Todos)),
    loadedCollection:Todos => dispatch(loadedCollection(Todos)),
  }
}

const AppSnack = withSnackbar(App);
export default connect(mapStateToProps, mapDispatchToProps)(AppSnack)
