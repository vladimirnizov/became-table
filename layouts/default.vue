<template>
	<v-app dark>
		<navbar />
		<v-main>
			<v-container>
				<nuxt></nuxt>
			</v-container>
		</v-main>
		<app-footer />
	</v-app>
</template>

<script>
import Navbar 	 from '~/components/layout/navbar';
import AppFooter from '~/components/layout/footer';

export default {
	components: {
		Navbar,
		AppFooter
	}
}
</script>