<template>
 <div>
  <header class="w-full  flex justify-center ">
   <div class="page-content w-full h-full lg:bg-black/70 shadow-lg shadow-cyan-500/50  bg-zinc-950">
    <div class="flex items-center justify-between w-full h-full">
     <div class="lg:hidden block">
      <button   aria-label="Show Menu"  v-if="!isMobileMenu" @click="isMobileMenu = !isMobileMenu" class="h-12 w-12 bg-gray-800/50 rounded flex items-center justify-center me-3 active:bg-sky-500">
       <Icon name="material-symbols:menu" class="text-4xl text-white" />
      </button>
      <button    aria-label="Show Menu" v-else @click="isMobileMenu = !isMobileMenu" class="h-12 w-12 bg-gray-800/50 rounded flex items-center justify-center me-3  text-white active:text-red-500">
       <Icon name="mdi:close-outline" class="text-4xl" />
      </button>

     </div>
     <div class=" h-full flex items-center ">

      <div class="lg:w-56 lg:h-full  w-auto h-8   bg-black flex items-center justify-center">
       <NuxtLink to="/">
        <h3 v-if="pending" class="text-white/80 font-bold text-xl">Kẻ Trộm Phim</h3>
       <NuxtImg  v-else class="logo h-full w-auto" :src="data.dataWeb.url_avatar_full" width="200" height="32" alt="ketromphim.com"/>

       </NuxtLink>
      </div>
      <div class="h-full lg:block hidden">
       <ul class="header-menu">
        <li>
         <NuxtLink to="/" class="">
          Phim Mới
         </NuxtLink>
        </li>
        <li>
         <NuxtLink to="/danh-muc/phim-le">
          Phim lẻ
         </NuxtLink>
        </li>
        <li>
         <NuxtLink to="/danh-muc/phim-bo">
          Phim bộ
         </NuxtLink>
        </li>
        <li>
         <NuxtLink>
          Thể loại
          <span style="margin-top: -10px;">
           <icon name="fa6-solid:sort-down" />
          </span>
         </NuxtLink>
         <div class=" sub-menu z-10  absolute top-full left-0 bg-black/90">
          <ul class="grid grid-cols-12 gap-4 w-full p-5 " v-if="!pending && data && data.dataType.length > 0">
           <li class="col-span-4" v-for="item in data.dataType">
            <NuxtLink :to="'/the-loai/' + item.slug" class="text-base w-full text-white/80 flex items-center justif-start">
             <icon name="fa6-solid:caret-right" class="text-xl me-2" /> {{ item.name }}
            </NuxtLink>
           </li>
          </ul>

         </div>
        </li>

        <li>
         <NuxtLink>
          Quốc gia
          <span style="margin-top: -10px;">
           <icon name="fa6-solid:sort-down" />
          </span>
         </NuxtLink>
         <div class=" sub-menu z-10  absolute top-full left-0 bg-black/90">
          <ul class="grid grid-cols-12 gap-4 w-full p-5 " v-if="!pending && data && data.dataNation.length > 0">
           <li class="col-span-4" v-for="item in data.dataNation">
            <NuxtLink :to="'/quoc-gia/' + item.slug" class="text-base w-full text-white/80 flex items-center justif-start">
             <icon name="fa6-solid:caret-right" class="text-xl me-2" /> {{ item.name }}
            </NuxtLink>
           </li>
          </ul>

         </div>
        </li>
       </ul>

      </div>

     </div>


     <button  aria-label="Show Modal Search" @click="isSearchModal = true" class="flex  h-12 min-w-12 w-auto md:px-5 items-center md:justify-between justify-center md:bg-sky-500/90 text-white rounded  active:bg-sky-500">
      <span class="text-white me-3 md:block hidden">
       Tìm kiếm
      </span>
      <icon name="fa6-solid:magnifying-glass" class="md:text-xl text-lg -z-1" />
     </button>


    </div>
   </div>
  </header>

  <SearchModal :isSearch="isSearchModal" @close="handleSearchModalClose" />

  <div class="absolute z-10 w-full  bg-black/90 pb-5 " v-if="isMobileMenu">
   <div class="capitalize">
    <ul class="text-white/80 text-xl">
     <li class="  font-bold    border-b border-gray-100/20">
      <NuxtLink to="/">
       <h3 class="  py-3 px-3  font-bold active:bg-sky-500">
        Trang chủ
       </h3>
      </NuxtLink>

     </li>
     <li class="  font-bold    border-b border-gray-100/20">
      <NuxtLink to="/danh-muc/phim-bo">
       <h3 class="  py-3 px-3  font-bold active:bg-sky-500">
        Phim Bộ
       </h3>
      </NuxtLink>

     </li>
     <li class="font-bold   border-b border-gray-100/20">
      <NuxtLink to="/">
       <h3 class=" py-3 px-3  font-bold active:bg-sky-500">
        Phim Mới

       </h3>
      </NuxtLink>
     </li>
     <li class="font-bold   border-b border-gray-100/20">
      <NuxtLink to="/danh-muc/phim-le">
       <h3 class=" py-3 px-3  font-bold active:bg-sky-500">
        Phim Lẻ
       </h3>
      </NuxtLink>
     </li>
     <li class="font-bold   border-b border-gray-100/20">
      <NuxtLink>
       <h3 class=" py-3 px-3  font-bold active:bg-sky-500">
        Thể loại
       </h3>
      </NuxtLink>
      <div class="w-full ">
       <div class="grid grid-cols-2">
        <div class="col-span-1 " v-for="item in data.dataType">
         <NuxtLink :to="'/the-loai/' + item.slug">
          <h5 class="px-3 py-2 font-medium text-base  active:text-sky-600">
           - Phim {{ item.name }}
          </h5>
         </NuxtLink>
        </div>
       </div>
      </div>
     </li>
     <li class="font-bold   border-b border-gray-100/20">
      <NuxtLink>
       <h3 class=" py-3 px-3  font-bold active:bg-sky-500">
        Quốc gia
       </h3>
      </NuxtLink>
      <div class="w-full ">
       <div class="grid grid-cols-2">
        <div class="col-span-1 " v-for="item in data.dataNation">
         <NuxtLink :to="'/quoc-gia/' + item.slug" class="text-white/60">
          <h5 class="px-3 py-2 font-medium text-base  active:text-sky-600">
           - {{ item.name }}
          </h5>
         </NuxtLink>
        </div>
       </div>
      </div>
     </li>
    </ul>
   </div>
  </div>
  <NuxtLoadingIndicator />



  <div class="w-full flex items-center justify-center pb-24">
   <div class="page-content w-full ">
    <div class="min-h-screen w-full bg-black/70 shadow-lg shadow-yellow-500/20">
     <div class="lg:border border-b border-l border-solid border-yellow-500 p-2 text-sm text-white/80 text-center">
    Web chỉ chạy vài quảng cáo kiếm lon sữa, cái bỉm cho con, xin cảm ơn :))
      <GetIpComponent />
     </div>
    
     <div class="w-full mt-3">
      <div class="grid grid-cols-12 gap-0">
       <div class="lg:col-span-9 col-span-12">
        <div class="p-5 border-t border-r border-solid border-stone-500 h-full">
         <slot name="page" />
        </div>
       </div>
       <div class="lg:col-span-3 col-span-12">
        <div class="p-5 border-t  border-solid border-stone-500 h-full">
         <div class="w-full mb-5" v-if="!pending && data && data.dataYear && data.dataYear.length > 0">
          <h3 class="text-lg text-white/60">Năm phát hành</h3>
          <ul class="w-full grid grid-cols-12 gap-2 mt-3">
           <template v-for="(item, index) in data.dataYear">
            <template v-if="item.isProduct !== undefined">
             <li v-if="item.isProduct" class="col-span-4" :key="index">
              <NuxtLink :to="'/nam/' + item.slug" class="text-white/60">
               <div class="w-full bg-black/50 text-md  text-center py-1 hover:bg-sky-500 hover:text-white active:bg-sky-500">{{ item.name }}</div>
              </NuxtLink>
             </li>
            </template>
           </template>
          </ul>
         </div>
        
         <div>
          <slot name="topRatingProduct" />

         </div>

        </div>
       </div>
      </div>
     </div>


    </div>
   </div>
  </div>

 </div>
