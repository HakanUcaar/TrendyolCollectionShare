import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles,createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CollectionList2 from './CollectionList2';
import { readCollection,loadingCollection,loadedCollection } from "../Redux/ReduxActions";

const CollectionServ = require('../Services/CollectionService');
const theme = createMuiTheme();
const useStyles = {
    root:{
        display:"flex"
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    lvl1:{
        // height: "100vh",
        position:"relative",
        overflow :"hidden !important",
        flexGrow : "1",
        display:"flex",
        flexDirection:"column"
    },
    lvl2:{
        position: "relative",
        flexGrow: "1"
    },
    lvl3:{
        margin: "30px"
    },
    scrolableContainer:{
        height: "100% !important",
        position: "relative",
        flexGrow: "1",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden!important"
    },
    conteiner:{
        marginTop:"10px"
    },
    paper:{
        height: "100% !important",
        display: "flex",
        flexDirection: "column"
    },
    cardTop:{
        textAlign: "center",
        position: "relative",
        '&:hover': {
            '& $cardOverlay': {
                opacity: 1,
            }
        }
    },
    cardBottom:{
        paddingTop: "0.5rem !important",
        paddingBottom: "0.5rem !important",
        textAlign: "center"
    },
    Img:{
        width: "100%",
        display: "block !important"
    },
    cardOverlay:{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0,
        zIndex: 2,
        position: "absolute",
        background: "rgba(0, 0, 0, 0.67)",
        transition: "all 250ms ease-in-out",
        display: "flex",
        flexDirection: "column"
    },
    overlayHead:{
        alignItems: "center",
        justifyContent: "space-between !important",
        display: "flex",

    },
    overlayContent:{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },
    cardTool:{
        display: "flex",
        alignItems: "center"
    },
    iconColor:{
        color: "rgba(255, 255, 255, 1) !important",
        cursor: "pointer"
    },
    textWhite:{
        color :"rgba(255, 255, 255, 1) !important"
    },
    detailButton:{
        color :"rgba(255, 255, 255, 1) !important",
        border: "1px solid rgba(0, 0, 0, 0.23)",
        borderColor: "#ffffff !important",
        padding: "5px 15px"
    }
};


class EmbedCollectionList extends Component {
    async componentDidMount(){
        try {
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
        return (
            <Container maxWidthXl>
                <CollectionList2 handleOpen={this.handleDetailOpen}></CollectionList2> 
            </Container>
        );
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

const EmbedCollectionListComponent = withStyles(useStyles)(EmbedCollectionList);
export default connect(mapStateToProps, mapDispatchToProps)(EmbedCollectionListComponent)
