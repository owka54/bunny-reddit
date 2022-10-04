import { useDispatch } from "react-redux";

export default function Filters() {
    const dispatch = useDispatch()

    return (
        <div className="filters">
            <ul>
                <li><a href='#'>Hot</a></li>
                <li><a href='#'>New</a></li>
                <li><a href='#'>Top</a></li>
                <li><a href='#'>Rising</a></li>
            </ul>
        </div>
    )
}