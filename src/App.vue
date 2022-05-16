<template>
	<Header></Header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { useMainStore } from './store/store'
import { api } from './api/api'
import axios from 'axios'
import { GroupResponse } from './models/model'

import Header from '@/components/Header.vue'

// type group = {
// 	id: number;
// 	group_name: string;
// }
@Options({
	components: {
		Header,
	}
})
export default class App extends Vue {
	// mainStore = useMainStore();
	// count = 0;
	// public group: Array<group> = [];

	// mounted() {
	// 	this.getG();
	// }

	// increment() {
	// 	console.log("increment");
	// 	this.mainStore.increment();
	// 	this.count = this.mainStore.getN();
	// }

	// async getG() {
	// 	await api.group.getAll().then(resp => {
	// 		// for (let i = 0; i < resp.data.response.length; i++) {
	// 		// 	this.group[i].group_name = resp.data.response[i].group_name
	// 		// 	// this.group.push(resp.data.response)
	// 		// }

	// 		resp.data.response.forEach(d => {
	// 			this.group.push(d)
	// 		})
	// 	})

	// 	console.log(this.group)
	// }
}
</script>

<style lang="scss">

</style>