<template>
    <div class="tmpl">
        <nav-bar title="购物车"></nav-bar>
        <ul class="pay-detail">
            <li v-for="(good,index) in goodsList" :key="index">
                <mt-switch v-model="good.isPicked"></mt-switch>
                <img :src="good.src">
                <div class="clearfix"></div>
                <div class="pay-calc">
                    <h3>{{ good.title }}</h3>
                    <div class="calc">
                        <span>￥{{ good.price }}</span>
                        <span @click="numSub(good)">-</span>
                        <span>{{ good.num }}</span>
                        <span @click="numAdd(good)">+</span>
                        <a href="javascript:;" @click="delItem(good)">删除</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import ProdTool from "../../components/common/prodTools.js";
export default {
  data: function() {
    return {
      goodsList: [
        { id: 1, src: require("../../img/1.jpg"), title: "夕阳", price: 888 },
        { id: 2, src: require("../../img/2.jpg"), title: "海豹", price: 8888 },
        { id: 3, src: require("../../img/3.jpg"), title: "蜗牛", price: 65 }
      ]
    };
  },
  created() {
    let prod = ProdTool.getProds();

    this.goodsList.forEach((ele, index) => {
      this.$set(ele, "num", prod[ele.id]);
      this.$set(ele, "isPicked", true);
    });
  },
  methods: {
    numSub(good) {
      good.num--;
    },
    numAdd(good) {
      good.num++;
    },
    delItem(good) {
      //delete good;
    }
  }
};
</script>

<style scoped>
.mint-switch {
  width: 20%;
  margin: 5%;
  float: left;
}

.pay-detail li {
  padding: 5px;
  border-bottom: 1px solid lightgray;
}

.pay-detail img {
  width: 60%;
  float: left;
}

.pay-calc h3 {
  color: deepskyblue;
}

.calc {
  font-size: 0;
}

.calc span {
  font-size: 18px;
  line-height: 30px;
}

.calc span:nth-child(1) {
  margin-right: 10px;
}

.calc span:nth-child(2),
.calc span:nth-child(3),
.calc span:nth-child(4) {
  border: 1px solid lightgray;
  width: 30px;
  height: 30px;
  display: inline-block;
  text-align: center;
}

.calc a {
  font-size: 18px;
  line-height: 30px;
  color: red;
  margin-right: 10px;
  float: right;
}
</style>