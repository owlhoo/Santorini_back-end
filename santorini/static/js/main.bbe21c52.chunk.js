(this.webpackJsonphuai=this.webpackJsonphuai||[]).push([[0],{20:function(e,t,s){e.exports=s(44)},43:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var r=s(4),a=s(5),i=s(7),n=s(6),l=s(8),u=s(0),c=s.n(u),o=s(2),h=s.n(o),d=s(9),v=s(3),f=s.n(v);var p=function(e){return!0===e.glowing?c.a.createElement("button",{className:"square glowing",onClick:e.onClick},c.a.createElement("img",{src:e.src,alt:"Polje",width:"100%",height:"100%"})):c.a.createElement("button",{className:"square",onClick:e.onClick},c.a.createElement("img",{src:e.src,alt:"Polje",width:"100%",height:"100%"}))};f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var m=function(e){function t(e){var s;return Object(r.a)(this,t),(s=Object(i.a)(this,Object(n.a)(t).call(this,e))).state={cells:Array(25).fill(0),firstHE:-1,secondHE:-1,firstJU:-1,secondJU:-1,availableMovesOrBuilds:[],humanNext:!0},s.humanPlayer=e.human,s.chooseMove=!1,s.moving=!1,s.building=!1,s.buildersSetUp=0,s.lastClickedId=-1,s.upperBoundCellValue=12,s.lowerBoundCellValue=9,s}return Object(l.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this,t=this.state.cells.map((function(t){return e.getImageSourceCell(t)}));return c.a.createElement("div",{className:"board"},c.a.createElement("div",{className:"board-row"},this.renderSquare(t[0],0),this.renderSquare(t[1],1),this.renderSquare(t[2],2),this.renderSquare(t[3],3),this.renderSquare(t[4],4)),c.a.createElement("div",{className:"board-row"},this.renderSquare(t[5],5),this.renderSquare(t[6],6),this.renderSquare(t[7],7),this.renderSquare(t[8],8),this.renderSquare(t[9],9)),c.a.createElement("div",{className:"board-row"},this.renderSquare(t[10],10),this.renderSquare(t[11],11),this.renderSquare(t[12],12),this.renderSquare(t[13],13),this.renderSquare(t[14],14)),c.a.createElement("div",{className:"board-row"},this.renderSquare(t[15],15),this.renderSquare(t[16],16),this.renderSquare(t[17],17),this.renderSquare(t[18],18),this.renderSquare(t[19],19)),c.a.createElement("div",{className:"board-row"},this.renderSquare(t[20],20),this.renderSquare(t[21],21),this.renderSquare(t[22],22),this.renderSquare(t[23],23),this.renderSquare(t[24],24)))}},{key:"renderSquare",value:function(e,t){var s,r=this,a=null!=(null===(s=this.state.availableMovesOrBuilds)||void 0===s?void 0:s.find((function(e){return e===t})));return c.a.createElement(p,{src:"/static/images/".concat(e),onClick:function(){return r.clickHandle(t)},glowing:a})}},{key:"getImageSourceCell",value:function(e){switch(e){case 0:return"lvl_0.jpg";case 1:return"lvl_1.png";case 2:return"lvl_2.png";case 3:return"lvl_3.png";case 4:return"lvl_4.png";case 5:return"hercules.png";case 6:return"lvl_1_HE.png";case 7:return"lvl_2_HE.png";case 8:return"lvl_3_HE.png";case 9:return"jupiter.png";case 10:return"lvl_1_JU.png";case 11:return"lvl_2_JU.png";case 12:return"lvl_3_JU.png";default:return""}}},{key:"clickHandle",value:function(e){var t=this;if(!0===this.state.humanNext){if(this.buildersSetUp<2)return this.setUpBuilders(e),void(2===this.buildersSetUp&&this.setUpAIBuilders());if(this.lowerBoundCellValue<=this.state.cells[e]&&this.state.cells[e]<=this.upperBoundCellValue&&(!1===this.moving&&!1===this.building&&e!==this.lastClickedId&&-1===this.lastClickedId?(this.lastClickedId=e,this.chooseMove=!0):e===this.lastClickedId&&!1===this.building&&(this.chooseMove=!1,this.moving=!1,this.lastClickedId=-1,this.setState({availableMovesOrBuilds:null}))),!0===this.chooseMove&&(this.lastClickedId===e?this.setupAvailableMoves(e,"http://127.0.0.1:8000/getAvailableMoves/"):(this.chooseMove=!1,this.moving=!0)),!0===this.moving&&null!=this.state.availableMovesOrBuilds.find((function(t){return t===e})))return this.moveFigure(this.lastClickedId,e,(function(){return t.setupAvailableMoves(e,"http://127.0.0.1:8000/getAvailableBuilds/")})),this.lastClickedId=-1,this.moving=!1,void(this.building=!0);!0===this.building&&null!=this.state.availableMovesOrBuilds.find((function(t){return t===e}))&&(this.buildBlock(e),this.building=!1,this.setState({availableMovesOrBuilds:null,humanNext:!1},(function(){return t.doMoveAI("http://127.0.0.1:8000/alphaBetaCustom/",4)})))}}},{key:"doMoveAI",value:function(e,t){var s=this;this.getAIMoveFromServer(e,t).then((function(e){var t,r=e.data.id,a=5*e.data.move[0]+e.data.move[1],i=5*e.data.build[0]+e.data.build[1];switch(r){case 1:t=s.state.firstHE;break;case 2:t=s.state.secondHE;break;default:t=null}s.moveFigure(t,a,(function(){return console.log("did my work")})),s.buildBlock(i)}))}},{key:"getAIMoveFromServer",value:function(){var e=Object(d.a)(h.a.mark((function e(t,s){var r,a,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.state.cells.slice().map((function(e){return e>=9?(e+1)%5:e>=5?e%5:e})),a=[{cells:r,firstHE:this.state.firstHE,secondHE:this.state.secondHE,firstJU:this.state.firstJU,secondJU:this.state.secondJU,startPosition:null,depth:s}],e.next=4,f.a.post(t,a).catch((function(e){console.log(e)}));case 4:return i=e.sent,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e,this)})));return function(t,s){return e.apply(this,arguments)}}()},{key:"setUpBuilders",value:function(e){var t=this,s=this.state.cells;s[e]=9,this.setState({cells:s,firstJU:0===this.buildersSetUp?e:this.state.firstJU,secondJU:1===this.buildersSetUp?e:this.state.secondJU},(function(){return 2===++t.buildersSetUp?t.setUpAIBuilders():null}))}},{key:"setUpAIBuilders",value:function(){for(var e=this.state.firstJU,t=this.state.secondJU,s=Array(25).fill(void 0).map((function(e,t){return t})),r=s.length-1;r>=0;r--)s[r]!==e&&s[r]!==t||s.splice(r,1);var a=[6,-6,5,-5,1,-1];e>12&&(a=a.map((function(e){return-e})));for(var i=s[Math.random(25)],n=s[Math.random(25)],l=a.map((function(t){return e+t})),u=0;u<l.length;u++)if(s.includes(l[u])){i=l[u];break}for(var c=(a=a.map((function(e){return-e}))).map((function(e){return i+e})),o=0;o<c.length;o++)if(s.includes(c[o])){n=c[o];break}var h=this.state.cells.slice();h[i]=5,h[n]=5,this.setState({firstHE:i,secondHE:n,cells:h})}},{key:"setupAvailableMoves",value:function(e,t){var s=this;this.getMovesFromServer(e,t).then((function(e){return s.setState({availableMovesOrBuilds:e})}))}},{key:"getMovesFromServer",value:function(){var e=Object(d.a)(h.a.mark((function e(t,s){var r,a,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.state.cells.slice().map((function(e){return e>=9?(e+1)%5:e>=5?e%5:e})),a=[{cells:r,firstHE:this.state.firstHE,secondHE:this.state.secondHE,firstJU:this.state.firstJU,secondJU:this.state.secondJU,startPosition:[Math.floor(t/5),t%5],depth:null}],e.next=4,f.a.post(s,a).catch((function(e){console.log(e)}));case 4:return i=e.sent,e.abrupt("return",i.data.moves.map((function(e){return 5*e[0]+e[1]})));case 6:case"end":return e.stop()}}),e,this)})));return function(t,s){return e.apply(this,arguments)}}()},{key:"buildBlock",value:function(e){var t=this.state.cells.slice();t[e]+=1,this.setState({cells:t,humanNext:!this.state.humanNext})}},{key:"moveFigure",value:function(e,t,s){var r=Math.floor((this.state.cells[e]+1)/5),a=this.state.cells.slice(),i=a[e];a[e]=i>=9?(a[e]+1)%5:a[e]%5,a[t]=i>=9?5*r+a[t]-1:5*r+a[t],this.setState({firstHE:this.state.firstHE===e?t:this.state.firstHE,secondHE:this.state.secondHE===e?t:this.state.secondHE,firstJU:this.state.firstJU===e?t:this.state.firstJU,secondJU:this.state.secondJU===e?t:this.state.secondJU,cells:a},s)}}]),t}(c.a.Component),b=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(n.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return c.a.createElement(m,{human:"JU"})}}]),t}(c.a.Component),g=s(19),S=s.n(g);s(43);S.a.render(c.a.createElement(b,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.bbe21c52.chunk.js.map