import { useContext } from "react"
import { GlobalContext } from "./main";

// function HandleEvent(theme,settheme){
    
//     {
//         if(theme==='light'){
//             settheme('dark');
//         }
//         else{
//             settheme('light');
//         }
//     }
// }

export default function ButtonComponent(){
    
    const {HandleChangeThemeOnButtonClick} = useContext(GlobalContext);
   return (
    <><h2 style={{textAlign:"left",color:'yellowgreen'}}>useContext : </h2> <button className="styled-button" onClick={HandleChangeThemeOnButtonClick}> chnage the color</button></>)
}