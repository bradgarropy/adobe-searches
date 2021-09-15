import userEvent from "@testing-library/user-event"
import SearchBar from "components/SearchBar"
import {SearchContext, SearchProvider} from "context"
import {mockSearchCtx} from "test-utils/mocks"
import {render, screen, waitFor} from "test-utils/render"

test("shows search bar", () => {
    render(
        <SearchProvider>
            <SearchBar />
        </SearchProvider>,
    )

    expect(screen.getByPlaceholderText("Search"))
})

test("accepts input", () => {
    render(
        <SearchProvider>
            <SearchBar />
        </SearchProvider>,
    )

    userEvent.type(screen.getByPlaceholderText("Search"), "test")
    expect(screen.getByPlaceholderText("Search")).toHaveValue("test")
})

test("shows and hides recent searches", () => {
    render(
        <SearchProvider>
            <SearchBar />
        </SearchProvider>,
    )

    expect(screen.queryByText("Recent searches")).not

    userEvent.click(screen.getByPlaceholderText("Search"))
    expect(screen.getByText("Recent searches"))

    userEvent.click(document.body)
    expect(screen.queryByText("Recent searches")).not

    screen.getByPlaceholderText("Search").focus()
    expect(screen.getByText("Recent searches"))

    userEvent.click(document.body)
    expect(screen.queryByText("Recent searches")).not
})

test("searches", () => {
    jest.mock("hooks/useSearch", () => {
        const originalUseSearch = jest.requireActual("hooks/useSearch")

        //Mock the default export and named export 'foo'
        return {
            __esModule: true,
            ...originalUseSearch,
            addSearch: jest.fn(),
        }
    })

    render(
        <SearchContext.Provider value={mockSearchCtx}>
            <SearchBar />
        </SearchContext.Provider>,
    )

    userEvent.type(screen.getByPlaceholderText("Search"), "test{enter}")

    waitFor(() => {
        expect(screen.queryByText("Recent searches")).not
        expect(mockSearchCtx.addSearch).toHaveBeenCalledTimes(1)
        expect(mockSearchCtx.addSearch).toHaveBeenCalledWith("test")
    })
})
