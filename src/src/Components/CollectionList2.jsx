import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles,createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
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
import { updateCollection, saveCollection, loadingCollection, loadedCollection } from "../Redux/ReduxActions";
import TrendyolModel from '../TrenyolModels/TrendyolModel';
import { withSnackbar } from 'notistack';

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

export class CollectionList2 extends Component {
    constructor(){
        super();

        this.state={
            Link : "",
            DetailOpen : false,
            CurrentItem : null
        }
    }

    handleDetailClose=()=>{
        this.setState({DetailOpen:false});
    }
    handleDetailOpen=(e,p)=>{
        this.setState({CurrentItem: p,DetailOpen:true});
    }
    handleChangeLinkText=(e)=>{
        this.setState({Link:e.target.value});
    }

    handleDeleteCollectionItem=(e,p)=>{
        e.preventDefault();

        let TempCollection = {...this.props.MyCollection};
        let EntryIndex = TempCollection.collectionItem.map((e)=> { return e.itemId }).indexOf(p);
        if (EntryIndex !== -1) {
            TempCollection.collectionItem.splice(EntryIndex, 1);
            this.props.updateCollection(TempCollection);
        }
    }
    handleOpenLink=(e,p)=>{
        e.preventDefault();
        window.open(p);
    }
    handleCopyUrl=(e,p)=>{
        e.preventDefault();
        copy(p);        
    }

    handleAddCollectionItem=async(e)=>{ 
        
        this.props.loadingCollection();
        try {
            const herokuHttps = "https://cors-anywhere.herokuapp.com/";
            await fetch(herokuHttps+this.state.Link)
            .then((response)=>{
                return response.text()
            })
            .then((html)=>{
                var parser = new DOMParser();
                var doc = parser.parseFromString(html, "text/html");   
    
                let ScriptsArray =Array.from(doc.getElementsByTagName("script"));
                let JSONData = ScriptsArray.find(x=>x.innerText.indexOf("window.__PRODUCT_DETAIL_APP_INITIAL_STATE__")!==-1).innerText.trim().substring("window.__PRODUCT_DETAIL_APP_INITIAL_STATE__ =".length);
                JSONData = JSONData.substring(0,JSONData.length-1);
                let NewTrendyolModel = new TrendyolModel();
                console.log(Object.assign(NewTrendyolModel,JSON.parse(JSONData)));
                
                let TempCollection = {...this.props.MyCollection};
                let NewItem = new CollectionItemModel();
    
                NewItem.itemName = NewTrendyolModel.product.productCode;
                NewItem.itemDescription = NewTrendyolModel.product.name;
                NewItem.url = this.state.Link;
                NewItem.price = NewTrendyolModel.product.price.sellingPrice.value;
                NewItem.gender = NewTrendyolModel.product.gender.name;
                NewItem.favoriteCount = NewTrendyolModel.product.favoriteCount;
                NewItem.totalRatingCount = NewTrendyolModel.product.ratingScore.totalRatingCount;
                NewItem.totalCommentCount = NewTrendyolModel.product.ratingScore.totalCommentCount;
                NewItem.averageRating = NewTrendyolModel.product.ratingScore.averageRating;
                NewItem.merchantName = NewTrendyolModel.product.merchant.name;
                NewItem.merchantOfficialName = NewTrendyolModel.product.merchant.officialName;
    
                NewTrendyolModel.product.images.map((data)=>{
                    let NewImage = new ItemImagesModel();
                    NewItem.collectionId = TempCollection.CollectionId;
                    NewImage.itemId = NewItem.ItemId;
                    NewImage.url = "https://cdn.dsmcdn.com/"+data; 
                    NewImage.htmlContent = "";
                    NewItem.itemImages.push(NewImage);
                })
    
                TempCollection.collectionItem.push(NewItem);
                this.props.updateCollection(TempCollection);  
                
            })
        } catch (error) {
            this.props.enqueueSnackbar("Ekleme işleminde hata. Linkin doğru olduğundan emin olun.",{ 
                variant: 'error',
            });
        }
        finally {
            this.props.loadedCollection(); 
            this.setState({Link:""}); 
        }
    }    

