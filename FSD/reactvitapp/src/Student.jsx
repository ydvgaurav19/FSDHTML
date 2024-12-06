import React from 'react'
import './style.css'
function Student({data}) {
  return (
    <div> 
        <div className='icard'>
            <table>
                <th style={{backgroundColor:'brown',color:'white'}} colspan={2}>student information</th>
                <tbody>
                    <tr><td colSpan={2}><img src={data.image}/></td></tr>
                    <tr><td>Name:</td><td>{data.name}</td></tr>
                    <tr><td>Roll:</td><td>{data.Roll}</td></tr>
                    <tr><td>college:</td><td>{data.college}</td></tr>
                </tbody>
            </table>
           
        </div> 
    </div>
  )
}

export default Student