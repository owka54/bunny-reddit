import { useDispatch } from "react-redux";

export default function SearchBar() {
    const dispatch = useDispatch()

    return (
        <div className='searchbar'>
            <input type='text' placeholder="Search" />
        </div>
    )
}