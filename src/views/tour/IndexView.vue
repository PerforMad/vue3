<template>
  <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-50 z-40">
    <div class="fixed z-50 bg-white rounded-lg shadow-xl p-6 w-96">
      <!-- Step Header -->
      <div class="flex justify-between items-center mb-4">
        <span class="text-sm text-gray-500">{{ currentStep }}/{{ totalSteps }}</span>
        <button @click="onClose" class="text-gray-400 hover:text-gray-600">
          <XMarkIcon class="w-4 h-4" />
        </button>
      </div>

      <!-- Step Content -->
      <div class="flex items-start mb-4">
        <div class="p-2 bg-blue-100 rounded-lg mr-4">
          <component :is="step.icon" class="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 class="text-lg font-medium text-gray-900 mb-2">{{ step.title }}</h3>
          <p class="text-sm text-gray-600 mb-3">{{ step.content }}</p>
        </div>
      </div>

      <!-- Step Details -->
      <div class="bg-gray-50 rounded-lg p-4 mb-4">
        <ul class="space-y-2">
          <li v-for="(detail, index) in step.details" :key="index" class="flex items-start">
            <span class="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
            <span class="text-sm text-gray-700">{{ detail }}</span>
          </li>
        </ul>
      </div>

      <!-- Navigation Buttons -->
      <div class="flex justify-between items-center">
        <button v-if="currentStep > 1" @click="onPrev" class="px-3 py-1 text-sm text-gray-600 hover:text-gray-900">
          上一步
        </button>
        <button @click="onNext" class="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 ml-auto">
          {{ isLastStep ? '完成' : '下一步' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
  XMarkIcon,
  BuildingLibraryIcon,
  ChartPieIcon,
  WalletIcon,
  CloudIcon,
  CpuChipIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon
} from '@heroicons/vue/24/outline'; // 确保导入路径是正确的

const currentStep = ref(1);
const isVisible = ref(true);

const steps = [
  {
    icon: BuildingLibraryIcon,
    title: '开通媒体账户',
    content: '快速创建您的广告账户，开启投放之旅',
    details: [
      '支持 Facebook、Google、TikTok 等多个主流平台',
      '智能表单填写，轻松完成开户申请',
      '专业团队审核，确保账户安全合规',
      '账户状态实时监控，及时处理异常情况'
    ],
    position: 'right'
  },
  {
    icon: ChartPieIcon,
    title: '数据分析中心',
    content: '全方位掌握广告投放效果与账户表现',
    details: [
      '实时数据监控，掌握投放动态',
      '多维度数据分析，深入了解广告效果',
      '自定义报表功能，满足不同分析需求',
      '数据可视化展示，直观把握趋势变化'
    ],
    position: 'right'
  },
  {
    icon: WalletIcon,
    title: '资金管理中心',
    content: '便捷的广告资金管理与充值系统',
    details: [
      '支持多种充值方式，安全快捷',
      '实时余额查询，自动预警提醒',
      '详细的账单明细，清晰记录每笔支出',
      '支持自动充值，确保广告持续投放'
    ],
    position: 'right'
  },
  {
    icon: CloudIcon,
    title: '素材中心',
    content: '高效的广告素材管理与同步系统',
    details: [
      '一键同步素材到多个平台',
      '素材智能分类与标签管理',
      '素材性能分析，优化投放效果',
      '历史素材库，方便重复使用'
    ],
    position: 'right'
  },
  {
    icon: CpuChipIcon,
    title: 'AI 创意助手',
    content: '智能化的广告创意生成工具',
    details: [
      'AI 智能生成广告文案',
      '快速制作多语言广告创意',
      '智能优化图片与视频素材',
      '创意效果预测，提升投放效率'
    ],
    position: 'right'
  },
  {
    icon: Cog6ToothIcon,
    title: '系统设置',
    content: '个性化的系统配置与权限管理',
    details: [
      '账户角色权限管理',
      '自定义数据展示设置',
      '消息通知偏好设置',
      'API 接口配置管理'
    ],
    position: 'right'
  },
  {
    icon: QuestionMarkCircleIcon,
    title: '帮助与支持',
    content: '专业的技术支持与服务团队',
    details: [
      '24/7 在线客服支持',
      '详细的产品使用文档',
      '常见问题解答库',
      '专属客户经理服务'
    ],
    position: 'bottom'
  }
];

const step = computed(() => steps[currentStep.value - 1]);

const onClose = () => {
  isVisible.value = false;
};

const onNext = () => {
  if (currentStep.value < steps.length) {
    currentStep.value++;
  } else {
    isVisible.value = false;
  }
};

const onPrev = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

const isLastStep = computed(() => currentStep.value === steps.length);
const totalSteps = steps.length;
</script>

<style scoped>
/* Add your styles here */
</style>
