# Instalasi Mail Server

## Prerequisites

1. Pastikan anda telah memiliki MariaDB dengan User yang memiliki izin full. Cek di [Instalasi MariaDB](/debian/mariadb.html) untuk mengetahui caranya.
2. Buat Database dengan nama `roundcube`
    
    Asumsi anda menggunakan PHPMyAdmin, klik Databases dan tambahkan database dengan nama `roundcube`
    
    ![Untitled](/assets/debian/mailserver/001_mailserver.png)
    
3. Pada Bind9, buat DNS Record baru, kalo belum boleh [cek disini](/debian/bind9.html). Kalo udah, tambah DNS Record berikut pada Forward File:
`mail    IN      A       192.168.25.1` (`192.168.25.1` ganti dengan IP mu ya 🙂)

## Let’s get Started!

1. Install dengan `apt install postfix`
2. Perhatikan Instalasi nya, letter to letter!
Pada Setelan Pertama, pilih Internet Site
    
    ![Untitled](/assets/debian/mailserver/002_mailserver.png)
    

1. Pada System Mail Name, masukan Domain Anda dengan Subdomain yang digunakan untuk Email.
Misalnya dalam kasus saya, A Record untuk Email saya adalah `mail`, atau `[mail.ruben.net](http://mail.ruben.net)` untuk Domain fullnya.
    
    ![Untitled](/assets/debian/mailserver/003_mailserver.png)
    
2. Install IMAP dan POP dengan `apt install courier-pop courier-imap`
3. Pada saat ditanya untuk Instalasi SSL Certificate, terserah sih Yes/No, tapi aku sih “iya-in aja”
    
    ![GIF](/assets/debian/mailserver/004_mailserver.gif)
    
4. Konfigur Postfix ulang dengan `dpkg-reconfigure postfix`
5. Untuk 2 Setelan pertama sama aja dengan Step 2a. dan 2b.
    Namun, pada step ini, masukin aja nama kalian.

    Singkatnya, fungsi ini untuk ngasih tahu Postfix untuk Forward email yang dikirim ke `root@` dan `postmaster@` ke nama yang kalian masukin.
    
    ![Untitled](/assets/debian/mailserver/005_mailserver.png)
    
