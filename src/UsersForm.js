import React, { Component } from 'react';
import {Card,Form,Button} from 'react-bootstrap';
class Usersform extends Component {
    constructor(props){
        super(props);
        this.state={
            name:" ",
            email:" ",
            gen:" ",
        }
    }

    ChangeTxT=(e)=>{
        e.preventDefault();
        this.setState({
           [e.target.name]:e.target.value, 
        });
        console.log(this.state);
    }
     FormSubmit=(e)=>{
         e.preventDefault();
         this.props.Addnewuser(this.state)
       console.log("Forms submitted:", this.state)
     }

    render() {

        return (
            <div>
                <h1>Registration Form</h1>
                <Card >
                    <Card.Body>
                        <Card.Text>
                        <Form onSubmit={this.FormSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" name="name" onChange={this.ChangeTxT} value={this.state.name} />
                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" name="email" onChange={this.ChangeTxT} value={this.state.email} />
                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Gen</Form.Label>
                                <Form.Control type="text" placeholder="Enter Gen" name="gen" onChange={this.ChangeTxT} value={this.state.gen} />
                                
                            </Form.Group>
                            
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            </Form>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Usersform;
