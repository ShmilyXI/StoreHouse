<template>
  <div id="wrap">
    <!--头部-->
    <header ref="header">
      <!--遮罩层-->
      <div class="headerWrap">
        <!--导航栏-->
        <nav>
          <!--头像-->
          <i class="icon">
            <img src="../images/icon1.jpg" alt="头像">
          </i>
          <!--导航-->
          <ul class="navList">
            <li>
              <a href="javascript:;">首页</a>
            </li>
            <li>
              <a href="javascript:;">首页</a>
            </li>
            <li>
              <a href="javascript:;">首页</a>
            </li>
            <li>
              <a href="javascript:;">首页</a>
            </li>
            <li>
              <a href="javascript:;">首页</a>
            </li>
            <li>
              <a href="javascript:;"><i class="iconfont icon-search"></i></a>
            </li>
            <li>
              <a href="javascript:;"><i class="iconfont icon-me"></i></a>
            </li>
          </ul>
        </nav>
        <!--中间主体区-->
        <div class="box">
          <i class="icon">
            <img src="../images/10.jpg" alt="头像">
          </i>
          <!--标语-->
          <div class="slogan">
            <span>xxxxxxxxxxxxxxxxxx</span>
          </div>
          <ul class="information">
            <li>
              <a href="javascript:;" class="qq"></a>
            </li>
            <li>
              <a href="javascript:;" class="wx"></a>
            </li>
            <li>
              <a href="javascript:;" class="wb"></a>
            </li>
            <li>
              <a href="javascript:;" class="bl"></a>
            </li>
          </ul>
        </div>
        <div class="wave">
          <i class="wave1" ref="wave1"></i>
          <i class="wave2" ref="wave2"></i>
        </div>
      </div>
      <!--视频-->
      <div class="videoWrap">
      
        <div class="videoControl">
          <a href="javascript:;" @click="closeVideo">
            <i class="iconfont icon-guanbi" title="关闭"></i>
          </a>
        </div>
      </div>
    </header>
    <!--内容区-->
    <section class="content">
      <div class="contentWrap">
        <!--公告-->
        <div class="notice">
          <p><i class="iconfont icon-bianjisekuai"></i>xxxxxxxxx</p>
        </div>
        <!--聚焦-->
        <div class="focusing">
          <h3><i class="iconfont icon-daohang"></i>聚焦</h3>
          <ul class="imgShowList">
            <li>
              <img src="../images/17.jpeg" alt="">
              <div class="imgMask">
                <div class="title">
                  <p>xxxxxxx</p>
                </div>
              </div>
            </li>
            <li>
              <img src="../images/17.jpeg" alt="">
              <div class="imgMask">
                <div class="title">
                  <p>xxxxxxx</p>
                </div>
              </div>
            </li>
            <li>
              <img src="../images/17.jpeg" alt="">
              <div class="imgMask">
                <div class="title">
                  <p>xxxxxxx</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!--帖子-->
        <div class="posts">
          <h3><i class="iconfont icon-favorite"></i>Posts</h3>
          <ul class="postsList">
            <li>
              <div class="wrap">
                <div class="left">
                  <p class="timer">
                    <i class="iconfont icon-time"></i>
                    发表于1小时前
                  </p>
                  <h2>Mui登入源码xxxxxxxxxxx</h2>
                  <div class="types">
                    <p><i class="iconfont icon-browse"></i>63热度</p>
                    <p><i class="iconfont icon-survey"></i>NOTING</p>
                    <p><i class="iconfont icon-folder"></i>MUI源码</p>
                  </div>
                  <div class="introduce">
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  </div>
                  <i class="iconfont icon-more more"></i>
                </div>
                <div class="right">
                  <div class="imgWrap">
                    <img src="../images/bg-22.jpg" alt="">
                  </div>
                </div>
              </div>
              <i class="line"></i>
            </li>
            <li>
              <div class="wrap">
                <div class="left">
                  <p class="timer">
                    <i class="iconfont icon-time"></i>
                    发表于1小时前
                  </p>
                  <h2>Mui登入源码xxxxxxxxxxx</h2>
                  <div class="types">
                    <p><i class="iconfont icon-browse"></i>63热度</p>
                    <p><i class="iconfont icon-survey"></i>NOTING</p>
                    <p><i class="iconfont icon-folder"></i>MUI源码</p>
                  </div>
                  <div class="introduce">
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  </div>
                  <i class="iconfont icon-more more"></i>
                </div>
                <div class="right">
                  <div class="imgWrap">
                    <img src="../images/bg-22.jpg" alt="">
                  </div>
                </div>
              </div>
              <i class="line"></i>
            </li>
            <li>
              <div class="wrap">
                <div class="left">
                  <p class="timer">
                    <i class="iconfont icon-time"></i>
                    发表于1小时前
                  </p>
                  <h2>Mui登入源码xxxxxxxxxxx</h2>
                  <div class="types">
                    <p><i class="iconfont icon-browse"></i>63热度</p>
                    <p><i class="iconfont icon-survey"></i>NOTING</p>
                    <p><i class="iconfont icon-folder"></i>MUI源码</p>
                  </div>
                  <div class="introduce">
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  </div>
                  <i class="iconfont icon-more more"></i>
                </div>
                <div class="right">
                  <div class="imgWrap">
                    <img src="../images/bg-22.jpg" alt="">
                  </div>
                </div>
              </div>
              <i class="line"></i>
            </li>
            <li>
              <div class="wrap">
                <div class="left">
                  <p class="timer">
                    <i class="iconfont icon-time"></i>
                    发表于1小时前
                  </p>
                  <h2>Mui登入源码xxxxxxxxxxx</h2>
                  <div class="types">
                    <p><i class="iconfont icon-browse"></i>63热度</p>
                    <p><i class="iconfont icon-survey"></i>NOTING</p>
                    <p><i class="iconfont icon-folder"></i>MUI源码</p>
                  </div>
                  <div class="introduce">
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  </div>
                  <i class="iconfont icon-more more"></i>
                </div>
                <div class="right">
                  <div class="imgWrap">
                    <img src="../images/bg-22.jpg" alt="">
                  </div>
                </div>
              </div>
              <i class="line"></i>
            </li>
            <li>
              <div class="wrap">
                <div class="left">
                  <p class="timer">
                    <i class="iconfont icon-time"></i>
                    发表于1小时前
                  </p>
                  <h2>Mui登入源码xxxxxxxxxxx</h2>
                  <div class="types">
                    <p><i class="iconfont icon-browse"></i>63热度</p>
                    <p><i class="iconfont icon-survey"></i>NOTING</p>
                    <p><i class="iconfont icon-folder"></i>MUI源码</p>
                  </div>
                  <div class="introduce">
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  </div>
                  <i class="iconfont icon-more more"></i>
                </div>
                <div class="right">
                  <div class="imgWrap">
                    <img src="../images/bg-22.jpg" alt="">
                  </div>
                </div>
              </div>
              <i class="line"></i>
            </li>
            <li>
              <div class="wrap">
                <div class="left">
                  <p class="timer">
                    <i class="iconfont icon-time"></i>
                    发表于1小时前
                  </p>
                  <h2>Mui登入源码xxxxxxxxxxx</h2>
                  <div class="types">
                    <p><i class="iconfont icon-browse"></i>63热度</p>
                    <p><i class="iconfont icon-survey"></i>NOTING</p>
                    <p><i class="iconfont icon-folder"></i>MUI源码</p>
                  </div>
                  <div class="introduce">
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  </div>
                  <i class="iconfont icon-more more"></i>
                </div>
                <div class="right">
                  <div class="imgWrap">
                    <img src="../images/bg-22.jpg" alt="">
                  </div>
                </div>
              </div>
              <i class="line"></i>
            </li>
          </ul>
          <div class="btn">
            <img v-if="dataState===2" src="../images/postload.gif" alt="" class="loader">
            <div v-else-if="dataState===1" class="nextPage"><span>下一页</span></div>
            <span v-else>没有更多数据了...</span>
          </div>
        </div>
      </div>
    </section>
    <!--底部-->
    <footer></footer>
    <!--loding动画-->
    <div class="Loading">
      <div class="circle-loader">
        <div class="circle-line">
          <div class="circle circle-blue"></div>
          <div class="circle circle-blue"></div>
          <div class="circle circle-blue"></div>
        </div>
        <div class="circle-line">
          <div class="circle circle-yellow"></div>
          <div class="circle circle-yellow"></div>
          <div class="circle circle-yellow"></div>
        </div>
        <div class="circle-line">
          <div class="circle circle-red"></div>
          <div class="circle circle-red"></div>
          <div class="circle circle-red"></div>
        </div>
        <div class="circle-line">
          <div class="circle circle-green"></div>
          <div class="circle circle-green"></div>
          <div class="circle circle-green"></div>
        </div>
      </div>
    </div>
    <!--音乐-->
    <audio id="myAudio" src="../images/uBio - Secret Base - 吉他版.mp3" autoplay loop>
      您的浏览器不支持 audio 标签。
    </audio>
    <!--canvas动画-->
    <div id="area-render"></div>
  </div>
