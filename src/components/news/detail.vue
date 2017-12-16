<template>
    <div class="tmpl">
        <nav-bar title="新闻详情"></nav-bar>
        <div class="news-title">
            <p>{{ detail.title }}</p>
            <div>
                <span>{{ detail.click }}次点击</span>
                <span>分类：民生经济</span>
                <span>添加时间：{{ detail.addtime | filterDate }}</span>
            </div>
        </div>
        <div class="news-content" v-html="detail.descript"></div>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      detail: {
        id: 1,
        title: "幸福",
        addtime: "2017-12-12 12:34:12",
        click: 121,
        imgSrc: "../../img/1.jpg",
        descript: "<h4>什么叫幸福</h4>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？"
      }
    };
  },
  created() {
    this.detail.click = this.$route.params.id;
  }
};
</script>

<style scoped>
.new-title {
  margin-top: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.news-title p {
  color: #0a87f8;
  font-size: 20px;
  font-weight: bold;
}

.news-title span {
  margin-right: 30px;
}

.news-content {
  padding: 10px 5px;
}
</style>