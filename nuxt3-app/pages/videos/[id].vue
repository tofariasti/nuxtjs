<template>
    <div>
        Voce está acessando o video numero {{ $route.params.id }}
    </div>
    <VideoDetalhes/>
    <VideoControlePlay/>
</template>

<script setup>
    definePageMeta({
        layout: 'exibicao',
    })

    const route = useRoute();
    const idParams = computed(() => route.params.id);
</script>

<style lang="css" scoped>

</style>