import React, { useRef } from 'react';
import clamp from 'lodash-es/clamp'
import { useSprings, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import './styles.css'
import OtherPage from './components/otherpage.js'

const pages = [
  'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]

function Viewpager(){
  const index = useRef(2)
  var test = true
  console.log('this thing')
  const [props, set] = useSprings(pages.length, i => ({
    x: i * window.innerWidth - window.innerWidth*2,
    scale: 1,
    display: 'block'
  }))

  function Divs(data){
    console.log(data.number)
    return(
      <OtherPage number={data.number} triggerPhaseShift={() => {test = !test}}/>
    )
  }

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
      <animated.div style={{ scale, backgroundImage: `url(${pages[i]})` }}>
        <Divs number={i}/>
      </animated.div>
    </animated.div>
    ))
  )

}

export default Viewpager;
