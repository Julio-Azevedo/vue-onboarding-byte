<template>
    <header>
        <nav class="navbar">
            <div class="perfil">
                <img src="@/assets/padrão.png" alt="ImgPerfil">
                <p>Nome</p>
            </div>
        </nav>
        
        <div class="search">
            <input type="search" placeholder="procure aqui ...">
            <div id="magnifier"></div>
        </div>
    </header>
    <hr class="line">

    <main>
        <div class="sections">

            <!-- Primeira seção -->
            <section class="sec-1">
                <input type="text" v-model="question" placeholder="escreva aqui sua duvida ou problema..." @keyup.enter="createQuestion"> 
                <button id="plane" @click="createQuestion" type="submit"></button>
            </section>

            <!-- Segunda seção -->
            <section class="sec-2">
                <h3>Duvidas e Perguntas</h3>
                <!-- Se não houver perguntas na segunda section -->
                <div v-if="submittedQuestions.length === 0" class="no-questions">
                    <p>Nenhuma pergunta disponível... T_T</p>
                </div>
                <!-- Se houver perguntas na segunda section -->
                <div v-for="(question, index) in submittedQuestions" :key="index" class="questions">
                    <div class="main-question">
                        <p>{{ question }}</p>
                    </div>
                    <div class="interaction-card">
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-regular fa-thumbs-up"></i>
                        <i class="fa-regular fa-thumbs-down"></i>
                    </div>
                    <div class="del-btn">
                        <button @click="deleteQuestion(index)" type="button"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div> 
            </section>
        </div>

        <article class="arti">
            <h3>Recentes</h3>
            <!-- Se não houver perguntas no article -->
            <div v-if="submittedQuestions.length === 0" class="no-questions">
                <p>Nenhuma pergunta disponível... T_T</p>
            </div>
            <!-- Se houver perguntas no article -->
            <div v-for="(question, index) in submittedQuestions.slice().reverse()" :key="index" class="question-cards">
                <div class="card-quest">
                    <p>{{ question }}</p>
                </div>
                <div class="quest-interation">
                    <p>Nome</p>
                    <div class="quest-icons">
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-regular fa-thumbs-up"></i>
                        <i class="fa-regular fa-thumbs-down"></i>
                    </div>
                </div> 
            </div>
        </article>

    </main>
</template>

<script>
export default {
    name: "MainPage",

    data() {
        return {
            question: "",
            submittedQuestions: [],
        }
    },
    methods: {
        createQuestion() {
            if (this.question.trim() === "") {
                return;
            }
            this.submittedQuestions.push(this.question)
            this.question = ""
            localStorage.setItem('submittedQuestions', JSON.stringify(this.submittedQuestions));
        },

        loadSubmittedQuestions() {
        const submittedQuestions = localStorage.getItem('submittedQuestions');
            if (submittedQuestions) {
                this.submittedQuestions = JSON.parse(submittedQuestions);
            }
        },

        deleteQuestion(index) {
            this.submittedQuestions.splice(index, 1)
            localStorage.setItem('submittedQuestions', JSON.stringify(this.submittedQuestions));
        }
    },
    mounted() {
        this.loadSubmittedQuestions();
    },
}
</script>

<style scoped>
    /* CSS HEADER */
header {
    height: 7vh;
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    justify-content: space-between;
}

.navbar .perfil {
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar .perfil img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 4px 0px 10px rgba(255, 121, 198, 0.25);
}

.navbar .perfil p {
    font-weight: bold;
}

.search {
    display: flex;
    justify-content: flex-end;
}

.search input {
    width: 300px;
    height: 35px;
    border: 0;
    padding: .5rem;
    border-radius: 5px;
    background-color: var(--secondary-color);
    box-shadow: 0px 2px 1px rgba(255, 122, 198, 0.4);
}

.search #magnifier {
    padding: inherit;
    margin: 8px 35px 0px -30px;
    cursor: pointer;
}

.search #magnifier::after {
    font-family:FontAwesome;
    font-size: 1rem;
    content:"\f002";
    color: var(--primary-color);
}

.line {
    color: #292730;
}

main {
    display: flex;
    overflow: hidden;
}

.sections {
    display: flex;
    flex-direction: column;
}

.sec-1 {
    width: 80vw;
    height: 10vh;
    display: flex;
    padding: 0 1.5rem;
    align-items: center;
    margin-bottom: 2rem;
}

.sec-1 input {
    border: 0;
    width: 80vw;
    padding: 1.5rem;
    border-radius: 4px;
    background-color: var(--secondary-color);
}

.sec-1 #plane {
    padding: inherit;
    margin: 3px 0px 0px -65px;
    cursor:pointer
}

.sec-1 button {
    background-color: transparent;
    border: 0;
}

#plane:after{
    font-family:FontAwesome;
    font-size: 1rem;
    content:"\f1d8";
    color: var(--primary-color);
 }

