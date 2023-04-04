<template>
  <div class="container">
    <Cell is-link :title="activeName" @click="show = true" />
    <ActionSheet position="top" v-model:show="show" :actions="tabs" @select="onSelect" close-on-click-action />
    <component :is="Com[activeName]"></component>
  </div>
</template>
<script lang="ts" setup name="控件">
import { ref } from 'vue'

import Field from './components/Field.vue'
import Picker from './components/Picker.vue'
import Steper from './components/Steper.vue'
import DatetimePicker from './components/DatetimePicker.vue'
import Calendar from './components/Calendar.vue'
import Cascader from './components/Cascader.vue'
import Checkbox from './components/Checkbox.vue'
import Radio from './components/Radio.vue'
import Switch from './components/Switch.vue'
import Uploader from './components/Uploader.vue'
import Slot from './components/Slot.vue'

import { DefineComponent } from 'vue'
import { Cell, ActionSheet } from 'vant'

const Com: Record<string, DefineComponent<any, any, any>> = {
  '输入框': Field,
  '步进器': Steper,
  '选择器': Picker,
  '单选框': Radio,
  '复选框': Checkbox,
  '开关': Switch,
  '时间选择': DatetimePicker,
  '日历': Calendar,
  '级联选择': Cascader,
  '文件上传': Uploader,
  '自定义插槽': Slot,
}
let activeName = $ref('输入框')
let show = $ref(false)
const onSelect = (item) => {
  activeName = item.name
  show = false;
};
const tabs = Object.keys(Com).reduce((arr, item) => {
  arr.push({ name: item })
  return arr
}, [])

</script>
<style lang="scss" scoped>
.container {
  // padding: 20px;
  // box-sizing: border-box;
}
</style>