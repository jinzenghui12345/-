$(function () {
    $('#login').on('click', function () {
        $('#registerbox').show();
        $('#loginbox').hide();
    })
    $('#register').on('click', function () {
        $('#loginbox').show();
        $('#registerbox').hide();
    })

    // 表单验证
    var form = layui.form;
    var layer = layui.layer;
    form.verify({
        pwd: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        repwd: function (value) {
            var val = $('.layui-icon [name = password]')
            if (val !== value) {
                return '两次密码不一致'
            }
        }
    })
    // 注册
    $('#loginform').submit(function (e) {
        e.preventDefault();
        var username = $('#loginform [name = username]').val()
        var password = $('#loginform [name = password]').val()

        $.post(
            'http://ajax.frontend.itheima.net/api/reguser',
            {
                username: username,
                password: password
            },
            function (res) {
                console.log(res);
                if (res.status !== 0) {
                    return layer.msg('注册成功')
                }
                layer.msg('注册成功')
            }
        )
    })


    // 登录
    $('#registerform').submit(function (e) {
        e.preventDefault()
        var username = $('#registerform  [name = username]').val()
        var password = $('#registerform  [name = password]').val()
        console.log(username);
        
        $.ajax({
            type:'POST',
            url:'http://ajax.frontend.itheima.net/api/login',
            data:{
                username: username,
                password: password
            },
            success:function (res) {
                console.log(res);

                layer.msg('登录成功')
                console.log(res.token);
                location.href = './index.html'
            }
        })
    })
})