<template>
    <v-row>
        <v-col cols="12">
            <span class="title">
                <span>Ejemplo Cilindro</span>
            </span>
        </v-col>
        <v-col cols="12">
            <div id="cylinder-test"></div>
        </v-col>
        <v-col cols="4">
            <v-text-field outlined label="Diametro" v-model="diameter" />
        </v-col>
        <v-col cols="4">
            <v-text-field outlined label="Altura" v-model="height" />
        </v-col>
    </v-row>
</template>

<script>
import WebGl from "webgl-show";
export default {
    data: () => ({
        diameter: 2,
        height: 4,
        cylinder: null
    }),

    mounted: function() {
        this.init();
    },

    watch: {
        diameter: function() {
            this.cylinder.setAttributes([
                this.diameter / 2,
                this.diameter / 2,
                this.height,
                10
            ]);
        },

        height: function() {
            this.cylinder.setAttributes([
                this.diameter / 2,
                this.diameter / 2,
                this.height,
                10
            ]);
        }
    },

    methods: {
        init: function() {
            const graph = WebGl({
                element: "#cylinder-test",
                width: 360,
                height: 360,
                color: 0xffffff
            });

            const cylinder = graph.createFigure({
                geometry: "CylinderGeometry",
                material: { emissive: "purple" },
                attributes: [
                    this.diameter / 2,
                    this.diameter / 2,
                    this.height,
                    10
                ]
            });

            this.cylinder = cylinder;

            cylinder.animation = function() {
                this.figure.rotation.x += 0.01;
            };

            graph.setLight({
                intensity: 0.4,
                color: 0xffffff,
                position: { x: -3, y: -5, z: 20 }
            });

            graph.addFigure(cylinder);
        }
    }
};
</script>
