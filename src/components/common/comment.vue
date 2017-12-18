<template>
  <div class="tmpl">
    <div class="photo-bottom">
      <ul class="comments-header">
        <li>
          <div>
            <span @click="loadByPage">提交评论</span>
            <span>
              <a @click="$router.go(-1)">返回</a>
            </span>
          </div>
        </li>
        <li class="txt-comment">
          <textarea v-model="content"></textarea>
        </li>
        <li>
          <mt-button @click="sendContent" size="large" type="primary">发表评论按钮</mt-button>
        </li>
        <li>
          <div class="photo-comments">
            <div>
              <span>评论列表</span>
              <span>{{ comments.length }}条评论</span>
            </div>
          </div>
        </li>
      </ul>
      <ul class="comment-list">
        <li v-for="(comment,index) in comments" :key="index">{{ comment.username }}:{{ comment.content }} {{ comment.addTime | filterDate }}</li>
        <li>
          <mt-button @click="loadByPage" size="large" type="danger">加载更多按钮</mt-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      comments: [],
      pageIndex: 1,
      content: ""
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
          addTime: "2017-12-11"
        },
        {
          username: "李四",
          content: "你们好",
          addTime: "2017-12-12"
        },
        {
          username: "王五",
          content: "大家好才是真的好",
          addTime: "2017-12-16"
        }
      ]);
    },
    sendContent() {
      this.comments.push({
        username: "匿名用户",
        content: this.content,
        addTime: Date.now()
      });
      this.content = "";
      // 增加一条记录，返回最新的一页数据
    }
  }
};
</script>

<style scoped>
.comments-header li {
  margin: 5px;
}

textarea {
  margin-bottom: 0;
  padding: 5px;
}

.comment-list li {
  border-bottom: 1px solid lightgray;
  padding: 5px;
}

.photo-comments > div {
  height: 25px;
}

div span:nth-child(1) {
  float: left;
  font-weight: bold;
  height: 25px;
}

div span:nth-child(2) {
  float: right;
  font-weight: bold;
}
</style>