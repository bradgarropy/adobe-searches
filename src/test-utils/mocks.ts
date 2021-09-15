import {SearchCtx} from "context"

const mockMeta = {
    title: "🔎 adobe searches",
}

const mockFacebook = {
    url: "https://adobe-searches.vercel.app",
    type: "website",
    title: "🔎 adobe searches",
    description: "🔎 adobe interview question - recent searches",
    image: "https://adobe-searches.vercel.app/facebook.png",
}

const mockTwitter = {
    card: "summary",
    site: "@bradgarropy",
    title: "🔎 adobe searches",
    description: "🔎 adobe interview question - recent searches",
    image: "https://adobe-searches.vercel.app/twitter.png",
}

const mockSearchCtx: SearchCtx = {
    addSearch: jest.fn(),
    clearSearches: jest.fn(),
    query: "",
    searches: ["one", "two", "three"],
    setQuery: jest.fn(),
}

const mockEmptySearchCtx: SearchCtx = {
    addSearch: jest.fn(),
    clearSearches: jest.fn(),
    query: "",
    searches: [],
    setQuery: jest.fn(),
}

export {mockEmptySearchCtx, mockFacebook, mockMeta, mockSearchCtx, mockTwitter}
