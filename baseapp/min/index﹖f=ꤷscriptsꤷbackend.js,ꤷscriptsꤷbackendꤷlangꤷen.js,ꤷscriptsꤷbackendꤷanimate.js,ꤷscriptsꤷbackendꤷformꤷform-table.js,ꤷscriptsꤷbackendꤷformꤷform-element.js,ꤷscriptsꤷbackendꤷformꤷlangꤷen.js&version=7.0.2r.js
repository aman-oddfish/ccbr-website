TOOLBOX=(typeof TOOLBOX!=='undefined')?TOOLBOX:{};TOOLBOX.windowLoaded=false;YAHOO.util.Event.addListener(window,'load',function(){TOOLBOX.windowLoaded=true;});TOOLBOX.cookiePath="";TOOLBOX.Events={};TOOLBOX.Events.BeforePrint=new YAHOO.util.CustomEvent('beforePrint');TOOLBOX.confirmDelete=function(link,confirm_text){if(typeof confirm_text=='undefined'){confirm_text='Are you sure you want to delete this item?';}
TOOLBOX.confirm({text:confirm_text,handleYes:function(){this.hide();document.location.href=link;}});};TOOLBOX.confirm=function(config)
{TOOLBOX.globals=TOOLBOX.globals||{};TOOLBOX.globals.simpleConfirm=TOOLBOX.globals.simpleConfirm||new YAHOO.widget.SimpleDialog('simpleConfirm',{width:"300px",fixedcenter:true,visible:false,draggable:true,close:true,modal:true,text:'Are you sure?',icon:'hlpicon',constraintoviewport:true,buttons:[{text:TOOLBOX.Lang.yes,handler:null,isDefault:true},{text:TOOLBOX.Lang.no,handler:function(){this.hide();}}]});if(typeof config.header=='undefined'){TOOLBOX.globals.simpleConfirm.setHeader(TOOLBOX.Lang.alert);}
else{TOOLBOX.globals.simpleConfirm.setHeader(config.header);}
if(typeof config.handleYes!='undefined'){var buttons=TOOLBOX.globals.simpleConfirm.cfg.getProperty('buttons');buttons[0].handler=config.handleYes;config.buttons=buttons;}
TOOLBOX.globals.simpleConfirm.cfg.applyConfig(config);TOOLBOX.globals.simpleConfirm.render(document.body);TOOLBOX.globals.simpleConfirm.show();};TOOLBOX.alert=function(text)
{TOOLBOX.globals=TOOLBOX.globals||{};TOOLBOX.globals.alertDialog=TOOLBOX.globals.alertDialog||new YAHOO.widget.SimpleDialog('alertDialog',{width:"300px",zIndex:"20",fixedcenter:true,visible:false,draggable:true,close:true,modal:true,text:'Warning!',icon:'alrticon',constraintoviewport:true,buttons:[{text:TOOLBOX.Lang.ok,handler:function(){this.hide();}}]});TOOLBOX.globals.alertDialog.setHeader(TOOLBOX.Lang.alert);TOOLBOX.globals.alertDialog.cfg.applyConfig({text:text});TOOLBOX.globals.alertDialog.render(document.body);TOOLBOX.globals.alertDialog.show();};TOOLBOX.print=function()
{TOOLBOX.Events.BeforePrint.fire();window.print();}
TOOLBOX.randomString=function(length)
{var result='';var characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';var charactersLength=characters.length;for(var i=0;i<length;i++){result+=characters.charAt(Math.floor(Math.random()*charactersLength));}
return result;}
TOOLBOX.multipleSelectReplace=function(ele){if(typeof ele.tagName=='undefined'){ele=document.getElementById(ele);if(ele==null){return false;}}
if(typeof ele.tagName!='undefined'&&ele.tagName.toLowerCase()=='select'){if(ele.className.match('MultipleSelectReplace')){multiple_select_replace(ele);}}
return true;};TOOLBOX.registerListingTable=function(tableName,tbl){tableName=tableName.replace(/[^A-z]/g,'_').toLowerCase();if(typeof window.listingTables=='undefined'){window.listingTables={};}
var count;if(1||(typeof window.listingTables[tableName]=='undefined')){window.listingTables[tableName]=tbl
count=0;}
else{window.listingTables[tableName]=[window.listingTables[tableName],tbl];count=window.listingTables[tableName].length-1;}
return tableName+count.toString();};TOOLBOX.getListingTable=function(tableName){tableName=tableName.replace(/[^A-z]/g,'_').toLowerCase();return(typeof window.listingTables!='undefined'&&typeof window.listingTables[tableName]!='undefined')?window.listingTables[tableName]:false;};TOOLBOX.registerFormTable=function(formName,frm){formName=formName.replace(/[^A-z]/g,'_').toLowerCase();if(typeof window.formTables=='undefined'){window.formTables={};}
var count;if(typeof window.formTables[formName]=='undefined'){window.formTables[formName]=[frm]
count=0;}
else{window.formTables[formName].push(frm);count=window.formTables[formName].length-1;}
return formName+count.toString();};TOOLBOX.togglePasswordField=function(passwordField){if(typeof passwordField==='string'){passwordField=document.getElementById(passwordField)}
if(!passwordField instanceof HTMLInputElement||!passwordField.parentNode){return;}
var toggleBtn=document.createElement('i');toggleBtn.onclick=function(){if(passwordField.getAttribute("type")=="password"){toggleBtn.title="Hide Password";toggleBtn.classList.add("show-pwd");passwordField.setAttribute("type","text");}else{toggleBtn.title="Show Password";toggleBtn.classList.remove("show-pwd");passwordField.setAttribute("type","password");}}
toggleBtn.title="Show Password";toggleBtn.classList.add('toggle-pwd-field-btn');passwordField.nextSibling?passwordField.parentNode.insertBefore(toggleBtn,passwordField.nextSibling):passwordField.parentNode.appendChild(toggleBtn);}
TOOLBOX.getFormTable=function(formName){formName=formName.replace(/[^A-z]/g,'_').toLowerCase();if(typeof window.formTables!='undefined'&&typeof window.formTables[formName]!='undefined'){return window.formTables[formName][window.formTables[formName].length-1];}
else{return false;}};TOOLBOX.dispatchElementEvent=function(element,eventName){if(!(element instanceof HTMLElement)||!eventName){return;}
try{if("createEvent"in element.ownerDocument){var evt=document.createEvent("HTMLEvents");evt.initEvent(eventName,false,true);element.dispatchEvent(evt);}else if(typeof element.fireEvent==='function'){element.fireEvent("on"+eventName);}}catch(e){}};TOOLBOX.getFormTableFromForm=function(formObj)
{if(typeof window.formTables!='undefined'){for(var formName in window.formTables){if(window.formTables.hasOwnProperty(formName)){for(var i=0;i<window.formTables[formName].length;i++){if(!window.formTables[formName][i].parent&&window.formTables[formName][i].form===formObj){return window.formTables[formName][i];}}}}}
return null;};TOOLBOX.unregisterFormTable=function(tlbxForm)
{if(typeof window.formTables!='undefined'){for(var formName in window.formTables){if(window.formTables.hasOwnProperty(formName)){for(var i=0;i<window.formTables[formName].length;i++){if(window.formTables[formName][i]===tlbxForm||window.formTables[formName][i].form===tlbxForm){window.formTables[formName].splice(i,1);if(window.formTables[formName][i]===window.myForm){delete window.formTables[formName][i];}
return true;}}}}}
return false;};TOOLBOX.blurField=function(fld){DOM_Editor.removeClass(fld,'fieldFocus');};TOOLBOX.focusField=function(fld){DOM_Editor.addClass(fld,'fieldFocus');};TOOLBOX.mergeConfig=function(config,default_config)
{if(typeof config=='undefined'){config={};}
for(var i in default_config){if(typeof config[i]=='undefined'){config[i]=default_config[i];}}
return config;};TOOLBOX.setCookie=function(cName,value,expireSeconds,path)
{var _cookie=cName+"="+escape(value);var cookiePath=(path)?path:TOOLBOX.cookiePath;if(typeof expireSeconds!='undefined'){var exdate=new Date();exdate.setTime(exdate.getTime()+(expireSeconds*1000));_cookie+=";expires="+exdate.toGMTString();}
_cookie+=";path="+cookiePath;document.cookie=_cookie;};TOOLBOX.getCookie=function(name)
{var theCookies=document.cookie.split(/[; ]+/);var returnVal=null;for(var i=0;i<theCookies.length;i++){var aName=theCookies[i].substring(0,theCookies[i].indexOf('='));if(aName==name){returnVal=unescape(theCookies[i].substring(theCookies[i].indexOf('=')+1));}}
return returnVal;};TOOLBOX.clearContainer=function(containerName)
{var el=document.getElementById(containerName);if(el!=null){while(el.childNodes.length>0){el.removeChild(el.firstChild);}}};(function(tlbx)
{var timerId=null;var queue=[];var defaultTimeout=10000;var queueSystemMessage=function(message,status)
{if(!timerId){showSystemMessage(message,status);}
else{queue.push([message,status]);}};var showSystemMessage=function(message,status,time)
{if(!time){time=defaultTimeout;}
if(timerId){window.clearTimeout(timerId);}
var el=document.getElementById("app-system-message");el.innerHTML=message;if(status=='error'){el.className='message statusError';}
else if(status=='progress'){el.className='message statusProgress';}else{el.className='message statusInfo';}
el.style.display="";var timerId=window.setTimeout(function(){el.style.display="none";nextMessage();},time);return timerId;};var hideSystemMessage=function(timerId)
{var el=document.getElementById('app-system-message');if(el!=null){el.style.display='none';}
if(timerId!=null){window.clearTimeout(timerId);}
nextMessage();};var nextMessage=function()
{if(queue.length>0){showSystemMessage.apply(tlbx,queue.pop());}};tlbx.queueSystemMessage=queueSystemMessage;tlbx.showSystemMessage=showSystemMessage;tlbx.hideSystemMessage=hideSystemMessage;})(TOOLBOX);TOOLBOX.LoadingMessage=(function()
{var config={};var defaultConfig={loadingElName:'app-system-loader',loadingTextElName:'app-system-loader-text',stillWorkingDelay:5000};var stillWorkingTimerId=false;var initCalled=false;return{init:function(options){if(typeof options!='undefined'){config=options;}
config=TOOLBOX.mergeConfig(config,defaultConfig);initCalled=true;},show:function(){if(!initCalled){this.init();}
var loadingEl=document.getElementById(config.loadingElName);var loadingTextEl=document.getElementById(config.loadingTextElName);if(loadingEl&&loadingTextEl){loadingTextEl.innerHTML=TOOLBOX.Lang.loading;loadingEl.style.display='';stillWorkingTimerId=window.setInterval(function(){window.clearInterval(stillWorkingTimerId);loadingTextEl.innerHTML=TOOLBOX.Lang.stillWorking;},config.stillWorkingDelay);}},hide:function(){if(!initCalled){this.init();}
var loadingEl=document.getElementById(config.loadingElName);if(loadingEl){loadingEl.style.display='none';if(stillWorkingTimerId){window.clearInterval(stillWorkingTimerId);}}}};})();TOOLBOX.Notify={};TOOLBOX.Notify.show=function(message)
{var notifyPanel=new YAHOO.widget.Panel("message-notify-div",{width:"180px",height:"160px",fixedcenter:false,close:true,draggable:false,modal:false,visible:false,context:["bottom-right","br","tr"],effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.75}});notifyPanel.setHeader('&nbsp;');notifyPanel.setBody(message);notifyPanel.render(document.body);window.setTimeout(function(){notifyPanel.show();},300);window.setTimeout(function(){notifyPanel.hide();},5000);};TOOLBOX.navigateSecurely=function(link,hashParam,secureCookieName)
{var e=window.event,middleClick=false,ctrlClick=false,shiftClick=false,newWindow=false;if(e){middleClick=(e.which==2&&e.target&&e.target.nodeName&&'a'===e.target.nodeName.toLowerCase());ctrlClick=e.ctrlKey;shiftClick=e.shiftKey;}
if(middleClick||ctrlClick||shiftClick){window.open(TOOLBOX.hashUrl(link,hashParam,secureCookieName));}
else{document.location.href=TOOLBOX.hashUrl(link,hashParam,secureCookieName);}};TOOLBOX.hashUrl=function(link,hashParam,secureCookieName)
{if(typeof hashParam=='undefined'){hashParam='j';}
var hashValue=TOOLBOX.hashValue(link,secureCookieName);var href=link;if(href.indexOf('?')>0){href+='&'+hashParam+'='+hashValue;}
else{href+='/'+hashParam+'/'+hashValue;}
return href;};TOOLBOX.hashValue=function(link,secureCookieName)
{var linkParts=link.parseUrl();var hashPart=linkParts.path;if(linkParts.query){hashPart+='?'+linkParts.query;}
if(typeof secureCookieName=='undefined'){secureCookieName='NID';}
return md5(TOOLBOX.getCookie(secureCookieName)+hashPart);};TOOLBOX.current=function(obj)
{for(var i in obj){return obj[i];}
return false;};TOOLBOX.isArray=function(v)
{return(v.constructor.toString().indexOf("Array")>=0)};TOOLBOX.arrayIntersect=function(arr1){var retArr={},argl=arguments.length,arglm1=argl-1,k1='',arr={},i=0,k='';arr1keys:for(k1 in arr1){if(!arr1.hasOwnProperty(k1)){continue arr1keys;}
arrs:for(i=1;i<argl;i++){arr=arguments[i];for(k in arr){if(arr.hasOwnProperty(k)&&arr[k]===arr1[k1]){if(i===arglm1){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;};TOOLBOX.objectSize=function(obj)
{var size=0,key;for(key in obj){if(obj.hasOwnProperty(key))size++;}
return size;}
TOOLBOX.objectPick=function(obj,keys)
{if(!keys||!TOOLBOX.isArray(keys)){return obj;}
var output={};for(key in obj){if(keys.indexOf(key)!=-1){output[key]=obj[key];}}
return output;}
TOOLBOX.createColourPickerSingle=function(hiddenId,containerId,buttonId,config)
{config.hiddenField=hiddenId;config.colourContainer=containerId;config.button=buttonId;var cp=new TOOLBOX.ColourPicker(config);(function(cp)
{YAHOO.util.Event.addListener(buttonId,'click',function(e,o)
{o.show();},cp);})(cp);};TOOLBOX.createColourPickerMultiple=function(elementId,config)
{if(!elementId||typeof jQuery=='undefined'){return;}
config=config||{};var colourConfig=TOOLBOX.mergeConfig(config,{letterCase:'uppercase','useId':true});if(colourConfig.useId){elementId='#'+elementId.replace(/#/,'');}
var keywords=colourConfig.keywords||[];if(!jQuery.isArray(keywords)){keywords=jQuery.map(colourConfig.keywords.split(','),function(a){return jQuery.trim(a.toLowerCase());});}
var isImage=function(value){return value.indexOf('#')!==0&&value.indexOf('rgb')!==0&&keywords.indexOf(value)===-1;}
var updateSwatch=function(element,value,baseHref){var isImageValue=isImage(value),image=(baseHref||'')+value,swatchCss={backgroundImage:isImageValue?'none':''},swatchColorCss={backgroundImage:isImageValue?'url("'+image+'")':'',backgroundSize:isImageValue?'contain':'',backgroundRepeat:isImageValue?'no-repeat':'',backgroundColor:isImageValue?'':null,backgroundPosition:isImageValue?'50%':null};jQuery(element).next().css(swatchCss)
jQuery(element).next().find('.minicolors-swatch-color').css(swatchColorCss);}
if(jQuery(elementId).length){if(jQuery(elementId).parents('.minicolors')){if(colourConfig.cloneFrom){if(colourConfig.useId){colourConfig.cloneFrom='#'+colourConfig.cloneFrom;}
var prevSettings=jQuery(colourConfig.cloneFrom).minicolors('settings');colourConfig=TOOLBOX.mergeConfig(colourConfig,prevSettings);}
jQuery(elementId).minicolors('destroy');}
if(!jQuery.fn.minicolors.override){var originalFn=jQuery.fn.minicolors;jQuery.fn.minicolors=function(method,data){if(method==='image'){var s=jQuery(this).data('minicolors-settings')||{};if(data===undefined){return s.image;}
s.image=data;if(!s.originalKeywords){s.originalKeywords=s.keywords||'';}
s.keywords=(s.originalKeywords).split(',');s.keywords.push(data);s.keywords=s.keywords.join(',');jQuery(this).data('minicolors-settings',s);return jQuery(this);}
return originalFn.apply(this,arguments);}
jQuery.fn.minicolors.override=true;}
var currentValue=jQuery(elementId).val();jQuery(elementId).minicolors(colourConfig);if(colourConfig.containerClass){jQuery(elementId).parents('.minicolors').addClass(colourConfig.containerClass)}
if(colourConfig.allowImages){jQuery(elementId).on('change',function(){this.originalValue=this.value;if(this.value&&isImage(this.value)){jQuery(this).minicolors('image',this.value);}
updateSwatch(this,this.value,colourConfig.baseHref)});jQuery(elementId).on('blur',function(){var img=jQuery(this).minicolors('image');if(img&&this.originalValue&&this.originalValue===img){jQuery(this).val(this.originalValue);}})
if(currentValue&&isImage(currentValue)){jQuery(elementId).minicolors('image',currentValue);jQuery(elementId).val(currentValue);jQuery(elementId).trigger("change")}}}};TOOLBOX.require=function(filename){var d=window.document;var js_code=TOOLBOX.fileGetContents(filename);var script_block=d.createElementNS?d.createElementNS('http://www.w3.org/1999/xhtml','script'):d.createElement('script');script_block.type='text/javascript';var client_pc=navigator.userAgent.toLowerCase();if((client_pc.indexOf('msie')!==-1)&&(client_pc.indexOf('opera')===-1)){script_block.text=js_code;}else{script_block.appendChild(d.createTextNode(js_code));}
if(typeof(script_block)!="undefined"){d.getElementsByTagName('head')[0].appendChild(script_block);}
return 0;};TOOLBOX.requireOnce=function(filename){TOOLBOX.globals=TOOLBOX.globals||{};TOOLBOX.globals.requireOnceFiles=TOOLBOX.globals.requireOnceFiles||[];var d=window.document;filename=filename.replace(/&amp;/,'&');if(TOOLBOX.globals.requireOnceFiles.length==0){var scripts=d.getElementsByTagName('head')[0].getElementsByTagName('script'),src;for(var i=0;i<scripts.length;i++){if(scripts[i].getAttribute('src')){src=scripts[i].getAttribute('src').replace(/&amp;/,'&');TOOLBOX.globals.requireOnceFiles.push(src);}}}
if(TOOLBOX.globals.requireOnceFiles.inArray(filename)==-1){TOOLBOX.require(filename);TOOLBOX.globals.requireOnceFiles.push(filename);}};TOOLBOX.evalScriptTag=function(script)
{if(script.innerHTML){var d=window.document;var js_code=script.innerHTML;var script_block=d.createElementNS?d.createElementNS('http://www.w3.org/1999/xhtml','script'):d.createElement('script');script_block.type='text/javascript';var client_pc=navigator.userAgent.toLowerCase();if((client_pc.indexOf('msie')!==-1)&&(client_pc.indexOf('opera')===-1)){script_block.text=js_code;}else{script_block.appendChild(d.createTextNode(js_code));}
if(typeof(script_block)!="undefined"){d.getElementsByTagName('head')[0].appendChild(script_block);}}
return 0;};TOOLBOX.fileGetContents=function(url,flags,context,offset,maxLen)
{var tmp,headers=[],newTmp=[],k=0,i=0,href='',pathPos=-1,flagNames=0,content=null,http_stream=false;var func=function(value){return value.substring(1)!=='';};this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};var ini=this.php_js.ini;context=context||this.php_js.default_streams_context||null;if(!flags){flags=0;}
var OPTS={FILE_USE_INCLUDE_PATH:1,FILE_TEXT:32,FILE_BINARY:64};if(typeof flags==='number'){flagNames=flags;}
else{flags=[].concat(flags);for(i=0;i<flags.length;i++){if(OPTS[flags[i]]){flagNames=flagNames|OPTS[flags[i]];}}}
if(flagNames&OPTS.FILE_BINARY&&(flagNames&OPTS.FILE_TEXT)){throw'You cannot pass both FILE_BINARY and FILE_TEXT to file_get_contents()';}
if((flagNames&OPTS.FILE_USE_INCLUDE_PATH)&&ini.include_path&&ini.include_path.local_value){var slash=ini.include_path.local_value.indexOf('/')!==-1?'/':'\\';url=ini.include_path.local_value+slash+url;}
else if(!/^(https?|file):/.test(url)){href=window.location.href;pathPos=url.indexOf('/')===0?href.indexOf('/',8)-1:href.lastIndexOf('/');url=href.slice(0,pathPos+1)+url;}
if(context){var http_options=context.stream_options&&context.stream_options.http;http_stream=!!http_options;}
if(!context||http_stream){var req=window.ActiveXObject?new ActiveXObject('Microsoft.XMLHTTP'):new XMLHttpRequest();if(!req){throw new Error('XMLHttpRequest not supported');}
var method=http_stream?http_options.method:'GET';var async=!!(context&&context.stream_params&&context.stream_params['phpjs.async']);if(ini['phpjs.ajaxBypassCache']&&ini['phpjs.ajaxBypassCache'].local_value){url+=(url.match(/\?/)==null?"?":"&")+(new Date()).getTime();}
req.open(method,url,async);if(async){var notification=context.stream_params.notification;if(typeof notification==='function'){if(0&&req.addEventListener){}
else{req.onreadystatechange=function(aEvt){var objContext={responseText:req.responseText,responseXML:req.responseXML,status:req.status,statusText:req.statusText,readyState:req.readyState,evt:aEvt};var bytes_transferred;switch(req.readyState){case 0:notification.call(objContext,0,0,'',0,0,0);break;case 1:notification.call(objContext,0,0,'',0,0,0);break;case 2:notification.call(objContext,0,0,'',0,0,0);break;case 3:bytes_transferred=req.responseText.length*2;notification.call(objContext,7,0,'',0,bytes_transferred,0);break;case 4:if(req.status>=200&&req.status<400){bytes_transferred=req.responseText.length*2;notification.call(objContext,8,0,'',req.status,bytes_transferred,0);}
else if(req.status===403){notification.call(objContext,10,2,'',req.status,0,0);}
else{notification.call(objContext,9,2,'',req.status,0,0);}
break;default:throw'Unrecognized ready state for file_get_contents()';}}}}}
if(http_stream){var sendHeaders=http_options.header&&http_options.header.split(/\r?\n/);var userAgentSent=false;for(i=0;i<sendHeaders.length;i++){var sendHeader=sendHeaders[i];var breakPos=sendHeader.search(/:\s*/);var sendHeaderName=sendHeader.substring(0,breakPos);req.setRequestHeader(sendHeaderName,sendHeader.substring(breakPos+1));if(sendHeaderName==='User-Agent'){userAgentSent=true;}}
if(!userAgentSent){var user_agent=http_options.user_agent||(ini.user_agent&&ini.user_agent.local_value);if(user_agent){req.setRequestHeader('User-Agent',user_agent);}}
content=http_options.content||null;}
if(flagNames&OPTS.FILE_TEXT){var content_type='text/html';if(http_options&&http_options['phpjs.override']){content_type=http_options['phpjs.override'];}
else{var encoding=(ini['unicode.stream_encoding']&&ini['unicode.stream_encoding'].local_value)||'UTF-8';if(http_options&&http_options.header&&(/^content-type:/im).test(http_options.header)){content_type=http_options.header.match(/^content-type:\s*(.*)$/im)[1];}
if(!(/;\s*charset=/).test(content_type)){content_type+='; charset='+encoding;}}
req.overrideMimeType(content_type);}
else if(flagNames&OPTS.FILE_BINARY){req.overrideMimeType('text/plain; charset=x-user-defined');}
if(http_options&&http_options['phpjs.sendAsBinary']){req.sendAsBinary(content);}
else{req.send(content);}
tmp=req.getAllResponseHeaders();if(tmp){tmp=tmp.split('\n');for(k=0;k<tmp.length;k++){if(func(tmp[k])){newTmp.push(tmp[k]);}}
tmp=newTmp;for(i=0;i<tmp.length;i++){headers[i]=tmp[i];}
this.$http_response_header=headers;}
if(offset||maxLen){if(maxLen){return req.responseText.substr(offset||0,maxLen);}
return req.responseText.substr(offset);}
return req.responseText;}
return false;};TOOLBOX.getFormValues=function(form,config)
{config=TOOLBOX.mergeConfig(config,{getEmptyVals:true,getVisibleOnly:false});var formValues={};var _validEle=function(ele)
{var success=(ele.tagName.toLowerCase()=="input"&&(ele.type=="text")||(ele.type=="hidden")||(ele.type=="checkbox"&&ele.checked)||(ele.type=="radio"&&ele.checked))||(ele.tagName.toLowerCase()=="select")||(ele.tagName.toLowerCase()=="textarea");return success;};var _matches,_collectionName,_collectionValueKey;for(var i=0;i<form.elements.length;i++){if((!config.getVisibleOnly)||DOM_Editor.isElementVisible(form.elements[i])){if((_matches=form.elements[i].name.match(/\[(.*)\]$/))){if(_validEle(form.elements[i])){_collectionName=form.elements[i].name.replace(_matches[0],'');_collectionValueKey=_matches[1];if(form.elements[i].value||config.getEmptyVals){if(typeof formValues[_collectionName]=="undefined"){formValues[_collectionName]={};}
formValues[_collectionName][_collectionValueKey]=form.elements[i].value;}}}
else if(_validEle(form.elements[i])){if(form.elements[i].name){if(form.elements[i].value||config.getEmptyVals){formValues[form.elements[i].name]=form.elements[i].value;}}}}}
return formValues;};TOOLBOX.getNextHighestZIndex=function(obj){var highestIndex=0;var currentIndex=0;var elArray=Array();if(obj){elArray=obj.getElementsByTagName('*');}
else{elArray=document.getElementsByTagName('*');}
for(var i=0;i<elArray.length;i++){if(elArray[i].currentStyle){currentIndex=parseFloat(elArray[i].currentStyle['zIndex']);}
else if(window.getComputedStyle){currentIndex=parseFloat(document.defaultView.getComputedStyle(elArray[i],null).getPropertyValue('z-index'));}
if(!isNaN(currentIndex)&&currentIndex>highestIndex){highestIndex=currentIndex;}}
return highestIndex+1;};TOOLBOX.isObject=function(mixed_var){if(mixed_var instanceof Array){return false;}else{return(mixed_var!==null)&&(typeof(mixed_var)=='object');}};TOOLBOX.isString=function(mixed_var){return(typeof(mixed_var)=='string');}
TOOLBOX.numberFormat=function(number,decimals,dec_point,thousands_sep){var n=!isFinite(+number)?0:+number,prec=!isFinite(+decimals)?0:Math.abs(decimals),sep=(typeof thousands_sep==='undefined')?',':thousands_sep,dec=(typeof dec_point==='undefined')?'.':dec_point,s='',toFixedFix=function(n,prec){var k=Math.pow(10,prec);return''+Math.round(n*k)/k;};s=(prec?toFixedFix(n,prec):''+Math.round(n)).split('.');if(s[0].length>3){s[0]=s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,sep);}
if((s[1]||'').length<prec){s[1]=s[1]||'';s[1]+=new Array(prec-s[1].length+1).join('0');}
return s.join(dec);};TOOLBOX.toggleVisibility=function(elementId)
{var element=document.getElementById(elementId);if(element!=null&&element.style.display=="none"){element.style.display="";}
else if(element!=null&&element.style.display==""){element.style.display="none";}}
function helpbox(subject,helptext)
{if(typeof helptext=='undefined')
{helptext=subject;subject='Help';}
if(document.getElementById('helpbox')!=null&&typeof document.getElementById('helpbox')!='undefined')
{if(typeof default_helptext=='undefined')
{default_helpheading=document.getElementById('helpbox_heading').innerHTML;default_helptext=document.getElementById('helpbox').innerHTML;}
document.getElementById('helpbox_heading').innerHTML=subject;document.getElementById('helpbox').innerHTML=helptext;}}
function nohelpbox()
{if(document.getElementById('helpbox')!=null&&typeof document.getElementById('helpbox')!='undefined')
{if(typeof default_helptext=='undefined')
{default_helpheading='Help';default_helptext='Hover your mouse over an area to learn more';}
document.getElementById('helpbox_heading').innerHTML=default_helpheading;document.getElementById('helpbox').innerHTML=default_helptext;}}
function text_select_change(show_select,select_field,text_field,change_butt){if(show_select){select_field.style.display='';text_field.style.display='none';change_butt.style.display='none';select_field.disabled=false;text_field.disabled=true;}else{select_field.style.display='none';text_field.style.display='';change_butt.style.display='';select_field.disabled=true;text_field.disabled=false;}}
function get_checked_radioObj_value(radioObj){if(!radioObj)
return"";var radioLength=radioObj.length;if(radioLength==undefined)
if(radioObj.checked)
return radioObj.value;else
return"";for(var i=0;i<radioLength;i++){if(radioObj[i].checked){return radioObj[i].value;}}
return"";}
function set_radioObj_value(radioObj,value)
{if(!radioObj)
return"";var radioLength=radioObj.length;if(radioLength==undefined)
{radioObj=[radioObj];radioLength=1;}
for(var i=0;i<radioLength;i++){(radioObj[i].value==value);radioObj[i].checked=(radioObj[i].value==value);}
return"";}
function multiple_select_replace(obj)
{var ms_div=DOM_Editor.createElement({'type':'div','attr':{'class':'MultipleSelect'},'style':{'display':'none'}});var ms_ul=DOM_Editor.createElement({type:'ul'})
ms_div.appendChild(ms_ul);var obj_options=obj.getElementsByTagName('*');for(var i=0;i<obj_options.length;i++){if(obj_options[i].tagName.toLowerCase()=='optgroup'){var li=DOM_Editor.createElement({type:'li',attr:{'class':'optgroup','innerHTML':obj_options[i].label}});ms_ul.appendChild(li);}
else{if(obj_options[i].text!=''){var li=DOM_Editor.createElement({type:'li',children:[{'type':'input',attr:{type:'checkbox',name:obj.name,id:obj.name+'_MS_'+i,value:obj_options[i].value,checked:obj_options[i].selected}},{'type':'label',attr:{'for':obj.name+'_MS_'+i,innerHTML:obj_options[i].text}}]});if(obj_options[i].selected){DOM_Editor.addClass(li,'checked');li.childNodes[0].checked=true;}
YAHOO.util.Event.addListener(li.childNodes[0],'click',function(){if(this.checked){DOM_Editor.addClass(this.parentNode,'checked');}
else{DOM_Editor.removeClass(this.parentNode,'checked');}});ms_ul.appendChild(li);}}}
obj.parentNode.insertBefore(ms_div,obj);obj.parentNode.removeChild(obj);ms_div.style.display='';return obj;}
DOM_Editor=function(){};DOM_Editor.createElement=function(ele)
{var created_ele;if(typeof ele.type=='undefined'){created_ele=false;}
else if(ele.type=='__ELEMENT__'){created_ele=this._create_missing_element(ele.id);}
else{var created_ele=document.createElement(ele.type);if(typeof ele.attr=='object'){for(var i in ele.attr){if(i=='innerHTML'){created_ele.innerHTML=ele.attr[i];}
else if(i=='checked'){created_ele.checked=ele.checked;}
else if(i=='class'){created_ele.setAttribute('class',ele.attr[i]);created_ele.setAttribute('className',ele.attr[i]);}
else if(i=='for'){created_ele.htmlFor=ele.attr[i];}
else{created_ele.setAttribute(i,ele.attr[i]);}}}
if(typeof ele.style=='object'){for(var i in ele.style){created_ele.style[i]=ele.style[i];}}
if(typeof ele.children=='object'){for(var j=0;j<ele.children.length;j++){var new_child=DOM_Editor.createElement(ele.children[j]);created_ele.appendChild(new_child);}}}
return created_ele;};DOM_Editor.addClass=function(ele,className){YAHOO.util.Dom.addClass(ele,className);};DOM_Editor.removeClass=function(ele,className){YAHOO.util.Dom.removeClass(ele,className);};DOM_Editor.addCSSRule=function(selector,declaration){var ua=navigator.userAgent.toLowerCase();var isIE=(/msie/.test(ua))&&!(/opera/.test(ua))&&(/win/.test(ua));var style_node=document.createElement("style");style_node.setAttribute("type","text/css");style_node.setAttribute("media","screen");if(!isIE){style_node.appendChild(document.createTextNode(selector+" {"+declaration+"}"));}
document.getElementsByTagName("head")[0].appendChild(style_node);if(isIE&&document.styleSheets&&document.styleSheets.length>0){var last_style_node=document.styleSheets[document.styleSheets.length-1];if(typeof(last_style_node.addRule)=="object")last_style_node.addRule(selector,declaration);}};DOM_Editor.uniqid=function(prefix){var newDate=new Date();var new_id=null;var count=0;do
{new_id=prefix+newDate.getTime()+count;count++;}while(document.getElementById(new_id)!=null);return new_id;};DOM_Editor.getFormFields=function(frm){var fields=[];for(var i=0;i<frm.elements.length;i++){if(-1===fields.inArray(frm.elements[i].name)){fields.push(frm.elements[i].name);}}
return fields;};DOM_Editor.getFormElement=function(ele_name,frm){if(typeof frm[ele_name]!='undefined'){return frm[ele_name];}
else{var elements=[];for(var i=0;i<frm.elements.length;i++){if(frm.elements[i].name==ele_name){elements.push(frm.elements[i]);}}
if(elements.length==0){return false;}
else if(elements.length==1){return elements[0];}
else{return elements;}}
return false;};DOM_Editor.createSelectBox=function(name,options,selected,config)
{if(typeof config=='undefined'){config={};}
config=TOOLBOX.mergeConfig(config,{'class':'formDrop'});var selectBox=DOM_Editor.createElement({'type':'select','attr':{'name':name,'class':config['class']}});var selectedIndex=false,o;for(var i=0;i<options.length;i++){o=new Option(options[i].text,options[i].value,false,false);o.value=options[i].value;o.selected=(options[i].value==selected);o.defaultSelected=false;selectedIndex=i+1;selectBox.options[selectBox.options.length]=(o);}
selectBox.setAttribute('selectedIndex',selectedIndex);return selectBox;};DOM_Editor.isElementVisible=function(ele)
{if(ele==null||typeof ele.style=="undefined"){return true;}
return ele.style.display!="none"&&ele.style.visibility!="hidden"&&(!ele.parentNode||DOM_Editor.isElementVisible(ele.parentNode));};function urlencode(str){str=escape(str);str=str.replace('+','%2B');str=str.replace('%20','+');str=str.replace('*','%2A');str=str.replace('/','%2F');str=str.replace('@','%40');str=str.replace('&','%26');str=str.replace('=','%3D');str=str.replace('[','%5B');str=str.replace(']','%5D');return str;}
function urldecode(str){return decodeURIComponent(str.replace(/\+/g,'%20'));}
function stripTags(str,allowed_tags)
{var key='',allowed=false;var matches=[];var allowed_array=[];var allowed_tag='';var i=0;var k='';var html='';var replacer=function(search,replace,str){return str.split(search).join(replace);};if(allowed_tags){allowed_array=allowed_tags.match(/([a-zA-Z]+)/gi);}
str+='';matches=str.match(/(<\/?[\S][^>]*>)/gi);for(key in matches){if(isNaN(key)){continue;}
html=matches[key].toString();allowed=false;for(k in allowed_array){allowed_tag=allowed_array[k];i=-1;if(i!=0){i=html.toLowerCase().indexOf('<'+allowed_tag+'>');}
if(i!=0){i=html.toLowerCase().indexOf('<'+allowed_tag+' ');}
if(i!=0){i=html.toLowerCase().indexOf('</'+allowed_tag);}
if(i==0){allowed=true;break;}}
if(!allowed){str=replacer(html,"",str);}}
return str;};eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('u={N:O(){m(K C=="P"){q w}m(C.r<1){q w}m(K C[0]!="Y"){q w}m(K Q=="P"){q w}n a=C[0];n b=H Q(/(%([%]|(\\-)?(\\+|\\Z)?(0)?(\\d+)?(\\.(\\d)?)?([10])))/g);n c=H L();n d=H L();n e=0;n f=0;n g=0;n h=0;n j=\'\';n k=w;11(k=b.12(a)){m(k[9]){e+=1}f=h;g=b.R-k[0].r;d[d.r]=a.M(f,g);h=b.R;c[c.r]={S:k[0],T:k[3]?F:U,y:k[4]||\'\',I:k[5]||\' \',V:k[6]||0,G:k[8],v:k[9]||\'%\',W:B(C[e])<0?F:U,7:z(C[e])}}d[d.r]=a.M(h);m(c.r==0){q a}m((C.r-1)<e){q w}n l=w;n k=w;n i=w;13(i=0;i<c.r;i++){m(c[i].v==\'%\'){t=\'%\'}p m(c[i].v==\'b\'){c[i].7=z(D.E(B(c[i].7)).J(2));t=u.A(c[i],F)}p m(c[i].v==\'c\'){c[i].7=z(z.14(B(D.E(B(c[i].7)))));t=u.A(c[i],F)}p m(c[i].v==\'d\'){c[i].7=z(D.E(B(c[i].7)));t=u.A(c[i])}p m(c[i].v==\'f\'){c[i].7=z(D.E(15(c[i].7)).17(c[i].G?c[i].G:6));t=u.A(c[i])}p m(c[i].v==\'o\'){c[i].7=z(D.E(B(c[i].7)).J(8));t=u.A(c[i])}p m(c[i].v==\'s\'){c[i].7=c[i].7.M(0,c[i].G?c[i].G:c[i].7.r);t=u.A(c[i],F)}p m(c[i].v==\'x\'){c[i].7=z(D.E(B(c[i].7)).J(16));t=u.A(c[i])}p m(c[i].v==\'X\'){c[i].7=z(D.E(B(c[i].7)).J(16));t=u.A(c[i]).18()}p{t=c[i].S}j+=d[i];j+=t}j+=d[i];q j},A:O(a,b){m(b){a.y=\'\'}p{a.y=a.W?\'-\':a.y}n l=a.V-a.7.r+1-a.y.r;n c=H L(l<0?0:l).19(a.I);m(!a.T){m(a.I=="0"||b){q a.y+c+a.7}p{q c+a.y+a.7}}p{m(a.I=="0"||b){q a.y+a.7+c.1a(/0/g,\' \')}p{q a.y+a.7+c}}}};1b=u.N;',62,74,'|||||||argument|||||||||||||||if|var||else|return|length||substitution|sprintfWrapper|code|null||sign|String|convert|parseInt|arguments|Math|abs|true|precision|new|pad|toString|typeof|Array|substring|init|function|undefined|RegExp|lastIndex|match|left|false|min|negative||string|x20|bcdfosxX|while|exec|for|fromCharCode|parseFloat||toFixed|toUpperCase|join|replace|sprintf'.split('|'),0,{}))
String.prototype.camelCaseToArray=function(){var Delimed=this.replace(/([A-Z]+)/g,",$1").replace(/^,/,"");return Delimed.split(",");};String.prototype.camelCaseToString=function(){return this.camelCaseToArray().join(' ');};String.prototype.ucfirst=function(){return(this+'').replace(/^(.)|\s(.)/g,function($1){return $1.toUpperCase();});};String.prototype.strrpos=function(needle,offset){var i=(this+'').lastIndexOf(needle,offset);return i>=0?i:false;};String.prototype.parseUrl=function(component){var o={strictMode:false,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};var m=o.parser[o.strictMode?"strict":"loose"].exec(this),uri={},i=14;while(i--){uri[o.key[i]]=m[i]||"";}
switch(component){case'PHP_URL_SCHEME':return uri.protocol;case'PHP_URL_HOST':return uri.host;case'PHP_URL_PORT':return uri.port;case'PHP_URL_USER':return uri.user;case'PHP_URL_PASS':return uri.password;case'PHP_URL_PATH':return uri.path;case'PHP_URL_QUERY':return uri.query;case'PHP_URL_FRAGMENT':return uri.anchor;default:var retArr={};if(uri.protocol!==''){retArr.scheme=uri.protocol;}
if(uri.host!==''){retArr.host=uri.host;}
if(uri.port!==''){retArr.port=uri.port;}
if(uri.user!==''){retArr.user=uri.user;}
if(uri.password!==''){retArr.pass=uri.password;}
if(uri.path!==''){retArr.path=uri.path;}
if(uri.query!==''){retArr.query=uri.query;}
if(uri.anchor!==''){retArr.fragment=uri.anchor;}
return retArr;}};String.prototype.parseStr=function(){var array={};var glue1='=',glue2='&',array2=String(this).split(glue2),i,j,chr,tmp,key,value,bracket,keys,evalStr,fixStr=function(str){return str.urldecode().replace(/([\\"'])/g,'\\$1').replace(/\n/g,'\\n').replace(/\r/g,'\\r');};for(i=0;i<array2.length;i++){if(!array2[i].match(/^\s*$/)){tmp=array2[i].split(glue1);if(tmp.length<2){tmp=[tmp,''];}
key=fixStr(tmp[0]);value=fixStr(tmp[1]);while(key.charAt(0)===' '){key=key.substr(1);}
if(key.indexOf('\0')!==-1){key=key.substr(0,key.indexOf('\0'));}
if(key&&key.charAt(0)!=='['){keys=[];bracket=0;for(j=0;j<key.length;j++){if(key.charAt(j)==='['&&!bracket){bracket=j+1;}
else if(key.charAt(j)===']'){if(bracket){if(!keys.length){keys.push(key.substr(0,bracket-1));}
keys.push(key.substr(bracket,j-bracket));bracket=0;if(key.charAt(j+1)!=='['){break;}}}}
if(!keys.length){keys=[key];}
for(j=0;j<keys[0].length;j++){chr=keys[0].charAt(j);if(chr===' '||chr==='.'||chr==='['){keys[0]=keys[0].substr(0,j)+'_'+keys[0].substr(j+1);}
if(chr==='['){break;}}
evalStr='array';for(j=0;j<keys.length;j++){key=keys[j];if((key!==''&&key!==' ')||j===0){key="'"+key+"'";}
else{key=eval(evalStr+'.push([]);')-1;}
evalStr+='['+key+']';if(j!==keys.length-1&&eval('typeof '+evalStr)==='undefined'){eval(evalStr+' = [];');}}
evalStr+=" = '"+value+"';\n";eval(evalStr);}}}
return array;};String.prototype.urldecode=function(){return urldecode(this);};String.prototype.repeat=function(multiplier)
{return new Array(multiplier+1).join(this.toString());}
Array.prototype.httpBuildQuery=function(numeric_prefix,key){var is_int=function(n){return n.toString().match(/^[0-9]+$/);};var is_array=function(v){return(v.constructor.toString().indexOf("Array")>=0)};var is_object=function(v){return(typeof(v)=="object");};var formdata=this;numeric_prefix=(typeof numeric_prefix=="undefined")?null:numeric_prefix;key=(typeof(key)=="undefined")?null:key;var res=new Array();var add_to_res;for(var k in formdata){var v=formdata[k];if(typeof(v)=='function')continue;var tmp_key=encodeURI(is_int(k)?new Number(numeric_prefix)+new Number(k):k);if(key)tmp_key=key+'['+tmp_key+']';add_to_res=((is_array(v)||is_object(v))?http_build_query(v,key,tmp_key):tmp_key+"="+escape(v));res.push(add_to_res);}
var separator='&';return res.join(separator);};function http_build_query(formdata,numeric_prefix,arg_separator){var value,key,tmp=[];var urlencode=function(str){str=(str+'').toString();return encodeURIComponent(str).replace(/!/g,'%21').replace(/'/g,'%27').replace(/\(/g,'%28').replace(/\)/g,'%29').replace(/\*/g,'%2A').replace(/%20/g,'+');}
var _http_build_query_helper=function(key,val,arg_separator){var k,tmp=[];if(val===true){val="1";}else if(val===false){val="0";}
if(val!==null&&typeof(val)==="object"){for(k in val){if(val[k]!==null){var valPush=_http_build_query_helper(key+"["+k+"]",val[k],arg_separator);if(valPush){tmp.push(valPush);}}}
return tmp.join(arg_separator);}else if(typeof(val)!=="function"){return urlencode(key)+"="+urlencode(val);}else{return false;}};if(!arg_separator){arg_separator="&";}
for(key in formdata){value=formdata[key];if(numeric_prefix&&!isNaN(key)){key=String(numeric_prefix)+key;}
var valPush=_http_build_query_helper(key,value,arg_separator);if(valPush){tmp.push(valPush);}}
return tmp.join(arg_separator);}
Array.prototype.inArray=function(val){for(var i in this){if(this[i]===val)return i;}
return-1;};Array.prototype.remove=function(s){for(i=0;i<this.length;i++){if(s==this[i]){this.splice(i,1);}}};Array.prototype.in_array=Array.prototype.inArray;Date.prototype.formatDate=function(format){var timestamp=this.getTime()/1000;var that=this;var jsdate=((typeof(timestamp)=='undefined')?new Date():(typeof(timestamp)=='number')?new Date(timestamp*1000):new Date(timestamp));var pad=function(n,c){if((n=n+"").length<c){return new Array(++c-n.length).join("0")+n;}else{return n;}};var _dst=function(t){var dst=0;var jan1=new Date(t.getFullYear(),0,1,0,0,0,0);var june1=new Date(t.getFullYear(),6,1,0,0,0,0);var temp=jan1.toUTCString();var jan2=new Date(temp.slice(0,temp.lastIndexOf(' ')-1));temp=june1.toUTCString();var june2=new Date(temp.slice(0,temp.lastIndexOf(' ')-1));var std_time_offset=(jan1-jan2)/(1000*60*60);var daylight_time_offset=(june1-june2)/(1000*60*60);if(std_time_offset===daylight_time_offset){dst=0;}else{var hemisphere=std_time_offset-daylight_time_offset;if(hemisphere>=0){std_time_offset=daylight_time_offset;}
dst=1;}
return dst;};var ret='';var txt_weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var txt_ordin={1:"st",2:"nd",3:"rd",21:"st",22:"nd",23:"rd",31:"st"};var txt_months=["","January","February","March","April","May","June","July","August","September","October","November","December"];var f={d:function(){return pad(f.j(),2);},D:function(){var t=f.l();return t.substr(0,3);},j:function(){return jsdate.getDate();},l:function(){return txt_weekdays[f.w()];},N:function(){return f.w()?f.w():7;},S:function(){return txt_ordin[f.j()]?txt_ordin[f.j()]:'th';},w:function(){return jsdate.getDay();},z:function(){return(jsdate-new Date(jsdate.getFullYear()+"/1/1"))/864e5>>0;},W:function(){var a=f.z(),b=364+f.L()-a;var nd2,nd=(new Date(jsdate.getFullYear()+"/1/1").getDay()||7)-1;if(b<=2&&((jsdate.getDay()||7)-1)<=2-b){return 1;}
if(a<=2&&nd>=4&&a>=(6-nd)){nd2=new Date(jsdate.getFullYear()-1+"/12/31");return that.date("W",Math.round(nd2.getTime()/1000));}
var w=(1+(nd<=3?((a+nd)/7):(a-(7-nd))/7)>>0);return(w?w:53);},F:function(){return txt_months[f.n()];},m:function(){return pad(f.n(),2);},M:function(){var t=f.F();return t.substr(0,3);},n:function(){return jsdate.getMonth()+1;},t:function(){var n;if((n=jsdate.getMonth()+1)==2){return 28+f.L();}
if(n&1&&n<8||!(n&1)&&n>7){return 31;}
return 30;},L:function(){var y=f.Y();return(!(y&3)&&(y%1e2||!(y%4e2)))?1:0;},o:function(){if(f.n()===12&&f.W()===1){return jsdate.getFullYear()+1;}
if(f.n()===1&&f.W()>=52){return jsdate.getFullYear()-1;}
return jsdate.getFullYear();},Y:function(){return jsdate.getFullYear();},y:function(){return(jsdate.getFullYear()+"").slice(2);},a:function(){return jsdate.getHours()>11?"pm":"am";},A:function(){return f.a().toUpperCase();},B:function(){var off=(jsdate.getTimezoneOffset()+60)*60;var theSeconds=(jsdate.getHours()*3600)+
(jsdate.getMinutes()*60)+
jsdate.getSeconds()+off;var beat=Math.floor(theSeconds/86.4);if(beat>1000){beat-=1000;}
if(beat<0){beat+=1000;}
if((String(beat)).length==1){beat="00"+beat;}
if((String(beat)).length==2){beat="0"+beat;}
return beat;},g:function(){return jsdate.getHours()%12||12;},G:function(){return jsdate.getHours();},h:function(){return pad(f.g(),2);},H:function(){return pad(jsdate.getHours(),2);},i:function(){return pad(jsdate.getMinutes(),2);},s:function(){return pad(jsdate.getSeconds(),2);},u:function(){return pad(jsdate.getMilliseconds()*1000,6);},e:function(){return'UTC';},I:function(){return _dst(jsdate);},O:function(){var t=pad(Math.abs(jsdate.getTimezoneOffset()/60*100),4);t=(jsdate.getTimezoneOffset()>0)?"-"+t:"+"+t;return t;},P:function(){var O=f.O();return(O.substr(0,3)+":"+O.substr(3,2));},T:function(){return'UTC';},Z:function(){return-jsdate.getTimezoneOffset()*60;},c:function(){return f.Y()+"-"+f.m()+"-"+f.d()+"T"+f.h()+":"+f.i()+":"+f.s()+f.P();},r:function(){return f.D()+', '+f.d()+' '+f.M()+' '+f.Y()+' '+f.H()+':'+f.i()+':'+f.s()+' '+f.O();},U:function(){return Math.round(jsdate.getTime()/1000);}};return format.replace(/[\\]?([a-zA-Z])/g,function(t,s){if(t!=s){ret=s;}else if(f[s]){ret=f[s]();}else{ret=s;}
return ret;});};Date.prototype.parseFromFormat=function(date,format){if(!date){return null;}
format=format||'Y-m-d';if((date instanceof Date)===false){if(format==='d/m/Y'&&date.match(/\d{2}\/\d{2}\/\d{4}/)){date=date.match(/\d{2}\/\d{2}\/\d{4}/)?date:'';date=date.split('/');date=date.reverse();date=date.join('-');}else if(format==='Y-m-d'){date=date.match(/\d{4}-\d{2}-\d{2}/)?date:'';}else{date=Date.parse(date);}
date=new Date(date);}
return isNaN(date)?null:date;}
Date.prototype.setFromWeekNumber=function(week,year){year=year||this.getFullYear();week=parseFloat(week);year=parseFloat(year);if(week<1||week>53){return NaN;}else if(!Number.isInteger(week)){return NaN;}else if(!Number.isInteger(year)){return NaN;}
const simple=new Date(year,0,1+(week-1)*7);const dayOfWeek=simple.getDay();const isoWeekStart=simple;isoWeekStart.setDate(simple.getDate()-dayOfWeek+1);if(dayOfWeek>4){isoWeekStart.setDate(isoWeekStart.getDate()+7);}
if(isoWeekStart.getFullYear()>year||(isoWeekStart.getFullYear()==year&&isoWeekStart.getMonth()==11&&isoWeekStart.getDate()>28)){return NaN;}
this.setTime(isoWeekStart.getTime());return this;}
function get_html_translation_table(table,quote_style)
{var entities={},hash_map={},decimal=0,symbol='';var constMappingTable={},constMappingQuoteStyle={};var useTable={},useQuoteStyle={};constMappingTable[0]='HTML_SPECIALCHARS';constMappingTable[1]='HTML_ENTITIES';constMappingQuoteStyle[0]='ENT_NOQUOTES';constMappingQuoteStyle[2]='ENT_COMPAT';constMappingQuoteStyle[3]='ENT_QUOTES';useTable=!isNaN(table)?constMappingTable[table]:table?table.toUpperCase():'HTML_SPECIALCHARS';useQuoteStyle=!isNaN(quote_style)?constMappingQuoteStyle[quote_style]:quote_style?quote_style.toUpperCase():'ENT_COMPAT';if(useTable!=='HTML_SPECIALCHARS'&&useTable!=='HTML_ENTITIES'){throw new Error("Table: "+useTable+' not supported');}
entities['38']='&amp;';if(useTable==='HTML_ENTITIES'){entities['160']='&nbsp;';entities['161']='&iexcl;';entities['162']='&cent;';entities['163']='&pound;';entities['164']='&curren;';entities['165']='&yen;';entities['166']='&brvbar;';entities['167']='&sect;';entities['168']='&uml;';entities['169']='&copy;';entities['170']='&ordf;';entities['171']='&laquo;';entities['172']='&not;';entities['173']='&shy;';entities['174']='&reg;';entities['175']='&macr;';entities['176']='&deg;';entities['177']='&plusmn;';entities['178']='&sup2;';entities['179']='&sup3;';entities['180']='&acute;';entities['181']='&micro;';entities['182']='&para;';entities['183']='&middot;';entities['184']='&cedil;';entities['185']='&sup1;';entities['186']='&ordm;';entities['187']='&raquo;';entities['188']='&frac14;';entities['189']='&frac12;';entities['190']='&frac34;';entities['191']='&iquest;';entities['192']='&Agrave;';entities['193']='&Aacute;';entities['194']='&Acirc;';entities['195']='&Atilde;';entities['196']='&Auml;';entities['197']='&Aring;';entities['198']='&AElig;';entities['199']='&Ccedil;';entities['200']='&Egrave;';entities['201']='&Eacute;';entities['202']='&Ecirc;';entities['203']='&Euml;';entities['204']='&Igrave;';entities['205']='&Iacute;';entities['206']='&Icirc;';entities['207']='&Iuml;';entities['208']='&ETH;';entities['209']='&Ntilde;';entities['210']='&Ograve;';entities['211']='&Oacute;';entities['212']='&Ocirc;';entities['213']='&Otilde;';entities['214']='&Ouml;';entities['215']='&times;';entities['216']='&Oslash;';entities['217']='&Ugrave;';entities['218']='&Uacute;';entities['219']='&Ucirc;';entities['220']='&Uuml;';entities['221']='&Yacute;';entities['222']='&THORN;';entities['223']='&szlig;';entities['224']='&agrave;';entities['225']='&aacute;';entities['226']='&acirc;';entities['227']='&atilde;';entities['228']='&auml;';entities['229']='&aring;';entities['230']='&aelig;';entities['231']='&ccedil;';entities['232']='&egrave;';entities['233']='&eacute;';entities['234']='&ecirc;';entities['235']='&euml;';entities['236']='&igrave;';entities['237']='&iacute;';entities['238']='&icirc;';entities['239']='&iuml;';entities['240']='&eth;';entities['241']='&ntilde;';entities['242']='&ograve;';entities['243']='&oacute;';entities['244']='&ocirc;';entities['245']='&otilde;';entities['246']='&ouml;';entities['247']='&divide;';entities['248']='&oslash;';entities['249']='&ugrave;';entities['250']='&uacute;';entities['251']='&ucirc;';entities['252']='&uuml;';entities['253']='&yacute;';entities['254']='&thorn;';entities['255']='&yuml;';}
if(useQuoteStyle!=='ENT_NOQUOTES'){entities['34']='&quot;';}
if(useQuoteStyle==='ENT_QUOTES'){entities['39']='&#39;';}
entities['60']='&lt;';entities['62']='&gt;';for(decimal in entities){symbol=String.fromCharCode(decimal);hash_map[symbol]=entities[decimal];}
return hash_map;}
function htmlentities(string,quote_style)
{var hash_map={},symbol='',tmp_str='',entity='';tmp_str=string.toString();if(false===(hash_map=get_html_translation_table('HTML_ENTITIES',quote_style))){return false;}
hash_map["'"]='&#039;';for(symbol in hash_map){entity=hash_map[symbol];tmp_str=tmp_str.split(symbol).join(entity);}
return tmp_str;}
function md5(str)
{var xl;var rotateLeft=function(lValue,iShiftBits){return(lValue<<iShiftBits)|(lValue>>>(32-iShiftBits));};var addUnsigned=function(lX,lY){var lX4,lY4,lX8,lY8,lResult;lX8=(lX&0x80000000);lY8=(lY&0x80000000);lX4=(lX&0x40000000);lY4=(lY&0x40000000);lResult=(lX&0x3FFFFFFF)+(lY&0x3FFFFFFF);if(lX4&lY4){return(lResult^0x80000000^lX8^lY8);}
if(lX4|lY4){if(lResult&0x40000000){return(lResult^0xC0000000^lX8^lY8);}else{return(lResult^0x40000000^lX8^lY8);}}else{return(lResult^lX8^lY8);}};var _F=function(x,y,z){return(x&y)|((~x)&z);};var _G=function(x,y,z){return(x&z)|(y&(~z));};var _H=function(x,y,z){return(x^y^z);};var _I=function(x,y,z){return(y^(x|(~z)));};var _FF=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(_F(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);};var _GG=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(_G(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);};var _HH=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(_H(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);};var _II=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(_I(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);};var convertToWordArray=function(str){var lWordCount;var lMessageLength=str.length;var lNumberOfWords_temp1=lMessageLength+8;var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1%64))/64;var lNumberOfWords=(lNumberOfWords_temp2+1)*16;var lWordArray=new Array(lNumberOfWords-1);var lBytePosition=0;var lByteCount=0;while(lByteCount<lMessageLength){lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=(lWordArray[lWordCount]|(str.charCodeAt(lByteCount)<<lBytePosition));lByteCount++;}
lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=lWordArray[lWordCount]|(0x80<<lBytePosition);lWordArray[lNumberOfWords-2]=lMessageLength<<3;lWordArray[lNumberOfWords-1]=lMessageLength>>>29;return lWordArray;};var wordToHex=function(lValue){var wordToHexValue="",wordToHexValue_temp="",lByte,lCount;for(lCount=0;lCount<=3;lCount++){lByte=(lValue>>>(lCount*8))&255;wordToHexValue_temp="0"+lByte.toString(16);wordToHexValue=wordToHexValue+wordToHexValue_temp.substr(wordToHexValue_temp.length-2,2);}
return wordToHexValue;};var x=[],k,AA,BB,CC,DD,a,b,c,d,S11=7,S12=12,S13=17,S14=22,S21=5,S22=9,S23=14,S24=20,S31=4,S32=11,S33=16,S34=23,S41=6,S42=10,S43=15,S44=21;str=utf8_encode(str);x=convertToWordArray(str);a=0x67452301;b=0xEFCDAB89;c=0x98BADCFE;d=0x10325476;xl=x.length;for(k=0;k<xl;k+=16){AA=a;BB=b;CC=c;DD=d;a=_FF(a,b,c,d,x[k+0],S11,0xD76AA478);d=_FF(d,a,b,c,x[k+1],S12,0xE8C7B756);c=_FF(c,d,a,b,x[k+2],S13,0x242070DB);b=_FF(b,c,d,a,x[k+3],S14,0xC1BDCEEE);a=_FF(a,b,c,d,x[k+4],S11,0xF57C0FAF);d=_FF(d,a,b,c,x[k+5],S12,0x4787C62A);c=_FF(c,d,a,b,x[k+6],S13,0xA8304613);b=_FF(b,c,d,a,x[k+7],S14,0xFD469501);a=_FF(a,b,c,d,x[k+8],S11,0x698098D8);d=_FF(d,a,b,c,x[k+9],S12,0x8B44F7AF);c=_FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);b=_FF(b,c,d,a,x[k+11],S14,0x895CD7BE);a=_FF(a,b,c,d,x[k+12],S11,0x6B901122);d=_FF(d,a,b,c,x[k+13],S12,0xFD987193);c=_FF(c,d,a,b,x[k+14],S13,0xA679438E);b=_FF(b,c,d,a,x[k+15],S14,0x49B40821);a=_GG(a,b,c,d,x[k+1],S21,0xF61E2562);d=_GG(d,a,b,c,x[k+6],S22,0xC040B340);c=_GG(c,d,a,b,x[k+11],S23,0x265E5A51);b=_GG(b,c,d,a,x[k+0],S24,0xE9B6C7AA);a=_GG(a,b,c,d,x[k+5],S21,0xD62F105D);d=_GG(d,a,b,c,x[k+10],S22,0x2441453);c=_GG(c,d,a,b,x[k+15],S23,0xD8A1E681);b=_GG(b,c,d,a,x[k+4],S24,0xE7D3FBC8);a=_GG(a,b,c,d,x[k+9],S21,0x21E1CDE6);d=_GG(d,a,b,c,x[k+14],S22,0xC33707D6);c=_GG(c,d,a,b,x[k+3],S23,0xF4D50D87);b=_GG(b,c,d,a,x[k+8],S24,0x455A14ED);a=_GG(a,b,c,d,x[k+13],S21,0xA9E3E905);d=_GG(d,a,b,c,x[k+2],S22,0xFCEFA3F8);c=_GG(c,d,a,b,x[k+7],S23,0x676F02D9);b=_GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);a=_HH(a,b,c,d,x[k+5],S31,0xFFFA3942);d=_HH(d,a,b,c,x[k+8],S32,0x8771F681);c=_HH(c,d,a,b,x[k+11],S33,0x6D9D6122);b=_HH(b,c,d,a,x[k+14],S34,0xFDE5380C);a=_HH(a,b,c,d,x[k+1],S31,0xA4BEEA44);d=_HH(d,a,b,c,x[k+4],S32,0x4BDECFA9);c=_HH(c,d,a,b,x[k+7],S33,0xF6BB4B60);b=_HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);a=_HH(a,b,c,d,x[k+13],S31,0x289B7EC6);d=_HH(d,a,b,c,x[k+0],S32,0xEAA127FA);c=_HH(c,d,a,b,x[k+3],S33,0xD4EF3085);b=_HH(b,c,d,a,x[k+6],S34,0x4881D05);a=_HH(a,b,c,d,x[k+9],S31,0xD9D4D039);d=_HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);c=_HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);b=_HH(b,c,d,a,x[k+2],S34,0xC4AC5665);a=_II(a,b,c,d,x[k+0],S41,0xF4292244);d=_II(d,a,b,c,x[k+7],S42,0x432AFF97);c=_II(c,d,a,b,x[k+14],S43,0xAB9423A7);b=_II(b,c,d,a,x[k+5],S44,0xFC93A039);a=_II(a,b,c,d,x[k+12],S41,0x655B59C3);d=_II(d,a,b,c,x[k+3],S42,0x8F0CCC92);c=_II(c,d,a,b,x[k+10],S43,0xFFEFF47D);b=_II(b,c,d,a,x[k+1],S44,0x85845DD1);a=_II(a,b,c,d,x[k+8],S41,0x6FA87E4F);d=_II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);c=_II(c,d,a,b,x[k+6],S43,0xA3014314);b=_II(b,c,d,a,x[k+13],S44,0x4E0811A1);a=_II(a,b,c,d,x[k+4],S41,0xF7537E82);d=_II(d,a,b,c,x[k+11],S42,0xBD3AF235);c=_II(c,d,a,b,x[k+2],S43,0x2AD7D2BB);b=_II(b,c,d,a,x[k+9],S44,0xEB86D391);a=addUnsigned(a,AA);b=addUnsigned(b,BB);c=addUnsigned(c,CC);d=addUnsigned(d,DD);}
var temp=wordToHex(a)+wordToHex(b)+wordToHex(c)+wordToHex(d);return temp.toLowerCase();}
function utf8_encode(argString)
{var string=(argString+'');var utftext="";var start,end;var stringl=0;start=end=0;stringl=string.length;for(var n=0;n<stringl;n++){var c1=string.charCodeAt(n);var enc=null;if(c1<128){end++;}else if(c1>127&&c1<2048){enc=String.fromCharCode((c1>>6)|192)+String.fromCharCode((c1&63)|128);}else{enc=String.fromCharCode((c1>>12)|224)+String.fromCharCode(((c1>>6)&63)|128)+String.fromCharCode((c1&63)|128);}
if(enc!==null){if(end>start){utftext+=string.substring(start,end);}
utftext+=enc;start=end=n+1;}}
if(end>start){utftext+=string.substring(start,string.length);}
return utftext;}
(function()
{YAHOO.util.Event.addListener(window,'load',function(){var resolution;if(window.orientation==90||window.orientation==270||window.orientation==-90||window.orientation==-270){resolution=screen.height+","+screen.width;}
else{resolution=screen.width+","+screen.height;}
TOOLBOX.setCookie('__resolution__',resolution);});})();(function()
{var kl=new YAHOO.util.KeyListener(document,{shift:true,keys:82},{fn:function()
{if(typeof window.listingTables!='undefined'){for(var i in window.listingTables){window.listingTables[i].fetchData();}
for(var i in window.calendars){window.calendars[i].fetchData();}}}});if(document.location.href.match('blueweb')){kl.enable();}})();TOOLBOX.use=function()
{var args=Array.prototype.slice.call(arguments);var resources=args.slice(0,args.length-1)
var callback=args[args.length-1];var loaded=0;var TOLOAD=resources.length;var ERROR={callback:'The last argument must be a callabck function to be invoked once the resources listed have been loaded',unavailableName:'The resource name has not been registered with this function',noNameOrSource:'Please include either a name or a source property with your resource object',noNamewithVersion:'Please include a name of the resource with your version number',dependenciesNotArray:'The dependencies property must be an array of source strings',includesNotArray:'The includes property must be an array of source strings'};var MAP={'jquery':{defaultVersion:'1.6.2',version:{'1.6.2':{src:['/baseapp/scripts/jquery/1.6.2/jquery.min.js'],dependencies:[],includes:[]},'1.9.1':{src:['/baseapp/scripts/libs/jquery/1.9.1/jquery.min.js'],dependencies:[],includes:[]}}},'bootstrap':{defaultVersion:'3.3.5',version:{'3.3.5':{src:['/baseapp/scripts/libs/bootstrap/js/bootstrap.js'],dependencies:[],includes:[]}}}}
for(var i=0,l=resources.length;i<l;i++){var resource=normaliseResource(resources[i]),src=resource.src;if(typeOf(src)==='array'){src=resource.src[0];}
if(!isLoaded(src))loadResource(resource);}
function normaliseResource(resource){var normResource={};if(typeof resource==='string'){if(MAP[resource])normResource=MAP[resource]['version'][MAP[resource]['defaultVersion']];else throw new Error(ERROR.unavailableName);}
else{if(typeof resource.name==='undefined'&&typeof resource.src==='undefined')
throw new Error(ERROR.noNameOrSource);if(typeof resource.version!=='undefined'){if(typeof resource.name==='undefined')throw new Error(ERROR.noNameWithVersion);else normResource=MAP[resource.name]['version'][resource.version];}
else{if(typeof resource.name!=='undefined'){normResource=MAP[resource.name]['version'][MAP[resource.name]['defaultVersion']];}}}
var overWritable=['src','dependencies','includes'];for(var i=0,l=overWritable.length;i<l;i++){var prop=overWritable[i];if(typeof resource!=='string'&&typeof resource[prop]!=='undefined'){normResource[prop]=resource[prop];}}
return normResource;}
function isLoaded(src){var headElements=(document.head)?document.head.childNodes:document.getElementsByTagName('head')[0].childNodes;var accept={LINK:true,SCRIPT:true};for(var i=0,l=headElements.length;i<l;i++){if(!accept[headElements[i].tagName])continue;if(typeof headElements[i].href!=='undefined'){if(headElements[i].href===src){return true;}}
else if(typeof headElements[i].src!=='undefined'&&headElements[i].src.length){if(headElements[i].src.indexOf(src)>-1){return true;}}}
return false;}
function loadResource(resource){var internalResources={dependencies:{loaded:0,toLoad:0},src:{loaded:0,toLoad:1},includes:{loaded:0,toLoad:0}}
loadType('dependencies');function loadType(type){switch(type){case'dependencies':if(typeOf(resource.dependencies)!=='array')throw new Error(Error.dependenciesNotArray);internalResources.dependencies.toLoad=resource.dependencies.length;if(internalResources.dependencies.toLoad){for(var i=0,l=internalResources.dependencies.toLoad;i<l;i++){loadInternalResource('dependencies',resource.dependencies[i]);}}
else loadType('src');break;case'src':loadInternalResource('src',resource.src[0]);break;case'includes':if(typeOf(resource.includes)!=='array')throw new Error(Error.includesNotArray);internalResources.includes.toLoad=resource.includes.length;if(internalResources.includes.toLoad){for(var i=0,l=internalResources.includes.toLoad;i<l;i++){loadInternalResource('includes',resource.includes[i]);}}
else updateResourceLoaded();break;}}
function loadInternalResource(type,resource){var source=(typeof resource.src==='undefined')?resource:resource.src;var elToCreate=getExtension(source)=='js'?'script':'link';var el=document.createElement(elToCreate),loaded=false;if(elToCreate==='script'){el.onload=el.onreadystatechange=function(){if((el.readyState&&el.readyState!=="complete"&&el.readyState!=="loaded")||loaded){return;}
updateInternalResourceLoaded(type);el.onload=el.onreadystatechange=null;loaded=true;};el.async=true;el.src=source;}
else{el.href=source;el.rel='stylesheet';updateInternalResourceLoaded(type);}
if(document.head){document.head.appendChild(el);}
else{document.getElementsByTagName('head')[0].appendChild(el);}}
function updateInternalResourceLoaded(type){internalResources[type]['loaded']+=1;if(internalResources[type]['loaded']>=internalResources[type]['toLoad']){switch(type){case'dependencies':loadType('src');break;case'src':loadType('includes');break;case'includes':updateResourceLoaded();break;}}}
function getExtension(src){return src.match(/js$/)?'js':'css';}}
function updateResourceLoaded(){loaded+=1;if(loaded===TOLOAD){if(typeof callback!=='function'){throw new Error(ERROR.callback);}
else{callback();}}}
function typeOf(value){var s=typeof value;if(s==='object'){if(value){if(value instanceof Array){s='array';}}else{s='null';}}
return s;}};;if(typeof TOOLBOX=='undefined'){TOOLBOX={};}
TOOLBOX.Lang={loading:'Loading',stillWorking:'Still Working',saving:'Saving',deleting:'Deleting',deleteSuccess:'Delete successful',deleteFail:'Delete unsuccessful',submit:'Save',saveSearch:'Save Search',search:'Search',cancel:'Cancel',exit:'Exit',close:'Close',show:'Show',yes:'Yes',no:'No',alert:'Alert',ok:'OK',go:'Go',manageSavedSearch:'Manage Saved Searches',saveAndGoToNextTab:'Save and go to next tab',saveAndGoToNextTabOr:'Save and go to next tab OR',copyBlock:'Copy Block',copyBlockConfirm:'Do you want to copy this object?',copyBlockColumnConfirm:'Do you want to copy this column?',deleteBlock:'Delete Block',deleteBlockConfirm:'Are you sure you want to delete this object?',deleteBlockColumnConfirm:'Your are about to delete column which will delete all objects. Are you sure you want to delete?',deleteFileConfirm:'Are you sure you wish to delete this file?',unknownError:'An unknown error has occurred. Please try again.'};;TOOLBOX.Animate={};TOOLBOX.Animate.reveal=function(element,config)
{config=TOOLBOX.mergeConfig(config,{});element=YAHOO.util.Dom.get(element);if(element!=null&&element.style.display=='none'){if(!element.animInit){TOOLBOX.Animate.initElement(element);}
var showAnimation=new YAHOO.util.Anim(element,{height:{to:element.origHeight}},0.3);element.style.overflow='hidden';element.style.height="0px";element.style.display="";return showAnimation;}};TOOLBOX.Animate.conceal=function(element,config)
{config=TOOLBOX.mergeConfig(config,{});element=YAHOO.util.Dom.get(element);if(element!=null){if(!element.animInit){TOOLBOX.Animate.initElement(element);}
var hideAnimation=new YAHOO.util.Anim(element,{height:{to:0}},0.3,YAHOO.util.Easing.easeIn);hideAnimation.onComplete.subscribe(function(){this.style.display='none';},this,true);element.style.overflow='hidden';element.style.display='block';element.style.height=element.origHeight;return hideAnimation;}};TOOLBOX.Animate.initElement=function(element)
{element.origPos=element.style.position;element.origVis=element.style.visibility;element.origDisplay=element.style.display;element.origOverflow=element.style.overflow;element.origClass=YAHOO.util.Dom.getAttribute(element,'class');element.style.position='absolute';element.style.visbility='hidden';element.style.display='block';element.style.overflow='hidden';element.origHeight=(YAHOO.util.Dom.getRegion(element).height);element.origWidth=(YAHOO.util.Dom.getRegion(element).width);element.style.position=element.origPos;element.style.visibility=element.origVis;element.style.display=element.origDisplay;element.style.overflow=element.origOverflow;element.animInit=true;};;TOOLBOX.FormTable=function(config)
{this.config=TOOLBOX.mergeConfig(config,{'id':null,'formName':null,'attributes':{},'elements':{},'parent':null,'index':null,'DD':null,'DT':null,'belongsTo':null,'warningOnNavigate':false,'defaultColours':null,'formObj':null});this.id=this.config.id;this.formName=this.config.formName;this.belongsTo=this.config.belongsTo;this.attributes=this.config.attributes;this.parent=this.config.parent;if(typeof this.attributes.duplicate!='undefined'){this.duplicate=this.attributes.duplicate;}
else{this.duplicate=false;}
if(typeof this.attributes.sortable!='undefined'){this.sortable=this.attributes.sortable;}
else{this.sortable=false;}
this.onInitEvent=new YAHOO.util.CustomEvent('onLoaded');this.ChangeEvent=new YAHOO.util.CustomEvent('changed');if(this.config.formObj){this.form=this.config.formObj;delete this.config.formObj;this.init();}else if(this.parent){this.form=this.parent.form;this.init();}
else if(!this.id){this.form=document.forms[0];this.init();}
else{if(YAHOO.util.DOMReady&&(this.form=document.getElementById(this.id))){this.init();}
else{YAHOO.util.Event.onAvailable(this.id,function()
{this.form=document.getElementById(this.id);this.init();},this,true);}}
this.TABLE_IDENTIFIER=TOOLBOX.registerFormTable(this.id,this);};TOOLBOX.FormTable.onAvailable=function(formName,callback)
{var form;form=TOOLBOX.getFormTable(formName);if(form){if(!TOOLBOX.isArray(form)){form=[form];}
for(var i=0;i<form.length;i++){callback.call(form[i]);}}
else{TOOLBOX.FormTable.onAvailableCallbacks=TOOLBOX.FormTable.onAvailableCallbacks||{};TOOLBOX.FormTable.onAvailableCallbacks[formName]=TOOLBOX.FormTable.onAvailableCallbacks[formName]||[];TOOLBOX.FormTable.onAvailableCallbacks[formName].push(callback);}};TOOLBOX.FormTable.prototype={init:function()
{if(!this.formName){this.formName=this.form.getAttribute('name');}
this.elements={};for(var i in this.config.elements){if(this.config.elements.hasOwnProperty(i)){this.addElement(i,this.config.elements[i]);}}
this.subForms={};this.subFormCount=0;for(var j in this.config.subForms){if(typeof this.config.subForms[j]=='object'&&this.config.subForms[j].constructor!=Function){this.addSubForm(j,this.config.subForms[j]);}}
this.showifs=[];for(var i in this.elements){if(typeof this.elements[i].showif!='undefined'){this.showifs.push(this.elements[i]);}}
this.showIf(true);if(this.duplicate){this._initDuplicate();}
this.changed=[];if(this.config.warningOnNavigate){var that=this;window.onbeforeunload=function(e){return that.beforeUnload.call(that,e);};}
this.submitting=false;YAHOO.util.Event.addListener(this.form,'submit',function(){this.submitting=true;var submitButtons=this.getSubmitButtons();for(var i=0;i<submitButtons.length;i++){submitButtons[i].setAttribute('disabled','disabled');}},this,true);this.onInitEvent.fire();this.onAvailable();},onAvailable:function()
{var func;if(TOOLBOX.FormTable.onAvailableCallbacks&&('undefined'!=typeof TOOLBOX.FormTable.onAvailableCallbacks[this.id])){while(func=TOOLBOX.FormTable.onAvailableCallbacks[this.id].pop()){func.call(this);}}},beforeUnload:function(e)
{if(!this.submitting&&this.changed.length>0){e.returnValue=TOOLBOX.FormTable.Lang.beforeUnloadWarning;return TOOLBOX.FormTable.Lang.beforeUnloadWarning;}},showIf:function(init)
{var regex=new RegExp(/^((?:(?:&&|~~)?([A-z0-9\-]*)([=><!])([A-z0-9 |'\-.]*))+?)$/),regexGroups=new RegExp(/^((?:(?:&&|~~)?(\(([^\)]+)\)))+?)$/),matches,tests,displayTest,exp_regex,exp_matches,field,fieldEle,operator,value,values,j;for(var i=0;i<this.showifs.length;i++){var elementShowifs=this.showifs[i].showif;if(elementShowifs.indexOf('(')!==0){elementShowifs='('+elementShowifs+')';}
if(!regexGroups.exec(elementShowifs)){continue;}
var esdisplay=[],elementShowifMatches=elementShowifs.match(/\(([^\)]+)\)/g);for(es=0;es<elementShowifMatches.length;es++){matches=regex.exec(elementShowifMatches[es].replace(/^\(/,'').replace(/\)$/,''));var isAnd=(matches[1].indexOf('&&')>=0);var andOr=(isAnd)?'&&':'~~';tests=matches[1].split(andOr);display=(isAnd);for(j=0;j<tests.length;j++){exp_regex=new RegExp(/([A-z0-9\-]*)([=><!])([A-z0-9 |'\-.]*)/);exp_matches=exp_regex.exec(tests[j]);field=exp_matches[1];operator=exp_matches[2];value=exp_matches[3];values=exp_matches[3].split('||');if(operator=='='){operator='==';}
var fieldEleValue;if(typeof this.elements[field]!='undefined'){fieldEleValue=this.elements[field].getValue();}
else{fieldEleValue=this.findHtmlElementByName(field).value;}
if(fieldEleValue===undefined){var fieldEleValue=[];checkboxes=this.findHtmlElementByName(field);for(var k=0;k<checkboxes.length;k++){if(checkboxes[k].checked){fieldEleValue.push(checkboxes[k].value);}}}
if(operator=='>'||operator=='<'||operator=='!='){if(!isNaN(value)){value=parseInt(value);}
if(!isNaN(fieldEleValue)){fieldEleValue=parseInt(fieldEleValue);}}
switch(operator){case'==':if(TOOLBOX.isArray(fieldEleValue)){if(values.length>1){displayTest=0<(TOOLBOX.objectSize(TOOLBOX.arrayIntersect(fieldEleValue,values)));}
else{displayTest=(fieldEleValue.inArray(value)!==-1);}}
else{displayTest=(values.inArray(fieldEleValue)!==-1);}
break;case'>':displayTest=(fieldEleValue>value);break;case'<':displayTest=(fieldEleValue<value);break;case'!':displayTest=true;if(fieldEleValue!=undefined)
{if(TOOLBOX.isArray(fieldEleValue)){displayTest=(fieldEleValue.inArray(value)===-1);}
else{if(values.length>1){displayTest=(values.inArray(fieldEleValue)===-1);}
else{displayTest=(fieldEleValue!=value);}}}
break;}
if(isAnd){display=display&&displayTest;}
else{display=display||displayTest;}}
esdisplay.push(display);}
var truths=esdisplay.filter(function(v){return v===true;}),showHideElementDisplay=truths.length>0;if(elementShowifs.match(/\)&&\(/)&&showHideElementDisplay){showHideElementDisplay=(truths.length===esdisplay.length);}
this.showifs[i].hideShow(showHideElementDisplay,init);}},addElement:function(name,element)
{element.name=name;element.FormTable=this;this.elements[name]=new TOOLBOX.FormTable.Element(element);this.elements[name].ChangeEvent.subscribe(this._changed,this,true);},getSubmitButtons:function()
{var submitElements=[];if(this.form){var inputs=this.form.getElementsByTagName('input');for(var i=0;i<inputs.length;i++){if(inputs[i].getAttribute('type').toLowerCase()==='submit'){submitElements.push(inputs[i]);}}}
return submitElements;},addSubForm:function(formName,form)
{form.formName=formName;form.parent=this;form.index=this.subFormCount;form.DD=YAHOO.util.Dom.get(formName+'-element');form.DT=YAHOO.util.Dom.get(formName+'-label');this.subForms[formName]=new TOOLBOX.FormTable(form);this.subForms[formName].ChangeEvent.subscribe(this._changed,this,true);this.subFormCount++;if(form.attributes.allowCopyFromForm){var copyFromFormText=form.attributes.copyFromFormLabel;if(!copyFromFormText&&form.parent.subForms[form.attributes.allowCopyFromForm]){copyFromFormText=form.parent.subForms[form.attributes.allowCopyFromForm].getFormLabel()
if(copyFromFormText){copyFromFormText='Same As "'+copyFromFormText+'"';}};copyFromFormText=copyFromFormText||'Same As Above';var copyFormCheckBox=DOM_Editor.createElement({type:'input',attr:{type:'checkbox',id:DOM_Editor.uniqid('copyAddressField')}}),copyFormLabel=DOM_Editor.createElement({type:'label',attr:{'innerHTML':copyFromFormText,id:DOM_Editor.uniqid('copyAddressLabel')}}),copyFormContainer=DOM_Editor.createElement({type:'div',attr:{id:DOM_Editor.uniqid('copyAddressContainer')}}),binded=null;DOM_Editor.addClass(copyFormContainer,'copy-form-container');copyFormLabel.appendChild(copyFormCheckBox);copyFormContainer.appendChild(copyFormLabel);form.DT.parentNode.appendChild(copyFormContainer);form.DT.parentNode.style.position="relative";var copyFormFn=function(){var destination=this,source=this.parent.subForms[this.attributes.allowCopyFromForm];if(!this||!this.parent.subForms[this.attributes.allowCopyFromForm]){return;}
destination.copyFromForm(source);}
var verifyFormFn=function(a,b,c){var destination=this,source=this.parent.subForms[this.attributes.allowCopyFromForm];if(!this||!this.parent.subForms[this.attributes.allowCopyFromForm]){return;}
var prevState=copyFormCheckBox.checked;copyFormCheckBox.checked=destination.isSimilarToForm(source);if(prevState!=copyFormCheckBox.checked){copyFormCheckBox.onchange()}}
copyFormCheckBox.onchange=function(){var destination=form.parent?form.parent.subForms[formName]:false;if(!destination||!destination.parent.subForms[destination.attributes.allowCopyFromForm]){return;}
var source=form.parent.subForms[destination.attributes.allowCopyFromForm];if(copyFormCheckBox.checked){source.ChangeEvent.subscribe(copyFormFn,destination,true)
copyFormFn.apply(destination);}else{source.ChangeEvent.unsubscribe(copyFormFn,destination);}}
this.subForms[formName].ChangeEvent.subscribe(verifyFormFn,this.subForms[formName],true);verifyFormFn.apply(this.subForms[formName])}},getFormLabel:function()
{return this.config&&this.config.DT?this.config.DT.innerText.replace(/\:/g,''):null;},copyFromForm:function(form)
{if(!form instanceof TOOLBOX.FormTable||!this.elements){return;}
var formValues=form.getElementValues();for(i in this.elements){if(typeof formValues[i]!=='undefined'){this.elements[i].setValue(formValues[i])}}},isSimilarToForm:function(form)
{if(!form instanceof TOOLBOX.FormTable||!this.elements){return;}
var formValues=form.getElementValues(),thisFormValues=this.getElementValues(),similar=true;for(i in this.elements){if(formValues[i]!==thisFormValues[i]){similar=false;break;}}
return similar;},getElementValues:function()
{var values={};if(this.elements){for(i in this.elements){values[i]=this.elements[i].getValue();}}
if(this.subForms){for(i in this.subForms){values[i]=this.subForms[i].getElementValues();}}
return values;},_changed:function()
{this.ChangeEvent.fire();},isChanged:function()
{return(this.changed.length>0);},findHtmlElementByName:function(name)
{var eleName=name;if(!this.form){return false;}
var formName=this.formName;if(this.duplicate){formName+='['+this.config.index+']';}
if(this.parent){if(/\[[^\]]+\]$/.test(name)){if(name.indexOf(formName)>=0){}else{name=formName+name;}}
else{name=formName+'['+name+']';}}
if(this.form[name]){return this.form[name];}
var elements=this.form.elements;var nameQuote=name.replace(/([\]\[])/g,"\\$1");for(var i=0;i<elements.length;i++){var regex=new RegExp('^'+nameQuote+'\\\[');if(typeof elements[i].name!='undefined'){if(elements[i].name.match(regex)){return this.form[elements[i].getAttribute('name')];}}}
var formId=this.form.id;var fieldEle=document.getElementById(formId+"-"+eleName);if(fieldEle!=undefined){return fieldEle;}
fieldEle=document.getElementsByName(formId+"["+eleName+"][]");if(typeof fieldEle!="undefined"&&fieldEle.length>0){return fieldEle;}
return false;},_initDuplicate:function()
{if(typeof this.duplicate!='undefined'){this.Duplicate=new TOOLBOX.FormTable.Duplicate(this);}},destroy:function()
{var me=this;TOOLBOX.unregisterFormTable(me);},findHtmlElementById:function(childID)
{if(!this.form){return null;}
var elm=null;var elms=this.form.getElementsByTagName("*");for(var i=0;i<elms.length;i++){if(elms[i].id===childID){elm=elms[i];break;}}
return elm;}};TOOLBOX.FormTable.Duplicate=function(form)
{this.form=form;this.nextFieldsetIndex=0;this.initEvent=new YAHOO.util.CustomEvent('initEvent',this);this.addFieldsetEvent=new YAHOO.util.CustomEvent('addFieldset',this);this.removeFieldsetEvent=new YAHOO.util.CustomEvent('removeFieldSet',this);this.init();};TOOLBOX.FormTable.Duplicate.prototype={init:function()
{this.sortable=this.form.sortable;this.fieldsets=[];var fieldsetIdBase='fieldset-'+this.form.formName+'_';var _f,count=1;while((_f=YAHOO.util.Dom.get(fieldsetIdBase+count))){var duplicateFieldset=new TOOLBOX.FormTable.Duplicate.Fieldset(_f,this);this.fieldsets.push(duplicateFieldset);this.nextFieldsetIndex++;count++;}
this.cloneFieldset=this.fieldsets[0].fieldsetObj.cloneNode(true);this.cloneFieldset.id=DOM_Editor.uniqid('clone');for(var j=0;j<this.fieldsets.length;j++){var link=document.createElement('a');link.setAttribute('href','javascript:void(0);')
link.style.marginLeft='5px';link.innerHTML=TOOLBOX.FormTable.Lang.remove;DOM_Editor.addClass(link,'fieldset removeElement');YAHOO.util.Event.addListener(link,'click',this.fieldsets[j].destroy,this.fieldsets[j],true);this.fieldsets[j].fieldsetObj.insertBefore(link,this.fieldsets[j].fieldsetObj.childNodes[0]);var colorFieldCount=j+1;var hiddenId=this.form.formName+'_'+colorFieldCount+'_'+this.form.formName+'-colour';var colorPickerElements=[[hiddenId,hiddenId]];if(this.form&&this.form.elements){for(var e in this.form.elements){if(this.form.elements[e].type&&this.form.elements[e].type==='colour'&&this.form.elements[e].id&&colorPickerElements.indexOf(this.form.elements[e].id)==-1){colorPickerElements.push([this.form.elements[e].id.replace(/\_\d+\_/,'_'+colorFieldCount+'_'),this.form.elements[e].id]);}}}
for(var c=0;c<colorPickerElements.length;c++){if(YAHOO.util.Dom.get(colorPickerElements[c][0])){var colourInput=YAHOO.util.Dom.get(colorPickerElements[c][0]);var isMultiple=colourInput.getAttribute('multicolour');if(isMultiple){var cloneFromElement=this.form.formName+'_'+(colorFieldCount)+'_'+this.form.formName+'-colour';TOOLBOX.createColourPickerMultiple(colorPickerElements[c][0],{value:colourInput.value,cloneFrom:colorPickerElements[c][1]});}else{var containerId=colorPickerElements[c][0]+'-container';var buttonId=colorPickerElements[c][0]+'-button';TOOLBOX.createColourPickerSingle(colorPickerElements[c][0],containerId,buttonId,{'colours':this.form.config.defaultColours,'colour':YAHOO.util.Dom.get(colorPickerElements[c][0]).value});}}}}
this.add_link_row=DOM_Editor.createElement({'type':'div','id':DOM_Editor.uniqid('add_link'),'children':[{'type':'img','attr':{'src':'/images/arrow_ltr.png','align':'absmiddle'}}]});var add_link=document.createElement('a');add_link.innerHTML=TOOLBOX.FormTable.Lang.addAnother;add_link.setAttribute('href','javascript:void(0);')
YAHOO.util.Event.addListener(add_link,'click',this.addFieldset,this,true);this.add_link_row.appendChild(add_link);this.target=this.form.config.DD;if(this.sortable){this.initSort();}
this.form.config.DD.appendChild(this.add_link_row);this.initEvent.fire(this);},initSort:function()
{for(var i=0;i<this.fieldsets.length;i++){this.fieldsets[i].fieldsetObj.insertBefore(DOM_Editor.createElement({'type':'span','attr':{'innerHTML':'__sort_handle__'}}),this.fieldsets[i].fieldsetObj.childNodes[0]);DOM_Editor.addClass(this.fieldsets[i].container,'ElementSort');}
this.Sort=new TOOLBOX.FormTable.Duplicate.Sort(this);this.Sort.dragCompleteEvent.subscribe(this.dragComplete,this,true);},addFieldset:function()
{var newFieldset=this.cloneFieldset.cloneNode(true);this._replaceFieldsetPlaceholders(newFieldset);if(this.sortable){this.target.appendChild(newFieldset);}else{this.target.insertBefore(newFieldset,this.add_link_row);}
newFieldset.innerHTML=newFieldset.innerHTML.replace(/<script.*<\/script>/g,'');var divs=newFieldset.getElementsByTagName('div');for(var j=0;j<divs.length;j++){if(divs[j].className=='cpDiv'){divs[j].parentNode.removeChild(divs[j]);}}
var cal_find=false;if((cal_find=newFieldset.innerHTML.match(/cal_butt([0-9]+)/))){cal_find[1]=new Number(cal_find[1]);this.cal_count=cal_find[1]+1;newFieldset.innerHTML=newFieldset.innerHTML.replace(/cal_butt[0-9]+/g,'cal_butt'+this.cal_count);}
this._resetInputValues(newFieldset);var newDuplicateFieldset=new TOOLBOX.FormTable.Duplicate.Fieldset(newFieldset,this);var link=document.createElement('a');link.setAttribute('href','javascript:void(0);')
link.style.marginLeft='5px';link.innerHTML=TOOLBOX.FormTable.Lang.remove;DOM_Editor.addClass(link,'fieldset removeElement');YAHOO.util.Event.addListener(link,'click',newDuplicateFieldset.destroy,newDuplicateFieldset,true);newFieldset.insertBefore(link,newFieldset.childNodes[0]);this.fieldsets.push(newDuplicateFieldset);this.nextFieldsetIndex++;if(this.sortable){newDuplicateFieldset.fieldsetObj.insertBefore(DOM_Editor.createElement({'type':'span','attr':{'innerHTML':'__sort_handle__'}}),newDuplicateFieldset.fieldsetObj.childNodes[0]);DOM_Editor.addClass(newDuplicateFieldset.container,'ElementSort');this.Sort.newSortRow(newDuplicateFieldset);}
var colorFieldCount=this.nextFieldsetIndex;var hiddenId=this.form.formName+'_'+colorFieldCount+'_'+this.form.formName+'-colour';var colorPickerElements=[hiddenId];if(this.form&&this.form.elements){for(var e in this.form.elements){if(this.form.elements[e].type&&this.form.elements[e].type==='colour'&&this.form.elements[e].id){colorPickerElements.push(this.form.elements[e].id.replace(/\_\d+\_/,'_'+colorFieldCount+'_'));}}}
for(var c=0;c<colorPickerElements.length;c++){if(YAHOO.util.Dom.get(colorPickerElements[c])){var colourInput=YAHOO.util.Dom.get(colorPickerElements[c]);if(YAHOO.util.Dom.get('hasColour')){if(YAHOO.util.Dom.get('hasColour').checked){colourInput.parentNode.parentNode.style.visibility='visible';}else{colourInput.parentNode.parentNode.style.visibility='hidden';}}
var isMultiple=colourInput.getAttribute('multicolour');if(isMultiple){var colourConfig={value:colourInput.value};if(colourInput.getAttribute('allowimages')){colourConfig.allowImages=true;}
TOOLBOX.createColourPickerMultiple(colorPickerElements[c],colourConfig);}else{var containerId=colorPickerElements[c]+'-container';var buttonId=colorPickerElements[c]+'-button';TOOLBOX.createColourPickerSingle(colorPickerElements[c],containerId,buttonId,{'colours':this.form.config.defaultColours,'colour':YAHOO.util.Dom.get(colorPickerElements[c]).value});}}}
this.addFieldsetEvent.fire(this);},removeFieldset:function(fieldset)
{var tmp=[];var f;for(var i=0;i<this.fieldsets.length;i++){if(this.fieldsets[i]!=fieldset){f=this.fieldsets[i];tmp.push(f);}
else{this.fieldsets[i].fieldsetObj.parentNode.removeChild(this.fieldsets[i].fieldsetObj);}}
this.fieldsets=tmp;this._resetColourPickerPanelPosition();this.removeFieldsetEvent.fire(this);},getNumFieldsets:function()
{return this.fieldsets.length;},dragComplete:function()
{this.resetMNum();},resetMNum:function()
{var table_rows=this.base_table.getElementsByTagName('tr');var tmp=[];var count=0;for(var j=0;j<table_rows.length;j++){for(var i=0;i<this.rows.length;i++){if(table_rows[j].id==this.rows[i].tr.id){r=this.rows[i];r.index=count;r.tr.getElementsByTagName('td')[0].innerHTML=r.tr.getElementsByTagName('td')[0].innerHTML.replace(/<!--M-NUM-->[0-9]+/,'<!--M-NUM-->'+(count+1));if(count==0){DOM_Editor.removeClass(r.tr,'spacer_bg');DOM_Editor.addClass(r.tr,'indent_bg');}
else{DOM_Editor.removeClass(r.tr,'indent_bg');DOM_Editor.addClass(r.tr,'spacer_bg');}
tmp.push(r);count++;}}}
this.rows=tmp;},toString:function()
{return'FormTable.Duplicate';},_getElementObject:function(row)
{var eleObj=false;if(this.element.type=='text'){eleObj=row.getElementsByTagName('input')[0];eleObj.value=this.newValue;this._resetEleId(eleObj);}
return eleObj;},_resetEleId:function(ele,attr)
{this._resetEleAttr(ele,'id');},_resetEleAttr:function(ele,attr){ele.setAttribute(attr,ele.getAttribute(attr).replace(/_([0-9]+)/,'_'+new String(this.nextFieldsetIndex+1)));},_replaceFieldsetPlaceholders:function(fieldset)
{var replaceRegex=new RegExp(this.form.formName+'_1','g');fieldset.innerHTML=fieldset.innerHTML.replace(replaceRegex,this.form.formName+'_'+(this.nextFieldsetIndex+1));var replaceRegex2=new RegExp(this.form.formName+'\\\[0\\\]','g');fieldset.innerHTML=fieldset.innerHTML.replace(replaceRegex2,this.form.formName+'['+(this.nextFieldsetIndex+1)+']');},_resetInputValues:function(fieldset)
{var fieldTypes=['input','select'],fields;for(var i=0;i<fieldTypes.length;i++){fields=fieldset.getElementsByTagName(fieldTypes[i]);for(var j=0;j<fields.length;j++){fields[j].value='';}}},_resetColourPickerPanelPosition:function()
{var colorLinks=YAHOO.util.Dom.getElementsByClassName('colourPickerLink')
for(var i=0;i<colorLinks.length;i++){var colourPickerLinkId=colorLinks[i].id;var currentColourPickerLinkTop=YAHOO.util.Dom.getRegion(colourPickerLinkId).top;var currentColourPickerLinkLeft=YAHOO.util.Dom.getRegion(colourPickerLinkId).left;var currentColourPickerPanelId='MyPanel'+colourPickerLinkId.replace('-button','_c');YAHOO.util.Dom.get(currentColourPickerPanelId).style.top=currentColourPickerLinkTop+"px";YAHOO.util.Dom.get(currentColourPickerPanelId).style.left=currentColourPickerLinkLeft+"px";}}};TOOLBOX.FormTable.Duplicate.Fieldset=function(fieldsetObj,Duplicate)
{this.fieldsetObj=fieldsetObj;this.Duplicate=Duplicate;};TOOLBOX.FormTable.Duplicate.Fieldset.prototype={destroy:function()
{if(confirm(TOOLBOX.FormTable.Lang.removeItem)){this.Duplicate.removeFieldset(this);}},toString:function()
{return'FormTable.Duplicate.Fieldset';}};TOOLBOX.FormTable.Duplicate.Sort=function(duplicate)
{this.Duplicate=duplicate;this.dragCompleteEvent=new YAHOO.util.CustomEvent('dragComplete');this.dragCompleteEvent.subscribe(this.saveSortOrder,this,true);this.dragCompleteEvent.subscribe(this.resetIndentImages,this,true);this.init();};TOOLBOX.FormTable.Duplicate.Sort.prototype={init:function()
{this._initTarget();this._initSortRows();},newSortRow:function(row)
{row.SortRowIndex=this.sortRows.length;this.sortRows.push(new F.FIELDSET(row,this,{'group':this.targetDiv.id}));this.rowCount++;},removeRow:function(row)
{var tmp=[];var r;var count=0;for(var i=0;i<this.sortRows.length;i++){if(this.sortRows[i].row.SortRowIndex!=row.SortRowIndex){r=this.sortRows[i];r.row.SortRowIndex=tmp.length;r.setSortValue(tmp.length+1);tmp.push(r);count++;}
else{}}
this.sortRows=tmp;},saveSortOrder:function()
{for(var i=0;i<this.targetDiv.childNodes.length;i++){for(var j=0;j<this.sortRows.length;j++){if(this.sortRows[j].row.container==this.targetDiv.childNodes[i].childNodes[0]){this.sortRows[j].hiddenInput.value=i+1;}}}
this.Duplicate._resetColourPickerPanelPosition();},resetIndentImages:function()
{this.saveSortOrder();for(var i=0;i<this.sortRows.length;i++){var indentImageRow=YAHOO.util.Dom.getElementsByClassName('formIndent','div',this.sortRows[i].row.container);if(this.sortRows[i].hiddenInput.value==1){YAHOO.util.Dom.addClass(indentImageRow,'indentImage');}
else{YAHOO.util.Dom.removeClass(indentImageRow,'indentImage');}}},dragComplete:function()
{this.dragCompleteEvent.fire();},_initTarget:function()
{this.targetDiv=DOM_Editor.createElement({'type':'div','attr':{'id':DOM_Editor.uniqid('FTEDS-Target_')},'style':{}});this.Duplicate.target=this.targetDiv;var anscestor=this.Duplicate.fieldsets[0].fieldsetObj.parentNode;anscestor.appendChild(this.targetDiv);new YAHOO.util.DDTarget(this.targetDiv);for(i=0;i<this.Duplicate.fieldsets.length;i++){this.targetDiv.appendChild(this.Duplicate.fieldsets[i].fieldsetObj);}},_initSortRows:function()
{this.sortRows=[];this.rowCount=0;for(var i=0;i<this.Duplicate.fieldsets.length;i++){this.newSortRow(this.Duplicate.fieldsets[i]);}}};TOOLBOX.FormTable.Duplicate.Sort.Row=function(row,sort,config)
{this.row=row;this.Sort=sort;if(typeof config=='undefined'){config={};}
this.sortConfig=TOOLBOX.mergeConfig(config,{'group':'dd_editor','over_class':'dd_over','inputName':this.row.Duplicate.form.formName+'[sortOrder][]'});var divWrapper=DOM_Editor.createElement({'type':'div','attr':{'id':DOM_Editor.uniqid('DDPROXY'),'class':'ElementSort'}});var anscestor=this.row.fieldsetObj.parentNode;anscestor.appendChild(divWrapper);divWrapper.appendChild(this.row.fieldsetObj);this.init(divWrapper,this.sortConfig.group,{});this.initFrame();this.initSort();};F={FIELDSET:TOOLBOX.FormTable.Duplicate.Sort.Row};YAHOO.extend(F.FIELDSET,YAHOO.util.DDProxy);F.FIELDSET.prototype.initSort=function()
{this._initHiddenInput();this._initHandle();};F.FIELDSET.prototype.setSortValue=function(newValue)
{this.hiddenInput.value=newValue;};F.FIELDSET.prototype._initHiddenInput=function()
{var name=this.sortConfig.inputName.replace(/\[row-index\]/g,(this.Sort.rowCount));this.hiddenInput=DOM_Editor.createElement({'type':'input','attr':{'type':'hidden','name':name}});this.row.container=this.row.fieldsetObj;this.row.container.appendChild(this.hiddenInput);this.hiddenInput.value=this.Sort.rowCount+1;};F.FIELDSET.prototype._randomIds=function(ele){var eles=ele.getElementsByTagName('*');ele.setAttribute('id','TMP_ID_1');for(var i=0;i<eles.length;i++){eles[i].setAttribute('id','TMP_ID_'+(i+2))}}
F.FIELDSET.prototype._initHandle=function()
{this.handle=false;var handleEle=false;var elements=this.row.container.getElementsByTagName('*');for(var i=0;i<elements.length&&!handleEle;i++){if(elements[i].innerHTML==('__sort_handle__')){elements[i].innerHTML=elements[i].innerHTML.replace('__sort_handle__','');handleEle=elements[i];}}
var div=DOM_Editor.createElement({'type':'div','attr':{'id':DOM_Editor.uniqid('MagicTableSortHandle'),'class':'SortHandle','title':TOOLBOX.FormTable.Lang.dragToSort}});if(handleEle){handleEle.appendChild(div);this.handleAdded=true;}
if(this.handleAdded==true){this.handle=div;this.setHandleElId(this.handle.id);}};F.FIELDSET.prototype.startDrag=function(x,y){var dragEl=this.getDragEl();var clickEl=this.getEl().cloneNode(true);var elInputs=this.getEl().getElementsByTagName('input');var clickInputs=clickEl.getElementsByTagName('input');for(var i=0;i<elInputs.length;i++){if(elInputs[i].value){clickInputs[i].value=elInputs[i].value;clickInputs[i].setAttribute('value',elInputs[i].value);}}
YAHOO.util.Dom.setStyle(this.getEl(),"visibility","hidden");var setDTWidth=YAHOO.util.Dom.getRegion(this.row.DT).width;var setDDWidth=YAHOO.util.Dom.getRegion(this.row.DD).width;var setInputWidth=YAHOO.util.Dom.getRegion(this.row.eleObj).width;var setDivWidth=setDTWidth+setDDWidth;this._randomIds(clickEl);var html='<form class="proxyForm '+this.Sort.Duplicate.form.formName+'"><div style="background-color:none;">';html+=clickEl.innerHTML
html+='</div></form>';dragEl.innerHTML=html;var DT=dragEl.getElementsByTagName('dt')[0];var DD=dragEl.getElementsByTagName('dd')[0];var input=dragEl.getElementsByTagName('input');YAHOO.util.Dom.setStyle(dragEl,"border","none");YAHOO.util.Dom.setStyle(dragEl,"z-index","5000");YAHOO.util.Dom.setStyle(DT.parentNode,"background-color",'#e9f5fe');YAHOO.util.Dom.setStyle(DT.parentNode,"border",'1px solid #b3d4ff');if(input.length>0){YAHOO.util.Dom.setStyle(input[0],"width",(setInputWidth)+'px');}};F.FIELDSET.prototype.endDrag=function(e,id){var srcEl=this.getEl();var proxy=this.getDragEl();YAHOO.util.Dom.setStyle(proxy,"visibility","");var a=new YAHOO.util.Motion(proxy,{'points':{'to':YAHOO.util.Dom.getXY(srcEl)}},0.2,YAHOO.util.Easing.easeOut);var proxyid=proxy.id;var thisid=this.id;a.onComplete.subscribe(function(){YAHOO.util.Dom.setStyle(proxyid,"visibility","hidden");YAHOO.util.Dom.get(proxyid).innerHTML="";YAHOO.util.Dom.setStyle(thisid,"visibility","");});a.animate();a.onComplete.subscribe(this.Sort.dragComplete,this.Sort,true);};F.FIELDSET.prototype.onDragDrop=function(e,id){};F.FIELDSET.prototype.onDrag=function(e){var y=YAHOO.util.Event.getPageY(e);if(y<this.lastY){this.goingUp=true;}else if(y>this.lastY){this.goingUp=false;}
this.lastY=y;};F.FIELDSET.prototype.onDragOver=function(e,id){var srcEl=this.getEl();var destEl=YAHOO.util.Dom.get(id);if("div"==destEl.nodeName.toLowerCase()&&destEl.getAttribute('class')!=null&&destEl.getAttribute('class').indexOf('ElementSort')!==-1){var orig_p=srcEl.parentNode;var p=destEl.parentNode;if(this.goingUp){p.insertBefore(srcEl,destEl);}else{p.insertBefore(srcEl,destEl.nextSibling);}
YAHOO.util.DragDropMgr.refreshCache();}};F.FIELDSET.prototype.over_me=function(dd_over_me){};F.FIELDSET.prototype.out_me=function(dd_out_me){};;TOOLBOX.FormTable.Element=function(element)
{for(var i in element){this[i]=element[i];}
this.init();};TOOLBOX.FormTable.Element.prototype={init:function()
{this.FocusEvent=new YAHOO.util.CustomEvent('focus',this);this.BlurEvent=new YAHOO.util.CustomEvent('blur',this);this.MouseOverEvent=new YAHOO.util.CustomEvent('mouseOver',this);this.MouseOutEvent=new YAHOO.util.CustomEvent('mouseOut',this);this.ChangeEvent=new YAHOO.util.CustomEvent('change',this);this.AfterHideEvent=new YAHOO.util.CustomEvent('afterHide',this);this.AfterShowEvent=new YAHOO.util.CustomEvent('afterShow',this);this._setType();this._setEleObj();this.origValue=this.getValue();var eleObjAttrRole=null;if(this.eleObj&&this.eleObj.getAttribute){if(this.eleObj.getAttribute('role')){eleObjAttrRole=this.eleObj.getAttribute('role');}}
if(this.eleObj&&(this.type!='hidden'||eleObjAttrRole=='bigfile')){this._setDD();this._setDT();this._setDL();this._setContainer();this._setDescription();this._setTabIndex();this._initMultiCheckbox();this._initShowIf();this._initDuplicate();this._initDynLoader();this._initTimeAutoComplete();this._initFile();this._initHtmlArea();this._initRedirectOptions();this._initChangeEvent();this._initChangeWarning();if(!this.isRedirectOption&&this.type!='submit'){this._initBlurFocus();}}
this.FocusEvent.subscribe(this.focus,this);this.BlurEvent.subscribe(this.blur,this);var removeError=function()
{var els,child;els=YAHOO.util.Dom.getElementsByClassName('errors',null,this.container);if(els&&(els.length>0)){child=els[0];child.parentNode.removeChild(child);YAHOO.util.Dom.removeClass(this.DD,'input_error');}
if(this.type=='text'){YAHOO.util.Event.removeListener(this.eleObj,'keyup',removeError);}
else{this.ChangeEvent.unsubscribe(removeError);}};if(this.type=='text'){YAHOO.util.Event.addListener(this.eleObj,'keyup',removeError,this,true);}
else{this.ChangeEvent.subscribe(removeError);}},setElementObj:function(eleObj)
{this.eleObj=eleObj;if(this.DynLoader){this.DynLoader.ele=eleObj;}},hideShow:function(display,init)
{if(this.showing==display){return;}
if(typeof init=='undefined'||true!==init){init=false;}
if(init){this._hideShow(display);}
else{if(this.duplicate){var _anim,_animations=[];for(var i=0;i<this.eleObj.length;i++){if(typeof this.container[i].origHeight=='undefined'){this.container[i].origHeight=this._getOrigHeight(this.container[i]);}
if(display){_anim=new YAHOO.util.Anim(this.container[i],{height:{to:this.container[i].origHeight}},0.5,YAHOO.util.Easing.easeOut);}
else{_anim=new YAHOO.util.Anim(this.container[i],{height:{to:0}},0.3,YAHOO.util.Easing.easeIn);}
if(!display){this.container[i].style.height=this.container.origHeight;}
_animations.push(_anim);}
if(typeof this.Duplicate.add_link_row!='undefined'){if(typeof this.Duplicate.add_link_row.origHeight=='undefined'){this.Duplicate.add_link_row.origHeight=this._getOrigHeight(this.Duplicate.add_link_row);}
if(display){_anim=new YAHOO.util.Anim(this.Duplicate.add_link_row,{height:{to:this.Duplicate.add_link_row.origHeight}},0.5,YAHOO.util.Easing.easeOut);}
else{_anim=new YAHOO.util.Anim(this.Duplicate.add_link_row,{height:{to:0}},0.3,YAHOO.util.Easing.easeIn);_anim.onComplete.subscribe(this._hide,this,true);}
if(!display){this.Duplicate.add_link_row.style.height=this.Duplicate.add_link_row.origHeight;}
_animations.push(_anim);}
this._animPrep(display);for(var j=0;j<_animations.length;j++){_animations[j].animate();}}
else{if(!this.hideAnimation||!this.showAnimation){this.container.origHeight=this._getOrigHeight(this.container);this.container.origOverflow=this.container.style.overflow;this.hideAnimation=new YAHOO.util.Anim(this.container,{height:{to:0}},0.3,YAHOO.util.Easing.easeIn);this.showAnimation=new YAHOO.util.Anim(this.container,{height:{to:this.container.origHeight}},0.5,YAHOO.util.Easing.easeOut);this.hideAnimation.onStart.subscribe(this._hideAnimPrep,this,true);this.showAnimation.onStart.subscribe(this._showAnimPrep,this,true);this.hideAnimation.onComplete.subscribe(this._hide,this,true);this.showAnimation.onComplete.subscribe(function(){this.container.style.overflow=this.container.origOverflow;this.container.style.height='auto';},this,true);}
if(display){this._hideShowSubForm(this.id,display,'block');this.showAnimation.animate();}
else{this.container.style.height=this.container.origHeight;this.hideAnimation.animate();}}}
this.showing=display;},getName:function()
{if(this.belongsTo){return this.belongsTo+'['+this.name+']';}else if(this.FormTable.parent){if(this.FormTable.belongsTo){return this.FormTable.belongsTo+'['+this.name+']';}
else{return this.FormTable.formName+'['+this.name+']';}}
else{return this.name;}},getValue:function()
{var value=null;if(null!=this.eleObj){if(!this.duplicate&&!this.multipleElements){if(this.type=="htmlarea"&&this.getCkEditor()){value=this.getCkEditor().getData();}
else if(this.type=='checkbox'){value=this.eleObj.checked?this.eleObj.value:false;}
else{value=this.eleObj.value;}}
else if(this.type=='radio'){value=[];for(var i=0;i<this.eleObj.length;i++){if(this.eleObj[i].checked){value.push(this.eleObj[i].value);}}}
else{value=[];for(var i=0;i<this.eleObj.length;i++){if(this.type=='checkbox'){value.push(this.eleObj[i].checked?this.eleObj[i].value:false);}
else if(this.type!='multicheckbox'||this.eleObj[i].checked){value.push(this.eleObj[i].value);}}}}
return value;},setValue:function(value,silent)
{if(null!=this.eleObj){var stateChanged=false;if(!this.duplicate&&!this.multipleElements){if(this.type=="htmlarea"&&this.getCkEditor()){this.getCkEditor().setData(value);}
else if(this.type=='checkbox'){var prevState=this.eleObj.checked;this.eleObj.checked=(this.eleObj.value==value);stateChanged=(prevState!==this.eleObj.checked);}
else if(this.eleObj.value!=value){this.eleObj.value=value;stateChanged=true;}}
if(!silent&&stateChanged){TOOLBOX.dispatchElementEvent(this.eleObj,'change');}}},getCkEditor:function()
{if(this.type=="htmlarea"&&typeof CKEDITOR!="undefined"&&typeof CKEDITOR.instances!="undefined"&&typeof CKEDITOR.instances[this.id]!="undefined"){return CKEDITOR.instances[this.id];}
else{return null;}},focus:function()
{this.focused=true;if(this.description){this.showDescription();}},blur:function()
{this.focused=false;if(this.description){this.hideDescription();}},showDescription:function()
{this._showHideDescription(true);},hideDescription:function()
{this._showHideDescription(false);},_showHideDescription:function(show)
{if(this.descriptionContainer){if(show){var _context=this._getDescriptionContext();if(_context!=null){this.descriptionPanel=new YAHOO.widget.Panel(this.descriptionContainer,{underlay:'none',fixedcenter:false,close:false,draggable:false,modal:false,visible:false,context:[_context,"tl","tr"],zIndex:99999});this.descriptionPanel.render(document.body);this.descriptionPanel.show();}}
else{if(this.descriptionPanel){this.descriptionPanel.hide();this.descriptionPanel.destroy();}}
if(this.duplicate&&this.descriptionContainer.length>0){this.descriptionContainer[0].style.display=(show)?'inline':'none';}
else{this.descriptionContainer.style.display=(show)?'inline':'none';}}},_getDescriptionContext:function()
{var dd=(this.duplicate)?this.DD[0]:this.DD;var context=null;if(typeof this.descriptionContext!='undefined'){context=document.getElementById(this.descriptionContext);}
if(context==null){for(var i=0;i<dd.childNodes.length;i++){if(dd.childNodes[i].nodeType==1&&(!YAHOO.util.Dom.hasClass(dd.childNodes[i],'flashInstruction'))&&(!YAHOO.util.Dom.hasClass(dd.childNodes[i],'characterCounter'))){context=dd.childNodes[i];}}}
return context;},_initMultiCheckboxAction:function()
{if(this.type!='multicheckbox'||!this.allowCheckboxAction){return;}
var checkboxActionCtr=DOM_Editor.createElement({'type':'div','attr':{'class':'checkbox-action-container'}}),checkboxAllAction=DOM_Editor.createElement({'type':'a','attr':{'href':'javascript:void(0);','class':'action action-checkall','innerHTML':TOOLBOX.FormTable.Lang.checkAll}}),unCheckboxAllAction=DOM_Editor.createElement({'type':'a','attr':{'href':'javascript:void(0);','class':'action action-uncheckall','innerHTML':TOOLBOX.FormTable.Lang.unCheckAll}});var that=this;var checkFn=function(state){for(var i=0;i<that.eleObj.length;i++){if(that.eleObj[i].getAttribute('type')=='checkbox'){that.eleObj[i].checked=state?'checked':'';if("createEvent"in document){var evt=document.createEvent("HTMLEvents"),clkEvnt=document.createEvent("HTMLEvents");evt.initEvent("change",false,true);clkEvnt.initEvent("click",false,true);that.eleObj[i].dispatchEvent(evt);that.eleObj[i].dispatchEvent(clkEvnt);}else{that.eleObj[i].fireEvent("onchange");that.eleObj[i].fireEvent("onclick");}}}}
checkboxActionCtr.appendChild(checkboxAllAction);checkboxActionCtr.appendChild(unCheckboxAllAction);YAHOO.util.Event.addListener(checkboxAllAction,'click',function(){checkFn(true)},that);YAHOO.util.Event.addListener(unCheckboxAllAction,'click',function(){checkFn(false)},that);if(this.DD){this.DD.prepend(checkboxActionCtr);var parent=YAHOO.util.Dom.get(this.id+'-inputs');if(parent){YAHOO.util.Dom.addClass(parent,'action-loaded');}}},_initMultiCheckbox:function()
{if(this.type=='multicheckbox'){this.allowCheckboxAction=false;for(var i=0;i<this.eleObj.length;i++){if(this.eleObj[i].getAttribute('type')=='checkbox'){this.allowCheckboxAction=this.allowCheckboxAction||this.eleObj[i].hasAttribute('allowCheckboxAction');var parent=this.eleObj[i].parentNode;while(parent.parentNode!=this.DD&&parent.parentNode.getAttribute('id')!=this.id+'-inputs'){parent=parent.parentNode;}
var containerId=this.id+"-checkbox-container-"+this.eleObj[i].value;if(YAHOO.util.Dom.get(containerId)||YAHOO.util.Dom.hasClass(parent,'checkbox-container')){continue;}
var container=DOM_Editor.createElement({'type':'div','attr':{'class':'checkbox-container','id':containerId}});parent.parentNode.insertBefore(container,parent);container.appendChild(parent);(function(container,ele)
{YAHOO.util.Event.addListener(ele,'click',function(a,b,c,d,e)
{if(b[0].checked){YAHOO.util.Dom.addClass(b[1],'checked');}
else{YAHOO.util.Dom.removeClass(b[1],'checked');}},[ele,container]);})(container,this.eleObj[i]);if(container.nextSibling&&container.nextSibling.nodeName.toLowerCase()=='br'){container.nextSibling.parentNode.removeChild(container.nextSibling);}
if(this.eleObj[i].checked){YAHOO.util.Dom.addClass(container,'checked');}}}
this._initMultiCheckboxAction();}},_initShowIf:function()
{if(this.type=='select'||this.type=='multicheckbox'||this.type=='radio'||this.type=='checkbox'){this.ChangeEvent.subscribe(this.FormTable.showIf,this.FormTable,true);}},_initDuplicate:function()
{if(typeof this.duplicate!='undefined'){this.Duplicate=new TOOLBOX.FormTable.Element.Duplicate(this);}},_initDynLoader:function()
{if(typeof this.dynloader!='undefined'){this.DynLoader=new TOOLBOX.FormTable.Element.DynamicLoader(this);}},_initFile:function()
{if(this.type=='file'){this.File=new TOOLBOX.FormTable.Element.File(this);}},_initHtmlArea:function()
{if(this.type=='htmlarea'){this.getCkEditor().on('dataReady',function(e)
{this.origValue=this.getValue();},this);var me=this;this.getCkEditor().config.saveFunction=function(e)
{me.FormTable.submitting=true;this.defaultExec.call(this,e);};}},_initTimeAutoComplete:function()
{if(this.type=='time'||this.type=='datetime'){var _timeEle;if(this.type=='time'){_timeEle=this.eleObj;}
else{_timeEle=(null!==this.eleObj[0].getAttribute('timeDropDown'))?this.eleObj[0]:this.eleObj[1];}
var timeStartIndex=_timeEle.getAttribute('timeStartIndex');var hourlyTimeOption=_timeEle.hasAttribute('hourlyTimeOption');var interval=_timeEle.getAttribute('interval');var acConf={};if(interval){if(typeof TOOLBOX.getTimeList==='function'){var from=_timeEle.getAttribute('timestartsat');var to=_timeEle.getAttribute('timeendsat');var DayTimes=TOOLBOX.getTimeList(from,to,{'interval':interval});}else{var allowedIntervals=['15','30','60'];if(allowedIntervals.indexOf(interval)==-1){interval=60;}
var DayTimes=TOOLBOX.FormTable.Lang['timeOptions'+interval+'mins'];}}else if(hourlyTimeOption){var DayTimes=TOOLBOX.FormTable.Lang['timeHourlyOptions'];}else{var DayTimes=TOOLBOX.FormTable.Lang['timeOptions'];}
if(typeof timeStartIndex!='undefined'){var tmpDayTimes1=DayTimes.slice(timeStartIndex);var tmpDayTimes2=DayTimes.slice(0,timeStartIndex);DayTimes=tmpDayTimes1.concat(tmpDayTimes2);}
acConf.maxResultsDisplayed=DayTimes.length;this.timeSelect=new AutoSelect(_timeEle,DOM_Editor.uniqid('timeContainer'),DayTimes,acConf);YAHOO.util.Dom.addClass(this.DD,'timeSelect');}},_initRedirectOptions:function()
{if(this.isRedirectOption){YAHOO.util.Dom.addClass(this.container,'RedirectOptionsContainer');}},_initChangeEvent:function()
{if(!this.duplicate&&!this.multipleElements){if(this.type=="htmlarea"){var ckEditor=this.getCkEditor();ckEditor.on('blur',function()
{this.ChangeEvent.fire();},this);}
else{YAHOO.util.Event.addListener(this.eleObj,'change',function()
{this.ChangeEvent.fire();},this,true);}}
else if(this.type=='multicheckbox'&&!this.duplicate){for(var i=0;i<this.eleObj.length;i++){YAHOO.util.Event.addListener(this.eleObj[i],'change',function()
{this.ChangeEvent.fire();},this,true);}}
else if(this.type=='radio'&&!this.duplicate){for(var i=0;i<this.eleObj.length;i++){YAHOO.util.Event.addListener(this.eleObj[i],'change',function()
{this.ChangeEvent.fire();},this,true);}}},_initChangeWarning:function()
{if(!this.duplicate){this.ChangeEvent.subscribe(function()
{var value=this.getValue();if(this.origValue!=value){if(this.FormTable.changed.inArray(this.name)==-1){this.FormTable.changed.push(this.name);}
if(!TOOLBOX.isArray(this.container)&&this.container&&this.container.nodeName){YAHOO.util.Dom.addClass(this.container,'changed');}}
else{if(this.FormTable.changed.inArray(this.name)!=-1){this.FormTable.changed.remove(this.name);}
if(!TOOLBOX.isArray(this.container)&&this.container&&this.container.nodeName){YAHOO.util.Dom.removeClass(this.container,'changed');}}});}},_initBlurFocus:function()
{this.focused=false;if(this.duplicate){for(var i=0;i<this.eleObj.length;i++){(function(t,ele)
{YAHOO.util.Event.addListener(ele,'focus',function()
{this.obj.FocusEvent.fire();TOOLBOX.focusField(this.ele);},{obj:t,ele:ele},true);YAHOO.util.Event.addListener(ele,'blur',function()
{this.obj.BlurEvent.fire();TOOLBOX.blurField(this.ele);},{obj:t,ele:ele},true);})(this,this.eleObj[i]);}}
else{var focusElement,focusEvent,blurEvent;if(this.type=='autocomplete'){focusElement=this.container.getElementsByTagName('input')[0];focusEvent='focus';blurEvent='blur';}
else{focusElement=this.eleObj;focusEvent='focus';blurEvent='blur';}
YAHOO.util.Event.addListener(focusElement,focusEvent,function()
{this.FocusEvent.fire();if(this.type=='text'||this.type=='select'){TOOLBOX.focusField(this.eleObj);}},this,true);YAHOO.util.Event.addListener(focusElement,blurEvent,function()
{this.BlurEvent.fire();if(this.type=='text'||this.type=='select'){TOOLBOX.blurField(this.eleObj);}},this,true);}},_setEleObj:function()
{this.multipleElements=(this.type=='multicheckbox'||this.type=='radio'||this.type=='datetime'||this.type=='mixed');if(this.FormTable.duplicate&&!this.duplicate){this.collection=false;this.eleObj=this.FormTable.findHtmlElementByName(this.name);}
else if(this.multipleElements||this.duplicate){this.collection=true;var eleNodes;eleNodes=this.FormTable.findHtmlElementByName(this.getName());this.eleObj=[];if(typeof eleNodes.tagName!='undefined'){this.eleObj.push(eleNodes);}
else{for(var i=0;i<eleNodes.length;i++){this.eleObj.push(eleNodes[i]);}}}
else{this.collection=false;if(this.type=='captcha'){this.eleObj=YAHOO.util.Dom.get(this.id+'-input');}
else{if(this.FormTable){this.eleObj=this.FormTable.findHtmlElementById(this.id);}else{this.eleObj=YAHOO.util.Dom.get(this.id);}}}},_setType:function()
{var validTypes=['text','select','htmlarea','submit','date','time','datetime','multicheckbox','file','radio','checkbox','mixed','captcha','colour','autocomplete','hidden'];var p;if(this.type.indexOf('BaseApp_Form_Element_Colour')===0){this.type='colour';}
else{if(this.type){if((p=this.type.lastIndexOf('_'))){this.type=this.type.substr(p+1).toLowerCase();}}}
if(!this.type||validTypes.inArray(this.type)===-1){var f;if((f=document.getElementById(this.id))){if(f.tagName.toLowerCase()=='input'){this.type=(f.getAttribute('type')==null)?'text':f.getAttribute('type');}
else{this.type=f.tagName.toLowerCase();}}}
if(!this.type||validTypes.inArray(this.type)===-1){this.type='text';}},_setDD:function()
{if(this.duplicate){this.DD=[];for(var i=0;i<this.eleObj.length;i++){this.DD.push(this.eleObj[i].parentNode);}}
else{if(this.multipleElements){this.DD=this.eleObj[0].parentNode;}
else{this.DD=this.eleObj.parentNode;}
var _dd=this.DD;while(this.DD.tagName.toLowerCase()!='dd'&&this.DD!=this.FormTable.form&&this.DD!=document.body){this.DD=this.DD.parentNode;}
if(!this.DD||this.DD.tagName.toLowerCase()!='dd'){this.DD=_dd;}}},_setDT:function()
{if(this.duplicate){this.DT=[];for(var i=0;i<this.eleObj.length;i++){this.DT.push(YAHOO.util.Dom.get(this.eleObj[i].id+'-label'));}}
else if(this.multipleElements){this.DT=YAHOO.util.Dom.get(this.eleObj[0].id.replace(/\[[^\]]+\]$/,'')+'-label');}
else{this.DT=YAHOO.util.Dom.get(this.eleObj.id+'-label');}},_setDL:function()
{if(this.duplicate){this.DL=this._findParentDL(this.DD[0]);}
else{this.DL=this._findParentDL(this.DD);}
if(!this.DL){this.DL=document.getElementsByName('dl')[0];}},_findParentDL:function(ele)
{var tries=0,maxTries=10,found=false,parentDL=ele.parentNode;while(tries<maxTries&&!found){parentDL=parentDL.parentNode;if(typeof parentDL.tagName!='undefined'){found=(parentDL.tagName.toLowerCase()=='dl');}
tries++;}
return(found)?parentDL:false;},_setContainer:function()
{var _container;if(this.duplicate){this.container=[];var l=this.eleObj.length;for(var i=0;i<l;i++){_container=this._findElementContainer(this.eleObj[i]);if(!_container){_container=DOM_Editor.createElement({'type':'div'});this.DL.insertBefore(_container,this.DT[i]);_container.appendChild(this.DT[i]);_container.appendChild(this.DD[i]);}
this.container[i]=_container;}
this._setEleObj();}
else{if(this.multipleElements){_container=this._findElementContainer(this.eleObj[0]);}
else{_container=this._findElementContainer(this.eleObj);}
if(!_container){_container=DOM_Editor.createElement({'type':'div'});this.DL.insertBefore(_container,this.DT);_container.appendChild(this.DT);_container.appendChild(this.DD);}
this.container=_container;}},_setDescription:function()
{var _findDescription;if(this.duplicate){this.descriptionContainer=[];var _descriptionContainer;for(var i=0;i<this.container.length;i++){_findDescription=YAHOO.util.Dom.getElementsByClassName('flashInstruction','div',this.container[i]);_descriptionContainer=(_findDescription.length==1)?_findDescription[0]:false;if(_descriptionContainer){this.descriptionContainer.push(_descriptionContainer);this.description=_descriptionContainer.childNodes[0].innerHTML;}}}
else{_findDescription=YAHOO.util.Dom.getElementsByClassName('flashInstruction','div',this.container);this.descriptionContainer=(_findDescription.length==1)?_findDescription[0]:false;if(this.descriptionContainer){this.description=this.descriptionContainer.childNodes[0].innerHTML;}}},_findElementContainer:function(ele)
{var container=ele.parentNode;var tries=0;var maxTries=20;while(!this._isElementContainer(container)&&tries<maxTries){container=container.parentNode;tries++;}
if(!this._isElementContainer(container)){return false;}
else{return container;}},_isElementContainer:function(ele)
{var className=YAHOO.util.Dom.getAttribute(ele,'class');return(null!==className&&className.match(/form-element/));},_animPrep:function(display)
{if(display){this._showAnimPrep();}
else{this._hideAnimPrep();}},_hideAnimPrep:function()
{var region;if(this.duplicate){for(var i=0;i<this.eleObj.length;i++){region=YAHOO.util.Dom.getRegion(this.container[i]);this.container[i].style.width=region.width;this.container[i].style.overflow='hidden';}
if(typeof this.Duplicate.add_link_row!='undefined'){region=YAHOO.util.Dom.getRegion(this.Duplicate.add_link_row);this.Duplicate.add_link_row.style.width=region.width;this.Duplicate.add_link_row.style.overflow='hidden';}}
else{region=YAHOO.util.Dom.getRegion(this.container);this.container.style.width=region.width;this.container.style.overflow='hidden';}},_showAnimPrep:function()
{if(this.duplicate){for(var i=0;i<this.eleObj.length;i++){this.container[i].style.height='0px';this.container[i].style.display='';this.container[i].style.overflow='hidden';}
if(typeof this.Duplicate.add_link_row!='undefined'){this.Duplicate.add_link_row.style.height='0px';this.Duplicate.add_link_row.style.display='';this.Duplicate.add_link_row.style.overflow='hidden';}}
else{this.container.style.height='0px';this.container.style.overflow='hidden';this.container.style.display='';}},_hide:function()
{this._hideShow(false);this.AfterHideEvent.fire();},_show:function()
{this._hideShow(true);this.AfterShowEvent.fire();},_hideShow:function(display)
{var displayStyle=(display)?'':'none';if(this.duplicate){for(var i=0;i<this.DT.length;i++){this.container[i].style.display=displayStyle;}
if(typeof this.Duplicate.add_link_row!='undefined'){this.Duplicate.add_link_row.style.display=displayStyle;}}
else{this._hideShowSubForm(this.id,display,displayStyle);this.container.style.display=displayStyle;}},_hideShowSubForm:function(eleid,display,displayStyle){var eleid=eleid.split("-");var isnum=/^\d+$/.test(eleid[1]);if(isnum){var subFormEle=document.getElementById(eleid[1]+"-subform");if(subFormEle){subFormEle.style['display']=displayStyle;}}},_getOrigHeight:function(ele)
{var origPos=ele.style.position;var origVis=ele.style.visibility;var origDisplay=ele.style.display;var origClass=YAHOO.util.Dom.getAttribute(ele,'class');ele.style.position='absolute';ele.style.visbility='hidden';ele.style.display='';DOM_Editor.removeClass(ele,'hide');var height=(YAHOO.util.Dom.getRegion(ele).height);ele.style.position=origPos;ele.style.visibility=origVis;ele.style.display=origDisplay;YAHOO.util.Dom.setAttribute(ele,'className',origClass);if(this.type=='htmlarea'){height+=6;}
return height;},_setTabIndex:function()
{var links=this.FormTable.form.getElementsByTagName('a');for(var i=0;i<links.length;i++){if(null==links[i].getAttribute('tabindex')){links[i].setAttribute('tabindex','99');}}}};TOOLBOX.FormTable.Element.disableReturnChar=function(e)
{var key;if(window.event){key=window.event.keyCode;}
else{key=e.which;}
if(key==13){return false;}
else{return true;}};TOOLBOX.FormTable.Element.Duplicate=function(element)
{this.element=element;if(typeof element.newValue=='undefined'){this.newValue=element.eleObj[0].getAttribute('newValue');if(this.element.type=='date'){this.newValue=this.newValue.toLowerCase();}}
else{this.newValue=element.newValue;}
this.nextRowIndex=0;this.init();this.AfterAddRowEvent=new YAHOO.util.CustomEvent('afterAddRow',this);this.AfterRemoveRowEvent=new YAHOO.util.CustomEvent('afterRemoveRow',this);};TOOLBOX.FormTable.Element.Duplicate.prototype={init:function()
{this.sortable=(typeof this.element.sortable!='undefined');this.rows=[];for(var i=0;i<this.element.eleObj.length;i++){var duplicate_row=new TOOLBOX.FormTable.Element.Duplicate.Row(this.element.eleObj[i],this.element.DT[i],this.element.DD[i],this.element.container[i],this.element.descriptionContainer[i],this);this.rows.push(duplicate_row);this.nextRowIndex++;}
this.clone_row=this.rows[0].container.cloneNode(true);this.clone_row.id=DOM_Editor.uniqid('clone');for(var j=0;j<this.rows.length;j++){var link=document.createElement('a');link.setAttribute('href','javascript:void(0);')
link.setAttribute('tabindex','99')
link.style.marginLeft='5px';link.innerHTML=TOOLBOX.FormTable.Lang.remove;YAHOO.util.Event.addListener(link,'click',this.rows[j].destroy,this.rows[j],true);this.rows[j].DD.appendChild(link);}
var _extraClass='';if(this.element.indent){_extraClass+=' formIndent'}
this.add_link_row=DOM_Editor.createElement({'type':'div','attr':{'id':DOM_Editor.uniqid('add_link'),'class':'form-element add-row'+_extraClass},'children':[{'type':'dt','attr':{'innerHTML':'&nbsp;'}},{'type':'dd'}]});var add_link=document.createElement('a');add_link.innerHTML=TOOLBOX.FormTable.Lang.addAnother;add_link.setAttribute('href','javascript:void(0);')
add_link.setAttribute('tabindex','99')
YAHOO.util.Event.addListener(add_link,'click',this.addRow,this,true);this.add_link_row.childNodes[1].appendChild(add_link);this.element.DL.insertBefore(this.add_link_row,this.element.container[this.element.container.length-1].nextSibling);if(this.sortable){this.initSort();}},initSort:function()
{for(var i=0;i<this.rows.length;i++){this.rows[i].DD.insertBefore(DOM_Editor.createElement({'type':'span','attr':{'innerHTML':'__sort_handle__'}}),this.rows[i].DD.childNodes[0]);DOM_Editor.addClass(this.rows[i].container,'ElementSort');}
this.Sort=new TOOLBOX.FormTable.Element.Duplicate.Sort(this);this.Sort.dragCompleteEvent.subscribe(this.dragComplete,this,true);},addRow:function()
{var new_row=this.clone_row.cloneNode(true);this.element.container.push(new_row);var DT=new_row.getElementsByTagName('dt')[0];this._resetEleId(DT);this.element.DT.push(DT);var DD=new_row.getElementsByTagName('dd')[0];this._resetEleId(DD);this.element.DD.push(DD);var _findDescription=YAHOO.util.Dom.getElementsByClassName('flashInstruction','div',new_row);var DC=(_findDescription.length==1)?_findDescription[0]:false;if(DC){this.element.descriptionContainer.push(DC);}
this._resetEleAttr(new_row.getElementsByTagName('label')[0],'for');var images=new_row.getElementsByTagName('img');for(var i=0;i<images.length;i++){if(images[i].src.match('question_mark.gif')){images[i].parentNode.removeChild(images[i]);}}
DT.innerHTML=DT.innerHTML.replace(/\[duplicate-num\]/g,'<!--M-NUM-->'+(this.rows.length+1));DD.innerHTML=DD.innerHTML.replace(/\[duplicate-num\]/g,'<!--M-NUM-->'+(this.rows.length+1));var eleObj=this._getElementObject(new_row);if(this.element.type=='date'){var myCal=new TOOLBOX.CalendarPopup(eleObj);}
this.element.eleObj.push(eleObj);YAHOO.util.Event.addListener(eleObj,'focus',function()
{this.obj.FocusEvent.fire();TOOLBOX.focusField(this.ele);},{obj:this.element,ele:eleObj},true);YAHOO.util.Event.addListener(eleObj,'blur',function()
{this.obj.BlurEvent.fire();TOOLBOX.blurField(this.ele);},{obj:this.element,ele:eleObj},true);var new_duplicate_row=new TOOLBOX.FormTable.Element.Duplicate.Row(eleObj,DT,DD,new_row,DC,this);var link=document.createElement('a');link.setAttribute('href','javascript:void(0);')
link.setAttribute('tabindex','99')
link.style.marginLeft='5px';link.innerHTML=TOOLBOX.FormTable.Lang.remove;YAHOO.util.Event.addListener(link,'click',new_duplicate_row.destroy,new_duplicate_row,true);DD.appendChild(link);var div=YAHOO.util.Dom.getElementsByClassName('formIndent','div',new_row)[0];if(this.rows.length==0){YAHOO.util.Dom.addClass(div,'indentImage');}
else{YAHOO.util.Dom.removeClass(div,'indentImage');}
this.element.DL.insertBefore(new_row,this.add_link_row);this.rows.push(new_duplicate_row);this.nextRowIndex++;if(this.sortable){new_duplicate_row.DD.insertBefore(DOM_Editor.createElement({'type':'span','attr':{'innerHTML':'__sort_handle__'}}),new_duplicate_row.DD.childNodes[0]);DOM_Editor.addClass(new_duplicate_row.container,'ElementSort');this.Sort.newSortRow(new_duplicate_row);}
if(new_row.getElementsByTagName('input').length){var newTxtBox=new_row.getElementsByTagName('input')[0];newTxtBox.focus();}
this.AfterAddRowEvent.fire({newRow:new_row});},removeRow:function(row)
{var tmp=[];var r;var count=0;for(var i=0;i<this.rows.length;i++){if(this.rows[i]!=row){r=this.rows[i];tmp.push(r);count++;}
else{if(this.sortable){this.Sort.removeRow(this.rows[i]);}
this.element.eleObj.remove(row.eleObj);this.element.DT.remove(row.DT);this.element.DD.remove(row.DD);this.element.container.remove(row.container);this.element.descriptionContainer.remove(row.descriptionContainer);row.eleObj.parentNode.removeChild(row.eleObj);row.DT.parentNode.removeChild(row.DT);row.DD.parentNode.removeChild(row.DD);row.container.parentNode.removeChild(row.container);}}
this.rows=tmp;this._resetIndentImages();this.AfterRemoveRowEvent.fire({newRow:row});},getNumRows:function()
{return this.rows.length;},_resetIndentImages:function()
{if(this.sortable){this.Sort.resetIndentImages();}
else{var rows=this.rows;var indentImageRow,showImage;for(var i=0;i<rows.length;i++){indentImageRow=indentImageRow=YAHOO.util.Dom.getElementsByClassName('formIndent','div',rows[i].container)[0];showImage=(i==0);if(showImage){YAHOO.util.Dom.addClass(indentImageRow,'indentImage');}
else{YAHOO.util.Dom.removeClass(indentImageRow,'indentImage');}}}},dragComplete:function()
{this.resetMNum();},resetMNum:function()
{var table_rows=this.base_table.getElementsByTagName('tr');var tmp=[];var count=0;for(var j=0;j<table_rows.length;j++){for(var i=0;i<this.rows.length;i++){if(table_rows[j].id==this.rows[i].tr.id){r=this.rows[i];r.index=count;r.tr.getElementsByTagName('td')[0].innerHTML=r.tr.getElementsByTagName('td')[0].innerHTML.replace(/<!--M-NUM-->[0-9]+/,'<!--M-NUM-->'+(count+1));if(count==0){DOM_Editor.removeClass(r.tr,'spacer_bg');DOM_Editor.addClass(r.tr,'indent_bg');}
else{DOM_Editor.removeClass(r.tr,'indent_bg');DOM_Editor.addClass(r.tr,'spacer_bg');}
tmp.push(r);count++;}}}
this.rows=tmp;},toString:function()
{return'FormTable.Multiplier:'+this.tr.id;},_getElementObject:function(row)
{var eleObj=false;if(this.element.type=='text'||this.element.type=='date'||this.element.type=='autocomplete'){eleObj=row.getElementsByTagName('input')[0];eleObj.value=this.newValue;this._resetEleId(eleObj);}
else if(this.element.type=='select'){eleObj=row.getElementsByTagName('select')[0];eleObj.value=this.newValue;this._resetEleId(eleObj);}
return eleObj;},_resetEleId:function(ele,attr)
{this._resetEleAttr(ele,'id');},_resetEleAttr:function(ele,attr){ele.setAttribute(attr,ele.getAttribute(attr).replace(/_([0-9]+)/g,'_'+new String(this.nextRowIndex+1)));}};TOOLBOX.FormTable.Element.Duplicate.Row=function(eleObj,DT,DD,container,descriptionContainer,Duplicate)
{this.eleObj=eleObj;this.DT=DT;this.DD=DD;this.container=container;this.descriptionContainer=descriptionContainer;this.Duplicate=Duplicate;};TOOLBOX.FormTable.Element.Duplicate.Row.prototype={destroy:function()
{if(confirm(TOOLBOX.FormTable.Lang.removeItem)){this.Duplicate.removeRow(this);}},toString:function()
{return'FormTable.Multiplier.Row:'+this.eleObj.id;}};TOOLBOX.FormTable.Element.Duplicate.Sort=function(duplicate)
{this.Duplicate=duplicate;this.dragCompleteEvent=new YAHOO.util.CustomEvent('dragComplete');this.dragCompleteEvent.subscribe(this.saveSortOrder,this,true);this.dragCompleteEvent.subscribe(this.resetIndentImages,this,true);this.init();};TOOLBOX.FormTable.Element.Duplicate.Sort.prototype={init:function()
{this._initTarget();this._initSortRows();},newSortRow:function(row)
{row.SortRowIndex=this.sortRows.length;this.targetDiv.appendChild(row.container);this.sortRows.push(new T.ROW(row,this,{'group':this.targetDiv.id}));this.rowCount++;},removeRow:function(row)
{var tmp=[];var r;var count=0;for(var i=0;i<this.sortRows.length;i++){if(this.sortRows[i].row.SortRowIndex!=row.SortRowIndex){r=this.sortRows[i];r.row.SortRowIndex=tmp.length;r.setSortValue(tmp.length+1);tmp.push(r);count++;}
else{}}
this.sortRows=tmp;},saveSortOrder:function()
{for(var i=0;i<this.targetDiv.childNodes.length;i++){for(var j=0;j<this.sortRows.length;j++){if(this.sortRows[j].row.container==this.targetDiv.childNodes[i]){this.sortRows[j].hiddenInput.value=i+1;}}}},resetIndentImages:function()
{this.saveSortOrder();for(var i=0;i<this.sortRows.length;i++){var indentImageRow=YAHOO.util.Dom.getElementsByClassName('formIndent','div',this.sortRows[i].row.container);if(this.sortRows[i].hiddenInput.value==1){YAHOO.util.Dom.addClass(indentImageRow,'indentImage');}
else{YAHOO.util.Dom.removeClass(indentImageRow,'indentImage');}}},dragComplete:function()
{this.dragCompleteEvent.fire();},_initTarget:function()
{this.targetDiv=DOM_Editor.createElement({'type':'div','attr':{'id':DOM_Editor.uniqid('FTEDS-Target_')},'style':{}});this.Duplicate.rows[0].container.parentNode.insertBefore(this.targetDiv,this.Duplicate.rows[0].container);this.target=new YAHOO.util.DDTarget(this.targetDiv,this.targetDiv.id);},_initSortRows:function()
{this.sortRows=[];this.rowCount=0;for(var i=0;i<this.Duplicate.rows.length;i++){this.newSortRow(this.Duplicate.rows[i]);}}};TOOLBOX.FormTable.Element.Duplicate.Sort.Row=function(row,sort,config)
{this.row=row;this.Sort=sort;if(typeof config=='undefined'){config={};}
this.sortConfig=TOOLBOX.mergeConfig(config,{'group':'dd_editor','over_class':'dd_over','inputName':'sortOrder[]'});this.row.container.id=DOM_Editor.uniqid('DPROXY');this.init(this.row.container,this.sortConfig.group,{});this.initFrame();this.initSort();};T={ROW:TOOLBOX.FormTable.Element.Duplicate.Sort.Row};YAHOO.extend(T.ROW,YAHOO.util.DDProxy);T.ROW.prototype.initSort=function()
{this._initHiddenInput();this._initHandle();};T.ROW.prototype.setSortValue=function(newValue)
{this.hiddenInput.value=newValue;};T.ROW.prototype._initHiddenInput=function()
{var name=this.sortConfig.inputName.replace(/\[row-index\]/g,(this.Sort.rowCount));this.hiddenInput=DOM_Editor.createElement({'type':'input','attr':{'type':'hidden','name':name}});this.row.container.appendChild(this.hiddenInput);this.hiddenInput.value=this.Sort.rowCount+1;};T.ROW.prototype._randomIds=function(ele){var eles=ele.getElementsByTagName('*');ele.setAttribute('id','TMP_ID_1');for(var i=0;i<eles.length;i++){eles[i].setAttribute('id','TMP_ID_'+(i+2))}}
T.ROW.prototype._initHandle=function()
{this.handle=false;var handleEle=false;var elements=this.row.container.getElementsByTagName('*');for(var i=0;i<elements.length&&!handleEle;i++){if(elements[i].innerHTML==('__sort_handle__')){elements[i].innerHTML=elements[i].innerHTML.replace('__sort_handle__','');handleEle=elements[i];}}
var div=DOM_Editor.createElement({'type':'div','attr':{'id':DOM_Editor.uniqid('MagicTableSortHandle'),'class':'SortHandle','title':TOOLBOX.FormTable.Lang.dragToSort}});if(handleEle){handleEle.appendChild(div);this.handleAdded=true;}
if(this.handleAdded==true){this.handle=div;this.setHandleElId(this.handle.id);}};T.ROW.prototype.startDrag=function(x,y){var dragEl=this.getDragEl();var clickEl=this.getEl().cloneNode(true);YAHOO.util.Dom.setStyle(this.getEl(),"visibility","hidden");var setDTWidth=YAHOO.util.Dom.getRegion(this.row.DT).width;var setDDWidth=YAHOO.util.Dom.getRegion(this.row.DD).width;var setInputWidth=YAHOO.util.Dom.getRegion(this.row.eleObj).width;var setDivWidth=setDTWidth+setDDWidth;this._randomIds(clickEl);var html='<form><div style="background-color:none;">';html+=clickEl.innerHTML
html+='</div></form>';dragEl.innerHTML=html;var DT=dragEl.getElementsByTagName('dt')[0];var DD=dragEl.getElementsByTagName('dd')[0];var input=dragEl.getElementsByTagName('input');YAHOO.util.Dom.setStyle(dragEl,"border","none");YAHOO.util.Dom.setStyle(dragEl,"z-index","5000");YAHOO.util.Dom.setStyle(DT.parentNode,"background-color",'#e9f5fe');YAHOO.util.Dom.setStyle(DT.parentNode,"border",'1px solid #b3d4ff');if(input.length>0){YAHOO.util.Dom.setStyle(input[0],"width",(setInputWidth)+'px');}};T.ROW.prototype.endDrag=function(e,id){var srcEl=this.getEl();var proxy=this.getDragEl();YAHOO.util.Dom.setStyle(proxy,"visibility","");var a=new YAHOO.util.Motion(proxy,{'points':{'to':YAHOO.util.Dom.getXY(srcEl)}},0.2,YAHOO.util.Easing.easeOut);var proxyid=proxy.id;var thisid=this.id;a.onComplete.subscribe(function(){YAHOO.util.Dom.setStyle(proxyid,"visibility","hidden");YAHOO.util.Dom.setStyle(thisid,"visibility","");});a.animate();a.onComplete.subscribe(this.Sort.dragComplete,this.Sort,true);};T.ROW.prototype.onDragDrop=function(e,id){};T.ROW.prototype.onDrag=function(e){var y=YAHOO.util.Event.getPageY(e);if(y<this.lastY){this.goingUp=true;}else if(y>this.lastY){this.goingUp=false;}
this.lastY=y;};T.ROW.prototype.onDragOver=function(e,id){var srcEl=this.getEl();var destEl=YAHOO.util.Dom.get(id);if("div"==destEl.nodeName.toLowerCase()&&destEl.getAttribute('class')!=null&&destEl.getAttribute('class').indexOf('ElementSort')!==-1){var orig_p=srcEl.parentNode;var p=destEl.parentNode;if(this.goingUp){p.insertBefore(srcEl,destEl);}else{p.insertBefore(srcEl,destEl.nextSibling);}
YAHOO.util.DragDropMgr.refreshCache();}};T.ROW.prototype.over_me=function(dd_over_me){};T.ROW.prototype.out_me=function(dd_out_me){};TOOLBOX.FormTable.Element.DynamicLoader=function(element){this.element=element;this.loadUrl=this.element.eleObj.getAttribute('dynloader');this.ele=this.element.eleObj;this.id=this.ele.id;this.inputName=this.ele.name;this.form=this.getForm();this.init();};TOOLBOX.FormTable.Element.DynamicLoader.prototype={init:function()
{this.addIndicator();if(this.ele.getAttribute('updateOnChange')!=null){this.updateOnChange=this.ele.getAttribute('updateOnChange').split('|');}
else{this.updateOnChange=[];}
this.onLoadedEvent=new YAHOO.util.CustomEvent('onLoaded');if(this.ele.getAttribute('onLoaded')!=null){this.onloaded=this.ele.getAttribute('onLoaded').split('|');}
else{this.onloaded=[];}
for(var k=0;k<this.onloaded.length;k++){var run_this=this.onloaded[k];this.onLoadedEvent.subscribe(function()
{eval(run_this+'();');});}
this.onLoadedEvent.subscribe(this.setInputName,this,true);if(typeof this.updateOnChange.length!='undefind'){for(var i=0;i<this.updateOnChange.length;i++){var updateElement=this.element.FormTable.elements[this.updateOnChange[i]];this._addUpdateListeners(updateElement);if(typeof updateElement.DynLoader!='undefined'){(function(me,updateElement)
{updateElement.DynLoader.onLoadedEvent.subscribe(function(e,x,obj){obj[0]._addUpdateListeners(obj[1]);},[me,updateElement]);})(this,updateElement);}}}
this.element.FormTable.onInitEvent.subscribe(this.run,this,true);},_addUpdateListeners:function(updateElement)
{var updateElementObj=updateElement.eleObj;if(typeof updateElementObj.tagName!='undefined'&&updateElementObj.tagName.toLowerCase()=='select'){YAHOO.util.Event.addListener(updateElementObj,'change',this.run,this,true);}
else if(typeof updateElementObj.length!='undefined'){for(var j=0;j<updateElementObj.length;j++){YAHOO.util.Event.addListener(updateElementObj[j],'click',this.run,this,true);}}},addIndicator:function()
{if(!YAHOO.util.Dom.get(this.id+'-INDICATOR')){this.indicator=DOM_Editor.createElement({'type':'img','attr':{'id':this.id+'-INDICATOR','src':'/baseapp/images/loading_indicator.gif'},'style':{'display':'none'}});this.element.DD.appendChild(this.indicator);}},run:function()
{var callback={success:this.complete,failure:this.failure,scope:this};this.loading();var transaction=YAHOO.util.Connect.asyncRequest('GET',this.buildUrl(this.loadUrl,this.element.FormTable),callback);},buildUrl:function(url,form)
{var ele;for(var eleName in form.elements){ele=form.elements[eleName];if(ele==this.element){url=this.replaceIntoUrl(ele,url,'self');}
else{url=this.replaceIntoUrl(ele,url);}}
var and=(url.indexOf('?')===-1)?'?':'&';url+=and+'name='+this.element.getName();url=TOOLBOX.hashUrl(url);return url;},replaceIntoUrl:function(ele,url,replaceVal)
{if(typeof replaceVal=='undefined'){replaceVal=ele.name;}
var escapeName=replaceVal.replace(/([\[\]])/g,'\\$1');var search=new RegExp('[?&]([^&]+)=\\[('+escapeName+')\\]');var results;if((results=url.match(search))){var key=results[1];var escapeKey=key.replace(/([\[\]])/g,'\\$1');var valueStr=this.getInputValueString(ele,key.replace(/([\[\]])/g,''));var replace=new RegExp(escapeKey+'=\\['+escapeName+'\\]');url=url.replace(replace,valueStr);}
return url;},getForm:function()
{return this.element.FormTable.form;var check_ele=this.ele;var max_tries=20;var num_tries=0;do
{num_tries++;check_ele=check_ele.parentNode;}while(check_ele.tagName.toLowerCase()!='form'&&max_tries>num_tries);return(check_ele.tagName.toLowerCase()=='form')?check_ele:false;},setInputName:function()
{this.inputName=this.getInputName();},getInputValueString:function(element,key)
{var input=element.eleObj;var value=false;if(typeof input.tagName!='undefined'){if(typeof input.length=='undefined'||(input.tagName.toLowerCase()=='select'&&input.multiple==false)){if(input.type=='checkbox'||input.type=='radio'){value=(input.checked)?input.value:false;}
else{value=input.value;}}
else if(input.tagName.toLowerCase()=='radio'){value=get_checked_radioObj_value(input);}}
else{value=[];for(var i=0;i<input.length;i++){if(input[i].checked||input[i].selected){value.push(input[i].value);}}}
var value_obj=new Array();if(typeof value=='object'&&value.length==0){value='';}
value_obj[key]=value;return value_obj.httpBuildQuery();},loading:function()
{this.showIndicator();this.disableEle();this.element.hideShow(true);},complete:function(o)
{var thisHasFocus=document.activeElement==this.ele;this.hideIndicator();if(!o.responseText){this.element.hideShow(false);this.ele.innerHTML='';}
else{this.element.hideShow(true);var responseEle=this._responseTextToElement(o.responseText);this.ele.parentNode.insertBefore(responseEle,this.ele);this.ele.parentNode.removeChild(this.ele);this.element.setElementObj(responseEle);this._evalScripts(o.responseText);this.onLoadedEvent.fire();this.element._initChangeEvent();if(!this._isShowIfBinded){this._isShowIfBinded=true;this.element._initShowIf();}
this.element.FormTable.showIf();if(thisHasFocus){this.ele.focus();}}},_responseTextToElement:function(response)
{var div=document.createElement('div');div.innerHTML=response;return div.getElementsByTagName('*')[0];},failure:function(o)
{},_evalScripts:function(response)
{},hideIndicator:function()
{this.indicator.style.display='none';},showIndicator:function()
{this.indicator.style.display='';},disableEle:function()
{this.ele.setAttribute('disabled','disabled');}};TOOLBOX.FormTable.Element.File=function(element)
{this.element=element;this.init();};TOOLBOX.FormTable.Element.File.prototype={init:function()
{var _links=YAHOO.util.Dom.getElementsByClassName('fileDelete','a',this.element.DD)[0];this.deleteLink=_links;if(this.element.deleteAction){var self=this;YAHOO.util.Event.addListener(this.deleteLink,'click',function(){self.deleteFile()},this,true);}
this.addIndicator();this.getResizeOptions();if(this.resizeOptions){this._initResizeOptions();}},_initResizeOptions:function()
{this.resizeOptions.style.display='none';this.showResizeAnimation=TOOLBOX.Animate.reveal(this.resizeOptions);this.hideResizeAnimation=TOOLBOX.Animate.conceal(this.resizeOptions);YAHOO.util.Event.addListener(this.element.eleObj,'change',function()
{var show=(this.element.eleObj.value.match(/\.(jpg|jpeg|gif|png)$/i));if(show){this.showResizeAnimation.animate();}
else{this.hideResizeAnimation.animate();}},this,true);},addIndicator:function()
{if(this.deleteLink){this.indicator=DOM_Editor.createElement({'type':'img','attr':{'id':this.id+'-INDICATOR','src':'/baseapp/images/loading_indicator.gif','class':'fileIndicator'},'style':{'display':'none'}});this.deleteLink.parentNode.insertBefore(this.indicator,this.deleteLink);}},deleteFile:function()
{TOOLBOX.confirm({text:TOOLBOX.FormTable.Lang.deleteFile,handleYes:{fn:function(e,obj)
{this.hide();var callback={success:obj.complete,failure:obj.failure,scope:obj};obj.loading();var transaction=YAHOO.util.Connect.asyncRequest('GET',obj.element.deleteAction,callback);},obj:this}});},loading:function()
{this.showIndicator();},complete:function(o)
{this.hideIndicator();this.getResizeOptions();this.element.DD.innerHTML='';o.responseObj=YAHOO.lang.JSON.parse(o.responseText);if(typeof o.responseObj.success=='undefined'||!o.responseObj.success){this.failure(o);}
else{this.element.eleObj=this.buildFileInput();this.element.DD.appendChild(this.element.eleObj);if(this.resizeOptions){this.element.DD.appendChild(this.resizeOptions);this._initResizeOptions()}
TOOLBOX.showSystemMessage(TOOLBOX.FormTable.Lang.deleteFileSuccess);}},failure:function(o){this.hideIndicator();var error='There was an error deleting the file';if(o.responseObj&&o.responseObj.error){error=o.responseObj.error;}
this.element.DD.innerHTML='<span class="form_error">'+error+'</span>';},hideIndicator:function()
{this.indicator.style.display='none';},showIndicator:function()
{this.indicator.style.display='';},buildFileInput:function()
{this.fileInput=DOM_Editor.createElement({'type':'input','attr':{'type':'file','id':this.element.id,'name':this.element.eleObj.name,'class':this.element['class']}});return this.fileInput;},getResizeOptions:function()
{var _resizeOptions=YAHOO.util.Dom.getElementsByClassName('resizeOptions','div',this.element.DD);this.resizeOptions=(_resizeOptions.length==1)?_resizeOptions[0]:null;}};;TOOLBOX.FormTable.Lang={addAnother:'Add Another',remove:'Remove',checkAll:'Check All',unCheckAll:'Uncheck All',removeItem:'Are you sure you want to remove this item?',dragToSort:'Click and drag to sort',deleteFile:'Are you sure you want to delete this file?',deleteFileSuccess:'The file was deleted successfully',timeOptions:['9:00 AM','9:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM','12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM','3:00 PM','3:30 PM','4:00 PM','4:30 PM','5:00 PM','5:30 PM','6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM','8:30 PM','9:00 PM','9:30 PM','10:00 PM','10:30 PM','11:00 PM','11:30 PM','12:00 AM','12:30 AM','1:00 AM','1:30 AM','2:00 AM','2:30 AM','3:00 AM','3:30 AM','4:00 AM','4:30 AM','5:00 AM','5:30 AM','6:00 AM','6:30 AM','7:00 AM','7:30 AM','8:00 AM','8:30 AM'],timeHourlyOptions:['9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM','10:00 PM','11:00 PM','12:00 AM','1:00 AM','2:00 AM','3:00 AM','4:00 AM','5:00 AM','6:00 AM','7:00 AM','8:00 AM'],timeOptions15mins:['12:00 AM','12:15 AM','12:30 AM','12:45 AM','1:00 AM','1:15 AM','1:30 AM','1:45 AM','2:00 AM','2:15 AM','2:30 AM','2:45 AM','3:00 AM','3:15 AM','3:30 AM','3:45 AM','4:00 AM','4:15 AM','4:30 AM','4:45 AM','5:00 AM','5:15 AM','5:30 AM','5:45 AM','6:00 AM','6:15 AM','6:30 AM','6:45 AM','7:00 AM','7:15 AM','7:30 AM','7:45 AM','8:00 AM','8:15 AM','8:30 AM','8:45 AM','9:00 AM','9:15 AM','9:30 AM','9:45 AM','10:00 AM','10:15 AM','10:30 AM','10:45 AM','11:00 AM','11:15 AM','11:30 AM','11:45 AM','12:00 PM','12:15 PM','12:30 PM','12:45 PM','1:00 PM','1:15 PM','1:30 PM','1:45 PM','2:00 PM','2:15 PM','2:30 PM','2:45 PM','3:00 PM','3:15 PM','3:30 PM','3:45 PM','4:00 PM','4:15 PM','4:30 PM','4:45 PM','5:00 PM','5:15 PM','5:30 PM','5:45 PM','6:00 PM','6:15 PM','6:30 PM','6:45 PM','7:00 PM','7:15 PM','7:30 PM','7:45 PM','8:00 PM','8:15 PM','8:30 PM','8:45 PM','9:00 PM','9:15 PM','9:30 PM','9:45 PM','10:00 PM','10:15 PM','10:30 PM','10:45 PM','11:00 PM','11:15 PM','11:30 PM','11:45 PM',],timeOptions30mins:['9:00 AM','9:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM','12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM','3:00 PM','3:30 PM','4:00 PM','4:30 PM','5:00 PM','5:30 PM','6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM','8:30 PM','9:00 PM','9:30 PM','10:00 PM','10:30 PM','11:00 PM','11:30 PM','12:00 AM','12:30 AM','1:00 AM','1:30 AM','2:00 AM','2:30 AM','3:00 AM','3:30 AM','4:00 AM','4:30 AM','5:00 AM','5:30 AM','6:00 AM','6:30 AM','7:00 AM','7:30 AM','8:00 AM','8:30 AM'],timeOptions60mins:['9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM','10:00 PM','11:00 PM','12:00 AM','1:00 AM','2:00 AM','3:00 AM','4:00 AM','5:00 AM','6:00 AM','7:00 AM','8:00 AM'],beforeUnloadWarning:'If you continue you will lose all the changes you have made.'};