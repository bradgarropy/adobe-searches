import {renderHook} from "@testing-library/react-hooks"
import { useSearch } from "hooks"

test("renders hook", () => {
    const {result} = renderHook(() => useSearch())
    expect(result.current).toBeUndefined()
})
