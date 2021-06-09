<template>
	<div id="app">

		<SpinnerIcon v-show="this.$store.loading" class="text-black w-10 make-middle" />

		<router-view/>

	</div>
</template>

<script>
import SpinnerIcon from "./components/icons/SpinnerIcon";

export default {
	name: 'App',
	components: { SpinnerIcon },
	data() {
		return {

		}
	},
	created() {
		this.$store.loading = true;

		this.seeder()
		this.currentTheme()

		this.$store.loading = false;
	},
	methods: {

		seeder() {

			this.$store.reminders = []

			if(localStorage.getItem('reminders')) {
				this.$store.reminders = JSON.parse(localStorage.getItem('reminders'))
			}

		},

		currentTheme() {
			/*
		get current theme from localstorage
		if none is set, light will be set by default
		 */
			let currentTheme = localStorage.getItem('light');

			if(currentTheme === null) {
				document.body.style.background = '#E0E7FF';
				this.$store.currentTheme = true;
				return;
			}

			if(currentTheme === 'true') {
				document.body.style.backgroundColor = '#E0E7FF';
				this.$store.currentTheme = currentTheme;
			} else {
				document.body.style.backgroundColor = '#312E81';
				this.$store.currentTheme = currentTheme;
			}
		}

	}
}
</script>