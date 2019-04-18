<template>
  <div class="center-content-inner show">
    <div class="cc-inner">
      <div class="center-account-box">
        <div class="cc-com-title">
          <span class="cc-tit">
            <i></i>个人资料
          </span>
          <span class="cc-edit-btn">编辑</span>
        </div>
        <div class="account-form">
          <div class="account-row">
            <label class="account-label">登录账号：</label>
            <div class="account-input">
              <input type="text" placeholder="请输入账号" value="13578456123">
              <span class="account-btn">修改手机号</span>
            </div>
          </div>
          <div class="account-row">
            <label class="account-label">昵称：</label>
            <div class="account-input">
              <input type="text" placeholder="请输入昵称" value="张冰冰">
            </div>
          </div>
          <div class="account-row">
            <label class="account-label">出生地：</label>
            <div class="account-input">
              <input type="text" placeholder="请输入出生地" value="伦敦">
            </div>
          </div>
          <div class="account-row">
            <label class="account-label">性别：</label>
            <div class="account-input">
              <span class="account-choose-item">
                <i class="b-radio-icon active"></i>
                <span>先生</span>
              </span>
              <span class="account-choose-item">
                <i class="b-radio-icon"></i>
                <span>女士</span>
              </span>
            </div>
          </div>
          <div class="account-row">
            <label class="account-label">生日：</label>
            <div class="account-input">
              <!--选中 +active-->
              <div class="select-box">
                <div class="select-btn">
                  <span>1995</span>
                  <i></i>
                </div>
                <div class="opts">
                  <a href="javascript:;" val="0">1995</a>
                  <a href="javascript:;" val="1">1996</a>
                  <a href="javascript:;" val="2">1996</a>
                  <a href="javascript:;" val="3">1996</a>
                  <a href="javascript:;" val="4">1996</a>
                  <a href="javascript:;" val="5">1996</a>
                </div>
              </div>
              <div class="select-box">
                <div class="select-btn">
                  <span>1</span>
                  <i></i>
                </div>
                <div class="opts">
                  <a href="javascript:;" val="0">1</a>
                  <a href="javascript:;" val="1">2</a>
                  <a href="javascript:;" val="2">3</a>
                  <a href="javascript:;" val="3">4</a>
                  <a href="javascript:;" val="4">5</a>
                  <a href="javascript:;" val="5">6</a>
                  <a href="javascript:;" val="6">7</a>
                  <a href="javascript:;" val="7">8</a>
                  <a href="javascript:;" val="8">9</a>
                  <a href="javascript:;" val="9">10</a>
                  <a href="javascript:;" val="10">11</a>
                  <a href="javascript:;" val="11">12</a>
                </div>
              </div>
              <div class="select-box">
                <div class="select-btn">
                  <span>2</span>
                  <i></i>
                </div>
                <div class="opts">
                  <a href="javascript:;" val="0">1</a>
                  <a href="javascript:;" val="1">2</a>
                  <a href="javascript:;" val="2">3</a>
                  <a href="javascript:;" val="3">4</a>
                  <a href="javascript:;" val="4">5</a>
                  <a href="javascript:;" val="5">6</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="account-buttons">
          <div class="save-btn">保存</div>
        </div>
      </div>
      <div class="center-account-box">
        <div class="cc-com-title">
          <span class="cc-tit">
            <i></i>头像
          </span>
          <span class="cc-edit-btn">编辑</span>
        </div>
        <div class="account-form">
          <div class="account-upload">
            <div class="upload-pic">
              <img src="" alt>
            </div>
            <div class="upload-btn-txt">
              <button class="upload-btn">上传头像</button>
              <input type="file" name="file" class>
            </div>
            <div class="upload-tips">(支持JPG,PNG格式的图片)</div>
          </div>
        </div>
        <div class="account-buttons">
          <div class="save-btn">保存</div>
        </div>
      </div>
      <div class="center-account-box">
        <div class="cc-com-title">
          <span class="cc-tit">
            <i></i>绑定账号设置
          </span>
          <!--<span class="cc-edit-btn">编辑</span>-->
        </div>
        <div class="account-form">
          <dl class="binding-list">
            <dd>
              <i class="bind-icon weixin-icon"></i>
              <div class="bind-info">
                <section>绑定微信账号，使用微信账号便捷登录，还可以将堆绿内容同步到绑定对应的平台，与更多好友分享。</section>
              </div>
              <div class="bind-button">立即绑定</div>
            </dd>
            <dd>
              <i class="bind-icon qq-icon"></i>
              <div class="bind-info">
                <section>绑定微信账号，使用微信账号便捷登录，还可以将堆绿内容同步到绑定对应的平台，与更多好友分享。</section>
              </div>
              <div class="bind-button">立即绑定</div>
            </dd>
            <dd>
              <i class="bind-icon weibo-icon"></i>
              <div class="bind-info">
                <section>绑定微信账号，使用微信账号便捷登录，还可以将堆绿内容同步到绑定对应的平台，与更多好友分享。</section>
              </div>
              <div class="bind-button">立即绑定</div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
