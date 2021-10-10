import { useState } from 'react'
export const useModeChange = (light) => {
    const [state, setState] = useState(light)
    return { state, setState }
}