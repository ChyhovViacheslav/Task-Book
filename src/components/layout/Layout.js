import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";

const Layout = ({children}) => {
    const {type} = useContext(ThemeContext)
    return (
        <div className={type ? 'layout' : 'layout dark'}>
            {children}
        </div>
    )
}

export default Layout