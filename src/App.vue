<template>
  <div>Module1</div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>

export default {
  components: {
  }
}

</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.3rem;
}

select {
  width: 100%;
  height: 2.3rem;
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
  line-height: 1.3rem;
  padding: 0.2rem 0;
  color: #555;
}

input {
  width: 100%;
  height: 1.8rem;
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
  line-height: 1.3rem;
  padding: 0.2rem;
  color: #555;
}
</style>
