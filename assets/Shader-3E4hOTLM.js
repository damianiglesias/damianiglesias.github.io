import{a as F,j as L}from"./motion-C-G0yZkH.js";import{j as M}from"./index-DLmBQfRr.js";import"./react-CSOMVRTe.js";import"./lenis-BXjoyVLH.js";const O="attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}",G=`
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
}`;function z(){const d=F.useRef(null),h=M();return F.useEffect(()=>{const o=d.current,c=o.parentElement,e=o.getContext("webgl",{antialias:!1,alpha:!1});if(!e)return;const u=!h,p=(t,a)=>{const v=e.createShader(t);return e.shaderSource(v,a),e.compileShader(v),v},r=e.createProgram();e.attachShader(r,p(e.VERTEX_SHADER,O)),e.attachShader(r,p(e.FRAGMENT_SHADER,G)),e.linkProgram(r),e.useProgram(r),e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);const _=e.getAttribLocation(r,"p");e.enableVertexAttribArray(_),e.vertexAttribPointer(_,2,e.FLOAT,!1,0,0);const n=t=>e.getUniformLocation(r,t),S=n("u_res"),w=n("u_t"),q=n("u_m"),C=n("u_a"),P=n("u_b"),T=n("u_c"),B={dark:[[.039,.039,.039],[.09,.09,.1],[.17,.17,.19]],light:[[.98,.98,.98],[.925,.925,.94],[.85,.85,.88]]},g=()=>{const t=B[document.documentElement.dataset.theme==="light"?"light":"dark"];e.uniform3fv(C,t[0]),e.uniform3fv(P,t[1]),e.uniform3fv(T,t[2])},i={x:.5,y:.5},s={x:.5,y:.5},m=performance.now();let x=!0,l;const I=()=>{const t=Math.min(devicePixelRatio||1,1.5);o.width=o.clientWidth*t,o.height=o.clientHeight*t,e.viewport(0,0,o.width,o.height),e.uniform2f(S,o.width,o.height),u&&f(m+8e3)},f=t=>{i.x+=(s.x-i.x)*.06,i.y+=(s.y-i.y)*.06,e.uniform1f(w,(t-m)/1e3),e.uniform2f(q,i.x,i.y),e.drawArrays(e.TRIANGLES,0,3)},A=t=>{x&&f(t),l=requestAnimationFrame(A)},b=t=>{const a=o.getBoundingClientRect();s.x=(t.clientX-a.left)/a.width,s.y=1-(t.clientY-a.top)/a.height},R=new MutationObserver(()=>{g(),u&&f(m+8e3)});R.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});const E=new IntersectionObserver(t=>{x=t[0].isIntersecting});E.observe(c),g();const y=new ResizeObserver(I);return y.observe(o),u||(c.addEventListener("pointermove",b),l=requestAnimationFrame(A)),()=>{cancelAnimationFrame(l),R.disconnect(),E.disconnect(),y.disconnect(),c.removeEventListener("pointermove",b)}},[h]),L.jsx("canvas",{ref:d,"aria-hidden":"true",className:"absolute inset-0 size-full"})}export{z as default};
