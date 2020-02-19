<template>
  <div>
    <input type="text" placeholder="ID" v-model="filter" />
    <table>
      <thead>
        <tr>
          <th>user_id</th>
          <th>correct</th>
          <th>incorrect</th>
          <th>time</th>
          <th>score</th>
          <th>time_until_first_correct</th>
          <th>time_until_first_incorrect</th>
          <th>max_consecutive_correct</th>
          <th>max_consecutive_incorrect</th>
          <th>questions_data</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(log, index) in filteredLogs" :key="index">
          <td>{{ log.user_id }}</td>
          <td>{{ log.correct }}</td>
          <td>{{ log.incorrect }}</td>
          <td>{{ log.time }}</td>
          <td>{{ log.score }}</td>
          <td>{{ log.time_until_first_correct }}</td>
          <td>{{ log.time_until_first_incorrect }}</td>
          <td>{{ log.max_consecutive_correct }}</td>
          <td>{{ log.max_consecutive_incorrect }}</td>
          <td>{{ log.questions_data }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DataTable',
  data() {
    return {
      filter: '',
      logs: []
    }
  },
  computed: {
    filteredLogs() {
      return this.logs.filter(log => !this.filter || log.user_id.toString() === this.filter)
    }
  },
  mounted() {
    axios
      .get("https://quizflags.herokuapp.com/api/logs")
      .then(logs => this.logs = logs.data)
  }
}
</script>

<style scoped>
table {
    margin: 0 auto;
    border-collapse: separate;
    border-spacing: 30px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    z-index: 1;
}
input[type=text] {
  margin-bottom: 30px;
}
</style>
