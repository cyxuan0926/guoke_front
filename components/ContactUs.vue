<template>
  <section class="contactUs-wrap">
        <div class="contactUs-content">
          <h4>联系我们</h4>
          <p>以数字科技领先全球，用行业服务创造价值</p>
          <ul>
            <li>
              <p>010-82911260</p>
            </li>
            <li>
              <p>010-4565-4454</p>
            </li>
            <li>
              <p>Service@sinog2c.com</p>
            </li>
            <li>
              <p>北京市海淀区西三旗昌临813号A11号楼</p>
            </li>
          </ul>
        </div>
      </section>
</template>
<script>
export default {

}
</script>
<style>
.contactUs-wrap{
  margin-top: 35px;
  width: 100%;
  height: 520px;
  background: url('../assets/img/contact-bg.jpg') no-repeat center center;
  background-size: cover;
}
.contactUs-content{
  width:1200px;
  padding-top: 60px;
  box-sizing: border-box;
  margin: 0 auto;
  text-align: center;
  color: #fff;
}
.contactUs-content h4{
  font-weight: normal;
  font-size: 28px;
  letter-spacing: 0.3em;
}
.contactUs-content>p{
  margin-top: 20px;
  font-size: 15px;
}
.contactUs-content ul{
  width: 630px;
  margin: 100PX auto 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.contactUs-content li{
  width: 50%;
  text-align: left;
  height: 50px;
  line-height: 50px;
  padding-left: 40px;
  box-sizing: border-box;
  
}
.contactUs-content li:nth-last-of-type(4){
  background: url('../assets/img/phone.png') no-repeat left center;
  background-size: 10%;
}
.contactUs-content li:nth-last-of-type(3){
  background: url('../assets/img/fax.png') no-repeat left center;
  background-size: 10%;
}
.contactUs-content li:nth-last-of-type(2){
  background: url('../assets/img/email.png') no-repeat left center;
  background-size: 10%;
}
.contactUs-content li:nth-last-of-type(1){
  background: url('../assets/img/contact-add.png') no-repeat left center;
  background-size: 10%;
}
</style>


