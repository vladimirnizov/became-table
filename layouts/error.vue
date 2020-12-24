<template>
	<div>
		<h1>{{ title }}</h1>
		<NuxtLink to="/">Home page</NuxtLink>
	</div>
</template>

<script>
export default {
	props: {
		error: {
			type: Object,
			default: null
		}
	},
	data () {
		return {
			pageNotFound: '404 Not Found',
			otherError: 'An error occurred'
		}
	},
	computed: {
		title() {
			return this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
		}
	},
	head () {
		const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError;

		return { title }
	}
}
</script>