<template>
	<div>
		<div class="w-3/4 md:w-2/4 lg:w-1/3 mx-auto p-2 rounded-sm shadow" :class="{ 'bg-indigo-300':difference > 0, 'bg-green-500':difference < 0}">
			{{ reminder.content }} <br/>
			<div v-if="this.difference > 0">
				{{ this.days }} days, {{ this.hours }} hours, {{ this.minutes }} minutes, {{ this.seconds }} seconds
			</div>
			<div v-else>
				Complete.
			</div>

			<button @click="removeReminder" class="focus:outline-none">remove</button>
		</div>
	</div>
</template>

<script>
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
			difference: 0,
			dateNow: 0,
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
			this.dateNow = new Date().getTime()
			this.difference = (this.reminder.date - this.dateNow) / 1000
		},
		removeReminder() {
			this.$emit('remove-reminder', this.$store.reminders.indexOf(this.reminder))
		}
	}
}
</script>