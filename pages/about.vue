<template>
  <div class="about">
    <public-header/>
    <public-nav />
    <child-banner :childBanner='childBanner'/>
    <Detail/>
    <ul class="note-list">
      <li>
        <h3>我们的团队</h3>
        <p> 国科政信拥有一支由高学历、高素质人才组成的创业团队，作为国内首批从事司法信息化建设的团队，见证了司法信息化的快速发展积累了丰富的司法行业的运营经验，形成了科学的管理体系。团队成员年轻而充满朝气，具有创新的精神和务实的态度，并勇于迎接挑战。我们相信，务实造就成功，创新成就未来。国科政信正同用户携手，满怀热情，不断实现着新的梦想</p>
        <div class="note-list--mark"></div>
      </li>
      <li>
        <h3>我们的使命</h3>
        <p>国科政信以创新的精神、务实的态度，致力推动司法信息化的建设。国科政信致力于在国家自主可控政策的指引下，充分利用互联网云计算、大数据等新型技术，“以客户为中心，以服务为导向”，打造企业信息化融合服务平台，使IT应用推动社会的发展，实现企业客户的信息化需求</p>
        <div class="note-list--mark"></div>
      </li>
      <li>
        <h3>我们的坚持</h3>
        <p>国科政信一直坚持聚焦在主航道，抵制一切诱惑；坚持不走捷径，拒绝机会主义，踏踏实实，长期投入，厚积薄发；坚持以客户为中心，以奋斗者为本，长期艰苦奋斗，坚持自我批判。
          国科政信不会辜负时代慷慨赋予我们的历史性机遇，以引领司法信息化建设为目标, 一往无前</p>
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
  width: 875px;
  margin: 0 auto;
  line-height: 22px;
  font-size: 14px;
}
</style>
