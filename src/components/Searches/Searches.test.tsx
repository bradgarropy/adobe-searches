import userEvent from "@testing-library/user-event"
import Searches from "components/Searches"
import {useSearch} from "hooks"
import {mockEmptySearchCtx, mockSearchCtx} from "test-utils/mocks"
import {render, screen, waitFor} from "test-utils/render"

jest.mock("hooks")
const useSearchMock = useSearch as jest.MockedFunction<typeof useSearch>

test("shows recent searches", () => {
    useSearchMock.mockReturnValue(mockSearchCtx)

    render(<Searches />)

    expect(screen.getByText("Recent searches"))

    mockSearchCtx.searches.forEach(search => {
        expect(screen.getByText(search)).toHaveAttribute(
            "href",
            `/?query=${search}`,
        )
    })
})

test("shows no recent searches", () => {
    useSearchMock.mockReturnValue(mockEmptySearchCtx)

    render(<Searches />)

    expect(screen.getByText("Recent searches"))
    expect(screen.getByText("No recent searches"))
})

test("clears recent searches", () => {
    useSearchMock.mockReturnValue(mockSearchCtx)

    render(<Searches />)

    mockSearchCtx.searches.forEach(search => {
        expect(screen.getByText(search))
    })

    userEvent.click(screen.getByText("Clear"))

    waitFor(() => {
        mockSearchCtx.searches.forEach(search => {
            expect(screen.getByText(search)).not
        })

        expect(screen.getByText("No recent searches"))
    })
})
