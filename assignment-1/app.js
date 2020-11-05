const app = Vue.createApp({
	// NOTE: must be named data
	// - always return obj
	data() {
		return {
			name: 'the Bomb',
			age: 28,
			vueLink: 'https://64.media.tumblr.com/1e8f51647cbc49d3ef5ca4257f59f212/f47aae98483c2ae0-c1/s1280x1920/91dac6241f0709b1eeac26dcaf3c98598a4a0dcf.jpg',
			value: 'bruh'
		}
	},
	methods:  {
		randomNum(){
			const rando = Math.random();
			return rando;
		}
	}
});

app.mount('#assignment');
