<template>
  <div class="phone">
    <FormGenerator v-bind="{ ...formAttrs }" />
  </div>
  <JsonViewer :value="formAttrs.model" expand previewMode />
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'vant4-generator'
import type { PickerOption } from 'vant'
import type { FormAttrs } from 'vant4-generator/lib/type'
import { ref, onMounted } from 'vue'

const formAttrs = ref<FormAttrs>({
  model: {},
  formOption: [
    {
      type: 'datePicker',
      formItem: {
        name: 'key1',
        label: '基础用法',
      },
      control: {
        title: '选择日期',
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1)
      }
    },
    {
      type: 'datePicker',
      formItem: {
        name: 'key2',
        label: '选项类型',
      },
      control: {
        columnsType: ['year', 'month'],
        title: '选择年月',
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
      }
    },
    {
      type: 'datePicker',
      formItem: {
        name: 'key3',
        label: '格式化选项',
      },
      control: {
        columnsType: ['year', 'month'],
        title: '选择年月',
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        formatter: (type, option) => {
          if (type === 'year') option.text += '年';
          if (type === 'month') option.text += '月';
          return option;
        }
      }
    },
    {
      type: 'datePicker',
      formItem: {
        name: 'key4',
        label: '过滤选项',
      },
      control: {
        columnsType: ['year', 'month'],
        title: '选择年月',
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        filter: (type, options) => {
          if (type === 'month') return options.filter((option) => Number(option.value) % 6 === 0);
          return options;
        }
      }
    },
    {
      type: 'datePicker',
      formItem: {
        name: 'key5',
        label: '监听',
      },
      control: {
        onChange: (value: Date) => { console.log(`onChange:${value}`) },
        onConfirm: (value: Date) => { console.log(`onConfirm:${value}`) },
        onCancel: () => { console.log(`onCancel`) },
      }
    },
    {
      type: 'datePicker',
      formItem: {
        name: 'key6',
        label: '自定义插槽',
      },
      control: {
        slots: {
          // toolbar: () => '自定义整个顶部栏的内容',
          title: () => '自定义标题内容',
          confirm: () => '自定义确认按钮内容',
          cancel: () => '自定义取消按钮内容',
          option: (option: PickerOption) => `${option.text}-文本`,
          'columns-top': () => '自定义选项上方内容',
          'columns-bottom': () => '自定义选项下方内容',
        }
      }
    },
  ]
})

onMounted(() => {
  formAttrs.value.formOption.forEach(item => {
    if (['picker', 'datePicker', 'timePicker', 'cascader'].includes(item.type)) item.popup = { teleport: '.FormGenerator' }
  })
})
</script>