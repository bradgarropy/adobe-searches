import Searches from "components/Searches"
import {render} from "test-utils/render"

test("shows recent searches", () => {
    render(<Searches searches={[]} />)
})
