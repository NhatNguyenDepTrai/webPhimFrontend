<template>
 <div>
  <div class=" item-iframe-left">
   <div v-html="iframe" class="w-full"></div>
  </div>

 </div>
</template>
<script>
export default {
 props: {
  iframe: String
 },

}
</script>
<style lang="css" >
.item-iframe-left {
 height: 180px
}

.item-iframe-left iframe {
 width: 100% !important;
 height: auto;
}
</style>