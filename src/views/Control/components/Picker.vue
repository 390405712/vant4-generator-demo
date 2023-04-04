<template>
  <div class="phone">
    <FormGenerator ref="RefFormGenerator" :model="form" :formOption="formOption" />
  </div>
  <JsonViewer :value="form" expand previewMode />
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'vant3-generator'
import type { PickerOption } from 'vant'
import type { FormOption, RefFormGenerator } from 'vant3-generator/lib/type'
import { ref, onMounted } from 'vue'

let form = ref({})
let RefFormGenerator = ref<RefFormGenerator>()

let columns = ref([
  {
    text: '浙江省',
    value: '330000',
  },
  {
    text: '江苏省',
    value: '320000',
  },
])
const cities = {
  浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  福建: ['福州', '厦门', '莆田', '三明', '泉州'],
};
let formOption = ref<FormOption[]>([
  {
    type: 'picker',
    formItem: {
      name: 'key1',
      label: '基础用法',
    },
    control: {
      columns,
    },
  },
  {
    type: 'picker',
    formItem: {
      name: 'key2',
      label: '默认选中项',
    },
    control: {
      columns,
      defaultIndex: 1
    }
  },
  {
    type: 'picker',
    formItem: {
      name: 'key3',
      label: '多列选择',
    },
    control: {
      columns: [
        // 第一列
        {
          values: [
            {
              text: '周一',
              value: '1'
            }, {
              text: '周二',
              value: '2'
            }, {
              text: '周三',
              value: '3'
            }, {
              text: '周四',
              value: '4'
            }, {
              text: '周五',
              value: '5'
            },
          ],
          defaultIndex: 2,
        },
        // 第二列
        {
          values: [{
            text: '上午',
            value: 'a'
          }, {
            text: '下午',
            value: 'b'
          }, {
            text: '晚上',
            value: 'c'
          },],
          defaultIndex: 1,
        },
      ],
    },
  },
  {
    type: 'picker',
    formItem: {
      name: 'key4',
      label: '级联选择',
    },
    control: {
      columns: [
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
      ],
    },
  },
  {
    type: 'picker',
    formItem: {
      name: 'key5',
      label: '禁用选项',
    },
    control: {
      columns: [
        {
          text: '浙江省',
          value: '330000',
          disabled: true,
        },
        {
          text: '江苏省',
          value: '320000',
        },
      ],
    },
  },
  {
    type: 'picker',
    formItem: {
      name: 'key6',
      label: '动态设置选项',
    },
    control: {
      columns: [
        { values: Object.keys(cities) },
        { values: cities['浙江'] },
      ],
      onChange: (values: ['浙江' | '福建']) => {
        RefFormGenerator.value().$refs.key6.value.setColumnValues(1, cities[values[0]])
      }
    },
  },
  {
    type: 'picker',
    formItem: {
      name: 'key7',
      label: '加载状态',
    },
    control: {
      columns,
      loading: true
    },
  },
  {
    type: 'picker',
    formItem: {
      name: 'key8',
      label: '自定义Columns的结构',
    },
    control: {
      columns: [
        {
          name: '浙江省',
          code: '330000',
          items: [{ name: '杭州市', code: '330100' }],
        },
      ],
      columnsFieldNames: {
        text: 'name',
        value: 'code',
        children: 'items',
      }
    }
  },
  {
    type: 'picker',
    formItem: {
      name: 'key9',
      label: '监听',
    },
    control: {
      columns,
      onChange: (scope: { currentValue: PickerOption | PickerOption[], currentIndex: number | number[] }) => {
        console.log('onChange:' + JSON.stringify(scope));
      },
      onConfirm: (scope: { currentValue: PickerOption | PickerOption[], currentIndex: number | number[] }) => {
        console.log('onConfirm:' + JSON.stringify(scope));
      },
      onCancel: (scope: { currentValue: PickerOption | PickerOption[], currentIndex: number | number[] }) => {
        console.log('onCancel:' + JSON.stringify(scope));
      },
    }
  },
  {
    type: 'picker',
    formItem: {
      name: 'key10',
      label: '自定义插槽',
    },
    control: {
      columns,
      slots: {
        // toolbar: () => '自定义整个顶部栏的内容',
        title: () => '自定义标题内容',
        confirm: () => '自定义确认按钮内容',
        cancel: () => '自定义取消按钮内容',
        option: (option: string | object) => `${JSON.stringify(option)}`,
        'columns-top': () => '自定义选项上方内容',
        'columns-bottom': () => '自定义选项下方内容	',
      }
    }
  },
])

onMounted(() => {
  formOption.value.forEach(item => {
    item.popup = { teleport: '.FormGenerator' }
  })
})
</script>