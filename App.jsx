import React from 'react';
import { Navbar,Nav,NavItem,FormGroup,FormControl,Button,Grid,Row,Col,Well,Image } from 'react-bootstrap';
class Navbarinv extends React.Component{
  render() {
    return (
        <Navbar inverse fluid fixedTop id="navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="home" id="nav-title">showcult</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>

              <NavItem eventKey={1} href="#">Link</NavItem>
              <NavItem eventKey={2} href="#">Link</NavItem>

            </Nav>
            <Navbar.Form pullRight>

              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Search"
                  value=""
                  //onChange={/*this.handleChange*/}
                />
              </FormGroup>

            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>

    );
  }
}
class Moviesection extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <Grid id="movielist">
        <Row>
          <Col xsHidden md={2}></Col>
          <Col xs={12} md={8}>

            <Moviecards />

          </Col>
          <Col xsHidden md={2}></Col>
        </Row>
      </Grid>
    );
  }
}
class Moviecards extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <Well>
        <Row>
          <Col md={12} xs={12}>
            <h2 className="text-center">Dial M for Murder</h2>
          </Col>
        </Row>
        <Row>
          <Col md={4} xs={4}>
            <Image src="http://ia.media-imdb.com/images/M/MV5BMTkyNzc4ODk4N15BMl5BanBnXkFtZTcwMDE5ODEwNA@@._V1_UX182_CR0,0,182,268_AL_.jpg" responsive/>
          </Col>
          <Col md={8} xs={8}>
            <Row>
              <Col md={3} xs={3}>
                <h4>Director : </h4>
              </Col>
              <Col md={9} xs={9}>
                <h4>Alfred Hitchcock.</h4>
              </Col>
            </Row>
            <Row>
              <Col md={3} xs={3}>
                <h4>Year :</h4>
              </Col>
              <Col md={9} xs={9}>
                <h4>1954.</h4>
              </Col>

            </Row>
            <Row>
              <Col md={3} xs={3}>
                <h4>Cast :</h4>
              </Col>
              <Col md={9} xs={9}>
                <h4>Raakesh, Madana, arjunmayilvaganan, Thangaram.</h4>
              </Col>
            </Row>
            <Row>
              <Col md={3} xs={3}>
                <h4>Storyline :</h4>
              </Col>
              <Col md={9} xs={9}>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </Well>
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