.sec-2 {
    width: 82vw;
    overflow-y: scroll;
    padding: 1.5rem;
    height: calc(100vh - 21vh);
}

.no-questions {
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
}

.sec-2 .questions {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin: 1rem 0 0 0;
    flex-grow: 1;
}

.sec-2 .questions button i {
    color: var(--primary-color);
}

.sec-2 h3{
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.sec-2 .main-question {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 80px;
    padding: 1rem;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    overflow-y: scroll;
    background-color: var(--secondary-color);
    flex-grow: 1;
}

.sec-2 .main-question p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100%;
    width: 100%;
    word-wrap: break-word !important;
    flex-grow: 1;
}

.interaction-card {
    display: flex;
    background-color: var(--terciary-color); 
    padding: 1rem;
    gap: 20px;
    min-height: 77px;
    border-radius: 0 4px 4px 0;
}

.interaction-card i {
    display: flex;
    align-self: center;
    color: var(--primary-color);
    cursor: pointer;
    font-size: 1.25rem;
}

.del-btn {
    display: flex;
    align-items: center;
}
.sec-2 .del-btn button {
    background-color: var(--secondary-color);
    width: 40px;
    height: 40px;
    cursor: pointer;
    border: 0;
    border-radius: 10px;
    margin: .75rem;
}

.arti {
    width: 18vw;
    height: calc(100vh - 7vh);
    position: absolute;
    right: 0;
    overflow-y: scroll;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    border: 1px white;
    background-color: var(--secondary-color);
}

.arti h3 {
    color: var(--primary-color);
}

.arti .question-cards  {
    display: flex;
    flex-direction: column;
    align-self: center;
    text-align: center;
    margin: 1rem 0 0 0;
    background-color: var(--backgroud-color);
    width: calc(100% - 20px);
    min-height: 150px;
    border-radius: 4px 4px 0 0;
    overflow-y: scroll;
}

.question-cards .card-quest {
    display: flex;
    align-items: center;
    width: 100%;
    height: 120px;
    font-weight: bold;
    padding: 1rem 1rem 0 1rem;
    overflow-y: scroll;
}

.question-cards .card-quest p {
    word-wrap: break-word;
    text-align: center;
    width: 100%;
    height: 100%;
}

.arti .quest-interation {
    display: flex;
    justify-content: space-between;
    align-self: center;
    background-color: var(--terciary-color);
    width: 100%;
    padding: 1rem;
    border-radius: 0 0 4px 4px;
}

.arti .quest-interation p {
    color: var(--primary-color);
    font-weight: bold;
}

.quest-interation .quest-icons {
    display: flex;
    align-items: center;
    gap: 20px;
}

.quest-interation .quest-icons i {
    color: var(--primary-color);
    cursor: pointer;
}

/* Estilos para telas com largura maior ou igual a 960px e menor que 1280px */
@media screen and (min-width: 960px) and (max-width: 1280px) {
    /* Estilos para a primeira seção */
    .sec-1 {
        width: 72vw;
    }

    /* Estilos para a segunda seção */
    .sec-2 {
        width: 72vw;
    }

    /* Estilos para o artigo */
    .arti {
        width: 25vw;
    }
}

/* Estilos para telas com largura maior ou igual a 600px e menor que 960px */
@media screen and (min-width: 600px) and (max-width: 959px) {
    .search #magnifier {
        margin: 8px 20px 0px -30px;
    }
    .sec-1 {
        width: 63vw;
    }
    .sec-2 {
        width: 63vw;
    }
    .arti {
        padding: 1rem;
        width: 35vw;
    }
}

/* Estilos para telas com largura menor que 600px */
@media screen and (min-width: 450px) and (max-width: 599px) {
    .search input {
        width: 200px;
    }
    .search #magnifier {
        margin: 8px 15px 0px -30px;
    }
    .sec-1 {  
        display: flex;
        width: 100vw;
        margin: 1rem 0 1rem 0;
        height: inherit;
    }

    .sec-1 input {
        width: 100%;
    }
    .sec-2 {
        width: 100vw;
    }
    .arti {
        display: none;
    }
}

@media screen and (max-width: 450px) {
    .search input {
        width: 150px;
    }
    .search #magnifier {
        margin: 8px 15px 0px -30px;
    }
    .sec-1 {  
        display: flex;
        width: 100vw;
        margin: 1rem 0 1rem 0;
        height: inherit;
    }

    .sec-1 input {
        width: 100%;
    }
    .sec-2 {
        width: 100vw;
        padding: 1rem .5rem 0 .5rem;
    }
    .sec-2 h3 {
        text-align: center;
    }
    .sec-2 .main-question {
        height: inherit;
        flex-grow: 1;
    }
    .sec-2 .main-question p {
        font-size: 14px;
    }
    .sec-2 .interaction-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;
    }
    .sec-2 .del-btn button {
        margin: .5rem;
    }
    .arti {
        display: none;
    }
}
</style>