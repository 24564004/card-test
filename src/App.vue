<template>
  <div id="app">
    <div class="app-content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app{
width: 100%;
// background-color: #522c57;
}
.app-content{
max-width: 540px;
margin:0 auto;
}
</style>
