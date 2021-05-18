<template>
	<div class="fixed w-full h-full bg-black bg-opacity-30 top-0 left-0">
		<div class="make-middle max-w-2xl p-5 bg-white rounded flex flex-col" :class="{ 'border border-red-500':invalid }">

			<label class="w-full">
				<select name="day" id="day" v-model="date.day">
					<option value="" selected disabled>Day</option>
				</select>
				<select name="month" id="month" v-model="date.month">
					<option value="" selected disabled>Month</option>
				</select>
				<select name="year" id="year" v-model="date.year">
					<option value="" selected disabled>Year</option>
				</select>
				<select name="hour" id="hour" v-model="date.hour">
					<option value="" selected disabled>HH</option>
				</select>
				<select name="minute" id="minute" v-model="date.minute">
					<option value="" selected disabled>mm</option>
				</select>
				<select name="second" id="second" v-model="date.second">
					<option value="" selected disabled>ss</option>
				</select>
			</label>

			<div>
				<button class="btn-primary mt-5" @click="emitDate">Confirm</button>
			</div>

		</div>
	</div>
</template>

<script>
export default {
	name: "DateTimeInput",
	data() {
		return {
			date: {
				day: '',
				month: '',
				year: '',
				hour: '',
				minute: '',
				second: ''
			},
			invalid: false
		}
	},
	mounted() {
		this.dayRange()
		this.monthRange()
		this.yearRange()
		this.hourRange()
		this.sixtyRange()
	},
	watch: {
		invalid: {
			handler() {
				setTimeout(() => {
					this.invalid = false;
				}, 3000)
			}
		}
	},
	methods: {
		emitDate() {
			if(this.date.day.trim() === '' || this.date.month.trim() === '' || this.date.year.trim() === '' ||
					this.date.hour.trim() === '' || this.date.minute.trim() === '' || this.date.second.trim() === '') {

				this.invalid = true

				return;
			}
			this.$emit('date-send', this.date)
			this.date = {
				day: '',
				month: '',
				year: '',
				hour: '',
				minute: '',
				second: ''
			}
		},
		dayRange() {
			const select = document.getElementById('day');
			for(let i = 1; i <= 31; i++) {
				select.innerHTML += `<option>${i}</option>`
			}
		},
		monthRange() {
			const select = document.getElementById('month');
			const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			for(let month in months) {
				select.innerHTML += `<option>${months[month]}</option>`
			}
		},
		yearRange() {
			const select = document.getElementById('year');
			const thisYear = new Date().getFullYear();
			for(let i = thisYear; i < 2050; i++) {
				select.innerHTML += `<option>${i}</option>`
			}
		},
		hourRange() {
			const select = document.getElementById('hour');
			for(let i = 0; i < 24; i++) {
				select.innerHTML += `<option>${i}</option>`
			}
		},
		sixtyRange() {
			const minSelect = document.getElementById('minute');
			const secSelect = document.getElementById('second');
			for(let i = 0; i < 60; i++) {
				minSelect.innerHTML += `<option>${i}</option>`
				secSelect.innerHTML += `<option>${i}</option>`
			}
		}
	}
}
</script>