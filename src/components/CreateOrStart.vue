<template>
    <div>
        <md-card md-with-hover>
            <md-ripple>
                <md-card-header>
                    <div class="md-title">Créer un nouveau Jerry</div>
                </md-card-header>
                <md-card-actions>
                    <md-button to="/create">Démarrer la création</md-button>
                </md-card-actions>
            </md-ripple>
        </md-card>
        <md-card md-with-hover>
            <md-ripple>
                <md-card-header>
                    <div class="md-title">Démarrer un nouveau Jerry</div>
                </md-card-header>
                <md-card-actions>
                    <md-button to="/list">Afficher la liste des Jerry</md-button>
                </md-card-actions>
            </md-ripple>
        </md-card>
    </div>
</template>

<script>
    export default {
        name: "create-or-start",
    }
</script>

<style scoped>
        div{
            margin: 20px;
        }
</style>