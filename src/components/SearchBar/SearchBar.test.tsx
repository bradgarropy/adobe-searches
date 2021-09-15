import userEvent from "@testing-library/user-event"
import SearchBar from "components/SearchBar"
import {SearchContext, SearchProvider} from "context"
import {useSearch} from "hooks"
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
    const searchCtx = useSearch()
    jest.spyOn(searchCtx, "addSearch")

    render(
        <SearchProvider>
            <SearchBar />
        </SearchProvider>,
    )

    userEvent.type(screen.getByPlaceholderText("Search"), "test{enter}")

    waitFor(() => {
        expect(screen.queryByText("Recent searches")).not
        expect(searchCtx.addSearch).toHaveBeenCalledTimes(1)
        expect(searchCtx.addSearch).toHaveBeenCalledWith("test")
    })
})
