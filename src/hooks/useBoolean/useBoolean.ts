// Third-party imports
import { useState, useCallback } from "react"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function useBoolean
 * @category Hooks
 * @description React Hook used to maintain a boolean state in a component. Useful for keeping something closed/open in a way that doesn't interact with the rest of the website. Examples: checkboxes, buttons, modals, dropdowns, etc.
 * @param {boolean} init - Initial value of the Hook state.
 */
const useBoolean = (init: any): [boolean, () => void, () => void, () => void] => {
	const [boolean, setBoolean] = useState(!!init)
	const setBooleanToTrue = useCallback(() => setBoolean(true), [])
	const setBooleanToFalse = useCallback(() => setBoolean(false), [])
	const toggleBoolean = useCallback(() => setBoolean(b => !b), [])
	return [boolean, setBooleanToTrue, setBooleanToFalse, toggleBoolean]
}

export default useBoolean
