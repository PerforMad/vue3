<template>
  <el-container class="min-h-screen bg-gray-100">
    <el-header class="bg-white shadow-md p-0">
      <el-menu mode="horizontal" :ellipsis="false" class="flex justify-between">
        <el-menu-item index="0" class="!p-0">
          <div class="flex items-center h-16 px-4">
            <img class="h-8 w-auto" src="https://shadow.zhaogangimg.com/assets/zgw-home/img/real-time-trade.bd4d0be.png" alt="Logo" />
            <span class="ml-2 text-xl font-bold text-red-600">找钢网</span>
          </div>
        </el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">预售预购</el-menu-item>
        <el-menu-item index="3">找钢价</el-menu-item>
        <div class="flex items-center px-4">
          <el-button type="primary" class="mr-2">登录</el-button>
          <el-button>注册</el-button>
        </div>
      </el-menu>
    </el-header>

    <el-main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <el-card class="mb-6">
        <template #header>
          <div class="font-bold">找钢指数</div>
        </template>
        <el-row :gutter="20">
          <el-col :span="8" v-for="index in steelIndices" :key="index.name">
            <div class="text-center">
              <p class="text-sm text-gray-500">{{ index.name }}</p>
              <p class="text-lg font-bold" :class="{ 'text-red-600': index.change > 0, 'text-green-600': index.change < 0 }">
                {{ index.value }}
              </p>
              <p class="text-sm" :class="{ 'text-red-600': index.change > 0, 'text-green-600': index.change < 0 }">
                {{ index.change > 0 ? '+' : '' }}{{ index.change }}%
              </p>
            </div>
          </el-col>
        </el-row>
      </el-card>

      <el-card>
        <template #header>
          <div class="font-bold">市场行情</div>
        </template>
        <el-table :data="marketData" style="width: 100%">
          <el-table-column prop="name" label="品种" />
          <el-table-column prop="price" label="价格" />
          <el-table-column prop="change" label="涨跌">
            <template #default="scope">
              <span :class="{ 'text-red-600': scope.row.change > 0, 'text-green-600': scope.row.change < 0 }">
                {{ scope.row.change > 0 ? '+' : '' }}{{ scope.row.change }}%
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref } from 'vue'
import { ElContainer, ElHeader, ElMain, ElMenu, ElMenuItem, ElButton, ElCard, ElRow, ElCol, ElTable, ElTableColumn } from 'element-plus'

const steelIndices = ref([
  { name: '长材指数', value: 4235, change: 1.2 },
  { name: '板材指数', value: 5126, change: -0.5 },
  { name: '型材指数', value: 3987, change: 0.8 }
])

const marketData = ref([
  { name: '热轧卷板', price: 4680, change: 1.5 },
  { name: '冷轧卷板', price: 5230, change: -0.8 },
  { name: '螺纹钢', price: 4120, change: 2.1 },
  { name: '线材', price: 4350, change: 0.5 },
  { name: '中厚板', price: 4890, change: -0.3 }
])
</script>

<style>
@import "element-plus/dist/index.css";
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
