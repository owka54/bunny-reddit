import React from "react";
import Filters from "../features/filters/filters";
import SearchBar from "../features/searchBar/searchBar";
import Article from "./Article";
import Header from "./header";
import RightSide from "./rightSide";



const Layout = ( {children} ) => {


    return (
        <>
        <div>
            <header className='header'>
                <Header />
            </header>
            <main className='App'>
                <RightSide />
                <Article />
            </main>
        </div>
        </>
    )
}

export default Layout;