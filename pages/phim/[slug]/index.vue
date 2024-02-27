<template>
 <div>

  <Meta v-if="!pending && data.product" name="og:image" :content="data.product.meta_image" />
  <Meta v-if="!pending && data.product" name="og:title" :content="data.product.meta_title" />
  <Meta v-if="!pending && data.product" name="og:description" :content="data.product.meta_desc" />
  <Meta v-if="!pending && data.product" property="og:image" :content="data.product.meta_image" />
  <Meta v-if="!pending && data.product" property="og:title" :content="data.product.meta_title" />
  <Meta v-if="!pending && data.product" property="og:description" :content="data.product.meta_desc" />
  <Meta v-if="!pending && data.product" name="image" :content="data.product.meta_image" />
  <Meta v-if="!pending && data.product" name="title" :content="data.product.meta_title" />
  <Meta v-if="!pending && data.product" name="description" :content="data.product.meta_desc" />

  <NuxtLayout>
   <template #page>
    <div>
     <ul class="flex flex-wrap items-center justify-start mb-5 font-medium  " v-if="!pending">
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
       <NuxtLink to="#" class="text-base text-white/50 font-bold">{{ data.product.name }}</NuxtLink>
      </li>
     </ul>
    </div>
    <div class="grid grid-cols-12" v-if="!pending && data.product">
     <div class="lg:col-span-2 col-span-4">
      <img :src="data.product.url_avatar" class="w-full h-auto" loading="lazy" alt="ketromphim.com" width="200" height="150">
     </div>
     <div class="lg:col-span-10 col-span-8 sm:py-2  pl-5">
      <h1 class="sm:text-3xl text-2xl  text-white mb-1">{{ data.product.name }}</h1>
      <h3 class="sm:text-base text-xs text-white/50 mb-1">{{ data.product.full_name }}</h3>
      <h3 class="sm:text-base text-xs text-white/30 sm:mb-5 mb-2">{{ data.product.date }}, {{ data.product.yearName }}</h3>
      <span class="bg-sky-500 px-3 py-1 uppercase text-white font-bold sm:text-base text-xs ">{{ data.product.newEpisode }}</span>
      <div class="mt-5" v-if="data.firstEpisode">
       <NuxtLink :to="'/phim/' + route.params.slug + '/' + data.firstEpisode.slug">
        <button class="text-white bg-gray-800 active:bg-red-500 sm:px-5 px-3 sm:py-2 py-1 sm:text-xl text-base  font-bold flex items-center justify-center shadow-lg shadow-cyan-500/50">Xem Phim

         <Icon name="material-symbols-light:play-circle" class="ms-2 text-3xl" />
        </button>
       </NuxtLink>
      </div>
     </div>
    </div>
    <div class="border-y border-solid border-gray-500/50 mt-5 " v-if="!pending && data.product">
     <div class="flex items-center py-2" v-if="dataRating">

      <div class="h-14 w-14 flex items-center justify-center font-bold bg-black/60 text-white text-2xl">{{ dataRating.value.averageRating }}</div>

      <div class="px-3">
       <div class="rating text-start">
        <span class="star " :class="{ 'text-yellow-500': i <= dataRating.value.averageRating, 'text-gray-500': i > dataRating.value.averageRating }" v-for="i in [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]" @click="submitRating(i, data.product.id)" :data-rating="i">&#9733;</span>
       </div>
       <div class="flex items-center justify-start">
        <div class="flex items-center text-white/50">
         <Icon name="material-symbols:account-circle-full" class="me-3 text-xl" /> <span class="text-xs">{{ dataRating.value.totalRatings }} Người đánh giá</span>
        </div>
        <button class="ms-3 text-sm text-white border border-solid border-gray-500 rounded px-1">Đánh giá của bạn:
         <span>
          {{ dataRating.value.clientRating }}

         </span>
        </button>
       </div>
      </div>
     </div>
     <div v-else class="flex items-center py-2">
      <div class="h-14 w-14 flex items-center justify-center font-bold bg-black/60 text-white text-2xl">{{ data.product.rating }}</div>

      <div class="px-3">
       <div class="rating text-start">
        <span class="star " :class="{ 'text-yellow-500': i <= data.product.rating, 'text-gray-500': i > data.product.rating }" v-for="i in [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]" @click="submitRating(i, data.product.id)" :data-rating="i">&#9733;</span>
       </div>
       <div class="flex items-center justify-start">
        <div class="flex items-center text-white/50">
         <Icon name="material-symbols:account-circle-full" class="me-3 text-xl" /> <span class="text-xs">{{ data.product.ratings.length }} Người đánh giá</span>
        </div>
        <button class="ms-3 text-sm text-white border border-solid border-gray-500 rounded px-1">Đánh giá của bạn:
         <span>
          <template v-for="(item, index) in data.product.ratings">
           <template v-if="item.client_ip == clientIp">
            {{ item.rating }}
           </template>
          </template>

         </span>
        </button>
       </div>
      </div>
     </div>
    </div>
    <div class="" v-if="!pending && data.product">
     <ul class="flex items-center justify-start  list_types flex-wrap my-1">
      <li v-for="item in data.product.types" class="text-sky-700 text-sm font-bold me-3 my-2  ">
       <NuxtLink to="" class="cursor-pointer hover:text-white">Phim {{ item.name }}</NuxtLink>
      </li>
     </ul>
    </div>
    <div class="w-full border-y-4 border-solid border-white/20 py-3" v-if="!pending && data.product.episodes && data.product.episodes.length > 0">
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
   </template>

   <template #topRatingProduct>
    <TopRatingProduct v-if="!pending && data.dataTopProduct" :data="data.dataTopProduct" />
   </template>


  </NuxtLayout>
 </div>
</template>

<script setup >
const config = useRuntimeConfig();
const route = useRoute();
const dataRating = ref(null);
const clientIp = useCookie('clientIp');

const { pending, data } = useFetch(config.public.apiBase + '/' + 'get-detail-product/' + route.params.slug, {
 lazy: true
});

const submitRating = async (value, id_product) => {
 if (clientIp.value) {

  const { data: dataReturn, pending } = await useFetch(config.public.apiBase + '/product/rating', {
   method: "POST",
   body: JSON.stringify({
    client_ip: clientIp.value,
    rating: value,
    id_product: id_product
   }),
   headers: {
    'Content-Type': 'application/json',
    'cache-control': 'no-cache'
   },
  });

  dataRating.value = dataReturn;
 } else {
  const { pending, data } = useFetch('https://api.ipify.org?format=json', {
   lazy: true
  });
  watch(data, () => {
   if (data.value) {
    clientIp.value = data.value.ip;
    console.log('IP: ' + data.value.ip);
   } else {
    console.log('not get data IP');
   }
  });
 }
};

</script>

<style scoped>
ul.list_types li:not(:last-child)::after {
 content: '|';
 margin-left: 20px;

}

.rating {
 unicode-bidi: bidi-override;
 direction: rtl;
 text-align: left;
}

@media only screen and (min-width: 960px) {
 .rating .star {
  font-size: 30px;
  cursor: pointer;
  margin-right: 5px;
 }
}

@media only screen and (max-width: 960px) {
 .rating .star {
  font-size: 25px;
  cursor: pointer;
  margin-right: 0 px;
 }
}

@media only screen and (max-width: 500px) {
 .rating .star {
  font-size: 25px;
  cursor: pointer;
  margin-right: 0px;
 }
}

.rating .star:hover,
.rating .star:hover~.star {
 color: rgb(64, 138, 207);
}
</style>