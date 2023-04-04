<template>
  <div class="phone">
    <FormGenerator ref="RefFormGenerator" :model="form" :formOption="formOption" @submit="submit" />
  </div>
  <JsonViewer :value="form" expand previewMode />
  <JsonViewer :value="formOption" expand previewMode />
</template>

<script lang="tsx" setup>
import { FormGenerator, GeneratorUtils } from 'vant3-generator'
import type { FormOption, RefFormGenerator } from 'vant3-generator/lib/type'
import { ref, onMounted } from 'vue'
import { Rate } from 'vant';

let RefFormGenerator = ref<RefFormGenerator>()
let form = ref({
  key2: 1,
  key11: 0
})

let formOption = ref<FormOption[]>([
  {
    type: 'field',
    formItem: {
      name: 'key1',
      label: '输入框',
    },
  },
  {
    type: 'stepper',
    formItem: {
      name: 'key2',
      label: '步进器',
    },
  },
  {
    type: 'picker',
    formItem: {
      name: 'key3',
      label: '选择器',
    },
    control: {
      columns: [
        {
          text: '浙江省',
          value: '330000',
        },
        {
          text: '江苏省',
          value: '320000',
        },
      ]
    },
  },
  {
    type: 'radio',
    formItem: {
      name: 'key4',
      label: '单选框',
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
    type: 'checkbox',
    formItem: {
      name: 'key5',
      label: '复选框',
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
    type: 'switch',
    formItem: {
      name: 'key6',
      label: '开关',
    },
  },
  {
    type: 'datetimePicker',
    formItem: {
      name: 'key7',
      label: '时间选择',
    },
    control: {
      type: 'date',
      title: '选择年月日',
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1)
    }
  },
  {
    type: 'calendar',
    formItem: {
      name: 'key8',
      label: '日历',
    }
  },
  {
    type: 'cascader',
    formItem: {
      name: 'key9',
      label: '级联选择',
    },
    control: {
      placeholder: '请选择所在地区',
      options: [
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
      ]
    }
  },
  {
    type: 'uploader',
    formItem: {
      name: 'key10',
      label: '文件',
    },
    control: {
      afterRead: (file) => {
        console.log(file);
      }
    }
  },
  {
    type: 'slot',
    formItem: {
      name: 'key11',
      label: '自定义插槽',
    },
    control: {
      slots: {
        input: (scope) => <Rate v-model={form.value.key11} />
      }
    }
  },
])
GeneratorUtils.setRequired(formOption.value, ['key11'])
function submit() {
  console.log(RefFormGenerator.value());
  console.log(formOption.value);
}

onMounted(() => {
  formOption.value.forEach(item => {
    item.popup = { teleport: '.FormGenerator' }
  })
})
</script>
