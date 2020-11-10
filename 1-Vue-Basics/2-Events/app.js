const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        // event is provided by browser by default
        setName(event) {
            this.name = event.target.value;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        }
    },
});

app.mount('#events');