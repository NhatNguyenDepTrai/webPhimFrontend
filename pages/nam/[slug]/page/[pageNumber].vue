<template lang="">
  <div>
    <Title v-if="!pending && data.year">Phim  {{ data.year.name }} </Title>
    <Meta v-if="!pending && data.year" name="og:image" :content="data.year.meta_image" />
  <Meta v-if="!pending && data.year" name="og:title" :content="data.year.meta_title" />
  <Meta v-if="!pending && data.year" name="og:description" :content="data.year.meta_desc" />
  <Meta v-if="!pending && data.year" property="og:image" :content="data.year.meta_image" />
  <Meta v-if="!pending && data.year" property="og:title" :content="data.year.meta_title" />
  <Meta v-if="!pending && data.year" property="og:description" :content="data.year.meta_desc" />
  <Meta v-if="!pending && data.year" name="image" :content="data.year.meta_image" />
  <Meta v-if="!pending && data.year" name="title" :content="data.year.meta_title" />
  <Meta v-if="!pending && data.year" name="description" :content="data.year.meta_desc" />


   <NuxtLayout>
    <template #page>
      <div>
        <PageTitle v-if="!pending && data.year">Phim {{ data.year.name }}</PageTitle>
      </div>
      <div>
        <div class="mt-5" v-if="!pending && data && data.dataProduct.data && data.dataProduct.data.length > 0">
          <div class="flex items-center justify-between mb-3">
            <div>
              <CateTittle  v-if="!pending && data.year" class="mb-3 capitalize">Phim {{ data.year.name }} mới cập nhập</CateTittle>
            </div>
            
          </div>
          <div  v-if="!pending && data.dataProduct" class="w-full grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4">
            <div class="col-span-1" v-for="item in data.dataProduct.data">
              <NuxtLink :to="'/phim/' + item.slug">
                <ItemProductNormal :dataProduct="item" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
 
   
  
 
 <div class="my-10 flex items-center justify-center" v-if="!pending">
  <Pagiyear :urlPage="'/quoc-gia/'+route.params.slug" :totalPage="data.dataProduct.last_page":current_page="data.dataProduct.current_page" />

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

const { pending, data } = useFetch(config.public.apiBase + '/' + 'get-data-page-year/' + route.params.slug + '?page=' + route.params.pageNumber, {
  lazy: true
});


</script>
<style lang="">
  
 </style>