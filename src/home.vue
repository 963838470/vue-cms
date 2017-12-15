<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(s,index) in swipe" :key="index">
        <a :href="s.url">
          <img :src="s.src" />
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-sm-4">
          <a href="#">
            <img src="./img/home/news.png" />
            <div class="mui-media-body">新闻资讯</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-sm-4">
          <a href="#">
            <img src="./img/home/share.png" />
            <div class="mui-media-body">图文分享</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-sm-4">
          <a href="#">
            <img src="./img/home/goods.png" />
            <div class="mui-media-body">商品展示</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-sm-4">
          <a href="#">
            <img src="./img/home/voice.png" />
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-sm-4">
          <a href="#">
            <img src="./img/home/search.png" />
            <div class="mui-media-body">搜索资讯</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-sm-4">
          <a href="#">
            <img src="./img/home/contact.png" />
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swipe: [
        {
          src: require("./img/1.jpg"),
          url: "https://www.baidu.com"
        },
        {
          src: require("./img/2.jpg"),
          url: "https://pixabay.com/zh"
        },
        {
          src: require("./img/3.jpg"),
          url: "https://pixabay.com/zh"
        }
      ]
    };
  },
  created() {}
};
</script>

<style scoped>
.mint-swipe {
  height: 250px;
}

.mint-swipe img {
  width:100%;
  height: 100%;
}
.mui-grid-view.mui-grid-9 {
  background-color: white;
  border: none;
  margin-top: 0;
}
.mui-grid-view.mui-grid-9 li {
  border: none;
}
</style>
