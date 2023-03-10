const {createApp} = Vue;
createApp({
    data(){
        return{
            urlApi: './api.php',
            urlCreate: './create.php',
            tasksList: [],
            newTask: {
                "task": "",
                "done":false
            }
        }
    },
    methods:{
        createNewTask(){
            console.log(this.newTask)
            axios.post(this.urlCreate, {
                task : this.newTask
            },{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((response) => {
                this.tasksList = response.data.data;
            })
            this.newTask.task = '';
        },
        completedTask(singleTask){
            singleTask.done = !singleTask.done
        }
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