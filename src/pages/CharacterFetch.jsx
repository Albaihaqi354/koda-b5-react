import React from 'react'
import useFetch from '../hooks/useFetch'

function CharacterFetch() {
    const { data, loading, error} = useFetch("https://rickandmortyapi.com/api/character")

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>
  return (
    <>
        <ul>
            {data.results.map((char) => (
                <li key={char.id}>{char.name}</li>
            ))}
        </ul>
    </>
  )
}

export default CharacterFetch