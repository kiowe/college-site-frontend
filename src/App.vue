<template>
	<div class="common-layout">
		<el-container>
			<el-aside width="200px">Aside</el-aside>
			<el-container>
				<el-header>Header</el-header>
				<el-main>Main</el-main>
			</el-container>
		</el-container>
	</div>

	<button @click="getG">
		
	</button>
	<li v-for="g in group" :key="g.id">
		{{ g.id }} - {{ g.group_name }}
	</li>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { useMainStore } from './store/store'
import { api } from './api/api'
import axios from 'axios'
import { GroupResponse } from './models/model'

type group = {
	id: number;
	group_name: string;
}

export default class App extends Vue {
	mainStore = useMainStore();
	count = 0;
	public group: Array<group> = [];

	mounted() {
		this.getG();
	}

	increment() {
		console.log("increment");
		this.mainStore.increment();
		this.count = this.mainStore.getN();
	}

	async getG() {
		await api.group.getAll().then(resp => {
			// for (let i = 0; i < resp.data.response.length; i++) {
			// 	this.group[i].group_name = resp.data.response[i].group_name
			// 	// this.group.push(resp.data.response)
			// }

			resp.data.response.forEach(d => {
				this.group.push(d)
			})
		})

		console.log(this.group)
	}
}
</script>

<style lang="scss">
</style>
