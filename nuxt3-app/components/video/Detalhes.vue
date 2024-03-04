<script setup lang="ts">
    const {diasPassados, diferencaEmDias} = useFormatacao()
    const dataVideo = new Date(2023,9,2);
    diasPassados(dataVideo);
</script>

<template>
    <h1>Video Detlahes - Nuxt 3</h1>
    <p>Author: Tiago</p>
    <p>{{ diferencaEmDias }} dias atras</p>
</template>