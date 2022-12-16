<template>
  
  <div class="card-box" :style="{'height' :cardHeight, }">

    <!-- 旋转卡片 -->
    <div class="card-rotate-box" v-if="!isFinishRotate">
        <div 
        v-for="(item,index) in 12"
        :key="index"
        :class="['rotate-item',{
            'rotate-left': (index + 1) % 2 == 0,  
            'rotate-right': (index + 1) % 2 != 0  
        }]"
        :style="{
        'animation-delay':`${(index+1) * 0.166667}s`,
        'z-index':12-index,
        }"
        ></div>
    </div>



    <!-- u盘卡片 -->
    <div class="u-card-box" v-if="isFinishRotate">
        <div class="card-title">凭直觉抽取3张牌</div>
        <div class="u-card-list-box">
            <div class="u-card-list">
                <div
                v-for="(item,index) in cardList" 
                :key="index"
                :class="['u-card-item',
                {'active1':item.num == 1,'active2':item.num == 2,'active3':item.num == 3}
                ]" 
                @click="selectCard(index)"
                :style="{
                'z-index':index + 1,
                'top':index >= 16 ? (index >= 36 ? (52-index) * 11.25 / 37.5 + 'rem' : (index * 1 + 167) / 37.5 +'rem') : index * 11.25/ 37.5 + 'rem', 
                'transform':index >= 16 ? (index >= 36 ? `rotate(90deg)` : `rotate(-${(index - 16) * 9.6 + 90}deg)`) : 'rotate(-90deg)',   
                'animation-delay':`${index * 0.05}s`,
                }"
                >
                    <div class="show-card"></div>
                    <div class="hiddle-card" ></div>
                </div>
            </div>
        </div>
    </div>



    <!-- 三个空位 -->
    <div class="vacancy-box">
     <!-- 提示 -->
    <div class="card-tip" v-if="!isShowVacancy && isFinishRotate">
        <p>集中精神</p>
        <p>你的思想会决定抽牌效果</p>
    </div>
        
        <div class="vacancy-content" v-if="isShowVacancy">
            <div class="vacancy-item" >
                <span>感情发展建议</span>
                <div class="img">
                    <img src="" alt="">
                </div>
            </div>
            <div class="vacancy-item">
                <span>赚钱秘籍锦囊</span>
                <div class="img">
                    <img src="" alt="">
                </div>
            </div>
            <div class="vacancy-item">
                <span>事业发展方案</span>
                <div class="img">
                    <img src="" alt="">
                </div>
            </div>
        </div>
    </div>

    <!-- 已经被点击过的就禁止点击,防止动画过程用户再次点击 -->
    <!-- 遮罩层 -->
    <div class="mask-box" v-if="isActive"></div>

  </div>

</template>

<script>
import {cardList} from "@/static/cardList"
// cardList 需要两个参数 isSelect num 
export default {
    name:"CardView",
    data(){
        return {
            cardHeight : 0,
            cardList:cardList,
            cardNum:0,
            // 已经被点击过的就禁止点击,防止动画过程用户再次点击到已经点击的
            isActive:false,
            isShowVacancy:false,
            isFinishRotate:false
        }
    },
    created(){
        // 显示三个空位
        setTimeout(() => {
            this.isShowVacancy = true
        }, 6000);

        this.cardHeight = window.innerHeight + 'px'
        this.cardList = this.cardList.map(item=>{
            item['num'] = 0
            return item
        })
        // 停止洗牌
        setTimeout(() => {
            this.isFinishRotate = true
        }, 3000);
    },
    methods:{
        selectCard(id){
            this.isActive = true
            setTimeout(() => {
                this.isActive = false
            }, 2100);
            if(this.cardNum >= 2){
                setTimeout(() => {
                    this.$router.push("/unlock")
                }, 2300);
            }
            if(this.cardNum >= 3){   
                return ;
            }
            this.cardNum += 1
            this.cardList = this.cardList.map((item,index)=>{
                if(index == id){
                    item.isSelect = true
                    if(this.cardNum==1){
                        item.num ++;
                    }
                    if(this.cardNum==2){
                        item.num += 2;
                    }
                    if(this.cardNum==3){
                        item.num += 3;
                    }
                }
                return item
            })
            
        }
    }
}
// 73  115
</script>

