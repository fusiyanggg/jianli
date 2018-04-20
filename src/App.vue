<template>
    <div>
        hello
        <nav-side></nav-side>
        <exp></exp>
        <proj></proj>
        <foo></foo>

    </div>
</template>
<script>
  import NavSide from './page/Nav.vue'
  import Exp from './page/Exp.vue'
  import Foo from './page/Foot.vue'
  import Proj from './page/Proj.vue'

  export default {
    data() {
      return {}
    },
    components: {
      NavSide,
      Exp,
      Foo,
      Proj
    }
  }
</script>
<style>
</style>
