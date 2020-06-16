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
          <div className='circle grow' style = {{backgroundImage: `url(${imageList[numCircle-1]})`}}>
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

  circleRow(){
    if(this.props.number===0 || this.props.number=== 1 || this.props.number===2){
      return(
        <Row>
          <Col>
            <div className='swipe left'>
              <h4 style={{paddingLeft:'1.5vw'}}>Swipe</h4>
              <img draggable="false" className = 'ml-auto' style={{width:'15vh', height:'15vh'}} src={process.env.PUBLIC_URL+'/swipe.svg'}/>
            </div>
          </Col>
          <Col md="auto">
            {this.circle(2)}
          </Col>
          <Col md="auto">
            {this.circle(3)}
          </Col>
          <Col className='text-right'>
            <div className='swipe'>
              <h4 style={{}}>Swipe</h4>
              <img draggable="false" className = 'ml-auto' style={{width:'15vh', height:'15vh'}} src={process.env.PUBLIC_URL+'/swipe.svg'}/>
            </div>
          </Col>
        </Row>
      )
    } else {
      return(
        <Row className="justify-content-md-center">
        <Col>
          <div className='swipe left'>
            <h4 style={{paddingLeft:'1.5vw'}}>Swipe</h4>
            <img draggable="false" className = 'ml-auto' style={{width:'15vh', height:'15vh'}} src={process.env.PUBLIC_URL+'/swipe.svg'}/>
          </div>
        </Col>
          <Col md="auto">
            {this.circle(1)}
          </Col>
          <Col md="auto" className='lowered'>
            {this.circle(2)}
          </Col>
          <Col md="auto">
            {this.circle(3)}
          </Col>
          <Col className='text-right'>
            <div className='swipe'>
              <h4 style={{}}>Swipe</h4>
              <img draggable="false" className = 'ml-auto' style={{width:'15vh', height:'15vh'}} src={process.env.PUBLIC_URL+'/swipe.svg'}/>
            </div>
          </Col>
        </Row>
      )
    }
  }

 render() {
    return(
      <div>
        <Row style={{color:'black', paddingTop:'15vh', width:'100%', margin:'0'}}>
          <Col md="auto" className='text-center mx-auto'>
            <Row>
            <h1 className='text-center mx-auto seeThroughBox' style={{fontSize:'3rem'}}>
              {titles[this.props.number]}
            </h1>
            </Row>
            <Row >
              <h3 className='text-center mx-auto seeThroughBox'>
                {subtexts[this.props.number]}
              </h3>
            </Row>
          </Col>
        </Row>
        {this.circleRow()}
        <Collapse in={this.state.open}>
          <Fade onEntered = {this.scrollDown()}>
            <Row>
              <div className='mx-auto dropDownBox'>
                <div className="ml-auto close" style = {{margin:'2%', height:'3vh',width:'3vh', backgroundImage: `url(${process.env.PUBLIC_URL}/Close.svg)`}}>
                  <Button onClick={() => this.setDropDown(0)} style={{boxShadow:'none',height:'100%',
                  width:'100%',backgroundColor:'transparent', border:'none'}}/>
                </div>
              </div>
            </Row>
          </Fade>
        </Collapse>
    </div>
    )
  }
}



export default OtherPage;
