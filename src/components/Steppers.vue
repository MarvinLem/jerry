<template>
    <div>
        <md-steppers md-alternative :md-active-step.sync="active" md-linear>
            <md-step id="first" md-label="Nom" :md-done.sync="first">
                <form class="md-layout">
                    <div class="md-title">
                        Options du nouveau Jerry
                    </div>
                    <md-field>
                        <label>Nom du Jerry</label>
                        <md-input v-model="newName" type="text"/>
                    </md-field>
                    <md-datepicker v-model="newDate">
                        <label>Date du Jerry</label>
                    </md-datepicker>
                    <md-button class="md-raised md-primary" @click="checkNameError()">Confirmer</md-button>
                    <p style="color: red" v-if="errorName" v-for="error in errorName">{{error}}</p>
                </form>
            </md-step>

            <md-step id="second" md-label="Projets" :md-done.sync="second">
                <form class="md-layout">
                    <div class="md-title">
                        Ajouter des nouveaux projets
                    </div>
                    <md-field>
                        <label>Nom du projet</label>
                        <md-input v-model="newProjectName" type="text"/>
                    </md-field>
                    <md-field>
                        <label>Cotation du projet (en %)</label>
                        <md-input v-model="newWeight" type="number" min="0" max="100"/>
                    </md-field>
                    <md-button class="md-raised md-primary" @click="checkProjectError()">Ajouter</md-button>
                    <p style="color: red" v-if="errorProject" v-for="error in errorProject">{{error}}</p>
                </form>
                <div v-if="projects.length > 0">
                    <div class="md-title bottom">
                        Liste des projets ajoutés
                    </div>
                    <div>
                        <md-list>
                            <div v-for="project in projects">
                                <md-list-item>{{ project.name }} --> {{ project.weight }}% de la cote</md-list-item>
                            </div>
                        </md-list>
                    </div>
                    <md-button class="md-raised md-primary" @click="goToStudents()">Confirmer</md-button>
                </div>
            </md-step>

            <md-step id="third" md-label="Etudiants" :md-done.sync="third">
                <form class="md-layout">
                    <div class="md-title">
                        Ajouter des étudiants
                    </div>
                    <md-field>
                        <label>Nom de l'élève</label>
                        <md-input v-model="newStudentName" type="text"/>
                    </md-field>
                    <md-checkbox v-for="project in projects">{{project.name}}</md-checkbox>
                    <md-button class="md-raised md-primary" @click="checkStudentError()">Ajouter</md-button>
                    <p style="color: red" v-if="errorStudent" v-for="error in errorStudent">{{error}}</p>
                    <div v-if="students.length > 0">
                        <div class="md-title bottom">
                            Liste des étudiants ajoutés
                        </div>
                        <div>
                            <md-list>
                                <div v-for="student in students">
                                    <md-list-item>{{ student.name }}</md-list-item>
                                </div>
                            </md-list>
                        </div>
                        <md-button class="md-raised md-primary" @click="goToJurists()">Confirmer</md-button>
                    </div>
                </form>
            </md-step>

            <md-step id="fourth" md-label="Juristes" :md-done.sync="fourth">
                <form class="md-layout">
                    <div class="md-title">
                        Ajouter les juristes
                    </div>
                    <md-field>
                        <label>Nom du juriste</label>
                        <md-input v-model="newJuristName" type="text"/>
                    </md-field>
                    <md-field>
                        <label>Email du juriste</label>
                        <md-input v-model="newJuristEmail" type="mail"/>
                    </md-field>
                    <md-button class="md-raised md-primary" @click="checkJuristError()">Ajouter</md-button>
                    <p style="color: red" v-if="errorJurist" v-for="error in errorJurist">{{error}}</p>
                    <div v-if="jurists.length > 0">
                        <div class="md-title bottom">
                            Liste des juristes ajoutés
                        </div>
                        <div>
                            <md-list>
                                <div v-for="jurist in jurists">
                                    <md-list-item>{{ jurist.name }} - {{ jurist.email }}</md-list-item>
                                </div>
                            </md-list>
                        </div>
                        <md-button class="md-raised md-primary" @click="checkJerryError()">Confirmer la création du Jerry</md-button>
                        <p style="color: red" v-if="errorJerry" v-for="error in errorJerry">{{error}}</p>
                    </div>
                </form>
            </md-step>
        </md-steppers>
    </div>
</template>

