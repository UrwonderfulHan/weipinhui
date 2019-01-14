/*主页*/
body {
    height: 3000px;
}
/*banner部分开始*/
.index-banner {
    padding: 1px;
    /*height: 480px;*/
    background: url("../images/index-banner01.jpg") no-repeat;
}
.index-banner-body {
    margin-top: 30px;
    padding-top: 1px;
    background-color: #fff;
    box-shadow: 3px 3px rgba(0,0,0,0.2);
}
.index-banner-body-screen {
    margin: 10px auto 0;
    width: 1140px;
    height: 400px;
    overflow: hidden;
    position: relative;
}
.index-banner-body-screen ul {
    position: absolute;
}
.index-banner-body-screen ul li {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
}
.index-banner-body-screen img {
    width: 1140px;
    height: 400px;
}
.index-banner-body-screen .arr-left,
.index-banner-body-screen .arr-right {
    width: 33px;
    height: 66px;
    font-size: 24px;
    line-height: 66px;
    text-align: center;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.index-banner-body-screen .arr-left {
    left: -33px;
}
.index-banner-body-screen .arr-right {
    right: -33px;
}
.index-banner-body-tab {
    font-size: 12px;
    width: 1140px;
    height: 40px;
    margin: 0 auto;
    line-height: 40px;
    text-align: center;
    position: relative;
}
.index-banner-body-tab .index-banner-body-tab-red {
    position: absolute;
    top: 40px;
    left: 0;
    height: 4px;
    width: 229px;
    background-color: #E6057D;
}
.index-banner-body-tab li {
    width: 223px;
    float: left;
}
.index-banner-body-tab li.current a {
    color: #333;
}
.index-banner-body-tab span {
    color: #E8E8E8;
    float: left;
}
.index-banner-body-tab li a {
    color: #666;
}
.index-banner .index-time {
    margin: 36px auto 25px;
    font-size: 20px;
    color: #fff;
    width: 1000px;
    height: 80px;
    text-align: center;
    background: url("../images/index-timer-tushi.png") no-repeat;
}
.index-banner .index-time img {
    height: 40px;
    vertical-align: middle;
}
.index-banner .index-time span {
    display: inline-block;
    border-radius: 3px;
    vertical-align: middle;
    margin-left: 2px;
    width: 26px;
    height: 40px;
    font-size: 36px;
    color: #000;
    background-color: #fff;
}
.index-banner .index-time p {
    margin-top: 10px;
}

/*banner部分结束*/

/*新人优选部分开始*/
.index-newp-item>img {
    margin-top: 20px;
}
.index-newp-item-product li {
    margin-left: 32px;
    float: left;
}
.index-newp-item-product li p {
    text-align: center;
    font-size: 14px;
}
.index-newp-item-product a {
    color: #333;
}
.index-newp-item-beauty-01 {
    width: 570px;
    height: 366px;
    background: url("../images/index-newpeople-01.jpg") no-repeat;
    float: left;
    position: relative;
}
.index-newp-item-beauty-01 ul,
.index-newp-item-beauty-02 ul {
    position: absolute;
    left: 0;
    bottom: 10px;
}
.index-newp-item-beauty-01 li {
    margin-left: 10px;
    border-radius: 5px;
    width: 130px;
    height: 130px;
    background-color: #fff;
    float: left;
}
.index-newp-item-beauty-01 a,
.index-newp-item-beauty-02 a {
    color: #333;
}
.index-newp-item-beauty-02 {
    width: 570px;
    height: 366px;
    background: url("../images/index-newpeople-02.jpg") no-repeat;
    float: right;
    position: relative;
}
.index-newp-item-beauty-02 li {
    margin-left: 10px;
    border-radius: 5px;
    width: 130px;
    height: 130px;
    background-color: #fff;
    float: left;
}
.index-newp-item-beauty-01 li,
.index-newp-item-beauty-02 li {
    text-align: center;
}
.index-newp-item-beauty-01 li img,
.index-newp-item-beauty-02 li img {
    margin-top:20px;
}
/*新人优选部分结束*/

/*新特卖部分开始*/
.index-newtm {
    margin-top: 35px;
}
.index-newtm-product .rx {
    margin: 0 22px;
}
.index-newtm-product-01 .fangdajing {
    position: relative;
    float: left;
    width: 570px;
    height: 350px;
    overflow: hidden;
}
/*.fangdajing .big {*/
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
    /*display: none;*/
/*}*/
.index-newtm-product-01>img {
    float: right;
}
.index-newtm-product-02 img:first-child {
    float: left;
}
.index-newtm-product-02 img:last-child {
    float: right;
}
.index-newtm-product-01,
.index-newtm-product-02 {
    margin-top: 30px;
}

/*新特卖部分结束*/

/*楼层部分开始*/
#index-nvzhuang {
    position: relative;
}
.foolter-body>img{
    margin: 46px 0 20px;
}
.foolter-body ul li {
    overflow: hidden;
    margin: 10px 0;
}
.foolter-body ul li:nth-child(even){
    float: left;
}
.foolter-body ul li:nth-child(odd){
    float: right;
}
/*.foolter-body ul li:hover img {*/
    /*opacity: 0.5;*/
