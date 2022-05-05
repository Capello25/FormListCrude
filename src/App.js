
import './App.css';
import Users from './Users';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container,Row,Col } from 'react-bootstrap';
import UsersForm from './UsersForm';
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Capello",
          email: "Capelo@gmail.com",
          gen: "21",
          id:"yhjfjfjhgdtk"
        },
        {
          name: "Love",
          email: "Love@gmail.com",
          gen: "21",
          id:"xfxtyhvnvc"
        },
        {
          name: "Ella",
          email: "Ella@gmail.com",
          gen: "21",
          id:"vcnctyhbj"
        }
      ]

    }
  }

  Adduser=(User)=>{
    User.id=Math.random().toString()
    this.setState({      
      users:[...this.state.users,User]
    })
  }

  DeleteUser=(id)=>{
    let Undeleted=this.state.users.filter(user=>user.id !== id);
    this.setState({
      users:Undeleted
    })
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <UsersForm Addnewuser={this.Adduser}/>
            </Col>
            <Col> 
              <Users userData={this.state.users}  DeleteUser={this.DeleteUser} />
            </Col>
          </Row>
        </Container>
       

      </>
    );
  }
}

export default App;





