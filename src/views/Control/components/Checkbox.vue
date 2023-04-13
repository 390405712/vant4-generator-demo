<template>
  <div class="phone">
    <FormGenerator ref="RefFormGenerator" :model="form" :formOption="formOption" />
  </div>
  <JsonViewer :value="form" expand previewMode />
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'vant4-generator'
import { Button } from 'vant'
import type { FormOption, RefFormGenerator } from 'vant4-generator/lib/type'
import { ref } from 'vue'

let form = ref({})
let RefFormGenerator = ref<RefFormGenerator>()
let formOption = ref<FormOption[]>([
  {
    type: 'checkbox',
    formItem: {
      name: 'key1',
      label: '基础用法',
    },
    control: {
      checkboxGroup: [
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
    type: 'checkbox',
    formItem: {
      name: 'key2',
      label: '禁用状态',
    },
    control: {
      disabled: true,
      checkboxGroup: [
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
    type: 'checkbox',
    formItem: {
      name: 'key3',
      label: '自定义形状',
    },
    control: {
      checkboxGroup: [
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
    type: 'checkbox',
    formItem: {
      name: 'key4',
      label: '自定义颜色',
    },
    control: {
      checkedColor: "#ee0a24",
      checkboxGroup: [
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
    type: 'checkbox',
    formItem: {
      name: 'key5',
      label: '自定义大小',
    },
    control: {
      iconSize: '24px',
      checkboxGroup: [
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
    type: 'checkbox',
    formItem: {
      name: 'key6',
      label: '自定义图标',
    },
    control: {
      checkboxGroup: [
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
    type: 'checkbox',
    formItem: {
      name: 'key7',
      label: '禁用文本点击',
    },
    control: {
      checkboxGroup: [
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
    type: 'checkbox',
    formItem: {
      name: 'key8',
      label: '限制最大可选数',
    },
    control: {
      max: 2,
      checkboxGroup: [
        {
          label: '选项1',
          value: '1',
        },
        {
          label: '选项2',
          value: '2',
        },
        {
          label: '选项3',
          value: '3',
        },
      ],
    }
  },
  {
    type: 'checkbox',
    formItem: {
      name: 'key9',
      label: '全选与反选',
    },
    control: {
      max: 2,
      checkboxGroup: [
        {
          modelValue: '1',
          label: '选项1',
          value: '1',
        },
        {
          label: '选项2',
          value: '2',
        },
      ],
    }
  },
  {
    type: 'slot',
    formItem: {
      name: 'key10',
    },
    control: {
      slots: {
        // 会无视template中key10的插槽内容
        input: () => (<>
          <Button type="primary" onClick={() => { RefFormGenerator.value().$refs.key9.value.toggleAll(true) }}>全选</Button>
          <Button type="primary" onClick={() => { RefFormGenerator.value().$refs.key9.value.toggleAll() }}>反选</Button>
        </>
        )
      }
    }
  },
  {
    type: 'checkbox',
    formItem: {
      name: 'key11',
      label: '监听',
    },
    control: {
      checkboxGroup: [
        {
          label: '选项1',
          value: '1',
          //因v-model在checkboxGroup层，所以checkbox不支持onChange
          // onChange: (checked: boolean) => { console.log(`Checkbox onChange:选项1${checked}`)},
          onClick: (event: MouseEvent) => { console.log(`Checkbox onClick:选项1${event}`) }
        },
        {
          label: '选项2',
          value: '2',
          //因v-model在checkboxGroup层，所以checkbox不支持onChange
          // onChange: (checked: boolean) => { console.log(`Checkbox onChange:选项2${checked}`)},
          onClick: (event: MouseEvent) => { console.log(`Checkbox onClick:选项2${event}`) }
        },
      ],
      onChange: (value: any[]) => { console.log(`checkboxGroup onChange:${JSON.stringify(value)}`) }
    }
  },
  {
    type: 'checkbox',
    formItem: {
      name: 'key12',
      label: '自定义插槽',
    },
    control: {
      checkboxGroup: [
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