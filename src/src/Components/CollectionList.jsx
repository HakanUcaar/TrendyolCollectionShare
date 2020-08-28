import React, { Component } from 'react';
import { withStyles,createMuiTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionActions from '@material-ui/core/AccordionActions';
import Divider from '@material-ui/core/Divider';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { withSnackbar } from 'notistack';

import ItemImagesModel from '../Models/ItemImagesModel';
import CollectionItemModel from '../Models/CollectionItemModel';
import { updateCollection, saveCollection, loadingCollection, loadedCollection } from "../Redux/ReduxActions";
import TrendyolModel from '../TrenyolModels/TrendyolModel';

const theme = createMuiTheme();
const useStyles = {
    root:{
        flexGrow: "1",
        marginTop :"30px"
    },
    list: {
      width: '100%',
    },
    li_item_tag:{
        height: "20px",
        padding: "4px 8px",
        fontSize: "10px",
        minWidth: "20px",
        alignItems: "center",
        lineHeight: "10px",
        borderRadius: "2px",
        marginLeft : "10px"
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },    
    paper:{
        flexGrow : "1",
        height : "80px",
        weight : "50px"
    },
    slide:{
        display: "flex",  
        flexDirection :"column"      
    },
    ImageStyle:{
        height :"100%",
        weight:"100%"
    },
    column: {
        flexBasis: '33.33%',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
  };

export class CollectionList extends Component {
    constructor(){
        super();

        this.state={
            Link : "",
            DetailOpen : false
        }
    }
    
    handleDetailClose=()=>{
        this.setState({DetailOpen:false});
    }

    handleChangeLinkText=(e)=>{
        this.setState({Link:e.target.value});
    }

    getHTML = ( url, callback ) => {
        const herokuHttps = "https://cors-anywhere.herokuapp.com/";
        // Feature detection
        if ( !window.XMLHttpRequest ) return;
    
        // Create new request
        var xhr = new XMLHttpRequest();
    
        // Setup callback
        xhr.onload = function() {
            if ( callback && typeof( callback ) === 'function' ) {
                callback( this.responseXML );
            }
        }
    
        // Get the HTML
        xhr.open( 'GET',herokuHttps+ url );
        xhr.responseType = 'document';
        xhr.send();
    }; 

    handleAddCollectionItem=async(e)=>{ 
        try {
            this.props.loadingCollection();
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
                this.setState({Link:""}); 
            })
        } catch (error) {
            
        }
        finally{
            this.props.loadedCollection();  
        }                      
    }

    handleDeleteCollectionItem=(e,p)=>{
        e.preventDefault();

        let TempCollection = {...this.props.MyCollection};
        let EntryIndex = TempCollection.collectionItem.map((e)=> { return e.Id }).indexOf(p);
        if (EntryIndex !== -1) {
            TempCollection.collectionItem.splice(EntryIndex, 1);
            this.props.updateCollection(TempCollection);
        }
    }

    handleOpenLink=(e,p)=>{
        e.preventDefault();
        window.open(p);
    }

    render() {
        const {classes} = this.props;

        const GetDeleteButton =(Id)=>{
            if (!this.props.IsFetching && !this.props.IsReadCollectionData) {
                return(
                    <Button size="small" color="secondary" onClick={(e,p)=>this.handleDeleteCollectionItem(e,Id)}>
                    Sil
                    </Button>                        
                )
            }
        }

        return (
            <div className={classes.root}>
                <Backdrop className={classes.backdrop} open={this.props.IsFetching}>
                    <CircularProgress color="inherit" />
                </Backdrop>
                <Container maxWidth="md">
                    <TextField
                        id="Assinged-Hotkey-2"
                        placeholder="Eklenmesini istediğiniz ürünün linki ... "
                        fullWidth                        
                        InputProps={{
                            endAdornment: 
                            <InputAdornment position="end">
                                <IconButton onClick={this.handleAddCollectionItem}>
                                    <AddIcon/>
                                </IconButton>                                
                            </InputAdornment>,
                          }}
                        onChange={(e)=>this.handleChangeLinkText(e)}
                        value={this.state.Link}
                    />   
                    <List className={classes.list}>
                        {
                            this.props.MyCollection.collectionItem !== undefined
                            && this.props.MyCollection.collectionItem != null 
                            && this.props.MyCollection.collectionItem.length > 0 ? 
                            this.props.MyCollection.collectionItem.map(Item=>{
                                return (
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-label="Expand"
                                            aria-controls="additional-actions1-content"
                                            id="additional-actions1-header"
                                            onClick={this.handleOpenMail}
                                        >
                                            <Typography>{Item.itemName}</Typography>
                                            <Typography color="secondary">
                                                {" — "+Item.itemDescription}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div className={classes.slide}>
                                                <div>
                                                    <div className={classes.column}>
                                                        <Typography color="textSecondary">
                                                            {Item.favoriteCount} Kişinin favorisi
                                                        </Typography>  
                                                        <Typography color="textSecondary">
                                                            Satıcı Adı: {Item.merchantName}
                                                        </Typography>    
                                                        <Typography color="textSecondary">
                                                            Resmi Adı: {Item.merchantOfficialName}
                                                        </Typography>                                                                                                         
                                                    </div>
                                                    <div className={classes.column}>
                                                        <Typography color="textSecondary">
                                                            Fiyatı : {Item.price}
                                                        </Typography>  
                                                        <Typography color="textSecondary">
                                                            Toplam Değerlendirme : {Item.totalRatingCount}
                                                        </Typography>      
                                                        <Typography color="textSecondary">
                                                            Toplam Yorum : {Item.totalCommentCount}
                                                        </Typography>   
                                                        <Typography color="textSecondary">
                                                            5 Üzerinden Değerlendirme  : {Item.averageRating}
                                                        </Typography>                                                                                                                                                                      
                                                    </div>                                                
                                                </div>                                          
                                                {                  
                                                    <GridList className={classes.gridList} cols={2.5}>
                                                        {
                                                            Item.itemImages
                                                            && Item.itemImages.length > 0 ?
                                                            Item.itemImages.map((Img)=>{
                                                                return(
                                                                    <GridListTile key={Img.imageId} style={{width:"50px" , height:"80px"}}>
                                                                        <Zoom>
                                                                            <img
                                                                                style={{width:"100%" , height:"100%"}}
                                                                                alt={Img.imageId}
                                                                                src={Img.url}
                                                                            />
                                                                        </Zoom>
                                                                    </GridListTile>
                                                                )
                                                            }) : ""
                                                        } 
                                                    </GridList>                                                                                
                                                }                                        
                                            </div>                                          
                                        </AccordionDetails>
                                        <Divider />
                                        <AccordionActions>
                                          <Button size="small" onClick={(e,p)=>this.handleOpenLink(e,Item.URL)}>Ürüne Git</Button>
                                          {
                                            GetDeleteButton(Item.Id)
                                          }
                                        </AccordionActions>                                        
                                    </Accordion>
                                )
                            })
                            : ""
                        }
                    </List>
                </Container>
            </div>
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

const CollectionListComponent = withStyles(useStyles)(CollectionList);
export default connect(mapStateToProps, mapDispatchToProps)(CollectionListComponent)
