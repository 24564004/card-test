<template>
  <div class="home-box">

      <!-- 警告 -->
      <div class="notice-box">
        <div class="notice-text">内容纯属娱乐，暂不向未满18岁⻘少年提供服务。本网页数据安全由阿里云提供，严格按照法律法规和⽤户协议对您的信息进行全⽅位的保护，请放⼼使用！</div>
      </div>

      <!-- 订单提示 -->
      <div class="order-info">
        <div class="order-text">
          <div class="cancel-btn">
            <img src="../assets/images/cancel.png" alt="取消">
          </div>
          <span>你最近有测算订单哦~</span>
        </div>
        <div class="order-look">
          <img @click="enterOrder" src="../assets/images/look.png" alt="立即查看">
        </div>
      </div>

      <div class="card-box">
          <div class="card-content">
              <img class="img-title" src="../assets/images/home-title.png">
              <img class="img-describe" src="../assets/images/home-describe.png">
              <img class="img-card" src="../assets/images/home-card.png">
              <img class="img-describe2" src="../assets/images/home-describe2.png">
              <!-- 开始按钮 -->
              <img @click="enterCardView" class="img-start" src="../assets/images/home-start.png">
          </div>
      </div>

      <div class="company-info">
          <div class="company-title">
            湖北优起量信息技术有限公司宜昌分公司
          </div>
          <div class="company-text">
            湖北优起量信息技术有限公司宜昌分公司,是一家以中华文化为基础的科技与互联网公司。我们秉承"信、德、仁、勇"的优良品质为企业价值观,并致力于为全球亿万热爱塔罗文化的用户提供优质的互联网综合服务。我们的业务包括数字化内容、咨询服务以及创新项目。此外,我们作为中华文化整合传播平台。我们秉持数字工匠精神,希望用数字创新提升每个人的生活品质。自主研发并使用大数据分析和AI人工智能技术等前沿科技将中华文化进行数字化处理,为用户获得更好的产品体验提供有力支撑。我们始终坚守“不忘初心 科技向善”的经营理念,在传承中华文化的道路上,积极关注身、心灵的成长,我们希望在秉承信、德、仁、勇的企业核心价值观和公益理念的基础上,更多的肩负起企业社会责任
          </div>
          <div class="company-address">
            地址:中国(湖北)自贸区宜昌片区港窑路金东山47-3号
          </div>
          <div class="company-phone">
            电话:15927151232
          </div>
          <div class="my-order-btn">
            <span>我的订单</span>
          </div>

      </div>



  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  methods:{
    enterCardView(){
      this.$router.push("/card")
    },
    enterOrder(){
      this.$router.push("/order")
    }
  }
}
</script>
<style lang="scss" scoped>
@keyframes noticeSlider {
  0%{
    transform: translateX(50%);
  }
  100%{
    transform: translateX(-100%);
  }
}
@keyframes startScale {
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.2);
  }
  100%{
    transform: scale(1);
  }
}
.my-order-btn{
  color: #d6b47d;
  text-decoration: underline;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
}

.company-info{
  width: 100%;
  margin-top: 25px;
  padding: 15px 10px 30px;
  font-size: 12px;
  color: #cfa5c7;
  .company-title{
    text-align: center;
    line-height: 20px;
  }
  .company-text{
    line-height: 20px;
  }
  .company-address{
    text-align: center;
    line-height: 20px;
  }
  .company-phone{
    text-align: center;
    line-height: 20px;
  }
}

.card-box{
  background: url("../assets/images/home-bg.png") no-repeat center top / 100%;
  width: 100%;
  border: 0.1px solid transparent;
  .card-content{
    margin-top: 156px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .img-title{
      width: 153px;
    }
    .img-describe{
      width: 231px;
    }
    .img-card{
      width: 305px;
      margin-top: 24px;
    }
    .img-describe2{
      width: 183px;
      margin-top: 24px;
    }
    .img-start{
      width: 231px;
      margin-top: 25px;
      animation: startScale 1.5s linear infinite;
    }
  }
}

.order-info{
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #23101c;
.order-look{
  width: 162px;
  padding: 0px 12px 0px 50px;
  display: flex;
  align-items: center;
  img{
    width: 100%;
  }
}
.order-text{
  display: flex;
  align-items: center;
  span{
    color: white;
    font-size: 15px;
  }
  .cancel-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 50px;
    padding: 0px 9px 0px 12px;
    img{
      width: 100%;
    }
  }
}
}

.home-box{
  background-color: #522c57;
  .notice-box{
    width: 100%;
    height: 16px;
    line-height: 16px;
    overflow: hidden;
    position: relative;
    .notice-text{
      position: absolute;
      white-space: nowrap;
      font-size: 13px;
      color: rgba(255,255,255,0.4);
      animation: noticeSlider 18s linear infinite;
    }
  }

}
</style>
