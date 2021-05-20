<template>
	<div class="mb-20">

		<ReminderForm @add-reminder="addReminder" class="mb-10" />
		<Reminder @remove-reminder="removeReminder" class="mb-2" v-for="reminder in this.reminders" :reminder="reminder" :key="reminder.key" />

	</div>
</template>

<script>
import ReminderForm from "../components/ReminderForm";
import Reminder from "../components/Reminder";
export default {
	name: 'Home',
	components: {Reminder, ReminderForm},
	data() {
		return {
			reminders: [],
			remindersLength: this.$store.reminders.length
		}
	},
	created() {

		this.reminders = this.$store.reminders

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
