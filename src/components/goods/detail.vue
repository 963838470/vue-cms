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
      <div>
        <span>购买数量</span>
      </div>
      <mt-button type="primary">立即购买</mt-button>
      <mt-button type="danger">加入购物车</mt-button>
    </div>
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
      <mt-button type="primary" size="large" plain>图文介绍</mt-button>
      <mt-button type="danger" size="large" plain>商品评论</mt-button>
    </div>
  </div>
</template>

<script>
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
      ]
    };
  },
  created() {
    console.log("查询参数:" + this.$route.query.id);
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
</style>