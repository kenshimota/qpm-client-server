<template>
    <div class="white" style="padding: 20px; border: 1px solid #ddd">
        <v-dialog max-width="600px" v-model="dialog">
            <v-card class="grey darken-3 white--text">
                <v-card-title>
                    <span class="headline">Response Data</span>
                    <v-spacer />
                    <spacer style="float: right;">
                        <v-btn icon fab color="red" @click="dialog = false">
                            <v-icon dark>mdi-close</v-icon>
                        </v-btn>
                    </spacer>
                </v-card-title>
                <v-card-text>
                    <div style="width: 100%;">
                        <pre class="language-javascript" style="width: 100%;">
              <code>{{ jsonResponse }}</code>
            </pre>
                    </div>
                </v-card-text>
            </v-card>
        </v-dialog>

        <v-row>
            <v-col cols="12" md="6">
                <v-row
                    style="border: 1px solid #ddd; border-top: 3px solid #ddd; border-radius: 5px; padding: 10px;"
                >
                    <v-col cols="12">
                        <v-autocomplete
                            v-model="method"
                            :items="methodsApi"
                            dense
                            label="Select Method"
                        />
                    </v-col>

                    <v-col cols="12">
                        <v-alert
                            :value="alert"
                            color="pink"
                            dark
                            border="top"
                            icon="mdi-alert"
                            transition="scale-transition"
                        >
                            {{ msgError }}
                        </v-alert>
                    </v-col>

                    <v-col cols="12">
                        <v-row v-if="!method == false && !loadingInput">
                            <v-col
                                v-for="(input, key) in configTestApi[method]
                                    .requires"
                                cols="12"
                                md="6"
                                :key="input + '-' + key"
                            >
                                <v-text-field
                                    :label="input"
                                    v-on:change="e => inputMethod(input, e)"
                                />
                            </v-col>
                            <v-col cols="12">
                                <v-btn
                                    color="grey darken-2"
                                    dark
                                    @click="getRequestApi"
                                >
                                    <span style="margin-right: 10px;"
                                        >Submit</span
                                    >
                                    <v-icon>mdi-send</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="6" v-if="!method == false">
                <v-row>
                    <v-col cols="12">
                        <v-alert color="grey darken-2" dark>
                            <div class="text-center">
                                <h5>{{ method }}</h5>
                            </div>

                            <div>
                                <strong>description: </strong>
                                <span>
                                    {{
                                        !configTestApi[method]
                                            ? "Sin Descripción"
                                            : configTestApi[method].description
                                    }}
                                </span>
                            </div>
                        </v-alert>
                    </v-col>
                    <v-col cols="12">
                        <div>
                            <code-highlight language="javascript">
                                // setting Quick Pallet Client
                                const { QPM } = require("qpm-client-js/index");
                                const Client = QPM({
                                    "username": "{{ Client._config.username}}", // username
                                    "password": "{{ Client._config.password }}", //password
                                    "server":" {{ Client._config.server}}" // link and port the server
                                });

                                // function request data
                                const getData = async function(){
                                    // method to use and params
                                    Client.method("{{ method }}",{
                                        {{ code }}
                                    });

                                    // request data
                                    let response = await Client.fetch().then((record) => record);
                                    console.log(response);
                                }

                                getData(); // request data Api
                            </code-highlight>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { configTestApi } from "./utils/testApi";
import { component as CodeHighlight } from "vue-code-highlight";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";

export default {
    components: { CodeHighlight },

    data: () => ({
        code: "",
        dataMethod: {},
        method: null,
        configTestApi,
        Client: {},
        methodsApi: [],
        jsonResponse: "",
        dialog: false,
        alert: false,
        msgError: "",
        loadingInput: false
    }),

    created: function() {
        let methods = [];
        this.Client = window.ClientQPM;
        for (var index in this.configTestApi) methods.push(index);

        this.methodsApi = methods;
    },

    methods: {
        inputMethod: function(key, value) {
            let data = this.dataMethod;
            data[key] = value;
            this.dataMethod = data;
            this.getDataMethod();
        },

        getRequestApi: async function() {
            try {
                const Client = this.Client;
                let data = {};
                data[this.configTestApi[this.method].master] = this.dataMethod;
                this.alert = false;

                let response = await Client.method(this.method, data)
                    .fetch()
                    .then(t => t);
                this.jsonResponse = response;
                this.dialog = true;
            } catch (error) {
                console.error(error);
                this.msgError = error;
                this.alert = true;
            }
        },

        getDataMethod: function() {
            let a = `'${
                this.configTestApi[this.method].master
            }': {\t\t\t\t\t\t`;
            let data = this.dataMethod;

            for (let index in data) {
                if (!data[index] == false)
                    a += `\n\t\t\t\t\t\t\t\t\t\t'${index}': '${data[index]}',`;
            }

            a += "\n\t\t\t\t\t\t\t\t\t}";
            this.code = a;
        }
    },

    watch: {
        method: function() {
            this.alert = false;
            this.loadingInput = true;
            this.dataMethod = {};
            setTimeout(() => (this.loadingInput = false), 100);
        }
    }
};
</script>
