const URLlist = ['https://asiayo.com/zh-hk/view/tw/taichung-city/155',
'https://asiayo.com/zh-hk/view/tw/hualien-county/195',
'https://asiayo.com/zh-hk/view/tw/taipei-city/263',
'https://asiayo.com/zh-hk/view/tw/hualien-county/377',
'https://asiayo.com/zh-hk/view/tw/taichung-city/395',
'https://asiayo.com/zh-hk/view/tw/new-taipei-city/425',
'https://asiayo.com/zh-hk/view/tw/new-taipei-city/590',
'https://asiayo.com/zh-hk/view/tw/hualien-county/601',
'https://asiayo.com/zh-hk/view/tw/taipei-city/745',
'https://asiayo.com/zh-hk/view/tw/new-taipei-city/766',
'https://asiayo.com/zh-hk/view/tw/hualien-county/791',
'https://asiayo.com/zh-hk/view/tw/hualien-county/836',
'https://asiayo.com/zh-hk/view/tw/tainan-city/1066',
'https://asiayo.com/zh-hk/view/tw/tainan-city/1214',
'https://asiayo.com/zh-hk/view/tw/hualien-county/1287',
'https://asiayo.com/zh-hk/view/tw/kaohsiung-city/1375',
'https://asiayo.com/zh-hk/view/tw/taichung-city/1411',
'https://asiayo.com/zh-hk/view/tw/tainan-city/1439',
'https://asiayo.com/zh-hk/view/tw/taichung-city/1661',
'https://asiayo.com/zh-hk/view/tw/nantou-county/1710',
'https://asiayo.com/zh-hk/view/tw/hualien-county/1949',
'https://asiayo.com/zh-hk/view/tw/taipei-city/2045',
'https://asiayo.com/zh-hk/view/tw/yilan-county/2116',
'https://asiayo.com/zh-hk/view/tw/taichung-city/2170',
'https://asiayo.com/zh-hk/view/tw/hualien-county/2578',
'https://asiayo.com/zh-hk/view/tw/taitung-county/2781',
'https://asiayo.com/zh-hk/view/tw/taipei-city/3189',
'https://asiayo.com/zh-hk/view/tw/tainan-city/3214',
'https://asiayo.com/zh-hk/view/tw/hualien-county/3238',
'https://asiayo.com/zh-hk/view/tw/yilan-county/3378',
'https://asiayo.com/zh-hk/view/tw/taichung-city/3655',
'https://asiayo.com/zh-hk/view/tw/pingtung-county/3761',
'https://asiayo.com/zh-hk/view/tw/yilan-county/4255',
'https://asiayo.com/zh-hk/view/tw/tainan-city/4316',
'https://asiayo.com/zh-hk/view/tw/yilan-county/4985',
'https://asiayo.com/zh-hk/view/tw/yilan-county/5180',
'https://asiayo.com/zh-hk/view/tw/taipei-city/5460',
'https://asiayo.com/zh-hk/view/tw/kaohsiung-city/5481',
'https://asiayo.com/zh-hk/view/tw/taichung-city/5852',
'https://asiayo.com/zh-hk/view/tw/chiayi-city/5889',
'https://asiayo.com/zh-hk/view/tw/hualien-county/5916',
'https://asiayo.com/zh-hk/view/tw/yilan-county/6391',
'https://asiayo.com/zh-hk/view/tw/hualien-county/6527',
'https://asiayo.com/zh-hk/view/tw/kaohsiung-city/6585',
'https://asiayo.com/zh-hk/view/tw/hualien-county/7088',
'https://asiayo.com/zh-hk/view/tw/hualien-county/7436',
'https://asiayo.com/zh-hk/view/tw/taipei-city/7538',
'https://asiayo.com/zh-hk/view/tw/kaohsiung-city/7799',
'https://asiayo.com/zh-hk/view/tw/hualien-county/7880',
'https://asiayo.com/zh-hk/view/tw/kaohsiung-city/7977',
'https://asiayo.com/zh-hk/view/tw/nantou-county/8128',
'https://asiayo.com/zh-hk/view/tw/chiayi-county/8221',
'https://asiayo.com/zh-hk/view/tw/pingtung-county/8227',
'https://asiayo.com/zh-hk/view/tw/yilan-county/8247',
'https://asiayo.com/zh-hk/view/tw/yilan-county/8376',
'https://asiayo.com/zh-hk/view/tw/nantou-county/8521',
'https://asiayo.com/zh-hk/view/tw/yilan-county/8596',
'https://asiayo.com/zh-hk/view/tw/tainan-city/8824',
'https://asiayo.com/zh-hk/view/tw/hualien-county/9217',
'https://asiayo.com/zh-hk/view/tw/taipei-city/9444',
'https://asiayo.com/zh-hk/view/tw/tainan-city/9541',
'https://asiayo.com/zh-hk/view/tw/hualien-county/9785',
'https://asiayo.com/zh-hk/view/tw/taipei-city/10236',
'https://asiayo.com/zh-hk/view/tw/tainan-city/10373',
'https://asiayo.com/zh-hk/view/tw/yilan-county/10518',
'https://asiayo.com/zh-hk/view/tw/yilan-county/10529',
'https://asiayo.com/zh-hk/view/tw/taipei-city/11175',
'https://asiayo.com/zh-hk/view/tw/taichung-city/11274',
'https://asiayo.com/zh-hk/view/tw/yilan-county/11278',
'https://asiayo.com/zh-hk/view/tw/tainan-city/11929',
'https://asiayo.com/zh-hk/view/tw/taipei-city/11995',
'https://asiayo.com/zh-hk/view/tw/taipei-city/12086',
'https://asiayo.com/zh-hk/view/tw/taichung-city/12747',
'https://asiayo.com/zh-hk/view/tw/chiayi-county/13141',
'https://asiayo.com/zh-hk/view/tw/taipei-city/13423',
'https://asiayo.com/zh-hk/view/tw/kaohsiung-city/13605',
'https://asiayo.com/zh-hk/view/tw/kaohsiung-city/13672',
'https://asiayo.com/zh-hk/view/tw/taitung-county/13680',
'https://asiayo.com/zh-hk/view/tw/changhua-county/13713',
'https://asiayo.com/zh-hk/view/tw/kaohsiung-city/13729',
'https://asiayo.com/zh-hk/view/tw/kaohsiung-city/13732',
'https://asiayo.com/zh-hk/view/tw/kaohsiung-city/13734',
'https://asiayo.com/zh-hk/view/tw/kaohsiung-city/13736',
'https://asiayo.com/zh-hk/view/tw/hualien-county/13760',
'https://asiayo.com/zh-hk/view/tw/kaohsiung-city/13770',
'https://asiayo.com/zh-hk/view/tw/nantou-county/13791',
'https://asiayo.com/zh-hk/view/tw/kaohsiung-city/13799',
'https://asiayo.com/zh-hk/view/tw/taitung-county/13924',
'https://asiayo.com/zh-hk/view/tw/kinmen-county/14351',
'https://asiayo.com/zh-hk/view/tw/nantou-county/14702',
'https://asiayo.com/zh-hk/view/tw/hualien-county/14908',
'https://asiayo.com/zh-hk/view/tw/yilan-county/15566',
'https://asiayo.com/zh-hk/view/tw/hsinchu-city/15714',
'https://asiayo.com/zh-hk/view/tw/hualien-county/15849',
'https://asiayo.com/zh-hk/view/tw/yilan-county/15897',
'https://asiayo.com/zh-hk/view/tw/kaohsiung-city/16139',
'https://asiayo.com/zh-hk/view/tw/yilan-county/16318',
'https://asiayo.com/zh-hk/view/tw/tainan-city/16415',
'https://asiayo.com/zh-hk/view/tw/chiayi-city/16718',
'https://asiayo.com/zh-hk/view/tw/hualien-county/16806',
'https://asiayo.com/zh-hk/view/tw/taoyuan-city/17279',
'https://asiayo.com/zh-hk/view/tw/hsinchu-city/18758',
'https://asiayo.com/zh-hk/view/tw/tainan-city/18768',
'https://asiayo.com/zh-hk/view/tw/hualien-county/19143',
'https://asiayo.com/zh-hk/view/tw/yilan-county/19504',
'https://asiayo.com/zh-hk/view/tw/kaohsiung-city/19651',
'https://asiayo.com/zh-hk/view/tw/nantou-county/19925',
'https://asiayo.com/zh-hk/view/tw/hualien-county/20341',
'https://asiayo.com/zh-hk/view/tw/taitung-county/20695',
'https://asiayo.com/zh-hk/view/tw/pingtung-county/20729',
'https://asiayo.com/zh-hk/view/tw/yilan-county/21114',
'https://asiayo.com/zh-hk/view/tw/hualien-county/21209',
'https://asiayo.com/zh-hk/view/tw/yilan-county/21632',
'https://asiayo.com/zh-hk/view/tw/taitung-county/21918',
'https://asiayo.com/zh-hk/view/tw/hualien-county/22413',
'https://asiayo.com/zh-hk/view/tw/hualien-county/22522',
'https://asiayo.com/zh-hk/view/tw/tainan-city/22694',
'https://asiayo.com/zh-hk/view/tw/pingtung-county/23177',
'https://asiayo.com/zh-hk/view/tw/taitung-county/23315',
'https://asiayo.com/zh-hk/view/tw/nantou-county/24403',
'https://asiayo.com/zh-hk/view/tw/yilan-county/24485',
'https://asiayo.com/zh-hk/view/tw/penghu-county/25297',
'https://asiayo.com/zh-hk/view/tw/yilan-county/25322',
'https://asiayo.com/zh-hk/view/tw/tainan-city/25511',
'https://asiayo.com/zh-hk/view/tw/matsu/25735',
'https://asiayo.com/zh-hk/view/tw/yilan-county/26000',
'https://asiayo.com/zh-hk/view/tw/taipei-city/26274',
'https://asiayo.com/zh-hk/view/tw/kaohsiung-city/26480',
'https://asiayo.com/zh-hk/view/tw/hualien-county/26796',
'https://asiayo.com/zh-hk/view/tw/taichung-city/26820',
'https://asiayo.com/zh-hk/view/tw/hualien-county/27058',
'https://asiayo.com/zh-hk/view/tw/hualien-county/27537',
'https://asiayo.com/zh-hk/view/tw/tainan-city/27542',
'https://asiayo.com/zh-hk/view/tw/taitung-county/27547',
'https://asiayo.com/zh-hk/view/tw/miaoli-county/27699',
'https://asiayo.com/zh-hk/view/tw/penghu-county/28176',
'https://asiayo.com/zh-hk/view/tw/hualien-county/28904',
'https://asiayo.com/zh-hk/view/tw/kaohsiung-city/29287',
'https://asiayo.com/zh-hk/view/tw/kaohsiung-city/29515',
'https://asiayo.com/zh-hk/view/tw/yilan-county/29652',
'https://asiayo.com/zh-hk/view/tw/chiayi-city/29741',
'https://asiayo.com/zh-hk/view/tw/yilan-county/29918',
'https://asiayo.com/zh-hk/view/tw/chiayi-city/29958',
'https://asiayo.com/zh-hk/view/tw/taipei-city/29996',
'https://asiayo.com/zh-hk/view/tw/nantou-county/30112',
'https://asiayo.com/zh-hk/view/tw/taichung-city/30342',
'https://asiayo.com/zh-hk/view/tw/taipei-city/30598',
'https://asiayo.com/zh-hk/view/tw/new-taipei-city/30903',
'https://asiayo.com/zh-hk/view/tw/tainan-city/31063',
'https://asiayo.com/zh-hk/view/tw/hsinchu-county/31147',
'https://asiayo.com/zh-hk/view/tw/yilan-county/31206',
'https://asiayo.com/zh-hk/view/tw/hualien-county/31550',
'https://asiayo.com/zh-hk/view/tw/new-taipei-city/31747',
'https://asiayo.com/zh-hk/view/tw/taoyuan-city/32192',
'https://asiayo.com/zh-hk/view/tw/taoyuan-city/32206',
'https://asiayo.com/zh-hk/view/tw/taipei-city/32208',
'https://asiayo.com/zh-hk/view/tw/taoyuan-city/32233',
'https://asiayo.com/zh-hk/view/tw/taoyuan-city/32248',
'https://asiayo.com/zh-hk/view/tw/taichung-city/32569',
'https://asiayo.com/zh-hk/view/tw/taitung-county/33257',
'https://asiayo.com/zh-hk/view/tw/kaohsiung-city/33278',
'https://asiayo.com/zh-hk/view/tw/new-taipei-city/34304',
'https://asiayo.com/zh-hk/view/tw/new-taipei-city/34307',
'https://asiayo.com/zh-hk/view/tw/taipei-city/34312',
'https://asiayo.com/zh-hk/view/tw/hualien-county/34503',
'https://asiayo.com/zh-hk/view/tw/matsu/34692',
'https://asiayo.com/zh-hk/view/tw/taipei-city/35432',
'https://asiayo.com/zh-hk/view/tw/tainan-city/35463']


