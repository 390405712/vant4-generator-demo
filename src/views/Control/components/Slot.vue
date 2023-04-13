<template>
  <div class="phone">
    <FormGenerator :model="form" :formOption="formOption">
      <template #key2="scope">
        {{ scope }}
      </template>
      <template #key4="scope">
        <Rate v-model="form.key4" />
      </template>
    </FormGenerator>
  </div>
  <JsonViewer :value="form" expand previewMode />
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'vant4-generator'
import type { FormOption } from 'vant4-generator/lib/type'
import { ref } from 'vue'
import { Rate } from 'vant';

let form = ref({
  key1: '基础用法文本值',
  key2: '模板插槽文本值',
  key3: 'jsx插槽文本值',
  key4: 2,
  key5: 2,
})
let formOption = ref<FormOption[]>([
  {
    type: 'slot',
    formItem: {
      name: 'key1',
      label: '基础用法',
    },
  },
  {
    type: 'slot',
    formItem: {
      name: 'key2',
      label: '模板插槽',
    },
  },
  {
    type: 'slot',
    formItem: {
      name: 'key3',
      label: 'jsx插槽',
    },
    control: {
      slots: {
        input: (scope) => (<div style="word-break: break-all;">{JSON.stringify(scope)}</div>)
      }
    }
  },
  {
    type: 'slot',
    formItem: {
      name: 'key4',
      label: '模板插槽(带组件)',
    },
  },
  {
    type: 'slot',
    formItem: {
      name: 'key5',
      label: 'jsx插槽(带组件)',
    },
    control: {
      slots: {
        input: (scope) => <Rate v-model={form.value.key5} />
      }
    }
  },
])
</script>
