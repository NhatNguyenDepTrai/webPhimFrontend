<template lang="">
 <div>
  <div  class="iframe_video">
  <iframe class="metaframe rptss" :src="embed_url" frameborder="0" scrolling="no" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
 </div>
 </div>
</template>
<script>
export default {
 props: {
  embed_url: String
 },

}
</script>
<style scoped>
@media only screen and (min-width: 500px) {
 .iframe_video {
  width: 100%;
  height: 440px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
 }
}

@media only screen and (max-width: 500px) {
 .iframe_video {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
 }
}

.iframe_video iframe {
 width: 100%;
 height: 100%;
}
</style>