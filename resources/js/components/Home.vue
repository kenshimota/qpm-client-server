<template>
  <v-container>
    <v-row  style = "border: 1px solid #ddd; border-top: 3px solid #ddd; border-radius: 5px; padding: 10px; max-width: 600px; margin: 10px auto;" >
      <v-col cols = "12" class = "text-center">
        <h5>Setting Client Quick Pallet Market</h5>
      </v-col>
      <v-col cols = "12" md = "6">
        <v-text-field label = "username" v-model = "username" />
      </v-col>
      <v-col cols = "12" md = "6">
        <v-text-field label = "password" v-model = "password" />
      </v-col>
      <v-col cols = "12">
        <v-text-field label = "Server Url" v-model = "server" />
      </v-col>
      <v-col cols = "12" class = "text-right">
        <v-btn color = "pink" dark @click = "setSetting">
          <span>Save</span>
          <v-icon>mdi-content-save</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    username: "",
    password: "",
    server: "",
  }),
  
  methods: {
    
    // evento que guarda la confirguracion y permite hacer la prueba determinada
    setSetting: function(){
      

      window.ClientQPM = window.QPM({
        username: this.username,
        password: this.password,
        server: this.server
      });

      this.$router.push("/test");
    }
  }
};
</script>