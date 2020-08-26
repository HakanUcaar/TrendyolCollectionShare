import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { updateCollection } from "../Redux/ReduxActions";

export class AddNewList extends Component {
    constructor(){
        super();
        
        this.state={
            ListTitle : ""
        }
    }

    onTitleChange=(e)=>{
        this.setState({ListTitle:e.target.value});
    }

    onHandleAdd=()=>{
        // let TodoLists = {...this.props.TodoLists};
        // let NewTodos = new Todos();
        // NewTodos.Name = this.state.ListTitle;
        // TodoLists.Todolists.push(NewTodos);
        // this.props.updateTodoListData(TodoLists);
        // this.props.handleClose();
    }

    render() {
        return (
            <div>
                <Dialog open={this.props.open} onClose={this.props.handleClose} aria-labelledby="form-dialog-title" maxWidth="lg" fullWidth>
                    <DialogTitle id="form-dialog-title">Yeni Kalem</DialogTitle>
                    <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Link"
                        fullWidth
                        onChange={(e)=>this.onTitleChange(e)}
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={(e)=>this.onHandleAdd()} color="primary">
                        Ekle
                    </Button>
                    <Button onClick={this.props.handleClose} color="primary">
                        İptal
                    </Button>
                </DialogActions>
            </Dialog>
            </div>
        )
    }
}

function mapStateToProps (state){
    return { MyCollection: state.MyCollection };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateCollection: keyButton => dispatch(updateCollection(keyButton))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewList)
