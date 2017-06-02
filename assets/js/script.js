$(document).ready(function () {
    //default password length

    //default check
    $("#password-length").val("8");
    $("#password-includeS").prop("checked" , false);
    $("#password-includeN").prop("checked" , true);
    $("#password-includeL").prop("checked" , true);
    $("#password-includeU").prop("checked" , true);
    $("#password-includeA").prop("checked" , false);

    $(".general-option").change(function(){
        var option_class = $(".general-option").find("option:selected").attr('class');
        if(option_class == 'level_1'){
            $("#password-length").val("8");
            $("#password-includeS").prop("checked" , false);
            $("#password-includeN").prop("checked" , true);
            $("#password-includeL").prop("checked" , true);
            $("#password-includeU").prop("checked" , true);
            $("#password-includeA").prop("checked" , false);
        }
        if(option_class == 'level_2'){
            $("#password-length").val("12");
            $("#password-includeS").prop("checked" , true);
            $("#password-includeN").prop("checked" , true);
            $("#password-includeL").prop("checked" , true);
            $("#password-includeU").prop("checked" , true);
            $("#password-includeA").prop("checked" , false);
        }
        if(option_class == 'level_3'){
            $("#password-length").val("16");
            $("#password-includeS").prop("checked" , true);
            $("#password-includeN").prop("checked" , true);
            $("#password-includeL").prop("checked" , true);
            $("#password-includeU").prop("checked" , true);
            $("#password-includeA").prop("checked" , true);
        }
    });
    



    //generate password function
    $(".generate-password").click(function () {
        var password_length = $("#password-length").val();
        if(password_length > 100){
        	password_length = 100;
        }
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