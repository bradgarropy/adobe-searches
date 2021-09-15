import {useSearch} from "hooks"
import React, {FC} from "react"

import styles from "./Searches.module.css"

const Searches: FC = () => {
    const searchCtx = useSearch()

    const onClick = () => {
        searchCtx.clearSearches()
    }

    return (
        <div className={styles.searches}>
            <span className={styles.header}>Recent searches</span>

            {searchCtx.searches.length ? (
                <>
                    {searchCtx.searches.map((search, index) => {
                        return (
                            <a
                                key={index}
                                className={styles.search}
                                href={`/?query=${search}`}
                            >
                                {search}
                            </a>
                        )
                    })}

                    <button
                        type="button"
                        className={styles.clearButton}
                        onClick={onClick}
                    >
                        Clear
                    </button>
                </>
            ) : (
                <p className={styles.empty}>No recent searches</p>
            )}
        </div>
    )
}

export default Searches
