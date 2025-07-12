function rng_random_replace(str , inc){
    String.prototype.splice = function(idx, rem, str) {
        return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
    };
    var str_count = str.length;
    var inc_count = inc.length;
    random_inc = inc.charAt(Math.floor(Math.random() * inc_count));
    random_num = Math.floor(Math.random() * inc_count);
    var output;
    str = str.slice(0,-1);
    output = str.splice(0 , 0 , random_inc);
    return output;
}
$(document).ready(function () {
    console.log(getCookie("password_len"));
    console.log(getCookie("save_pref"));
    if(getCookie("save_pref") == "true"){
        $("#password-length").val(getCookie("password_len"));
            //default check
            var init_check = function(value){
                $(value).prop("checked" , true);
            }
            var callbacks = $.Callbacks();
            callbacks.add(init_check);
            if(getCookie("includeS") == "true"){ callbacks.fire("#password-includeS"); }
            if(getCookie("includeN") == "true"){ callbacks.fire("#password-includeN"); }
            if(getCookie("includeL") == "true"){ callbacks.fire("#password-includeL"); }
            if(getCookie("includeU") == "true"){ callbacks.fire("#password-includeU"); }
            if(getCookie("includeA") == "true"){ callbacks.fire("#password-includeA"); }
            if(getCookie("save_pref") == "true"){ callbacks.fire("#save-preference"); }
            callbacks.empty();
        }else{
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
        }
        $(".general-option").change(function(){
            var option_class = $(".general-option").find("option:selected").attr('class');
            if(option_class == 'level_1'){
                $("#password-length").val("12");
                $("#password-includeS").prop("checked" , false);
                $("#password-includeN").prop("checked" , true);
                $("#password-includeL").prop("checked" , true);
                $("#password-includeU").prop("checked" , true);
                $("#password-includeA").prop("checked" , false);
            }
            if(option_class == 'level_2'){
                $("#password-length").val("14");
                $("#password-includeS").prop("checked" , true);
                $("#password-includeN").prop("checked" , true);
                $("#password-includeL").prop("checked" , true);
                $("#password-includeU").prop("checked" , true);
                $("#password-includeA").prop("checked" , false);
            }
            if(option_class == 'level_3'){
                $("#password-length").val("18");
                $("#password-includeS").prop("checked" , true);
                $("#password-includeN").prop("checked" , true);
                $("#password-includeL").prop("checked" , true);
                $("#password-includeU").prop("checked" , true);
            }
        });
    //generate password function
    $(".generate-password").click(function () {
        var password_length = $("#password-length").val();
        var password_includeS_content = "~!@#$%^&*()_-";
        var password_includeN_content = "0123456789";
        var password_includeL_content = "abcdefghijklmnopqrstuvwxyz";
        var password_includeU_content = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var password_includeA_content = "{}[]()/'\"`~,;:.<";
        var password_includeS = false;
        var password_includeN = false;
        var password_includeL = false;
        var password_includeU = false;
        var password_includeA = false;
        var content = '';
        if(password_length > 99){
            password_length = 99;
        }
        if(password_length < 1){
            password_length = 1;
        }
        if($("#password-includeS").is(":checked")){
            content += password_includeS_content;
            password_includeS = true;
        }
        if($("#password-includeN").is(":checked")){
            content += password_includeN_content;
            password_includeN = true;
        }
        if($("#password-includeL").is(":checked")){
            content += password_includeL_content;
            password_includeL = true;
        }
        if($("#password-includeU").is(":checked")){
            content += password_includeU_content;
            password_includeU = true;
        }
        if($("#password-includeA").is(":checked")){
            content += password_includeA_content;
            password_includeA = true;
        }
        var password = '';
        if(content == ''){
            $(this).next().val('لطفا یکی از گزینه های بالا را انتخاب کنید');
        }else{
            for (var i = 0; i < password_length; i++) {
                password += content.charAt(Math.floor(Math.random() * content.length));
            }
            /**
            * noting password_includeSpecial 
            */

            if(password_includeS == true){
                var password_includeS_array = password_includeS_content.split("");
                var password_array = password.split("");
                var password_includeS_find = [];
                password_includeS_array.forEach(function(element) {
                    if(password_array.indexOf(element) !== -1){
                        password_includeS_find.push(1);
                    }
                });
                if(password_includeS_find.indexOf(1) == -1){
                    password = rng_random_replace(password , password_includeS_content);
                }
            }

            /**
            * noting password_includeNumber
            */

            if(password_includeN == true){
                var password_includeN_array = password_includeN_content.split("");
                var password_array = password.split("");
                var password_includeN_find = [];
                password_includeN_array.forEach(function(element) {
                    if(password_array.indexOf(element) !== -1){
                        password_includeN_find.push(1);
                    }
                });
                if(password_includeN_find.indexOf(1) == -1){
                    password = rng_random_replace(password , password_includeN_content);
                }
            }

            /**
            * noting password_includeLowercase
            */

            if(password_includeL == true){
                var password_includeL_array = password_includeL_content.split("");
                var password_array = password.split("");
                var password_includeL_find = [];
                password_includeL_array.forEach(function(element) {
                    if(password_array.indexOf(element) !== -1){
                        password_includeL_find.push(1);
                    }
                });
                if(password_includeL_find.indexOf(1) == -1){
                    password = rng_random_replace(password , password_includeL_content);
                }
            }

            /**
            * noting password_includeUppercase
            */

            if(password_includeU == true){
                var password_includeU_array = password_includeU_content.split("");
                var password_array = password.split("");
                var password_includeU_find = [];
                password_includeU_array.forEach(function(element) {
                    if(password_array.indexOf(element) !== -1){
                        password_includeU_find.push(1);
                    }
                });
                if(password_includeU_find.indexOf(1) == -1){
                    password = rng_random_replace(password , password_includeU_content);
                }
            }

            /**
            *  noting password_includeAmbuseChar
            */

            if(password_includeA == true){
                var password_includeA_array = password_includeA_content.split("");
                var password_array = password.split("");
                var password_includeA_find = [];
                password_includeA_array.forEach(function(element) {
                    if(password_array.indexOf(element) !== -1){
                        password_includeA_find.push(1);
                    }
                });
                if(password_includeA_find.indexOf(1) == -1){
                    password = rng_random_replace(password , password_includeA_content);
                }
            }

            /**
            * final password
            */

            $(this).next().val(password);
        }
    });
$(".password-input").click(function(){
    $(this).select();
});
$('.return-top').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});
});