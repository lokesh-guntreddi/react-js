import ProductSize from "../productsize"
import "./styling.css";
const Dummyproducts = ['Product1' , 'Product2', 'Product3']
function ButtonComp() {
    const shoot = ()=> {
        alert("Check Your Cart")
    }
  return (
       <button className="glow-button" onClick={shoot} style={{fontSize:'25px',fontStyle:'inherit',fontFamily:'cursives',textAlign:'center',textDecorationStyle:'double'}}> buy </button>
  )
}


function ProductName({singleproduct}) {
  return (
    <div >
      <p className="card" style={{fontSize:'25px',fontStyle:'inherit',fontFamily:'cursives',textAlign:'center',textDecorationStyle:'double'}}> {singleproduct} </p>
      <ButtonComp />
    </div>
  )
}
export default ProductName
