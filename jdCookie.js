/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  '15537902076',//账号一ck
  '',//账号二ck,如有更多,依次类推
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`__jdv=122270672%7Cdirect%7C-%7Cnone%7C-%7C1618282855475; __jda=122270672.1618282855475707799879.1618282855.1618282855.1618282855.1; mba_muid=1618282855475707799879; __jdc=122270672; shshshfpa=891cd3a3-7d25-9a9b-a27b-de1c8715cd0e-1618282856; shshshfpb=b39Ftkqni2nLb1LYvkJVkfg%3D%3D; 3AB9D23F7A4B3C9B=PNTXAIN3IQO77GYJHOP3WQOYNKYFOIGCFL5LWGK6UPZXVHSZ4IPUS7I4V7NUG2BVDMPKQNO63KVYKDU4HCZ2IFWLJA; TrackerID=IR53oq9N6NkEgW1XbgUR-KEcNbZd4lq-2P2Qu9ohAZSHMZFklq905EnsGRZvvjV7rji0Axjlpxv7kuygOpxpRku0GtlxI7FjiOHbzn2SVic; pt_key=AAJgdQmDADBnBuKd1w1LqqxmczC2Hn4QBefnp03WPPP52tFhzJAuiBol5zrpJt5h2dGE_iRqo80; pt_pin=menghuanzhang; pt_token=fndto4w8; pwdt_id=menghuanzhang; sfstoken=tk01mc1d01bd2a8sMXgzeDM4THJkwlkt5oKPgzZxbV79zcogD5KWm52OjKBaUkFES5WAH8oBHrT6MEu0Kvhbb1nWP+L1; wxa_level=1; retina=0; cid=9; jxsid=16182828987086027518; webp=1; visitkey=57112942780664093; PPRD_P=UUID.1618282855475707799879; jxsid_s_u=https%3A//home.m.jd.com/myJd/newhome.action; sc_width=1920; shshshfp=c69ce1d00080897cdc7a768d529ef439; wqmnx1=MDEyNjM5Ni9qSmVzMjc5OG8wcztBaSBsby8wYTZzbjJRRCpI; __jdb=122270672.4.1618282855475707799879|1.1618282855; mba_sid=16182828554764654253718748766.4; __wga=1618282907585.1618282898931.1618282898931.1618282898931.2.1; jxsid_s_t=1618282907653; shshshsID=371bf02a6383f392b4493c99b6861923_4_1618282907794; __jd_ref_cls=MCommonBottom_My`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = process.env.JD_COOKIE.split();
  }
  console.log(`\n==================脚本执行来自 github action=====================\n`)
  console.log(`==================脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}=====================\n`)
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + 16 * 01 * 00 * 1000).toLocaleString()}=====================\n`)
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}
