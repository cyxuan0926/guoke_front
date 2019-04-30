<template>
    <section ref="detail" class="detail-wrap">
        <div class="detail-content">
          <div class="detail-left">
            <div class="pic-left">
              <img ref="left" src="../assets/img/company-looks.jpg" alt="">
              <img ref="up" src="../assets/img/about-us-two.jpg" alt="">
            </div>
            <div class="pic-right">
              <img ref="down" src="../assets/img/about-us-three.jpg" alt="">
            </div>
          </div>
          <div ref="fade" class="detail-right" >
            <h3>国科政信科技（北京）股份有限公司</h3>
            <p>国科政信科技（北京）股份有限公司是一家大型软件研发企业。座落在北京市中关村高新科技园区，公司注册资金3000万元。主要从事与军政法系统相关的管理和办公软件的研发，同时还担负国家国防科工局及其他部委部分软件开发重任。拥有工信部经济和信息技术委员会颁发的软件企业认定证书、国家认证高新技术企业、ISO9001质量管理体系认定证书、国家保密局颁发的相关软件涉密资质、国家密码局颁发的商用密码产品销售许可证、公安部颁发的单项销售许可证书、中华人民共和国增值电信业经营许可证、中国人民解放军信息安全评测认证中心颁发的军用信息安全产品认证证书、中国人民解放军总参谋部颁发的军队网络采购资格认证，公司被评为AAA级重合同守信用企业、中关村高新技术企业、产品技术完全拥有自主知识产权。公司员工100%具备学士以上学位，是一支高素质、高学历、年轻有为、经验丰富的软件研发团队。</p>
          </div>
        </div>
      </section>
</template>
<script>
export default {
  mounted () {
    // 添加动画
    this.$refs.detail.style.visibility = 'visible'
    this.$refs.left.setAttribute('class', 'animated bounceInLeft')
    this.$refs.up.setAttribute('class', 'animated bounceInUp')
    this.$refs.down.setAttribute('class', 'animated bounceInDown')
    let fadeClassName = this.$refs.fade.className
    this.$refs.fade.setAttribute('class', `${fadeClassName} animated fadeInDown`)
  }
}
</script>

<style>
 /* 详情模块样式 */
.detail-wrap{
  width: 100%;
  background-color: #f8f8f8;
  visibility: visible;
}
.detail-content{
  width: 1200px;
  margin: 0 auto;
  padding: 70px 80px 70px 20px;
  box-sizing: border-box;
  overflow: hidden;
}
.detail-content .detail-left{
  float: left;
  width: 500px;
  text-align: right;
}
.detail-content .pic-left{
  width: 270px;
  float: left;
}
.detail-content .pic-left img{
  margin-bottom: 20px;
}
.detail-content .pic-right img{
  margin-top: 20px;
}
.detail-content .pic-right{
  width: 200px;
  float: left;
  margin-left: 20px;
}
.detail-content .detail-left img{
  vertical-align: middle;
}

.detail-content .detail-right{
  float: left;
  overflow: hidden;
  width: 510px;
  margin-left: 80px;
}
.detail-content .detail-right h3{
  font-size: 25px;
  line-height: 1.3;
  color: #333;
}
.detail-content .detail-right p{
  margin-top: 30px;
  text-indent: 2em;
  line-height: 2;
  font-size: 14px;
  color: #666;
}
</style>

