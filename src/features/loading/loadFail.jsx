import { useDispatch, useSelector } from "react-redux";
import bunny from '../../assets/rabbit.png'
import { fetchBunnyData, selectUrl } from "../posts/postSourceSlice";
import { selectTheme } from "../colorChange/colorChangeSlice";

export default function LoadFail() {
    const error = useSelector(state => state.source.error)
    const theme = useSelector(selectTheme)
    const dispatch = useDispatch()
    const url = useSelector(selectUrl)

    let errorMessage

    if (error) {
        errorMessage = error
    } else {
        errorMessage = 'Sorry - something seems to have gone wrong.'
    }

    return (
        <div className='post-box-loading'>
            <div className='loader'>
                <p className='load-text'>{errorMessage}</p>
                <button type='button' onClick={() => dispatch(fetchBunnyData(url))} style={{color: theme}}>Reload Posts</button> 
                <figure>
                    <img className='fail-image' src={bunny} alt="a bunny" />
                </figure>
                <button type="button" onClick={() => window.location.reload()} style={{color: theme}}>Reload Page</button>
            </div>
        </div>
    )
}