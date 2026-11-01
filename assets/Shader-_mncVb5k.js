import{a as S,j as I}from"./motion-BNhBa24P.js";import{j as O}from"./index-BsIjlCw4.js";import"./react-BTHjx2eF.js";import"./lenis-BXjoyVLH.js";const G="attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}",H=`
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
}`;function D(){const v=S.useRef(null),p=O();return S.useEffect(()=>{const o=v.current,l=o.parentElement,e=o.getContext("webgl",{antialias:!1,alpha:!1});if(!e)return;const c=!p,_=(t,s)=>{const h=e.createShader(t);return e.shaderSource(h,s),e.compileShader(h),h},n=e.createProgram();e.attachShader(n,_(e.VERTEX_SHADER,G)),e.attachShader(n,_(e.FRAGMENT_SHADER,H)),e.linkProgram(n),e.useProgram(n),e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);const g=e.getAttribLocation(n,"p");e.enableVertexAttribArray(g),e.vertexAttribPointer(g,2,e.FLOAT,!1,0,0);const i=t=>e.getUniformLocation(n,t),w=i("u_res"),q=i("u_t"),C=i("u_m"),M=i("u_a"),P=i("u_b"),T=i("u_c"),B={dark:[[.039,.039,.039],[.09,.09,.1],[.17,.17,.19]],light:[[.98,.98,.98],[.925,.925,.94],[.85,.85,.88]]},x=()=>{const t=B[document.documentElement.dataset.theme==="light"?"light":"dark"];e.uniform3fv(M,t[0]),e.uniform3fv(P,t[1]),e.uniform3fv(T,t[2])},a={x:.5,y:.5},u={x:.5,y:.5},f=performance.now();let m=!1,r=0,A=0;const L=()=>{const t=Math.min(devicePixelRatio||1,1)*Math.min(1,1100/Math.max(o.clientWidth,1));o.width=o.clientWidth*t,o.height=o.clientHeight*t,e.viewport(0,0,o.width,o.height),e.uniform2f(w,o.width,o.height),c&&d(f+8e3)},d=t=>{a.x+=(u.x-a.x)*.06,a.y+=(u.y-a.y)*.06,e.uniform1f(q,(t-f)/1e3),e.uniform2f(C,a.x,a.y),e.drawArrays(e.TRIANGLES,0,3)},R=t=>{r=requestAnimationFrame(R),!(!m||t-A<33)&&(A=t,d(t))},b=t=>{const s=o.getBoundingClientRect();u.x=(t.clientX-s.left)/s.width,u.y=1-(t.clientY-s.top)/s.height},E=new MutationObserver(()=>{x(),c&&d(f+8e3)});E.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});const y=new IntersectionObserver(t=>{m=t[0].intersectionRatio>.05,m&&!r&&!c&&(r=requestAnimationFrame(R)),!m&&r&&(cancelAnimationFrame(r),r=0)},{threshold:[0,.05,.2]});y.observe(l),x();const F=new ResizeObserver(L);return F.observe(o),c||l.addEventListener("pointermove",b),()=>{cancelAnimationFrame(r),E.disconnect(),y.disconnect(),F.disconnect(),l.removeEventListener("pointermove",b)}},[p]),I.jsx("canvas",{ref:v,"aria-hidden":"true",className:"absolute inset-0 size-full"})}export{D as default};
