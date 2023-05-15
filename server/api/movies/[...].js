export default defineEventHandler((event) => {
    const id = [...event.node.req.url.split("/")].pop();
    const config = useRuntimeConfig();
    // return $fetch(`https://api.themoviedb.org/3/movie/550?api_key=46dc4e38fcf0f0b71b0ff4d0b53f6927`);
    // console.log("everything fine till here");
    return $fetch(`${config.apiBaseUrl}/movie/${id}?api_key=${config.apiKey}`, {
        method: "GET",
        // headers: {
        //     "Authorization": `Bearer ${config.apiKey}`
        // }
    })
})