const app = Vue.createApp({
	data() {
		return {
			counter: 0
		}
	},
	watch: {
		msg(value) {
			const that = this;
			setTimeout(function() {
				that.counter = 0;
			}, 5000);
		}
	},
	computed: {
		msg: function() {
			if(this.counter < 37) {
				return 'Not there yet';
			} else if (this.counter > 37) {
				return 'TOO MUCH';
			} else if (this.counter === 37) {
				return "37!";
			}
		}
	},
	methods: {
		add(num) {
			
			this.counter = this.counter + num;
			console.log('counter: ', this.counter)
        }
	},
});
app.mount('#assignment');