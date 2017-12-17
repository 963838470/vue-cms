<template>
    <div>
        <nav-bar title="商品列表"></nav-bar>
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
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      goods: [
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
        }
      ]
    };
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