</template>

<script>
  import '../../static/loading'
  import '../../static/canvas-nest.min'
  export default {
    data(){
      return{
        dataState:0,  //数据状态  0 没有数据 1有数据 2加载数据
        viderPlay:false,//视频时候播放显示
      }
    },
    methods:{
      //关闭视频
      closeVideo(){
        var videoWrapNode=document.querySelector('videoWrap')
        var videoNode=document.getElementById('myVideo')
        var music=document.getElementById('myAudio')
        videoNode.pause();
        videoNode.style.cssText = 'z-index:-2;transition:1s;opacity:0;'
        document.querySelector('header').style.cssText = `height:${document.documentElement.clientHeight}px;width:${document.documentElement.clientWidth}px;background: url("../images/bg-18.jpg")no-repeat;`
        document.querySelector('#wrap header .box').style.cssText='transition:1s;top:0;opacity:1'
        document.querySelector('#wrap header nav').style.cssText='transition:1s;top:0;opacity:1'
        document.querySelector('#wrap header .headerWrap .wave').style.cssText='transition:1s;bottom:0;opacity:1'
        document.querySelector('#wrap header nav').addEventListener('transitionend',()=> {
          music.play();
        })
      },
      //动画
      pageAnimation(){
        //导航栏动画
        var navNode = document.querySelector('#wrap header nav')
        navNode.onmouseenter=()=>{
          navNode.style.cssText='background: rgba(255,255,255,1);'
          navNode.querySelectorAll('.navList li a').forEach(item=>{
            item.style.cssText='color:#666;'
          })
        }
        navNode.onmouseleave=()=>{
          navNode.style.cssText='background: rgba(255,255,255,0);'
          navNode.querySelectorAll('.navList li a').forEach(item=>{
            item.style.cssText='color:white;'
          })
        }
        //box区域动画
        var boxNode = document.querySelector('#wrap header .box')
        var timer;
        boxNode.querySelector('.icon').onmouseenter=()=>{
          boxNode.querySelector('.icon').style.cssText='transition:1s;transform:rotate(360deg)'
        }
        boxNode.querySelector('.icon').onmouseleave=()=>{
          boxNode.querySelector('.icon').style.cssText='transition:.5s;transform:rotate(-360deg)'
        }
        boxNode.querySelectorAll('.information li').forEach((item,index)=>{
          if(index===0){
            item.onmouseenter=()=>{
              clearInterval(timer)
              boxNode.querySelector('.slogan span').innerHTML='QQ:1262260527'
              timer=setTimeout(()=>{
                boxNode.querySelector('.slogan span').innerHTML='xxxxxx'
              },3000)
            }
          }else if(index===1){
            item.onmouseenter=()=>{
              clearInterval(timer)
              boxNode.querySelector('.slogan span').innerHTML='WX:1262260527'
              timer=setTimeout(()=>{
                boxNode.querySelector('.slogan span').innerHTML='xxxxxx'
              },3000)
            }
          }
        })
        //聚焦区域动画
        var focusingNode = document.querySelector('#wrap .content .focusing')
        focusingNode.querySelectorAll('.imgShowList li').forEach((item=>{
          item.onmouseenter=()=>{
            item.querySelector('.imgMask').style.cssText='transition:.5s;transform:translateY(0)'
          }
          item.onmouseleave=()=>{
            item.querySelector('.imgMask').style.cssText='transition:.5s;transform:rotate(-100%)'
          }
        }))
        //帖子区域动画
        var postsNodes = document.querySelectorAll('#wrap .content .posts .postsList li')
        postsNodes.forEach(item=>{
          item.querySelector('.wrap').onmouseenter=()=>{
            item.querySelector('.wrap').style.cssText='transition:box-shadow .5s;box-shadow: 0 0 10px skyblue;'
            item.querySelector('.wrap .right img').style.cssText='width:100%;height:100%;'
          }
          item.querySelector('.wrap').onmouseleave=()=>{
            item.querySelector('.wrap').style.cssText='transition:box-shadow .5s;box-shadow: none;'
            item.querySelector('.wrap .right img').style.cssText='width:120%;height:120%;'
          }
        })
        //音乐动画
        var myAudioNode = document.getElementById('myAudio')
        var musicInterval;
        var isPlay=true;
        var degCount =0;  //头像旋转
        var degCountNow=0; //记录暂停时的角度
        myAudioNode.onplaying=()=>{
          musicInterval=setInterval(()=>{
            degCount+=2
            navNode.querySelector('.icon').style.cssText=`transform:rotate(${degCount}deg);`
          },100)
        }
        navNode.querySelector('.icon').onclick=()=>{
          isPlay=!isPlay;
          if(isPlay){
            degCount=degCountNow;
            myAudioNode.play();
          }else{
            degCountNow=degCount;
            clearInterval(musicInterval)
            myAudioNode.pause();
          }
        }
        //视频动画
        var videoNode=document.getElementById('myVideo')
        boxNode.querySelector('.icon').onclick=()=>{
          myAudioNode.pause();
          boxNode.style.cssText='transition:1s;top:800px;opacity:0'
          navNode.style.cssText='transition:1s;top:-800px;opacity:0'
          document.querySelector('#wrap header .headerWrap .wave').style.cssText='transition:1s;bottom:-100px;opacity:0'
          navNode.addEventListener('transitionend',()=>{
            document.querySelector('header').style.cssText = `height:${document.documentElement.clientHeight}px;width:${document.documentElement.clientWidth}px;background:black;`
            videoNode.style.cssText='transition:1.5s;opacity:1;z-index:5'
            videoNode.addEventListener('transitionend',()=>{
              videoNode.play()
            })
          })
          videoNode.onclick=()=>{
            this.viderPlay=!this.viderPlay
            if(this.viderPlay){
              videoNode.play();
            }else{
              videoNode.pause();
            }
          }
        }
      },
      //首页波浪动画
      waveAnimation(){
        var wave1 = this.$refs.wave1
        var wave2 = this.$refs.wave2
        var count1 = 0;
        var count2 = 0;
       setInterval(()=>{
         count1=count1-4
         count2=count2-2
         if(count1<-3000 || count2<-3000){
           count1=0;
           count2=0;
         }
         wave1.style.left=count1+'px'
         wave2.style.left=count2+'px'
       },60)
      }
    },
    mounted(){
      //初始化首页高度
      var header=this.$refs.header;
      header.style.cssText = `height:${document.documentElement.clientHeight}px;width:${document.documentElement.clientWidth}px`
      document.getElementById('myVideo').style.cssText = `height:${document.documentElement.clientHeight}px;width:${document.documentElement.clientWidth}px`
      this.waveAnimation()
      this.pageAnimation()
    }
  }
