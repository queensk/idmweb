var s_img=document.getElementById("support_img");
var menu_block=document.getElementById("support_menu_block");
var wrapper=null;
var on_menu=0;
var timeID=0;
if(s_img){
    s_img.onmouseover=function(){showMenu();on_menu=1};
    s_img.onmouseout=function(){imgOut();on_menu=0};
}
if(menu_block){
    menu_block.onmouseover=function(){showMenu();on_menu=1};
    menu_block.onmouseout=function(){imgOut();on_menu=0};
}
function imgOut(){
    timeID=setTimeout('imgTimeOut()',500);
}
function imgTimeOut(){
    if(on_menu==0){
        hideMenu();
        clearTimeout(timeID);
    }
}
function showMenu(){
    on_menu=0;
    menu_block.style.display="block";
}
function hideMenu(){
    on_menu=1;
    menu_block.style.display="none";
}