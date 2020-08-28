import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Header from './Header';
import Container from '@material-ui/core/Container';

import CollectionList2 from './CollectionList2';

const useStyles = {
    lvl1:{
        display: "flex",
        
    },
    lvl2:{
        flexGrow: "1",
        maxWidth: "100%",
        overflowX: "hidden"
    },
    lvl3:{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: "transform 195ms",
        minHeight: "95vh"
    }
};

export class Main extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.lvl1}>
                <div className={classes.lvl2}>                       
                    <div className={classes.lvl3}>   
                        <Container maxWidthXl>
                            <Header handleOpen={this.handleOpen}></Header>
                            <CollectionList2 handleOpen={this.handleDetailOpen}></CollectionList2> 
                        </Container>
                    </div>
                </div>          
            </div>   
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

const MainComponent = withStyles(useStyles)(Main);
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)
