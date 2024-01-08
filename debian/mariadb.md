# Instalasi MariaDB

1. Install dulu MariaDB Server `apt install mariadb-server`
2. Jika sudah terinstall, gunakan perintah `mysql_secure_installation`. Lalu perhatikan baik-baik, letter to letter!

    - Ketika prompt ini muncul, ketik Password Root anda.
        
        ```
        NOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MariaDB
              SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!
        
        In order to log into MariaDB to secure it, we'll need the current
        password for the root user. If you've just installed MariaDB, and
        haven't set the root password yet, you should just press enter here.
        
        Enter current password for root (enter for none):
        ```
        
    - Pada Prompt ini, ketik `n` karena kita telah menggunakan password root.
        
        ```
        OK, successfully used password, moving on...
        
        Setting the root password or using the unix_socket ensures that nobody
        can log into the MariaDB root user without the proper authorisation.
        
        You already have your root account protected, so you can safely answer 'n'.
        
        Switch to unix_socket authentication [Y/n] n
        ```
        
    - Ini jawab `n` ada, toh udah ada root password juga
        
        ```
        You already have your root account protected, so you can safely answer 'n'.
        
        Change the root password? [Y/n] n
        ```
        
    - Kita hapus saja Anonymous User, karena… well… kita nggak pakai
        
        ```
        By default, a MariaDB installation has an anonymous user, allowing anyone
        to log into MariaDB without having to have a user account created for
        them.  This is intended only for testing, and to make the installation
        go a bit smoother.  You should remove them before moving into a
        production environment.
        
        Remove anonymous users? [Y/n] y
        ```
        
    - Untuk Remote Root Access, kita disallow aja
        
        ```
        Normally, root should only be allowed to connect from 'localhost'.  This
        ensures that someone cannot guess at the root password from the network.
        
        Disallow root login remotely? [Y/n] y
        ```
        
    - Untuk Test Database, kita hapus saja, selama database ini hanya digunakan untuk testing.
        
        ```
        By default, MariaDB comes with a database named 'test' that anyone can
        access.  This is also intended only for testing, and should be removed
        before moving into a production environment.
        
        Remove test database and access to it? [Y/n] y
        ```
        
    - Untuk Reload Privilage Table, yes we want that!
        
        ```
        Reloading the privilege tables will ensure that all changes made so far
        will take effect immediately.
        
        Reload privilege tables now? [Y/n] y
        ```
        
        Kalo udahan, dan disambut dengan kata ini, you’re done! 🎉
        
        ```
        Cleaning up...
        
        All done!  If you've completed all of the above steps, your MariaDB
        installation should now be secure.
        
        Thanks for using MariaDB!
        ```
        

3. Udahan kita dengan “Sub-bab” diatas, phew!
Akses MariaDB dengan ketik `mysql` dan boleh test dengan `show databases;`
    
    ::: tip 💡 Protip!
    
    Jangan lupa `show databases;` nya pakai semicolon `;`
    
    :::
    
    Seharusnya munculnya kurang lebih begini:
    
    ```
    MariaDB [(none)]> show databases;
    +--------------------+
    | Database           |
    +--------------------+
    | information_schema |
    | mysql              |
    | performance_schema |
    | sys                |
    +--------------------+
    4 rows in set (0.000 sec)
    ```
    
4. Buat User untuk MariaDB (Penting untuk [phpMyAdmin](/debian/phpmyadmin.md))
`CREATE USER 'USERNAME'@'localhost' IDENTIFIED BY 'PASSWORD';`
    
    Seperti ini contohnya (User: ruben, Password: admin):
    
    ```
    MariaDB [(none)]> CREATE USER 'ruben'@'localhost' IDENTIFIED BY 'admin';
    Query OK, 0 rows affected (0.003 sec)
    ```
    
5. Buat Permission untuk User anda, agar anda mengubah isi MariaDB, baik dari MariaDB CLI atau [phpMyAdmin](/debian/phpmyadmin.md)
Dengan command berikut `GRANT ALL ON *.* TO 'USERNAME'@'localhost';`
    
    ```
    MariaDB [(none)]> GRANT ALL ON *.* TO 'ruben'@'localhost';
    Query OK, 0 rows affected (0.002 sec)
    ```
    
6. Kalo udah selesai, keluarnya pakai `quit`
    
    ```
    MariaDB [(none)]> quit
    Bye
    ```