</script>

<style scoped lang="less">
  @import "../../static/font/iconfont.css";
  @import "../../static/loading.css";
  #wrap{
    width: 100%;
    height:100%;
    color: #666;
    transform: translate3d(0);
    header{
      width: 100%;
      position: relative;
      background: url("../images/bg-18.jpg")no-repeat;
      overflow: hidden;
      .headerWrap{
        width: 100%;
        height: 100%;
        background: url("../images/grid.png");
        nav{
          width: 100%;
          height: 70px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          background: rgba(255,255,255,0);
          top: 0;
          left: 0;
          z-index: 2;
          transition:.5s;
          .icon{
            width: 50px;
            height: 50px;
            margin: 0 10px;
            box-shadow: 0 0 10px white;
            border-radius: 50%;
            cursor: pointer;
            img{
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
          ul{
            display: flex;
            justify-content: center;
            li{
              margin: 0 30px;
              font-size: 16px;
              a{
                color: white;
                transition: .5s;
              }
            }
          }
        }
        .box{
          width: 500px;
          height: 300px;
          position: absolute;
          z-index: 2;
          top: 50%;
          left: 50%;
          margin-left: -250px;
          margin-top: -150px;
          text-align: center;
          .icon{
            width: 130px;
            height: 130px;
            border-radius: 50%;
            display: inline-block;
            background-color: rgba(47, 47, 47, 0.67);
            cursor: pointer;
            img{
              width: 120px;
              height: 120px;
              margin: 5px;
              border-radius: 50%;
            }
          }
          .slogan{
            width: 100%;
            height: 60px;
            background-color: rgba(31, 31, 31, 0.75);
            border-radius: 30px;
            text-align: center;
            margin: 20px 0;
            span{
              line-height: 60px;
              font-size: 18px;
              color: white;
              transition: 1s;
            }
          }
          .information{
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: center;
            li{
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background-color: rgba(31, 31, 31, 0.75);
              margin: 0 5px;
              position: relative;
              display: flex;
              justify-content: center;
              a{
                width: 30px;
                height: 30px;
                position: absolute;
                background: url("../images/social_icon.png")no-repeat;
              }
              .qq{
                background-position: -5px -4px;
              }
              .wx{
                background-position: -5px -484px;
              }
              .wb{
                background-position: -5px -364px;
              }
              .bl{
                background-position: -5px -44px;
              }
            }
          }
        }
        .wave{
          width: 500%;
          height: 100px;
          position: absolute;
          left: 0;
          bottom: -35px;
          .wave1{
            width: 100%;
            height: 80px;
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 1;
            background: url("../images/wave1.png")repeat-x;
          }
          .wave2{
            width: 100%;
            height: 100px;
            position: absolute;
            left: 0;
            bottom: 0;
            background: url("../images/wave2.png")repeat-x;
          }
        }
      }
      .videoWrap{
        #myVideo{
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          z-index: -2;
        }
        .videoControl{
          z-index: 6;
          position: absolute;
          right: 20px;
          top: 20px;
          .iconfont{
            color: white;
            font-weight: bolder;
            font-size: 40px;
          }
        }
      }

    }
    .content{
      width: 100%;
      .contentWrap{
        width: 60%;
        margin: 0 auto;
        .notice{
          width: 100%;
          height: 70px;
          background: #FBFBFB;
          border: 1px dashed rgba(178, 178, 178, 0.73);
          margin:40px 0;
          font-size: 20px;
          i{
            margin: 0 10px;
          }
          p{
            text-align: center;
            font-weight: 500;
            color: #666;
            line-height: 70px;
          }
        }
        .focusing{
          width: 100%;
          h3{
            font-weight: 600;
            font-size: 20px;
            border-bottom: 1px dashed #666;
            padding-bottom: 15px;
            margin: 20px 0 ;
            i{
              margin-right: 10px;
            }
          }
          .imgShowList{
            width: 100%;
            height: 150px;
            display: flex;
            justify-content: space-between;
            li{
              width: 32%;
              cursor: pointer;
              position: relative;
              overflow: hidden;
              .imgMask{
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
                transform: translateY(-100%);
                width: 100%;
                height: 100%;
                background: rgba(0, 42, 102, 0.33);
                .title{
                  width: 100%;
                  height: 40px;
                  background: rgba(11, 11, 11, 0.65);
                  p{
                    text-align: center;
                    line-height: 40px;
                    color: white;
                  }
                }
              }
              img{
                width: 100%;
                height: 100%;
                border-radius: 5px;
              }
            }
          }
        }
        .posts{
          width: 100%;
          h3{
            font-weight: 600;
            font-size: 20px;
            border-bottom: 1px dashed #666;
            padding-bottom: 15px;
            margin: 40px 0 20px;
            i{
              margin-right: 10px;
            }
          }
          .postsList{
            width: 100%;
            li{
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: start;
              .wrap{
                width: 95%;
                margin: 0 auto;
                height: 250px;
                border: 1px solid rgba(125, 125, 125, 0.4);
                padding: 20px;
                display: flex;
                justify-content: space-between;
                .left{
                  width: 50%;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  .timer{
                    width: 100%;
                    font-size: 14px;
                  }
                  h2{
                    width: 90%;
                    font: 25px 微软雅黑,黑体;
                    font-weight: bolder;
                    color: black;
                    cursor: pointer;
                  }
                  .types{
                    width: 70%;
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    cursor: pointer;
                    p{
                      i{
                        margin-right: 5px;
                      }
                    }
                  }
                  .introduce{
                    width: 90%;
                    font-size: 18px;
                    display: -webkit-box !important;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    word-break: break-all;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp:3;
                    cursor: pointer;
                  }
                  .more{
                    font-size: 20px;
                    cursor:pointer;
                  }
                  h2:hover,.types p:hover,.introduce:hover,.more:hover{
                    transition: .5s;
                    color: skyblue;
                  }
                }
                .right{
                  width: 50%;
                  height: 100%;
                  margin: auto;
                  min-width: 300px;
                  border-radius: 10px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  .imgWrap{
                    width: 90%;
                    height: 90%;
                    border-radius: 10px;
                    overflow: hidden;
                    background: blue;
                    text-align: center;
                    cursor: pointer;
                    img{
                      width: 120%;
                      height: 120%;
                      transition: .6s;
                    }
                  }

                }

              }
              .line{
                width: 1px;
                height: 50px;
                border-right: 1px solid rgba(125, 125, 125, 0.4);
                margin: 0 auto;
              }
            }
          }
          .btn{
            width: 100%;
            text-align: center;
            .nextPage{
              width: 100%;
              margin: 0 auto;
              text-align: center;
              cursor: pointer;
              span{
                display: inline-block;
                width: 80px;
                height: 20px;
                padding: 10px;
                border: 1px solid #666;
                border-radius: 40px;
              }
            }
          }
        }
      }
    }

    .Loading{
      width: 100%;
      height: 100%;
      display: none;
    }
  }

</style>