</template>

<script setup >
import { ref, computed } from 'vue';
const route = useRoute();
const config = useRuntimeConfig();
const { pending, data } = useFetch(config.public.apiBase + '/' + 'get-data-web', {
 lazy: true
});
const isMobileMenu = ref(false);
const isSearchModal = ref(false);
const handleSearchModalClose = (newValue) => {
 console.log(newValue);
 isSearchModal.value = newValue;
};
</script>

<style scoped >
header {
 height: 70px;
 width: 100%;
 background-color: rgba(15, 15, 15, .9);
 box-shadow: 0 1px 5px rgba(0, 0, 0, .4);
 border-bottom: 1px solid #000;
}

.router-link-active {
 color: skyblue !important;
}

@media only screen and (min-width: 960px) {
 header .logo {
  width: auto;
  height: 55px;
 }

 header ul.header-menu {
  display: flex;
  align-items: center;
  justify-content: left;
  height: 100%;
  padding-left: 10px;
 }


 header ul.header-menu>li {
  height: 100%;
  position: relative;
 }

 header ul.header-menu>li>a {
  font-size: 17px;
  color: white;
  opacity: 0.7;
  padding: 0 15px;
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
 }

 header ul.header-menu>li a:hover {
  color: rgb(79, 121, 226);
  opacity: 1;
 }

 header .sub-menu {
  display: none;
  min-width: 500px;
  font-size: 14px;
  max-width: 600px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 2);
 }

 header .sub-menu li a {
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
 }

 header ul.header-menu>li:hover .sub-menu {
  display: block;
 }
}
</style>