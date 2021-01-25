import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles,createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CollectionList2 from './CollectionList2';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import ShareIcon from '@material-ui/icons/Share';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import copy from 'copy-to-clipboard';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import CollectionItemDetail from './CollectionItemDetail';
import ItemImagesModel from '../Models/ItemImagesModel';
import CollectionItemModel from '../Models/CollectionItemModel';
import TrendyolModel from '../TrenyolModels/TrendyolModel';
import { withSnackbar } from 'notistack';

import { readCollection,loadingCollection,loadedCollection } from "../Redux/ReduxActions";

const CollectionServ = require('../Services/CollectionService');
const theme = createMuiTheme();
const useStyles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    Tile : {
        minHeight: '400px',
        //height: '100% !important'
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
        height:"100%",
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
    },
    scrolableContainer:{
        height: "100% !important",
        position: "relative",
        flexGrow: "1",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden!important"
    },
};


class EmbedCollectionList extends Component {
    constructor(){
        super();

        this.state={
            Link : "",
            DetailOpen : false,
            CurrentItem : null
        }
    }

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
    handleDetailClose=()=>{
        this.setState({DetailOpen:false});
    }
    handleDetailOpen=(e,p)=>{
        this.setState({CurrentItem: p,DetailOpen:true});
    }
    handleOpenLink=(e,p)=>{
        e.preventDefault();
        window.open(p);
    }
    handleCopyUrl=(e,p)=>{
        e.preventDefault();
        copy(p);        
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Backdrop className={classes.backdrop} open={this.props.IsFetching}>
                    <CircularProgress color="inherit" />
                </Backdrop> 
                <CollectionItemDetail open={this.state.DetailOpen} handleClose={this.handleDetailClose} currentItem={this.state.CurrentItem}></CollectionItemDetail>
                <GridList className={classes.gridList} cols={3.5}>
                    {
                        this.props.MyCollection.collectionItem.map(Item=>{
                            return (
                                <GridListTile className={classes.Tile}>
                                    <Paper className={classes.paper}>
                                        <div>
                                            <div className={classes.cardTop}>
                                                {
                                                    Item.itemImages
                                                    && Item.itemImages.length > 0 ?
                                                    <img className={classes.Img} src={Item.itemImages[0].url} alt={Item.itemImages[0].imageId}></img> : ""                                                                  
                                                }
                                                
                                                <div className={classes.cardOverlay}>
                                                    <div className={classes.overlayHead}>
                                                        <FilterNoneIcon className={classes.iconColor} onClick={(e,p)=>this.handleCopyUrl(e,Item.url)}/>
                                                        <div className={classes.cardTool}>
                                                            
                                                            <EditIcon className={classes.iconColor} onClick={(e,p)=>this.handleOpenLink(e,Item.url)}/>
                                                        </div>
                                                    </div>
                                                    <div className={classes.overlayContent}>
                                                        <div>
                                                            <div className={classes.column}>
                                                                <Typography className={classes.textWhite}>
                                                                    {Item.favoriteCount} Kişinin favorisi
                                                                </Typography>  
                                                                <Typography className={classes.textWhite}>
                                                                    Satıcı Adı: {Item.merchantName}
                                                                </Typography>    
                                                                <Typography className={classes.textWhite}>
                                                                    Resmi Adı: {Item.merchantOfficialName}
                                                                </Typography>   
                                                                <Typography className={classes.textWhite}>
                                                                    Fiyatı : {Item.price}
                                                                </Typography>  
                                                                <Typography className={classes.textWhite}>
                                                                    Toplam Değerlendirme : {Item.totalRatingCount}
                                                                </Typography>      
                                                                <Typography className={classes.textWhite}>
                                                                    Toplam Yorum : {Item.totalCommentCount}
                                                                </Typography>   
                                                                <Rating name="read-only" value={Item.averageRating} readOnly />                                                                                                                                                                                   
                                                            </div>            
                                                            <Button className={classes.detailButton} onClick={(e,p)=>this.handleDetailOpen(e,Item)}>DETAY</Button>                                 
                                                        </div>  
                                                    </div>
                                                </div>
                                                <p>{Item.itemName}</p>
                                                <small>{Item.itemDescription}</small>
                                            </div>
                                            <div className={classes.cardBottom}>

                                            </div>                                        
                                        </div>

                                    </Paper>
                                </GridListTile>                              
                            )
                        })
                    }                
                </GridList>            
            </div>
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
