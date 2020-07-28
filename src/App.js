import React from 'react'
import Viewpager from './Viewpager.js'
import Mobilepager from './Mobilepager.js'

class App extends React.Component {

  render(){
    console.log(window.orientation)
    if(window.orientation < 1){
      return(<Mobilepager/>)
    } else {
      return(
        <Viewpager/>
      )
    }
  }
}

export default App;
