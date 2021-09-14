import Searches from "components/Searches"
import {FC, useEffect, useState} from "react"

import styles from "./SearchBar.module.css"

const SearchBar: FC = () => {
    const [query, setQuery] = useState("")
    const [searches, setSearches] = useState([])
    const [shouldShowSearches, setShouldShowSearches] = useState(false)

    const addSearch = newSearch => {
        let newSearches = [...searches]

        // remove search if it already exists
        if (searches.includes(newSearch)) {
            newSearches = searches.filter(search => search !== newSearch)
        }

        // add search to the top of the list
        setSearches([newSearch, ...newSearches])
    }

    useEffect(() => {
        if (query || !searches.length) {
            setShouldShowSearches(false)
        }
    }, [query, searches])
    const onChange = event => {
        setQuery(event.target.value)
    }

    const onFocus = () => {
        if (!query && searches.length) {
            setShouldShowSearches(true)
        }
    }

    const onBlur = () => {
        setShouldShowSearches(false)
    }

    const onSubmit = event => {
        event.preventDefault()

        // add query to recent searches
        addSearch(query)

        // clear query
        setQuery("")
    }
    return (
        <>
            <form className={styles.searchbar} onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </form>

            {shouldShowSearches ? <Searches searches={searches} /> : null}
        </>
    )
}

export default SearchBar

// FIRST INTERVIEW

// https://stock.adobe.com/

// // SearchesContext.tsx
// const [recentSearches, setRecentSearches] = useState([])

// useEffect(() => {
//   // read recent searches from local storage
//   setRecentSearches(localRecentSearches)
// })

// const clearRecentSearches = () => {
//   setRecentSearches([])
//   // also in local storage
// }

// const addRecentSearch = (newSearch) => {
//   // if recent searches does not include new search, add it
//   if(!recentSearches.includes(newSearch)) {
//     setRecentSearches([newSearch, ...recentSearches])
//   }
//   else {
//     // remove newSearch if it exists
//     // add it to the front of the list
//   }
// }

// <SearchesProvider value={recentSearches, clearRecentSearches}/>

// // SearchBar.tsx
// const [query, setQuery] = useState("")

// const onSubmit = (event) => {
//   searchesCtx.addRecentSearch(event.currentTarget.value)
// }

// const onChange = (event) => {
//   setQuery(event.target.value)
// }

// <SearchBar onSubmit={onSubmit}>
//   // if value is empty, show recent searches
//   <label>Search</label>
//   <input type="text" onChange={onChange} value={query}/>

//   {query ? <Suggestions/> : <RecentSearches isOpen={isOpen}/>}
// </SearchBar>

// // RecentSearches.tsx
// type RecentSearchesProps = {}

// const searchesCtx = useContext(SearchesContext)

// const onClick = () => {
//   searchesCtx.clearRecentSearches()
// }

// <div>
//   <span>Recent searches</span>

//   //   iterate over searches
//   {searchesCtx.recentSearches.map(search => <p>{search}</p>)}

//   <button onClick={onClick}>Clear all</button>
// </div>

// SECOND INTERVIEW

// <RecentSearchesProvider>
//     <SearchBar>
//         const [query, setQuery] = useState("")
//         const [searches, setSearches] = useState([])

//         const onChange = (event) => {
//             setQuery(event.target.value)
//         }

//         const onSubmit = () => {
//             // if query isn't in searches
//             // add query to front of array (at index 0)

//             // if query is present
//             // remove it from the searches
//             // then add it to the frotn of the array
//             ctx.addRecentSearch()
//         }

//         <form onSubmit={onSubmit}>
//             <input type="text" onChange={onChange} value={query}>

//             // if !query
//             <RecentSearches searches={searches}/>
//             // else
//             <Suggestions/>
//         </form>
//     </SearchBar>
// </RecentSearchesProvider>

// -----------------

// const RecentSearches = ({searches}) => {
//     const onClick = () => {
//         clearRecentSearches()
//     }

//     <div>
//         <p>Recent Searches</p>
//         {searches.map(search => <p key={search}>{search}</p>)}
//         <button onClick={onClick}>Clear All</button>
//     </div>
// }

// ------------

// const context = {
//     query,
//     searches,
//     addRecentSearch,
//     clearRecentSearches,
// }

// ------------

// AutoComplete

// // debounce / throttle the fetch call
// // const res = await fetch('stock.com/autocomplete?q={ctx.query}')

// try {
//     stock.sdk.getSuggestions(ctx.query)
// } catch (error) {
//     // switch case on error codes
//     return <ErrorMessage/>
// }

// // if successful, render the suggetsions
// // if(res.code)

// // if failure
// *could not fetch suggetsions*

// // if loading, render spinner

// ----------------------

// const express = require(express)

// const server = express(.....)

// // routes

// server.get("/autocomplete", handler)

// server.listen(3000)
// --------

// const autocompleteHandler = (req, res) => {
//     const query = req.query
//     // calls out to elastic serach
//     const suggestions = es(query)
//     res.status(200).json(suggestion)

//     res.status(500).json({error})
// }
