<template>
    <div class="flex flex-col px-20 mt-10"> </div>
    <div class="grid grid-cols-7 gap-1"> 
        <img class="col-span-2" :src="imgUrl" alt="">
        <div class="text-4xl font-sans font-bold mb-5"> 
            {{ data?.title }}
        </div>
        <!-- <div class="flex">
            <div v-for="genre in data?.genres" :key="genre" class="px-4 py-2 bg-gray-200 text-grey-800 rounded mr-2 mb-2"> </div>    
            {{ genre.name }}
        </div> -->
        <div class="text-lg my-2">Release date: {{ data?.release_date }}</div>
        <div class="text-lg my-2">Duration: {{ data?.runtime }} Minutes</div>
        <p class="text-grey-600 text-m">{{data?.overview }}</p>
    </div>
</template>

<script setup lang="ts">
import { Movie } from '../../types/Movie';
import {computed} from 'vue';


const route = useRoute();
const config = useRuntimeConfig();
console.log("Route = " + route)

const movieId = computed(() => route.params.id);
const {data} = useFetch<Movie>(`/api/movies/${movieId.value}`)

const imgUrl = computed(() => data.value?.poster_path ?
`${config.public.imgBaseUrl}/${data.value?.poster_path}`:
'https://via.placeholder.com/300x500');

</script>
