import { Component } from "react";


class ClassBasedComponent extends Component{
    // state
        state = {
            ShowText: false,
            changeColor : false 
        };
        //componentdidmount >>>> which will render when first time when page is loaded 
        //componentdidupdate >>>> which will update the component on cetain conditions
        //componetwillunmount >>>> which will destroyed or unmount the component 
        handleClick = () => {
                const {changeColor,ShowText}= this.state ;
                console.log("buttton clicked");
                // this not recommended
                // this.state.ShowText = !this.state.ShowText ;
                this.setState({
                    ShowText: !ShowText,
                    changeColor:!changeColor

                });
        
        }
         render(){
       
        console.log(this.state);
        const {ShowText,changeColor} = this.state ;

        return(
            <div>
                <h1 style={{textAlign:'left',color:'yellowgreen'}}> class based component :</h1>
                { ShowText ? <h3 className="yellowglow">WHITE</h3> : <h3 className="yellowglow">BLACK</h3> }
                <button className='styled-button' onClick={this.handleClick}> TOGGLE THIS</button>
                {/* <h2 style={{color:changeColor ? 'white':'black'}}>  Touch the Button to Change My Colour </h2> */}
                {/* <button onClick={this.handleClick}> change</button> */}
            </div>
        );
    }
}
export default ClassBasedComponent ;