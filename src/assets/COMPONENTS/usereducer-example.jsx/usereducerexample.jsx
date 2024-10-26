import { useReducer } from "react";

const initialState={
    showtextflag : false,
    changestyleflag:false
}
const showtext = 'showtext';
const hidetext = 'hidetext';
const changetext = 'changetext';

function reducer(state,action){
        switch (action.type) {
            case showtext:
            return{...state,
            showtextflag:true
            }
            case hidetext:
                return{...state,
                    showtextflag:false
                }
            case changetext:
            return{
                ...state,
                changestyleflag:!state.changestyleflag
            }
            default:
                state
        }
}


export default function UseReducerExample(){
    const [state,dispatch]=useReducer(reducer,initialState);
    return(
        <div>
            {
                state?.showtextflag ? <h3  style={{backgroundColor : state?.changestyleflag ?'blue':'red' , fontFamily:'cursive'}}> use reducer example</h3>:null 
            }
            <button className="gradient-button" onClick={ () => dispatch({ type : showtext}) }>SHOW TEXT</button>
            <button className="gradient-button" onClick={ () => dispatch({ type : hidetext}) }> HIDE TEXT</button>
            <button className="gradient-button" onClick={ () => dispatch({ type : changetext}) }> TOGGLE TEXT STYLE</button>
        </div>
    );
}