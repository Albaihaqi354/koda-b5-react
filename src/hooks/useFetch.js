import { useState, useEffect } from 'react'

function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if(!url) return;

        const fetchData = async () => {
            setLoading(true)
            setError(null)

            try {
                const res = await fetch(url)
                if(!res.ok) {
                    throw new Error(`Error ${res.status}`)
                }

                const json = await res.json()
                setData(json)
                setLoading(false)
            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        }

        fetchData()
    }, [url])

    return {data, loading, error}
}   

export default useFetch