<!--
 * @Description: Vant 相关属性
 * @Version: 2.0
 * @Author: qnkong01
 * @Date: 2022-01-10 15:06:06
 * @LastEditors: qnkong01
 * @LastEditTime: 2022-01-10 16:19:24
-->
<template>
  <van-button-attr :active-data="activeData" />
</template>

<script>
import VanButtonAttr from '@/views/index/ComponentAttr/Vant/VanButton'

export default {
  components: {
    VanButtonAttr
  },

  props: ['activeData']
}
</script>
