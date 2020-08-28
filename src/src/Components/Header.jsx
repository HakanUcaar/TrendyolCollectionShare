import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles ,createMuiTheme} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import LinkIcon from '@material-ui/icons/Link';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import copy from 'copy-to-clipboard';
import QRCode from 'qrcode.react';
import { withSnackbar } from 'notistack';

import { saveCollection, loadingCollection, loadedCollection } from "../Redux/ReduxActions";

const theme = createMuiTheme();
const useStyles = {
    root:{
        flexGrow: "1",
        maxHeight:"270px",
        minHeight:"270px"
    },
    date :{
        position :"absolute",
        top:"210px",
        color : "lightcyan",
        fontWeight: "bold"
    },
    Image:{
        maxWidth:"100%",
        width:"100%",
        objectFit: "cover",
        maxHeight:"250px"
    },
    fab: {
        position: "fixed",
        zIndex: 1,
        left: 0,
        right: 0,
        margin: "0 auto",
        top :"10px",
    },
    imageIcon :{
        height : "50px",
        width : "50px",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
    },
    trendyolLogo:{
        height : "200px",
        width : "100%",
        //position: "absolute",
    },
    collection :{
        //position :"absolute",
        // left:"50%",
        top:"210px",
        fontFamily: "source_sans_proregular"
    },
    logoAlt:{
        textAlign: "center",
        top:"210px",
    },
    linkDialogContent:{
        display:"flex",
        flexDirection:"column",
        textAlign: "center",
    },
    linkDialogQR:{
        margin: "auto"
    }
};
// theme.typography.h2 = {
//     fontSize: '3.75rem',
//     '@media (min-width:600px)': {
//         fontSize: '2.5rem',
//     },
//     [theme.breakpoints.up('md')]: {
//         fontSize: '3.75rem',
//     },
// };

export class Header extends Component {
    constructor(){
        super();

        this.state={
            CollectionLink : "",
            GeneratedLink : false,
        }
    }
    
    handleClose=()=>{
        this.setState({GeneratedLink:false});
    }

    handleShowLink=()=>{
        copy(window.location.href);
        this.setState({GeneratedLink:true});
    }

    handleGenerateLink=()=>{        
        console.log(this.props.MyCollection.collectionItem);
        if(this.props.MyCollection.collectionItem.length === 0){
            this.props.enqueueSnackbar("Eklenecek hiç bir veri bulunamadı. Lütfen ekledikten sonra tekrar deneyin.", { 
                variant: 'warning',
            });
        }
        else
        if(this.props.Link === ""){
            this.setState({GeneratedLink:true,CollectionLink:window.location.origin+"/"+window.location.pathname+"/"+this.props.MyCollection.collectionId});
            this.props.saveCollection();
            this.props.loadedCollection();
        }
        else{
            if(this.props.Link !== ""){
                copy(window.location.href);
                this.setState({GeneratedLink:true,CollectionLink:window.location.href});
            }
        }
    }

    getLocation=()=>{
        return this.props.Link === "" ?  window.location.href + this.state.NewLink : window.location.href;
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Dialog
                    fullWidth
                    maxWidth={"sm"}
                    open={this.state.GeneratedLink}
                    onClose={this.handleClose}
                    aria-labelledby="max-width-dialog-title"
                >
                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                        Koleksiyon Linkiniz
                    </DialogTitle>                
                    <DialogContent>
                        <div className={classes.linkDialogContent}>
                            <DialogContentText gutterBottom>
                                {this.state.CollectionLink}
                            </DialogContentText>  

                            <QRCode className={classes.linkDialogQR} value={this.state.CollectionLink} />                                         
                        </div>
                    </DialogContent>
                </Dialog>
                <img className={classes.trendyolLogo}src="https://cdn.dsmcdn.com/web/logo/ty-logo.svg" alt="https://cdn.dsmcdn.com/web/logo/ty-logo.svg"/>    
                <div className={classes.logoAlt}>
                    <Typography className={classes.collection} variant="h2" component="h1">
                        KOLEKSİYONUN
                    </Typography>   
                    <Typography className={classes.collection} variant="h8" component="h6">
                        Bu projedeki hiç bir veri ticari bir amaç için kullanılmamaktadır. Tamamen açık kaynak olarak geliştirilmiştir.
                    </Typography>  
                </div>  
                {
                    <Fab className={classes.fab} color="primary" aria-label="add">
                        <LinkIcon  onClick={this.handleGenerateLink} />
                    </Fab>
                }          
            </div>
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
        saveCollection: Todos => dispatch(saveCollection(Todos)),
        loadingCollection:Todos => dispatch(loadingCollection(Todos)),
        loadedCollection:Todos => dispatch(loadedCollection(Todos)),
    }
}

const HeaderSnack = withSnackbar(Header);
const HeaderComponent = withStyles(useStyles)(HeaderSnack);
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)
