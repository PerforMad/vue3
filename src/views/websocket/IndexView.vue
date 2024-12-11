<template>
  <div>
    <h1 class="mb-2.5 font-bold">Ws</h1>
    <el-input clearable class="mr-2.5 !w-[200px]" v-model="username" id="username" placeholder="输入你的用户名"></el-input>
    <el-button type="primary" @click="connect">确认用户名</el-button>
    <div v-if="connected" class="mt-5">
      <el-input class="!w-60" v-model="message.content" type="text" id="message" placeholder="请输入内容..." />
      <el-input class="!w-52 ml-2.5" v-model="message.to" type="text" id="to" placeholder="输入收件人（全部留空）" />
      <el-button class="ml-2.5" type="success" @click="sendMessage">发送</el-button>
      <div id="messages" class="mt-2.5">
        <div v-for="(msg, index) in messages" :key="index">
          <strong>{{ msg.from }}:</strong> {{ msg.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { ElMessage } from 'element-plus'
import { ElLoading } from 'element-plus'

const username = ref('');
const message = ref({ content: '', to: '' });
const messages = ref([]);
let socket = null;
//是否已经连接
const connected = ref(false);

const connect = () => {
  if(!username.value){
    ElMessage({
      message: '请输入用户名',
      grouping: true,
      type: 'warning',
    })
    return
  }
  if (!connected.value) {
    const loading = ElLoading.service({
      lock: true,
      text: '连接中',
      background: 'rgba(0, 0, 0, 0.7)',
    })

    socket = new WebSocket('ws://localhost:8888/ws');

    socket.onopen = (event) => {
      ElMessage({
        message: '连接成功',
        grouping: true,
        type: 'success',
      })

      loading.close()

      console.log('Connection opened:',event);
      // 发送用户名
      socket.send(JSON.stringify(username.value));
      connected.value = true;
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      messages.value.push(data);
    };

    socket.onerror = (error) => {
      ElMessage({
        message: 'websocket连接失败',
        grouping: true,
        type: 'error',
      })
      console.error('WebSocket Error:', error);
      loading.close()
    };

    socket.onclose = (event) => {
      console.log('Connection closed with code:', event.code, 'reason:', event.reason);
      connected.value = false;
    };
  }else{
    ElMessage({
      message: 'websocket已连接',
      grouping: true,
      type: 'warning',
    })
  }
};

const sendMessage = () => {
  if(!username.value){
    ElMessage({
      message: '请输入用户名',
      grouping: true,
      type: 'warning',
    })
    return
  }
  if (socket && socket.readyState === WebSocket.OPEN && message.value.content) {
    socket.send(JSON.stringify(message.value));
    message.value.content = ''; // 清空输入框
  }
};


onMounted(() => {
  connect();
});

onUnmounted(() => {
  console.log("jjjjjj")
  if (socket) {
    socket.close();
  }
});
</script>

<style scoped>
/* 你可以在这里添加样式 */
</style>
