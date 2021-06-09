<template>
	<div class="mb-20">

		<div class="w-7 mx-auto">
			<ToggleSlider v-bind:current-theme="this.currentTheme" />
		</div>

		<ReminderForm @add-reminder="addReminder" class="mb-10" />
		<Reminder @remove-reminder="removeReminder" class="mb-2" v-for="reminder in this.reminders" :reminder="reminder" :key="reminder.key" />

	</div>
</template>

<script>
import ReminderForm from "../components/ReminderForm";
import Reminder from "../components/Reminder";
import ToggleSlider from "../components/ToggleSlider";
export default {
	name: 'Home',
	components: {ToggleSlider, Reminder, ReminderForm},
	data() {
		return {
			reminders: [],
			remindersLength: this.$store.reminders.length,
			currentTheme: ''
		}
	},
	created() {

		this.reminders = this.$store.reminders
		this.currentTheme = this.$store.currentTheme

	},
	methods: {

		addReminder(reminder) {

			if(!localStorage.getItem('reminders')) {
				localStorage.setItem('reminders', JSON.stringify(reminder))
				this.updateArray(reminder)
			} else {
				localStorage.removeItem('reminders')
				this.updateArray(reminder)
				localStorage.setItem('reminders', JSON.stringify(this.reminders))
			}


		},
		updateArray(newReminder) {
			// this.$store.reminders = [...this.$store.reminders, newReminder]
			this.reminders = [...this.reminders, newReminder]
		},
		removeReminder(value) {
			localStorage.removeItem('reminders')

			// this.$store.reminders.splice(value, 1)
			console.log(value)
			this.reminders.splice(value, 1)

			localStorage.setItem('reminders', JSON.stringify(this.reminders))

			// this.reminders.splice(value, 1)
		}
	}
}
</script>
