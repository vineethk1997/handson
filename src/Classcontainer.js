import React, { Component } from 'react';

const heading = {
  display: "flex",
  margin: "10px",
  justifyContent: "space-around",
  width:"500px"
}

const heading2 = {
    margin: "15px",
    padding: "20px",
    backgroundColor: "aqua",
    width:"400px",
    height: "150px",
    borderRadius : "10px"
}

export class Classcontainer extends Component {
  render() {
    return (
        <div style={heading} className='div-container'>
                <span style={heading2} className='container-one'>This is created using functional component. This is done using internal CSS</span>
                
        </div>
    )
  }
}

export default Classcontainer  





