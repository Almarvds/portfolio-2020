import React, { Component } from 'react';
import { Container, Row, Col, Collapse, Button, Fade } from 'react-bootstrap';
import imageList from './imageList.js'
import {titles, subtexts} from './title_subtext.js'
console.log(imageList)

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
    if(event === 0){
      this.setState({open: false, left: false, middle: false, right: false});
      this.props.triggerPhaseShift()
    } else if(event === 1){
      if(this.state.open === false || this.state.left ===true){
        this.setState({open: !this.state.open})
        this.props.triggerPhaseShift()
      }
      this.setState({left: !this.state.left, middle: false, right: false});
    } else if(event === 2){
      if(this.state.open === false || this.state.middle ===true){
        this.setState({open: !this.state.open})
        this.props.triggerPhaseShift()
      }
      this.setState({middle: !this.state.middle, left:false, right:false});
    } else{
      if(this.state.open === false || this.state.right ===true){
        this.setState({open: !this.state.open})
        this.props.triggerPhaseShift()
      }
      this.setState({right: !this.state.right, left:false, middle:false});
    }
  }

  scrollDown(){
    setTimeout(
      function() {
          scroll.scrollTo(window.innerHeight*9/10,{
            smooth:'easeOutQuint',
            duration: 2500,
          });
      },
      200
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
          <div className='circle' style = {{margin: '2vw', backgroundSize: 'contain', backgroundImage: `url(${imageList[numCircle-1]})`}}>
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
          <Col md="auto" className='text-center mx-auto'>
            <Row>
            <h1 className='text-center mx-auto'
            style={{fontSize:'3rem',backgroundColor:'rgba(255,255,255,0.8)' , padding:'3vh', borderRadius: '5%'}}>
              {titles[this.props.number]}
            </h1>
            </Row>
            <Row >
              <h3 className='text-center mx-auto'
              style={{backgroundColor:'rgba(255,255,255,0.8)' , padding:'3vh', borderRadius: '5%'}}>
                {subtexts[this.props.number]}
              </h3>
            </Row>
          </Col>
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
              <div className='dropDownBox'>
                <div className="ml-auto close" style = {{margin:'2%', height:'3vh',width:'3vh', backgroundImage: `url(${process.env.PUBLIC_URL}/Close.svg)`}}>
                  <Button onClick={() => this.setDropDown(0)} style={{boxShadow:'none',height:'100%',
                  width:'100%',backgroundColor:'transparent', border:'none'}}/>
                </div>
              </div>
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
