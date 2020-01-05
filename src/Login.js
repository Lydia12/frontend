import React, {Component} from "react";
import { withRouter} from 'react-router-dom';
import {Button,FormGroup,FormControl,FormLabel,Form} from "react-bootstrap";


class Login extends Component {
    constructor(props){
        super(props);

        this.state={
            email:"",
            password:"",
            jwtToken: ""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        /* event.preventDefault();
        this.props.history.push('/Overview');
        */
       event.preventDefault();

        const { email, password } = this.state;
        const { history } = this.props;

        this.setState({ error: false });

        if (!(email === 'george@cloud.de' && password === 'foreman')) {
            return this.setState({ error: true });
        }

        history.push('/Overview');
        /* 
        CREATE JWT TOKEN AND SAVE IN STATUS!!!!!!!!
        */
    }

    render()
    {
        return (
            <div className="Login">
                <h1>Login</h1>
                <Form onSubmit={this.handleSubmit}>

                    <FormGroup controlId="email">
                        <FormLabel>Email</FormLabel>
                        <FormControl autoFocus type="email" value={this.state.email} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup controlId="password">
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" value={this.state.password} onChange={this.handleChange}/>
                    </FormGroup>

                    <Button type="submit">Login</Button>
                </Form>



            </div>
        )
    }
}

export default withRouter(Login);