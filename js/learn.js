/*
 * learning javascript js
 * 
**/


/*
<pre id="prebox" class="prettyprint linenums"></pre>

<h3>对此你有什么看法：</h3>
<div id="uyan_frame"></div>

<script src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
<script>window.jQuery || document.write('<script src="../js/jquery-1.8.3.min.js"><\/script>')</script>
<script src="../js/google-code-prettify/prettify.js"></script> 

<script type="text/javascript">
$(function(){
    // 获取js代码，写入pre标签，供展示使用
    document.getElementById("prebox").innerHTML = document.getElementById("precode").innerHTML.replace(/(^\s*)/g, "");
    // make code pretty
    window.prettyPrint && prettyPrint()
})

var uyan_config = {
    'title':'前端开发框架 #pandora#', 
    'du':'pandoraui.com'
};
</script>
<script type="text/javascript" id="UYScript" src="http://v1.uyan.cc/js/iframe.js?UYUserId=0" async=""></script>

<script src="../js/learn.js" async="async"></script>
async 脚本相对于页面的其余部分异步地执行 （详见：http://www.w3school.com.cn/html5/att_script_async.asp）
*/


    // 过滤字符串左侧字符 .replace(/(^\s*)/g, "");
    // 过滤字符串右侧字符 .replace(/(\s*$)/g, "");
    // 过滤字符串左右两侧字符 .replace(/(^\s*)|(\s*$)/g, "");
    // 过滤字符串中所有的字符
    
    /*
    function ignoreSpaces(string) {
        var temp = "";
        string = '' + string;
        splitstring = string.split(" ");
        for(i = 0; i < splitstring.length; i++)
            temp += splitstring[i];
        return temp;
    }
    */

var uyan_config = {
    'title':'前端开发框架 #pandora#', 
    'du':'pandoraui.com'
};
    
function loadjs(){
    var bodybox = document.getElementsByTagName("body")[0];
    
    // 创建 pre代码显示区
    var prebox = document.createElement("pre");
    prebox.id="prebox";
    prebox.className="prettyprint linenums";
    var procode = document.getElementsByTagName("script")[0];
    prebox.innerHTML = procode.innerHTML.replace(/(^\s*)/g, "");
    bodybox.appendChild(prebox);
    
    // copy 代码显示
    //document.getElementById("prebox").innerHTML = document.getElementById("precode").innerHTML.replace(/(^\s*)/g, "");
    
    // 加载 jQuery
    var elt = document.createElement("script");
    elt.src="http://code.jquery.com/jquery-1.8.3.min.js";
    bodybox.appendChild(elt);
    
      // 加载 友言
    var appenduyan = document.createElement("div");
    appenduyan.id="uyan_frame";
    bodybox.appendChild(appenduyan);
    
    
    var elt1 = document.createElement("script");
    elt1.src="http://v1.uyan.cc/js/iframe.js?UYUserId=0";
    elt1.id="UYScript";
    elt1.async="";
    bodybox.appendChild(elt1);
    
    // 加载 代码高亮
    //var elt2 = document.createElement("script");
    //elt2.src="http://localhost/pandoraui/learning-javascript/js/google-code-prettify/prettify.js";
    //document.getElementsByTagName("body")[0].appendChild(elt2);
}
loadjs();




// make code pretty
window.prettyPrint && prettyPrint()
