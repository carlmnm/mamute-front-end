import { useEffect, useState } from "react"
import useMovies from "../hooks/api/useMovies"

export default function HomePage() {
    const { getMovies } = useMovies()
    const [homeMovies, setHomeMovies] = useState([])

    async function listMovies() {
        try {
            const popularMovies = await getMovies()
            setHomeMovies([popularMovies.results])

        } catch (error) {
            console.log(error)
        }

    }


    useEffect(() => {
        listMovies()
        console.log(homeMovies[0])
    }, [])

    return (
        <div class='flex bg-pattern justify-center items-center w-[100%] h-[100%]'>
            {/* <h2>olá</h2> */}
            {homeMovies.length ?
                <div class='flex flex-wrap w-[100%] h-[100%] justify-around items-center mt-[30px]'>
                    {homeMovies[0].map((movie) => (
                        <div class=' relative flex flex-col items-center justify-center w-[190px] h-[220px] ml-[40px] mr-[90px] mb-[100px] bg-opacity-20 bg-black rounded-[20px]'>
                            <img class='absolute top-[10px] w-[100px]' src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}></img>
                            <h1 class=' absolute bottom-0 text-white text-center mt-[10px]'>{movie.title}</h1>

                        </div>
                    ))}
                </div> : <span>carreagando...</span>}

        </div>
    )
}