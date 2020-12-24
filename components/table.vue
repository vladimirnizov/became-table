<template>
	<div class="data-table">
		<v-row class="px-0" align-h="between">
			<v-col class="text-left" style="max-width: 250px" align-self="center">
				<el-input v-model="search_query" placeholder="Search"/>
			</v-col>
		</v-row>
		<el-table v-if="items.length > 0" :data="filtered_items" ref="tableData" height="750" >
			<template v-for="(header, index) in headers">
				<el-table-column sortable :label="beautify_string(header.text)" :key="index" :prop="String(header.value)">
					<template slot-scope="scope">
						<template v-if="Array.isArray(header.value)">
							<v-btn v-if="header.value.length" icon color="green" @click="expandRow(scope.row, header.value)">
								<v-icon>mdi-chevron-double-down</v-icon>
							</v-btn>
						</template>
						<span v-else>{{ scope.row[header.text] }}</span>
					</template>
				</el-table-column>
			</template>
			<el-table-column v-if="mainTable" label="Actions">
				<template slot-scope="scope">
					<v-btn icon color="red" @click="deleteItem(scope.row)">
						<v-icon>mdi-delete</v-icon>
					</v-btn>		
				</template>
			</el-table-column>
			<el-table-column type="expand" width="1" align="left">
				<template slot-scope="props">
					<data-table :items="expended_row_items" :main-table="false" />
				</template>
			</el-table-column>
		</el-table>
		<empty-state v-else/>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import   EmptyState 			from '~/components/emptyState';
import   utils					from '~/mixins/utils';

export default {
	name: 'data-table',
	components: {
		EmptyState
	},
	mixins: [utils],
	props: {
		items: {
			type: Array,
			required: true
		},
		mainTable: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			search_query: '',
			headers: [],
			expended_row_items: null
		}
	},
	computed: {
		filtered_items() {
			return this.items.filter(item => {
				let include = false;

				this.headers.forEach(header => {
					if(String(item[header.text]).toLowerCase().includes(this.search_query.toLowerCase())) {
						include = true;
						return;
					}  
				});
				
				return !this.search_query || include;
			})
		}
	},
	created() {
		this.createHeaders();
	},
	methods: {
		...mapActions(['deleteItem']),

		createHeaders() {
			this.headers = Object.keys(this.items[0]).map(key => {
				return { text: key, value: this.items[0][key] }
			})
		},
		expandRow(row, items) {
			if(items.length) {
				this.expended_row_items = items;
				this.$refs.tableData.toggleRowExpansion(row);
			}
		}
	}
}
</script>

<style lang="scss">
	.data-table {
		margin-top: 1em;
		padding: 1em;
		background-color: white;
		border-radius: 5px;
	}
	.el-table {
		max-height: 80vh;
	}	
</style>