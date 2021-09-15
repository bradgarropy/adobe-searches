import {renderHook} from "@testing-library/react-hooks"
import {useSearch} from "hooks"

test("returns context", () => {
    const {result} = renderHook(() => useSearch())
    expect(result.current).toEqual({})
})
