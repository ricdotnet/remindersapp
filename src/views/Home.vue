<template>
	<div>

		<ReminderForm @add-reminder="addReminder" class="mb-10" />
<!--		<Reminder :reminder-list="this.reminders" />-->
		<Reminder class="mb-2" v-show="reminders.length > 0" v-for="reminder in this.reminders" :reminder="reminder" :key="reminder.key" />

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
			reminders: []
		}
	},
	created() {

		this.reminders = this.$store.reminders

	},
	methods: {

		addReminder(reminder) {

			// if(!reminders.getItem('reminders')) {
			// 	reminders.setItem('reminders', JSON.stringify(reminder));
			// 	this.updateArray(reminder)
			// } else {
			// 	reminders.removeItem('reminders');
			// 	this.updateArray(reminder)
			// 	reminders.setItem('reminders', JSON.stringify(this.reminders))
			// }

			this.updateArray(reminder)


		},
		updateArray(newReminder) {
			this.reminders = [...this.reminders, newReminder]
		}
	}
}
</script>
