$(function () {
    function getuser() {
        $.ajax({
            type: 'GET',
            url: '/my/userinfo',
            success: function (res) {
                if (res.status !== 0) {
                    return res.message
                }
            
                var name = res.data.nickname||res.data.username;
                if(res.data.user_pic!==null){ 
                     $('.layui-side .text-avatar').hide();
                    $('.layui-side .layui-nav-img').attr('src',res.data.user_pic).show()
                   
                }
                else{
                   $('.layui-side .layui-nav-img').hide();
                 
                    var frist = name[0].toUpperCase();
                    $('.text-avatar').html(frist).show()
                }
            }
        })
    }
    getuser()
    function quit(){
        layer.confirm('确定关闭？', {icon: 3, title:'提示'}, function(index){
            if(index===1){
                location.href='./login.html'
            }
            localStorage.clear('token')
            layer.close(index);
            
          });
    }
    $('#quit').on('click',function(){
        quit()
    })
})