6. Pas bagian ini, Entry Default udah bagus palingan Apex Domain (Domain tanpa Subdomain/Domain Root) dihapus saja, misalnya gini
    
    ![Untitled](/assets/debian/mailserver/006_mailserver.png)
    
    <aside>
    🗞️ What the Hell are you talking about Arthur?
    
    TL;DR Ini boleh diskip, atau baca nanti. Domain Apex adalah Domain tanpa Subdomain, seperti `[reubenhu.my.id](http://reubenhu.my.id)` (`.my.id` itu TLD atau sering disebut Domain Extensions, being `reubenhu` itu SLD)
    Dimana Domain dengan Subdomain, bentuknya seperti ini [`captainsoap.reubenhu.my.id`](http://captainsoap.reubenhu.my.id) (`captainsoap` adalah Subdomain nya)
    
    And yes, those domains, do exist!
    
    </aside>
    
7. Force synchronous updates on mail queue? Yes, we want that!
    
    ![Untitled](/assets/debian/mailserver/007_mailserver.png)
    
8. Untuk Addresses, masukin `127.0.0.0/8` serta Alamat IP anda, namun pakai IP Network (Gua sih `192.168.25.0/24`).
    
    ![IYA SCREENSHOTAN NYA SALAH, LUPA KOREKSI](/assets/debian/mailserver/008_mailserver.png)
    
    IYA SCREENSHOTAN NYA SALAH, LUPA KOREKSI
    
9. Nggak usah kasih limit. Jadi `0`-in aja
    
    ![Untitled](/assets/debian/mailserver/009_mailserver.png)
    
10. Yang plus-plus aja.
    
    ![Untitled](/assets/debian/mailserver/010_mailserver.png)
    
11. We speak `IPv4`
    
    ![Untitled](/assets/debian/mailserver/011_mailserver.png)
    
12. Udahan dengan GUI nya? Lanjut edit si `nano /etc/postfix/main.cf`
13. Dibaris paling terakhir tambah `home_mailbox = Maildir/` dan simpan aja filenya.
14. Buat Directory Maildir dengan `mkdir /etc/skel/Maildir`
15. Restart ketiga services tadi dengan `systemctl restart postfix && systemctl restart courier-*`
16. Gunakan `adduser namaUser`, buat 2 user untuk Mengirim/Menerima Email. Dan iya, password nya itu juga password emailnya.
    
    ![Untitled](/assets/debian/mailserver/012_mailserver.png)
    

## YA IYA DEH, UDAHAN NIH NYETELNYA.
Kita tes aja, shall we?

1. Ketik `telnet mail.domain.net 25` (Pakai Domain sendiri ya.)
Kalo hasilnya seperti ini:
    
    ```
    root@ruben:/etc/php/8.2# telnet mail.ruben.net 25
    Trying 192.168.25.1...
    Connected to mail.ruben.net.
    Escape character is '^]'.
    220 ruben.net ESMTP Postfix (Debian/GNU)
    ```
    
    Eng Ing Eng! Berhasil!
    
2. Lalu perhatikan dengan baik-baik, ketik satu persatu (Yang Dicetak Tebal itu Ketikan kita)
    1. Masukan Alamat Dari:
        
        ```
        **mail from:arthurmactavish@mail.ruben.net**
        250 2.1.0 Ok
        ```
        
    2. Masukan Alamat Ke:
        
        ```
        rcpt to:**russellbrooks@mail.ruben.net**
        250 2.1.5 Ok
        ```
        
    3. Masukan isi teks:
        
        ```
        **data**
        354 End data with <CR><LF>.<CR><LF>
        **Hello World
        .**
        250 2.0.0 Ok: queued as 10B371009B1
        ```
        
        <aside>
        🗞️ Intinya, ketik `data` dulu untuk mengisi pesan, dan ketik `.` (Literally titik) untuk menutup pesan
        
        </aside>
        
    4. Kalo udahan telnet nya, tutup dengan ketik:
        
        ```
        **quit**
        221 2.0.0 Bye
        Connection closed by foreign host.
        ```
        
    
3. Cek apakah Email Masuk? Ketik `telnet mail.domain.net 110`. Dan ketik berikut:
    1. Login ke Username dan Password (dalam kasus ini kita mau cek email `russellbrooks@mail.ruben.net`)
    Dalam kasus ini juga, passwordnya `Russell`
        
        ```
        user **russellbrooks**
        +OK Password required.
        pass **Russell**
        +OK logged in.
        ```
        
    2. Lalu ketik command berikut:
        
        ```
        **stat**
        +OK 1 461
        **retr 1**
        +OK 461 octets follow.
        Return-Path: <arthurmactavish@mail.ruben.net>
        X-Original-To: russellbrooks@mail.ruben.net
        Delivered-To: russellbrooks@mail.ruben.net
        Received: from unknown (unknown [192.168.25.1])
                by ruben.net (Postfix) with SMTP id 10B371009B1
                for <russellbrooks@mail.ruben.net>; Sat, 18 Nov 2023 21:16:58 +0700 (WIB)
        Message-Id: <20231118141722.10B371009B1@ruben.net>
        Date: Sat, 18 Nov 2023 21:16:58 +0700 (WIB)
        From: arthurmactavish@mail.ruben.net
        
        Hello World
        .
        ```
        
        Dalam kasus ini kita udah berhasil nih!
        
    3. Keluar dari Telnet ketik `quit` aja.

## Instalasi Webmail Server (Roundcube)

1. Install dengan apt install `roundcube`
2. Pilih Yes aja
    
    ![Untitled](/assets/debian/mailserver/013_mailserver.png)
    

1. Pada saat permintaan Password untuk MariaDB, masukan aja passwordnya suka-suka. Biar gampang, `admin` aja.
2. Edit file konfigurasi Roundcube dengan `nano /var/lib/roundcube/config/config.inc.php`
3. Semua setelan biarkan saja (Kecuali anda tahu apa yang anda lakukan), Kecuali:
    
    ```
    $config['smtp_host'] = 'localhost:25';
    $config['smtp_user'] = '';
    $config['smtp_pass'] = '';
    ```
    
    Tentunya `$config['product_name']` ini Misc, jadi suka-suka.
    
    ![Untitled](/assets/debian/mailserver/014_mailserver.png)
    
4. Jadi save aja, dan kita pindah ke Good Ol’ Apache2! Ketik `cd /etc/apache2/sites-available/`
5. Lalu Copy `000-default.conf` dengan `cp 000-default.conf mailserver.conf`
6. Disini udah konfigurasi `mailserver.conf` dengan `nano mailserver.conf`. Sebagai berikut:
    
    ```
    <VirtualHost *:80>
            # The ServerName directive sets the request scheme, hostname and port that
            # the server uses to identify itself. This is used when creating
            # redirection URLs. In the context of virtual hosts, the ServerName
            # specifies what hostname must appear in the request's Host: header to
            # match this virtual host. For the default virtual host (this file) this
            # value is not decisive as it is used as a last resort host regardless.
            # However, you must set it for any further virtual host explicitly.
            **ServerName mail.ruben.net**
            ServerAdmin webmaster@localhost
            **DocumentRoot /var/lib/roundcube/public_html/**
    
            # Available loglevels: trace8, ..., trace1, debug, info, notice, warn,
            # error, crit, alert, emerg.
            # It is also possible to configure the loglevel for particular
            # modules, e.g.
            #LogLevel info ssl:warn
    
            ErrorLog ${APACHE_LOG_DIR}/error.log
            CustomLog ${APACHE_LOG_DIR}/access.log combined
    
            # For most configuration files from conf-available/, which are
            # enabled or disabled at a global level, it is possible to
            # include a line for only one particular virtual host. For example the
            # following line enables the CGI configuration for this host only
            # after it has been globally disabled with "a2disconf".
            #Include conf-available/serve-cgi-bin.conf
    </VirtualHost>
    ```
    
    Intinya, tambah ServerName dengan Domain untuk Mail Server anda `[mail.domain.net](http://mail.domain.net)` dan DocumentRoot dengan Instalasi Roundcube anda, `/var/lib/roundcube/public_html/`
    
7. Nyalakan Situs dengan `a2ensite mailserver.conf` dan dilanjutkan dengan `systemctl restart apache2`
8. Et’ Voila! It works!
    
    ![Untitled](/assets/debian/mailserver/015_mailserver.png)