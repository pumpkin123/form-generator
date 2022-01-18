<template>
  <div class="icon-dialog">
    <el-dialog
      v-bind="$attrs"
      width="980px"
      :modal-append-to-body="false"
      v-on="$listeners"
      @open="onOpen"
      @close="onClose"
    >
      <div slot="title">
        选择图标
        <el-input
          v-model="key"
          size="mini"
          :style="{width: '260px'}"
          placeholder="请输入图标名称"
          prefix-icon="el-icon-search"
          clearable
        />
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="基础图标" name="basic">
          基础图标
        </el-tab-pane>
        <el-tab-pane label="线框风格" name="outline">
          线框风格
        </el-tab-pane>
        <el-tab-pane label="实底风格" name="filled">
          实底风格
        </el-tab-pane>
      </el-tabs>
      <ul ref="iconWrap" class="icon-ul">
        <li
          v-for="icon in iconList"
          :key="icon"
          :class="active===icon?'active-item':''"
          @click="onSelect(icon)"
        >
          <!-- <i :class="icon" /> -->
          <van-icon :name="icon" />
          <div>{{ icon }}</div>
        </li>
      </ul>
    </el-dialog>
  </div>
</template>
<script>
import icons from '@/utils/vantIcon'

// const originList = iconList.map(name => `el-icon-${name}`)

export default {
  inheritAttrs: false,
  props: ['current'],
  data() {
    return {
      active: null,
      key: '',
      tabKey: ''
    }
  },
  computed: {
    iconList(type) {
      return icons[type] || [];
    }
  },
  // watch: {
  //   key(val) {
  //     if (val) {
  //       this.iconList = originList.filter(name => name.indexOf(val) > -1)
  //     } else {
  //       this.iconList = originList
  //     }
  //   }
  // },
  methods: {
    onOpen() {
      this.active = this.current
      this.key = ''
      this.scrollToActive()
    },
    onClose() {},
    onSelect(icon) {
      this.active = icon
      this.$emit('select', icon)
      this.$emit('update:visible', false)
    },
    scrollToActive() {
      this.$nextTick(() => {
        const $activeItem = this.active
          ? document.getElementsByClassName('active-item')[0]
          : this.$refs.iconWrap.childNodes[0]
        $activeItem && $activeItem.scrollIntoView && $activeItem.scrollIntoView()
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.icon-ul {
  margin: 0;
  padding: 0;
  font-size: 0;
  li {
    list-style-type: none;
    text-align: center;
    font-size: 14px;
    display: inline-block;
    width: 16.66%;
    box-sizing: border-box;
    height: 108px;
    padding: 15px 6px 6px 6px;
    cursor: pointer;
    overflow: hidden;
    &:hover {
      background: #f2f2f2;
    }
    &.active-item{
      background: #e1f3fb;
      color: #7a6df0
    }
    > i {
      font-size: 30px;
      line-height: 50px;
    }
  }
}
.icon-dialog {
  ::v-deep .el-dialog {
    border-radius: 8px;
    margin-bottom: 0;
    margin-top: 4vh !important;
    display: flex;
    flex-direction: column;
    max-height: 92vh;
    overflow: hidden;
    box-sizing: border-box;
    .el-dialog__header {
      padding-top: 14px;
    }
    .el-dialog__body {
      margin: 0 20px 20px 20px;
      padding: 0;
      overflow: auto;
    }
  }
}
</style>
