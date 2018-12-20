<template>
    <div>
        <md-card md-with-hover>
            <md-ripple>
                <md-card-header>
                    <div class="md-title">Retourner à la page d'accueil</div>
                </md-card-header>
                <md-card-actions>
                    <md-button to="/home">Retourner</md-button>
                </md-card-actions>
            </md-ripple>
        </md-card>
        <md-card md-with-hover>
            <md-ripple>
                <md-card-header>
                    <div class="md-title">Démarrer le nouveau Jerry</div>
                </md-card-header>
                <md-card-actions>
                    <md-button>Lancer le Jerry</md-button>
                </md-card-actions>
            </md-ripple>
        </md-card>
    </div>
</template>

<script>
    export default {
        name: "start-or-home"
    }
</script>

<style scoped>
    div{
        margin: 20px;
    }
</style>