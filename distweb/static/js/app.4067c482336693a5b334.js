webpackJsonp([1],{"1l46":function(t,e){},GWCC:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("MVMM"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var h=i("Z0/y")({name:"App"},o,!1,function(t){i("xt7Y")},null,null).exports,r=i("zO6J"),s={name:"vueClock",data:function(){return{clockBoxStyle:{},canvas:{},context:{},timeAngle:{},timeInterval:{},transitionOption:{}}},props:{width:{default:""},height:{default:""},timezone:{default:""},time:{type:Object,default:function(){return{isStatic:!1,timestamp:0}}},border:{type:Object,default:function(){return{type:"circle",width:300,height:300,lineWidth:2,color:"#bbb"}}},background:{type:Object,default:function(){return{color:"",image:""}}},dial:{type:Object,default:function(){return{isDial:!0,distance:0,maxLength:8,minLength:5,maxWidth:3,minWidth:2,color:"#888"}}},number:{type:Object,default:function(){return{isNumber:!0,type:"arabic",color:"#777",fontSize:"19px",fontWeight:"normal",fontFamily:"微软雅黑",radius:125}}},needle:{type:Object,default:function(){return{second:{length:100,color:"#aaa",lineWidth:3,longOut:5},minute:{length:110,color:"#999",lineWidth:4,longOut:5},hour:{length:70,color:"#888",lineWidth:4,longOut:5}}}}},computed:{drawOption:function(){return{time:{isStatic:this.time.isStatic||!1,timestamp:this.time.isStatic},border:{type:this.border.type||"circle",width:this.border.width||300,height:this.border.height||this.border.width||300,color:this.border.color||"#bbb",lineWidth:this.border.lineWidth||2},background:{color:this.background.color||"",image:this.background.image||""},dial:{isDial:this.dial.isDial||!0,distance:this.dial.distance||0,maxLength:this.dial.maxLength||8,minLength:this.dial.minLength||5,maxWidth:this.dial.maxWidth||3,minWidth:this.dial.minWidth||2,color:this.dial.color||"#888"},number:{isNumber:this.number.isNumber||!0,type:this.number.type||"arabic",color:this.number.color||"#777",fontSize:this.number.fontSize||"19px",fontWeight:this.number.fontWeight||"normal",fontFamily:this.number.fontFamily||"微软雅黑",radius:this.number.radius||125},needle:{second:{length:this.needle.second&&this.needle.second.length||100,color:this.needle.second&&this.needle.second.color||"#aaa",lineWidth:this.needle.second&&this.needle.second.lineWidth||3,longOut:this.needle.second&&this.needle.second.longOut||0},minute:{length:this.needle.minute&&this.needle.minute.length||110,color:this.needle.minute&&this.needle.minute.color||"#999",lineWidth:this.needle.minute&&this.needle.minute.lineWidth||4,longOut:this.needle.minute&&this.needle.minute.longOut||0},hour:{length:this.needle.hour&&this.needle.hour.length||70,color:this.needle.hour&&this.needle.hour.color||"#888",lineWidth:this.needle.hour&&this.needle.hour.lineWidth||4,longOut:this.needle.hour&&this.needle.hour.longOut||0}}}}},watch:{drawOption:{handler:function(t){t.time.isStatic&&clearInterval(this.timeInterval),this.draw()},deep:!0},timeAngle:function(){this.draw()}},created:function(){var t=this;this.$nextTick(function(){t.canvas=t.$el.querySelector("canvas"),t.context=t.canvas.getContext("2d"),t.setClockBoxStyle(),t.newData(),t.time.isStatic||(t.timeInterval=setInterval(t.newData,1e3)),t.draw()})},methods:{draw:function(){this.clear(),this.drawBackground(),this.drawBorder(),this.drawDial(),this.drawNumber(),this.drawNeedle()},clear:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.width)},setClockBoxStyle:function(){var t={};""===this.width||/%$/.test(this.width)?t.width=this.width:t.width=Number(this.width)+"px",""===this.height&&(""===this.width||/%$/.test(this.width)?(t.height=this.$el.clientWidth+"px",this.clockBoxStyle=t):t.height=this.width),this.canvas.width=this.$el.clientWidth,this.canvas.height=Number(t.height.split("px")[0])},drawBorder:function(){this.context.save(),this.context.translate(this.canvas.width/2,this.canvas.height/2),this.context.beginPath(),"rectangle"==this.drawOption.border.type?this.context.rect(-this.drawOption.border.width/2,-this.drawOption.border.height/2,this.drawOption.border.width,this.drawOption.border.height):this.context.arc(0,0,this.drawOption.border.width/2,0,2*Math.PI,!0),this.context.closePath(),this.context.strokeStyle=this.drawOption.border.color,this.context.lineWidth=this.drawOption.border.lineWidth,this.context.stroke(),this.context.restore()},drawBackground:function(){var t,e;if(this.context.save(),this.context.beginPath(),this.context.translate(this.canvas.width/2,this.canvas.height/2),"rectangle"==this.drawOption.border.type?(this.context.rect(-this.drawOption.border.width/2,-this.drawOption.border.height/2,this.drawOption.border.width,this.drawOption.border.height),t=-this.drawOption.border.width/2,e=-this.drawOption.border.height/2):(this.context.arc(0,0,this.drawOption.border.width/2,0,2*Math.PI,!0),t=-this.drawOption.border.width/2,e=-this.drawOption.border.width/2),this.drawOption.background.color&&(this.context.fillStyle=this.drawOption.background.color,this.context.fill()),this.drawOption.background.image){var i,n,o,h=new Image;if(this.transitionOption.bgImg)h=this.transitionOption.bgImg;else{var r=this;h.src=this.drawOption.background.image,h.onload=function(){r.$set(r.transitionOption,"bgImg",h)}}h.width>=h.height?(i=(h.width-h.height)/2,n=0,o=h.height):(i=0,n=(h.height-h.width)/2,o=h.width),this.context.clip(),this.context.drawImage(h,i,n,o,o,t,e,2*-t,2*-e)}this.context.closePath(),this.context.restore()},drawDial:function(){if(this.drawOption.dial.isDial){var t=2*Math.PI/60,e=0,i=this.drawOption.dial.distance?this.drawOption.dial.distance+this.drawOption.border.lineWidth/2:this.drawOption.border.lineWidth/2;0==this.drawOption.dial.distance&&(i=this.drawOption.border.lineWidth/2);for(var n={x:0,y:this.drawOption.border.width/2-i},o=0;o<60;o++)e=t*o,this.context.save(),this.context.translate(this.canvas.width/2,this.canvas.height/2),o%5==0?this.line(n,e,this.drawOption.dial.maxLength-n.y,this.drawOption.dial.color,this.drawOption.dial.maxWidth):this.line(n,e,this.drawOption.dial.minLength-n.y,this.drawOption.dial.color,this.drawOption.dial.minWidth),this.context.restore()}},drawNumber:function(){if(this.drawOption.number.isNumber){for(var t=[],e=1;e<13;e++)t[e-1]=e+3,e+3>12&&(t[e-1]=3-(12-e));if("roman"==this.drawOption.number.type)for(var i=0;i<12;i++)t[i]=this.intToRoman(t[i]);var n=Math.PI/6;this.context.save(),this.context.fillStyle=this.drawOption.number.color,this.context.font=this.drawOption.number.fontWeight+" "+this.drawOption.number.fontSize+" "+this.drawOption.number.fontFamily,this.context.textBaseline="middle",this.context.textAlign="center",this.context.translate(this.canvas.width/2,this.canvas.height/2);for(var o=0;o<t.length;o++)this.context.fillText(t[o],this.drawOption.number.radius*Math.cos(n*(o+1)),this.drawOption.number.radius*Math.sin(n*(o+1)));this.context.restore()}},intToRoman:function(t){for(var e=["I","V","X","L","C","D","M"],i=t.toString().split(""),n=0;n<i.length;n++){var o=Number(i[i.length-1-n]);if(i[i.length-1-n]="",o>=5&&o<9){i[i.length-1-n]=e[2*n+1];for(var h=0;h<o-5;h++)i[i.length-1-n]+=e[2*n]}else if(9==o)i[i.length-1-n]=e[2*n]+e[2*n+2];else if(4==o)i[i.length-1-n]=e[2*n]+e[2*n+1];else for(var r=0;r<o;r++)i[i.length-1-n]+=e[2*n]}return i.join("")},drawNeedle:function(){var t=this.timeAngle.hAngle,e=this.timeAngle.mAngle,i=this.timeAngle.sAngle;this.context.save(),this.context.translate(this.canvas.width/2,this.canvas.height/2),this.line({x:0,y:this.drawOption.needle.hour.longOut},t,this.drawOption.needle.hour.length,this.drawOption.needle.hour.color,this.drawOption.needle.hour.lineWidth),this.line({x:0,y:this.drawOption.needle.minute.longOut},e,this.drawOption.needle.minute.length,this.drawOption.needle.minute.color,this.drawOption.needle.minute.lineWidth),this.line({x:0,y:this.drawOption.needle.second.longOut},i,this.drawOption.needle.second.length,this.drawOption.needle.second.color,this.drawOption.needle.second.lineWidth),this.context.restore()},selectTimezone:function(){var t,e=this.drawOption.time.isStatic?new Data(this.drawOption.time.timestamp):new Date,i=e.getTime();t=""===this.timezone?e.getTimezoneOffset()/60:Number(this.timezone);var n=6e4*e.getTimezoneOffset();return new Date(i+n+36e5*t)},newData:function(){var t=this.selectTimezone(),e=t.getHours(),i=t.getMinutes(),n=t.getSeconds(),o=2*Math.PI*(n%60)/60,h=2*Math.PI*(i%60)/60+o/60,r=2*Math.PI*(e%12)/12+h/12;this.timeAngle={sAngle:o,mAngle:h,hAngle:r}},line:function(t,e,i,n,o){this.context.save(),this.context.beginPath(),this.context.rotate(e),this.context.moveTo(t.x,t.y),this.context.lineTo(0,-i),this.context.strokeStyle=n,this.context.lineWidth=o,this.context.stroke(),this.context.restore()}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:this.clockBoxStyle,attrs:{id:"clock"}},[e("canvas")])},staticRenderFns:[]};var d={data:function(){return{border:{},background:{}}},created:function(){this.border={color:"#988"}},components:{Clock:i("Z0/y")(s,a,!1,function(t){i("gHrF")},"data-v-bfc03250",null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"tes_page"}},[e("div",[e("clock",{attrs:{border:this.border,timezone:"8"}})],1)])},staticRenderFns:[]};var c=i("Z0/y")(d,l,!1,function(t){i("1l46")},"data-v-b91d66bc",null).exports,u=i("54/C"),m={components:{myClock:u.vueClock},created:function(){console.log(u.vueClock)}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("vue-clock"),this._v(" "),e("my-clock")],1)},staticRenderFns:[]},p=i("Z0/y")(m,g,!1,null,null,null).exports;n.a.use(r.a);var w=new r.a({routes:[{path:"/",redirect:"/clock"},{path:"/clock",component:c},{path:"/test",component:p}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:w,components:{App:h},template:"<App/>"})},gHrF:function(t,e){},xt7Y:function(t,e){}},["GWCC"]);
//# sourceMappingURL=app.4067c482336693a5b334.js.map