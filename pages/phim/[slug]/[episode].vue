<template>
 <div>
  <Title v-if="!pending && data.product"> {{ data.product.name }} - {{ data.episode.name }}</Title>
  <Meta v-if="!pending && data.product" name="og:image" :content="data.product.meta_image" />
  <Meta v-if="!pending && data.product" name="og:title" :content="data.product.name + ' - ' + data.product.full_name + ' ' + data.episode.name + ' | Kẻ Trộm Phim '" />
  <Meta v-if="!pending && data.product" name="og:description" :content="data.product.meta_desc" />
  <Meta v-if="!pending && data.product" property="og:image" :content="data.product.meta_image" />
  <Meta v-if="!pending && data.product" property="og:title" :content="data.product.name + ' - ' + data.product.full_name + ' ' + data.episode.name + ' | Kẻ Trộm Phim '" />
  <Meta v-if="!pending && data.product" property="og:description" :content="data.product.meta_desc" />
  <Meta v-if="!pending && data.product" name="image" :content="data.product.meta_image" />
  <Meta v-if="!pending && data.product" name="title" :content="data.product.name + ' - ' + data.product.full_name + data.episode.name" />
  <Meta v-if="!pending && data.product" name="description" :content="data.product.meta_desc" />
  <NuxtLayout>

   <template #page>
    <div v-if="!pending">
     <div v-if="data.product">
      <ul class="flex flex-wrap items-center justify-start mb-5  font-medium">
       <li class="mr-3">
        <NuxtLink to="/" class="text-base text-sky-700">Trang chủ</NuxtLink>
       </li>
       <li class="mr-3">
        <Icon name="material-symbols:keyboard-double-arrow-right" class="text-white/60 text-xl" />
       </li>
       <li class="mr-3">
        <NuxtLink :to="'/danh-muc/' + data.product.category.slug" class="text-base text-sky-700">{{ data.product.category.name }}</NuxtLink>
       </li>
       <li class="mr-3">
        <Icon name="material-symbols:keyboard-double-arrow-right" class="text-white/60 text-xl" />
       </li>
       <li class="mr-3">
        <NuxtLink :to="'/phim/' + data.product.slug" class="text-base text-sky-700">{{ data.product.name }}</NuxtLink>
       </li>
       <li class="mr-3">
        <Icon name="material-symbols:keyboard-double-arrow-right" class="text-white/60 text-xl" />
       </li>
       <li class="mr-3">
        <NuxtLink :to="'/phim/' + data.episode.slug" class="text-base text-white/50 font-bold">{{ data.episode.name }}</NuxtLink>
       </li>
      </ul>
     </div>

     <div v-if="data.embed_url">



      <IframeVideo :type="data.server_type" :embed_url="data.embed_url" v-if="!embed_url" />
      <IframeVideo :type="data.server_type" :embed_url="embed_url" v-else />

     </div>
     <div v-else>
      <div class="w-full md:h-96 h-56 bg-black/80 flex items-center justify-center ">
       <div>
        <div class="text-center">
         <div class="text-white/80 font-bold bg-red-500/80  px-3 py-2 mb-3">Tập phim đang được cập nhập</div>
        </div>

       </div>

      </div>
     </div>
     <div v-if="data.episode">
      <div class="w-full py-3">
       <h3 class=" text-xl mb-3 text-white/80 font-bold">
        Chọn server
       </h3>
       <div class="border-t border-gray-500 border-solid py-3">
        <ul>
         <li v-for="(item, index) in data.episode.servers">
          <button @click="changeServer(item.embed_url)" class="mb-1 text-white hover:text-sky-500 w-full px-3 py-4 text-start font-bold" :class="{ 'bg-gray-700/50 text-white': item.embed_url === embed_url, 'bg-gray-700/50': !embed_url && item.embed_url === data.embed_url }">
           Server #{{ index + 1 }}
          </button>
         </li>
        </ul>
       </div>

       <div class="text-start text-yellow-600">
        Không xem được vui lòng chuyển server #2, #3,.. để xem phim mượt hơn
       </div>
      </div>
     </div>
     <div class="w-full" v-if="!pending">
      <hr>
      <div class="grid grid-cols-3 py-1 bg-black/50 text-white/80 text-xl font-bold">
       <div class="col-span-1">
        <div v-if="!data.previousEpisode">
         <button class="w-full flex items-center justify-center py-3 border border-gray-500/50   bg-gray-500/10 text-white/10  cursor-not-allowed">
          <Icon name="mdi:skip-previous-circle" class="text-4xl mx-3" /> <span class="lg:block hidden ">Tập Trước</span>
         </button>
        </div>
        <NuxtLink v-else :to="'/phim/' + data.product.slug + '/' + data.previousEpisode.slug">

         <button class="w-full flex items-center justify-center py-3 border border-gray-500/50   hover:text-sky-600">
          <Icon name="mdi:skip-previous-circle" class="text-4xl mx-3" /> <span class="lg:block hidden ">Tập Trước</span>
         </button>
        </NuxtLink>
       </div>
       <div class="col-span-1">
        <button class="w-full flex items-center justify-center py-3 border border-gray-500/50   hover:text-sky-600">
         <Icon name="ph:list-numbers-bold" class="text-4xl mx-3" /> <span class="lg:block hidden ">All</span>
        </button>
       </div>
       <div class="col-span-1">
        <div v-if="!data.nextEpisode">
         <button class="w-full flex items-center justify-center py-3 border border-gray-500/50   bg-gray-500/10 text-white/10  cursor-not-allowed">
          <span class="lg:block hidden ">Tập Sau </span>
          <Icon name="mdi:skip-next-circle" class="text-4xl mx-3" />
         </button>
        </div>
        <NuxtLink v-else :to="'/phim/' + data.product.slug + '/' + data.nextEpisode.slug">
         <button class="w-full flex items-center justify-center py-3 border border-gray-500/50   hover:text-sky-600">
          <span class="lg:block hidden ">Tập Sau </span>
          <Icon name="mdi:skip-next-circle" class="text-4xl mx-3" />
         </button>
        </NuxtLink>

       </div>
      </div>
     </div>
     <div class="w-full border-y-4 border-solid border-white/20 my-5 py-6" v-if="!pending && data.product.episodes && data.product.episodes.length > 0">
      <h3 class=" text-xl mb-3 text-white/80 font-bold">
       Chọn tập phim
      </h3>
      <ul class="flex flex-wrap items-center justify-start">
       <li v-for="item in data.product.episodes" class="ms-3 mb-3 ">
        <NuxtLink :to="'/phim/' + data.product.slug + '/' + item.slug">
         <button class="bg-gray-500 text-white hover:bg-sky-600 px-3 rounded py-1">{{ item.name }}</button>
        </NuxtLink>
       </li>
      </ul>
     </div>
     <div class="w-full py-3" v-if="!pending && data.product && data.product.desc">
      <h3 class=" text-xl mb-3 text-white/80 font-bold">
       Tóm tắt
      </h3>
      <div class="ps-3">
       <div v-html="data.product.desc" class="text-white/60 text-base"></div>
      </div>
     </div>

    </div>
   </template>
   <template #topRatingProduct>
    <TopRatingProduct v-if="!pending && data.dataTopProduct" :data="data.dataTopProduct" />
   </template>
  </NuxtLayout>

 </div>
</template>

<script setup>
const config = useRuntimeConfig();
const route = useRoute();
const embed_url = ref('');
const { pending, data } = useFetch(config.public.apiBase + '/' + 'get-episode/' + route.params.slug + '/' + route.params.episode, {
 lazy: true
});
watch(data, () => {
 if (data.value.embed_url) {
  embed_url.value = data.value.embed_url;
 }
});
const changeServer = (url) => {
 embed_url.value = url;
};


</script>

<style></style>