/*}*/
/*.foolter-body ul li img {*/
    /*transition: all 1s;*/
/*}*/
/*楼层部分结束*/

/*特效部分开始*/
.index-texiao {
    padding-top: 1px;
    width: 100%;
    height: 410px;
    background: url("../images/index-texiao-banner.jpg") no-repeat;
}

.index-texiao-body {
    overflow: hidden;
    position: relative;
    width: 672px;
    height: 410px;
    margin: 40px auto 0;
}
.index-texiao-body>img {
    transition: all 1s;
}
.index-texiao-body:hover>img{
    transform: scale(1.2);
}
.index-texiao-body-enter {
    text-align: center;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 325px;
    height: 158px;
    background: rgba(0, 0, 0, .7);
}
.index-texiao-body-enter span {
    position: absolute;
}
.index-texiao-body-enter-top {
    position: absolute;
    width: 319px;
    height: 2px;
    background-color: #AC8852;
}

.index-texiao-body-enter-left {
    height: 152px;
    width: 2px;
    background-color: #AC8852;
}
#index-left {
     left: 3px;
     bottom: 3px;
 }
#index-right {
    right: 3px;
    top: 3px;
}
#index-top {
    left:3px;
    top: 3px;
}
#index-bottom {
    right:3px;
    bottom: 3px;
}
.index-texiao-body-enter img {
    margin-top: 12px;
}
.index-texiao-body-enter p {
    margin-top: 14px;
    color: #C89F60;
    font-size: 24px;
    text-align: center;
}
.index-texiao-body-enter a {
    display: inline-block;
    margin-top: 7px;
    font-size: 20px;
    width: 200px;
    height: 32px;
    color: #3E001E;
    line-height: 32px;
    text-align: center;
    background-color: #C89F60;

}
/*特效部分结束*/
/*底部部分开始*/
.index-last {
    background-color: #FCFCFC;
    margin-top: 170px;
    border-top: 1px solid #EBEBEB;
}
.index-last-body {
    margin: 0 auto;
    width: 960px;
}
.index-last-body a:hover {
    color: #D7237E;
}
.index-last-body .footer-top {
    display: block;
    margin: 0 auto;
}
.index-last-body-fwbz {
    width: 800px;
    margin: 43px auto 0;
}
.index-last-body-fwbz dl {
    float: left;
    padding-left: 14px;
    font-size: 12px;
    width: 145px;
    height: 146px;
    border-right: 1px solid #E0E0E0;
}
.index-last-body-fwbz dt {
    height: 25px;
}
.index-last-body-fwbz dt a {
    color: #4D4D4D;
}
.index-last-body-fwbz dd {
    line-height: 20px;
    transition: all 1s;
}
.index-last-body-fwbz dd:hover {
    transform: translateX(5px);
}
.index-last-body-fwbz dd .square {
    display: inline-block;
    width: 3px;
    height: 3px;
    background-color: #6A6B6D;
}
.index-last-body-fwbz dd a {
    color: #808080;
}
.index-last-body-fwbz .footer-ewm {
    border: 0;
}
.index-last-body-fwbz .footer-ewm p {
    margin-left: 5px;
}
.index-last .footer-nav {
    margin-top: 25px;
    text-align: center;
    font-size: 12px;
    color: #F5F1F6;
    height: 30px;
    line-height: 30px;
    background-color: #D7237E;
}
.index-last .footer-nav li {
    float: left;
}
.index-last .footer-nav a {
    color: #F5F1F6;
}
.index-last .index-last-body {
    font-size: 12px;
}
.index-last .index-last-body>img {
    margin-top: 15px;
}
.index-last-body .index-last-body-text {
    margin-top: 20px;
}
.index-last-body .index-last-body-text p {
    line-height: 20px;
    color: #ABABAB;
    text-align: center;
}
.index-last-body .index-last-body-text p a {
    color: #808080;
}
.index-last-body-buy {
    margin-top: 30px;
    text-align: center;
}
.index-last-body-buy a {
    display: inline-block;
    width: 110px;
    height: 30px;
    background: url("../images/index-footer-buy.png") no-repeat;
}
.index-last-body-buy a:nth-child(1) {
    background-position: 0 -7px;
}
.index-last-body-buy a:nth-child(2) {
    background-position: 0 -57px;
}
.index-last-body-buy a:nth-child(3) {
    background-position: 0 -105px;
}
.index-last-body-buy a:nth-child(4) {
    background-position: 0 -156px;
}
.index-last-body-buy a:nth-child(5) {
    background-position: 0 -206px;
}
.index-last-body-buy a:nth-child(6) {
    background-position: 0 -257px;
}
.index-last-body-buy a:nth-child(7) {
    background-position: 0 -309px;
}
.index-last-body-buy a:nth-child(8) {
    background-position: 0 -356px;
}
/*底部部分结束*/
/*左部盒子开始*/
/*.index-left-box .fixed {
    position: fixed;
    left: 256px;
    top: 35px;
}*/
#index-nvzhuang .index-left-box {
    font-size: 12px;
    width: 80px;
    border: 1px solid #EAEAEA;
    border-radius: 3px;
    position: absolute;
    top: 108px;
    left: -114px;
}
.index-left-box ol {
    padding: 6px;
}
.index-left-box li {
    height: 36px;
    line-height: 36px;
    text-align: center;
    border-bottom: 1px solid #D6D6D6;
}
.index-left-box li.current {
    border-radius: 3px;
    background-color: #F10180;
}
.index-left-box li.current a {
    color: #fff!important;
}
.index-left-box li:last-child {
    border: 0;
}
.index-left-box li a {
    color: #666;
}
.index-left-box li a:hover {
    color: #F10180;
}
/*左部盒子结束*/

