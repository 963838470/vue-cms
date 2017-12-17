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
        <img class="preview-img" :src="img.src" @click="$preview.open(index, images)">
      </li>
    </ul>
    <div class="photo-desc">
      很多动植物得不到保护，濒临灭绝！！！
    </div>
    <div class="photo-bottom">
      <ul>
        <li class="photo-comment">
          <div>
            <span @click="loadByPage">提交评论</span>
            <span>
              <a href="#">返回</a>
            </span>
          </div>

        </li>
        <li class="txt-comment">
          <textarea></textarea>
        </li>
        <li>
          发表评论按钮
        </li>
        <li>
          <div class="photo-comment">
            <div>
              <span>评论列表</span>
              <span>44条评论</span>
            </div>
          </div>
        </li>
      </ul>
      <ul class="comment-list">
        <li v-for="(comment,index) in comments" :key="index">{{ comment.username }}:{{ comment.content }} {{ comment.addTime }}</li>
      </ul>
      <button @click="loadByPage">加载更多按钮</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      images: [
        {
          src: require("../../img/1.jpg"),
          w: 600,
          h: 400
        },
        {
          src: require("../../img/2.jpg"),
          w: 1200,
          h: 900
        },
        {
          src: require("../../img/3.jpg"),
          w: 600,
          h: 400
        },
        {
          src: require("../../img/2.jpg"),
          w: 1200,
          h: 900
        }
      ],
      comments: [],
      pageIndex: 1
    };
  },
  created() {
    console.log(this.$route.params.id);
    this.loadByPage();
  },
  methods: {
    loadByPage() {
      this.comments = this.comments.concat([
        {
          username: "张三",
          content: "这是第" + this.pageIndex++ + "页的数据",
          addTime: "2017-12-17"
        },
        {
          username: "李四",
          content: "你们好",
          addTime: "2017-12-17"
        },
        {
          username: "王五",
          content: "大家好才是真的好",
          addTime: "2017-12-17"
        }
      ]);
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
  border-bottom: 1px solid lightgray;
  margin: 5px 0;
  padding: 5px;
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

/* 评论样式 */
</style>