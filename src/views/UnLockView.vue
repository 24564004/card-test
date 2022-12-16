<template>
  
  <div class="unlock-box">

    <div class="unlock-title">
        <img src="../assets/images/lock-title.png">
    </div>

    <div class="three-card-box">
        <p class="tip-title">亲爱的 : </p>
        <p class="tip-content">生活和塔罗牌图案之间的关联在于它们之间相同的意义，人生不同境遇的体验，会有相应的塔罗牌来描述。我们将透过你所选择的3张牌，给予进一步的剖析…</p>
        <div class="three-card">
            <div class="card-item" v-for="(item,index) in 3" :key="index">
                <span class="vacancy-name">感情发展建议</span>
                <img src="../assets/images/xingxing.png" alt="">
                <div class="card-name">倒吊人</div>
                <div class="card-description">(正位)</div>
            </div>
        </div>
        <div class="tip-img">
            <img  src="../assets/images/lock-tip.png">
        </div>
    </div>

    <div class="pay-demo-box">
        <div class="pay-header">付费项目,塔罗测试</div>

        <div class="pay-main-box">
            <div class="pay-main">
                <div class="pay-money">
                    <div class="discounts">限时优惠:  ￥29.90元</div>
                    <div class="origin-cost">原价: <span style="text-decoration:line-through">￥138.00元</span></div>
                </div>
                <div class="pay-time">
                    <div class="time-text">距优惠结束</div>
                    <div class="time-num">{{timeDown}}</div>
                </div>
            </div>

            <p style="margin-top:15px;font-size:12px;text-align:center">报告生成后，只有您自己能查看，请放心领取！</p>
            <div class="pay-methods">
                <div class="wx-pay">
                    <img src="../assets/images/wx.png">
                    <span>点此微信支付</span>
                </div>
                <div class="zfb-pay">
                    <img src="../assets/images/zfb.png">
                    <span>点此支付宝支付</span>
                </div>
            </div>
            <div class="pay-brand">
                <div class="pay-icon">
                    <img src="../assets/images/brand.png">
                </div>
                <div class="pay-text">支付系统已经经过安全联盟认证请放心使用</div>
            </div>
        </div>
    </div>

    <!-- 爱情 -->
    <div class="love-parse-box">
        <div class="love-icon"></div>
        <div class="card-info">
            <div class="card-img">
                <img src="../assets/images/xingxing.png" alt="">
            </div>
            <div class="card-name">倒吊人 (正位)</div>
        </div>
        <div class="card-understand">
            <div class="understand-title">牌面理解</div>
            <div class="understand-text">吊人是为集体无意识的牲礼，我们可以看到被倒吊的年轻人，他的身体被绑在树上，但是他脸上的表情并不痛苦，反而发出沉着、顺从而坚忍的光芒，树代表生命无穷的力量，他脚弓成的形状，代表物质的无意识，而他手背成的形状代表精神决心，他头上的光圈，代表黑暗中的光芒，吊人就像树木耐心地挺过整个冬天，而土地会补足养分供春夏备用，“牺牲”为特性。卡在对物质的忧虑中，或逃避进一步发展的需求；这是暂停下来反思的时间，到底是什么执念阻碍了进一步的突破。本质上，吊人要求臣服于相反的观点，翻转意识，想象不同。</div>
        </div>
        <div class="future-status">
            <div class="status-title">未来感情状况</div>
            <div class="status-text">
                <div class="status-content">
                    <p>如何获得爱情？</p>
                    <p>如何让感情健康平稳的发展？</p>
                    <p>未来感情之路是否平顺？</p>
                </div>
            </div>
        </div>
        <div class="lock-button love-lock-button">
            <div class="lock-icon"></div>
            <div class="lock-text">立即解锁完整解析</div>
        </div>
    </div>

    <!-- 财富 -->
    <div class="treasure-parse-box">
        <div class="treasure-icon"></div>
        <div class="card-info">
            <div class="card-img">
                <img src="../assets/images/xingxing.png" alt="">
            </div>
            <div class="card-name">倒吊人 (正位)</div>
        </div>
        <div class="card-understand">
            <div class="understand-title">牌面理解</div>
            <div class="understand-text">吊人是为集体无意识的牲礼，我们可以看到被倒吊的年轻人，他的身体被绑在树上，但是他脸上的表情并不痛苦，反而发出沉着、顺从而坚忍的光芒，树代表生命无穷的力量，他脚弓成的形状，代表物质的无意识，而他手背成的形状代表精神决心，他头上的光圈，代表黑暗中的光芒，吊人就像树木耐心地挺过整个冬天，而土地会补足养分供春夏备用，“牺牲”为特性。卡在对物质的忧虑中，或逃避进一步发展的需求；这是暂停下来反思的时间，到底是什么执念阻碍了进一步的突破。本质上，吊人要求臣服于相反的观点，翻转意识，想象不同。</div>
        </div>
        <div class="future-status">
            <div class="status-title">未来财富机遇</div>
            <div class="status-text">
                <div class="status-content">
                    <p>你会有更好的赚钱机会？</p>
                    <p>应该实施怎样的财务策略？</p>
                </div>
            </div>
        </div>
        <div class="lock-button">
            <div class="lock-icon"></div>
            <div class="lock-text">立即解锁完整解析</div>
        </div>
    </div>



    <!-- 事业 -->
    <div class="cause-parse-box">
        <div class="cause-icon"></div>
        <div class="card-info">
            <div class="card-img">
                <img src="../assets/images/xingxing.png" alt="">
            </div>
            <div class="card-name">倒吊人 (正位)</div>
        </div>
        <div class="card-understand">
            <div class="understand-title">牌面理解</div>
            <div class="understand-text">吊人是为集体无意识的牲礼，我们可以看到被倒吊的年轻人，他的身体被绑在树上，但是他脸上的表情并不痛苦，反而发出沉着、顺从而坚忍的光芒，树代表生命无穷的力量，他脚弓成的形状，代表物质的无意识，而他手背成的形状代表精神决心，他头上的光圈，代表黑暗中的光芒，吊人就像树木耐心地挺过整个冬天，而土地会补足养分供春夏备用，“牺牲”为特性。卡在对物质的忧虑中，或逃避进一步发展的需求；这是暂停下来反思的时间，到底是什么执念阻碍了进一步的突破。本质上，吊人要求臣服于相反的观点，翻转意识，想象不同。</div>
        </div>
        <div class="future-status">
            <div class="status-title">未来事业发展情况</div>
            <div class="status-text">
                <div class="status-content status-content-cause">
                    <p>你将会遇到的职场困境是什么？</p>
                    <p>如何解决职场困难和人际关系？</p>
                    <p>升职加薪何时才能到来？</p>
                    <p>怎样提升自我，获取成功？</p>
                </div>
            </div>
        </div>
        <div class="lock-button">
            <div class="lock-icon"></div>
            <div class="lock-text">立即解锁完整解析</div>
        </div>
    </div>

    <div class="integrity-box">
        <img class="integrity1" src="../assets/images/integrity1.png">
        <img class="integrity2" src="../assets/images/integrity2.png">
    </div>

    <div class="pay-all-content-box" v-if="isShowPayAllBtn">
        <div class="pay-all">付费解锁全部内容</div>
    </div>


  </div>

