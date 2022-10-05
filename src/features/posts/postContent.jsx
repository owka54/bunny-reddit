import { useSelector } from "react-redux"
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory"
import { selectTheme } from "../colorChange/colorChangeSlice"

export default function PostContent(props) {

    // const postData = convertTime(props.data.created_utc)
    const flairColor = useSelector(selectTheme)

    

    return (
        <div className={props.className}>
            <p>
                Posted by <strong>{props.data.author}</strong>
                <br/><br/>
                <time><em>Time goes here</em></time>
            </p>
            <header className='post-title'>
                <h2>{props.data.title}</h2>
                <span className='post-flair' style={{background: flairColor}}>{props.data.link_flair_text}</span>
            </header>

            {/* <Interactions /> */}
        </div>
    )
}