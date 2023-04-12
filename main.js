const { createApp } = Vue

createApp({
    data() {
        return {
            todolist: [],
        }
    },
    methods: {

    },
    created() {
        axios.get('database.php')
            .then((response) => {
                this.todolist = response.data;
            })
    }
}).mount('#app')

