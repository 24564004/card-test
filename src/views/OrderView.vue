<template>
  
  <div class="order-box">

    <div class="order-header">
        <img src="../assets/images/order-header.png">
    </div>
    <div class="order-search">
        <p class="tip">您可以输入订单号找回丢失的订单哦！</p>
        <div class="search-box">
            <div class="search-text">订单号</div>
            <div class="search-input">
                <input v-model="searchValue" placeholder="请输入订单号" type="text">
            </div>
        </div>
        <button @click="searchOrder">查询</button>
    </div>

    <div class="order-list">
        <div class="order-item" v-for="(item,index) in 3" :key="index">
            <div class="order-time">
                下单时间: 2022-12-15 14:06:31
            </div>
            <div class="order-content">
                <div class="order-type row">
                    <div class="text">订单类型</div>
                    <div class="value">塔罗测试</div>
                </div>
                <div class="order-num row">
                    <div class="text">订单号码</div>
                    <div class="value">1603270254633619456</div>
                </div>
                <div class="order-origin row">
                    <div class="text">原价</div>
                    <div class="value">138元</div>
                </div>
                <div class="order-money row">
                    <div class="text">支付价格</div>
                    <div class="value">29.9元</div>
                </div>
                <div class="order-status row">
                    <div class="text">支付状态</div>
                    <div class="value">待支付</div>
                </div>
            </div>
            <button class="order-pay">立即支付</button>

        </div>
    </div>

    <div class="order-footer">
        <div class="teacher">
            <div class="left"></div>
            <div class="middle">好名网合作老师团队倾力打造</div>
            <div class="right"></div>
        </div>
        <div class="service">
            <div class="service-icon"></div>
            <div class="service-text">联系专属售后客服</div>
        </div>
        <img src="../assets/images/integrity1.png" class="integrity"/>
        <img src="../assets/images/ali.png" class="ali">
    </div>
    

    <div class="back-icon" @click="backHome">
        <img src="../assets/images/back.png">
    </div>

  </div>

</template>

<script>
export default {
    name:"OrderView",
    data(){
        return{
            searchValue:"",
            orderList:[]
        }
    },
    watch:{
        searchValue(newV){
            if(newV == ''){
                // 获取订单
            }
        }
    },
    methods:{
        // 查询订单
        searchOrder(){
            if(this.searchValue.length == 0 || this.searchValue == ''){
                return;
            }

        },
        backHome(){
            this.$router.back()
        }
    }
}
</script>

<style lang="scss" scoped>
.back-icon{
    width: 61px;
    height: 61px;
    position: fixed;
    bottom: 89px;
    right: 11.5px;
    img{
        width: 100%;
    }
}
.order-footer{
    background-color: #f5f5f8;
    width: 100%;
    padding-bottom: 30px;
    .integrity{
        display: block;
        width: 179px;
        margin: 0 auto;
    }
    .ali{
        width: 297px;
        display: block;
        margin:  0 auto;
        margin-top: 10px;

    }
    .service{
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 10px;
        .service-icon{
            background: url("../assets/images/service.png") no-repeat center center/100%;
            width: 16px;
            height: 16px;
        }
        .service-text{
            margin-left: 5px;
            color: #941b1e;
            text-decoration: underline;
        }
    }

    .teacher{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .left{
            width: 73px;
            height: 10px;
            background: url("../assets/images/foot-left.png") no-repeat center center/100%;
        }
        .right{
            width: 73px;
            height: 10px;
            background: url("../assets/images/foot-right.png") no-repeat center center/100%;
        }
        .middle{
            margin: 0px 8.5px;
        }
    }


}
.order-pay{
    width: 100%;
    height: 48px;
    border-radius: 48px;
    text-align: center;
    line-height: 48px;
    border: 3px solid #ca8d8f;
    background-color: #ffffff;
    color: #941b1e;
    font-size: 16px;
}
.order-list{
    width: 100%;
    background-color: #f5f5f8;
    padding: 0px 15px;
    overflow: hidden;
    padding-bottom: 15px;
    .order-item{
        color: #4a4a4a;
        width: 100%;
        background-color:#ffffff;
        border-radius: 15px;
        margin-top: 15px;
        padding: 0px 10px;
        padding-bottom: 15px;
        .row{
            display: flex;
            height: 20px;
            margin-top: 5px;
            .text{
                width: 60px;
                flex-basis: 60px;
                text-align: justify;
                text-align-last: justify;
                margin-right: 23px;
            }
            .value{
                flex-grow: 1;
            }
        }

        .order-time{
            padding: 15px 0px;
        }
        .order-content{
            padding-top: 10px;
            padding-bottom: 15px;
        }
    }
}

.order-search{
    padding: 0px 15px;

    width: 100%;
    // margin-bottom: 15px;
    padding-bottom: 20px;
    button{
        width: 100%;
        height: 44px;
        border-radius: 44px;
        line-height: 44px;
        color: white;
        background-color: #941b1e;
        font-size: 16px;
        text-align: center;
    }
    .tip{
        width: 100%;
        color: #9b9b9b;
        margin-top: 11px;
        margin-bottom: 10px;
    }
    .search-box{
        width: 100%;
        height: 49px;
        padding: 0px 15px;
        display: flex;
        border-radius: 49px;
        background-color: #f4f4f4;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 15px;
        .search-text{
            width: 55px;
            font-weight: 600;
        }
        .search-input{
            flex-grow: 1;
            input{
                width: 100%;
                height: 24px;
                background-color: #f4f4f4;
            }
        }
    }

}
.order-list{
    width: 100%;
}

.order-box{
    width: 100%;
    font-size: 14px;
    .order-header{
        width: 310px;
        margin: 0 auto;
        img{
            width: 100%;
        }
    }

}
</style>