import React, { useState } from 'react'

function useInput(initialValue = "", rules= {}) {
    const [value, setValue] = useState(initialValue)
    const [error, setError] = useState("")

    const validate = (val) => {
        if (rules.required && !val){
            setError("No No no!")
            return false
        }

        if (rules.minLength && val.length < rules.minLength) {
            setError(`Minimal Pajang ${rules.minLength} character`)
            return false
        }

        setError("")
        return true
    }

    const onChange = ((e) => {
        const val = e.target.value
        setValue(val)
        validate(val)
    })

    const reset = () => {
        setValue(initialValue)
        setError("")
    }

    const isValid = error === "" && value.length > 0

    return [
        value,
        isValid,
        error,
        onChange,
        reset
    ]
}

export default useInput