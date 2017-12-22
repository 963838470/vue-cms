<template>
  <div class="tmpl">
    <nav-bar title="商品详情"></nav-bar>
    <mt-swipe :auto="4000" class="border">
      <mt-swipe-item v-for="(s,index) in swipe" :key="index">
        <a :href="s.url">
          <img :src="s.src" />
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <div class="border">
      <h3>华为荣耀青春版</h3>
      <span>市场价:
        <del>￥2400</del>
      </span>
      <div class="fr">
        <span>销售价:</span>
        <span class="red">￥2195</span>
      </div>
      <div class="clearfix">
        <span class="fl">购买数量：</span>
        <div class="numedit">
          <span @click="subNum">-</span>
          <span>{{ num }}</span>
          <span @click="addNum">+</span>
        </div>
      </div>
      <div>
        <mt-button type="primary">立即购买</mt-button>
        <mt-button type="danger" @click="addShopcart">加入购物车</mt-button>
      </div>
    </div>
    <transition name="ball" @after-enter="afteEnter">
      <div class="ball" v-if="isShowBall"></div>
    </transition>
    <div class="border">
      <div>
        商品参数
      </div>
      <div>
        商品货号:SD90086
      </div>
      <div>
        库存情况:60件
      </div>
      <div>
        上架时间:2017-01-12
      </div>
    </div>
    <div class="border btn">
      <mt-button type="primary" size="large" plain @click="showDetail">图文介绍</mt-button>
      <mt-button type="danger" size="large" plain @click="showComment">商品评论</mt-button>
    </div>
  </div>
</template>

<script>
import connect from "../common/connect.js";
import prodTools from "../common/prodTools.js";

export default {
  data: function() {
    return {
      swipe: [
        {
          src: require("../../img/1.jpg"),
          url: "https://www.baidu.com"
        },
        {
          src: require("../../img/2.jpg"),
          url: "https://pixabay.com/zh"
        },
        {
          src: require("../../img/3.jpg"),
          url: "https://pixabay.com/zh"
        }
      ],
      num: 1,
      isShowBall: false
    };
  },
  methods: {
    subNum() {
      if (this.num > 1) {
        this.num--;
      }
    },
    addNum() {
      this.num++;
    },
    addShopcart: function() {
      this.isShowBall = true;
    },
    afteEnter() {
      this.isShowBall = false;
      console.log("开始emit");
      connect.$emit("addShopcart", { id: this.$route.query.id, num: this.num });
    },
    showComment() {
      this.$router.push({
        name: "goods.comment",
        query: { cid: this.$route.query.id }
      });
    },
    showDetail() {
      this.$router.push({
        name: "news.detail",
        params: { id: this.$route.query.id }
      });
    }
  }
};
</script>

<style scoped>
.mint-swipe {
  height: 200px;
}

.mint-swipe img {
  width: 100%;
}

.border {
  border: 1px solid lightgray;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
}

h3 {
  line-height: 36px;
  color: royalblue;
  border-bottom: 1px solid lightgray;
  padding-left: 5px;
}

.red {
  font-size: 20px;
  color: red;
  margin-right: 5px;
}

.btn button {
  margin-bottom: 5px;
}

.clearfix {
  margin: 10px;
}

.numedit {
  float: left;
  font-size: 0;
}

.numedit span {
  border: 1px solid lightgray;
  display: inline-block;
  width: 30px;
  height: 24px;
  font-size: 20px;
  text-align: center;
}

.ball {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  background-color: red;
  margin-left: 42%;
  margin-top: -11%;
}

.ball-enter-active {
  animation: bounce-in 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(140px, -50px, 0);
  }
  75% {
    transform: translate3d(160px, 0, 0);
  }
  100% {
    transform: translate3d(60px, 300px, 0);
  }
}
</style>