</template>

<script>
export default {
    name:"UnLockView",
    data(){
        return {
            timeDown : '',
            oldtime:new Date().setDate(new Date().getDate() + 1),
            isShowPayAllBtn : false
        }
    },
    methods:{
        timeDownFunc() {
            var newtime = new Date();
            var time = (this.oldtime - newtime) / 1000;
            // var d = parseInt(time / (60 * 60 * 24));
            var h = parseInt(time / 60 / 60 % 24);
            var m = parseInt(time / 60 % 60);
            var s = parseInt(time % 60);
            h = h >= 10 ? h : '0' + h
            m = m >= 10 ? m : '0' + m
            s = s >= 10 ? s : '0' + s
            return h + " : " + m + " : " + s;
        }
    },

    created(){
        if(!this.timeDown){
            this.timeDown = '23 : 59 : 59'
        }
        setInterval(() => {
             this.timeDown = this.timeDownFunc()
        }, 1000);
    },
    mounted(){
        this.$nextTick(()=>{
           let btn = document.querySelector(".love-lock-button")
           let loveButtonTop = btn.offsetTop + 200
            window.addEventListener('scroll',()=>{
                if(window.scrollY >= loveButtonTop){
                    this.isShowPayAllBtn = true
                }else{
                    this.isShowPayAllBtn = false
                }
            })
        })
    }
}
</script>

