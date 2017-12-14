<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(s,index) in swipe" :key="index">
        <a href="s.url">
          <img :src="s.src" />
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">新闻资讯</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-email">
              <span class="mui-badge">5</span>
            </span>
            <div class="mui-media-body">图文分享</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">商品展示</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">搜索资讯</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-phone"></span>
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
          src:
            "https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_1280.jpg",
          url: "https://pixabay.com/zh"
        },
        {
          src:
            "https://cdn.pixabay.com/photo/2017/12/03/17/23/fantasy-2995326_1280.jpg",
          url: "https://pixabay.com/zh"
        },
        {
          src:
            "https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_1280.jpg",
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
  height: 187px;
}

.mint-swipe img {
  height: 100%;
  margin: 0 auto;
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
