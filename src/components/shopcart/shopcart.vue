<template>
    <div class="tmpl">
        <nav-bar title="购物车"></nav-bar>
        <ul class="pay-detail">
            <li v-for="(good,index) in goodsList" :key="index">
                <mt-switch></mt-switch>
                <img :src="good.src" alt="">
                <div class="clearfix"></div>
                <div class="pay-calc">
                    <h3>{{ good.title }}</h3>
                    <div class="calc">
                        <span>￥777</span>
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                        <a href="javascript:;">删除</a>
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
      goodsList: [{ src: require("../../img/1.jpg"), title: "夕阳" }]
    };
  }
};
</script>

<style scoped>
.mint-switch {
  width: 20%;
  margin: 5%;
  float: left;
}

.pay-detail {
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