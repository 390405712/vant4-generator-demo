<template>
  <div class="phone">
    <FormGenerator v-bind="{ ...formAttrs }" />
  </div>
  <JsonViewer :value="formAttrs.model" expand previewMode />
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'vant4-generator'
import type { FormAttrs } from 'vant4-generator/lib/type'
import type { CascaderOption } from 'vant';
import { ref, onMounted } from 'vue'

const options = ref([
  {
    text: '浙江省',
    value: '330000',
    children: [{ text: '杭州市', value: '330100' }],
  },
  {
    text: '江苏省',
    value: '320000',
    children: [{ text: '南京市', value: '320100' }],
  },
])
const formAttrs = ref<FormAttrs>({
  model: {
    key1: ''
  },
  formOption: [
    {
      type: 'cascader',
      formItem: {
        name: 'key1',
        label: '基础用法',
      },
      control: {
        placeholder: '请选择所在地区',
        options
      }
    },
    {
      type: 'cascader',
      formItem: {
        name: 'key2',
        label: '自定义颜色',
      },
      control: {
        placeholder: '请选择所在地区',
        options,
        activeColor: "#1989fa"
      }
    },
    {
      type: 'cascader',
      formItem: {
        name: 'key3',
        label: '异步加载选项',
      },
      control: {
        placeholder: '请选择所在地区',
        options,
        onChange: (item: { text: string, value: string }) => {
          if (item.value === options.value[0].value) {
            setTimeout(() => {
              options.value[0].children.push({ text: '宁波市', value: '330200' })
            }, 500);
          }
        }
      }
    },
    {
      type: 'cascader',
      formItem: {
        name: 'key4',
        label: '自定义字段名',
      },
      control: {
        placeholder: '请选择所在地区',
        options: [
          {
            name: '浙江省',
            code: '330000',
            items: [{ name: '杭州市', code: '330100' }],
          },
        ],
        fieldNames: {
          text: 'name',
          value: 'code',
          children: 'items',
        }
      }
    },
    {
      type: 'cascader',
      formItem: {
        name: 'key5',
        label: '自定义选项上方内容',
      },
      control: {
        placeholder: '请选择所在地区',
        options,
        slots: {
          'options-top': (scope: { tabIndex: number }) => <div style="padding: 10px 16px 0;">当前为第 {scope.tabIndex} 级</div>
        }
      }
    },
    {
      type: 'cascader',
      formItem: {
        name: 'key6',
        label: '监听',
      },
      control: {
        placeholder: '请选择所在地区',
        options,
        onChange: (scope: { value: string | number, selectedOptions: CascaderOption[], tabIndex: number }) => {
          console.log('onChange:' + JSON.stringify(scope));
        },
        onFinish: (scope: { value: string | number, selectedOptions: CascaderOption[], tabIndex: number }) => {
          console.log('onFinish:' + JSON.stringify(scope));
        },
        onClose: () => {
          console.log('onClose');
        },
        onClickTab: (scope: { tabIndex: number, title: string }) => {
          console.log('onClickTab:' + JSON.stringify(scope));
        },
      }
    },
    {
      type: 'cascader',
      formItem: {
        name: 'key7',
        label: '自定义插槽',
      },
      control: {
        placeholder: '请选择所在地区',
        options,
        slots: {
          title: () => '自定义顶部标题',
          option: (scope: { option: CascaderOption, selected: boolean }) => `${scope.option.text}-自定义选项文字`,
          'options-top': (scope: { tabIndex: number }) => <div style="padding:10px">当前为第 {scope.tabIndex} 级-自定义选项上方的内容</div>,
          'options-bottom': (scope: { tabIndex: number }) => <div style="padding:10px;">当前为第 {scope.tabIndex}级-自定义选项下方的内容</div>,
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