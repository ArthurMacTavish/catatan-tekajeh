# Instalasi phpMyAdmin

::: tip Ini opsional

Tapi sangat direkomendasikan, biar nggak kesiksa Command Line.

![Kesiksa Ceritanya](https://media.giphy.com/media/RfvBXK1m8Kcdq/giphy-downsized-large.gif)

:::

## Prerequisites
- Apache2 (gunakan perintah `apt install apache2`)
- [PHP Versi Terbaru](#instalasi-php)

## Instalasi PHP

1. Install dulu PHP dengan `apt install php libapache2-mod-php`
2. Agar Timezone sesuai dengan lokasi anda sekarang ini, kita harus menyetel Timezone dengan lokasi kita sekarang
Ketik `nano /etc/php` lalu tekan **Tab** pada keyboard, dilanjutkan dengan `apache2/php.ini`
    
    ![/assets/debian/phpmyadmin/001_phpmyadmin.gif](/assets/debian/phpmyadmin/001_phpmyadmin.gif)
    
    ::: tip EDIT (18 Nov 2023)
    
    Ternyata bisa juga ketik `nano /etc/php/*/apache2/php.ini`
    
    :::

3. Cari Timezone dengan menggunakan `Ctrl + W` dan diganti, untuk WIB, itu `“Asia/Jakarta"`, untuk negara lain, [cek di sini](https://www.php.net/manual/en/timezones.php)
    
    ![/assets/debian/phpmyadmin/002_phpmyadmin.gif](/assets/debian/phpmyadmin/002_phpmyadmin.gif)
    
## Instalasi phpMyAdmin

1. Ketik `apt install phpmyadmin`
2. Instalasi phpMyAdmin menggunakan "agak-agak GUI ya"
    1. Pilih instalasi dengan apache2
        
        ![Untitled](/assets/debian/phpmyadmin/003_phpmyadmin.png)
        
    2. Pilih Yes aja pada Configure Database.
        
        ![Untitled](/assets/debian/phpmyadmin/004_phpmyadmin.png)
        
    3. Untuk Password, gunakan password sesuka hati. For the sake of simplicity, kita samakan dengan root.
    Lalu anda akan diminta konfirmasi password ulang
        
        ![Untitled](/assets/debian/phpmyadmin/005_phpmyadmin.png)
        
3. Buka `http://[IP]/phpmyadmin/` and it looks like this, you’re good to go.
    
    ![Untitled](/assets/debian/phpmyadmin/006_phpmyadmin.png)
    
    ::: warning Tapi kalo tampilannya seperti ini:
    
    ![Untitled](/assets/debian/phpmyadmin/007_phpmyadmin.png)
    
    PHP nya belum terinstall (atau error), [install dulu gih](#instalasi-php).
    
    :::
    
4. Untuk kredensial login ke Dashboard PHPMyAdmin, gunakan Username dan Password yang dibuat pada saat [pembuatan user di MariaDB](/debian/mariadb.html#:~:text=Buat%20User%20untuk%20MariaDB%20(Penting%20untuk%20phpMyAdmin)%20CREATE%20USER%20%27USERNAME%27%40%27localhost%27%20IDENTIFIED%20BY%20%27PASSWORD%27%3B).
    
    ![Untitled](/assets/debian/phpmyadmin/008_phpmyadmin.png)