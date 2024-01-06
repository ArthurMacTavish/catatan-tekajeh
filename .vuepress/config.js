import { defaultTheme } from '@vuepress/theme-default'

module.exports = {
    base: 'https://tkj.reubenhu.my.id/',
    title: 'Catatan TKJ',
    description: 'Catatan Khusus TKJ (AIJ/TLJ/WAN/ASJ)',

    head: [
        ['link', { rel: 'icon', href: '/hero.png' }],
    ],

    theme: defaultTheme({
        repo: 'https://github.com/ArthurMacTavish/catatan-tekajeh',
        repoLabel: "Kode Sumber (GitHub)",
        editLink: false,
        logo: '/hero.png',
        navbar: [
            { text: 'Halaman Depan', link: '/' },
            {
                text: 'Topik', children: [
                    { text: 'Debian', link: '/debian' },
                    { text: 'MikroTik', link: '/mikrotik' }
                ]
            },
            { text: 'Link Unduhan', link: '/downloads.html' },
            { text: 'Kontribusi', link: '/contribute' },
        ],
        notFound: ["Kamu Nyasar?", "Lho kok iso?", "Wise man said, Nano."],
        backToHome: 'Gih Balik Sono',

        sidebar: {
            '/debian': [
                {
                    text: "Sebelum Mulai, Ya Doa Dulu",
                    collapsible: false,
                    link: '/debian',
                    children: [],
                },
                '/debian/dhcp.html',
                '/debian/bind9.html'
            ],
        },
    }),
}