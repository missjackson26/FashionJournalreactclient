import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(v) {
        console.log(this.state)
        this.props.submit(this.state)
        v.preventDefault()
    }

    render() {
        return (

            <div>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input id="firstName" type="text" name="firstName" placeholder="enter first name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input id="lastName" type="text" name="lastName" placeholder="enter last name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input id="email" type="text" name="email" placeholder="enter email" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="password" type="text" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }


}

export default Signup;