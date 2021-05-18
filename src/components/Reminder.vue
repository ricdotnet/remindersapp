<template>
	<div>
		<div class="w-1/4 mx-auto">
			{{ reminder.content }} {{ daysLeft(reminder.date) }} days left
		</div>
	</div>
</template>

<script>
export default {
	name: "Reminder",
	props: ['reminder'],
	methods: {
		daysLeft(reminderDate) {
			const reminder = new Date(reminderDate).getTime()
			const dateNow = new Date().getTime();
			return Math.floor((reminder-dateNow) / (1000*3600*24));
		}
	}
}
</script>