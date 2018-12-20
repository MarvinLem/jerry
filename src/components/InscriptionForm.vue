<template>
    <div>
        <form class="md-layout">
            <div class="md-title">
                Inscrivez-vous
            </div>
            <md-field>
                <label>Email</label>
                <md-input v-model="newEmail" type="mail"/>
            </md-field>
            <md-field>
                <label>Nom d'utilisateur</label>
                <md-input v-model="newName" type="text"/>
            </md-field>
            <md-field>
                <label>Mot de passe</label>
                <md-input v-model="newPassword" type="password"/>
            </md-field>
            <md-field>
                <label>Confirmer le mot de passe</label>
                <md-input type="password"/>
            </md-field>
            <md-button class="md-raised md-primary" @click="createUser()">S'inscrire</md-button>
            <md-button class="md-primary" to="/">Se connecter</md-button>
        </form>
        <ul>
            <li v-for="user in users">{{user.name}}</li>
        </ul>
    </div>
</template>

<script>
    import { ALL_USERS_QUERY } from '../graphql/graphql.js';
    import { CREATE_USER_MUTATION } from "../graphql/graphql.js";

    export default {
        data () {
            return {
                newName: '',
                newPassword: '',
                newEmail: '',
                users: [],
            }
        },
        name: "inscription-form",
        apollo: {
            users: {
                query: ALL_USERS_QUERY
            }
        },
        methods: {
            createUser () {
                this.$apollo.mutate({
                    mutation: CREATE_USER_MUTATION,
                    variables: {
                        input: {
                            name: this.newName,
                            password: this.newPassword,
                            email: this.newEmail,
                        },
                    }
                })
            }
        }
    }
</script>

<style scoped>
    form{
        margin: 20px;
    }
</style>