    handleEnterKeyPress(e){
        if(e.keyCode === 13){
            this.handleAddCollectionItem(e);
        }
    }

    render() {
        const {classes} = this.props;

        const renderDeleteButton =(Id)=>{
            if (!this.props.IsFetching && !this.props.IsReadCollectionData) {
                return(
                    <DeleteIcon className={classes.iconColor} onClick={(e,p)=>this.handleDeleteCollectionItem(e,Id)}/>
                )
            }
        }

        const renderAddItemTextInput=()=>{
            if (!this.props.IsFetching && !this.props.IsReadCollectionData) {
                return(
                    <TextField
                    id="Assinged-Hotkey-2"
                    placeholder="Eklemek istediğin ürünün linkini buraya yapıştır ... "
                    fullWidth                        
                    InputProps={{
                        endAdornment: 
                        <InputAdornment position="end">
                            <IconButton onClick={this.handleAddCollectionItem}>
                                <AddIcon/>
                            </IconButton>                                
                        </InputAdornment>,
                        }}
                    onKeyDown={this.handleEnterKeyPress.bind(this)}
                    onChange={(e)=>this.handleChangeLinkText(e)}
                    value={this.state.Link}
                />   
                )
            }
        }

        return (
            <Container>
                <Backdrop className={classes.backdrop} open={this.props.IsFetching}>
                    <CircularProgress color="inherit" />
                </Backdrop>            
                <CollectionItemDetail open={this.state.DetailOpen} handleClose={this.handleDetailClose} currentItem={this.state.CurrentItem}></CollectionItemDetail>
                <div className={classes.root}>
                    <div className={classes.lvl1}>
                        <div className={classes.lvl2}>
                            <div className={classes.lvl3}>                                   
                                <div className={classes.scrolableContainer}>
                                    {
                                        renderAddItemTextInput()
                                    }
                                    <Grid className={classes.conteiner} container spacing={2} >
                                    {
                                        this.props.MyCollection.collectionItem !== undefined
                                        && this.props.MyCollection.collectionItem != null 
                                        && this.props.MyCollection.collectionItem.length > 0 ? 
                                        this.props.MyCollection.collectionItem.map(Item=>{
                                            return (
                                                <Grid item sm={4} key={Item.itemId}>
                                                    <Paper className={classes.paper}>
                                                        <div className={classes.cardTop}>
                                                            {
                                                                Item.itemImages
                                                                && Item.itemImages.length > 0 ?
                                                                <img className={classes.Img} src={Item.itemImages[0].url} alt={Item.itemImages[0].imageId}></img> : ""                                                                  
                                                            }
                                                            
                                                            <div className={classes.cardOverlay}>
                                                                <div className={classes.overlayHead}>
                                                                    <Checkbox className={classes.iconColor}></Checkbox>
                                                                    <div className={classes.cardTool}>
                                                                        <FilterNoneIcon className={classes.iconColor} onClick={(e,p)=>this.handleCopyUrl(e,Item.url)}/>
                                                                        <EditIcon className={classes.iconColor} onClick={(e,p)=>this.handleOpenLink(e,Item.url)}/>
                                                                        {
                                                                            renderDeleteButton(Item.itemId)
                                                                        }
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
                                                        </div>
                                                        <div className={classes.cardBottom}>
                                                            <p>{Item.itemName}</p>
                                                            <small>{Item.itemDescription}</small>
                                                        </div>
                                                    </Paper>
                                                </Grid>  
                                            )
                                        })
                                        : ""
                                    }                                                                                                 
                                    </Grid>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return { 
        MyCollection: state.MyCollection,
        IsFetching: state.IsFetching,
        IsReadCollectionData : state.IsReadCollectionData
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCollection: Todos => dispatch(updateCollection(Todos)),
        saveCollection: Todos => dispatch(saveCollection(Todos)),
        loadingCollection:Todos => dispatch(loadingCollection(Todos)),
        loadedCollection:Todos => dispatch(loadedCollection(Todos)),
    }
}

const CollectionList2Snack = withSnackbar(CollectionList2);
const CollectionList2Component = withStyles(useStyles)(CollectionList2Snack);
export default connect(mapStateToProps, mapDispatchToProps)(CollectionList2Component)
