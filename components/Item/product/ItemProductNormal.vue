<template>
 <div>
  <div class="relative product-item" v-if="dataProduct">
   <div class="logo transition-all duration-300">
    <img :src="dataProduct.url_avatar" class="transition ease-in-out delay-150 bg-blue-500 	  duration-300" loading="lazy" alt="ketromphim.com" width="200" height="150">
    <div class="absolute w-full h-full bg-black/50 flex items-center justify-center play-icon   transition-all duration-150 delay-100	">
     <Icon name="fa6-solid:circle-play" class="text-white transition-all duration-300" />
    </div>
    <div class="absolute left-0 top-0" v-if="dataProduct.highlight == 1">
     <div class="bg-red-600 uppercase px-2 py-1 z-20	  font-bold text-white">
      Nổi bật
     </div>
    </div>
    <div class="absolute left-1 bottom-1">
     <div class="bg-sky-600 uppercase px-2 py-1 z-20	  font-bold text-white">
      {{ dataProduct.newEpisode }}
     </div>
    </div>
   </div>
   <div class="text-white text-sm mt-3 mb-1 capitalize hover:text-sky-500">
    {{ dataProduct.name }}


   </div>
   <div class="text-white/50 text-xs capitalize">
    {{ dataProduct.yearName }}


   </div>


  </div>
 </div>
</template>
<script>
export default {
 props: {
  dataProduct: Object
 },

}
</script>
<style lang="css" >
.product-item {
 width: 100%;
 cursor: pointer text-tran
}

@media only screen and (min-width: 960px) {

 .product-item .logo {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: top;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-size: 10px;
 }
}

@media only screen and (max-width: 960px) {

 .product-item .logo {
  width: 100%;
  height: 250px;
  display: flex;
  align-items: top;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-size: 10px;
 }
}

@media only screen and (max-width: 500) {

 .product-item .logo {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: top;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-size: 10px;
 }
}

.product-item .logo:hover img {
 transform: translateY(0.25rem);
 transform: scale(1.25);
}

.product-item .logo .play-icon {
 opacity: 0;
}

.product-item .logo:hover .play-icon {
 opacity: 1;
}

.product-item .logo .play-icon svg {
 font-size: 70px;

}

.product-item .logo:hover .play-icon svg {
 font-size: 50px;

}
</style>