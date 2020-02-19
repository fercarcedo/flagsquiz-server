<template>
  <div id="app">
    <data-table/>
  </div>
</template>

<script>
import DataTable from './components/DataTable.vue'

export default {
  name: 'App',
  components: {
    DataTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: #F8F8F8;
}
</style>
