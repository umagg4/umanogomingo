module.exports = [
  {
    title: "深夜テンションペクス(2022/06/26)",
    url: "https://www.youtube.com/embed/6iOewpMNSuM?si=VdR0rk3xP-jjckzU" ,
    id: "6iOewpMNSuM"  // 動画IDを追加
  },
  {
    title: "わやく飯集会(2025/06/01)",
    url: "https://www.youtube.com/embed/2chMfMqIOoc?si=QTA7OKQLIMMe80Fo"  ,
    id: "2chMfMqIOoc"
  },
  {
    title: "loud(2024/03/11)",
    url:"https://www.youtube.com/embed/BoPhahbu0Xw?si=eBZw-M3iP9oPyV_d" ,
    id: "BoPhahbu0Xw"
  },
 {
    title: "お気持ちツイートバトル1回戦(2025/08/15)",
    url: " https://www.youtube.com/embed/HEJ_bNuV3_A?si=DoemmlDazlcbTKvR" ,
    id: "HEJ_bNuV3_A"
  },
   {
    title: "これがvrchat(2023/03/01)",
    url: "https://www.youtube.com/embed/sym_2ODgPG4?si=TvCOVb7tQpXP9yqv " ,
    id: "sym_2ODgPG4"
  },
  {
    title: "Ae練習で作ったヨヅリナ(2019/08/17)",
    url: " https://www.youtube.com/embed/qdbOEFyS2xM?si=IKuhpe8p7aco3t6o" ,
    id: "qdbOEFyS2xM"
  },
 {
    title: "itoをやってるだけの動画(2020/03/08)",
    url: " https://www.youtube.com/embed/cMoaAmcAHOA?si=61oPcFEjKomrxJux" ,
    id: "cMoaAmcAHOA"
  },
 {
    title: "blenderウェイトペイントやり方を雑に説明してる動画(2022/06/30)",
    url: "https://www.youtube.com/embed/xusa4eVmJwU?si=s78NJC6G_eJXU4ef" ,
    id: "xusa4eVmJwU"
  },

  // 必要なだけ追加
].map(video => ({
  ...video,
  thumbnail: `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
}));
