<template>
    <div>
        <v-stepper v-model="location">
            <v-stepper-header>
                <v-stepper-step step="1" :complete="location == 2">
                    Master Carton Information
                </v-stepper-step>
                <v-divider></v-divider>

                <v-stepper-step step="2" :complete="location == 3">
                    Pallet Information
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3">
                    Pallet Calculation Results
                </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content step="1">
                    <v-row
                        class="padding-10 max-width-800"
                        style="margin: 5px auto;"
                    >
                        <v-col cols="12" md="3">
                            <v-text-field
                                append-icon="mdi-account"
                                label="Username"
                                v-model="username"
                                readonly
                            />
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field
                                append-icon="mdi-package-variant-closed"
                                label="Box Code"
                                v-model="box_code"
                            />
                        </v-col>
                        <v-col cols="6">
                            <v-row>
                                <v-col cols="8">
                                    <v-text-field
                                        append-icon="mdi-altimeter"
                                        label="Box length"
                                        v-model="box_leng"
                                    />
                                </v-col>
                                <v-col cols="4">
                                    <v-checkbox
                                        label="Allow Vertical"
                                        color="pink"
                                        hide-details
                                        v-model="box_leng_arrow"
                                    />
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row>
                                <v-col cols="8">
                                    <v-text-field
                                        append-icon="mdi-altimeter"
                                        label="Box Height"
                                        v-model="box_height"
                                    />
                                </v-col>
                                <v-col cols="4">
                                    <v-checkbox
                                        label="Allow Vertical"
                                        color="pink"
                                        hide-details
                                        v-model="box_height_arrow"
                                    />
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row>
                                <v-col cols="8">
                                    <v-text-field
                                        append-icon="mdi-altimeter"
                                        label="Box Width"
                                        v-model="box_width"
                                    />
                                </v-col>
                                <v-col cols="4">
                                    <v-checkbox
                                        label="Allow Vertical"
                                        color="pink"
                                        hide-details
                                        v-model="box_width_arrow"
                                    />
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                append-icon="mdi-altimeter"
                                label="Box Weight"
                                v-model="box_weight"
                            />
                        </v-col>

                        <v-col cols="12">
                            <div style="margin-bottom: 5px;">
                                <span><v-icon>mdi-palette</v-icon></span>
                                <b style="color: #666;">Box Color</b>
                            </div>
                            <div style="max-width: 300px;">
                                <compact-picker
                                    v-model="color"
                                    :value="color"
                                    style="width: 100%;"
                                />
                            </div>
                        </v-col>
                        <v-col cols="12">
                            <v-btn
                                small
                                color="pink"
                                dark
                                @click="location = 2"
                                class="btn-float-right"
                            >
                                <span>Siguiente</span>
                                <v-icon>mdi-arrow-right</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-stepper-content>
                <v-stepper-content step="2">
                    <v-row
                        class="padding-10 max-width-800"
                        style="margin: 5px auto;"
                    >
                        <v-col cols="12" md="4">
                            <v-text-field
                                append-icon="mdi-package-variant"
                                label="Pallet Code"
                                v-model="pallet_code"
                            />
                        </v-col>
                        <v-col cols="8">
                            <v-row>
                                <v-col cols="6">
                                    <v-select
                                        preend-icon="mdi-altimeter"
                                        label="Calculation Type"
                                        :items="calctype"
                                        item-text="text"
                                        item-value="value"
                                        v-model="calctype_value"
                                    />
                                </v-col>
                                <v-col cols="6">
                                    <v-select
                                        label="Units"
                                        :items="units"
                                        item-text="text"
                                        item-value="value"
                                        v-model="unit"
                                    />
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" md="8">
                            <v-row>
                                <v-col cols="6">
                                    <v-text-field
                                        append-icon="mdi-altimeter"
                                        label="Pallet Length"
                                        v-model="pallet_length"
                                    />
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field
                                        append-icon="mdi-altimeter"
                                        label="Maximum Load Length"
                                        v-model="pallet_length_max"
                                    />
                                </v-col>

                                <v-col cols="6">
                                    <v-text-field
                                        append-icon="mdi-altimeter"
                                        label="Pallet Height"
                                        v-model="pallet_height"
                                    />
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field
                                        append-icon="mdi-altimeter"
                                        label="Maximum Load Height"
                                        v-model="pallet_height_max"
                                    />
                                </v-col>

                                <v-col cols="6">
                                    <v-text-field
                                        append-icon="mdi-altimeter"
                                        label="Pallet Width"
                                        v-model="pallet_width"
                                    />
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field
                                        append-icon="mdi-altimeter"
                                        label="Maximum Load Width"
                                        v-model="pallet_width_max"
                                    />
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field
                                        append-icon="mdi-altimeter"
                                        label="Pallet Weight"
                                        v-model="pallet_weight"
                                    />
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field
                                        append-icon="mdi-altimeter"
                                        label="Maximum Load Weight"
                                        v-model="pallet_weight_max"
                                    />
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" md="4">
                            <div style="margin-bottom: 5px;">
                                <span><v-icon>mdi-palette</v-icon></span>
                                <b style="color: #666;">Pallet Color</b>
                            </div>
                            <div>
                                <compact-picker
                                    v-model="pallet_color"
                                    :value="pallet_color"
                                    style="width: 100%;"
                                />
                            </div>
                        </v-col>

                        <v-col cols="12">
                            <v-btn
                                small
                                dark
                                color="pink"
                                @click="location = 1"
                                class="btn-float-left"
                            >
                                <v-icon>mdi-arrow-left</v-icon>
                                <span>Anterior</span>
                            </v-btn>
                            <v-btn
                                small
                                dark
                                color="pink"
                                @click="location = 3"
                                class="btn-float-right"
                            >
                                <span>Siguiente</span>
                                <v-icon>mdi-arrow-right</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-stepper-content>
                <v-stepper-content step="3">
                    <v-row>
                        <v-col cols="12">
                            <div ref="div-map" v-show="!loading"></div>
                            <div class="text-center" v-show="loading">
                                <v-progress-circular
                                    :size="70"
                                    :width="7"
                                    color="purple"
                                    indeterminate
                                />
                            </div>
                        </v-col>
                        <v-col cols="12" v-if="!loading">
                            <v-btn
                                small
                                dark
                                color="pink"
                                @click="location = 2"
                                class="btn-float-left"
                            >
                                <v-icon>mdi-arrow-left</v-icon>
                                <span>Anterior</span>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </div>
