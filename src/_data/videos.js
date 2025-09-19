module.exports = [
  {
    title: "人生イチの３タテ",
    url: "https://www.youtube.com/embed/iqet0JFmnt8?si=BPbkxi5Cglj4Qv4h",
    id: "iqet0JFmnt8"  // 動画IDを追加
  },
  {
    title: "謎神プレイガンゲーム",
    url: "https://www.youtube.com/embed/7o4IzR7AWmU?si=BwPTlIq9KVew54Q4" ,
    id: "7o4IzR7AWmU"
  },
  {
    title: "深夜ペクス２(2022/07/06)",
    url: "https://www.youtube.com/embed/-90SkQTo0ao?si=g_n_bJ_UhlUzU1E0" ,
    id: "-90SkQTo0ao"
  },
 {
    title: " お気持ちツイートバトル一回戦",
    url: " https://www.youtube.com/embed/HEJ_bNuV3_A?si=DoemmlDazlcbTKvR" ,
    id: "HEJ_bNuV3_A"
  },
   {
    title: "これがvrchat ",
    url: "https://www.youtube.com/embed/sym_2ODgPG4?si=TvCOVb7tQpXP9yqv " ,
    id: "sym_2ODgPG4"
  },
  {
    title: " Ae練習としての一本目に作ったやつ",
    url: " https://www.youtube.com/embed/qdbOEFyS2xM?si=IKuhpe8p7aco3t6o" ,
    id: "qdbOEFyS2xM"
  },
 {
    title: "itoをやってるだけの動画",
    url: " https://www.youtube.com/embed/cMoaAmcAHOA?si=61oPcFEjKomrxJux" ,
    id: "cMoaAmcAHOA"
  },
 {
    title: "フレンド用に作ったblender講座",
    url: "https://www.youtube.com/embed/xusa4eVmJwU?si=s78NJC6G_eJXU4ef" ,
    id: "xusa4eVmJwU"
  },

  // 必要なだけ追加
].map(video => ({
  ...video,
  thumbnail: `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
}));
