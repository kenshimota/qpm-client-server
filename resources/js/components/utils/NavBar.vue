<template>
    <div>
        <v-app-bar elevation="1" darken fixed color="grey darken-3 white--text">
            <v-toolbar-title>
                <v-img
                    src="http://45.79.44.19:8888/QPMCalcServer/img/koona_logo_trim02.png"
                    width="120px"
                />
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn elevation="0" to="/home" class="grey darken-3 white--text">
                <v-icon>mdi-home</v-icon>
                <span>Inicio</span>
            </v-btn>
            <v-btn elevation="0" to="/test" color="grey darken-3 white--text">
                <v-icon>mdi-book</v-icon>
                <span>Test Api</span>
            </v-btn>
            <v-btn elevation="0" to="/webgl" color="grey darken-3 white--text">
                <v-icon>mdi-3d</v-icon>
                <span>WebGl</span>
            </v-btn>
            <v-btn
                elevation="0"
                to="/single-box"
                color="grey darken-3 white--text"
            >
                <v-icon>mdi-calculator</v-icon>
                <span>Calculate SingleBox</span>
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
export default {};
</script>
