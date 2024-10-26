import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductSize from './assets/COMPONENTS/products/productsize'
import ProductName from './assets/COMPONENTS/products/Components/product_design'
import IfElse from './assets/COMPONENTS/products/Components/if_else'
import ClassBasedComponent from './assets/COMPONENTS/class-based-component'
import Users from './assets/COMPONENTS/users/users'
import TextComponent from './assets/COMPONENTS/context-concept/contexttext'
import ButtonComponent from './assets/COMPONENTS/context-concept/contextbutton'
import GlobalContextComponent from './assets/COMPONENTS/context-concept/main'
import UseReducerExample from './assets/COMPONENTS/usereducer-example.jsx/usereducerexample'
//import FunctionBasedComponent from './assets/COMPONENTS/function-based-component'
function App() {
  return (
    <>
      <div>
        <h1 className='fullblueglow'>REACT BASICS </h1>
        
        <ProductSize name='Lokesh' frontend='React and React Native'/>
        {/* <IfElse /> */}
        <ClassBasedComponent />
        <Users />
        <GlobalContextComponent>
        <ButtonComponent />
        <TextComponent />
        </GlobalContextComponent>
        <UseReducerExample />

      </div>
     
    </>
    
  )
}

export default App
