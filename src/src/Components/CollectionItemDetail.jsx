import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import { createMuiTheme,withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const theme = createMuiTheme();
const useStyles = {
    root:{
        flexGrow: "1",
        maxHeight:"250px",
        minHeight:"250px"
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
};

export class CollectionItemDetail extends Component {
    constructor(){
        super();

        this.state={
            open:false
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <div>
                <Dialog
                    fullWidth
                    maxWidth={"lg"}
                    open={this.props.open}
                    onClose={this.props.handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <GridList className={classes.gridList} cols={2.5}>
                        {
                            this.props.currentItem != null ?                            
                            this.props.currentItem.itemImages.map((Img)=>{
                                return(
                                    <GridListTile key={Img.imageId} style={{height: "100% !important"}}>
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
                </Dialog>
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

const mapDispatchToProps = {
    
}


const CollectionItemDetailComponent = withStyles(useStyles)(CollectionItemDetail);
export default connect(mapStateToProps, mapDispatchToProps)(CollectionItemDetailComponent)