import {renderHook} from "@testing-library/react-hooks"
import {useClickOutside} from "hooks"

test("renders hook", () => {
    const {result} = renderHook(() => useClickOutside())
    expect(result.current).toBeUndefined()
})
