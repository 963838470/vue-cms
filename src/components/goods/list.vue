<template>
  <div class="tmpl">
    <nav-bar title="商品列表"></nav-bar>
    <div class="page-loadmore-wrapper" ref="wrapper">
      <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul>
          <li v-for="(good,index) in goods" :key="index">
            <div>
              <router-link :to="{ name:'goods.detail',query:{ id:good.id }}">
                <img :src="good.src" />
                <span>{{ good.title }}</span>
                <div class="descript">
                  <span>￥{{ good.price }}</span>
                  <span>
                    <del>￥{{ good.marketPrice }}</del>
                  </span>
                </div>
              </router-link>
            </div>
          </li>
        </ul>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      goods: [],
      allLoaded: false,
      timeStop: 0
    };
  },
  methods: {
    loadBottom: function() {
      setTimeout(() => {
        console.log("触发loadmore函数");
        this.goods = this.goods.concat(
          {
            id: 1,
            title: "日落",
            src: require("../../img/1.jpg"),
            price: 2100,
            marketPrice: 3000
          },
          {
            id: 2,
            title: "海豹",
            src: require("../../img/2.jpg"),
            price: 18888,
            marketPrice: 20000
          },
          {
            id: 3,
            title: "蜗牛",
            src: require("../../img/3.jpg"),
            price: 18,
            marketPrice: 36
          },
          {
            id: 4,
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
        this.$refs.loadmore.onBottomLoaded();
      }, this.timeStop);
      this.timeStop = 1500;
    }
  },
  created() {
    this.loadBottom();
  }
};
</script>

<style scoped>
li {
  width: 50%;
  float: left;
  height: 180px;
}

li > div {
  border: 1px solid lightgray;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
}

img {
  width: 100%;
}

.descript > span:nth-child(1) {
  color: red;
}

.descript > span:nth-child(2) {
  float: right;
  background-color: lightgray;
}

.page-loadmore-wrapper {
  overflow: scroll;
}
</style>