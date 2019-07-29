<template>
  <div class="loading">
    <div class="loading-circle"></div>
    <h3>{{ loadingText }}</h3>
  </div>
</template>

<script>
export default {
  props: ['loadingText']
}
</script>

<style lang="stylus" >
.loading-circle {
    margin: 0 auto;
    border-radius: 50%;
    width: 150px
    height: 150px;
    border: 1rem solid #ccc
    border-top-color: #389AB9;
    animation: spins 1s infinite linear;

  }

  .loading h3 {
    text-align: center;
    display: block;
    font-size: 2em;
    font-weight: lighter;
    margin-top: 1em;
  }


  @keyframes spins {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

