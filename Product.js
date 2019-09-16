import React,{Component} from 'react';
import './Product.css';

class Product extends Component{

constructor(){
  this.state={
    p_name :'Pure Food',
    p_img : 'https://i.pinimg.com/236x/3e/c5/2c/3ec52ccce37a3a7ac3d59149bd13035e.jpg',
    p_cost: 120,
    p_wt :330,
    p_gst: 12,

  }
}


render(){
  return(
    <div>
      <p>Product Name : {this.state.p_name}</p>
      <p>Product Image :
      <img src={this.state.p_img} height="100" width="100"/></p>
      <p>Product Cost : {this.state.p_cost}</p>
      <p>Product Weight : {this.state.p_wt}</p>
      <p>Product GST : {this.state.p_gst}</p>
    </div>
  )
}


}

export default Product;

