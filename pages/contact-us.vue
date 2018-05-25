<template>
  <div class="contact-us">
    <public-header/>
    <public-nav />
    <child-banner :childBanner='childBanner' />
    <div class="contact-us--content">
        <baidu-map :scrollwheelzoom=true class='bm-view' :center="center" :zoom="zoom" @ready="handler" ak='U6dZStufA4fU4QMywYWLTEawS1GK027b' >
            <bm-marker  :position="center" class="marker"  >
                <bm-info-window :show=true >国科政信科技(北京)股份有限公司</bm-info-window>
            </bm-marker>
        </baidu-map>
        <ul class="contact-list">
            <li>
                <h4><i class="icon iconfont icon-location"></i>&nbsp;地址</h4>
                <p>国科征信总部</p>
                <p>地址：北京市海淀区西三旗昌临813号A11号楼</p>
                <p>邮政编码：100085</p>
            </li>
            <li>
                <h4><i class="icon iconfont icon-phone"></i>&nbsp;电话</h4>
                <p>联系方式：010-82911260</p>
                <p>董事长办公室：010-82911260 </p>
                <p>产品咨询与购买：010-82911265</p>
                <p>人事行政部：010-82911287</p>
                <p>财务部：010-82911273 </p>
                <p>客服投诉：010-82911285</p>
            </li>
            <li>
                <h4><i class="icon iconfont icon-fax"></i>&nbsp;传真</h4>
                <p>传真：010-62160556 </p>
            </li>
            <li>
                <h4><i class="icon iconfont icon-mail"></i>&nbsp;邮箱</h4>
                <p>服务邮箱：Service@sinog2c.com</p>
            </li>
        </ul>
    </div>
    <public-footer />
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/Map/Map.vue'
import Geolocation from 'vue-baidu-map/components/controls/Geolocation.vue'
import Marker from 'vue-baidu-map/components/overlays/Marker.vue'
import InfoWindow from 'vue-baidu-map/components/overlays/InfoWindow.vue'
import PublicHeader from '../components/PublicHeader'
import PublicNav from '../components/PublicNav'
import ChildBanner from '../components/ChildBanner'
import PublicFooter from '../components/PublicFooter'

export default {
  data () {
    return {
      childBanner: {
        theme: 'contact-us',
        text: '联系我们'
      },
      center: {lng: 0, lat: 0},
      zoom: 3,
      infoWindow: {
        show: true,
        contents: '地址：北京市海淀区西三旗昌临813号京玺文化创意创新园11号楼'
      }
    }
  },
  methods: {
    handler ({BMap, map}) {
      this.center.lng = 116.336383
      this.center.lat = 40.05793
      this.zoom = 15
    }
  },
  components: {
    'public-header': PublicHeader,
    'public-nav': PublicNav,
    'public-footer': PublicFooter,
    'child-banner': ChildBanner,
    'baidu-map': BaiduMap,
    'bm-geolocation': Geolocation,
    'bm-info-window': InfoWindow,
    'bm-marker': Marker
  }
}
</script>

<style>
.BMap_Marker div{
    top: -23px;
    
}
.BMap_Marker img{
    width: 35px!important;
    left: 200px;
}
.contact-us--content img{
    height: auto!important;
}
.bm-view{
    width: 100%;
    height: 500px;
}
.icon{
    font-size: 25px;
    float: left;
}
.contact-us--content{
    width: 1200px;
    margin: 0 auto;
    padding: 70px 15px 100px 15px;
    box-sizing: border-box;
}
.contact-us--content img{
    width: 100%;
    height: 510px;
    vertical-align: middle;
}
.contact-us--content .contact-list{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 50px;
    border: 1px solid #d1d1d1;
    padding: 17px 20px;
}
.contact-us--content .contact-list li{
    width: 266px;
    flex-grow: 1;
    margin: 0 10px;
}
.contact-us--content .contact-list h4{
    height: 39px;
    line-height: 39px;
    border-bottom: 1px solid #d1d1d1;
    margin-bottom: 16px;
    font-size: 14px;
    color: #333;
    font-weight: normal;
}
.contact-us--content .contact-list p{
    font-size: 14px;
    line-height: 20px;
}
.icon-add{
    display: inline-block;
}
</style>


