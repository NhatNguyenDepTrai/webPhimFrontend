<template lang="">
 <div>


<nav class="pagination" aria-label="Page navigation example" v-if="current_page">
  <ul class="flex items-center -space-x-px h-10 text-base">
    <li v-if="lastPage > 0 && totalPage > 4">
      <NuxtLink  :to="urlPage+'/page/'+ lastPage" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Previous</span>
        <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
      </NuxtLink>
    </li>
    <li v-if="totalPage >1" v-for="i in totalPage" :key="i">
      <NuxtLink  :to="urlPage+'/page/'+i" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ i }}</NuxtLink>
    </li>
   
    <li  v-if="nextPage < totalPage && totalPage > 4">
      <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Next</span>
        <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
      </a>
    </li>
  </ul>
</nav>


 </div>
 
 
</template>
<script setup>
const props = defineProps({
  current_page: Number,
  totalPage: Number,
  urlPage: String,
});
const lastPage = ref(Number);
lastPage.value = props.current_page - 1;
const nextPage = ref(Number);
nextPage.value = props.current_page + 1;


</script>
<style scoped>
nav.pagination .router-link-active {
  background: #000;
  color: yellow;
  font-weight: bold;
}
</style>