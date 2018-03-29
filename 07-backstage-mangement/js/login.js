var $login=(function(){

	var html=`
	<div  class="login">
		<h1>集团后台登录</h1>
		
		<form >
					<label >用户名</label>
					<input type="text" class="ip">
					<p class="pp"></p>
					<label for="密码">密码</label>
					<input type="password" class="ipp">
					<p class="pp"></p>
					<label for="验证码" class="aa">验证码</label>
					<input type="text" class="ip2">
					<p class="pp"></p>
					<input type="button" value="登录 " class="deng">	
		</form>	
		
	</div>

`;
function show(){
	$(config.container).html(html);

}
return {show:show};
})();