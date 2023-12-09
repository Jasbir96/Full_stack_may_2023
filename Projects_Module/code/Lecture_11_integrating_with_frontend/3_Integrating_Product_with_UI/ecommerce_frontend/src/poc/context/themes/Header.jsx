import "./themeManager.css";
import { ThemeWrapper } from "./ThemeManger";
import React, {useContext} from "react";
function Header() {
    // console.log(CTheme);
    return (<div style={{ border: "1px solid ", padding: "1rem", margin: "1rem" }}>
        <div >Header</div>
        <div>⬇</div>
        <Options></Options>
        <Options></Options>
        <Options></Options>
        <div>-----------------------------</div>
    </div>)
}
function Options() {
    const { CTheme } = useContext(ThemeWrapper);
    return <div className={CTheme == "light" ? "light" : "dark"}>Option</div>
}
export default Header;