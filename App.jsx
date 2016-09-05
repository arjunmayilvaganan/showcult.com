import React from 'react';
import { Navbar,Nav,NavItem,FormGroup,FormControl,Button,Grid,Row,Col,Well,Image,Form } from 'react-bootstrap';
class Navbarinv extends React.Component{
  render() {
    return (

        <Navbar inverse fluid fixedTop id="navbar">
          <Col lgOffset={1} mdOffset={1} smOffset={1}>
            <Navbar.Header >
              <Navbar.Brand>
                <a href="#" id="navTitle">showcult</a>
              </Navbar.Brand>

              <Navbar.Toggle />
            </Navbar.Header>
          </Col>
          <Navbar.Collapse>

            <Nav pullRight>

              <NavItem eventKey={1} href="#">Link</NavItem>
              <NavItem eventKey={2} href="#">Link</NavItem>

            </Nav>
            <Col md={4} sm={4} lg={5} lgOffset={1} smOffset={1} mdOffset={1}>
              <Form id="navForm">

                <FormGroup>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    value=""
                    //onChange={/*this.handleChange*/}
                  />
                </FormGroup>

              </Form>
            </Col>
          </Navbar.Collapse>

        </Navbar>

    );
  }
}
class Movies extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <Col lg={3} md={4} sm={4} xs={6} id="moviestile">
        <a href="#">
          <Image src="./img/MforMurder.jpg" responsive />

          <div id="movieTitle">
            <h4 className="text-center">MforMurder</h4>
          </div>
        </a>
      </Col>
    );
  }
}
class Moviesection extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <Grid id="movieList">
        <Row>
          <Movies />
          <Movies />
          <Movies />
          <Movies />
          <Movies />
          <Movies />
          <Movies />
        </Row>
      </Grid>
    );
  }
}
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:[
          {
            "id" : "1",
            "name" : "Dial M for Murder",
            "year" : 1954,
            "director" : "Alfred Hitchcock",
            "cast" : [
            "xxx",
            "yyy",
            "zzz"
            ],
            "storyline" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "poster" : "http://ia.media-imdb.com/images/M/MV5BMTkyNzc4ODk4N15BMl5BanBnXkFtZTcwMDE5ODEwNA@@._V1_UX182_CR0,0,182,268_AL_.jpg"
          },
          {
            "id" : "2",
            "name" : "Dial T for Thangaram",
            "year" : 1998,
            "director" : "arjunmayilvaganan",
            "cast" : [
              "Raakesh",
              "Madana"
            ],
            "storyline" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "poster" : "http://ia.media-imdb.com/images/M/MV5BMTkyNzc4ODk4N15BMl5BanBnXkFtZTcwMDE5ODEwNA@@._V1_UX182_CR0,0,182,268_AL_.jpg"
          }
        ]
    }
  }
  render() {
    return (
      <div>
        <Navbarinv />
        <Moviesection />
      </div>
    );
  }
}
export default App;
