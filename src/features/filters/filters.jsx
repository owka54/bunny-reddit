import { useDispatch, useSelector } from "react-redux";

import { filterChanged, selectURL } from "./filtersSlice";

export default function Filters() {
    const dispatch = useDispatch()

    const changeFilter = (e) => {
        console.log(e.value)

        const filter = e.target.value;
        dispatch(filterChanged(filter))
    }

    return (
        <div className="filters">
            <ul>
                <button
                    value='hot'
                    onClick={changeFilter}>
                    Hot
                </button>
                <button
                    value='new'
                    onClick={changeFilter}>
                    New
                </button>
                <button
                    value='top'
                    onClick={changeFilter}>
                    Top
                </button>
                <button
                    value='rising'
                    onClick={changeFilter}>
                    Rising
                </button>
            </ul>
        </div>
    )
}