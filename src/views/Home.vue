<template>
	<div>

		<ReminderForm @add-reminder="addReminder" />
<!--		<Reminder :reminder-list="this.reminders" />-->
		<Reminder v-show="reminders.length > 0" v-for="reminder in this.reminders" :reminder="reminder" :key="reminder.key" />

	</div>
</template>

<script>
// import Actions from '../application/Actions'
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
			// let reminder = Actions.addReminder();
			// console.log(reminder)
			// // this.reminders = [...this.reminders, JSON.stringify(reminder)]
			// this.$store.reminders.push(reminder)
			// localStorage.removeItem('reminders')
			// localStorage.setItem('reminders', JSON.stringify(this.$store.reminders))
			this.reminders = [...this.reminders, reminder]
		}
	}
}
</script>
