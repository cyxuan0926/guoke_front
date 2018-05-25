<template>
    <div class="public-header">
        <Header class="content">
            <nuxt-link class="logo" to="/"><img src="../assets/img/logo.png" alt=""></nuxt-link>
            <div class="combination-message">
                <div class="message-left">
                    <i class="icon--size iconfont icon-gupiao"></i>
                </div>
                <div class="message-right">
                    <h4>股票代码</h4>
                    <p>834465</p>
                </div>
            </div>
            <div class="combination-message">
                <div class="message-left">
                    <i class="icon--size iconfont icon-coordinates_fill"></i>
                </div>
                <div class="message-right">
                    <h4>地址</h4>
                    <p>北京市海淀区西三旗昌临813号A11号楼</p>
                </div>
            </div>
        </Header>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style>
.icon--size{
    font-size: 25px;
}
.public-header{
    background-color: #fff;
}
.content{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.logo img{
    vertical-align: middle;
}
.combination-message{
    align-self: auto;
    display: flex;
    height: 40px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
}
.combination-message:nth-of-type(1){
    margin-left: 450px
}
.combination-message:nth-of-type(2){
    margin-left: 190px;
}
.combination-message .message-left{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 1px solid #2e2e2e;
    display: flex;
    justify-content: center;
    align-items: center;
}
.combination-message .message-right{
    margin-left: 5px;
}
.combination-message h4{
    height: 20px;
    line-height: 20px;
    color: #333;
    white-space: nowrap;
}
.combination-message p{
    height: 20px;
    line-height: 20px;
    color: #ccc;
}
</style>