/*右侧盒子开始*/
.index-right-box {
    position: fixed;
    top: 0;
    right: 0;
    width: 36px;
    height: 100%;
    background-color: #262626;
    z-index: 0;
}
.index-right-box .zhanghao {
    position: relative;
    cursor: pointer;
    width: 36px;
    height: 40px;
    margin-top: 250px;
    background: url("../images/index-right-zhanghao.png") no-repeat center center;
    background-size: 36px 40px;
}
.index-right-box .zhanghao:hover {
    background: url("../images/index-right-box-sprites.png") no-repeat -40px 0;
}
.index-right-box .index-right-box-login {
    position: absolute;
    top: 0;
    right: 35px;
    width: 0;
    height: 300px;
    background-color: #fff;
    border: 1px solid #D6D6D6;
    border-bottom: 0;
    display: none;
    box-shadow: -5px 2px 2px rgba(0, 0, 0, 0.2);
}
.index-right-box-login span {
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
    font-weight: bold;
    font-size: 30px;
    color: #ccc;
}
.index-right-box-gouwudai {
    padding: 1px;
    margin-top: 5px;
    height: 153px;
    background-color: #DF147F;
}
.index-right-box-gouwudai p {
    margin: 48px auto;
    color: #fff;
    text-align: center;
    width: 30px;
}
.index-right-box-little a {
    display: block;
    height: 40px;
    background: url("../images/index-right-box-sprites.png") no-repeat;
}
.index-right-box-little li {
    position: relative;
    margin-top: 16px;
}
.index-right-box-little li p {
    cursor: pointer;
    font-size: 14px;
    border-radius: 3px;
    color: #777;
    text-align: center;
    display: none;
    height: 0;
    height: 40px;
    background-color: #fff;
    position: absolute;
    top: 0;
    right: 36px;
    border: 1px solid #ccc;
    border-right: 0;
    line-height: 40px;
}
.index-right-box-fanhui {
    margin-top: 230px;
}
.index-right-box-fanhui ul li {
    position: relative;
    cursor: pointer;
    height: 36px;
    background: url("../images/index-right-box-sprites.png") no-repeat;
}
.index-right-box-fanhui li p {
    cursor: pointer;
    font-size: 14px;
    border-radius: 3px;
    color: #777;
    text-align: center;
    display: none;
    height: 0;
    height: 36px;
    background-color: #fff;
    position: absolute;
    top: 0;
    right: 36px;
    border: 1px solid #ccc;
    border-right: 0;
    line-height: 36px;
}
.index-right-box-fanhui ul li:first-child {
    background-position: -120px -88px;
}
.index-right-box-fanhui ul li:last-child {
    background-position: -80px -88px;
}
.index-right-box-little li:nth-child(1) a {
    background-position: -160px -44px;
}
.index-right-box-little li:nth-child(1) a:hover {
    background-position: -40px -129px;
}
.index-right-box-little li:nth-child(2) a{
    background-position: -80px 0;
}
.index-right-box-little li:nth-child(2) a:hover{
    background-position: -40px -44px;
}
.index-right-box-little li:nth-child(3) a{
    background-position: -120px 0;
}
.index-right-box-little li:nth-child(3) a:hover {
    background-position: -80px -44px;
}
.index-right-box-little li:nth-child(4) a{
    background-position: -160px 0;
}
.index-right-box-little li:nth-child(4) a:hover{
    background-position: -120px -44px;
}
/*右侧盒子结束*/