import useAsync from "../useAsync";

import * as moviesApi from '../../services/tmdbApi'

export default function useMovies() {
    const {
        data: movies,
        loading: moviesLoading,
        error: moviesError,
        act: getMovies,
    } = useAsync(moviesApi.getMovies, false)

    return {
        movies,
        moviesLoading,
        moviesError,
        getMovies,
    }
}