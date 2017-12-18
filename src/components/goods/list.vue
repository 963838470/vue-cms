<template>
  <div class="tmpl">
    <load></load>
    <!-- <nav-bar title="商品列表"></nav-bar>
    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <ul>
        <li v-for="(good,index) in goods" :key="index">
          <div>
            <img :src="good.src">
            <span>{{ good.title }}</span>
            <div>
              <span>￥{{ good.price }}</span>
              <span>
                <del>￥{{ good.marketPrice }}</del>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </mt-loadmore> -->
  </div>
</template>

<script>
import Load from './loadmore.vue'
export default {
  data: function() {
    return {
      goods: [],
      allLoaded: false
    };
  },
  methods: {
    loadBottom: function() {
      console.log("触发loadmore函数");
      this.goods = this.goods.concat(
        {
          title: "日落",
          src: require("../../img/1.jpg"),
          price: 2100,
          marketPrice: 3000
        },
        {
          title: "海豹",
          src: require("../../img/2.jpg"),
          price: 18888,
          marketPrice: 20000
        },
        {
          title: "蜗牛",
          src: require("../../img/3.jpg"),
          price: 18,
          marketPrice: 36
        },
        {
          title: "日落",
          src: require("../../img/1.jpg"),
          price: 2100,
          marketPrice: 3000
        },
        {
          title: "海豹",
          src: require("../../img/2.jpg"),
          price: 18888,
          marketPrice: 20000
        },
        {
          title: "蜗牛",
          src: require("../../img/3.jpg"),
          price: 18,
          marketPrice: 36
        },
        {
          title: "日落",
          src: require("../../img/1.jpg"),
          price: 2100,
          marketPrice: 3000
        },
        {
          title: "海豹",
          src: require("../../img/2.jpg"),
          price: 18888,
          marketPrice: 20000
        }
      );
      //this.allLoaded = false;
      //this.$refs.loadmore.onBottomLoaded();
    }
  },
  created() {
    this.loadBottom();
  },
  components: {
    Load
  }
};
</script>

<style scoped>
li > div {
  border: 1px solid black;
}

li {
  width: 50%;
  float: left;

  margin: 10px 0;
  padding: 0 10px;
}

img {
  width: 100%;
}
li > div > div {
  background-color: lightgray;
}

li > div > div > span:nth-child(1) {
  color: red;
}

li > div > div > span:nth-child(2) {
  float: right;
}
</style>