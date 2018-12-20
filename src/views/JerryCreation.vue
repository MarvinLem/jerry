<template>
    <div class="page-container">
        <Header></Header>
        <Steppers/>
    </div>
</template>

<script>
    import Header from '../components/Header';
    import Steppers from '../components/Steppers';

    export default {
        name: "jerry-creation",
        components: {
            Header,
            Steppers,
        }
    }
</script>

<style scoped>

</style>