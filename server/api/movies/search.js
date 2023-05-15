

export default defineEventHandler((event) => {
    const {query, page} = getQuery(event);
    const config = useRuntimeConfig();

    // return $fetch(`https://api.themoviedb.org/3/movie/550?api_key=46dc4e38fcf0f0b71b0ff4d0b53f6927`);
    return $fetch(`${config.apiBaseUrl}/search/movie?query=${query}&api_key=${config.apiKey}&page=${page}` , {
        method: "GET",
        // headers: {
        //     "Authorization": `Bearer ${config.apiKey}` 
        // }
    })
})