---
sidebar: false
lastUpdated: false
---
# Kontribusi demi masa depan yang lebih baik

Ada beberapa cara untuk kontribusi ke halaman ini.

[[TOC]]

## Kontribusi dengan Link Notion

Buat Notion Page dan bagikan ke kami dengan Web Publish. Berikut caranya:

1. Setelah membuat Page di Notion, klik Share -> Publish

    ![](/assets/contribute/001_contribute.jpg)

2. Jika anda teman saya, kirim aja link ke WA. Atau kirim ke [inbox@reubenhu.my.id](mailto:inbox@reubenhu.my.id)

## Kontribusi dengan file Markdown

Buat Markdown file dengan aplikasi yang anda inginkan, seperti [Obsidian](https://obsidian.md/) atau [Visual Studio Code](https://code.visualstudio.com/).

Jika anda ingin belajar Markdown, situs seperti [Markdown Guide](https://www.markdownguide.org/) got you covered.

Agar mempermudah kami, ada baiknya struktur file Markdown, dibuat sebagai berikut.

``` sh
├── assets
|   └── NamaKategori # Jika ada, kalo nggak ada boleh skip
|       └── NamaTutorial
|           ├── 001_NamaTutorial.jpg
|           ├── 002_NamaTutorial.jpg
|           ├── 003_NamaTutorial.jpg
|           ├── 004_NamaTutorial.jpg
|           └── # Dan Seterusnya
└── NamaTutorial.md
```

## Kontribusi langsung ke GitHub

Kalo anda ingin langsung kontribusi dengan GitHub, maka anda dapat men-"Fork" projek kami. Ada beberapa hal yang anda perlu siapkan sebelum memulai.

- Akun GitHub
- Aplikasi [CLI Git](https://git-scm.com/downloads/)
- Code Editor seperti [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js (Versi 18.16.0 atau yang lebih baru)](https://nodejs.org/en/download)
- [Yarn Package Manager](https://classic.yarnpkg.com/en/docs/install) (Instal setelah Node.js terinstal dengan `npm install --global yarn`)

::: tip Catatan

Tutorial ini mengasumsikan anda menggunakan Git CLI. Jika anda ingin Git GUI, Visual Studio Code memiliki fungsi Git bawaan.

:::

::: danger Ada baiknya untuk tidak memodifikasi ".github/workflows/Build-Site.yml" dan branch "live-site

Memodifikasi file ini dapat menyebabkan situs tidak terupdate/berfungsi.

![](https://media.giphy.com/media/FWZ1MF7W5sYKZ0Ysho/giphy.gif)

:::

### Fork Projek GitHub

Buka link berikut [https://github.com/ArthurMacTavish/catatan-tekajeh/fork](https://github.com/ArthurMacTavish/catatan-tekajeh/fork)

Pada halaman fork, perhatikan parameter berikut:

- Pastikan **Owner** reponya benar (Yaitu Anda)
- **Repository Name** boleh sama ataupun "suka-suka"
- **Description** itu opsional
- Centang opsi **Copy the `main` branch only**

Kurang lebih seperti ini:

![](/assets/contribute/002_contribute.jpg)

Klik **Create Fork**~