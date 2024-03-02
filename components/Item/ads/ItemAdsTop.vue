<template>
 <div>
  <div class="w-full item-iframe-top flex items-center justif-center">
   <div v-html="iframe" class=""></div>
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
@media only screen and (max-width: 960px) {
 .item-iframe-top {
  width: 100%
 }

 .item-iframe-top iframe {
  width: 100%
 }
}
</style>