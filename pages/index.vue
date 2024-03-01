<template>
  <div>

    <Title>Phim Bộ - Phim Lẻ - Phim Chiếu Rạp Full HD Không Che</Title>
    <Meta name="title" content="Phim Bộ - Phim Lẻ - Phim Chiếu Rạp Full HD Không Che " />
    <Meta name="og:title" content="Phim Bộ - Phim Lẻ - Phim Chiếu Rạp Full HD Không Che " />

    <NuxtLayout>
      <template #page>

        <div v-if="!pending && data && data.dataBanner.length > 0">
          <Slide :data="data.dataBanner" />
        </div>
        <div class="mt-5 mb-14">
          <div class="flex items-center justify-between mb-3">
            <div>
              <CateTittle class="mb-3">Phim mới nổi bật</CateTittle>
            </div>

          </div>
          <div class="w-full grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4" v-if="!pending && data && data.dataProductHighlight && data.dataProductHighlight.length > 0">
            <div class="col-span-1" v-for="item in data.dataProductHighlight">
              <NuxtLink :to="'/phim/' + item.slug">
                <ItemProductNormal :dataProduct="item" />
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="mt-5 mb-14" v-if="!pending && data && data.dataProductSeries && data.dataProductSeries.length > 0">
          <div class="flex items-center justify-between mb-3">
            <div>
              <CateTittle class="mb-3">Phim bộ mới</CateTittle>
            </div>
            <div>
              <NuxtLink to="/danh-muc/phim-bo">
                <button class="text-xs uppercase bg-sky-500 text-white px-2 py-1 rounded">Xem Thêm</button>
              </NuxtLink>
            </div>
          </div>
          <div class="w-full grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4">
            <div class="col-span-1" v-for="item in data.dataProductSeries">
              <NuxtLink :to="'/phim/' + item.slug">
                <ItemProductNormal :dataProduct="item" />
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="mt-5 mb-14" v-if="!pending && data && data.dataProductCinema && data.dataProductCinema.length > 0">
          <div class="flex items-center justify-between mb-3">
            <div>
              <CateTittle class="mb-3">Phim chiếu rạp mới</CateTittle>
            </div>
            <div>
              <NuxtLink to="/danh-muc/phim-bo">
                <button class="text-xs uppercase bg-sky-500 text-white px-2 py-1 rounded">Xem Thêm</button>
              </NuxtLink>
            </div>
          </div>
          <div class="w-full grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4">
            <div class="col-span-1" v-for="item in data.dataProductCinema">
              <NuxtLink :to="'/phim/' + item.slug">
                <ItemProductNormal :dataProduct="item" />
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="mt-5 mb-14" v-if="!pending && data && data.dataProductFeature && data.dataProductFeature.length > 0">
          <div class="flex items-center justify-between mb-3">
            <div>
              <CateTittle class="mb-3">Phim lẻ mới</CateTittle>
            </div>
            <div>
              <NuxtLink to="/danh-muc/phim-bo">
                <button class="text-xs uppercase bg-sky-500 text-white px-2 py-1 rounded">Xem Thêm</button>
              </NuxtLink>
            </div>
          </div>
          <div class="w-full grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4">
            <div class="col-span-1" v-for="item in data.dataProductFeature">
              <NuxtLink :to="'/phim/' + item.slug">
                <ItemProductNormal :dataProduct="item" />
              </NuxtLink>
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

<script setup >
const config = useRuntimeConfig();
const { pending, data } = useFetch(config.public.apiBase + '/' + 'get-data-home', {
  lazy: true
});

definePageMeta({
  title: 'Xem phim tại Kẻ Trộm Phim tuyển tập hơn 100000+ phim mới đến từ quốc gia Hàn quốc, Trung quốc, Thái lan, Nhật bản...'
});


</script>

<style></style>