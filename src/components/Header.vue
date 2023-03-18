<template>
  <h1>{{title}}</h1>
</template>

<script>
export default {
  name: 'HeaderComponet',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
h1 {
    text-align: center;
}
</style>