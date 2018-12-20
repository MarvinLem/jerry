<template>
    <div class="page-container">
        <Header></Header>
        <StartOrHome/>
    </div>
</template>

<script>
    import Header from '../components/Header';
    import StartOrHome from '../components/StartOrHome'

    export default {
        name: "end-creation",
        components: {
            Header,
            StartOrHome,
        }
    }
</script>

<style scoped>
</style>