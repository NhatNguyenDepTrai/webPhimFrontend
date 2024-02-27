<template>
 <div>
  <h3 class="hidden">{{ clientIp }}</h3>
  <h3 class="hidden">{{ data.ip }}</h3>
 </div>
</template>

<script  setup>
import { ref, watch } from 'vue';
const { pending, data } = useFetch('https://api.ipify.org?format=json', {
 lazy: true
});
const clientIp = useCookie('clientIp');

watch(data, () => {
 if (data.value) {
  clientIp.value = data.value.ip;
  console.log('yesip');
 } else {
  console.log('no data ip');
 }
});
</script>

<style></style>