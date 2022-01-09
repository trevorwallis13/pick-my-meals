import React from 'react'

function SearchMeal({ searchMeals, setSearchMeals }) {

    return (
        <form className="search-meal" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="filter-meals">Search</label>
            <input 
                id="filter-meals" 
                type="text" 
                role="searchbox"
                placeholder="Search"
                value={searchMeals}
                onChange={(e) => {
                    setSearchMeals(e.target.value);
                }}
            />
        </form>
    )
}

export default SearchMeal
