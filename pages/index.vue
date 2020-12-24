<template>
	<v-row justify="center" align="center">
		<v-col>
			<data-table :items="data" />
		</v-col>
	</v-row>
</template>

<script>
import { mapState } from 'vuex';
import 	 DataTable  from '~/components/table';

export default {
	components: {
		DataTable
	},
	asyncData(context) {
		context.store.dispatch('loadData');
	},
	computed: {
		...mapState(['data'])
	},
}
</script>