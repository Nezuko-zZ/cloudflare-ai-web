import{d as e,b as o,p as s}from"../../../_/nitro.mjs";import{a,s as r,o as t}from"../../../_/helper.mjs";import"../../../_/import-wrapper-prod.mjs";import"../../../_/runtime-core.esm-bundler.mjs";const n=e((async e=>{const n=await o(e),{model:m,messages:i,key:p,endpoint:d}=n,_={stream:!0,model:m,messages:i},A=s.env.OPENAI_API_URL?`${s.env.OPENAI_API_URL}/v1/chat/completions`:`${s.env.CF_GATEWAY}/openai/${d}`,c=await fetch(A,{method:"POST",headers:{Authorization:void 0===p?`Bearer ${s.env.OPENAI_API_KEY}`:`Bearer ${p}`,"Content-Type":"application/json"},body:JSON.stringify(_)});return c.ok?r(c,t):a(c)}));export{n as default};
//# sourceMappingURL=openai.post.mjs.map
