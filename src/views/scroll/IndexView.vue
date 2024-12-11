<template>
  <div>
    <div class="real-time-container">
      <div class="home-header flex items-center">
        <img
          src="https://shadow.zhaogangimg.com/assets/zgw-home/img/real-time-trade.bd4d0be.png"
          alt=""
          class="home-icon"
        />
        <div class="font-bold">实时成交</div>
      </div>
      <div class="list-warper">
        <div class="scroll-list-mask scroll-list-mask-top"></div>
        <div class="scroll-list-mask scroll-list-mask-bottom"></div>
        <div class="scroll-warper">
          <ul class="scroll" style="animation-duration: 120s">
            <li v-for="(item, index) in dataList" :key="index" class="flex">
              <div class="w-[105px]">{{ item.company }}</div>
              <div class="w-[98px] ml-2.5">{{ item.product }}</div>
              <div class="w-[80px] flex justify-end">
                <div class="weight">{{ item.weight }}</div>
                <div>{{ item.unit }}</div>
              </div>
              <time class="w-[70px] text-right">{{ item.time }}</time>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const dataList = ref([
  {
    company: '上海****有限公司',
    product: '四级抗震螺纹钢',
    weight: 2.724,
    unit: '吨',
    time: '17:15:09'
  },
  {
    company: '上海****有限公司',
    product: '三级抗震盘螺',
    weight: 14.1,
    unit: '吨',
    time: '17:15:09'
  },
  {
    company: '安徽****有限公司',
    product: '三级抗震螺纹钢',
    weight: 17.118,
    unit: '吨',
    time: '17:15:04'
  },
  {
    company: '上海****有限公司',
    product: '三级抗震螺纹钢',
    weight: 5.997,
    unit: '吨',
    time: '17:14:56'
  },
  {
    company: '上海****有限公司',
    product: '三级盘螺',
    weight: 4.4,
    unit: '吨',
    time: '17:14:56'
  },
  {
    company: '济南****有限公司',
    product: '两切普板',
    weight: 4.5,
    unit: '吨',
    time: '17:14:40'
  },
  {
    company: '上海****有限公司',
    product: '普卷',
    weight: 30.1,
    unit: '吨',
    time: '17:14:38'
  },
  {
    company: '杭州****有限公司',
    product: '三级盘螺',
    weight: 21.5,
    unit: '吨',
    time: '17:14:36'
  },
  {
    company: '湖南****有限公司',
    product: '三级抗震螺纹钢',
    weight: 72.78,
    unit: '吨',
    time: '17:14:32'
  },
  {
    company: '沧州****有限公司',
    product: '三级抗震盘螺',
    weight: 39.9,
    unit: '吨',
    time: '17:14:01'
  },
  {
    company: '安徽****有限公司',
    product: '三级抗震螺纹钢',
    weight: 4.024,
    unit: '吨',
    time: '17:13:25'
  },
  {
    company: '安徽****有限公司',
    product: '三级抗震盘螺',
    weight: 2.1,
    unit: '吨',
    time: '17:13:25'
  },
  {
    company: '唐山****有限公司',
    product: '两切低合金板',
    weight: 9.3,
    unit: '吨',
    time: '17:13:14'
  },
  {
    company: '唐山****有限公司',
    product: '低合金开平板',
    weight: 1.378,
    unit: '吨',
    time: '17:13:14'
  },
  {
    company: '广东****有限公司',
    product: '三级抗震盘螺',
    weight: 31.5,
    unit: '吨',
    time: '17:13:06'
  },
  {
    company: '广东****有限公司',
    product: '三级抗震螺纹钢',
    weight: 20.286,
    unit: '吨',
    time: '17:13:06'
  },
  {
    company: '广东****有限公司',
    product: '三级抗震螺纹钢',
    weight: 14.82,
    unit: '吨',
    time: '17:13:06'
  },
  {
    company: '重庆****有限公司',
    product: '螺纹钢',
    weight: 400,
    unit: '吨',
    time: '17:12:40'
  },
  {
    company: '湖北****有限公司',
    product: '三级抗震螺纹钢',
    weight: 33.904,
    unit: '吨',
    time: '17:12:32'
  },
  {
    company: '广西******公司',
    product: '三级抗震螺纹钢',
    weight: 24.012,
    unit: '吨',
    time: '17:12:19'
  },
  {
    company: '徐州****有限公司',
    product: '三级抗震螺纹钢',
    weight: 35.748,
    unit: '吨',
    time: '17:12:15'
  },
  {
    company: '徐州****有限公司',
    product: '三级抗震螺纹钢',
    weight: 40.896,
    unit: '吨',
    time: '17:12:15'
  },
  {
    company: '徐州****有限公司',
    product: '三级抗震盘螺',
    weight: 35.1,
    unit: '吨',
    time: '17:12:15'
  },
  {
    company: '徐州****有限公司',
    product: '三级抗震螺纹钢',
    weight: 35.126,
    unit: '吨',
    time: '17:12:15'
  },
  {
    company: '徐州****有限公司',
    product: '高线',
    weight: 15.6,
    unit: '吨',
    time: '17:12:15'
  },
  {
    company: '北京****有限公司',
    product: '高线',
    weight: 4.4,
    unit: '吨',
    time: '17:11:45'
  },
  {
    company: '北京****有限公司',
    product: '三级抗震螺纹钢',
    weight: 9.738,
    unit: '吨',
    time: '17:11:45'
  },
  {
    company: '上海****有限公司',
    product: '三级抗震盘螺',
    weight: 8.4,
    unit: '吨',
    time: '17:11:43'
  },
  {
    company: '河南****有限公司',
    product: '普卷',
    weight: 27.986,
    unit: '吨',
    time: '17:11:35'
  },
  {
    company: '上海****有限公司',
    product: '低合金卷',
    weight: 29.39,
    unit: '吨',
    time: '17:11:33'
  }
])
</script>

