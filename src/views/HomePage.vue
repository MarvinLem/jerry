<template>
    <div class="page-container">
        <Header></Header>
        <CreateOrStart/>
    </div>
</template>

<script>
    import Header from '../components/Header';
    import CreateOrStart from '../components/CreateOrStart';

    export default {
        name: "home-page",
        components: {
            Header,
            CreateOrStart,
        }
    }
</script>

<style scoped>

</style>