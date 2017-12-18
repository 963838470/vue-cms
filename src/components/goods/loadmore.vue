<template>
    <div class="page-loadmore">
        <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
            <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
                <ul class="page-loadmore-list">
                    <li v-for="item in list" class="page-loadmore-listitem" :key="item">{{ item }}</li>
                </ul>
            </mt-loadmore>
        </div>
    </div>
</template>

<script type="text/babel">
export default {
  data() {
    return {
      list: [],
      allLoaded: false,
      wrapperHeight: 0
    };
  },

  methods: {
    loadBottom() {
      setTimeout(() => {
        let lastValue = this.list[this.list.length - 1];
        if (lastValue < 40) {
          for (let i = 1; i <= 5; i++) {
            this.list.push(lastValue + i);
          }
        } else {
          this.allLoaded = true;
        }
        this.$refs.loadmore.onBottomLoaded();
      }, 1500);
    }
  },
  created() {
    for (let i = 1; i <= 10; i++) {
      this.list.push(i);
    }
  },
  mounted() {
    this.wrapperHeight =
      document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top;
  }
};
</script>

<style>
.loading-background,
.mint-loadmore-top span {
  -webkit-transition: 0.2s linear;
  transition: 0.2s linear;
}
.mint-loadmore-top span {
  display: inline-block;
  vertical-align: middle;
}

.mint-loadmore-top span.is-rotate {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.page-loadmore .mint-spinner {
  display: inline-block;
  vertical-align: middle;
}

.page-loadmore-desc {
  text-align: center;
  color: #666;
  padding-bottom: 5px;
}

.page-loadmore-desc:last-of-type,
.page-loadmore-listitem {
  border-bottom: 1px solid #eee;
}

.page-loadmore-listitem {
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.page-loadmore-listitem:first-child {
  border-top: 1px solid #eee;
}

.page-loadmore-wrapper {
  overflow: scroll;
}

.mint-loadmore-bottom span {
  display: inline-block;
  -webkit-transition: 0.2s linear;
  transition: 0.2s linear;
  vertical-align: middle;
}

.mint-loadmore-bottom span.is-rotate {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
</style>
