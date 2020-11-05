const app = Vue.createApp({
    data() {
        return {
			outputKeydown: '',
			outputEnter: ''
        };
    },
    methods: {
        // event is provided by browser by default
        alert() {
			// preventDefault();
			alert("BRUH!");
        },
        updateOnKeydown(event) {
            this.outputKeydown = event.target.value;
        },
        updateOnEnter(event) {
            this.outputEnter = event.target.value;
        }
    },
});

app.mount('#assignment');