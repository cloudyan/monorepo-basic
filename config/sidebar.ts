import { components } from './components';

export const sidebar = {
  '/': [
    {
      title: '首页',
      path: 'index',
    },
  ],
  '/guide': [
    {
      title: '快速上手',
      path: '/guide/quick-start',
    },
  ],
  '/components': [
    {
      title: 'Common',
      children: components.common,
    },
    {
      title: 'Layout',
      children: components.layout,
    },
    {
      title: 'Navigation',
      children: components.navigation,
    },
    {
      title: 'Data Display',
      children: components.dataDisplay,
    },
    {
      title: 'Data Entry',
      children: components.dataEntry,
    },
    {
      title: 'Feedback',
      children: components.feedback,
    },
    {
      title: 'Guidance',
      children: components.guidance,
    },
    {
      title: 'Other',
      children: components.other,
    },
    {
      title: 'Experimental',
      children: components.experimental,
    },
  ],
  '/zh/components': [
    {
      title: '通用',
      children: components.common,
    },
    {
      title: '布局',
      children: components.layout,
    },
    {
      title: '导航',
      children: components.navigation,
    },

    {
      title: '信息展示',
      children: components.dataDisplay,
    },
    {
      title: '信息录入',
      children: components.dataEntry,
    },
    {
      title: '反馈',
      children: components.feedback,
    },
    {
      title: '引导提示',
      children: components.guidance,
    },
    {
      title: '其他',
      children: components.other,
    },
    {
      title: '试验性',
      children: components.experimental,
    },
  ],
};
