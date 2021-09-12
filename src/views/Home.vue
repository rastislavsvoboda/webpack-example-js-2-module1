<template>
  <div class="home">
    <img alt="Vue logo" src="assets/logo.png" />
    <form class="form-edit">
      <label>Edit person id</label>
      <input type="text" v-model="id" width="200"/>
      <button @click.prevent="gotoEdit">Goto Edit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      id: 1,
    };
  },
  components: {},
  methods: {
    gotoEdit() {
      this.$router.push({ path: `/person/edit/${this.id}` });
    },
  },
};
</script>

<style  scoped>

.form-edit {
  width: 200px;
  margin: auto;
}
  
</style>