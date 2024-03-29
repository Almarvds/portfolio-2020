import React, { useRef } from 'react';
import clamp from 'lodash-es/clamp'
import { useSprings, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import './styles.css'
import OtherPage from './components/otherpage.js'

const pages = [
  'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]

const colors = [
  '#203828',
  '#193138',
  '#212436',
  '#251738',
  '#38171A'
]

function Viewpager(){
  function Divs(data){
    return(
      <div style={{backgroundColor:'rgba(0,0,0,0.3)', height:'100%'}}>
      <OtherPage number={data.number} triggerPhaseShift={() => {test = !test}}/>
      </div>
    )
  }
  
  const index = useRef(2)
  var test = true
  const [props, set] = useSprings(pages.length, i => ({
    x: i * window.innerWidth - window.innerWidth*2,
    scale: 1,
    display: 'block'
  }))

  const bind = useDrag(({ down, movement: [mx], direction: [xDir], distance, cancel }) => {
    if(test){
      if (down && distance > window.innerWidth / 2){
        cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)))
      }
      set(i => {
        if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
        const x = (i - index.current) * window.innerWidth + (down ? mx : 0)
        const scale = down ? 1 - distance / window.innerWidth / 2 : 1
        return { x, scale, display: 'block' }
      })
    }
  })
  return(
    props.map(({ x, display, scale }, i) => (
    <animated.div {...bind()} key={i} style= {{ display, x, padding:'2%' }}>
      <animated.div  style={{ scale, backgroundColor: `${colors[i]}` }}>
        <Divs number={i}/>
      </animated.div>
    </animated.div>
    ))
  )

}

export default Viewpager;
