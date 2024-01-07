# Instalasi BIND9 DNS Server.

Ya ini drama yang berkepanjangan, Thanks to some generious people on the internet dan DigitalOcean, kita ketemu obat terbaik untuk drama ini.

::: warning Sebelum kita mulai, kita asumsi berbagai hal.
1. IP DNS anda serta IP Server anda `100.100.25.1/24` (Network `100.100.25` dan Host nya `1`)
2. Anda sudah Update Debian dengan `apt update && apt upgrade`
3. Anda login sebagai `root`
4. Hostname saya adalah `ruben.net`, jadi Hostname kalian berbeda.
:::

1. Install Bind9 terlebih dahulu bersama teman-temannya, `apt install bind9 bind9utils bind9-doc`
2. Sudah install, go ahead dan ganti directory dengan command `cd /etc/bind`
3. Jalankan tiga perintah ini

```bash
root@ruben:/etc/bind$ mkdir zones # Membuat folder **zones**
root@ruben:/etc/bind$ cp db.local zones/forward.db # Copy file forward ke folder **zones**
root@ruben:/etc/bind$ cp db.127 zones/rev.db # Copy file reverse ke folder **zones

# Alasan kita membuat folder khusus agar makin rapi aja hehe.**
```

1. Buka file Forward dengan `nano zones/forward.db` dan buat perubahan sebagai berikut
    - Ubah `localhost.` menjadi `[ruben.net](http://ruben.net)` (atau hostname anda)
    - Hapus line `@       IN      AAAA    ::1`
    - Ubah `127.0.0.1` menjadi IP Server anda (misalnya `100.100.25.1`)
    
    Jadi seperti ini:
    
    ```bash
    ;
    ; BIND data file for local loopback interface
    ;
    $TTL    604800
    @       IN      SOA     ruben.net. root.ruben.net. (
                                  2         ; Serial
                             604800         ; Refresh
                              86400         ; Retry
                            2419200         ; Expire
                             604800 )       ; Negative Cache TTL
    ;
    @       IN      NS      ruben.net.
    @       IN      A       192.168.25.1
    ```
    
2. Setelah berurusan dengan file Forward yang sungguh meresahkan, mari kita urus file Reverse, buka dengan `nano zones/rev.db` dan buat perubahan sebagai berikut
    - Ubah `localhost.` menjadi `[ruben.net](http://ruben.net)` (atau hostname anda)
    - Ganti angka 1.0.0 di `1.0.0   IN      PTR     localhost.` menjadi `1`
    
    ::: tip
    🌍 Basically, [Localhost](http://Localhost) (`127.0.0.1`) memiliki Subnet 255.0.0.0
    
    `127` itu Network Section, `0.0.1` itu Host Section
    
    More Less like this
    
    `172. 0 . 0 . 1` 
    
    `255. 0 . 0 . 0` 
    
    Jadi angka `25.168.192` yang saya gunakan itu Network Section, kalo `1` itu Host Section. (Karena saya pakai 255.255.255.0 atau /24 di Notasi CIDR)
    
    Hopefully, it clears up some confusion.
    :::
    
    Hasilnya seperti ini:
    
    ```bash
    ;
    ; BIND reverse data file for local loopback interface
    ;
    $TTL    604800
    @       IN      SOA     ruben.net. root.ruben.net. (
                                  1         ; Serial
                             604800         ; Refresh
                              86400         ; Retry
                            2419200         ; Expire
                             604800 )       ; Negative Cache TTL
    ;
    @       IN      NS      ruben.net.
    1       IN      PTR     ruben.net.
    ```
    
3. Saatnya kita bikin dua-dua file ini useful, buka file `nano /etc/bind/named.conf.local` dan ketik berikut:
    
    ```bash
    zone "ruben.net" { # Ganti Domain nya dengan domain kamu!
      type master;
      file "/etc/bind/zones/forward.db";
    };
    
    zone "25.168.192.in-addr.arpa" { # 25.100.100 itu pada dasarnya Network Section (100.100.25) tapi dibalik
      type master;
      file "/etc/bind/zones/rev.db";
    };
    ```
    
    ::: tip 🤔 si `named.conf.default-zones` kok nganggur?
    
    Ternyata `named.conf.default-zones` tidak boleh sama dengan `named.conf.local`
    Stupid Mistakes.
    
    :::
    

1. After enough of that, restart Bind9 Service dengan cara `systemctl restart bind9`
    
    ::: tip ⌨️ Error bang.
    
    Perintah `named -g` bisa membantu mencari Error seperti typo, mudah”an membantu 🙂

    :::  
    
2. Terakhir, selama enp0s8 itu Static, maka DNS Entry harus diedit juga, dengan cara nano `/etc/network/interfaces` dan ubah entry enp0s8 seperti ini, DING!
    
    ```bash
    auto enp0s8
    iface enp0s8 inet static
            address 100.100.25.1/24
            nameserver 100.100.25.1 # DNS nya 100.100.25.1 (Server Bind9)
    ```
    
    Lalu restart dengan `service networking restart`
    

1. Sekarang, kita tes DNS Server kita dengan menggunakan nslookup, like this `nslookup ruben.net`. Jika hasilnya seperti ini maka aman:
    
    ```bash
    Server:  ruben.net
    Address:  100.100.25.1
    
    Name:    ruben.net
    Address:  100.100.25.1
    ```
    

Tapi kalo seperti ini berarti salah, coba cabut dulu internet nya tuh.

1. Boleh test di komputer, misalnya untuk server web Apache.

## Troubleshoot Section

### IP nya nggak benar bang di Host (dalam dan luar VM).

Biasanya DNS yang didapatkan dari DHCP bisa mengalami “sedikit” gangguan, oleh karena itu, putuskan internet, simpel kan?

### IP nya nggak benar bang di Host (luar VM).

Kalo anda ingat dari episode [DHCP Server](/debian/dhcp.md#setel-isc-dhcp-server), kita bisa mengatur DNS Server di `option domain-name-servers`, Name Servers itu istilah lain dari DNS Server. Pastikan IP nya sama dengan DHCP Server, kalo tidak, bisa juga specify manual dengan cara berikut (Host Only Adaptor)

![Pengaturan DNS Server](/assets/debian/bind9/001.png)

Pengaturan DNS Server

### Apache nggak bisa di Web Browser

Coba dulu pakai IP Address untuk akses, kalo bisa ada kemungkinan fitur Browser seperti Secure DNS dapat menyebabkan gangguan terhadap DNS Server, untuk mematikannya, berikut caranya:

1. Microsoft Edge
Buka Settings → Privacy, search, and services →Security → Disable **Use secure DNS to specify how to lookup the network address for websites**
    
    ![Untitled](/assets/debian/bind9/002.png)
    
2. Google Chrome (Brave juga sama)
Buka Settings → Privacy and Security → Security → Disable **Use secure DNS**
    
    ![Untitled](/assets/debian/bind9/003.png)