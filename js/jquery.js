var iNow = 0;
var num=0;
var index = 0;
function add(){
  var oInput=$("#input1");
  var oTe = $("#input1").val();
  // alert(oTe);
  function JTrim(oTe)
  {
      return oTe.replace(/(^\s*)|(\s*$)/g, "");
  }
  if (JTrim(oTe) != "" ) {
    tianjia(iNow);
    iNow += 1;
  }

  shuzi();
  var input=$("#allChecked");
  input.checked=false;
// input.style.display="block";
// alert($(".choose").length);
for(var i=0;i<$(".choose").length;i++){
  // alert("1");
  if(!$(".choose")[i].checked){
    // alert($(".allChecked").attr('checked'));
    $(".allChecked")[0].checked=false;
    return;
  }
}
}
function delete1(checkbox){
for(var j=checkbox.length-1;j>=0;j--){
                 if (checkbox[j].checked) {
                      // alert(checkbox.length);
                  var fu=checkbox[j].parentNode;
                  fu.remove();
                 }

}
  // alert($(".choose").length);
if($(".choose").length==0){
  // alert("123");
var input=$("#allChecked");
  var tr1=$("#tr1");
  // alert(tr1);
  tr1.remove();
$("#allChecked").css("display","none");
// $("#allChecked").style.display="none";
  iNow = 0;
}
// iNow = 0;
}

