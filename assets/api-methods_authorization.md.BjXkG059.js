import{_ as s,c as t,o as i,a4 as a}from"./chunks/framework.BbwoXMSV.js";const E=JSON.parse('{"title":"Авторизация","description":"","frontmatter":{},"headers":[],"relativePath":"api-methods/authorization.md","filePath":"api-methods/authorization.md"}'),e={name:"api-methods/authorization.md"},n=a(`<h1 id="авторизация" tabindex="-1">Авторизация <a class="header-anchor" href="#авторизация" aria-label="Permalink to &quot;Авторизация&quot;">​</a></h1><h2 id="авторизации-в-системе" tabindex="-1">Авторизации в системе <a class="header-anchor" href="#авторизации-в-системе" aria-label="Permalink to &quot;Авторизации в системе&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p><em>POST</em> <code>v2/login</code></p><p>Пример использования:</p><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https://client.adstat.pro/api/v2/login</span></span></code></pre></div><p><strong>Параметры:</strong></p><table tabindex="0"><thead><tr><th>Параметр</th><th>Тип</th><th>Описание</th></tr></thead><tbody><tr><td>login</td><td>string</td><td>Логин пользователя</td></tr><tr><td>password</td><td>string</td><td>Пароль пользователя</td></tr></tbody></table><p><strong>Пример параметров в тело запроса:</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;login&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;user@example.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;password&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;string&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>Пример успешного ответа:</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;user_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3fa85f64-5717-4562-b3fc-2c922263f66a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;access_token&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;refresh_token&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dGhpcyBpcyBhIHJlZnJlc2ggdG9rZW4gdXNlZCB0byBnZXQgYW4gbmV3IGFjY2VzcyB0b2tlbiB3aGVuIHRoZSBjdXJyZW50IGFjY2VzcyB0b2tlbiBleHBpcmVz&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>&lt;access_token&gt;</code> необходимо передавать в headers HTTP запросов в формате:</p><ul><li><code>Bearer &lt;access_token&gt;</code></li></ul><p><code>&lt;refresh_token&gt;</code> необходимо использовать в методе <code>v2/access_token</code>, когда истёк срок действия <code>&lt;access_token&gt;</code> - для обновления <code>&lt;access_token&gt;</code></p></div><h2 id="рефреш-токена" tabindex="-1">Рефреш токена <a class="header-anchor" href="#рефреш-токена" aria-label="Permalink to &quot;Рефреш токена&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p><em>GET</em> <code>v2/access-token</code></p><p>Пример использования:</p><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https://client.adstat.pro/api/v2/access-token</span></span></code></pre></div><p><strong>Параметры</strong></p><p>В заголовке HTTP запроса необходимо передать <code>&lt;refresh_token&gt;</code> в формате:</p><ul><li><code>refresh_token: &lt;refresh_token&gt; </code></li></ul><p><strong>Пример успешного ответа:</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;access_token&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;token_type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Bearer&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div>`,5),p=[n];function l(h,o,d,c,k,r){return i(),t("div",null,p)}const u=s(e,[["render",l]]);export{E as __pageData,u as default};
