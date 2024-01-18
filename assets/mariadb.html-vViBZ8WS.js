import{_ as l,r as t,o as r,c as o,a as e,b as a,d as s,w as d,e as n}from"./app-DzH5ulrQ.js";const u={},c=e("h1",{id:"instalasi-mariadb",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#instalasi-mariadb","aria-hidden":"true"},"#"),a(" Instalasi MariaDB")],-1),v=n(`<li><p>Install dulu MariaDB Server <code>apt install mariadb-server</code></p></li><li><p>Jika sudah terinstall, gunakan perintah <code>mysql_secure_installation</code>. Lalu perhatikan baik-baik, letter to letter!</p><ul><li><p>Ketika prompt ini muncul, ketik Password Root anda.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>NOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MariaDB
      SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!

In order to log into MariaDB to secure it, we&#39;ll need the current
password for the root user. If you&#39;ve just installed MariaDB, and
haven&#39;t set the root password yet, you should just press enter here.

Enter current password for root (enter for none):
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Pada Prompt ini, ketik <code>n</code> karena kita telah menggunakan password root.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>OK, successfully used password, moving on...

Setting the root password or using the unix_socket ensures that nobody
can log into the MariaDB root user without the proper authorisation.

You already have your root account protected, so you can safely answer &#39;n&#39;.

Switch to unix_socket authentication [Y/n] n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Ini jawab <code>n</code> ada, toh udah ada root password juga</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>You already have your root account protected, so you can safely answer &#39;n&#39;.

Change the root password? [Y/n] n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Kita hapus saja Anonymous User, karena… well… kita nggak pakai</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>By default, a MariaDB installation has an anonymous user, allowing anyone
to log into MariaDB without having to have a user account created for
them.  This is intended only for testing, and to make the installation
go a bit smoother.  You should remove them before moving into a
production environment.

Remove anonymous users? [Y/n] y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Untuk Remote Root Access, kita disallow aja</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Normally, root should only be allowed to connect from &#39;localhost&#39;.  This
ensures that someone cannot guess at the root password from the network.

Disallow root login remotely? [Y/n] y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Untuk Test Database, kita hapus saja, selama database ini hanya digunakan untuk testing.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>By default, MariaDB comes with a database named &#39;test&#39; that anyone can
access.  This is also intended only for testing, and should be removed
before moving into a production environment.

Remove test database and access to it? [Y/n] y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Untuk Reload Privilage Table, yes we want that!</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Reloading the privilege tables will ensure that all changes made so far
will take effect immediately.

Reload privilege tables now? [Y/n] y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Kalo udahan, dan disambut dengan kata ini, you’re done! 🎉</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Cleaning up...

All done!  If you&#39;ve completed all of the above steps, your MariaDB
installation should now be secure.

Thanks for using MariaDB!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>Udahan kita dengan “Sub-bab” diatas, phew! Akses MariaDB dengan ketik <code>mysql</code> dan boleh test dengan <code>show databases;</code></p><div class="custom-container tip"><p class="custom-container-title">💡 Protip!</p><p>Jangan lupa <code>show databases;</code> nya pakai semicolon <code>;</code></p></div><p>Seharusnya munculnya kurang lebih begini:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MariaDB [(none)]&gt; show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.000 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,3),m=e("code",null,"CREATE USER 'USERNAME'@'localhost' IDENTIFIED BY 'PASSWORD';",-1),b=n(`<p>Seperti ini contohnya (User: ruben, Password: admin):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MariaDB [(none)]&gt; CREATE USER &#39;ruben&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;admin&#39;;
Query OK, 0 rows affected (0.003 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=e("code",null,"GRANT ALL ON *.* TO 'USERNAME'@'localhost';",-1),h=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MariaDB [(none)]&gt; GRANT ALL ON *.* TO &#39;ruben&#39;@&#39;localhost&#39;;
Query OK, 0 rows affected (0.002 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),g=n(`<li><p>Kalo udah selesai, keluarnya pakai <code>quit</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MariaDB [(none)]&gt; quit
Bye
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1);function x(y,k){const i=t("RouterLink");return r(),o("div",null,[c,e("ol",null,[v,e("li",null,[e("p",null,[a("Buat User untuk MariaDB (Penting untuk "),s(i,{to:"/debian/phpmyadmin.html"},{default:d(()=>[a("phpMyAdmin")]),_:1}),a(") "),m]),b]),e("li",null,[e("p",null,[a("Buat Permission untuk User anda, agar anda mengubah isi MariaDB, baik dari MariaDB CLI atau "),s(i,{to:"/debian/phpmyadmin.html"},{default:d(()=>[a("phpMyAdmin")]),_:1}),a(" Dengan command berikut "),p]),h]),g])])}const f=l(u,[["render",x],["__file","mariadb.html.vue"]]);export{f as default};
