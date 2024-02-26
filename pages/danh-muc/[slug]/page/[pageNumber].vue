<template lang="">
  <div>
    <Title v-if="!pending && data.category"> {{ data.category.name }} </Title>
    <Meta v-if="!pending && data.category" name="og:image" :content="data.category.meta_image" />
  <Meta v-if="!pending && data.category" name="og:title" :content="data.category.meta_title" />
  <Meta v-if="!pending && data.category" name="og:description" :content="data.category.meta_desc" />
  <Meta v-if="!pending && data.category" property="og:image" :content="data.category.meta_image" />
  <Meta v-if="!pending && data.category" property="og:title" :content="data.category.meta_title" />
  <Meta v-if="!pending && data.category" property="og:description" :content="data.category.meta_desc" />
  <Meta v-if="!pending && data.category" name="image" :content="data.category.meta_image" />
  <Meta v-if="!pending && data.category" name="title" :content="data.category.meta_title" />
  <Meta v-if="!pending && data.category" name="description" :content="data.category.meta_desc" />


   <NuxtLayout>
    <template #page>
      <div>
        <PageTitle v-if="!pending && data.category">{{ data.category.name }}</PageTitle>
      </div>
      <div>
        <div class="mt-5" v-if="!pending && data && data.dataProduct.data && data.dataProduct.data.length > 0">
          <div class="flex items-center justify-between mb-3">
            <div>
              <CateTittle  v-if="!pending && data.category" class="mb-3 capitalize">{{ data.category.name }} mới cập nhập</CateTittle>
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
  <Pagination :urlPage="'/danh-muc/'+route.params.slug" :totalPage="data.dataProduct.last_page":current_page="data.dataProduct.current_page" />

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

const { pending, data } = useFetch(config.public.apiBase + '/' + 'get-data-page-category/' + route.params.slug + '?page=' + route.params.pageNumber, {
  lazy: true
});


</script>
<style lang="">
  
 </style>