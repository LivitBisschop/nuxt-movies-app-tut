<template>
    <nav class="flex justify-center mt-10">
        <NuxtLink class="px-4 py-2 border rounded-lg" to="/">Home Page</NuxtLink> <!--Nuxt link can be used to navigate between routes-->
    </nav>
    <main>
        <slot />
    </main>
</template>