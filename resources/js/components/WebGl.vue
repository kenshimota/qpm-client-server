<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <v-row>
                        <v-col cols="12">
                            <div style="margin-bottom: 10px;">
                                <span class="title">
                                    Ejemplo del Sistema Solar
                                </span>
                            </div>
                            <div id="system-sun"></div>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="4">
                    <v-row>
                        <v-col cols="12">
                            <web-cube />
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="4">
                    <v-row>
                        <v-col cols="12">
                            <web-cylinder />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import WebGl from "webgl-show";
import WebCube from "./views/WebCube";
import WebCylinder from "./views/WebCylinder";

export default {
    components: { WebCube, WebCylinder },

    mounted: function() {
        this.init();
    },

    // metodos del componente
    methods: {
        init: function() {
            /* funcion del programa */
            const main = function() {
                // creando graficos en blanco
                const graph = WebGl({
                    element: "#system-sun",
                    width: 300,
                    height: 300,
                    color: 0x444444
                });

                const orbitSun = graph.createFigure({
                    geometry: "Object3D",
                    positions: { z: 5 }
                });
                graph.addFigure(orbitSun);

                // creando el sol  como figura
                const sun = graph.createFigure({
                    geometry: "SphereGeometry",
                    material: { emissive: "yellow" },
                    attributes: [1, 20, 20]
                });
                sun.setScale({ x: 3, y: 3, z: 3 });
                orbitSun.add(sun);

                const orbitEarth = graph.createFigure({
                    geometry: "Object3D",
                    positions: { x: 7 }
                });
                orbitSun.add(orbitEarth);
                const earth = graph.createFigure({
                    geometry: "SphereGeometry",
                    material: { emissive: "blue" },
                    attributes: [0.8, 20, 20]
                });
                earth.setScale(0.6, 0.8, 0.8);
                orbitEarth.add(earth);

                const orbitMoon = graph.createFigure({
                    geometry: "Object3D",
                    positions: { x: 1.5 }
                });
                orbitEarth.add(orbitMoon);
                const moon = graph.createFigure({
                    geometry: "SphereGeometry",
                    material: { emissive: 0x666666 },
                    attributes: [0.2, 20, 20]
                });
                moon.setScale(0.5, 0.5, 0.5);
                orbitMoon.add(moon);

                const orbitMart = graph.createFigure({
                    geometry: "Object3D",
                    positions: { z: 5 }
                });
                graph.addFigure(orbitMart);

                const mart = graph.createFigure({
                    geometry: "SphereGeometry",
                    material: { color: "red" },
                    attributes: [1, 20, 20],
                    positions: { x: 13 }
                });
                orbitMart.add(mart);

                mart.animation = function() {
                    this.figure.rotation.y += 0.01;
                };

                orbitMart.animation = function() {
                    this.figure.rotation.y += 0.009;
                };

                const orbitAnimation = function() {
                    this.figure.rotation.y += this.id / 100;
                };

                // agregando iluminacion al efecto en 3D
                graph.setLight({
                    intensity: 1,
                    color: 0xffffff,
                    position: { x: 1, y: 2, z: 1 }
                });
                sun.animation = orbitAnimation;
                earth.animation = orbitAnimation;
                moon.animation = orbitAnimation;
                orbitSun.animation = orbitAnimation;
                orbitEarth.animation = orbitAnimation;
                orbitMoon.animation = orbitAnimation;

                graph.camera.position.set(0, 20, 0);
                graph.camera.up.set(0, 0, 1);
                graph.camera.lookAt(0, 0, 0);
            };

            main();
        }
    }
};
</script>