<style lang="scss" scoped>
.card-tip{
    p{
        font-size: 20px;
        color: #d6b47d;
        text-align: center;
    }
}
.mask-box{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99999;
    background-color: transparent;
}
@keyframes downCard1 {
    0%{
        // transform: translateY(45%) rotate(0deg) scale(2.8) ;
        top: 260px;
    }
    20%{
        transform: translateY(45%) rotate(0deg) scale(2.8) ;
        top: 333px ;
        z-index: 999;
    }
    70%{
        transform: translateY(45%) rotateY(180deg) scale(2.8) ;
        top: 333px ;
        z-index: 999;
    }
    100%{
        transform: translateY(45%) rotateY(180deg) scale(1.5) translateX(76.5px) translateY(123.5px);
        top: 333px ;
        z-index: 999;
    }
}
@keyframes downCard2 {
    0%{
        // transform: translateY(45%) rotate(0deg) scale(2.8) ;
        top: 260px;
    }
    20%{
        transform: translateY(45%) rotate(0deg) scale(2.8) ;
        top: 333px ;
        z-index: 999;
    }
    70%{
        transform: translateY(45%) rotateY(180deg) scale(2.8) ;
        top: 333px ;
        z-index: 999;
    }
    100%{
        transform: translateY(45%) rotateY(180deg) scale(1.5) translateX(1px) translateY(123.5px);
        top: 333px ;
        z-index: 999;
    }
}
@keyframes downCard3{
    0%{
        // transform: translateY(45%) rotate(0deg) scale(2.8) ;
        top: 260px;
    }
    20%{
        transform: translateY(45%) rotate(0deg) scale(2.8) ;
        top: 333px ;
        z-index: 999;
    }
    70%{
        transform: translateY(45%) rotateY(180deg) scale(2.8) ;
        top: 333px ;
        z-index: 999;
    }
    100%{
        transform: translateY(45%) rotateY(180deg) scale(1.5) translateX(-76.5px) translateY(123.5px);
        top: 333px ;
        z-index: 999;
    }
}
    .active1{
        // transform: translateY(45%) rotate(0deg) scale(2.8) ; 
        // // top: 20% ;
        // animation-delay: 0.4s ;
        // z-index: 80; 
        // transition: all 1s;
        cursor: default;
        pointer-events: none;
        animation: downCard1 2s linear .01s normal forwards !important;
    }
    .active2{
        cursor: default;
        pointer-events: none;
        animation: downCard2 2s linear .01s normal forwards !important;
    }
    .active3{
        cursor: default;
        pointer-events: none;
        animation: downCard3 2s linear .01s normal forwards !important;
    }

.vacancy-box{
    margin-top: 399px;
    .vacancy-content{
    width: 100%;
    display: flex;
    padding: 0px 23px;
    justify-content: space-between;

    }
    .vacancy-item{
        width: 102px;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: default;
        pointer-events: none;
        span{
            font-size: 12px;
            color: #d6b47d;
        }
        .img{
            width: 65px;
            margin-top: 5px;
            height: 102px;
            background:url("../assets/images/purple.png") no-repeat center center / 100%;
        }
    }
}
@keyframes show {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
.u-card-list-box{
    width: 100%;
    position: fixed;
    top: -5%;
    left: 0;
}
.u-card-list{
    width: 100%;
    padding: 0px 48px;
    position: relative;
    .u-card-item{
        transform-origin: bottom;
        width: 47px;
        height: 137px;
        display: flex;
        flex-direction: column;
        position: absolute;
        align-items: center;
        left: calc(50% - 23px);
        animation: show .5s ease 0 normal backwards;
        .show-card{
            width: 41px;
            height: 63px;
            background: url("../assets/images/card-1.png") no-repeat center center /100% 100%;
        }
        .hiddle-card{
            flex-grow: 1;
        }
    }
}

.u-card-box{
    width: 100%;
    .card-title{
        width: 100%;
        text-align: center;
        font-size: 18px;
        color: #d6b47d;
        margin: 23px 0px; 
    }
}


@keyframes rotateLeft {
    0%{
        transform: rotate(0) ;
    }
    10%{
        left: calc(50% - 25px);
    }
    50%{
        left: 20%;
        // z-index: 13;
        // top: 53%;
    }
    90%{
        left: calc(50% - 25px);
        z-index: 13;
    }
    100%{
        left: calc(50% - 25px);
        transform: rotate(360deg) ;
    }
}
.rotate-left{
    animation: rotateLeft 1s ease-in-out .01s backwards ;;
}
@keyframes rotateRight {
    0%{
        transform: rotate(0);
    }
    10%{
        left: calc(50% - 25px);
    }
    50%{
       left:70%;
        // z-index: 13;
        // top: 56%;
    }
    90%{
        left: calc(50% - 25px);
        // z-index: 13;
    }
    100%{
        left: calc(50% - 25px);
        transform: rotate(360deg);
    }
}
.rotate-right{
    animation: rotateRight 1s ease-in-out .01s backwards ;;
}
.card-rotate-box{
    width: 100%;
    height: 100px;
    position: relative;
    margin-top: 251px;
    display: flex;
    justify-content:center;
    .rotate-item{
        position: absolute;
        // left: calc(50% - 25px);
        // right: 0;
        width: 50px;
        height: 72px;
        background: url("../assets/images/card-1.png") no-repeat center center/100% 100%;
        transition: all 1s;
        // animation: rotateRight 2s ease-in-out .01s backwards ;
        animation-direction:normal;
    }
}

.card-box{
    overflow: hidden;
    width: 100%;
    background: url("../assets/images/star-bg.png") no-repeat center top / 100%;
    background-color: #422046;
}
</style>