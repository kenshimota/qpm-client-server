<template>
    <v-row>
        <v-col cols="12">
            <span class="title">
                <span>Ejemplo Rectangulo</span>
            </span>
        </v-col>
        <v-col cols="12">
            <div id="cube-test"></div>
        </v-col>
        <v-col cols="4">
            <v-text-field outlined label="Ancho" v-model="width" />
        </v-col>
        <v-col cols="4">
            <v-text-field outlined label="Altura" v-model="height" />
        </v-col>
        <v-col cols="4">
            <v-text-field outlined label="Longitud" v-model="depth" />
        </v-col>
    </v-row>
</template>

<script>
import WebGl from "webgl-show";
export default {
    data: () => ({
        height: 4,
        width: 2,
        depth: 2,
        cube: null
    }),

    mounted: function() {
        this.init();
    },

    watch: {
        height: function() {
            this.cube.setAttributes([this.width, this.height, this.depth]);
        },

        width: function() {
            this.cube.setAttributes([this.width, this.height, this.depth]);
        },

        depth: function() {
            this.cube.setAttributes([this.width, this.height, this.depth]);
        }
    },

    methods: {
        init: function() {
            const graph = WebGl({
                element: "#cube-test",
                width: 360,
                height: 360,
                color: 0xffffff
            });

            const cube = graph.createFigure({
                geometry: "BoxGeometry",
                material: { emissive: "red" },
                attributes: [this.width, this.height, this.depth]
            });

            this.cube = cube;

            cube.animation = function() {
                this.figure.rotation.y += 0.01;
            };

            graph.setLight({
                intensity: 0.4,
                color: 0xffffff,
                position: { x: -3, y: -5, z: 20 }
            });

            graph.addFigure(cube);
        }
    }
};
</script>
