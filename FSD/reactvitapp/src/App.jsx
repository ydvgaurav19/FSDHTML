import React from 'react'
import Student from './student'
import Statehandling from './Statehandling'


function App() {
  const studentdata=[{
    image:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png ",
    name:"Rahul kumar",
    Roll:"12354",
    college:"ABES"
  },
  {
    image:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png ",
    name:"Rahul",
    Roll:"12354",
    college:"ABES"
  }]
  return (
    <div>
      <div>
        <h2 style={{color:'red'}}>Hello reactjs</h2>
      </div>
      <Statehandling/>
      {
        studentdata.map((ele)=>{
          return(
             <Student data={ele} />
          )
        })
      }
      {/* <Student image={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png ' height ={50}  width ={50} />} name="Rahul Kumar" roll="1234" college="abes"/> */}

    </div>
    
  )
}

export default App