</template>

<script>
import { Compact } from "vue-color";

export default {
    // componentes utilizables en el componente actual
    components: {
        CompactPicker: Compact
    },

    // datos del componente
    data: () => ({
        username: null,
        color: { hex: "#000000" },
        location: 1,
        loading: false,

        // datos de box
        box_code: "any code",
        box_leng: "400",
        box_leng_arrow: false,
        box_weight: "12",
        box_height_arrow: false,
        box_height: "300",
        box_width: "400",
        box_width_arrow: true,

        // pallet data
        pallet_code: "1200x1200",
        calctype_value: "1",
        unit: "0",
        pallet_color: { hex: "#F44E3B" },
        pallet_weight: "30",
        pallet_weight_max: "1500",
        pallet_length: "1200",
        pallet_length_max: "1200",
        pallet_width: "1000",
        pallet_width_max: "1000",
        pallet_height: "140",
        pallet_height_max: "1500",

        calctype: [
            { value: "1", text: "Longitudinal Boxes" },
            { value: "2", text: "Transversal Boxes" },
            { value: "10", text: "Optimized" }
        ],
        units: [
            { value: "0", text: "mm/kg" },
            { value: "1", text: "cm/kg" },
            { value: "2", text: "inches/lbs" }
        ]
    }),

    // funcion que se ejecuta al ser creado el componente
    created: function() {
        this.Client = window.ClientQPM;
        let { username } = this.Client._config;
        this.username = username;
    },

    methods: {
        // funcion que se encarga de pintar el diseño que se necesita
        paintDrawer: async function() {
            this.loading = true;
            this.$refs["div-map"].innerHTML = "";

            /*this.Client.methods["fullPalletSVGFromData"] = {
                method: "POST",
                uri:
                    "/QPMCalcServer/cfc/SVGPalletCalcs.cfc?method=fullPalletSVGFromData",
                responseType: "text"
            };*/

            let params = {
                calc_type: this.calctype_value,
                user_name: this.username,
                tihi: false,
                box_code: this.box_code,
                box_color: this.color.hex,
                box_extlength: this.box_leng,
                box_extwidth: this.box_width,
                box_extheight: this.box_height,
                box_weight: this.box_weight,
                box_allowlength: this.box_leng_arrow,
                box_allowwidth: this.box_width_arrow,
                box_allowheight: this.box_height_arrow,
                box_unit: this.unit,
                pallet_code: this.pallet_code,
                pallet_color: this.pallet_color.hex,
                pallet_width: this.pallet_width,
                pallet_height: this.pallet_height,
                pallet_length: this.pallet_length,
                pallet_weight: this.pallet_weight,
                pl_maxll: this.pallet_length_max,
                pl_maxlw: this.pallet_width,
                pl_maxlht: this.pallet_height_max,
                pl_maxlwt: this.pallet_weight_max,
                pallet_unit: this.unit
            };

            let response = await this.Client.method("palletFillFromDims", {
                calcinfo: params
            })
                .fetch()
                .then(t => t);

            response = {
                ...response,
                width: 300,
                height: 300,
                box_color: this.color,
                box_extlength: this.box_leng,
                box_extwidth: this.box_width,
                box_extheight: this.box_height,
                box_type: 0,
                pallet_color: this.pallet_color.hex,
                box_color: this.color.hex
            };

            // request data
            response = await this.Client.method("fullPalletSVGFromData", {
                palletdata: response
            })
                .fetch()
                .then(result => result);

            const handleSetText = function(str) {
                let s = "";
                let start = -1;
                for (let i = 0; i < str.length - 1; i++) {
                    if (start == -1 && str[i] == "<") start = i;
                    if (str[i] != "\\" && start >= 0) s += str[i];
                }
                return s;
            };

            const element = document.createElement("div");
            element.setAttribute(
                "style",
                "margin: 5px auto; width: fit-content; height: fit-content;"
            );
            element.innerHTML = handleSetText(response);

            this.$refs["div-map"].append(element);
            this.loading = false;
        }
    },

    watch: {
        location: function(value) {
            if (value == 3) this.paintDrawer();
        }
    }
};
</script>

<style>
.max-width-800 {
    max-width: 800px;
    margin: 10px auto;
}
.padding-10 {
    padding: 10px;
}
.btn-float-right {
    float: right;
}
</style>
