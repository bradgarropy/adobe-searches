import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import SearchBar from "components/SearchBar"
import {SearchProvider} from "context"
import {FC} from "react"

const IndexPage: FC = () => {
    return (
        <Layout>
            <SEO title="🔎 adobe searches" />

            <SearchProvider>
                <SearchBar />
            </SearchProvider>
        </Layout>
    )
}

export default IndexPage
