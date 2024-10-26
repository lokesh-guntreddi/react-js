import React, { useEffect, useState } from 'react'
import ProductName from './Components/product_design';
const Dummyproducts = ['Product1' , 'Product2', 'Product3']
//function ProductSize(props) {
    //const {name,frontend} = props ;
    //productsize === product list 
    
    function ProductSize( {name , frontend }) {
      const initialvalue = true ;
    const [flag,setflag] = useState(initialvalue);
    function HandleFlag(){
        setflag(!flag)
    }
    // useEffect(()=>{
    //     setflag(!flag)
    //     //console.log('this is page load');
    // },[]);// this will load on once when page is loaded or refresh because the dependency or list is empty 
    const [count,setcount] = useState(1)
    const [changeStyle,setchangeStyle] = useState(false)
    useEffect(()=>{
      count%10 == 0 ? setchangeStyle(true):setchangeStyle(false) ;
    },[count]);
    function handleColor(){
        setcount(count+1)
    }
    return (
    <div>
      <h2 className='blueglow'><u>CONCEPTS OF REACT BASICS </u> </h2>
      <h3 style={{textAlign:'left',color:'yellowgreen'}}> This is the example of using props (which are underline):</h3>
      <h3 className='fullgreenglow'>Hi! This is  <u>{name}</u> and I am very Entusiasit and Passionate about Technologies and My Journey starts with Frontend <u>{frontend}</u></h3>
      <div>
      <h3 style={{color:'yellowgreen' , textAlign:'left'}}>Using Hooks(useState,useEffect,useContext,UseReducer) :</h3>
      <h2>Click the Button to Change the Text React {'<'}=={'>'} React Native</h2>
      <button onClick={HandleFlag} className='purple-glow-button'> Click Here</button>
      {
        flag ?( <h2 className='blueglow'>React </h2>) : (<h2 className='pinkglow'>React Native</h2>)
      }
      </div>
      <h3 style={{textAlign:'left',clour:'grey' ,fontFamily:'serif'}}>When Count is Multiple of 10 , Observe the Button : </h3>
      <button className={changeStyle? 'purple-glow-button':'glow-button'} onClick={handleColor} > Click Here To Increase Count</button>
      <h1 style={{fontFamily:'monospace',fontSmooth:'blue',fontOpticalSizing:'initial',fontVariantNumeric:'oldstyle-nums'}}>count is {count}</h1>
      <ul>{ Dummyproducts.map((product,index)=>(<ProductName singleproduct={product} key={index}/>))}
      </ul>
      {/* <ProductName listofproducts={Dummyproducts} /> */}
      {/* <ProductName /> */}
    </div>
  )
}

export default ProductSize;
