<template>
  <div class="phone">
    <FormGenerator :model="form" :formOption="formOption" />
  </div>
  <JsonViewer :value="form" expand previewMode />
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'vant4-generator'
import { Button } from 'vant'
import type { FormOption } from 'vant4-generator/lib/type'
import { ref } from 'vue'

let form = ref({})
let formOption = ref<FormOption[]>([
  {
    type: 'radio',
    formItem: {
      name: 'key1',
      label: '基础用法',
    },
    control: {
      radioGroup: [
        {
          label: '选项1',
          value: '1'
        },
        {
          label: '选项2',
          value: '2'
        },
      ]
    }
  },
  {
    type: 'radio',
    formItem: {
      name: 'key2',
      label: '禁用状态',
    },
    control: {
      disabled: true,
      radioGroup: [
        {
          label: '选项1',
          value: '1'
        },
        {
          label: '选项2',
          value: '2'
        },
      ]
    }
  },
  {
    type: 'radio',
    formItem: {
      name: 'key3',
      label: '自定义形状',
    },
    control: {
      radioGroup: [
        {
          shape: 'square',
          label: '选项1',
          value: '1'
        },
        {
          shape: 'square',
          label: '选项2',
          value: '2'
        },
      ]
    }
  },
  {
    type: 'radio',
    formItem: {
      name: 'key4',
      label: '自定义颜色',
    },
    control: {
      checkedColor: "#ee0a24",
      radioGroup: [
        {
          label: '选项1',
          value: '1'
        },
        {
          label: '选项2',
          value: '2'
        },
      ]
    }
  },
  {
    type: 'radio',
    formItem: {
      name: 'key5',
      label: '自定义大小',
    },
    control: {
      iconSize: '24px',
      radioGroup: [
        {
          label: '选项1',
          value: '1'
        },
        {
          label: '选项2',
          value: '2'
        },
      ]
    }
  },
  {
    type: 'radio',
    formItem: {
      name: 'key6',
      label: '自定义图标',
    },
    control: {
      radioGroup: [
        {
          label: '选项1',
          value: '1',
          slots: {
            icon: (props: { checked: boolean }) => <img style="height: 20px;" src={props.checked ? 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png' : 'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png'} />
          }
        },
        {
          label: '选项2',
          value: '2',
          slots: {
            icon: (props: { checked: boolean }) => <img style="height: 20px;" src={props.checked ? 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png' : 'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png'} />
          }
        },
      ],
    }
  },
  {
    type: 'radio',
    formItem: {
      name: 'key7',
      label: '禁用文本点击',
    },
    control: {
      radioGroup: [
        {
          label: '选项1',
          value: '1',
          labelDisabled: true,
        },
        {
          label: '选项2',
          value: '2',
          labelDisabled: true,
        },
      ],
    }
  },
  {
    type: 'radio',
    formItem: {
      name: 'key8',
      label: '监听',
    },
    control: {
      radioGroup: [
        {
          label: '选项1',
          value: '1',
          onClick: (event: MouseEvent) => { console.log(`Radio onClick:选项1${event}`) }
        },
        {
          label: '选项2',
          value: '2',
          onClick: (event: MouseEvent) => { console.log(`Radio onClick:选项2${event}`) }
        },
      ],
      onChange: (value: string) => { console.log(`RadioGroup onChange:${value}`) }
    }
  },
  {
    type: 'radio',
    formItem: {
      name: 'key9',
      label: '自定义插槽',
    },
    control: {
      radioGroup: [
        {
          label: '选项1',
          value: '1',
          slots: {
            default: () => '文本1',
            icon: (props: { checked: boolean, disabled: boolean }) => <img style="height: 20px;" src={props.checked ? 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png' : 'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png'} />
          }
        },
        {
          label: '选项2',
          value: '2',
          slots: {
            default: () => '文本2',
            icon: (props: { checked: boolean, disabled: boolean }) => <img style="height: 20px;" src={props.checked ? 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png' : 'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png'} />
          }
        },
      ],
    }
  },
])
</script>
