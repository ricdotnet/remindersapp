<template>
	<div>

		<form @submit.prevent="" class="w-3/4 md:w-2/4 lg:w-1/3 mx-auto mt-10 flex flex-col">
			<div>
				<label>
					<input v-model="reminder.content" type="text" class="px-5 py-2 w-full focus:outline-none mb-2"
						:class="{ 'ring-4 ring-red-800':invalid }">
				</label>
			</div>

			<div>
				<button @click="dateSelector = !dateSelector"
						class="focus:outline-none px-2 py-1 bg-indigo-300 hover:bg-indigo-400 active:bg-indigo-500 text-white font-medium"
						:class="{ 'ring-4 ring-red-800':invalidDate }">
					{{ this.selectButton }}</button>
				{{ this.reminder.date }}
				<DateTimeInput v-show="dateSelector" v-model="reminder.date" @date-send="setDate" />
			</div>

			<div>
				<button @click="addReminder" class="btn-primary mt-2" type="submit">Add</button>
			</div>
		</form>

	</div>
</template>

<script>
import DateTimeInput from "./DateTimeInput";
export default {
	name: "ReminderForm",
	components: {DateTimeInput},
	data() {
		return {
			reminder: {
				content: '',
				date: ''
			},
			dateSelector: false,
			selectButton: 'Select Date',
			invalid: false,
			invalidDate: false
		}
	},
	created() {
		window.addEventListener('keydown', ev => {
			if(ev.key === 'Escape' && this.dateSelector) {
				this.dateSelector = false;
			}
		})
	},
	watch: {
		invalid: {
			handler() {
				setTimeout(() => {
					this.invalid = false;
				}, 3000)
			}
		},
		invalidDate: {
			handler() {
				setTimeout(() => {
					this.invalidDate = false;
				}, 3000)
			}
		}
	},
	methods: {
		setDate(date) {
			this.reminder.date = date.day + '-' + date.month + '-' + date.year + ' ' +
				this.leftZero(date.hour) + ':' + this.leftZero(date.minute) + ':' + this.leftZero(date.second);

			// console.log(new Date(this.reminder.date).getTime())
			this.dateSelector = false
			this.selectButton = 'Change'
		},
		leftZero(value) {
			return (value < 10) ? '0'+value : value;
		},
		addReminder() {

			if(this.reminder.content.trim() === '') {
				this.invalid = true;
				return;
			}
			if(this.reminder.date.trim() === '') {
				this.invalidDate = true;
				return;
			}

			/**
			 * Remove duplicate code
			 * create date variables / date methods in actions or store.
			 */
			if(new Date(this.reminder.date).getTime() <= new Date().getTime()) {
				alert('cannot set a reminder to the past.')
				return;
			}

			const tempReminder = {
				content: this.reminder.content,
				date: new Date(this.reminder.date).getTime()
			};
			this.$emit('add-reminder', tempReminder)
			this.reminder = {
				content: '',
				date: ''
			};
			this.selectButton = 'Select Date'
		}

	}
}
</script>