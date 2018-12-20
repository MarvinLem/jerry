<template>
    <div class="page-container">
        <Header></Header>
        <InscriptionForm/>
    </div>
</template>

<script>
    import Header from "../components/Header"
    import InscriptionForm from "../components/InscriptionForm"

    export default {
        name: "auth-inscription",
        components: {
            Header,
            InscriptionForm,
        },
    }
</script>

<style scoped>

</style>