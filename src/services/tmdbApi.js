import api from './externalApi'


export async function getMovies() {
    const response = await api.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=898930a4e091ba50dff85a5eef59a19c`)
    return response.data
}