<style lang="scss" scoped>
.pay-all-content-box{
    background-color: #422146;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 7.5px 15px;
    .pay-all{
        background-image: linear-gradient(0deg,#cda86d,#d6b47d);
        height: 47px;
        border-radius: 47px;
        font-weight: 600;
        text-align: center;
        line-height: 47px;
        color: #181727;
        font-size: 18px;
    }
}
.integrity-box{
    width: 100%;
    padding-top: 26px;
    padding-bottom: 30px;
    text-align: center;
    .integrity1{
        width: 179px;
    }
    .integrity2{
        width: 298px;
        margin-top: 15px;
    }
}
.status-content-cause{
    height: 110px !important;
}
.lock-button{
    width: 300px;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 47px;
    margin: 0 auto;
    margin-top: 20px;
    background-image: linear-gradient(0deg,#cda86d,#d6b47d);
    .lock-icon{
        background: url("../assets/images/lock-icon.png") no-repeat center center / 100%;
        width: 17px;
        height: 17px;
    }
    .lock-text{
        font-size: 18px;
        font-weight: 600;
        color: #181727;
    }
}

.future-status{
    width: 100%;
    margin-top: 20px;
    .status-title{
        color:#d6b47d ;
        font-size: 17px;
    }
    .status-text{
        margin-top: 10px;
        width: 100%;
        height: 132px;
        display:flex;
        align-items: center;
        background: url("../assets/images/mohu.png") no-repeat center center / 100%;
        .status-content{
            padding: 10px 0;
            width: 260px;
            height: 88px;
            border-radius: 5px;
            background-color: #cfa5c7;
            color: #522c57;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            p{
                text-align: center;
                font-size: 16px;
                font-weight: 600;
            }
        }
    }
}

.card-understand{
    width: 100%;
    margin-top: 22.5px;
    .understand-title{
        width: 100%;
        color:#d6b47d ;
        font-size: 17px;
    }
    .understand-text{
        margin-top: 10px;
        font-size: 14px;
        color: #cfa5c7;
    }
}
// 事业
.cause-parse-box{
    width: 100%;
    padding: 0px 15px;
    margin-top: 27px;
    border:1px dashed  #a2b7f1 ;
    padding-bottom: 30px;
    position: relative;
    border-radius: 10px;
    .cause-icon{
        position: absolute;
        left: calc(50% - 75px);
        top: -15px;
        width: 150px;
        height: 28px;
        background: url("../assets/images/cause-icon.png") no-repeat center center /100%;
    }
    .card-info{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
        .card-img{
            width: 77px;
            img{
                width: 100%;
            }
        }
        .card-name{
            color: #cfa5c7;
            height: 21px;
            background-color: rgba(207,165,199,.2);
            text-align: center;
            line-height: 21px;
            padding: 0px 8.5px;
            font-size: 12px;
            border-radius: 21px;
        }
    }
}

// 财富
.treasure-parse-box{
    width: 100%;
    padding: 0px 15px;
    margin-top: 27px;
    border:1px dashed  #d6b47d ;
    padding-bottom: 30px;
    position: relative;
    border-radius: 10px;
    .treasure-icon{
        position: absolute;
        left: calc(50% - 75px);
        top: -15px;
        width: 150px;
        height: 28px;
        background: url("../assets/images/treasure-icon.png") no-repeat center center /100%;
    }
    .card-info{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
        .card-img{
            width: 77px;
            img{
                width: 100%;
            }
        }
        .card-name{
            color: #cfa5c7;
            height: 21px;
            background-color: rgba(207,165,199,.2);
            text-align: center;
            line-height: 21px;
            padding: 0px 8.5px;
            font-size: 12px;
            border-radius: 21px;
        }
    }
}

// 爱情
.love-parse-box{
    width: 100%;
    padding: 0px 15px;
    margin-top: 27px;
    border:1px dashed #f17f6f ;
    padding-bottom: 30px;
    position: relative;
    border-radius: 10px;
    .love-icon{
        position: absolute;
        left: calc(50% - 75px);
        top: -15px;
        width: 150px;
        height: 28px;
        background: url("../assets/images/love.png") no-repeat center center /100%;
    }
    .card-info{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
        .card-img{
            width: 77px;
            img{
                width: 100%;
            }
        }
        .card-name{
            color: #cfa5c7;
            height: 21px;
            background-color: rgba(207,165,199,.2);
            text-align: center;
            line-height: 21px;
            padding: 0px 8.5px;
            font-size: 12px;
            border-radius: 21px;
        }
    }
}

.pay-brand{
    width: 100%;
    margin-top: 20px;
    .pay-icon{
        height: 29px;
        text-align: center;
        line-height: 29px;
        img{
            width: 250px;
        }
    }
    .pay-text{
        width: 100%;
        text-align: center;
        font-size: 12px;
        color: #00b30d;
        margin-top: 5px;
    }
}
.pay-methods{
    width: 100%;
    .zfb-pay{
        background-color: #02a9f0;
        margin-top: 10px;
        width: 100%;
        height: 48px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        img{
            width: 25px;
            height: 21px;
        }
        span{
            font-size: 18px;
            font-weight: bold;
            margin-left: 10px;
        }
    }
    .wx-pay{
        background-color: #00b30d;
        width: 100%;
        height: 48px;
        color: white;
        margin-top: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        img{
            width: 25px;
            height: 21px;
        }
        span{
            margin-left: 10px;
            font-size: 18px;
            font-weight: bold;
        }
    }

}
.pay-demo-box{
    width: 100%;
    border-radius: 10px;
    margin-top: 15px;
    background-color: #ffffff;
    .pay-main-box{
        width: 100%;
        background-color: #ffffff;
        border-radius: 10px;
        padding: 20px 15px;
    }
    .pay-main{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .pay-time{
            width: 79px;
            .time-text{
                font-size: 15px;
            }
            .time-num{
                color: #f13c4c;
                font-size: 15px;
                width: 100%;
            }
            
        }
        .pay-money{
            width: 161px;
            .discounts{
                height: 30px;
                width: 100%;
                padding: 0px 6px;
                line-height: 30px;
                background-color: #f13c4c;
                color: white;
                border-radius: 5px;
                font-size: 16px;
            }
            .origin-cost{
                width: 100%;
                color: #919ba2;
                font-size: 15px;
                margin-top: 4px;
            }
        }
    }
    .pay-header{
        width: 100%;
        border-radius: 10px 10px 0px 0px;
        background-color: #cfa5c7;
        height: 44px;
        text-align: center;
        line-height: 44px;
        font-size: 16px;
        font-weight: bolder;
    }
}

.three-card-box{
    width: 100%;
    padding: 10px;
    padding-bottom: 20px;
    font-size: 14px;
    color: #cfa5c7;
    border: 1px dashed rgba(207,165,199,.46);
    border-radius: 10px;
    background-color: rgba(82,44,87,.59);
    text-align: justify;
    .three-card{
        display: flex;
        margin-top: 20px;
        justify-content: space-between;
        .card-item{
            font-size: 13px;
            flex-basis: 0;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            .card-description{
                font-size: 13px;
            }
            .card-name{
                line-height: 20px;
            }
            .vacancy-name{
                color: #d6b47d;
                margin-bottom: 10px;
            }
            img{
                width: 77px;
                height: 122px;
            }
        }
    }
    .tip-img{
        width: 277px;
        text-align: center;
        margin:  0 auto;
        margin-top: 20px;
        img{
            width: 100%;
        }
    }
    .tip-title{
        line-height: 20px;
        margin-bottom: 5px;
    }
    .tip-content{
        line-height: 20px;
        -webkit-text-size-adjust:100%;
    }
}
.unlock-title{
    width: 106px;
    margin: 20px auto;
    text-align: center;
    margin-bottom: 18px;
    height: 40px;
    img{
        width: 100%;
    }
}
.unlock-box{
    overflow: hidden;
    padding: 0px 15px;
    width: 100%;
    background: url("../assets/images/star-bg.png") no-repeat center top /100%;
    background-color: #422046;
    padding-bottom: 50px;
}
</style>