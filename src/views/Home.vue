<template>
	<div class="mb-20">

		<ReminderForm @add-reminder="addReminder" class="mb-10" />
		<Reminder @remove-reminder="removeReminder" v-show="remindersLength > 0" class="mb-2" v-for="reminder in this.$store.reminders" :reminder="reminder" :key="reminder.key" />

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
			remindersLength: this.$store.reminders.length
		}
	},
	created() {

		// this.$store.reminders

	},
	methods: {

		addReminder(reminder) {

			if(!localStorage.getItem('reminders')) {
				localStorage.setItem('reminders', JSON.stringify(reminder))
				this.updateArray(reminder)
			} else {
				localStorage.removeItem('reminders')
				this.updateArray(reminder)
				localStorage.setItem('reminders', JSON.stringify(this.$store.reminders))
			}


		},
		updateArray(newReminder) {
			this.$store.reminders = [...this.$store.reminders, newReminder]
		},
		removeReminder(value) {
			localStorage.removeItem('reminders')

			this.$store.reminders.splice(value, 1)

			localStorage.setItem('reminders', JSON.stringify(this.$store.reminders))
		}
	}
}
</script>
