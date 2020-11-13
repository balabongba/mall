<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item
        v-for="(item, index) of swipers"
        :key="index"
      >
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperItem } from 'components/common/swiper'

  export default {
    name: 'DetailSwiper',
    props: {
      swipers: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scope>
  .detail-swiper {
    height: 300px;
  }
</style>
