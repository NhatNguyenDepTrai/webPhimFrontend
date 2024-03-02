<template lang="">
 <div>
  <div  class="iframe_video relative">
  <div class="absolute w-full h-full bg-black/50 top-0 left-0" v-if="isAds">
   <a @click="isAds = false" href="https://atservineor.com/4/7164441" target="_blank">
   <div class="w-full h-full flex items-center justify-center"> 
    <Icon name = "material-symbols:play-circle" class="text-white" style="font-size:100px"/>
   </div>
   </a>
  </div>
  <iframe v-else class="metaframe rptss" :src="embed_url" frameborder="0" scrolling="no" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
 </div> 
 </div>
</template>
<script>
export default {
  data () {
    return {
     isAds:true,
    }
  },
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