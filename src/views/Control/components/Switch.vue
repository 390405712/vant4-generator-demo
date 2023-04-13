<template>
  <div class="phone">
    <FormGenerator :model="form" :formOption="formOption" />
  </div>
  <JsonViewer :value="form" expand previewMode />
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'vant4-generator'
import { Icon, Dialog } from 'vant'
import type { FormOption } from 'vant4-generator/lib/type'
import { ref } from 'vue'

let form = ref({
  key5: false,
  key7: false
})
let formOption = ref<FormOption[]>([
  {
    type: 'switch',
    formItem: {
      name: 'key1',
      label: '基础用法',
    },
  },
  {
    type: 'switch',
    formItem: {
      name: 'key2',
      label: '禁用状态',
    },
    control: {
      disabled: true
    }
  },
  {
    type: 'switch',
    formItem: {
      name: 'key3',
      label: '加载状态',
    },
    control: {
      loading: true
    }
  },
  {
    type: 'switch',
    formItem: {
      name: 'key4',
      label: '自定义大小',
    },
    control: {
      size: '24px'
    }
  },
  {
    type: 'switch',
    formItem: {
      name: 'key5',
      label: '自定义颜色',
    },
    control: {
      activeColor: '#ee0a24',
      inactiveColor: '#dcdee0',
    }
  },
  {
    type: 'switch',
    formItem: {
      name: 'key6',
      label: '自定义按钮',
    },
    control: {
      slots: {
        node: () => (<div class="icon-wrapper">
          <Icon name={form.value.key5 ? 'success' : 'cross'} />
        </div>)
      }
    }
  },
  {
    type: 'switch',
    formItem: {
      name: 'key7',
      label: '异步控制',
    },
    control: {
      'onUpdate:modelValue': (val: boolean) => {
        form.value.key7 = !val;
        Dialog.confirm({
          title: '提醒',
          message: '是否切换开关？',
        }).then(() => {
          form.value.key7 = val;
        });
      },
    }
  },
  {
    type: 'switch',
    formItem: {
      name: 'key8',
      label: '监听',
    },
    control: {
      onChange: (value: string) => { console.log(`onChange:${value}`); },
      onClick: (event: MouseEvent) => { console.log(`onClick:${event}`); },
    }
  },
  {
    type: 'switch',
    formItem: {
      name: 'key9',
      label: '自定义插槽',
    },
    control: {
      slots: {
        node: () => '1',
        background: () => '2',
      }
    }
  },
])


</script>

<style lang="scss" scoped>
:deep(.icon-wrapper) {
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 18px;

  .van-icon-success {
    line-height: 32px;
    color: var(--van-blue);
  }

  .van-icon-cross {
    line-height: 32px;
    color: var(--van-gray-5);
  }
}
</style>
