const app = Vue.createApp({
    data() {
        return {
            listIsVisible: true,
            inputTask: '',
            tasks: []
        }
    }, 
    computed: {
        buttonMsg() {
            if (this.listIsVisible) {
                return 'Hide';
            } 

            return 'Show'
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.inputTask);
            console.warn(this.tasks)
        },
        toggleVisibility() {
            this.listIsVisible = !this.listIsVisible;
        }
    }
});

app.mount('#assignment');