import React from 'react';
import { Card,Col,Button } from 'react-bootstrap';

const Users = (props) => {
    const DeleteUser1=(id)=>{
     props.DeleteUser(id)
        console.log("User Deleted :");
    }
    return (
        <div>
            <h1>Codetrain Users</h1>
            {props.userData.map((item) => {
                return (
                    <>
                        <Col>
                            <Card >
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        <div key={item.id}>
                                            <div>Name:{item.name}</div>
                                            <div>Email:{item.email}</div>
                                            <div>gen:{item.gen}</div>
                                        </div>
                                    </Card.Text>
                                    <Card.Link href="#"><Button variant="primary">Edit</Button></Card.Link>
                                    <Card.Link href="#"><Button variant="danger" onClick={DeleteUser1(item.id)}>Delete</Button></Card.Link>
                                </Card.Body>
                            </Card>

                        </Col>
                     
                    </>
                );
            }

            )}
        </div>
    );
}

export default Users;
