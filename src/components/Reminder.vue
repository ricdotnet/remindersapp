<template>
	<div>
		<div class="w-1/3 mx-auto p-2 bg-indigo-300 rounded-sm shadow">
			{{ reminder.content }} <br/>
<!--			{{ this.reminder.date }} date<br />-->
<!--			{{ this.difference }} difference<br/>-->
			<div v-show="this.days > 0">
				{{ this.days }} days, {{ this.hours }} hours, {{ this.minutes }} minutes, {{ this.seconds }} seconds
			</div>
			<div v-show="this.days <= 0">
				Complete.
			</div>
		</div>
	</div>
</template>

<script>
const dateNow = new Date().getTime()
export default {
	name: "Reminder",
	props: {
		reminder: Object
	},
	data() {
		return {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			difference: 0
		}
	},
	watch: {
		difference: {
			handler() {
				setTimeout(() => {
					this.difference--;
					this.update()
				}, 1000)
			}
		}
	},
	created() {
		this.setDifference()
		this.update()
	},
	methods: {
		update() {

			this.days = Math.floor(this.difference / (3600*24));
			this.hours = Math.floor((this.difference / (60 * 60)) % 24);
			this.minutes = Math.floor((this.difference / (60)) % 60);
			this.seconds = Math.floor((this.difference) % 60);

		},
		setDifference() {
			this.difference = (this.reminder.date - dateNow) / 1000
		}
	}
}
</script>