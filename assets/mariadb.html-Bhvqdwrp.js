import{_ as d,c as r,b as n,a as s,f as a,d as l,e as t,r as o,o as p}from"./app-CH5b4Rii.js";const u={};function c(m,e){const i=o("RouteLink");return p(),r("div",null,[e[12]||(e[12]=n("h1",{id:"instalasi-mariadb",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#instalasi-mariadb"},[n("span",null,"Instalasi MariaDB")])],-1)),n("ol",null,[e[10]||(e[10]=s(`<li><p>Install dulu MariaDB Server <code>apt install mariadb-server</code></p></li><li><p>Jika sudah terinstall, gunakan perintah <code>mysql_secure_installation</code>. Lalu perhatikan baik-baik, letter to letter!</p><ul><li><p>Ketika prompt ini muncul, ketik Password Root anda.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">NOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MariaDB</span>
<span class="line">      SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!</span>
<span class="line"></span>
<span class="line">In order to log into MariaDB to secure it, we&#39;ll need the current</span>
<span class="line">password for the root user. If you&#39;ve just installed MariaDB, and</span>
<span class="line">haven&#39;t set the root password yet, you should just press enter here.</span>
<span class="line"></span>
<span class="line">Enter current password for root (enter for none):</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Pada Prompt ini, ketik <code>n</code> karena kita telah menggunakan password root.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">OK, successfully used password, moving on...</span>
<span class="line"></span>
<span class="line">Setting the root password or using the unix_socket ensures that nobody</span>
<span class="line">can log into the MariaDB root user without the proper authorisation.</span>
<span class="line"></span>
<span class="line">You already have your root account protected, so you can safely answer &#39;n&#39;.</span>
<span class="line"></span>
<span class="line">Switch to unix_socket authentication [Y/n] n</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Ini jawab <code>n</code> ada, toh udah ada root password juga</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">You already have your root account protected, so you can safely answer &#39;n&#39;.</span>
<span class="line"></span>
<span class="line">Change the root password? [Y/n] n</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Kita hapus saja Anonymous User, karena… well… kita nggak pakai</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">By default, a MariaDB installation has an anonymous user, allowing anyone</span>
<span class="line">to log into MariaDB without having to have a user account created for</span>
<span class="line">them.  This is intended only for testing, and to make the installation</span>
<span class="line">go a bit smoother.  You should remove them before moving into a</span>
<span class="line">production environment.</span>
<span class="line"></span>
<span class="line">Remove anonymous users? [Y/n] y</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Untuk Remote Root Access, kita disallow aja</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Normally, root should only be allowed to connect from &#39;localhost&#39;.  This</span>
<span class="line">ensures that someone cannot guess at the root password from the network.</span>
<span class="line"></span>
<span class="line">Disallow root login remotely? [Y/n] y</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Untuk Test Database, kita hapus saja, selama database ini hanya digunakan untuk testing.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">By default, MariaDB comes with a database named &#39;test&#39; that anyone can</span>
<span class="line">access.  This is also intended only for testing, and should be removed</span>
<span class="line">before moving into a production environment.</span>
<span class="line"></span>
<span class="line">Remove test database and access to it? [Y/n] y</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Untuk Reload Privilage Table, yes we want that!</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Reloading the privilege tables will ensure that all changes made so far</span>
<span class="line">will take effect immediately.</span>
<span class="line"></span>
<span class="line">Reload privilege tables now? [Y/n] y</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Kalo udahan, dan disambut dengan kata ini, you’re done! 🎉</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Cleaning up...</span>
<span class="line"></span>
<span class="line">All done!  If you&#39;ve completed all of the above steps, your MariaDB</span>
<span class="line">installation should now be secure.</span>
<span class="line"></span>
<span class="line">Thanks for using MariaDB!</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>Udahan kita dengan “Sub-bab” diatas, phew! Akses MariaDB dengan ketik <code>mysql</code> dan boleh test dengan <code>show databases;</code></p><div class="hint-container tip"><p class="hint-container-title">💡 Protip!</p><p>Jangan lupa <code>show databases;</code> nya pakai semicolon <code>;</code></p></div><p>Seharusnya munculnya kurang lebih begini:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">MariaDB [(none)]&gt; show databases;</span>
<span class="line">+--------------------+</span>
<span class="line">| Database           |</span>
<span class="line">+--------------------+</span>
<span class="line">| information_schema |</span>
<span class="line">| mysql              |</span>
<span class="line">| performance_schema |</span>
<span class="line">| sys                |</span>
<span class="line">+--------------------+</span>
<span class="line">4 rows in set (0.000 sec)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,3)),n("li",null,[n("p",null,[e[1]||(e[1]=a("Buat User untuk MariaDB (Penting untuk ")),l(i,{to:"/debian/phpmyadmin.html"},{default:t(()=>e[0]||(e[0]=[a("phpMyAdmin")])),_:1}),e[2]||(e[2]=a(") ")),e[3]||(e[3]=n("code",null,"CREATE USER 'USERNAME'@'localhost' IDENTIFIED BY 'PASSWORD';",-1))]),e[4]||(e[4]=s(`<p>Seperti ini contohnya (User: ruben, Password: admin):</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">MariaDB [(none)]&gt; CREATE USER &#39;ruben&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;admin&#39;;</span>
<span class="line">Query OK, 0 rows affected (0.003 sec)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,2))]),n("li",null,[n("p",null,[e[6]||(e[6]=a("Buat Permission untuk User anda, agar anda mengubah isi MariaDB, baik dari MariaDB CLI atau ")),l(i,{to:"/debian/phpmyadmin.html"},{default:t(()=>e[5]||(e[5]=[a("phpMyAdmin")])),_:1}),e[7]||(e[7]=a(" Dengan command berikut ")),e[8]||(e[8]=n("code",null,"GRANT ALL ON *.* TO 'USERNAME'@'localhost';",-1))]),e[9]||(e[9]=s(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">MariaDB [(none)]&gt; GRANT ALL ON *.* TO &#39;ruben&#39;@&#39;localhost&#39;;</span>
<span class="line">Query OK, 0 rows affected (0.002 sec)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,1))]),e[11]||(e[11]=s(`<li><p>Kalo udah selesai, keluarnya pakai <code>quit</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">MariaDB [(none)]&gt; quit</span>
<span class="line">Bye</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1))])])}const b=d(u,[["render",c],["__file","mariadb.html.vue"]]),h=JSON.parse('{"path":"/debian/mariadb.html","title":"Instalasi MariaDB","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1704673854000},"filePathRelative":"debian/mariadb.md"}');export{b as comp,h as data};
