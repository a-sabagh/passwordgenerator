$(document).ready(function () {
    //default password length
    $("#password-length").val("10");
    //default check
    var init_check = function(value){
        $(value).prop("checked" , true);
    }
    var callbacks = $.Callbacks();
    callbacks.add(init_check);
    callbacks.fire("#password-includeN");
    callbacks.fire("#password-includeL");
    callbacks.fire("#password-includeU");
    callbacks.empty();
    //generate password function
    $(".generate-password").click(function () {
        var password_length = $("#password-length").val();
        var content = '';
        if($("#password-includeS").is(":checked")){
            content += "~!@#$%^&*()_-";    
        }
        if($("#password-includeN").is(":checked")){
            content += "0123456789";
        }
        if($("#password-includeL").is(":checked")){
            content += "abcdefghijklmnopqrstuvwxyz";
        }
        if($("#password-includeU").is(":checked")){
            content += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if($("#password-includeA").is(":checked")){
            content += '{}[]()/\'"`~,;:.<';
        }
        var password = '';
        if(content == ''){
            $(this).next().val('لطفا یکی از گزینه های بالا را انتخاب کنید');
        }else{
            for (var i = 0; i < password_length; i++) {
                password += content.charAt(Math.floor(Math.random() * content.length));
            }
            $(this).next().val(password);
        }
    });
    $(".password-input").click(function(){
        $(this).select();
    })
});