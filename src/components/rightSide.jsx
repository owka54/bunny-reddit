import ColorChange from "../features/colorChange/colorChange"
import About from "./about"
import Rules from "./rules"
import { selectTheme } from "../features/colorChange/colorChangeSlice"
import { useSelector } from "react-redux"


export default function RightSide() {

    const themeColor = useSelector(selectTheme)

    return (
        <div className='right-side-container'>
            <div className='theme-selector' style={{borderColor: themeColor}}>
                <ColorChange />
            </div>
            <div className="about" style={{borderColor: themeColor}}>
                <About />
            </div>
            <div className='rules' style={{borderColor: themeColor}}>
                <Rules />
            </div>
        </div>
    )
}