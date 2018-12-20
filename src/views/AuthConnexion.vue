<template>
    <div class="page-container">
        <Header></Header>
        <ConnexionForm/>
    </div>
</template>

<script>
    import Header from "../components/Header"
    import ConnexionForm from "../components/ConnexionForm"

    export default {
        name: "auth-connexion",
        components: {
            Header,
            ConnexionForm,
        },
    }
</script>

<style scoped>

</style>