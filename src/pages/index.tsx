import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import SearchBar from "components/SearchBar"
import {FC} from "react"

const IndexPage: FC = () => {
    return (
        <Layout>
            <SEO title="🔎 adobe searches" />
            <SearchBar />
        </Layout>
    )
}

export default IndexPage
