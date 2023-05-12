<template>
  <div class="phone">
    <FormGenerator v-bind="{ ...formAttrs }" />
  </div>
  <JsonViewer :value="formAttrs.model" expand previewMode />
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'vant4-generator'
import { showToast, Button } from 'vant';
import type { UploaderFileListItem } from 'vant';
import type { FormAttrs } from 'vant4-generator/lib/type'
import { ref } from 'vue'

const formAttrs = ref<FormAttrs>({
  model: {
    key2: [
      { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' },
      // Uploader 根据文件后缀来判断是否为图片文件
      // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      { url: 'https://cloud-image', isImage: true },
    ],
    key3: [
      {
        url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg',
        status: 'uploading',
        message: '上传中...',
      },
      {
        url: 'https://fastly.jsdelivr.net/npm/@vant/assets/tree.jpeg',
        status: 'failed',
        message: '上传失败',
      },
    ],
    key11: [
      {
        url: 'https://fastly.jsdelivr.net/npm/@vant/assets/sand.jpeg',
        deletable: true,
        beforeDelete: () => {
          showToast('删除前置处理');
        },
      },
      {
        url: 'https://fastly.jsdelivr.net/npm/@vant/assets/tree.jpeg',
        imageFit: 'contain',
      },
    ]
  },
  formOption: [
    {
      type: 'uploader',
      formItem: {
        name: 'key1',
        label: '基础用法',
      },
      control: {
        afterRead: (file) => {
          console.log(file);
        },
      }
    },
    {
      type: 'uploader',
      formItem: {
        name: 'key2',
        label: '文件预览',
      },
      control: {
        multiple: true,
      }
    },
    {
      type: 'uploader',
      formItem: {
        name: 'key3',
        label: '上传状态',
      },
      control: {
        afterRead: (value) => {
          let file = value as UploaderFileListItem
          file.status = 'uploading';
          file.message = '上传中...';

          setTimeout(() => {
            file.status = 'failed';
            file.message = '上传失败';
          }, 1000);
        }
      }
    },
    {
      type: 'uploader',
      formItem: {
        name: 'key4',
        label: '限制上传数量',
      },
      control: {
        multiple: true,
        maxCount: 2,
      }
    },
    {
      type: 'uploader',
      formItem: {
        name: 'key5',
        label: '限制上传大小',
      },
      control: {
        multiple: true,
        maxSize: 500 * 1024,
        onOversize: (file) => {
          console.log(file);
          showToast('文件大小不能超过 500kb');
        }
      }
    },
    {
      type: 'uploader',
      formItem: {
        name: 'key6',
        label: '自定义上传样式',
      },
      control: {
        slots: {
          default: () => <Button icon="plus" type="primary">上传文件</Button>
        }
      }
    },
    {
      type: 'uploader',
      formItem: {
        name: 'key7',
        label: '自定义预览样式',
      },
      control: {
        slots: {
          'preview-cover': (scope) => <div class="preview-cover van-ellipsis">{scope.file.name}</div>
        }
      }
    },
    {
      type: 'uploader',
      formItem: {
        name: 'key8',
        label: '自定义预览大小',
      },
      control: {
        previewSize: 100
      }
    },
    {
      type: 'uploader',
      formItem: {
        name: 'key9',
        label: '上传前置处理',
      },
      control: {
        beforeRead: (file) =>
          new Promise((resolve, reject) => {
            if ((file as File).type !== 'image/jpeg') {
              showToast('请上传 jpg 格式图片');
              reject();
            } else {
              const img = new File(['foo'], 'bar.jpg', {
                type: 'image/jpeg',
              });
              resolve(img);
            }
          })
      }
    },
    {
      type: 'uploader',
      formItem: {
        name: 'key10',
        label: '禁用文件上传',
      },
      control: {
        disabled: true,
      }
    },
    {
      type: 'uploader',
      formItem: {
        name: 'key11',
        label: '自定义单个图片预览',
      },
      control: {
        deletable: false,
      }
    },
    {
      type: 'uploader',
      formItem: {
        name: 'key12',
        label: '监听',
      },
      control: {
        onOversize: (file: UploaderFileListItem) => { console.log(`onOversize:${file}`) },
        onClickUpload: (event: MouseEvent) => { console.log(`onClickUpload:${event}`) },
        onClickPreview: (file: UploaderFileListItem) => { console.log(`onClickPreview:${file}`) },
        onClosePreview: () => { console.log(`onClosePreview`) },
        onDelete: (file: UploaderFileListItem) => { console.log(`onDelete:${file}`) },
      }
    },
    {
      type: 'uploader',
      formItem: {
        name: 'key13',
        label: '自定义插槽',
      },
      control: {
        slots: {
          default: '自定义上传区域',
          'preview-delete': () => '删除',
          'preview-cover': (file: UploaderFileListItem) => '内容',
        }
      }
    },
  ]
})
</script>

<style lang="scss" scoped>
:deep(.preview-cover) {
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 4px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
}
</style>
