<template>
  <div class='hello'>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    render () {
      console.log(11212)
      var node = this.$createElement
      const text = this.$slots.default
      console.log(111)
      node('h1', text)
    }
  },
  created() {
    this.render()
    console.log(this.$createElement)
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
</style>
