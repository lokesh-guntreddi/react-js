import { createContext, useState } from "react"


export const GlobalContext = createContext();
function GlobalContextComponent({children}) {
    
    const [theme,settheme] = useState('light');
    function HandleChangeThemeOnButtonClick(){
        settheme(theme==='light'?'dark':'light')
    }
    return( <GlobalContext.Provider value={{theme,settheme,HandleChangeThemeOnButtonClick}}>{children}</GlobalContext.Provider>
    )
}
export default GlobalContextComponent;