<style lang="scss" scoped>
.real-time-container {
  width: 390px;
  background-color: #fff;
  margin-left: 10px;

  .home-header {
    font-size: 18px;
    font-weight: 600;
    padding: 0 16px;
    color: #333;
    height: 58px;
    line-height: 58px;

    .home-icon {
      width: 30px;
      height: 30px;
      margin-right: 8px;
    }
  }

  .list-warper {
    height: 425px;
    overflow: hidden;
    border-top: 1px solid #eee;
    padding: 8px 16px;
    position: relative;
    box-sizing: border-box;

    .scroll-warper {
      height: 100%;
      overflow: hidden;
    }

    ul {
      padding: 0;
      margin: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .scroll {
      animation-name: scroll-data-v-5326d1ba;
      animation-iteration-count: infinite;
      animation-timing-function: linear;

      &:hover {
        animation-play-state: paused;
      }
    }

    li {
      transition: all 0.3s ease 0s;
      box-sizing: border-box;
      height: 30px;
      align-items: center;
      color: #333;
      font-size: 13px;
      justify-content: space-between;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;

      time {
        font-size: 12px;
        color: #999;
      }

      .weight {
        color: #d0111a;
        margin-right: 2px;
      }
    }
  }
}

.scroll-list-mask {
  position: absolute;
  left: 0;
  width: 100%;
  height: 30px;
  z-index: 999;

  &-top {
    top: 8px;
    background: linear-gradient(180deg, #fff, hsla(0, 0%, 100%, 0));
  }

  &-bottom {
    bottom: 8px;
    background: linear-gradient(0deg, #fff, hsla(0, 0%, 100%, 0));
  }
}

/* Keyframes */
@keyframes scroll-data-v-5326d1ba {
  0% {
    transform: translateY(0);
  }
  to {
    transform: translateY(calc(-100% + 348px));
  }
}
</style>
