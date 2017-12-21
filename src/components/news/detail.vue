<template>
  <div class="tmpl">
    <nav-bar :title="title"></nav-bar>
    <div class="news-title">
      <p>{{ detail.title }}</p>
      <div>
        <span>{{ detail.click }}次点击</span>
        <span>分类:民生经济</span>
        <span>添加时间:{{ detail.addtime | filterDate }}</span>
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
        title: "唤醒你梦想的数学人生哲理",
        addtime: "2015-01-07 17:34",
        click: 736,
        imgSrc: "../../img/1.jpg",
        descript: `<p>数学是奇妙的，像个放大镜，可以将很小的梦想放大很多倍！每天改变一点点，进步就会变很多。就像数学+的孩子们的学习，家长们的努力，老师们的耕耘，一步一步更接近梦想！我们来看看那些和梦想有关的数学人生哲理。</p>
        <h4>哲理一：每天努力一点点，进步速度很可怕！</h4>
        <img src="https://app.yinxiang.com/shard/s71/res/ba49cd83-757d-4d8f-82bd-1a4012b234f8" />
        <p>进步里的数学就像上面这幅图描述的：
        1.01=1+0.01，也就是每天进步一点。
        1.01的365次方也就是说你每天进步一点点，一年以后，你将进步很大，远远大于“1”。
        1的365次方=1。
        1是指原地踏步，一年以后你还是原地踏步，还是那个“1”。
        0.99=1-0.01，也就是说你每天退步一点点。
        你将在一年以后，远远小于“1”，远远被人抛在后面，将会是“1”事无成。</p>
        <h4>哲理二、进步了切不能沾沾自喜，得意忘形！</h4>
        <img src="https://app.yinxiang.com/shard/s71/res/f7d069ad-7b31-4bbf-8b05-c92a1a84a80e" />
        <p>虽然只是那么小小的0.01或者0.02的差距，在数学的世界里差别很大！</p>
        <p>1.02的365次方=1377.4，远远大于1.01的365次方。如果取得成绩后沾沾自喜，得意忘形，不再保持上进，那么比咱更努力一点的人，一年后就要甩出我们几条街了。数学+编辑不由说“坚持才是王道，比冲劲，咱还得有韧劲儿”。</p>
        `
      },
      title: "新闻详情"
    };
  },
  created() {
    this.detail.click = this.$route.params.id;
  },
  beforeRouteEnter(to, from, next) {
    console.log(from.name);
    if (from.name == "goods.detail") {
    }
    next(vm => {
      vm.title = "图文详情";
    });
  }
};
</script>

<style>
.news-content > img {
  width: 100%;
}
</style>
<style scoped>
.news-title {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.news-title p {
  color: #0a87f8;
  font-size: 24px;
  font-weight: bold;
  margin: 10px;
  text-align: center;
}

.news-title span {
  margin-right: 15px;
}

.news-content {
  padding: 10px 5px;
}
</style>