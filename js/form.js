$(document).ready(function(){
    // ====================================================== //
    
    var jVal = {
        'fullName' : function() {
        
            $('body').append('<div id="nameInfo" class="info"></div>');
            
            var nameInfo = $('#nameInfo');
            var ele = $('#fullname');
            var pos = ele.offset();
            
            nameInfo.css({
                top: pos.top,
                left: pos.left+ele.width()
            });
            
            var patt = /^[A-Za-zА-Яа-яЁё\s]+$/;

            if(!patt.test(ele.val())) {
                jVal.errors = true;
                nameInfo.removeClass('correct').addClass('error').html('!').show();
                    ele.removeClass('normal').addClass('wrong');					
            } else {
                nameInfo.removeClass('error').addClass('correct').html('ok').show();
                    ele.removeClass('wrong').addClass('normal');
            }
        },

        'fullwork' : function() {
        
            $('body').append('<div id="workInfo" class="info"></div>');
            
            var workInfo = $('#workInfo');
            var ele = $('#fullwork');
            var pos = ele.offset();
            
            workInfo.css({
                top: pos.top,
                left: pos.left+ele.width()
            });
            
            if(ele.val().length < 3) {
                jVal.errors = true;
                workInfo.removeClass('correct').addClass('error').html('!').show();
                    ele.removeClass('normal').addClass('wrong');				
            } else {
                workInfo.removeClass('error').addClass('correct').html('ok').show();
                    ele.removeClass('wrong').addClass('normal');
            }
        },
    
        'phone' : function() {
        
            $('body').append('<div id="phoneinfo" class="info"></div>');
            
            var phoneinfo = $('#phoneinfo');
            var ele = $('#phone');
            var pos = ele.offset();
            
            phoneinfo.css({
                top: pos.top,
                left: pos.left+ele.width()
            });
            
            var patt = /(?:\+|\d)[\d\-\(\) ]{9,}\d/;
            
            if(!patt.test(ele.val())) {
                jVal.errors = true;
                phoneinfo.removeClass('correct').addClass('error').html('!').show();
                    ele.removeClass('normal').addClass('wrong');					
            } else {
                phoneinfo.removeClass('error').addClass('correct').html('ok').show();
                    ele.removeClass('wrong').addClass('normal');
            }
        },
        
        'email' : function() {
        
            $('body').append('<div id="emailInfo" class="info"></div>');
        
            var emailInfo = $('#emailInfo');
            var ele = $('#email');
            var pos = ele.offset();
            
            emailInfo.css({
                top: pos.top,
                left: pos.left+ele.width()
            });
            
            var patt = /^.+@.+[.].{2,}$/i;
            
            if(!patt.test(ele.val())) {
                jVal.errors = true;
                    emailInfo.removeClass('correct').addClass('error').html('!').show();
                    ele.removeClass('normal').addClass('wrong');					
            } else {
                    emailInfo.removeClass('error').addClass('correct').html('ok').show();
                    ele.removeClass('wrong').addClass('normal');
            }
        },
        
        'about' : function() {
        
            $('body').append('<div id="aboutInfo" class="info"></div>');
        
            var aboutInfo = $('#aboutInfo');
            var ele = $('#about');
            var pos = ele.offset();
            
            aboutInfo.css({
                top: pos.top,
                left: pos.left+ele.width()
            });
            
            if(ele.val().length < 1) {
                jVal.errors = true;
                    aboutInfo.removeClass('correct').addClass('error').html('!').show();
                    ele.removeClass('normal').addClass('wrong').css({'font-weight': 'normal'});		
            } else {
                    aboutInfo.removeClass('error').addClass('correct').html('ok').show();
                    ele.removeClass('wrong').addClass('normal');
            }
        },
        
        'sendIt' : function (){
            if(!jVal.errors) {
                $('#jform').submit();
            }
        }
    };
    
    // ====================================================== //
    
    $('#send').click(function (){
        var obj = $.browser.webkit ? $('body') : $('html');
        obj.animate({ scrollTop: $('#jform').offset().top }, 750, function (){
            jVal.errors = false;
            jVal.fullName();
            jVal.fullwork();
            jVal.phone();
            jVal.email();
            jVal.about();
            jVal.sendIt();
        });
        return false;
    });
    
    $('#fullname').change(jVal.fullName);
    $('#fullwork').change(jVal.fullwork);
    $('#phone').change(jVal.phone);
    $('#email').change(jVal.email);
    $('#about').change(jVal.about);
    
    // ====================================================== //
    });