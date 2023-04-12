const { createApp } = Vue

createApp({
    data() {
        return {
            todoList: [],
            newTodo: '',
        }
    },
    methods: {
        addNewTodo() {
            const data = {
                newTodo: this.newTodo
            };
            axios.post('database.php', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
                .then((response) => {
                    this.todoList = response.data;
                })
        },
    },
    created() {
        axios.get('database.php')
            .then((response) => {
                this.todoList = response.data;
            })
    }
}).mount('#app')

