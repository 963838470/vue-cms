<template>
  <div class="temp">
    <nav-bar title="图文分享"></nav-bar>
    <div class="photo-header">
      <ul>
        <li v-for="m in menus" :key="m.id">
          <a to="#" @click="loadImg(m.id)">{{ m.name }}</a>
        </li>
      </ul>
    </div>
    <div class="photo-list">
      <ul>
        <li v-for="(img,index) in images" :key="index">
          <router-link :to="{ name:'photo.detail',params:{id:img.id}}">
            <img v-lazy="img.src">
            <p>
              <span>{{ img.title }}</span>
              <br>
              <span v-html="img.content"></span>
            </p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      menus: [],
      images: []
    };
  },
  methods: {
    loadImg(id) {
      console.log(id);
    }
  },
  created() {
    this.menus = [
      { id: 1, name: "家居生活" },
      { id: 2, name: "摄影设计" },
      { id: 3, name: "明星美女" },
      { id: 4, name: "空间设计" },
      { id: 5, name: "户型装饰" },
      { id: 6, name: "广告摄影" },
      { id: 7, name: "清纯美女" }
    ];
    this.menus.unshift({ id: 0, name: "全部" });
    this.images = [
      {
        id: 1,
        title: "幸福",
        src: require("../../img/1.jpg"),
        content: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？"
      },
      {
        id: 2,
        title: "木屋",
        src: require("../../img/2.jpg"),
        content: "想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖."
      },
      {
        id: 3,
        title: "CBD",
        src: require("../../img/3.jpg"),
        content: "烤炉模式的城，到黄昏，如同打翻的调色盘一般."
      },
      {
        id: 1,
        title: "幸福",
        src: require("../../img/1.jpg"),
        content: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？"
      },
      {
        id: 2,
        title: "木屋",
        src: require("../../img/2.jpg"),
        content: "想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖."
      },
      {
        id: 3,
        title: "CBD",
        src: require("../../img/3.jpg"),
        content: "烤炉模式的城，到黄昏，如同打翻的调色盘一般."
      },
      {
        id: 1,
        title: "幸福",
        src: require("../../img/1.jpg"),
        content: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？"
      },
      {
        id: 2,
        title: "木屋",
        src: require("../../img/2.jpg"),
        content: "想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖."
      },
      {
        id: 3,
        title: "CBD",
        src: require("../../img/3.jpg"),
        content: "烤炉模式的城，到黄昏，如同打翻的调色盘一般."
      }
    ];
  }
};
</script>

<style scoped>
li {
  list-style: none;
  display: inline-block;
  margin-left: 10px;
  height: 30px;
}

img {
  width: 90%;
}

.photo-header ul {
  white-space: nowrap;
  overflow: auto;
}
</style>