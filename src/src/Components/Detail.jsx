import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles,createMuiTheme } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import { updateCollection } from "../Redux/ReduxActions";

const theme = createMuiTheme();
const useStyles = {
    dialog:{
        marginTop : "30px",        
    },
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    newTodo: {
        margin: 10
    },
  };

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});  

export class Detail extends Component {
    constructor(){
        super();

        this.state={
            TodoContent : ""
        }
    }

    handleChangeEntry=(e)=>{
        this.setState({TodoContent:e.target.value});    
    }

    handleAddNewEntry=()=>{
        // let NewTodo = new TodoModel();
        // NewTodo.Content = this.state.TodoContent;
        // let TempTodoList = {...this.props.SelectedTodos};
        // TempTodoList.Todos.push(NewTodo);
        // this.props.updateTodoListData(TempTodoList);
    }

    handleDeleteEntry=(e,p)=>{
        e.preventDefault();
        let TempTodoList = {...this.props.SelectedTodos};
        let EntryIndex = TempTodoList.Todos.map((e)=> { return e.Id }).indexOf(p);
        if (EntryIndex !== -1) {
            TempTodoList.Todos.splice(EntryIndex, 1);
            this.props.updateTodoListData(TempTodoList);
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <div >
                <Dialog className={classes.dialog} fullScreen open={this.props.open} onClose={this.props.handleClose} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={this.props.handleClose} aria-label="close">
                                <ArrowBackIosIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                {this.props.SelectedTodos != null ? this.props.SelectedTodos.Name : ""}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <TextField
                        className={classes.newTodo}
                        id="filled-full-width"
                        label="Yeni madde"
                        placeholder="Yeni madde ..."
                        fullWidth
                        margin="normal"
                        variant="filled"
                        InputProps={{
                            endAdornment: 
                            <InputAdornment position="end">
                                <IconButton onClick={this.handleAddNewEntry}>
                                    <SendIcon /> 
                                </IconButton>                                
                            </InputAdornment>,
                        }}
                        onChange={(e)=>this.handleChangeEntry(e)}
                    />
                    <List>
                        {
                            this.props.SelectedTodos != null && this.props.SelectedTodos.Todos != null? 
                            this.props.SelectedTodos.Todos.map((value) => {
                                const labelId = `checkbox-list-label-${value.Id}`;
                    
                                return (
                                    <ListItem key={value.Id} button>
                                        <ListItemIcon>
                                            <Checkbox
                                            edge="start"
                                            tabIndex={-1}
                                            disableRipple
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={value.Content} />
                                        <ListItemSecondaryAction>
                                            <IconButton onClick={(e,p)=>this.handleDeleteEntry(e,value.Id)} edge="end" aria-label="comments">
                                                <DeleteIcon />
                                            </IconButton>
                                      </ListItemSecondaryAction>
                                    </ListItem>
                                );
                            }) : ""
                        }
                    </List>
 
                </Dialog>                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { MyCollection: state.MyCollection };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCollection: Todos => dispatch(updateCollection(Todos))
    }
}

const DetailComponent = withStyles(useStyles)(Detail);
export default connect(mapStateToProps, mapDispatchToProps)(DetailComponent)
