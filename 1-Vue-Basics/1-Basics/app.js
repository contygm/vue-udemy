const app = Vue.createApp({
	// NOTE: must be named data
	// - always return obj
	data() {
		return {
			courseGoalA: 'Be BOMB at Vue!',
			courseGoalB: '<h1>Be the Vue!</h1>',
			vueLink: 'https://baconipsum.com/'
		}
	},
	methods:  {
		outputGoal(){
			const rando = Math.random();
			if (rando < 0.5) {
				// NOTE: this = global VUE object
				// have access to obj, including data and methods,
				// via THIS
				return this.courseGoalA;
			}
			return this.courseGoalB;
		}
	}
});

app.mount('#user-goal');
