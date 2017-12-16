<template>
    <div class="tmpl">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(m,i) in List" :key="i">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../img/1.jpg">
                    <div class="mui-media-body">
                        {{ m.title }}
                        <div class="news-desc">
                            <p class='mui-ellipsis'>点击数：{{ m.click }}</p>
                            <p class='mui-ellipsis'>发表时间：{{ m.addtime }}</p>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      List: [
        {
          title: "幸福",
          addtime: "2017-12-12",
          click: 121,
          imgSrc: "../../img/1.jpg",
          descript: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？"
        },
        {
          title: "木屋",
          addtime: "2017-12-12",
          click: 121,
          imgSrc: "../../img/2.jpg",
          descript: "想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖."
        },
        {
          title: "CBD",
          addtime: "2017-12-12",
          click: 121,
          imgSrc: "../../img/3.jpg",
          descript: "烤炉模式的城，到黄昏，如同打翻的调色盘一般."
        },
        {
          title: "幸福",
          addtime: "2017-12-12",
          click: 121,
          imgSrc: "../../img/1.jpg",
          descript: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？"
        },
        {
          title: "木屋",
          addtime: "2017-12-12",
          click: 121,
          imgSrc: "../../img/2.jpg",
          descript: "想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖."
        },
        {
          title: "CBD",
          addtime: "2017-12-12",
          click: 121,
          imgSrc: "../../img/3.jpg",
          descript: "烤炉模式的城，到黄昏，如同打翻的调色盘一般."
        },
        {
          title: "幸福",
          addtime: "2017-12-12",
          click: 121,
          imgSrc: "../../img/1.jpg",
          descript: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？"
        },
        {
          title: "木屋",
          addtime: "2017-12-12",
          click: 121,
          imgSrc: "../../img/2.jpg",
          descript: "想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖."
        },
        {
          title: "CBD",
          addtime: "2017-12-12",
          click: 121,
          imgSrc: "../../img/3.jpg",
          descript: "烤炉模式的城，到黄昏，如同打翻的调色盘一般."
        },
        {
          title: "幸福",
          addtime: "2017-12-12",
          click: 121,
          imgSrc: "../../img/1.jpg",
          descript: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？"
        },
        {
          title: "木屋",
          addtime: "2017-12-12",
          click: 121,
          imgSrc: "../../img/2.jpg",
          descript: "想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖."
        },
        {
          title: "CBD",
          addtime: "2017-12-12",
          click: 121,
          imgSrc: "../../img/3.jpg",
          descript: "烤炉模式的城，到黄昏，如同打翻的调色盘一般."
        }
      ]
    };
  }
};
</script>

<style scoped>
.mui-media-body p {
  color: #0bb0f5;
}

.news-desc p:nth-child(1) {
  float: left;
}

.news-desc p:nth-child(2) {
  float: right;
}
</style>