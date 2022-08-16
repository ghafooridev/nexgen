// Third-party imports
import { useEffect, RefObject, MouseEvent } from "react"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function useOnClickOutside
 * @category Hooks
 * @description Attaches a ref to a JSX node, and if a click event fires outside of it, calls the callback.
 * @param {Ref} ref - The ref that determines the targeted JSX node.
 * @param {(MouseEvent) => void} callback - The callback to fire if the click event was not on the DOM node.
 */
const useOnClickOutside = (
	ref: RefObject<Element>,
	callback: (event: MouseEvent) => void
): void => {
	useEffect(() => {
		const eventCallback = (event: MouseEvent): void => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				event.stopPropagation()
				event.preventDefault()
				callback(event)
			}
		}

		document.addEventListener("mousedown", eventCallback as any)
		document.addEventListener("touchstart", eventCallback as any)

		return () => {
			document.removeEventListener("mousedown", eventCallback as any)
			document.removeEventListener("touchstart", eventCallback as any)
		}
	}, [ref, callback])
}

export default useOnClickOutside
