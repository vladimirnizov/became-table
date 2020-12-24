import axios from 'axios';
const data = require('../data/orders_sample.json');

export const state = () => ({
	data: []
})

export const mutations = {
	setData(state, value) {
		state.data = value;
	},
	deleteItem(state, value) {
		state.data = state.data.filter(item => JSON.stringify(item) != JSON.stringify(value))
	}
}

export const actions = {
	loadData({ commit }) {
		commit('setData', data);
		
		// CORS ORIGIN PROBLEM
		// axios.get('https://www.become.co/api/rest/test.php').then(() => {
		// 	commit('setData', data);
		// }).catch(error => { console.error(error) })
	},
	deleteItem({ commit }, row) {
		commit('deleteItem', row);
		
		// CORS ORIGIN PROBLEM
		// axios.delete('https://www.become.co/api/rest/test.php', row).then(() => {
		// 	commit('deleteItem', row);
		// }).catch(error => { console.error(error) })
	}
}