<template>
  <div class="about">
    <public-header/>
    <public-nav />
    <child-banner :childBanner='childBanner'/>
    <Detail/>
    <ul class="note-list">
      <li>
        <h3>我们的征程</h3>
        <p>国科政信科技（北京）股份有限公司是一家大型软件研发企业。座落在北京市中关村高新科技园区，公司注册资金3000万元。主要从事与军政法系统相关的管理和办公软件的研发，同时还担负国家国防科工局及其他部委部分软件开发重任。</p>
        <div class="note-list--mark"></div>
      </li>
      <li>
        <h3>我们的责任</h3>
        <p> 国科政信科技（北京）股份有限公司是一家大型软件研发企业。座落在北京市中关村高新科技园区，公司注册资金3000万元。主要从事与军政法系统相关的管理和办公软件的研发，同时还担负国家国防科工局及其他部委部分软件开发重任。</p>
        <div class="note-list--mark"></div>
      </li>
      <li>
        <h3>我们的合作伙伴</h3>
        <p>国科政信科技（北京）股份有限公司是一家大型软件研发企业。座落在北京市中关村高新科技园区，公司注册资金3000万元。主要从事与军政法系统相关的管理和办公软件的研发，同时还担负国家国防科工局及其他部委部分软件开发重任。</p>
        <div class="note-list--mark"></div>
      </li>
    </ul>
    <contact-us/>
    <public-footer />
  </div>
</template>

<script>
import PublicHeader from '../components/PublicHeader'
import PublicNav from '../components/PublicNav'
import ChildBanner from '../components/ChildBanner'
import Detail from '../components/Detail'
import ContactUs from '../components/ContactUs'
import PublicFooter from '../components/PublicFooter'

export default {
  data () {
    return {
      childBanner: {
        theme: 'about',
        text: '关于我们'
      }
    }
  },
  components: {
    'public-header': PublicHeader,
    'public-nav': PublicNav,
    'public-footer': PublicFooter,
    'child-banner': ChildBanner,
    'contact-us': ContactUs,
    Detail
  }
}
</script>

<style scoped>
.about{
  background: #fff;
}
.note-list{
  width: 100%;
  margin-bottom: 82px;
}
.note-list li{
  padding-top: 98px;
  width: 100%;
  height: 288px;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
}
.note-list li:nth-of-type(1){
  background:url('../assets/img/note-list-one.jpg') no-repeat center center;
}
.note-list li:nth-of-type(2){
  color: #333;
}
.note-list li:nth-of-type(3){
  background:url('../assets/img/note-list-two.jpg') no-repeat center center;
}
.note-list li h3{
  font-size: 28px;
  letter-spacing: 10px;
  line-height: 37px;
  padding-bottom: 21px;
  font-weight: normal;
}
.note-list li p{
  width: 820px;
  margin: 0 auto;
  line-height: 22px;
  font-size: 14px;
}
</style>