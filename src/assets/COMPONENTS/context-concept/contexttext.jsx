import { useContext } from "react"
import { GlobalContext } from "./main";


export default function TextComponent(){
    const {theme}= useContext(GlobalContext);
        return <h1 style={{color: theme==='light' ? 'blue':'red', fontSize:theme==='light' ? '40px':'40px'}}>colour changes</h1>
}
