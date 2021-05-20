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

		this.$store.loading = false;
	},
	methods: {

		seeder() {

			this.$store.reminders = []

			if(localStorage.getItem('reminders')) {
				this.$store.reminders = JSON.parse(localStorage.getItem('reminders'))
			}

		}

	}
}
</script>