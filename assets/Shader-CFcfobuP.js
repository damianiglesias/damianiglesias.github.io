import{a as F,j as B}from"./motion-CNnaKvaz.js";import{i as I}from"./index-CMUjtK8j.js";import"./react-DFs3xO0M.js";import"./lenis-BXjoyVLH.js";const M="attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}",z=`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 u_res; uniform float u_t; uniform vec2 u_m; uniform vec3 u_a; uniform vec3 u_b; uniform vec3 u_c;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
void main(){
  vec2 uv=gl_FragCoord.xy/u_res; float asp=u_res.x/u_res.y;
  vec2 p=vec2(uv.x*asp,uv.y), m=vec2(u_m.x*asp,u_m.y);
  vec2 d=p-m; float r=length(d);
  p+=normalize(d+1e-4)*exp(-r*r*9.)*.14;
  float t=u_t*.12;
  vec2 q=p*1.6;
  q+=vec2(sin(q.y*1.7+t*2.),cos(q.x*1.3-t*1.6))*.5;
  float v=(sin(q.x*2.2+t)*.5+.5 + sin(q.y*2.7-t*1.3+q.x)*.5+.5)*.5;
  vec3 col=mix(u_a,u_b,smoothstep(.15,.85,v));
  col=mix(col,u_c,smoothstep(.55,1.,v)*.6);
  col+=(hash(gl_FragCoord.xy+fract(u_t))-.5)*.035;
  gl_FragColor=vec4(col,1.);
}`;function k(){const h=F.useRef(null),p=I();return F.useEffect(()=>{const o=h.current,c=o.parentElement,e=o.getContext("webgl",{antialias:!1,alpha:!1});if(!e)return;const u=!p,_=(t,a)=>{const d=e.createShader(t);return e.shaderSource(d,a),e.compileShader(d),d},r=e.createProgram();e.attachShader(r,_(e.VERTEX_SHADER,M)),e.attachShader(r,_(e.FRAGMENT_SHADER,z)),e.linkProgram(r),e.useProgram(r),e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);const g=e.getAttribLocation(r,"p");e.enableVertexAttribArray(g),e.vertexAttribPointer(g,2,e.FLOAT,!1,0,0);const n=t=>e.getUniformLocation(r,t),S=n("u_res"),w=n("u_t"),q=n("u_m"),L=n("u_a"),C=n("u_b"),P=n("u_c"),T={dark:[[.039,.039,.039],[.09,.09,.1],[.17,.17,.19]],light:[[.98,.98,.98],[.925,.925,.94],[.85,.85,.88]]},x=()=>{const t=T[document.documentElement.dataset.theme==="light"?"light":"dark"];e.uniform3fv(L,t[0]),e.uniform3fv(C,t[1]),e.uniform3fv(P,t[2])},i={x:.5,y:.5},s={x:.5,y:.5},m=performance.now();let A=!0,l;const f=()=>{const t=Math.min(devicePixelRatio||1,1.5);o.width=o.clientWidth*t,o.height=o.clientHeight*t,e.viewport(0,0,o.width,o.height),e.uniform2f(S,o.width,o.height),u&&v(m+8e3)},v=t=>{i.x+=(s.x-i.x)*.06,i.y+=(s.y-i.y)*.06,e.uniform1f(w,(t-m)/1e3),e.uniform2f(q,i.x,i.y),e.drawArrays(e.TRIANGLES,0,3)},E=t=>{A&&v(t),l=requestAnimationFrame(E)},R=t=>{const a=o.getBoundingClientRect();s.x=(t.clientX-a.left)/a.width,s.y=1-(t.clientY-a.top)/a.height},b=new MutationObserver(()=>{x(),u&&v(m+8e3)});b.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});const y=new IntersectionObserver(t=>{A=t[0].isIntersecting});return y.observe(c),x(),f(),addEventListener("resize",f),u||(c.addEventListener("pointermove",R),l=requestAnimationFrame(E)),()=>{cancelAnimationFrame(l),b.disconnect(),y.disconnect(),removeEventListener("resize",f),c.removeEventListener("pointermove",R)}},[p]),B.jsx("canvas",{ref:h,"aria-hidden":"true",className:"absolute inset-0 size-full"})}export{k as default};
