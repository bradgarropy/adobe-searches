import SearchBar from "components/SearchBar"
import {render, screen} from "test-utils/render"

test("shows search bar", () => {
    render(<SearchBar />)
    expect(screen.getByPlaceholderText("Search"))
})
