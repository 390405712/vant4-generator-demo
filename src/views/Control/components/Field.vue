<template>
  <div class="phone">
    <FormGenerator :model="form" :formOption="formOption" />
  </div>
  <JsonViewer :value="form" expand previewMode />
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'vant3-generator'
import { Button } from 'vant'
import type { FormOption } from 'vant3-generator/lib/type'
import { ref } from 'vue'

let form = ref({})
let formOption = ref<FormOption[]>([
  {
    type: 'field',
    formItem: {
      name: 'key1',
      label: '文本',
    },
  },
  {
    type: 'field',
    formItem: {
      name: 'key2',
      label: '手机号',
    },
    control: {
      type: 'tel',
    }
  },
  {
    type: 'field',
    formItem: {
      name: 'key3',
      label: '整数',
    },
    control: {
      type: 'digit',
    }
  },
  {
    type: 'field',
    formItem: {
      name: 'key4',
      label: '数字',
    },
    control: {
      type: 'number',
    }
  },
  {
    type: 'field',
    formItem: {
      name: 'key5',
      label: '密码',
    },
    control: {
      type: 'password',
    }
  },
  {
    type: 'field',
    formItem: {
      name: 'key6',
      label: '只读输入框',
    },
    control: {
      readonly: true,
    }
  },
  {
    type: 'field',
    formItem: {
      name: 'key7',
      label: '禁用输入框',
    },
    control: {
      disabled: true,
    }
  },
  {
    type: 'field',
    formItem: {
      name: 'key8',
      label: '文本',
    },
    control: {
      placeholder: '显示图标',
      leftIcon: 'smile-o',
      rightIcon: 'warning-o',
    }
  },
  {
    type: 'field',
    formItem: {
      name: 'key9',
      label: '文本',
    },
    control: {
      placeholder: '显示清除图标',
      leftIcon: 'music-o',
      clearable: true
    }
  },
  {
    type: 'field',
    formItem: {
      name: 'key10',
      label: '错误提示',
    },
    control: {
      placeholder: '请输入用户名',
      error: true,
      required: true,
    }
  },
  {
    type: 'field',
    formItem: {
      name: 'key11',
      label: '错误提示',
    },
    control: {
      placeholder: '请输入手机号',
      errorMessage: '手机号格式错误',
      required: true,
    }
  },
  {
    type: 'field',
    formItem: {
      name: 'key12',
      label: '插入按钮',
    },
    control: {
      placeholder: '请输入短信验证码',
      slots: {
        button: () => <Button size="small" type="primary">发送验证码</Button>
      }
    }
  },
  {
    type: 'field',
    formItem: {
      name: 'key13',
      label: '格式化内容',
    },
    control: {
      placeholder: '在输入时执行格式化',
      formatter: (value: string) => value.replace(/\d/g, '')
    }
  },
  {
    type: 'field',
    formItem: {
      name: 'key14',
      label: '格式化内容',
    },
    control: {
      placeholder: '在失焦时执行格式化',
      formatTrigger: 'onBlur',
      formatter: (value: string) => value.replace(/\d/g, '')
    }
  },
  {
    type: 'field',
    formItem: {
      name: 'key15',
      label: '高度自适应',
    },
    control: {
      placeholder: '请输入留言',
      type: 'textarea',
      autosize: true,
      rows: '1'
    }
  },
  {
    type: 'field',
    formItem: {
      name: 'key16',
      label: '显示字数统计',
    },
    control: {
      placeholder: '请输入留言',
      type: 'textarea',
      autosize: true,
      rows: '2',
      maxlength: 50,
      showWordLimit: true,
    }
  },
  {
    type: 'field',
    formItem: {
      name: 'key17',
      label: '内容对齐',
    },
    control: {
      placeholder: '输入框内容右对齐',
      inputAlign: 'right',
    }
  },
  {
    type: 'field',
    formItem: {
      name: 'key18',
      label: '监听',
    },
    control: {
      clearable: true,
      leftIcon: 'smile-o',
      rightIcon: 'warning-o',
      'onUpdate:modelValue': (value: string) => { console.log(`update:model-value:${value}`) },
      onInput: (event: Event) => { console.log(`input:${event}`) },
      onChange: (event: Event) => { console.log(`change:${event}`) },
      onFocus: (event: Event) => { console.log(`focus:${event}`) },
      onBlur: (event: Event) => { console.log(`blur:${event}`) },
      onClear: (event: MouseEvent) => { console.log(`clear:${event}`) },
      onClick: (event: MouseEvent) => { console.log(`click:${event}`) },
      onClickInput: (event: MouseEvent) => { console.log(`click-input:${event}`) },
      onClickLeftIcon: (event: MouseEvent) => { console.log(`click-left-icon:${event}`) },
      onClickRightIcon: (event: MouseEvent) => { console.log(`click-right-icon:${event}`) },
      onStartValidate: () => { console.log(`start-validate`) },
      onEndValidate: (status: string) => { console.log(`end-validate:${status}`) },
    }
  },
  {
    type: 'field',
    formItem: {
      name: 'key19',
    },
    control: {
      slots: {
        // 插槽名无法使用驼峰的命名方式
        label: () => '自定义插槽',
        input: () => 'input',
        'left-icon': () => 'leftIcon',
        'right-icon': () => 'rightIcon',
        button: () => 'button',
        'error-message': () => 'error',
        extra: () => 'extra',
      }
    }
  },
  {
    type: 'field',
    formItem: {
      name: 'key20',
      label: '自定义v-model',
    },
    control: {
      'onUpdate:modelValue': (value: string) => { form.value.key20 = `${value.replace('改写值', '')}改写值` },
    }
  },
])

</script>