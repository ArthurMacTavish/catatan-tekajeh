# Instalasi DHCP Server

## Dasar Fundamental DHCP Server dan Client.

Dasarnya DHCP Client adalah bagian yang berfungsi untuk **“mendapatkan”** IP Address, Subnet, DNS, Gateway, dkk. 
Berbeda dengan DHCP Server yang **“memberikan”**. Seperti yang kita bisa tebak, DHCP Server dan Client itu… minyak dan air, tak bisa nyampur.

## Solusi!

### Setel Salah Satu Port DHCP Server ke Static

Dalam file `/etc/network/interfaces`, interface yang akan digunakan untuk DHCP Server harus IP static.

::: tip Catatan Penting
Kita Asumsikan bahwa `enp0s8` dengan IP Address `192.168.25.1/24`
:::

Solusi ini lumayan simpel, misalkan kita pakai `enp0s8` untuk DHCP Server:

1. Ketik `nano /etc/network/interfaces`

2. Ganti `iface enp0s8 inet dhcp` misal ke:
    
    ```bash
    iface enp0s8 inet static
    	address 100.100.25.1/24
    ```
    
3. Gunakan perintah `service networking restart`

### Setel ISC DHCP Server

1. Ketik perintah berikut `apt update && apt upgrade && apt install isc-dhcp-server`

2. Seperti yang kita tahu, Error DHCP akan muncul, biarkan sahaja.

3. Ketik perintah nano `/etc/dhcp/dhcpd.conf` dan ketik seperti ini
    
    ```bash
    subnet 192.168.25.0 netmask 255.255.255.0 {
      range 192.168.25.2 192.168.25.254;
      option domain-name-servers 192.168.25.1;
      option domain-name "sukasukamu.net";
      option routers 192.168.25.1;
      option broadcast-address 192.168.25.255;
      default-lease-time 600;
      max-lease-time 7200;
    }
    ```
    
4. Lalu `Ctrl+X` dan `Y`. Dan setel Interface, misalnya ini kan `enp0s8`. Buka `nano /etc/default/isc-dhcp-server` dan isi `INTERFACESv4="enp0s8"`

5. Test. Dalam kasus ini, saya akan Test dengan `enp0s8` bridged ke Laptop Ethernet saya dan disambungkan ke PC. (Bisa juga di test di VM dan Host)

### Testing!

Jadi gw test, di VM, `enp0s8` disetel ke Bridged sebagai berikut

![Setelan Jaringan di VirtualBox](/assets/debian/dhcp/001.png)

Lalu ini hasilnya setelah di sambungkan

![DHCP di macOS Ventura](/assets/debian/dhcp/002.png)