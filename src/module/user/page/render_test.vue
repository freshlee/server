<template>
  <div id='app'>
    <hello>123123</hello>
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
      var node = this.$createElement
      const text = this.$slots.default
      node('h1', text)
    }
  },
  created () {
    this.render()
    console.log(this.$createElement)
  }
}
</script>

<style>

</style>