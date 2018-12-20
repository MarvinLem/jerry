<template>
    <div class="page-container">
        <Header></Header>
        <List/>
    </div>
</template>

<script>
    import Header from '../components/Header.vue';
    import List from '../components/List.vue';


    export default {
        name: "jerry-list",
        components: {
            Header,
            List
        }
    }
</script>

<style scoped>

</style>