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

	<button @click="getGroups">
		{{ group.id }}
	</button>

	<!-- {{ group.groupName }} -->
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { useMainStore } from './store/store'
import ApiService, { GroupC } from './api/apiService'
import { Group, GroupResponse } from './models/model';
import axios from 'axios'

export default class App extends Vue {
	mainStore = useMainStore();
	count = 0;
	public group: GroupC = new GroupC();

	setup() {
	}

	increment() {
		console.log("increment");
		this.mainStore.increment();
		this.count = this.mainStore.getN();
	}

	 getGroups() {
		let api = new ApiService();
		this.group = api.goups.getGroup()
		console.log(this.group)

		//  axios.get<GroupResponse>("https://college-site-backend.herokuapp.com/api/v1/group/1")
        //     .then(resp => {
		// 		this.group = resp.data.response;
        //        	console.log(resp.data.response);
        //     });

		//console.log(this.group.id, this.group.groupName)
	}
}
</script>

<style lang="scss">
</style>
