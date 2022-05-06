<template>
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand oil-logo" href="#">
      <img src="../svg/gnt-oil_logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
      GNT-OIL
    </a>
  </div>
</nav>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { useMainStore } from './store/store'
import { api } from './api/api'
import axios from 'axios'
import { GroupResponse } from './models/model'

// type group = {
// 	id: number;
// 	group_name: string;
// }

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

@font-face {
	font-family: 'Garet';
	src: url('../fonts/Garet/Garet-Heavy.otf') format('opentype');
	font-style: normal;
	font-weight: 850;
}

.oil-logo {
	font-family: "Garet";
}

</style>