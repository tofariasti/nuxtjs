<template>
    <div>
        Voce está acessando o video numero {{ idParams }}
    </div>
    <VideoDetalhes/>
    <VideoControlePlay/>
</template>

<script setup>
    definePageMeta({
        layout: 'exibicao',
        middleware: ['video']
    })

    const route = useRoute();
    const idParams = computed(() => route.params.id);
</script>

<style lang="css" scoped>

</style>