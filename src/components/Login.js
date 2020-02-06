import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'


export class Login extends React.Component{
   
    constructor(props){
        super(props); 
        this.state = {username:"", password:""};
        localStorage.setItem('username', "diego");
        localStorage.setItem('password', "123");
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleUsername(e) {
        this.setState({username: e.target.value});
    }

    handlePassword(e){
        this.setState({password: e.target.value})
    }

    handleSubmit(e){
        console.log(this.state.username);
        console.log(this.state.password);
        if (this.state.username == localStorage.getItem("username") 
        && this.state.password == localStorage.getItem("password")){
            this.props.autenticate();
            localStorage.setItem("isLoggedIn",true);
        }
        else alert("incorrect user or password")
    }

    render(){       
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form className="form" onSubmit={this.handleSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="Username">Username</InputLabel>
                                <Input id="Username" name="Username" autoComplete="Username" autoFocus onChange={this.handleUsername} />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handlePassword}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}