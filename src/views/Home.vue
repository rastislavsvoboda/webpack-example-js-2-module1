<template>
  <div class="home">
    <img alt="Vue logo" src="assets/logo.png" />
    <EditPersonBasic :person="person" />
  </div>
</template>

<script>
// @ is an alias to /src
import EditPersonBasic from "Components/EditPersonBasic.vue";

export default {
  name: "Home",
  data() {
    return {
      // TODO: hardcoded
      person: {
        id: 1,
        first_name: "Leesa",
        last_name: "Cokayne",
        avatar:
          "https://robohash.org/hicnihilcupiditate.png?size=50x50&set=set1",
        gender: "Male",
        ssn: "393-28-1313",
        city: "Laju Kidul",
        country: "Indonesia",
        state: null,
        street_address: "09 Evergreen Park",
        dob: "1989-10-13",
        email: "lcokayne0@google.it",
      }

    };
  },
  components: {
    EditPersonBasic,
  },
};
</script>
