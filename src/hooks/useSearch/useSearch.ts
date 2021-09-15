import {SearchContext, SearchCtx} from "context"
import {useContext} from "react"

const useSearch = (): SearchCtx => {
    const searchCtx = useContext(SearchContext)
    return searchCtx
}

export default useSearch
