$.ajaxPrefilter(function(options){

    // 拼接地址
    options.url = 'http://ajax.frontend.itheima.net'+options.url;
    //  调取header
    if(options.url.indexOf('/my/')!==-1){
        options.headers = {
            Authorization:localStorage.getItem('token')||''
        }
    }
    // 管理权限
    options.complete=function(res){
        if(res.responseJSON.status ===1&&res.responseJSON.message==='身份认证失败！'){
            localStorage.removeItem('token')
            location.href='./login.html'
        }
    }

})