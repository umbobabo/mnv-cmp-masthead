(function() { var css = "@font-face{font-family:Officina;src:url('http://cdn.static-economist.com/sites/all/themes/econfinal/font/Officina.eot');src:url('http://cdn.static-economist.com/sites/all/themes/econfinal/font/Officina.eot?') format('embedded-opentype'),url(data:application/x-font-woff;charset=utf-8;base64,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) format('woff'),url('http://cdn.static-economist.com/sites/all/themes/econfinal/font/Officina.ttf') format('truetype'),url('http://cdn.static-economist.com/sites/all/themes/econfinal/font/Officina.svg#Officina') format('svg');font-weight:normal;font-style:normal;}.footer-global div,.footer-global span,.footer-global h1,.footer-global h2,.footer-global h3,.footer-global h4,.footer-global h5,.footer-global h6,.footer-global p,.footer-global a,.footer-global img,.footer-global b,.footer-global u,.footer-global i,.footer-global dl,.footer-global dt,.footer-global dd,.footer-global ol,.footer-global ul,.footer-global li{margin:0;padding:0;border:0;vertical-align:baseline;background:transparent;}.footer-global ol,.footer-global ul{list-style:none;}.footer-global a{text-decoration:none;}.footer-global{max-width:1220px;height:152px;margin:0 auto;background-color:#333333;font-family:Officina,sans-serif !important;font-weight:normal;-webkit-font-smoothing:antialiased !important;overflow:hidden;font-size:14px;line-height:22px;}.footer-global .footer-container{position:relative;height:100%;}.footer-global .footer-left,.footer-global .footer-mid,.footer-global .footer-right{font-size:17.5px;line-height:30px;border-right:1px solid #4A4A4A;width:23%;height:62%;float:left;}.footer-global .footer-left ul,.footer-global .footer-mid ul,.footer-global .footer-right ul{padding:12px 20px;}.footer-global .footer-left ul li a,.footer-global .footer-mid ul li a,.footer-global .footer-right ul li a,.footer-global .social-header{color:#dadada;font-size:18px;line-height:30px;}.footer-global .footer-left ul li:hover a,.footer-global .footer-mid ul li:hover a,.footer-global .footer-right ul li:hover a{text-decoration:none;color:#fff;}.footer-global .footer-left ul li:hover a{color:#62EAD5;}.footer-global .footer-left ul li a{color:#48BDAB;}.footer-global .footer-far-right{padding:12px 20px;font-size:17.5px;line-height:25px;float:left;}.footer-far-right ul.social-follow li{float:left;margin-right:8.125px;width:auto;line-height:15.625px;}.footer-global .social-footer{color:#AAA;font-size:14px;line-height:20px;height:16px;}.footer-global .social-footer a{text-decoration:none;color:#AAA;}.footer-global .social-footer:hover a{text-decoration:none;color:#fff;}.footer-global .footer-right{color:#AAA;}.footer-global .footer-bottom{background-color:#000;clear:both;width:100%;height:37px;padding-left:20px;position:absolute;bottom:0;}.footer-global .footer-bottom ul li,.footer-global .footer-bottom ul li a{float:left;color:#AAA;padding-right:10px;margin-right:12.5px;font-size:15px;line-height:35px;}.footer-global .footer-bottom ul li:hover a{text-decoration:none;color:#fff;}.footer-global .icon{display:inline-block;color:white;fill:#AAA;width:32px;height:32px;}.footer-global .icon:hover{fill:#fff;}.footer-global .icon-linkedin{width:33px;height:33px;margin-left:-2px;}@media all and (max-width: 925px){.footer-global{height:290px;}.footer-global .footer-left{width:100%;height:50px;border-bottom:1px solid #4A4A4A;}.footer-global .footer-left ul,.footer-global .footer-mid ul,.footer-global .footer-right ul{padding:6px 10px;}.footer-global .footer-left ul li{float:left;padding-right:20px;}.footer-global .footer-left ul li a{line-height:40px;font-size:20px;}.footer-global .footer-mid,.footer-global .footer-right{width:49%;height:105px;}.footer-global .footer-right{border:none;}.footer-global .footer-far-right{border-top:1px solid #4A4A4A;width:100%;}.footer-global .social-header{float:left;padding-right:20px;}.footer-global .social-follow{float:left;padding-right:20px;}.footer-global .social-footer{line-height:30px;float:right;padding-right:40px;}.footer-global .footer-bottom{height:75px;}.footer-global .footer-bottom ul{padding-top:10px;}.footer-global .footer-bottom ul li,.footer-global .footer-bottom ul li a{line-height:25px;}.footer-global .footer-far-right{padding:10px 10px;}.footer-global .footer-bottom{padding:4px 10px;}}@media all and (max-width: 560px){.footer-global{height:270px;}.footer-global .footer-container .footer-bottom{height:50px;}.footer-global .footer-mid ul li a,.footer-global .footer-right ul li a,.footer-global .social-header{color:#DADADA;font-size:15px;line-height:30px;}.footer-global .social-footer{float:left;}.footer-global .footer-bottom ul{padding-top:5px;}.footer-global .footer-bottom ul li a{line-height:20px;font-size:14px;padding-right:0;}.footer-global .footer-bottom ul li{line-height:20px;font-size:12px;}}@media all and (max-width: 500px){.footer-global{height:298px;}}@media all and (max-width: 380px){.footer-global{height:315px;}.footer-global .footer-bottom ul li,.footer-global .footer-bottom ul li a{padding:0;margin-right:10px;}.footer-global .footer-container .footer-bottom{height:70px;}}\n" + 
"\n", head = document.getElementsByTagName('head')[0], style = document.createElement('style'); style.setAttribute('type', 'text/css'); var nodeStyle = document.createTextNode(css); if(style.styleSheet){ style.styleSheet.cssText = nodeStyle.toString();}else{ style.appendChild(nodeStyle); }; head.appendChild(style);})();