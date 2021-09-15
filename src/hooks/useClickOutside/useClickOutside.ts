import {RefObject, useEffect} from "react"

const useClickOutside = <ElementType extends HTMLElement>(
    ref: RefObject<ElementType>,
    handler: (event: MouseEvent | KeyboardEvent) => void,
): void => {
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return
            }

            handler(event)
        }

        const handleKeypress = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                handler(event)
            }
        }

        document.addEventListener("mousedown", handleClick)
        document.addEventListener("keyup", handleKeypress)

        return () => {
            document.removeEventListener("mousedown", handleClick)
            document.removeEventListener("keyup", handleKeypress)
        }
    }, [ref, handler])
}

export default useClickOutside
