const {createApp} = Vue;
createApp({
    data(){
        return{
            urlApi: './api.php',
            urlCreate: './create.php',
            tasksList: [],
            newTask: {
                "task": "",
                "done": false
            }
        }
    },
    methods:{

    },
    created(){
        axios.get(this.urlApi)
        .then(response => {
            console.log('response', response.data)
            this.tasksList = response.data.data;
            console.log('mio array', this.tasksList)
        })
        /* chiamata api al file api.php,
        i dati in risposta vengono pushati nel mio array vuoto */
    }
}).mount('#app');