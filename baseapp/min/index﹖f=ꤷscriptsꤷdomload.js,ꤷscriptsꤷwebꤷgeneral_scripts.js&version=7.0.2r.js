if(typeof btDomLoaded!='function'){if(typeof DOMAssistant==='undefined'){DOMAssistant={};}
DOMAssistant.DOMLoad=function(){var DOMLoaded=false,DOMLoadTimer=null,functionsToCall=[],addedStrings={},errorHandling=null,execFunctions=function(){for(var i=0,il=functionsToCall.length;i<il;i++){try{functionsToCall[i]();}
catch(e){if(errorHandling&&typeof errorHandling==="function"){errorHandling(e);}}}
functionsToCall=[];},DOMHasLoaded=function(){if(DOMLoaded){return;}
DOMLoaded=true;execFunctions();};/*@cc_on
        @if (@_win32 || @_win64)
            document.write("<script id=\"ieScriptLoad\" defer src=\"//:\"><\/script>");
            document.getElementById("ieScriptLoad").onreadystatechange = function() {
                if (this.readyState === "complete") {
                    DOMHasLoaded();
                }
            };
        @end @*/if(document.addEventListener){document.addEventListener("DOMContentLoaded",DOMHasLoaded,false);}
if(/KHTML|WebKit|iCab/i.test(navigator.userAgent)){DOMLoadTimer=setInterval(function(){if(/loaded|complete/i.test(document.readyState)){DOMHasLoaded();clearInterval(DOMLoadTimer);}},10);}
if(!window.onload){window.onload=DOMHasLoaded;}
return{DOMReady:function(){for(var i=0,il=arguments.length,funcRef;i<il;i++){funcRef=arguments[i];if(!funcRef.DOMReady&&!addedStrings[funcRef]){if(typeof funcRef==="string"){addedStrings[funcRef]=true;funcRef=new Function(funcRef);}
funcRef.DOMReady=true;functionsToCall.push(funcRef);}}
if(DOMLoaded){execFunctions();}},setErrorHandling:function(funcRef){errorHandling=funcRef;}};}();}
DOMAssistant.DOMReady=DOMAssistant.DOMLoad.DOMReady;btDomLoaded=DOMAssistant.DOMReady;;function popWin(page,message)
{if(confirm(message)){location.href=page;}}
function delete_cookie(cookie_name)
{var kill_time=new Date("November 30, 1975");var kill_string="client_name="+cookie_name+";expires="+kill_time.toGMTString();document.cookie=kill_string;}
function printit()
{if(window.print){window.print();}
else
{var WebBrowser='<OBJECT ID="WebBrowser1" WIDTH=0 HEIGHT=0 CLASSID="CLSID:8856F961-340A-11D0-A96B-00C04FD705A2"></OBJECT>';document.body.insertAdjacentHTML('beforeEnd',WebBrowser);WebBrowser1.ExecWB(6,2);}}
function trim(s)
{if(typeof s!="string"){return s;}
else
{while((s.substring(0,1)==' ')||(s.substring(0,1)=='\n')||(s.substring(0,1)=='\r')){s=s.substring(1,s.length);}
while((s.substring(s.length-1,s.length)==' ')||(s.substring(s.length-1,s.length)=='\n')||(s.substring(s.length-1,s.length)=='\r')){s=s.substring(0,s.length-1);}
return s;}}
function addslashes(str){str=str.replace(/\'/g,'\\\'');str=str.replace(/\"/g,'\\"');str=str.replace(/\\/g,'\\\\');str=str.replace(/\0/g,'\\0');return str;}
closetime=0;function Start(url,width,height){windowprops="left=50,top=50,width="+width+",height="+height;preview=window.open(url,"preview",windowprops);if(closetime)setTimeout("preview.close();",closetime*1000);}
function doPopup(url,width,height,delay){url1=url;width1=width;height1=height;timer=setTimeout("Start(url1, width1, height1)",delay*1000);}
function getDaysExpiry(noDays){var today=new Date();var expr=new Date(today.getTime()+noDays*24*60*60*1000);return expr.toGMTString();}
function getHoursExpiry(noHours){var today=new Date();var expr=new Date(today.getTime()+noHours*60*60*1000);return expr.toGMTString();}
function wwwPathToDomainName(www_path){var pattern1=/\bhttp:\/\//ig;var pattern2=/\bwww\./ig;var pattern3=/\bmembers\./ig;siteDomainA=www_path.replace(pattern1,"");siteDomainB=siteDomainA.replace(pattern2,"");siteDomain=siteDomainB.replace(pattern2,"");return siteDomain;}
function readPopupCookie(siteID,url,width,height,delay,num_hours,www_path){var siteDomain=wwwPathToDomainName(www_path);var smShownPop='smShownPop'+siteID;var smSubscribed='smSubscribed'+siteID;var smShownPopC=document.cookie.indexOf(smShownPop);var smSubscribedC=document.cookie.indexOf(smSubscribed);if(smShownPopC==-1&&smSubscribedC==-1){doPopup(url,width,height,delay);document.cookie=smShownPop+"=shown; path=/; domain="+siteDomain+"; expires="+getHoursExpiry(num_hours);}}
function subscribed(siteID,num_days,www_path){var siteDomain=wwwPathToDomainName(www_path);var smSubscribed='smSubscribed'+siteID;document.cookie=smSubscribed+"=subscribed; path=/; domain="+siteDomain+"; expires="+getDaysExpiry(num_days);}
function MM_preloadImages(){var d=document;if(d.images){if(!d.MM_p)d.MM_p=new Array();var i,j=d.MM_p.length,a=MM_preloadImages.arguments;for(i=0;i<a.length;i++)
if(a[i].indexOf("#")!=0){d.MM_p[j]=new Image;d.MM_p[j++].src=a[i];}}}
function MM_swapImgRestore(){var i,x,a=document.MM_sr;for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++)x.src=x.oSrc;}
function MM_findObj(n,d){var p,i,x;if(!d)d=document;if((p=n.indexOf("?"))>0&&parent.frames.length){d=parent.frames[n.substring(p+1)].document;n=n.substring(0,p);}
if(!(x=d[n])&&d.all)x=d.all[n];for(i=0;!x&&i<d.forms.length;i++)x=d.forms[i][n];for(i=0;!x&&d.layers&&i<d.layers.length;i++)x=MM_findObj(n,d.layers[i].document);if(!x&&d.getElementById)x=d.getElementById(n);return x;}
function MM_swapImage(){var i,j=0,x,a=MM_swapImage.arguments;document.MM_sr=new Array;for(i=0;i<(a.length-2);i+=3)
if((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x;if(!x.oSrc)x.oSrc=x.src;x.src=a[i+2];}}
function MM_showHideLayers(){var i,p,v,obj,args=MM_showHideLayers.arguments;for(i=0;i<(args.length-2);i+=3)if((obj=MM_findObj(args[i]))!=null){v=args[i+2];if(obj.style){obj=obj.style;v=(v=='show')?'visible':(v=='hide')?'hidden':v;}
obj.visibility=v;}}
function searchItems(elementId){if(typeof elementId==='undefined'||!elementId){elementId='searchTerms';}
var items=document.getElementById(elementId).value;if(items!="")
{location.href='index.php?process=actions/search.php&terms='+items;}}
function print_this_page()
{var loc=document.location.href;var length=loc.search('#');if(length<0)length=loc.length;var loc=loc.substring(0,length);var and=(loc.search(/\?/)!=-1)?'&':'?';var loc=loc+and+'printpage=1';MM_openBrWindow(loc,'','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=622');}
function focusName(element){if(element.value==" name..."){element.value="";}}
function blurName(element){if(element.value==""){element.value=" name...";}}
function focusFirstName(element){if(element.value==" first name..."){element.value="";}}
function blurFirstName(element){if(element.value==""){element.value=" first name...";}}
function focusYourName(element){if(element.value==" your name"){element.value="";}}
function blurYourName(element){if(element.value==""){element.value=" your name";}}
function focusEmail(element){if(element.value==" email..."){element.value="";}}
function blurEmail(element){if(element.value==""){element.value=" email...";}}
function focusSurname(element){if(element.value==" surname..."){element.value="";}}
function blurSurname(element){if(element.value==""){element.value=" surname...";}}
function focusConfirmEmail(element){if(element.value==" confirm email..."){element.value="";}}
function blurConfirmEmail(element){if(element.value==""){element.value=" confirm email...";}}
function focusYourEmail(element){if(element.value==" your email"){element.value="";}}
function blurYourEmail(element){if(element.value==""){element.value=" your email";}}
function focusKeyword(element){if(element.value==" keyword..."){element.value="";}}
function blurKeyword(element){if(element.value==""){element.value=" keyword...";}}
function focusUsername(element){if(element.value=="username"){element.value="";}}
function blurUsername(element){if(element.value==""){element.value="username";}}
function focusPassword(element){if(element.value=="password"){element.value="";}}
function blurPassword(element){if(element.value==""){element.value="password";}}
function focusThis(element,text){if(element.value==text){element.value="";}}
function blurThis(element,text){if(element.value==""){element.value=text;}}
function MM_openBrWindow(theURL,winName,features){window.open(theURL,winName,features);}
function bookmark(url,description)
{_d=document;operaMsg="Please press CTRL+T to bookmark this site.";otherMsg="Please press CTRL+D to bookmark this site.";ie4=(!_d.getElementById&&_d.all)?true:false;ieNewer=(navigator.appVersion.indexOf("MSIE")!=-1)?true:false;opra=(navigator.userAgent.indexOf("Opera")!=-1)?true:false;if(ie4||ieNewer){window.external.AddFavorite(url,description);}
else if(opra){alert(operaMsg);}
else{alert(otherMsg);}}
function openTellAFriend(user,id){if(typeof user!='undefined')
{MM_openBrWindow('index.php?process=views/tellAFriend.php&popup=true&&pageId='+id,'Tell_A_Friend','width=374,height=679');}else
{refer=document.location;tell_about=document.title;openTellAFriend_v2(refer,tell_about);}}
function openTellAFriend_v2(refer_page,tell_about,include_message){if(typeof(refer_page)=="undefined")refer_page="";if(typeof(tell_about)=="undefined")tell_about="";if(typeof(include_message)=="undefined")include_message="";MM_openBrWindow('index.php?process=views/tellAFriend.php&popup=true&refer_page='+escape(refer_page)+"&tell_about="+escape(tell_about)+"&include_message="+escape(include_message),'Tell_A_Friend','width=374,height=679');}
function ValidateForm()
{if(!(document.theForm.firstname.value)){alert("Please enter your First Name.");return false;}
if(!isValidEmail(document.theForm.emailadd.value)){alert("Please enter a VALID Email Address");return false;}
return true;}
function loadImages(){if(!document.getElementById('hidepage'))return;if(document.getElementById){document.getElementById('hidepage').style.visibility='hidden';}else{if(document.layers){document.hidepage.visibility='hidden';}else{document.all.hidepage.style.visibility='hidden';}}}
function highlight(obj){addStyleClass(obj,'highlight');}
function lowlight(obj){removeStyleClass(obj,'highlight');}
function addStyleClass(obj,cname){if(obj.className.indexOf(cname)<0)
obj.className+=" "+cname;return obj;}
function removeStyleClass(obj,cname){var cnameregex=new RegExp(cname,'gi');if(obj!=null)
obj.className=obj.className.replace(cnameregex,"");return obj;}
function extractDomainName(url){if(typeof url!=='string'){return null;}
url=url.replace(/^(.*)\:\/\//,'');if(url.indexOf("/")>=0){url=url.replace(/\/.*/,'');}
if(url.indexOf("?")>=0){url=url.replace(/\?.*/,'');}
if(url.indexOf("#")>=0){url=url.replace(/#.*/,'');}
return url;}
function URLDecode(psEncodeString){var lsRegExp=/\+/g;return unescape(String(psEncodeString).replace(lsRegExp," "));}
function getQueryVariable(variable){var query=window.location.search.substring(1);var vars=query.split("&");for(var i=0;i<vars.length;i++){var pair=vars[i].split("=");if(pair[0]==variable){return URLDecode(pair[1]);}}
return false;}
function is_int(sText){var ValidChars="0123456789";var IsNumber=true;var Char;for(i=0;i<sText.length&&IsNumber==true;i++)
if(ValidChars.indexOf(sText.charAt(i))==-1)
IsNumber=false;return IsNumber;}
function is_array(v){return(v.constructor.toString().indexOf("Array")>=0)}
function is_object(v){return(typeof(v)=="object");}
function urlencode(str){str=escape(str);str=str.replace('+','%2B');str=str.replace('%20','+');str=str.replace('*','%2A');str=str.replace('/','%2F');str=str.replace('@','%40');str=str.replace('&','%26');str=str.replace('=','%3D');return str;}
function urldecode(str){str=str.replace('+',' ');str=unescape(str);return str;}
function http_build_query(formdata,numeric_prefix,key){var numeric_prefix=(typeof(numeric_prefix)=="undefined")?null:numeric_prefix;var key=(typeof(key)=="undefined")?null:key;var res=new Array();for(var k in formdata){var v=formdata[k];if(typeof(v)=='function')continue;var tmp_key=encodeURI(is_int(k)?new Number(numeric_prefix)+new Number(k):k);if(key)tmp_key=key+'['+tmp_key+']';add_to_res=((is_array(v)||is_object(v))?http_build_query(v,key,tmp_key):tmp_key+"="+escape(v));res.push(add_to_res);}
separator='&';return res.join(separator);}
function get_checked_radioObj_value(radioObj){if(!radioObj)
return"";var radioLength=radioObj.length;if(radioLength==undefined)
if(radioObj.checked)
return radioObj.value;else
return"";for(var i=0;i<radioLength;i++){if(radioObj[i].checked){return radioObj[i].value;}}
return"";}
function text_select_change(show_select,select_field,text_field,change_butt){if(show_select){select_field.style.display='';text_field.style.display='none';change_butt.style.display='none';select_field.disabled=false;text_field.disabled=true;}else{select_field.style.display='none';text_field.style.display='';change_butt.style.display='';select_field.disabled=true;text_field.disabled=false;}}
in_array=function(arr,obj){var len=arr.length;for(var x=0;x<=len;x++){if(arr[x]==obj)return true;}
return false;}
Number.numberFormat=function(number,decimals,dec_point,thousands_sep)
{var n=number,prec=decimals;var toFixedFix=function(n,prec){var k=Math.pow(10,prec);return(Math.round(n*k)/k).toString();};n=!isFinite(+n)?0:+n;prec=!isFinite(+prec)?0:Math.abs(prec);var sep=(typeof thousands_sep==='undefined')?',':thousands_sep;var dec=(typeof dec_point==='undefined')?'.':dec_point;var s=(prec>0)?toFixedFix(n,prec):toFixedFix(Math.round(n),prec);var abs=toFixedFix(Math.abs(n),prec);var _,i;if(abs>=1000){_=abs.split(/\D/);i=_[0].length%3||3;_[0]=s.slice(0,i+(n<0))+
_[0].slice(i).replace(/(\d{3})/g,sep+'$1');s=_.join(dec);}else{s=s.replace('.',dec);}
var decPos=s.indexOf(dec);if(prec>=1&&decPos!==-1&&(s.length-decPos-1)<prec){s+=new Array(prec-(s.length-decPos-1)).join(0)+'0';}
else if(prec>=1&&decPos===-1){s+=dec+new Array(prec).join(0)+'0';}
return s;};TOOLBOX=(typeof TOOLBOX!=='undefined')?TOOLBOX:{};TOOLBOX.use=function()
{var args=Array.prototype.slice.call(arguments);var resources=args.slice(0,args.length-1)
var callback=args[args.length-1];var loaded=0;var TOLOAD=resources.length;var ERROR={callback:'The last argument must be a callabck function to be invoked once the resources listed have been loaded',unavailableName:'The resource name has not been registered with this function',noNameOrSource:'Please include either a name or a source property with your resource object',noNamewithVersion:'Please include a name of the resource with your version number',dependenciesNotArray:'The dependencies property must be an array of source strings',includesNotArray:'The includes property must be an array of source strings'};var MAP={'jquery':{defaultVersion:'1.9.1',version:{'1.6.2':{src:['/baseapp/scripts/jquery/1.6.2/jquery.min.js'],dependencies:[],includes:[]},'1.9.1':{src:['/baseapp/scripts/libs/jquery/1.9.1/jquery.min.js'],dependencies:[],includes:[]}},},'bootstrap':{defaultVersion:'3.3.5',version:{'3.3.5':{src:['baseapp/scripts/libs/bootstrap/js/bootstrap.js'],dependencies:['/baseapp/scripts/libs/jquery/1.9.1/jquery.min.js'],includes:['/baseapp/scripts/libs/bootstrap/css/bootstrap.css']}}}}
for(var i=0,l=resources.length;i<l;i++){var resource=normaliseResource(resources[i]);if(!isLoaded(resource.src))loadResource(resource);}
function normaliseResource(resource){var normResource;if(typeof resource==='string'){if(MAP[resource])normResource=MAP[resource]['version'][MAP[resource]['defaultVersion']];else throw new Error(ERROR.unavailableName);}
else{if(typeof resource.name==='undefined'&&typeof resource.src==='undefined')
throw new Error(ERROR.noNameOrSource);if(typeof resource.version!=='undefined'){if(typeof resource.name==='undefined')throw new Error(ERROR.noNameWithVersion);else normResource=MAP[resource.name]['version'][resource.version];}
else{if(typeof resource.name!=='undefined'){normResource=MAP[resource.name]['version'][MAP[resource.name]['defaultVersion']];}}}
var overWritable=['src','dependencies','includes'];for(var i=0,l=overWritable.length;i<l;i++){var prop=overWritable[i];if(typeof resource[prop]!=='undefined'){normResource[prop]=resource[prop];}}
return normResource;}
function isLoaded(src){var headElements=(document.head)?document.head.childNodes:document.getElementsByTagName('head')[0].childNodes;var accept={LINK:true,SCRIPT:true};for(var i=0,l=headElements.length;i<l;i++){if(!accept[headElements[i].tagName])continue;if(typeof headElements[i].href!=='undefined'){if(headElements[i].href.indexOf(src)!==-1){return true;}}
else if(typeof headElements[i].src!=='undefined'&&headElements[i].src.length){if(headElements[i].src.indexOf(src)!==-1){return true;}}}
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
return s;}};