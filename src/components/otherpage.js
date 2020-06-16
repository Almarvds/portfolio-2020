import React, { Component } from 'react';
import { Container, Row, Col, Collapse, Button, Fade } from 'react-bootstrap';

var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

class OtherPage extends Component {
  constructor(props) {
      super(props);
      console.log(props)
      this.state = {
        open:false,
        middle: false,
        left: false,
        right: false
      };
      this.setDropDown = this.setDropDown.bind(this);
    }


  setDropDown = (event) => {
    console.log('clicked button')
    if(event === 1){
      if(!(this.state.left === false && this.state.open ===true)){
        this.setState({open: !this.state.open})
      }
      this.setState({left: !this.state.left, middle: false, right: false});
    } else if(event === 2){
      if(!(this.state.middle === false && this.state.open ===true)){
        this.setState({open: !this.state.open})
      }
      this.setState({middle: !this.state.middle, left:false, right:false});
    } else{
      if(!(this.state.right === false && this.state.open ===true)){
        this.setState({open: !this.state.open})
      }
      this.setState({right: !this.state.right, left:false, middle:false});
    }
    this.props.triggerPhaseShift()
  }

  scrollDown(){
    setTimeout(
      function() {
          scroll.scrollTo(window.innerHeight*3/4,{
            smooth:'easeOutQuint',
            duration: 2500,
          });
      },
      500
    );
  }

  circle(numCircle){
    var stateDirection = ''
    if(numCircle === 1){stateDirection = this.state.left}
    else if(numCircle === 2){ stateDirection = this.state.middle}
    else{
      stateDirection = this.state.right
    }
    return(
      <div>
        <Row>
          <div className='circle'>
            <Button onClick={() => this.setDropDown(numCircle)} style={{boxShadow:'none',height:'100%',
            width:'100%',backgroundColor:'transparent', border:'none'}}/>
          </div>
        </Row>
        <Row className="justify-content-md-center">
          <Collapse in={stateDirection}>
            <Fade>
              <div className = 'triangle'/>
            </Fade>
          </Collapse>
        </Row>
      </div>
    )
  }

 render() {
    return(
      <div>
      <Container>
        <Row style={{color:'black', paddingTop:'15vh'}}>
          <Col className='text-center'><h1 style={{fontSize:'5rem'}}>Title</h1></Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            {this.circle(1)}
          </Col>
          <Col md="auto" className='lowered'>
            {this.circle(2)}
          </Col>
          <Col md="auto">
            {this.circle(3)}
          </Col>
        </Row>
        <Collapse in={this.state.open}>
          <Fade onEntered = {this.scrollDown()}>
            <Row>
              <div className='dropDownBox'></div>
            </Row>
          </Fade>
        </Collapse>
      </Container>
      <div id="scrolly"></div>
    </div>
    )
  }
}



export default OtherPage;
