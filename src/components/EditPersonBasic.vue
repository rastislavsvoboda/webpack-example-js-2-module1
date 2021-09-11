<template>
  <div>
    <button @click="goBack" class="btn btn-primary">BACK</button>
    <br />

    <h1>Person - basic data</h1>
    <div v-if="person" class="detail">
      <div class="col-md-4 col-sm-4">
        <img :src="person.avatar" width="75" alt="" class="img-fluid" />
      </div>
      <div class="col-md-4 col-sm-4">
        <br />
        First Name:
        <br />
        <input v-model="person.first_name" />
        <br />
        Last Name:
        <br />
        <input v-model="person.last_name" />
        <br />
        Gender:
        <br />
        <input v-model="person.gender" />
        <br />
        Date of birth:
        <br />
        <input v-model="person.dob" />
        <br />
        Email:
        <br />
        <input v-model="person.email" />
        <br />
        Social Security Number:
        <br />
        <input v-model="person.ssn" />
        <br />
        Street Address:
        <br />
        <input v-model="person.street_address" />
        <br />
        City:
        <br />
        <input v-model="person.city" />
        <br />
        Country:
        <br />
        <input v-model="person.country" />
        <br />
        State:
        <br />
        <input v-model="person.state" />

        <br />
        <br />

        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-6"></div>
          <div class="col-md-6 col-sm-6 col-xs-6">
            <button class="btn btn-lg btn-block btn-success">UPDATE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditPersonBasic",
  props: {
    person: Object,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    mounted() {
      console.log('EditPersonBasic - mounted');
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
div {
  padding: 1em;
}

.detail {
  background: rgb(245, 245, 245);
}
</style>
