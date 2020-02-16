<template>
  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="6"
          sm="8"
          md="8"
        >
          <v-card>
            <v-toolbar
              color="primary"
              dark
              flat
            >
              <v-toolbar-title>Create A Lecture</v-toolbar-title>
            </v-toolbar>

            <v-card-text>
              <br><br>
              <v-form>
                <h2 style="color: black; text-align: center;">Which class?</h2>
                <br>
                <v-row align="center" justify="center">
                  <v-select
                    :items="classes"
                    label="Classname"
                    outlined
                    style="max-width: 400px;"
                  ></v-select>
                </v-row>

                <br>
                <h2 style="color: black; text-align: center;">Enter a name for your lecture</h2>
                <v-row align="center" justify="center">
                  <v-col cols="12" sm="6">
                    <v-text-field
                      label="Lecture name"
                      outlined
                      v-model="lectureName"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
              <br>
              <div class="text-center">
                <v-btn @click="create" rounded color="primary" x-large>Create</v-btn>
              </div>
              <br>
            </v-card-text>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>

export default {
  data() {
    return {
      lectureName: '',
      classes: ['AP Calculus BC', 'AP Chemistry', 'AP Physics C: E & M', 'AP Physics C: Mechanics', 'Multivariable Calculus']
    }
  },
  methods: {
    create() {
      let id = this.makeId(5);
      this.$router.push({ path: '/live-lecture?id=' + id });
    },
    makeId(length) {
      let result = '';
      let characters = 'abcdefghijklmnopqrstuvwxyz';
      let len = characters.length;
      for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * len));
      }
      return result;
    }
  }
}
</script>
