<template>
  <div class="container">
    <Cell is-link :title="activeName" @click="show = true" />
    <ActionSheet position="top" v-model:show="show" :actions="tabs" @select="onSelect" close-on-click-action/>
    <component :is="Com[activeName]"></component>
  </div>
</template>
<script lang="ts" setup name="表单">
import TypicalForm from './components/TypicalForm.vue'
import RuleForm from './components/RuleForm.vue'
import CustomRuleForm from './components/CustomRuleForm.vue'

// import { FormGenerator } from '@/../../vant3-generator'
// import type { FormOption } from '@/../../vant3-generator/lib/type'

// import { FormGenerator } from 'vant3-generator'
// import type { FormOption } from 'vant3-generator/lib/type'

import { DefineComponent } from 'vue'
import { Cell, ActionSheet } from 'vant'

const Com: Record<string, DefineComponent<any, any, any>> = {
  '基础用法': TypicalForm,
  '校验表单': RuleForm,
  '自定义校验和按钮': CustomRuleForm,
}
let activeName = $ref('基础用法')
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