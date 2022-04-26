<template>
	<button @click="increment">
		{{ count }}
	</button>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { useMainStore } from './store/store'

export default class App extends Vue {
	mainStore = useMainStore();
	count = 0;

	setup() {
	}

	increment() {
		console.log("increment");
		this.mainStore.increment();
		this.count = this.mainStore.getN();
	}
}
</script>

<style lang="scss">
</style>
