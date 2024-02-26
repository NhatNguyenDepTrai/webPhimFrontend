<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup >

import { ref, watch } from 'vue';
const { pending, data } = useFetch('https://api.ipify.org?format=json', {
  lazy: true
});
const clientIp = useCookie('clientIp');

watch(data, () => {
  if (data.value) {
    clientIp.value = data.value.ip;
  }
});
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Kẻ Trộm Phim` : 'Kẻ Trộm Phim';
  },
  meta: [
    { name: 'og:description', content: 'Phim Mới chất lượng cao miễn phí. Xem phim hd VietSub. Phim thuyết minh chất lượng HD. Kho phim chuẩn nhanh online hay hấp dẫn.' },
    { name: 'description', content: 'Phim Mới chất lượng cao miễn phí. Xem phim hd VietSub. Phim thuyết minh chất lượng HD. Kho phim chuẩn nhanh online hay hấp dẫn.' },
    { name: 'image', content: '/meta_mage.png' },
    { name: 'og:image', content: '/meta_mage.png' },
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [{ innerHTML: 'console.log(\'Hello world\')' }]
})
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>