/*
args:
{
    title:'温馨提示',
    content:'是否在页面添加蓝色div',
    confirmfn:function(){
        var blue=document.createElement('div');
        blue.style.backgroundColor="blue";
        blue.style.width="300px";
        blue.style.height="300px";
        body.appendChild(blue);
    }
    cancelfn:function(){

    }
}
*/

function zAlert(args){  //传对象
    var zhezhao=document.createElement('div');
            zhezhao.className="zhezhao";
            zhezhao.innerHTML=`
            <div class="alert">
            <div class="header">
                <span class="title">`+args.title+`</span>
                <span class="close">x</span>
            </div>
            <div class="main">`+args.content+`</div>
            <div class="btnlist">
                <div class="btn" id="btn1">确认</div>
                <div class="btn" id="btn2">取消</div>
            </div>
        </div>
            `
            var body=document.querySelector('body');
            body.appendChild(zhezhao)
            //关闭
            var closediv=document.querySelector(".close")
            closediv.onclick=function(){
                body.removeChild(zhezhao);
            }
            var confirmdiv=document.querySelector("#btn1")
            confirmdiv.onclick=function(){
                args.confirmfn()
                body.removeChild(zhezhao);
            }
            var canceldiv=document.querySelector("#btn2")
            canceldiv.onclick=function(){
                typeof args.cancelfn == 'function'?args.cancelfn():null;
                body.removeChild(zhezhao);
            }
}