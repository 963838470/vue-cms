<template>
	<div>
		<mt-header title="信息管理系统"></mt-header>
		<router-view></router-view>
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" :to="{name:'home'}">
				<span class="mui-icon icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'member'}">
				<span class="mui-icon icon-vip">
				</span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'shopcart'}">
				<span class="mui-icon icon-car">
					<span class="mui-badge">{{ pickNum }}</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'search'}">
				<span class="mui-icon icon-search"></span>
				<span class="mui-tab-label">查找</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
import connect from "./components/common/connect.js";
import prodTools from "./components/common/prodTools.js";

export default {
  data() {
    return {
      pickNum: prodTools.getTotalCount()
    };
  },
  created() {
    // this.$ajax.get("https://www.baidu.com").then(res => {
    //   console.log(res);
    // });
    connect.$on("addShopcart", num => {
      console.log("触发emit");
      this.pickNum = this.pickNum + num;
    });
  }
};
</script>

<style>
.mint-header-title {
  font-size: 22px;
  color: #fff;
  font-family: "Microsoft YaHei";
}
</style>
