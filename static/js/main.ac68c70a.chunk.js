(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(n,e,o){n.exports=o(33)},22:function(n,e,o){},23:function(n,e,o){},32:function(n,e,o){},33:function(n,e,o){"use strict";o.r(e);var t=o(0),r=o.n(t),c=o(14),a=o.n(c),i=o(6),s=o(5),l=(o(22),32),u=function(n,e,o){return n+o*o*(3-2*o)*(e-n)},f={x:0,y:0,radius:0},d=!1,v=0,p=0,m=[],y=[],_=[],x=[];function g(n){var e=n.clientWidth,o=n.clientHeight,t=n.getBoundingClientRect(),r=t.top,c=.5*e,a=.5*o,i=t.left+c,s=r+a;y[p]=i,_[p]=s,x[p]=l+(e>o?a:c),p+=1}p=0;var h=function(n){m.push(n),g(n)},E=function(n){var e=m.indexOf(n);e>-1&&m.splice(e,1)},S=0,R=0,C=0,w=0;window.addEventListener("resize",function(){var n=p;p=0;for(var e=0;e<n;e+=1)g(m[e])}),window.addEventListener("mousemove",function(n){S=n.clientX,R=n.clientY});var A=function(){var n=Object(t.useRef)(null);return Object(t.useEffect)(function(){var e,o=n.current;return function n(){var t=S-C,r=R-w;C+=t*(1/16),w+=r*(1/16),f.x=C,f.y=w;for(var c="translate3d(".concat(C-l,"px, ").concat(w-l,"px, 0)"),a=!1,i=0;i<p;i+=1){var s=y[i],m=_[i];t=s-C,r=m-w;var g=x[i];if(t*t+r*r<=g*g){d=!0,a=!0;break}}a||(d=!1);if(d){if(v<1/8){var h=v/(1/8),E=.25+.75*u(0,1,h*h*h);f.radius=64*E,c+="scale3d(".concat(E,",").concat(E,",1)"),v+=1/64}}else if(v>0){var A=v/(1/8),b=.25+.75*u(0,1,A*A*A);f.radius=64*b,c+="scale(".concat(b,")"),v-=1/64}else f.radius=16,c+="scale(".concat(.25,")");o.style.webkitTransform=c,o.style.mozTransform=c,o.style.msTransform=c,o.style.oTransform=c,o.style.transform=c,e=requestAnimationFrame(n)}(),function(){return cancelAnimationFrame(e)}}),r.a.createElement("div",{id:"cursor",ref:n})},b=(o(23),.25);function T(){var n=document.documentElement;return{w:Math.max(n.clientWidth,window.innerWidth||0)*b,h:Math.max(n.clientHeight,window.innerHeight||0)*b}}var z=function(n,e,o){var t=n.createShader(e);return n.shaderSource(t,o),n.compileShader(t),n.getShaderParameter(t,n.COMPILE_STATUS)?t:(n.deleteShader(t),null)},H=function(n){var e=Object(t.useRef)(null),o=T(),c=o.w,a=o.h;return Object(t.useLayoutEffect)(function(){var o=e.current,t=T(),r=t.w,c=t.h,a=o.getContext("webgl");if(!a)return function(){};var i=n.children,s=function(n,e,o){var t=z(n,n.VERTEX_SHADER,e),r=z(n,n.FRAGMENT_SHADER,o),c=n.createProgram();return n.attachShader(c,t),n.attachShader(c,r),n.linkProgram(c),n.getProgramParameter(c,n.LINK_STATUS)?c:null}(a,"attribute vec2 a_position; void main() { gl_Position = vec4(a_position, 0, 1); }",i),l=a.getAttribLocation(s,"a_position"),u=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,u),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),a.STATIC_DRAW);var d=a.getUniformLocation(s,"u_time"),v=a.getUniformLocation(s,"u_mouse"),p=a.getUniformLocation(s,"u_resolution"),m=a.getUniformLocation(s,"u_oreso"),y=0;a.viewport(0,0,a.canvas.width,a.canvas.height);var _=function(){a.clearColor(0,0,0,1),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),a.useProgram(s),a.bindBuffer(a.ARRAY_BUFFER,u),a.enableVertexAttribArray(l),a.vertexAttribPointer(l,2,a.FLOAT,!1,0,0),a.uniform1f(d,y),a.uniform2f(v,f.x,f.y),a.uniform2f(p,r,c),a.uniform2f(m,r/b,c/b),a.drawArrays(a.TRIANGLES,0,6)},x=function(){var n=T(),e=n.w,t=n.h;o.width=e,o.height=t,r=e,c=t,a.viewport(0,0,a.canvas.width,a.canvas.height)};window.addEventListener("resize",x);var g=0,h=0;!function n(e){g||(g=e),y=(e-g)/1e3,h=requestAnimationFrame(n)}(0);return function n(){_(),h=requestAnimationFrame(n)}(),function(){window.removeEventListener("resize",x),cancelAnimationFrame(h)}}),r.a.createElement("canvas",{ref:e,id:"gl",width:c,height:a})},I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null,"\n        #ifdef GL_FRAGMENT_PRECISION_HIGH\n        precision highp float;\n        #else\n        precision mediump float;\n        #endif\n        precision mediump int;\n        uniform vec2 u_resolution;\n        uniform vec2 u_oreso;\n        uniform vec2 u_mouse;\n        uniform float u_time;\n        const float PI = 3.14159265358979323;\n        const float CAMERA_FOV = 25.;\n        const float CAMERA_OFFSET = 16.;\n        const float RAY_T_MIN = 0.0001;\n        const float RAY_T_MAX = 1.0e30;\n        const vec3 EMPTY_VEC3 = vec3(1, 1, 1);\n        const int DEPTH = 1;\n        const int SPHERES = 3;\n        const float TIME_SCALE = 0.25;\n        const float SPHERE_RADIUS = 6.;\n        const float SPHERE_STEP = 0.25;\n        const float SPHERE_RADIUS_GROWTH = 3.;\n        const float SPHERE_SCALE_GROWTH = 1.0;\n        const float SPHERE_DISP_GROWTH = 1.0;\n        const float SPHERE_STEP_GROWTH = 0.25;\n        const vec2 SPHERE_BNS = vec2(8, 8);\n        const int LIGHTS = 1;\n        const vec3 BRIGHTNESS = vec3(1, 1, 1);\n        struct Material{\n        vec3 specular;\n        float shininess;\n        bool reflective;\n        float reflectN;\n        bool refractive;\n        float refractN;\n        };\n        const Material EMPTY_MATERIAL = Material(EMPTY_VEC3, 0., false, 0.0, false, 0.0);\n        struct Ray{\n        vec3 point;\n        vec3 direction;\n        float tMax;\n        };\n        struct Sphere{\n        vec3 center;\n        float radius;\n        vec2 noiseScale;\n        vec2 noiseDisp;\n        float noiseStep;\n        Material m;\n        };\n        struct Hit{\n        bool hit;\n        float tMax;\n        vec3 point, normal;\n        Material m;\n        vec3 color;\n        };\n        struct Eye{\n        vec3 point;\n        vec3 forward;\n        vec3 up;\n        vec3 right;\n        float h;\n        float w;\n        };\n        struct Light{\n        vec3 point, intensity;\n        float attn;\n        float ambient;\n        };\n        const Hit NO_HIT = Hit(false, RAY_T_MAX, EMPTY_VEC3, EMPTY_VEC3, EMPTY_MATERIAL, EMPTY_VEC3);\n        vec3 refraction(vec3 I, vec3 N, float ior){\n\n        float cosi = clamp(-1., 1., dot(I, N)); \n        float etai = 1., etat = ior; \n        vec3 n = N; \n        if (cosi < 0.) { \n          cosi = -cosi; \n        } else { \n          float tmp = etai;\n          etai = etat;\n          etat = tmp;\n          n= -N; \n        } \n        float eta = etai / etat; \n        float k = 1. - eta * eta * (1. - cosi * cosi); \n        if(k < 0.){\n          return EMPTY_VEC3;\n        }\n\n        return eta * I + (eta * cosi - sqrt(k)) * n; \n        }\n        // Simplex 3D Noise \n        // by Ian McEwan, Ashima Arts\n        //\n        vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\n        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\n        float snoise(vec3 v){ \n        const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n        // First corner\n        vec3 i  = floor(v + dot(v, C.yyy) );\n        vec3 x0 =   v - i + dot(i, C.xxx) ;\n        // Other corners\n        vec3 g = step(x0.yzx, x0.xyz);\n        vec3 l = 1.0 - g;\n        vec3 i1 = min( g.xyz, l.zxy );\n        vec3 i2 = max( g.xyz, l.zxy );\n        //  x0 = x0 - 0. + 0.0 * C \n        vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n        vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n        vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n        // Permutations\n        i = mod(i, 289.0 ); \n        vec4 p = permute( permute( permute( \n            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n            + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n        // Gradients\n        // ( N*N points uniformly over a square, mapped onto an octahedron.)\n        float n_ = 1.0/7.0; // N=7\n        vec3  ns = n_ * D.wyz - D.xzx;\n        vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)\n        vec4 x_ = floor(j * ns.z);\n        vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n        vec4 x = x_ *ns.x + ns.yyyy;\n        vec4 y = y_ *ns.x + ns.yyyy;\n        vec4 h = 1.0 - abs(x) - abs(y);\n        vec4 b0 = vec4( x.xy, y.xy );\n        vec4 b1 = vec4( x.zw, y.zw );\n        vec4 s0 = floor(b0)*2.0 + 1.0;\n        vec4 s1 = floor(b1)*2.0 + 1.0;\n        vec4 sh = -step(h, vec4(0.0));\n        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n        vec3 p0 = vec3(a0.xy,h.x);\n        vec3 p1 = vec3(a0.zw,h.y);\n        vec3 p2 = vec3(a1.xy,h.z);\n        vec3 p3 = vec3(a1.zw,h.w);\n        //Normalise gradients\n        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n        p0 *= norm.x;\n        p1 *= norm.y;\n        p2 *= norm.z;\n        p3 *= norm.w;\n        // Mix final noise value\n        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n        m = m * m;\n        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \n                      dot(p2,x2), dot(p3,x3) ) );\n        }\n        float getNoise(Sphere s, vec3 phit){\n        // check if it is in perlin noise\n        vec3 diff = normalize(phit - s.center);\n        float longi = diff.z;\n        float lati = diff.x;\n        longi = (longi + PI)*180./PI;\n        lati = (lati + PI)*180./PI;\n        longi /= 360.; \n        lati /= 360.;\n        return step(snoise(vec3(vec2(longi, lati)*s.noiseScale + s.noiseDisp + vec2(u_time, u_time), u_time*TIME_SCALE) ), s.noiseStep);\n        }\n        Hit intersect(Ray r, Sphere s, float et){\n        Ray local = Ray(r.point, r.direction, r.tMax);\n        local.point -= s.center;\n        // Calculate quadratic coefficients\n        float dl = length(local.direction);\n        float a = dl*dl;\n        float b = 2. * dot(local.direction, local.point);\n        float ol = length(local.point);\n        float sr = s.radius;\n        float c = ol*ol  - sr;\n        float discriminant = b*b - 4. * a * c;\n        if (discriminant < 0.0)\n        {\n          return NO_HIT;\n        }\n        // Find two points of intersection, t1 close and t2 far\n        float t1 = (-b - sqrt(discriminant)) / (2. * a);\n        float t2 = (-b + sqrt(discriminant)) / (2. * a);\n        float t = -1.0;\n        // First check if close intersection is valid\n        if (t1 > RAY_T_MIN && t1 < et)\n        {\n          t = t1;\n          \n          \n          vec3 phit = r.direction*t + r.point;\n          float noise = getNoise(s, phit);\n          if(noise > 0.){\n            return Hit(true, t, phit, normalize(phit - s.center), s.m, s.m.specular);\n          }\n        }\n        if (t2 > RAY_T_MIN && t2 < et)\n        {\n          t = t2;\n          \n          \n          vec3 phit = r.direction*t + r.point;\n          float noise = getNoise(s, phit);\n          if(noise > 0.){\n            return Hit(true, t, phit, normalize(phit - s.center), s.m, s.m.specular);\n          }\n        }\n        if(t == -1.0){\n          // Neither is valid\n          return NO_HIT;\n        }\n        return NO_HIT;\n        }\n        Ray eyeMakeRay(Eye e, vec2 point){\n        vec3 dir = e.forward + point.x * e.w * e.right + point.y * e.h * e.up;\n        return Ray(e.point, normalize(dir), RAY_T_MAX);\n        }\n        Eye createEye(vec3 point, vec3 target, vec3 upguide, float fov, float aspectRatio){\n        vec3 forward = normalize(target - point);\n        vec3 right = normalize(cross(forward, upguide));\n        vec3 up = cross(right, forward);\n        float h = tan(fov);\n        float w = h * aspectRatio;\n        return Eye(point, forward, right, up, h, w);\n        }\n        vec3 ptColor(Hit h, Eye e, Light l, vec3 color){\n        vec3 normal = h.normal;\n        vec3 surfacePos = h.point;\n        vec3 surfaceColor = color;\n        Material m = h.m;\n        vec3 surfaceToLight  = normalize(l.point - surfacePos);\n        vec3 surfaceToEye = normalize(e.point - surfacePos);\n        vec3 ambient = l.ambient * surfaceColor * l.intensity;\n        float dC = max(0.0, dot(normal, surfaceToLight));\n        vec3 diffuse = dC * surfaceColor * l.intensity;\n        float sC = 0.0;\n        if(dC > 0.0){\n          float cosA = max(0.0, dot(surfaceToEye, reflect(-surfaceToLight, normal)));\n          sC = pow(cosA, m.shininess);\n        }\n        vec3 specular = sC * m.specular * l.intensity;\n        float dist = length(l.point - surfacePos);\n        float attn = 1.0 / (1.0 + l.attn * dist*dist);\n        vec3 linear = ambient + attn*(specular + diffuse);\n        vec3 gamma = pow(linear, vec3(1./2.2, 1./2.2, 1./2.2));\n\n        return gamma;\n        }\n        Sphere createSphere(float r, vec2 nsc, float nst, vec3 color){\n        return Sphere(vec3(0), r, nsc, vec2(0), nst, Material(color, 1.0, false, 0.5, true, 1.52));\n        }\n        vec3 getIntersectionScene(Eye e, vec2 coord, Sphere[6] s, Light l[4]){\n        float x = coord.x;\n        float y = coord.y;\n        float scx = 2.0*x / u_resolution.x - 1.0;\n        float scy = -2.0*y / u_resolution.y + 1.0;\n        float t = RAY_T_MAX;\n\n        Ray ray = eyeMakeRay(e, vec2(scx, scy));\n        vec3 final = vec3(1.);\n\n        float ref = 1.0;\n        for(int i = 0; i < DEPTH; i++){\n          Hit closest;\n          for(int j = 0; j < SPHERES; j++){\n            Hit h = intersect(ray, s[j], t);\n            if(h.hit){\n              t = h.tMax;\n              closest = h;\n            }\n          }\n          if(RAY_T_MAX >= t){\n            vec3 mixture = vec3(1);\n            for(int j = 0; j < LIGHTS; j++){\n              mixture *= ptColor(closest, e, l[j], closest.color);\n            }\n            final *= mixture * ref;\n            if(closest.m.reflective){\n              ray = Ray(closest.point, reflect(ray.direction, closest.normal), RAY_T_MAX);\n              ref *= closest.m.reflectN;\n            } else if(closest.m.refractive) {\n              ray = Ray(closest.point, refraction(ray.direction, closest.normal, closest.m.refractN), RAY_T_MAX);\n            }\n            \n          }\n          t = RAY_T_MAX;\n        }\n        return final;\n        }\n        /**\n         * for crt\n         */\n        vec3 scanline(vec2 coord, vec3 screen)\n        {\n        screen.xyz -= sin((coord.y + (u_time * 29.0))) * 0.02;\n        return screen;\n        }\n\n        vec2 crt(vec2 coord, float bend)\n        {\n        // put in symmetrical coords\n        coord = (coord - 0.5) * 2.0;\n        coord *= 1.1;\n        // deform coords\n        coord.x *= 1.0 + pow((abs(coord.y) / bend), 2.0);\n        coord.y *= 1.0 + pow((abs(coord.x) / bend), 2.0);\n        // transform back to 0.0 - 1.0 space\n        coord  = (coord / 2.0) + 0.5;\n        return coord;\n        }\n\n        vec3 sampleSplit(Eye e, vec2 coord, Sphere[6] s, Light l[4])\n        {\n        vec3 frag;\n        vec2 ratio = coord/u_resolution;\n        //frag = getIntersectionScene(e, gl_FragCoord.xy, s, l);\n        frag.x = getIntersectionScene(e, vec2(ratio.x - 0.0025 * sin(u_time), ratio.y)*u_resolution, s, l).x;\n        frag.y = getIntersectionScene(e, coord, s, l).y;\n        frag.z = getIntersectionScene(e, vec2(ratio.x + 0.0025 * sin(u_time), ratio.y)*u_resolution, s, l).z;\n        return frag;\n        }\n\n        void main(){\n        vec2 ms = u_mouse.xy;\n        float width = u_oreso.x;\n        float height = u_oreso.y;\n\n        Material wood = Material(vec3(1, 1, 1), 0.5, true, 0.5, false, 1.0);\n        Material glass = Material(vec3(1, 1, 1), 1., false, 0.5, true, 1.52);\n\n        Sphere s[6];\n        float radius = SPHERE_RADIUS;\n        vec2 scale = SPHERE_BNS;\n        float nstep = SPHERE_STEP;\n\n        s[0] = createSphere(radius, scale, nstep, vec3(0.96, 0, 1));\n        radius *= SPHERE_RADIUS_GROWTH;\n        scale *= SPHERE_SCALE_GROWTH;\n        nstep *= SPHERE_STEP_GROWTH;\n\n        s[1] = createSphere(radius, scale, nstep, vec3(0.85, 0, 1));\n        radius *= SPHERE_RADIUS_GROWTH;\n        scale *= SPHERE_SCALE_GROWTH;\n        nstep *= SPHERE_STEP_GROWTH;\n        s[2] = createSphere(radius, scale, nstep, vec3(0.74, 0, 1));\n        radius *= SPHERE_RADIUS_GROWTH;\n        scale *= SPHERE_SCALE_GROWTH;\n        nstep *= SPHERE_STEP_GROWTH;\n        s[3] = createSphere(radius, scale, nstep, vec3(0.62, 0, 1));\n        radius *= SPHERE_RADIUS_GROWTH;\n        scale *= SPHERE_SCALE_GROWTH;\n        nstep *= SPHERE_STEP_GROWTH;\n        s[4] = createSphere(radius, scale, nstep, vec3(0.51, 0, 1));\n        radius *= SPHERE_RADIUS_GROWTH;\n        scale *= SPHERE_SCALE_GROWTH;\n        nstep *= SPHERE_STEP_GROWTH;\n        s[5] = createSphere(radius, scale, nstep, vec3(0.40, 0, 1));\n\n\n        Light l[4];\n\n        l[0] = Light(\n          vec3(12, 0, 0),\n          vec3(1),\n          0.1,\n          0.1\n        );\n\n        vec2 halfres = u_oreso.xy*0.5;\n\n        ms = halfres - ms;\n        ms /= halfres;\n\n        ms *= PI;\n\n        vec3 eye_pos = vec3(CAMERA_OFFSET + CAMERA_OFFSET*0.5*sin(ms.y*0.5), CAMERA_OFFSET, CAMERA_OFFSET*0.5*cos(ms.x*0.5));\n        vec3 target = vec3(ms.y, 0.0, ms.x); // \n        vec3 upguide = vec3(0.0, 0.0, 1.0);\n        float fov = CAMERA_FOV * PI/180.;\n        float aspectRatio = width / height;\n        Eye e = createEye(eye_pos, target, upguide, fov, aspectRatio);\n        vec2 uv = gl_FragCoord.xy / u_resolution.xy;\n        uv.y = 1.0 - uv.y; // flip tex\n        vec2 crtCoords = crt(uv, 3.2);\n        // shadertoy has tiling textures. wouldn't be needed\n        // if you set up your tex params properly\n        if (crtCoords.x < 0.0 || crtCoords.x > 1.0 || crtCoords.y < 0.0 || crtCoords.y > 1.0){\n          gl_FragColor = vec4(0.0);\n        } else {\n          // Split the color channels\n          vec3 v = sampleSplit(e, gl_FragCoord.xy, s, l);\n          // HACK: this bend produces a shitty moire pattern.\n          // Up the bend for the scanline\n          vec2 screenSpace = crtCoords * u_resolution.xy;\n          //vec3 currentJulia = getJulia(gl_FragCoord.xy);\n          gl_FragColor = vec4(scanline(screenSpace, v), 1.0);\n        }\n      }\n    "))},P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null,"\n        #ifdef GL_FRAGMENT_PRECISION_HIGH\n        precision highp float;\n        #else\n        precision mediump float;\n        #endif\n        precision mediump int;\n        uniform vec2 u_resolution;\n        uniform vec2 u_mouse;\n        uniform float u_time;\n        \n        vec2 rot(vec2 p, float a) {\n          float c = cos(a), s = sin(a);\n          return vec2(\n            c * p.x - s * p.y,\n            s * p.x + c * p.y);\n            \n        }\n        \n        \n        float map(vec3 p) {\n          //p.x += sin(p.z * 0.25 + u_time) * 2.0;\n          //p.y += cos(p.z * 0.25 + u_time) * 2.0;\n          //p.xy = rot(p.xy, -p.z * 0.1);\n          vec3 m = mod(p, 2.0) - 1.0;\n          \n          return length(max(abs(m) - 0.1, 0.0)) - 0.001;\n        }\n\n        vec3 render(vec2 coord) {\n          vec2 uv = ( 2.0 * coord - u_resolution.xy ) / min(u_resolution.x, u_resolution.y);\n          vec3 dir = normalize(vec3(uv, 1.85));\n          vec3 pos = vec3(0, 0, u_time * 2.0);\n          dir.yz = rot(dir.yz, (u_mouse.y / u_resolution.y) * 1.0);\n          dir.zx = rot(dir.zx, (u_mouse.x / u_resolution.x) * 1.0);\n          float t = 0.0;\n          for(int i = 0 ; i < 90; i++) {\n            float k = map(dir * t + pos);\n            t += k * 0.85;\n          }\n          vec3 ip = dir;\n          return vec3(t * 0.005 * mix(vec3(0), vec3(1), t * 0.025));\n        }\n        \n        /**\n         * for crt\n         */\n        vec3 scanline(vec2 coord, vec3 screen) {\n          screen.xyz -= sin((coord.y + (u_time * 29.0))) * 0.02;\n          return screen;\n        }\n\n        vec2 crt(vec2 coord, float bend) {\n          // put in symmetrical coords\n          coord = (coord - 0.5) * 2.0;\n          coord *= 1.1;\n          // deform coords\n          coord.x *= 1.0 + pow((abs(coord.y) / bend), 2.0);\n          coord.y *= 1.0 + pow((abs(coord.x) / bend), 2.0);\n          // transform back to 0.0 - 1.0 space\n          coord  = (coord / 2.0) + 0.5;\n          return coord;\n        }\n        \n        vec3 sampleSplit(vec2 coord) {\n          vec3 frag;\n          vec2 ratio = coord/u_resolution;\n          frag.x = render(vec2(ratio.x - 0.0025 * sin(u_time), ratio.y)*u_resolution).x;\n          frag.y = render(coord).y;\n          frag.z = render(vec2(ratio.x + 0.0025 * sin(u_time), ratio.y)*u_resolution).z;\n          return frag;\n        }\n\n        void main() {\n          vec2 uv = gl_FragCoord.xy / u_resolution.xy;\n          uv.y = 1.0 - uv.y; // flip tex\n          vec2 crtCoords = crt(uv, 3.2);\n          // shadertoy has tiling textures. wouldn't be needed\n          // if you set up your tex params properly\n          if (crtCoords.x < 0.0 || crtCoords.x > 1.0 || crtCoords.y < 0.0 || crtCoords.y > 1.0){\n            gl_FragColor = vec4(0.0);\n          } else {\n            // Split the color channels\n            vec3 v = sampleSplit(gl_FragCoord.xy);\n            // HACK: this bend produces a shitty moire pattern.\n            // Up the bend for the scanline\n            vec2 screenSpace = crtCoords * u_resolution.xy;\n            gl_FragColor = vec4(scanline(screenSpace, v), 1.0);\n          }\n        }\n      "))},F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null,"\n        #ifdef GL_ES\n          precision mediump float;\n        #endif\n        \n        #extension GL_OES_standard_derivatives : enable\n        \n        uniform float u_time;\n        uniform vec2 u_mouse;\n        uniform vec2 u_resolution;\n        \n        const float PI = acos(-1.0);\n        \n        float distanceFunction(vec3 p){\n          vec3 pp = abs(fract(p + vec3(0.0, 0.0, u_time)) * 2.0 - 1.0);\n          \n          return min(p.y + 1.0, max(pp.z, pp.x) + p.y * 0.5);\n        }\n        \n        vec3 calculateNormal(vec3 p){\n          const float delta = 0.001;\n          \n          float startd = distanceFunction(p);\n          float dx = startd - distanceFunction(vec3(p.x - delta, p.y, p.z));\n          float dy = startd - distanceFunction(vec3(p.x, p.y - delta, p.z));\n          float dz = startd - distanceFunction(vec3(p.x, p.y, p.z - delta));\n          \n          return normalize(vec3(dx, dy, dz));\n        }\n        \n        vec3 render(vec2 coord) {\n        \n          vec2 position = coord.xy / u_resolution.xy;\n          vec3 vector = normalize(vec3((1.0 - (u_mouse.xy / u_resolution.xy) * 0.5) + position * 2.0 - 1.0, 1.0));\n          \n          const int steps = 128;\n          const float rSteps = 1.0 / float(steps);\n          \n          vec3 worldPosition = vec3(0.0);\n          bool hit = false;\n          float woah = 0.0;\n          \n          for (int i = 0; i < steps; ++i){\n            float d = distanceFunction(worldPosition);\n            woah = float(i);\n            \n            hit = true;\n            if (abs(d) < 0.001 || length(worldPosition) > 64.0) break;\n            hit = false;\n            \n            worldPosition += vector * d * 0.5;\n          }\n          \n          vec3 normal = calculateNormal(worldPosition);\n          //vec3 halfVector = normalize(normal + vector);\n          //float NoV = dot(normal, -vector);\n        \n          return vec3(woah * 0.02) / length(worldPosition) * 3.0;\n        }\n        \n        /**\n         * for crt\n         */\n        vec3 scanline(vec2 coord, vec3 screen)\n        {\n          screen.xyz -= sin((coord.y + (u_time * 29.0))) * 0.02;\n          return screen;\n        }\n        \n        vec2 crt(vec2 coord, float bend)\n        {\n          // put in symmetrical coords\n          coord = (coord - 0.5) * 2.0;\n          coord *= 1.1;\n          // deform coords\n          coord.x *= 1.0 + pow((abs(coord.y) / bend), 2.0);\n          coord.y *= 1.0 + pow((abs(coord.x) / bend), 2.0);\n          // transform back to 0.0 - 1.0 space\n          coord  = (coord / 2.0) + 0.5;\n          return coord;\n        }\n        \n        vec3 sampleSplit(vec2 coord)\n        {\n          vec3 frag;\n          vec2 ratio = coord/u_resolution;\n          frag.x = render(vec2(ratio.x - 0.0025 * sin(u_time), ratio.y) * u_resolution).x;\n          frag.y = render(coord).y;\n          frag.z = render(vec2(ratio.x + 0.0025 * sin(u_time), ratio.y) * u_resolution).z;\n          return frag;\n        }\n\n        void main() {\n          vec2 uv = gl_FragCoord.xy / u_resolution.xy;\n          uv.y = 1.0 - uv.y; // flip tex\n          vec2 crtCoords = crt(uv, 3.2);\n          if (crtCoords.x < 0.0 || crtCoords.x > 1.0 || crtCoords.y < 0.0 || crtCoords.y > 1.0){\n            gl_FragColor = vec4(0.0);\n          } else {\n            vec3 v = sampleSplit(gl_FragCoord.xy);\n            vec2 screenSpace = crtCoords * u_resolution.xy;\n            gl_FragColor = vec4(scanline(screenSpace, v), 1.0);\n          }\n        }\n      "))},M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null,"\n        #define ITERATIONS 50.\n        #ifdef GL_FRAGMENT_PRECISION_HIGH\n          precision highp float;\n        #else\n          precision mediump float;\n        #endif\n        precision mediump int;\n       \n        \n        uniform float u_time;\n        uniform vec2 u_mouse;\n        uniform vec2 u_resolution;\n        uniform vec2 u_oreso;\n        \n        const float TIME_SCALE = 0.1;\n        \n        float modI(float a,float b) {\n          float m=a - floor((a + 0.5) / b) * b;\n          return floor(m + 0.5);\n        }\n        \n        vec3 getJulia(vec2 pixel){\n        \n          vec2 mid = u_oreso * 0.5;\n          vec2 m = mid - u_mouse;\n          \n          float w = u_resolution.x;\n          float h = u_resolution.y;\n          \n          float time = u_time * TIME_SCALE;\n          \n          m /= mid;\n          \n          float re = m.x * cos(time);\n          float im = m.y * -sin(time);\n          \n          float newRe = 1.5 * (pixel.x - w / 2.0) / (0.5 * w);\n          float newIm = (pixel.y - h / 2.0) / (0.5 * h);\n          float oldRe, oldIm;\n          \n          float steps;\n          \n          for (float i = 0.; i < ITERATIONS; i++){\n            steps = i;\n            oldRe = newRe;\n            oldIm = newIm;\n            \n            newRe = oldRe * oldRe - oldIm * oldIm + re;\n            newIm = 2.0 * oldRe * oldIm + im;\n            \n            if ((newRe * newRe + newIm * newIm) > 4.) break;\n          }\n          \n          float s_f = steps;\n          float r = 1. - abs(1. - 2. * s_f/ITERATIONS);\n          float g = 1. - abs(1. - 2. * s_f/ITERATIONS);\n          float b = 1. - abs(1. - 2. * s_f/ITERATIONS);\n          \n          return vec3(r, g, b);\n        }\n        \n        /**\n         * for crt\n         */\n        vec3 scanline(vec2 coord, vec3 screen) {\n          screen.xyz -= sin((coord.y + (u_time * 29.0))) * 0.02;\n          return screen;\n        }\n        \n        vec2 crt(vec2 coord, float bend) {\n          // put in symmetrical coords\n          coord = (coord - 0.5) * 2.0;\n          coord *= 1.1;\n          // deform coords\n          coord.x *= 1.0 + pow((abs(coord.y) / bend), 2.0);\n          coord.y *= 1.0 + pow((abs(coord.x) / bend), 2.0);\n          // transform back to 0.0 - 1.0 space\n          coord  = (coord / 2.0) + 0.5;\n          return coord;\n        }\n        \n        vec3 sampleSplit(vec2 coord) {\n          vec3 frag;\n          vec2 ratio = coord/u_resolution;\n          frag.x = getJulia(vec2(ratio.x - 0.0025 * sin(u_time), ratio.y)*u_resolution).x;\n          frag.y = getJulia(coord).y;\n          frag.z = getJulia(vec2(ratio.x + 0.0025 * sin(u_time), ratio.y)*u_resolution).z;\n          return frag;\n        }\n\n        void main() {\n          vec2 uv = gl_FragCoord.xy / u_resolution.xy;\n          uv.y = 1.0 - uv.y; // flip tex\n          vec2 crtCoords = crt(uv, 3.2);\n          // shadertoy has tiling textures. wouldn't be needed\n          // if you set up your tex params properly\n          if (crtCoords.x < 0.0 || crtCoords.x > 1.0 || crtCoords.y < 0.0 || crtCoords.y > 1.0){\n            gl_FragColor = vec4(0.0);\n          } else {\n            // Split the color channels\n            vec3 v = sampleSplit(gl_FragCoord.xy);\n            // HACK: this bend produces a shitty moire pattern.\n            // Up the bend for the scanline\n            vec2 screenSpace = crtCoords * u_resolution.xy;\n            vec3 currentJulia = getJulia(gl_FragCoord.xy);\n            gl_FragColor = vec4(scanline(screenSpace, v), 1.0);\n          }\n        }\n      "))},O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null,"\n        #ifdef GL_ES\n        precision mediump float;\n        #endif\n        \n        #extension GL_OES_standard_derivatives : enable\n        \n        uniform sampler2D tex;\n        \n        uniform vec2 u_mouse;\n        uniform vec2 u_resolution;\n        uniform float u_time; \n        \n        vec3 rotatey(in vec3 p, float ang) {\n          return vec3(p.x * cos(ang) - p.z * sin(ang), p.y, p.x * sin(ang) + p.z * cos(ang));\n        }\n        vec3 rotatex(in vec3 p, float ang) {\n          return vec3(p.x, p.y * cos(ang) - p.z * sin(ang), p.y * sin(ang) + p.z * cos(ang));\n        }\n        vec3 rotatez(in vec3 p, float ang) {\n          return vec3(p.x * cos(ang) - p.y * sin(ang), p.x * sin(ang) + p.y * cos(ang), p.z);\n        }\n        \n        float scene(vec3 p) {\n          vec2 offset = u_mouse / u_resolution;\n          p = rotatey(p, offset.x); \n          p = rotatex(p, offset.y); \n          p = rotatez(p, 1.0); \n          float d1 = length(p) - 0.5 + sin(-4.0 * u_time + 60.0 * p.x) * 0.01 + sin(1.5 * u_time + 50.0 * p.x * p.z) * 0.02; \n          return d1;\n        }\n        \n        vec3 get_normal(vec3 p) {\n          vec3 eps = vec3(0.001,0,0); \n          float nx = scene(p + eps.xyy) - scene(p - eps.xyy); \n          float ny = scene(p + eps.yxy) - scene(p - eps.yxy); \n          float nz = scene(p + eps.yyx) - scene(p - eps.yyx); \n          return normalize(vec3(nx,ny,nz)); \n        }\n\n        vec3 render(vec2 coord) {\n          vec2 p = 2.0 * (coord.xy / u_resolution) - 1.0; \n          p.x *= u_resolution.x / u_resolution.y; \n          vec3 color = vec3(0); \n        \n        \n          color = vec3(1.0 - length(p * 0.1)) * 0.4; \n          \n          vec3 ro = vec3(0,0,1.0); \n          vec3 rd = normalize(vec3(p.x,p.y,-1.0));  \n          vec3 pos = ro; \n          float dist = 0.0; \n          for (int i = 0; i < 64; i++) {\n            float d = scene(pos);\n            pos += rd * d;\n            dist += d;\n          }\n          if (dist < 100.0) {\n            vec3 lightpos = vec3(100.0, 0.0, 0.0); \n            vec3 n = get_normal(pos);\n            //vec3 l = normalize(vec3(1, 0, 0.0)); \n            vec3 l = normalize(lightpos-pos); \n            float diff = 0.0 * clamp(dot(n, l), 0.0, 1.0); \n            float fres = clamp(dot(n, -rd), 0.0, 1.0); \n            float amb = 0.1; \n            float spec0 = 0.5 * pow(clamp(dot(reflect(n, l), normalize(vec3(-1.0, 0, 1.0))), 0.0, 1.0), 50.0); \n            float spec1 = 0.5 * pow(clamp(dot(reflect(n, l), normalize(vec3(1.0, 0, 1.0))), 0.0, 1.0), 50.0); \n            float spec2 = 3.0 * pow(clamp(dot(reflect(n, l), normalize(vec3(0.0, 0.5, 1.0))), 0.0, 1.0), 10.0); \n            color = diff * vec3(1.0) / dist;\n            color += 0.0 * amb * vec3(1.0, 1.0, 1.0) * clamp(p.y, 0.0, 1.0) * 1.0;\n            color = mix(vec3(1, 1, 1) * 0.2,vec3(1, 1, 1) * 0.0, fres);\n            color += spec0 * vec3(1, 1, 1);\n            color += smoothstep(0.0, 1.0, spec1)*vec3(1, 1, 1);\n            color += 1.0 * pow(spec1, 2.0)*vec3(1, 1, 1);\n            color += smoothstep(0.0, 0.5, spec2)*vec3(1, 1, 1)*pos.y*2.0; \n          }\n        \n          return color; \n        }        \n        \n        /**\n         * for crt\n         */\n        vec3 scanline(vec2 coord, vec3 screen) {\n          screen.xyz -= sin((coord.y + (u_time * 29.0))) * 0.02;\n          return screen;\n        }\n        \n        vec2 crt(vec2 coord, float bend) {\n          // put in symmetrical coords\n          coord = (coord - 0.5) * 2.0;\n          coord *= 1.1;\n          // deform coords\n          coord.x *= 1.0 + pow((abs(coord.y) / bend), 2.0);\n          coord.y *= 1.0 + pow((abs(coord.x) / bend), 2.0);\n          // transform back to 0.0 - 1.0 space\n          coord  = (coord / 2.0) + 0.5;\n          return coord;\n        }\n        \n        vec3 sampleSplit(vec2 coord) {\n          vec3 frag;\n          vec2 ratio = coord/u_resolution;\n          frag.x = render(vec2(ratio.x - 0.0025 * sin(u_time), ratio.y)*u_resolution).x;\n          frag.y = render(coord).y;\n          frag.z = render(vec2(ratio.x + 0.0025 * sin(u_time), ratio.y)*u_resolution).z;\n          return frag;\n        }\n\n        void main() {\n          vec2 uv = gl_FragCoord.xy / u_resolution.xy;\n          uv.y = 1.0 - uv.y; // flip tex\n          vec2 crtCoords = crt(uv, 3.2);\n          // shadertoy has tiling textures. wouldn't be needed\n          // if you set up your tex params properly\n          if (crtCoords.x < 0.0 || crtCoords.x > 1.0 || crtCoords.y < 0.0 || crtCoords.y > 1.0){\n            gl_FragColor = vec4(0.0);\n          } else {\n            // Split the color channels\n            vec3 v = sampleSplit(gl_FragCoord.xy);\n            // HACK: this bend produces a shitty moire pattern.\n            // Up the bend for the scanline\n            vec2 screenSpace = crtCoords * u_resolution.xy;\n            gl_FragColor = vec4(scanline(screenSpace, v), 1.0);\n          }\n        }\n      "))},N=function(n,e,o){return String.fromCharCode(function(n,e,o){return n+o*o*(3-2*o)*(e-n)}(n.charCodeAt(0),e.charCodeAt(0),o))},L=function(n){var e=n.target,o=n.start,c=n.end,a=Object(t.useRef)(null);return Object(t.useEffect)(function(){var n=a.current;h(n);var e,t=0,r=!1,i=function a(){r?t>0&&(t-=1/64,e=requestAnimationFrame(a)):t<.4&&(t+=1/64,e=requestAnimationFrame(a)),n.innerHTML=function(n,e,o,t){var r=n,c=e;if(o>=1)return e;if(o<=0)return n;var a=r.length,i=c.length,s=Math.max(a,i);if(a<i)for(var l=i-a;l>0;l-=1)r+=" ";else if(i<a)for(var u=a-i;u>0;u-=1)c+=" ";var f="";if(1===t){for(var d=1/s,v=Math.max(1,Math.floor(s*o)+1),p=0;p<v-1;p+=1)f+=c.charAt(p);var m=r.charAt(v-1),y=c.charAt(v-1);f+=N(m,y,(o-v*d)/d);for(var _=v;_<s;_+=1)f+=r.charAt(_)}if(2===t)for(var x=0;x<s;x+=1){var g=r.charAt(x),h=c.charAt(x);f+=N(g,h,o)}return f}(o,c,t/.4,2)},s=function(e){var o=e.clientY,t=e.clientX,c=n.clientWidth,a=n.clientHeight,s=n.getBoundingClientRect(),l=s.top,u=t-(s.left+.5*c),f=o-(l+.5*a);u*u+f*f<=1024?r&&(r=!1,i()):r||(r=!0,i())};return window.addEventListener("mousemove",s),function(){E(n),cancelAnimationFrame(e),window.removeEventListener("mousemove",s)}}),r.a.createElement(i.b,{innerRef:a,className:"nav-item",id:"nav-".concat(e),to:"/".concat(e)},o)},G=(o(32),function(n){var e=n.title,o=Object(t.useRef)(null);return Object(t.useEffect)(function(){var n=o.current;return h(n),function(){E(n)}}),r.a.createElement(i.b,{innerRef:o,className:"Logo",to:"/"},e.split("").map(function(n,e){return r.a.createElement("span",{className:"char".concat(e)},n)}))}),W=function(){return r.a.createElement("nav",null,r.a.createElement(G,{title:"LXSMNSYC"}),r.a.createElement(L,{target:"contacts",start:"contacts",end:"CONTACTS"}),r.a.createElement(L,{target:"about",start:"about",end:"ABOUT"}),r.a.createElement(L,{target:"works",start:"works",end:"WORKS"}),r.a.createElement(L,{target:"menu",start:"menu",end:"MENU"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(function(){return r.a.createElement(i.a,null,r.a.createElement(W,null),r.a.createElement(s.a,{exact:!0,path:"/",component:I}),r.a.createElement(s.a,{path:"/about",component:F}),r.a.createElement(s.a,{path:"/works",component:M}),r.a.createElement(s.a,{path:"/menu",component:P}),r.a.createElement(s.a,{path:"/contacts",component:O}),r.a.createElement(A,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.ac68c70a.chunk.js.map