import { useEffect, useState } from "react"
import useMovies from "../hooks/api/useMovies"

export default function HomePage() {
    const { getMovies } = useMovies()
    const [homeMovies, setHomeMovies] = useState([])

    async function listMovies() {
        try {
            const popularMovies = await getMovies()
            setHomeMovies([popularMovies.results])
            console.log(homeMovies)
        } catch (error) {
            console.log(error)
        }
    
    }


    useEffect(() => {
        listMovies()
    }, [])

    return (
        <div>
            <h2>olá</h2>
            {homeMovies.map((item) => (
                <h1 class='bg-yellow-300'>{item[2].title}</h1>
            ))}
        </div>
    )
}