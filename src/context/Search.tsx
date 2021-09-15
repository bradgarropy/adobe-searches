import PropTypes from "prop-types"
import {createContext, FC, useState} from "react"

type SearchCtx = {
    query: string
    setQuery: (query: string) => void
    searches: string[]
    addSearch: (query: string) => void
    clearSearches: () => void
}

const SearchContext = createContext({} as SearchCtx)

const SearchProvider: FC = ({children}) => {
    // load searches from local storage
    let localSearches: string[] = []

    if (process.browser) {
        localSearches =
            JSON.parse(window.localStorage.getItem("searches")) ?? []
    }

    const [query, setQuery] = useState("")
    const [searches, setSearches] = useState(localSearches)

    const addSearch = (newSearch: string): void => {
        let newSearches = [...searches]

        // remove search if it already exists
        if (searches.includes(newSearch)) {
            newSearches = searches.filter(search => search !== newSearch)
        }

        newSearches = [newSearch, ...newSearches]

        // add search to the top of the list
        setSearches(newSearches)

        // save searches to local storage
        window.localStorage.setItem("searches", JSON.stringify(newSearches))
    }

    const clearSearches = (): void => {
        setSearches([])

        // save searches to local storage
        window.localStorage.setItem("searches", JSON.stringify([]))
    }

    const context: SearchCtx = {
        query,
        setQuery,
        searches,
        addSearch,
        clearSearches,
    }

    return (
        <SearchContext.Provider value={context}>
            {children}
        </SearchContext.Provider>
    )
}

SearchProvider.propTypes = {
    children: PropTypes.node,
}

export {SearchContext, SearchProvider}
export type {SearchCtx}