<script>
    import { ONE_USER_QUERY } from "../graphql/graphql";
    import { CREATE_JERRY_MUTATION } from "../graphql/graphql.js";
    import { ALL_PROJECTS_QUERY } from "../graphql/graphql.js";
    import { CREATE_PROJECT_MUTATION } from "../graphql/graphql.js";
    import { ALL_STUDENTS_QUERY } from "../graphql/graphql.js";
    import { CREATE_STUDENT_MUTATION } from "../graphql/graphql.js";
    import { ALL_JURISTS_QUERY } from "../graphql/graphql.js";
    import { CREATE_JURIST_MUTATION } from "../graphql/graphql.js";
    import router from "../router.js";
    import store from "../store.js";

    export default {
        data () {
            return {
                newName: '',
                newDate: '',
                newProjectName: '',
                newWeight: null,
                newStudentName: '',
                newJuristName: '',
                newJuristEmail: '',
                projects: [],
                jurists: [],
                students: [],
                user: [],
                active: 'first',
                first: false,
                second: false,
                third: false,
                fourth: false,
                errorName: [],
                errorProject: [],
                errorStudent: [],
                errorJurist: [],
                errorJerry: [],
                checkboxArray: [],
                token: store.state.token,
            }
        },
        name: "steppers",
        apollo: {
            projects: {
                query: ALL_PROJECTS_QUERY
            },
            jurists: {
                query: ALL_JURISTS_QUERY
            },
            students: {
                query: ALL_STUDENTS_QUERY
            },
            user: {
                query: ONE_USER_QUERY,
                variables() {
                    return {
                        id: this.token
                    }
                }
            }
        },
        methods: {
            createJerry () {
                this.$apollo.mutate({
                    mutation: CREATE_JERRY_MUTATION,
                    variables: {
                        input: {
                            name: this.newName,
                            date: this.newDate,
                            user_id: this.user[0].id,
                        },
                    }
                })
            },
            createProject () {
                this.$apollo.mutate({
                    mutation: CREATE_PROJECT_MUTATION,
                    variables: {
                        input: {
                            name: this.newProjectName,
                            weight: parseInt(this.newWeight),
                        },
                    },
                });
                this.$apollo.queries.projects.refetch();
            },
            createStudent () {
                this.$apollo.mutate({
                    mutation: CREATE_STUDENT_MUTATION,
                    variables: {
                        input: {
                            name: this.newStudentName,
                        },
                    }
                });
                this.$apollo.queries.students.refetch();
            },
            createJurist () {
                this.$apollo.mutate({
                    mutation: CREATE_JURIST_MUTATION,
                    variables: {
                        input: {
                            name: this.newJuristName,
                            email: this.newJuristEmail,
                        },
                    }
                });
                this.$apollo.queries.jurists.refetch();
            },
            checkNameError () {
                this.errorName = [];

                if(this.newDate === '') {
                    this.errorName.push("*Champ vide pour la date !");
                }

                if(this.newName === '') {
                    this.errorName.push("*Champ vide pour le nom !");
                }

                if(this.errorName.length === 0) {
                    this['first'] = true;

                    if ('second') {
                        this.active = 'second';
                    }
                }
            },
            checkProjectError () {
                this.errorProject = [];

                if(this.newProjectName === ''){
                    this.errorProject.push("*Champ vide pour le nom du projet !");
                }

                if(this.newWeight < 0 || this.newWeight > 100){
                    this.errorProject.push("*Rentrer une cote situé entre 0 et 100 !");
                }

                if(this.newWeight === null){
                    this.errorProject.push("*Champ vide pour la cote du projet !");
                }

                if(this.errorProject.length === 0) {
                    this.createProject();
                    this.newProjectName = '';
                    this.newWeight = '';
                }
            },
            goToStudents () {
                if(this.errorProject.length === 0) {
                    this['second'] = true;

                    if ('third') {
                        this.active = 'third';
                    }
                }
            },
            checkStudentError () {
                this.errorStudent = [];

                if(this.newStudentName === ''){
                    this.errorStudent.push("*Champ vide pour le nom de l'élève !");
                }

                if(this.errorStudent.length === 0) {
                    this.createStudent();
                    this.newStudentName = '';
                }
            },
            goToJurists () {
                if(this.errorProject.length === 0) {
                    this['third'] = true;

                    if ('fourth') {
                        this.active = 'fourth';
                    }
                }
            },
            checkJuristError () {
                this.errorJurist = [];

                if(this.newJuristName === '') {
                    this.errorJurist.push("*Champ vide pour le nom du juriste !");
                }

                if(this.newJuristEmail === '') {
                    this.errorJurist.push("*Champ vide pour l'email du juriste !");
                }

                if(this.errorJurist.length === 0) {
                    this.createJurist();
                    this.newJuristName = '';
                    this.newJuristEmail = '';
                }
            },
            checkJerryError () {
                this.errorJerry = [];

                if (this.students.length > 0 || this.projects.length > 0 || this.jurists.length > 0) {
                    this.createJerry();
                    router.push('endcreate');
                } else {
                    this.errorJerry.push('*Il reste des données à compléter');
                }
            }
        },
    }
</script>

<style scoped>
    div.bottom{
        padding-top: 30px;
    }
</style>