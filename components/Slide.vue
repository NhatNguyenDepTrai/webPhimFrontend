<template>
   <div class="w-full">
      <Swiper :grabCursor="true" slidesPerView="1" :breakpoints="{
         '640': {
            slidesPerView: 2,
            spaceBetween: 5,
         },
         '768': {
            slidesPerView: 2,
            spaceBetween: 5,
         },

      }" :autoplay="{ delay: 7000, disableOnInteraction: false, }" :pagination="{
   clickable: true,
}" :modules="[SwiperAutoplay, SwiperPagination]" class="mySwiper w-full pb-16" style="padding-bottom: 30px;">
         <SwiperSlide class="p-3 " v-for="item in data">

            <NuxtLink :to="'/phim/' + item.slug">
               <div class="w-full slide-item flex items-end relative  bg-black text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" :style="{ 'background-image': 'url(' + item.url_bg + ')' }">
                  <div class="w-full p-3 text-white ">
                     <h3 class="text-base font-bold">{{ item.name }}</h3>
                     <h5 class="text-sm">{{ item.yearName }}</h5>
                  </div>
                  <div class="absolute right-0 bottom-0">
                     <div class="bg-sky-600 uppercase px-3 py-1 text-sm font-bold">
                        {{ item.newEpisode }}

                     </div>
                  </div>
               </div>
            </NuxtLink>
         </SwiperSlide>

      </Swiper>
   </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
export default {

   props: {
      data: Object
   },

}
</script>
<style  scoped>
.slide-item {
   height: 200px;
   background-size: cover;
}
</style>