<template>
        <div>
            <md-list>
                <md-list-item v-for="jerry in jerryFromUser">
                    <div>
                        <span class="md-list-item-text">{{jerry.name}}</span>
                        <span class="md-list-item-text">{{jerry.date.split("T")[0]}}</span>
                    </div>
                    <md-button class=" md-raised md-primary">Démarrer ce jerry</md-button>
                </md-list-item>
            </md-list>
        </div>
</template>

<script>
    import { JERRY_FROM_USER_QUERY } from "../graphql/graphql.js";
    import store from "../store.js";

    export default {
        data () {
            return {
                token: store.state.token,
            }
        },
        name: "list",
        apollo: {
            jerryFromUser: {
                query: JERRY_FROM_USER_QUERY,
                variables() {
                    return {
                        user_id: this.token
                    }
                }
            }
        },
    }
</script>

<style scoped>

</style>