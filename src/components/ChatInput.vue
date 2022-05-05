<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<template>
  <div class="input-container">
    <div class="input"></div>
  </div>
</template>

<style scoped>
.input-container {
  position: fixed;
  width: 80%;
  height: 50px;
  background-color: red;
  bottom: 0px;
  left: 20%;
  padding: 7px;
}
.input {
  width: calc(100% - 14px);
  height: 100%;
  background-color: white;
  border-radius: 10px;
}
</style>