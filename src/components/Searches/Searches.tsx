import {FC} from "react"

import styles from "./Searches.module.css"

type SearchesProps = {
    searches: string[]
}

const Searches: FC<SearchesProps> = ({searches}) => {
    return (
        <div className={styles.searches}>
            {searches.map((search, index) => {
                return (
                    <p key={index} className={styles.search}>
                        {search}
                    </p>
                )
            })}
        </div>
    )
}

export default Searches
