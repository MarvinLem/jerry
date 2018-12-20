<template>
    <div>
        <form class="md-layout">
            <div class="md-title">
                Connectez-vous
            </div>
            <md-field>
                <label>Nom d'utilisateur</label>
                <md-input type="text" v-model="username"/>
            </md-field>
            <md-field>
                <label>Mot de passe</label>
                <md-input type="password" v-model="password"/>
            </md-field>
            <md-button to="/home" class="md-raised md-primary">Se connecter</md-button>
            <md-button to="/subscribe" class="md-primary">S'inscrire</md-button>
        </form>
        <ul>
            <li v-for="user in userConnexion">{{user.name}}</li>
        </ul>
    </div>
</template>

<script>
    import { USER_CONNEXION_QUERY } from '../graphql/graphql.js';

    export default {
        data () {
            return {
                username: '',
                password: '',
                userConnexion: [],
            }
        },
        name: "connexion-form",
        apollo: {
            userConnexion: {
                query: USER_CONNEXION_QUERY,
                variables() {
                    return {
                        name: this.username,
                        password: this.password
                    }
                }
            }
        },
    }
</script>

<style scoped>
    form{
        margin: 20px;
    }
</style>