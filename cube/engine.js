(function(root){
'use strict';
const moves={U:[1,1,-1],D:[1,-1,1],L:[0,-1,1],R:[0,1,-1],F:[2,1,-1],B:[2,-1,1],M:[0,0,1],E:[1,0,1],S:[2,0,-1]};
const colors=['#db7751','#e4ad54','#f4eed9','#e4cc65','#80a692','#759cb1'];
function rotate(v,axis,a){const c=Math.cos(a),s=Math.sin(a),r=v.slice(),i=(axis+1)%3,j=(axis+2)%3;r[i]=v[i]*c-v[j]*s;r[j]=v[i]*s+v[j]*c;return r}
class Cube{constructor(){this.reset()}reset(){this.cubies=[];for(let x=-1;x<=1;x++)for(let y=-1;y<=1;y++)for(let z=-1;z<=1;z++){const p=[x,y,z],stickers=[];for(let a=0;a<3;a++)if(p[a]){let n=[0,0,0];n[a]=p[a];stickers.push({n,color:colors[a*2+(p[a]<0?1:0)]})}this.cubies.push({p,stickers})}}turn(axis,layer,dir){for(const c of this.cubies)if(c.p[axis]===layer){c.p=rotate(c.p,axis,dir*Math.PI/2).map(Math.round);for(const s of c.stickers)s.n=rotate(s.n,axis,dir*Math.PI/2).map(Math.round)}}solved(){const faces={};for(const c of this.cubies)for(const s of c.stickers){const key=s.n.join(',');if(faces[key]&&faces[key]!==s.color)return false;faces[key]=s.color}return true}signature(){return JSON.stringify(this.cubies)}}
const api={Cube,moves,rotate};if(typeof module!=='undefined')module.exports=api;else root.CubeEngine=api;
})(typeof window==='undefined'?globalThis:window);
