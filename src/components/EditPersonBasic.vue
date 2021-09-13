<template>
  <div>
    <button @click="goBack" class="btn btn-outline-secondary">BACK</button>
    <br />

    <div>{{ counter }}</div>
    <button @click="inc" class="btn btn-warning">Increment Counter</button>

    <h1>Person - basic data</h1>
    <div v-if="person" class="detail">
      <div class="col-md-4 col-sm-4">
        <img :src="person.avatar" width="75" alt="" class="img-fluid" />
      </div>
      <div class="col-md-4 col-sm-4">
        <div class="govuk-form-group">
          <label for="first_name">Frist name</label>
          <input v-model="person.first_name" id="first_name" />
        </div>
        
        <div class="govuk-form-group">
          <label for="last_name">Last name</label>
          <input v-model="person.last_name" id="first_name" />
        </div>

        <div class="govuk-form-group">
          <label for="gender">Gender</label>
          <input v-model="person.gender" id="first_name" />
        </div>

        <div class="govuk-form-group">
          <label for="dob">Date of birt</label>
          <input v-model="person.dob" id="first_name" />
        </div>

        <div class="govuk-form-group">
          <label for="email"> Email</label>
          <input v-model="person.email" id="first_name" />
        </div>

        <div class="govuk-form-group">
          <label for="ssn">Social Security Number</label>
          <input v-model="person.ssn" id="first_name" />
        </div>

        <div class="govuk-form-group">
          <label for="street_address">Street Address</label>
          <input v-model="person.street_address" id="first_name" />
        </div>
        
        <div class="govuk-form-group">
          <label for="city">City</label>
          <input v-model="person.city" id="first_name" />
        </div>
        
        <div class="govuk-form-group">
          <label for="country">Country</label>
          <input v-model="person.country" id="first_name" />
        </div>
        
        <div class="govuk-form-group">
          <label for="state">State</label>
          <input v-model="person.state" id="first_name" />
        </div>
        
        <div class="row">
          <button class="btn btn-primary" @click="updatePerson">UPDATE</button>
          <button class="btn btn-secondary" @click="cancel">CANCEL</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { clickStore } from "appshell/Store";
import usePersonService from "Services/person-service.js";
const { getPerson, updatePerson } = usePersonService();

export default {
  name: "EditPersonBasic",
  data() {
    return {
      person: Object,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    inc() {
      clickStore.incrementCount();
    },
    async load(id) {
      this.person = await getPerson(id);
    },
    async updatePerson() {
      const result = await updatePerson(this.person);
      console.log(result);
      const msg = `${result.status}: ${result.statusText}`;
      alert(msg);
    },
    cancel() {
      this.goBack();
    },
  },
  computed: {
    counter() {
      return clickStore.getState().count;
    },
  },
  async mounted() {
    console.log("EditPersonBasic - mounted");
    const id = this.$route.params.id;
    await this.load(id);
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

input {
    font-family: "Source Sans Pro", "Arial", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.25;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 5px;
    border: 2px solid #0b0c0c;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

label {
  margin: 0 0 5px;
  display: block;
  float: left;
}

.govuk-form-group {
  margin-bottom: 15px;
}

.detail {
  background: rgb(245, 245, 245);
}

.btn {
  margin: 2px 5px 0 0;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-primary {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.btn-secondary {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-warning {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
}
</style>
