<!--
 * @Description:  van-button 属性定义
 * @Version: 2.0
 * @Author: qnkong01
 * @Date: 2022-01-10 14:59:04
 * @LastEditors: qnkong01
 * @LastEditTime: 2022-01-10 15:55:52
-->
<template>
  <el-form-item v-if="activeData.type !== undefined && activeData.__config__.tag === 'van-button'" label="按钮类型">
    <el-select
      v-model="activeData['type']"
      placeholder="请选择按钮类型"
      :style="{ width: '100%' }"
      clearable
    >
      <el-option label="主要按钮" value="primary" />
      <el-option label="信息按钮" value="info" />
      <el-option label="默认按钮" value="default" />
      <el-option label="警告按钮" value="warning" />
      <el-option label="危险按钮" value="danger" />
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  props: ['activeData']
}
</script>