function DoCheck(){
var p1=$(".p1s");
var button4 = $("#button4")
if (index%2 == 0) {
  button4.css("display","block");
}else {
  button4.css("display","none");
}
index += 1;
var ch=$(".choose");
if($(".allChecked")[0].checked)
{
  button4.css("display","block");
  button4.click(function(){
    var checkbox=$(".choose");
    delete1(checkbox);
    button4.css("display","none");
    // var fu=button4.parent();
    // // alert(fu);
    //   fu.css("display","none");
    //   $(".allChecked").css("display","none");
    // alert($(".allChecked").attr("checked"));
    // $(".allChecked").checked=false;
  })
   for(var i=0;i<p1.length;i++)
   {
     p1[i].style.color="#dbd9d9";
     		p1[i].style.textDecoration="line-through";
   }
	for(var i=0;i<ch.length;i++)
	{
		ch[i].checked=true;
    // alert("123");
    // ch[i].attr("checked",true);
	}
}else
{
  for(var i=0;i<ch.length;i++)
  {
	ch[i].checked=false;
  }
  for(var i=0;i<p1.length;i++)
   {
     //alert(p1[i].style.color);
     p1[i].style.color="black";
     p1[i].style.textDecoration="";
    // p1[i].css("color","black");
    // p1[i].css("textDecoration","");
   }
   var fu=button4.parent();
   // alert(fu);
     fu.css("display","block");
}
shuzi();
}
function tianjia(iNow){
  var oSe=$("#search1");
  var odivs=$("#divs");
  var oInput=$("#input1");
  var oTe=$("#input1").val();
  var table = $("<table/>").appendTo($("#divs"));
  var tr= $("<tr/>").appendTo(table);
  var p= $("<p/>").appendTo(tr);
  var input= $("<input/>").appendTo(tr);
  var img= $("<img/>").appendTo(tr);
  table.attr("id","table1");
input.attr("class","choose");
tr.attr("class","tr");
p.attr("class","p1s");
p.attr("id","p1");
input.attr("type","checkbox");
p.css({"padding-left":"50px","padding-top":"16px","cursor":"default"});
//p.style.cssText="padding-left:50px;padding-top:16px;cursor:default";
input.css({"margin-top":"-22px","margin-left":"10px","width":"30px","height":"30px","float":"left","display":"inline-block","position":"absolute"});
  //input.style.cssText="margin-top:-22px;margin-left:10px;width:30px;height:30px;float:left;display:inline-block;position:absolute;";
img.css({"display":"none","margin-right":"20px","margin-top":"-39px","float":"right"});
//img.style.cssText="display:none;margin-right:20px;margin-top:1px;float:right;";
//img.src="images/5.jpg";$("#txt1").append(oTe);
img.attr("src","images/5.jpg");
  // p.html (oTe) ;
  // p.append(oTe);
    p.text(oTe);
  p.css({"padding-left":"50px","padding-top":"16px","cursor":"default"});
  //p.style.cssText="padding-left:50px;padding-top:16px;cursor:default";
tr.attr("id","mytr");
tr.css({"position":"relative","background":"#ffffff","width":"550px","height":"57px","float":"left","font-size":"18px","border-top":"1px solid #ededed","box-shadow":"10px 10px 5px #eaeaea","margin-left":"240px"});
//tr.style.cssText="position:relative;background:#ffffff;width:550px;height:57px;float:left;font-size:18px;border-top:1px solid #ededed;box-shadow:10px 10px 5px #eaeaea;margin-left:240px;";
// odivs.appendChild(tr);
  $(".allChecked").css("display","block");
input.click(function(){
  // alert("123");
if(this.checked){
  var allChecked=$(".allChecked");
var ch=$(".choose");
var button4=$("#button4");
var p1=this.previousSibling;
  p1.style.color="#dbd9d9";
       p1.style.textDecoration="line-through";

button4.css("display","block");
button4.click(function(){
  var checkbox=$(".choose");
  delete1(checkbox);
  button4.css("display","none");
})
var count=0;
for(var i=0;i<ch.length;i++)
{
  if(ch[i].checked){
    count++;
  }
}if(count==ch.length){
$(".allChecked")[0].checked=true;}
}else{
  var p1=this.previousSibling;
  p1.style.color="#4d4d4d";
      p1.style.textDecoration="";
// button4.css("display","none");
  if($(".allChecked")[0].checked){
    $(".allChecked")[0].checked=false;
  }
}
  shuzi();})
tr.mouseover(function(){img.css("display","block");
img.click(function(){
  var tr=this.parentNode;
  tr.remove();
  shuzi();
if($(".choose").length==0){
  tr1.style.display="none";
$(".allChecked")[0].style.display="none";
}
})
})
tr.mouseout(function(){img.css("display","none");})
oSe.css("display","block");
if(oTe!=''){
  // alert(oTe);
oInput.val("");
  // alert(oInput.value);
}
if(iNow==0){
  tianjia1();
}else{
    tr1.style.display="block";
}
p.dblclick(function(){
  var txt = $("<input/>");
txt.attr("type","text");
txt.attr("id","txt1");

    // txt.type = "text";
      // var oTe = $("#input1").val();  p.html (oTe) ;
var old=this.value;
// alert($(".p1").html());
// alert(oTe);
// alert(old);
this.nextSibling.style.marginTop="10px;";
// this.nextSibling.css("margin-top","10px");
txt.css({"width":"430px","height":"30px","margin-top":"-23px","margin-left":"50px","display":"inline-block","position":"absolute","z-index":"5"});
//txt.style.cssText="width:430px;height:30px;margin-top:-23px;margin-left:50px;display:inline-block;position:absolute;autofocus;z-index:5;";
  // txt.value=(oTe);
  // alert(oTe);p.val()
  // alert(p.text());
  txt.attr("value",p.text());
// txt.text("!");
  // alert(txt.text());
  // alert( txt.value);
  // this.parentNode.appendChild(txt);
  // this.parentNode.appendTo(txt);
  var fu=this.parentNode;

  txt.appendTo(fu);
  // alert(txt);
txt.focus();
txt.blur(function(){
  var newinnerHTML=$("#txt1").val();
  // alert(newinnerHTML);
  // p.value=(newinnerHTML);
  //$("#p1").append(newinnerHTML);
    $("#p1").text(newinnerHTML);
    // alert($("#p1").val());
  txt.remove();
})
})

}
function tianjia1(){
      var oCon=$("#content1");
    var tr1= $("<tr/>").appendTo(oCon);
    var p1 = $("<tr/>").appendTo(tr1);
    var button1=$("<button/>").appendTo(tr1);
     var button2=$("<button/>").appendTo(tr1);
      var button3=$("<button/>").appendTo(tr1);
      var button4=$("<button/>").appendTo(tr1);
      button4.attr("id","button4");
      button3.css({"margin-left":"15px","margin-top":"15px","width":"80px","height":"23px","border":"none","background-color":"#ffffff","cursor":"pointer"});
      // button3.style.cssText="margin-left:15px;margin-top:15px;width:80px;height:23px;border:none;background-color:#ffffff;cursor:pointer;";
      button2.css({"margin-left":"15px","margin-top":"15px","width":"52px","height":"23px","border":"none","background-color":"#ffffff","cursor":"pointer"});
      button1.css({"margin-left":"95px","margin-top":"15px","width":"32px","height":"23px","float":"left","cursor":"pointer"});
      button4.css({"display":"none","margin-top":"15px","width":"135px","float":"right","height":"23px","border":"none","background-color":"#ffffff","cursor":"pointer"});

      // button2.style.cssText="margin-left:15px;margin-top:15px;width:52px;height:23px;border:none;background-color:#ffffff;cursor:pointer;";
        //button1.style.cssText="margin-left:95px;margin-top:15px;float:left;width:32px;height:23px;cursor:pointer;";
          //  button4.style.cssText="display:none;margin-top:15px;float:left;width:145px;height:23px;cursor:pointer;border:none;background-color:#ffffff;float:right;";
      button1.html("All");
      // button1.attr("html","All");
      // alert(button1.html);
      button2.html("Active");
      button3.html("Completed");
      button4.html("Clear Completed");
                button2.mouseover = function()
                  {
                         button2.css("border","1px solid #eed4d4");
                   }
                button2.mouseout=function(){
                                 button2.css("border","none"); }
                button3.mouseover = function(){
                              button3.css("border","1px solid #eed4d4");  }
                button3.mouseout=function(){
                                         button3.css("border","none");}
                                         button3.click(function(){
                                           var ch=$(".choose");
                                           for(var i=0;i<ch.length;i++)
                                           {
                                             var fu=ch[i].parentNode;
                                             fu.style.display="block";
                                              if (!ch[i].checked) {
                                               var fu=ch[i].parentNode;
                                          fu.style.display="none";
                                           }
                                           }
                                         })
                                         button1.click(function(){
                                           var ch=$(".choose");
                                           for(var i=0;i<ch.length;i++)
                                           {
                                               var fu=ch[i].parentNode;
                                              fu.style.display="block";
                                           }
                                         })
                                         button2.click(function(){
                                           var ch=$(".choose");
                                           for(var i=0;i<ch.length;i++)
                                           {
                                             var fu=ch[i].parentNode;
                                       fu.style.display="block";
                                              if (ch[i].checked) {
                                               var fu=ch[i].parentNode;
                                           fu.style.display="none";
                                           }
                                           }
                                         })


     p1.attr("id","myp1");
     p1.css({"padding-left":"16px","padding-top":"16px","float":"left","cursor":"default"});
     tr1.css({"background":"#ffffff","width":"550px","height":"57px","float":"left","margin-left":"240px","font-size":"18px","border-top":"1px solid #ededed","box-shadow":"10px 10px 5px #eaeaea"});

    //p1.style.cssText="padding-left:16px;padding-top:16px;float:left;cursor:default";
  //  tr1.style.cssText="background:#ffffff;width:550px;height:57px;float:left;margin-left:240px;font-size:18px;border-top:1px solid #ededed;box-shadow:10px 10px 5px #eaeaea;";
  tr1.attr("id","tr1");
  // alert("123");
  // var fu=button4.parent();
  // // alert(fu);
  //   fu.css("display","block");
  // shuzi();
}
function shuzi(){
var rowsize = $(".choose");
  var p1=$("#myp1");
  num=0;
for(var i=0;i<rowsize.length;i++){
  if(!rowsize[i].checked){
    num+=1;
  }
}

  p1.html(num+" items left");
  // alert(p1.html);
}
