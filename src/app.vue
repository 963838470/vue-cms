<template>
	<div>
		<mt-header title="信息管理系统"></mt-header>
		<router-view></router-view>
		<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#home">
				<span class="mui-icon icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon icon-vip">
					<span class="mui-badge">9</span>
				</span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon icon-car"></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon icon-search"></span>
				<span class="mui-tab-label">查找</span>
			</a>
		</nav>
	</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    // this.$ajax.get("https://www.baidu.com").then(res => {
    //   console.log(res);
    // });
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
