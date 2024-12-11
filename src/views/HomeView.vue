<template>
  <main>
    <el-button type="primary" @click="status=!status">切换</el-button>
    <div class="bg-blue-600 animate__animated animate__headShake">123</div>
    <el-button type="success">hello</el-button>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <TheWelcome v-if="status" />
  </main>
</template>

<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue'

const status=ref(false)

</script>
