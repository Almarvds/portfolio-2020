import React, { useRef } from 'react';
import OtherPage from './components/otherpage.js'
import { Row, Col, Collapse, Button, Fade } from 'react-bootstrap';
import imageList from './components/imageList.js'
import {titles, subtexts} from './components/title_subtext.js'
import divs from './components/divs2.js'
import { Component } from 'react';


function Mobilepager(){
  var stateDirection = false;
  var open = [false,false,false,false,false,false,false,false,false,false,false,false,false];
  var Scroll = require('react-scroll');
  var scroll = Scroll.animateScroll;
  const colors = [
    '#203828',
    '#193138',
    '#212436',
    '#251738',
    '#38171A'
  ]

  class Circle extends Component{
    constructor(props) {
        super(props);
        this.state = {
          hasOpened:false,
          open:false,
        };
      }

      scrollDown(){
        if(this.state.open){
          setTimeout(
            function() {
                scroll.scrollTo(window.pageYOffset+500 ,{
                  smooth:'easeOutQuint',
                  duration: 2500,
                });
            },
            200
          );
        }
      }

      render(){
          return(
            <Col>
              <Row className="md-auto">
                <div className='circle grow' style = {{backgroundImage: `url(${imageList[this.props.numCircle]})`}}>
                  <Button onClick={() => {
                    this.setState({
                      hasOpened: !this.state.hasOpened,
                      open: !this.state.open
                    })
                  }} style={{
                    boxShadow:'none',
                    height:'100%',
                    width:'100%',
                    backgroundColor: 'transparent',
                    border: 'none'}}/>
                </div>
              </Row>
              <Row className="justify-content-md-center">
                <Collapse in={this.state.open}>
                  <Fade>
                    <div className = 'triangle2'/>
                  </Fade>
                </Collapse>
              </Row>
              <Collapse in={this.state.open}>
                <Fade onEntered = {this.scrollDown()}>
                  <Row>
                    <div className='mx-auto dropDownBox2'>
                      <div className="ml-auto close" style = {{backgroundImage: `url(${process.env.PUBLIC_URL}/Close.svg)`}}>
                        <Button onClick={() => this.setState({
                          open: !this.state.open
                        })} style={{
                          boxShadow:'none',
                          height:'100%',
                          width:'100%',
                          backgroundColor: 'transparent',
                          border: 'none'}}/>
                      </div>
                      {divs[this.props.numCircle]}
                    </div>
                  </Row>
                </Fade>
              </Collapse>
            </Col>
          )
      }
  }

  return(
    <div className='mobile'>
      <Row style={{backgroundColor:`${colors[2]}`, color:'black', paddingTop:'15vh', width:'100%', height:'auto',margin:'0', border:'none'}}>
        <Col md="auto" className='text-center mx-auto'>
          <Row style={{paddingLeft:'10%', paddingRight:'10%'}}>
          <h1 className='text-center mx-auto seeThroughBox' style={{fontSize:'2rem'}}>
            {titles[2]}
          </h1>
          </Row>
          <Row style={{marginBottom:'5vh', paddingLeft:'10%', paddingRight:'10%'}}>
            <h1 className='text-center mx-auto seeThroughBox' style={{fontSize:'1rem'}}>
              {subtexts[2]}
            </h1>
          </Row>
          <Row style={{backgroundColor:`${colors[2]}`}}>
            <Circle numCircle = '6'/>
          </Row>
        </Col>
      </Row>
      <Row style={{background: 'rgb(32,56,40)', background: `linear-gradient(180deg, ${colors[2]} 0%, ${colors[3]} 100%)`,
      height:'10%', marginRight: '0px', marginLeft: '0px', border:'none'}}/>
      <Row style={{backgroundColor:`${colors[3]}`, color:'black', paddingTop:'15vh', width:'100%', height:'auto',margin:'0'}}>
        <Col md="auto" className='text-center mx-auto'>
          <Row style={{paddingLeft:'10%', paddingRight:'10%'}}>
          <h1 className='text-center mx-auto seeThroughBox' style={{fontSize:'2rem'}}>
            {titles[3]}
          </h1>
          </Row>
          <Row style={{marginBottom:'5vh', paddingLeft:'10%', paddingRight:'10%'}}>
            <h1 className='text-center mx-auto seeThroughBox' style={{fontSize:'1rem'}}>
              {subtexts[3]}
            </h1>
          </Row>
          <Row style={{backgroundColor:`${colors[3]}`}}>
            <Circle numCircle = '7'/>
          </Row>
          <Row style={{backgroundColor:`${colors[3]}`}}>
            <Circle numCircle = '8'/>
          </Row>
          <Row style={{backgroundColor:`${colors[3]}`}}>
            <Circle numCircle = '9'/>
          </Row>
        </Col>
      </Row>
      <Row style={{background: 'rgb(32,56,40)', background: `linear-gradient(180deg, ${colors[3]} 0%, ${colors[1]} 100%)`,
      height:'10%', marginRight: '0px', marginLeft: '0px'}}/>
      <Row style={{backgroundColor:`${colors[1]}`, color:'black', paddingTop:'15vh', width:'100%', height:'auto',margin:'0'}}>
        <Col md="auto" className='text-center mx-auto'>
          <Row style={{paddingLeft:'10%', paddingRight:'10%'}}>
          <h1 className='text-center mx-auto seeThroughBox' style={{fontSize:'2rem'}}>
            {titles[1]}
          </h1>
          </Row>
          <Row style={{marginBottom:'5vh', paddingLeft:'10%', paddingRight:'10%'}}>
            <h1 className='text-center mx-auto seeThroughBox' style={{fontSize:'1rem'}}>
              {subtexts[1]}
            </h1>
          </Row>
          <Row style={{backgroundColor:`${colors[1]}`}}>
            <Circle numCircle = '3'/>
          </Row>
          <Row style={{backgroundColor:`${colors[1]}`}}>
            <Circle numCircle = '4'/>
          </Row>
          <Row style={{backgroundColor:`${colors[1]}`}}>
            <Circle numCircle = '5'/>
          </Row>
        </Col>
      </Row>
      <Row style={{background: 'rgb(32,56,40)', background: `linear-gradient(180deg, ${colors[1]} 0%, ${colors[0]} 100%)`,
      height:'10%', marginRight: '0px', marginLeft: '0px'}}/>
      <Row style={{backgroundColor:`${colors[0]}`, color:'black', paddingTop:'15vh', width:'100%', height:'auto',margin:'0'}}>
        <Col md="auto" className='text-center mx-auto'>
          <Row style={{paddingLeft:'10%', paddingRight:'10%'}}>
          <h1 className='text-center mx-auto seeThroughBox' style={{fontSize:'2rem'}}>
            {titles[0]}
          </h1>
          </Row>
          <Row style={{marginBottom:'5vh', paddingLeft:'10%', paddingRight:'10%'}}>
            <h1 className='text-center mx-auto seeThroughBox' style={{fontSize:'1rem'}}>
              {subtexts[0]}
            </h1>
          </Row>
          <Row style={{backgroundColor:`${colors[0]}`}}>
            <Circle numCircle = '0'/>
          </Row>
          <Row style={{backgroundColor:`${colors[0]}`}}>
            <Circle numCircle = '1'/>
          </Row>
          <Row style={{backgroundColor:`${colors[0]}`}}>
            <Circle numCircle = '2'/>
          </Row>
        </Col>
      </Row>
      <Row style={{background: 'rgb(32,56,40)', background: `linear-gradient(180deg, ${colors[0]} 0%, ${colors[4]} 100%)`,
      height:'10%', marginRight: '0px', marginLeft: '0px'}}/>
      <Row style={{backgroundColor:`${colors[4]}`, color:'black', paddingTop:'15vh', width:'100%', height:'auto',margin:'0'}}>
        <Col md="auto" className='text-center mx-auto'>
          <Row style={{paddingLeft:'10%', paddingRight:'10%'}}>
          <h1 className='text-center mx-auto seeThroughBox' style={{fontSize:'2rem'}}>
            {titles[4]}
          </h1>
          </Row>
          <Row style={{marginBottom:'5vh', paddingLeft:'10%', paddingRight:'10%'}}>
            <h1 className='text-center mx-auto seeThroughBox' style={{fontSize:'1rem'}}>
              {subtexts[4]}
            </h1>
          </Row>
          <Row style={{backgroundColor:`${colors[4]}`}}>
            <Circle numCircle = '10'/>
          </Row>
          <Row style={{backgroundColor:`${colors[4]}`}}>
            <Circle numCircle = '11'/>
          </Row>
          <Row style={{backgroundColor:`${colors[4]}`}}>
            <Circle numCircle = '12'/>
          </Row>
        </Col>
      </Row>
  </div>
  )
}

export default Mobilepager;
