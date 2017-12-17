<template>
    <div class="tmpl">
        <nav-bar title="图文详情"></nav-bar>
        <div class="photo-title">
            <p>动植物濒临灭绝</p>
            <span>发起日期:2017-12-17</span>
            <span>123次浏览</span>
            <span>分类:民生经济</span>
        </div>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(img,index) in images" :key="index">
                <img :src="img">
            </li>
        </ul>
        <div class="photo-desc">
            很多动植物得不到保护，濒临灭绝！！！
        </div>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      images: [
        require("../../img/1.jpg"),
        require("../../img/2.jpg"),
        require("../../img/3.jpg"),
        require("../../img/3.jpg"),
        require("../../img/1.jpg")
      ]
    };
  },
  created() {
    console.log(this.$route.params.id);
  }
};
</script>

<style scoped>
li {
  list-style: none;
}

ul {
  margin: 0;
  padding: 0;
}

.photo-title span {
  margin-right: 20px;
}

.mui-table-view .mui-grid-view .mui-grid-9 {
  background-color: white;
  border: 0;
}

.mui-table-view .mui-grid-view .mui-grid-9 li {
  border: 0;
}

.photo-desc {
  font-size: 18px;
}

.mui-table-view-cell .mui-media .mui-col-xs-4 .mui-col-sm-3 {
  padding: 2px 2px;
}

img {
  width: 100%;
}
</style>