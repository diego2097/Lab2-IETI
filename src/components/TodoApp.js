import 'date-fns';
import React, {Component} from 'react';
import {TodoList} from "./TodoList";
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {MuiPickersUtilsProvider,KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';

export class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return (
            <div className="TodoApp">
                
                <form onSubmit={this.handleSubmit} className="todo-form">
                    <h3>New TODO</h3>
                  
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="component-outlined">Text</InputLabel>
                        <OutlinedInput id="component-outlined" value={this.state.text} onChange={this.handleTextChange} label="Text" />
                    </FormControl>

                    <br/>
                    <br/>
                   
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="component-outlined">Priority</InputLabel>
                        <OutlinedInput id="component-outlined" value={this.state.priority} onChange={this.handlePriorityChange} label="Priority" />
                    </FormControl>

                    <br/>
                    <br/>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Due date"
                        format="MM/dd/yyyy"
                        value={this.state.dueDate}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    </MuiPickersUtilsProvider>


                    <br/>
                   <Button variant="contained" color="primary" component="span">
                    Add #{this.state.items.length + 1}
                    </Button>
                </form>
                <br/>
                <br/>
                <TodoList todoList={this.state.items}/>
             </div>   
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }


}