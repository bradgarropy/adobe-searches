import Searches from "components/Searches"
import {useClickOutside, useSearch} from "hooks"
import {FC, useRef, useState} from "react"

import styles from "./SearchBar.module.css"

const SearchBar: FC = () => {
    const searchCtx = useSearch()
    const searchBarRef = useRef(null)
    const [shouldShowSearches, setShouldShowSearches] = useState(false)

    useClickOutside(searchBarRef, () => {
        setShouldShowSearches(false)
    })

    const onOpen = () => {
        setShouldShowSearches(true)
    }

    const onChange = event => {
        searchCtx.setQuery(event.target.value)
    }

    const onSubmit = event => {
        event.preventDefault()

        // close the recent searches
        setShouldShowSearches(false)

        // add query to recent searches
        searchCtx.addSearch(searchCtx.query)

        // clear query
        searchCtx.setQuery("")

        // navigate to search results
        window.location.href = `/?q=${searchCtx.query}`
    }

    return (
        <form ref={searchBarRef} onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Search"
                value={searchCtx.query}
                onChange={onChange}
                onClick={onOpen}
                onFocus={onOpen}
                className={styles.searchInput}
            />

            {shouldShowSearches ? <Searches /> : null}
        </form>
    )
}

export default SearchBar
