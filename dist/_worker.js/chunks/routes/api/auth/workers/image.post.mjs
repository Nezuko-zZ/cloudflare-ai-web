import{d as e,b as t,p as r}from"../../../../_/nitro.mjs";import{a as o,i as s}from"../../../../_/helper.mjs";import"../../../../_/import-wrapper-prod.mjs";import"../../../../_/runtime-core.esm-bundler.mjs";const a=e((async e=>{const a=await t(e),{model:m,messages:n,num_steps:p}=a,i={prompt:n[0].content,num_steps:p},d=await fetch(`${r.env.CF_GATEWAY}/workers-ai/${m}`,{method:"POST",headers:{Authorization:`Bearer ${r.env.CF_TOKEN}`,"Content-Type":"application/json"},body:JSON.stringify(i)});return d.ok?s(d):o(d)}));export{a as default};
//# sourceMappingURL=image.post.mjs.map