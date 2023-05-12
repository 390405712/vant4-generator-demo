<template>
  <div class="phone">
    <FormGenerator ref="RefFormGenerator" v-bind="{ ...formAttrs }">
      <template>
        <Button block type="success" native-type="submit">提交</Button>
      </template>
    </FormGenerator>
  </div>
  <JsonViewer :value="formAttrs.model" expand previewMode />
  <JsonViewer :value="formAttrs.formOption" expand previewMode />
</template>

<script lang="tsx" setup>
import { FormGenerator, GeneratorUtils } from 'vant4-generator'
import type { FormAttrs, RefFormGenerator } from 'vant4-generator/lib/type'
import { RegExpMobilePhoneNunber } from 'common-rules'
import { ref } from 'vue'
import { Button } from 'vant';

const RefFormGenerator = ref<RefFormGenerator>()
const checkIphoneNum = (value: any) => {
  console.log(value);
  if (!value) return Promise.reject('请输入手机号')
  if (!/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(value)) {
    return Promise.reject('手机格式有误')
  }
  return Promise.resolve(true)
}
const formAttrs = ref<FormAttrs>({
  model: {},
  formOption: [
    {
      type: 'field',
      formItem: {
        name: 'phone1',
        label: '手机号',
        rules: [{
          trigger: 'onChange',
          validator: (val) =>
            new Promise((resolve) => {
              resolve(RegExpMobilePhoneNunber.test(val));
            })
        }]
      },
    },
    {
      type: 'field',
      formItem: {
        name: 'phone2',
        label: '手机号',
        rules: [{
          trigger: 'onChange',
          pattern: RegExpMobilePhoneNunber
        }]
      },
    },
    {
      type: 'field',
      formItem: {
        name: 'phone3',
        label: '手机号',
        rules: [{
          trigger: 'onChange',
          message: '自定义校验提示',
          pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
        }]
      },
    },
  ],
  onSubmit: () => {
    console.log(RefFormGenerator.value());
    console.log(formAttrs.value.formOption);
  }
})

GeneratorUtils.setRequired(formAttrs.value.formOption)
</script>
