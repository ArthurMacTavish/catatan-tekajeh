# Instalasi Wordpress

## Prerequisites

1. User MariaDB dengan izin full. Cek di [Instalasi MariaDB](/assets/mariadb.html) untuk mengetahui caranya.
2. Buat Database dengan nama `wordpressdb`
    
    Asumsi anda menggunakan PHPMyAdmin, klik Databases dan tambahkan database dengan nama `wordpressdb`
    
    ![Recording 2023-11-18 132848.gif](/assets/wordpress/001_wordpress.gif)
    
    Atau kalo masih pakai Terminal ketik dua perintah berikut:
    
    1. Ketik `mysql` (Asumsi anda masuk ke Debian dengan akses root)
    2. Lalu dilanjutkan dengan `CREATE DATABASE wordpressdb;`
    3. Lalu lanjutkan dengan `FLUSH PRIVILEGES;`
    4. Dan `quit`

3. `wget` dan `unzip` (Jalankan `apt install wget unzip`)

## Instalasi Wordpress

1. Ubah folder terminal ke `cd /var/www/html` (`html` diganti dengan Folder Situs Anda)
2. Download Wordpress dengan perintah `wget https://wordpress.org/latest.zip`
    
    ![Recording 2023-11-18 1343032.gif](/assets/wordpress/002_wordpress.gif)
    
    Udahan downloadnya, lanjut!
    
3. Unzip filenya dengan `unzip latest.zip`
    
    ![Recording 2023-11-18 161603.gif](/assets/wordpress/003_wordpress.gif)
    
4. (Opsional, alias boleh di skip) Hapus file Wordpress zip nya dengan `rm latest.zip`
5. Buka situs anda dengan URL `[IP atau Domain Server anda]/wordpress`
    
    ![Untitled](/assets/wordpress/004_wordpress.png)