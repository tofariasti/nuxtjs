<template>
    <div>
        Voce está acessando o video numero {{ $route.params.id }}
    </div>
</template>

<script setup>
    const route = useRoute();
    const idParams = computed(() => route.params.id);
</script>

<style lang="css" scoped>

</style>