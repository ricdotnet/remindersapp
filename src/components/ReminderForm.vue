<template>
	<div>

		<form @submit.prevent="addReminder()" class="w-1/4 mx-auto mt-10">
			<label>
				<input v-model="reminder.content" type="text" class="px-5 py-2 w-full focus:outline-none mb-2">
				<input v-model="reminder.date" type="date" class="px-5 py-2 w-full focus:outline-none mb-2">
				<button class="btn-primary" type="submit">Add</button>
			</label>
		</form>

	</div>
</template>

<script>
export default {
	name: "ReminderForm",
	data() {
		return {
			reminder: {
				content: '',
				date: ''
			}
		}
	},
	methods: {

		addReminder() {
			const tempReminder = {
				content: this.reminder.content,
				date: this.reminder.date
			};
			this.$emit('add-reminder', tempReminder)
		}

	}
}
</script>