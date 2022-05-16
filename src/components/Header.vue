<template>
    <nav class="navbar navbar-light bg-light header">
        <div class="container-fluid d-flex justify-content-between">
            <div class="oil-text">
                <svg xmlns="http://www.w3.org/2000/svg" transform="scale(0.7)" class="oil-logo"><path d="M24 44Q17.65 44 12.825 39.575Q8 35.15 8 27.6Q8 22.6 11.975 16.725Q15.95 10.85 24 4Q32.05 10.85 36.025 16.725Q40 22.6 40 27.6Q40 35.15 35.175 39.575Q30.35 44 24 44ZM23.95 37.6Q24.75 37.6 25.175 37.325Q25.6 37.05 25.6 36.5Q25.6 35.95 25.175 35.65Q24.75 35.35 23.9 35.35Q21.8 35.35 19.625 34.025Q17.45 32.7 16.85 29.35Q16.75 28.9 16.4 28.625Q16.05 28.35 15.65 28.35Q15.1 28.35 14.8 28.775Q14.5 29.2 14.6 29.65Q15.35 33.85 18.15 35.725Q20.95 37.6 23.95 37.6Z" /></svg>
                GNT-OIL
            </div>
            <div class="schedule">Расписание занятий</div>
            <div class="account">
                <svg xmlns="http://www.w3.org/2000/svg" transform="scale(0.82)" height="48" width="48"><path d="M24 23.95Q20.7 23.95 18.6 21.85Q16.5 19.75 16.5 16.45Q16.5 13.15 18.6 11.05Q20.7 8.95 24 8.95Q27.3 8.95 29.4 11.05Q31.5 13.15 31.5 16.45Q31.5 19.75 29.4 21.85Q27.3 23.95 24 23.95ZM8 40V35.3Q8 33.4 8.95 32.05Q9.9 30.7 11.4 30Q14.75 28.5 17.825 27.75Q20.9 27 24 27Q27.1 27 30.15 27.775Q33.2 28.55 36.55 30Q38.1 30.7 39.05 32.05Q40 33.4 40 35.3V40Z"/></svg>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Header extends Vue {

}
</script>

<style lang="scss">

@font-face {
	font-family: 'Garet';
	src: url('../../fonts/Garet/Garet-Heavy.otf') format('opentype');
	font-weight: 850;
}

@font-face {
    font-family: "Noto Sans";
    src: url('../../fonts/NotoSans/NotoSans-Black.ttf')
}

.header {
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}

.oil-logo {
    width: 40px;
    height: 54px;
	fill: rgba(0, 0, 0, 0.7);
}

.oil-text {
    height: 48px;
	font-family: "Garet";
    font-size: 26px;
    color: rgba(0, 0, 0, 0.7);
    
}

.schedule {
    font-family: "Noto Sans";
    font-size: 38px;
    color: rgba(0, 0, 0, 0.7);
    font-style: normal;
    font-weight: 900;
    
}

</style>