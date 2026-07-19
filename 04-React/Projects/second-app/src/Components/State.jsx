import React, { Component } from 'react'
import Cart from './Cart';

export default class State extends Component {

    constructor(props){
        super(props);

        this.state = {
            qty : 0,
            title:"kids Ride On"


        }
    }

     handleIncQty = () => {
        this.setState({qty: this.state.qty+1})
    }
     handleDecQty = () => {
      ( (this.state.qty>0) && (this.setState({qty: this.state.qty-1})))
    }
  render() {
    console.log("State componenet re-rendered");
    
    return (
      <div className='wrapper'>
        <div className='prod'>
            <img src="https://samstoy.in/cdn/shop/files/rn-image_picker_lib_temp_8c01df6a-8edc-45a8-85a2-3bfd23adf62b.webp?v=1752159255&width=1445" alt="" />
            <h2>Boys-Car, {this.state.title}</h2>
            <div className="qty">
                <button onClick={this.handleDecQty}>-</button>
                <p>{this.state.qty}</p>
                <button onClick={this.handleIncQty}>+</button>
            </div>
            <hr />
            <Cart qty={this.state.qty} title = {this.state.title}/>

        </div>
        <hr />
        
      </div>
    )
  }
}
