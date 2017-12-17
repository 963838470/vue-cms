<template>
    <div class="tmpl">
        <div class="photo-bottom">
            <ul>
                <li class="photo-comment">
                    <div>
                        <span>提交评论</span>
                        <span>
                            <a href="">返回</a>
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
                <li>匿名用户:大家好</li>
                <li>匿名用户:大家好</li>
                <li>匿名用户:大家好</li>
                <li>匿名用户:大家好</li>
            </ul>
            加载更多按钮
        </div>
    </div>
</template>

<script>
export default {
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.photo-comments > div span:nth-child(1) {
  float: left;
  font-weight: bold;
  margin-left: 5px;
}

.photo-comments > div span:nth-child(2) {
  float: right;
  font-weight: bold;
  margin-left: 5px;
}
</style>