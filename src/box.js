import React, { Component } from 'react';
import Classcontainer from './Classcontainer';



export class box extends Component {
  
    state = {
        flag1:false,
        flag2:false
      };

      show = () => {
        this.setState({ flag1: !this.state.flag1,flag2:this.state.flag2 });
      }

      showRight = () => {
        this.setState({ flag1: this.state.flag1,flag2:!this.state.flag2 });
      }
    

  render() {
    return (
        <div className='box-container'>
                   <div>
                   <button className='boxone' onClick={this.show}> To see styling in functional Component.</button>
                   <button className='boxtwo' onClick={this.showRight}>To see styling in Class Component.</button>
                   </div>
                   <div className='boxfive'>
                   {this.state.flag1 &&<Classcontainer/>}
                   {this.state.flag2 &&<Classcontainer/>}
                   </div>
        </div>
    )
  }
}

export default box





