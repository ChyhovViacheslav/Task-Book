import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";

const Layout = ({children}) => {
    const {type} = useContext(ThemeContext)
    return (
        <div className={type === 'dark' ? 'layout dark' : 'layout'}>
            {children}
        </div>
    )
}

export default Layout