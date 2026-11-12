import fs from 'node:fs';
import crypto from 'node:crypto';
const dictionary=JSON.parse(fs.readFileSync('sources/dictionary.json','utf8'));
const syllabus=JSON.parse(fs.readFileSync('sources/syllabus.json','utf8'));
const viet=new Map();
for(const line of fs.readFileSync('sources/CVDICT.u8','utf8').split('\n')){
 const m=line.match(/^(\S+) (\S+) \[([^\]]+)\] \/(.*)\/$/);if(!m)continue;
 const a=viet.get(m[2])||[];a.push({traditional:m[1],numeric:m[3],meanings:m[4].split('/').filter(Boolean)});viet.set(m[2],a);
}
const hv=new Map();
for(const line of fs.readFileSync('sources/Unihan_Readings.txt','utf8').split('\n')){
 const m=line.match(/^U\+([\dA-F]+)\tkVietnamese\t(.+)$/);if(m)hv.set(String.fromCodePoint(parseInt(m[1],16)),m[2].trim().split(/\s+/));
}
const norm=s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z]/g,'');
const sino=new Map();
for(const line of fs.readFileSync('sources/hanviet.csv','utf8').split('\n')){
 const m=line.match(/^([^,]+),"?(\[.*\])"?,([^,\r]+)$/);if(!m)continue;
 const a=[...m[2].matchAll(/'([^']+)'/g)].map(x=>x[1]);if(!a.length)continue;
 const variants=sino.get(m[1])||{};variants[m[3]]=a;sino.set(m[1],variants);
}
const tones=s=>/\d/.test(s)?(s.match(/[1-4]/g)||[]).join(''):[...s.normalize('NFD')].map(c=>({'̄':'1','́':'2','̌':'3','̀':'4'}[c]||'')).join('');
const hvOverrides={'子':'tử','爸':'ba','吧':'ba','吗':'ma','媽':'ma','她':'tha','你':'nhĩ','嗯':'ân','媒':'môi','源':'nguyên','吃':'ngật','哪':'ná','這':'giá'};
const dmap=new Map(dictionary.map(w=>[w.simplified,w]));
const records=syllabus.filter(w=>Number(w.level)<=6).map(w=>{
 const d=dmap.get(w.hanzi), candidates=viet.get(w.hanzi)||[];
 const matched=candidates.filter(v=>norm(v.numeric)===norm(w.pinyin)&&tones(v.numeric)===tones(w.pinyin));
 const common=matched.filter(v=>!/[A-Z]/.test(v.numeric));
 const form=d?.forms.find(f=>norm(f.transcriptions.pinyin)===norm(w.pinyin)&&tones(f.transcriptions.pinyin)===tones(w.pinyin))||d?.forms.find(f=>norm(f.transcriptions.pinyin)===norm(w.pinyin))||d?.forms[0];
 const candidateScore=v=>(/^(biến thể|dị thể|cách viết khác|cách viết cổ|variant)/i.test(v.meanings[0])?1000:0)+(v.traditional!==form?.traditional?10:0)+(/[A-Z]/.test(v.numeric)?100:0);
 const selected=(common.length?common:matched).sort((a,b)=>candidateScore(a)-candidateScore(b))[0]||(candidates.length===1?candidates[0]:null);
 const traditional=form?.traditional||selected?.traditional||w.hanzi;
 const numeric=(selected?.numeric||form?.transcriptions.numeric||'').toLowerCase().split(/\s+/);
 const readings=[...traditional].map((char,index)=>{const options=sino.get(char),p=numeric[index];return options?.[p]?.join('/')||options?.['*']?.join('/')||hvOverrides[char]||(options?[...new Set(Object.values(options).flat())].join('/'):null)||hv.get(char)?.join('/')||'—';}).join(' ');
 return {id:w.id,level:Number(w.level),hanzi:w.hanzi,pinyin:w.pinyin,pos:w.part_of_speech,
 hanviet:readings,vi:selected?.meanings.join('; ')||'',en:form?.meanings.join('; ')||'',traditional,sourcePage:w.source_pdf_page};
});
const overrides={'爱':'yêu; yêu thích','八':'tám','爸爸':'bố; ba','吧':'trợ từ ngữ khí dùng để đề nghị hoặc phỏng đoán','白天':'ban ngày','百':'trăm','半':'một nửa; rưỡi','包子':'bánh bao','杯子':'cốc; ly','北京':'Bắc Kinh','本':'lượng từ cho sách, vở; gốc; vốn','比':'so với','别':'đừng; khác','不':'không','菜':'món ăn; rau','茶':'trà','吃':'ăn','出租车':'taxi','打电话':'gọi điện thoại','大':'to; lớn','的':'trợ từ biểu thị sở hữu hoặc bổ nghĩa','都':'đều; tất cả','读':'đọc','对不起':'xin lỗi','多':'nhiều','多少':'bao nhiêu','儿子':'con trai','二':'hai','饭店':'nhà hàng; khách sạn','个':'lượng từ thông dụng','工作':'làm việc; công việc','狗':'chó','汉语':'tiếng Hán; tiếng Trung','好':'tốt; khỏe','号':'số; ngày (trong tháng)','喝':'uống','和':'và; cùng với','很':'rất; khá','后面':'phía sau','回':'trở về; lần','会':'biết (kỹ năng); sẽ','几':'mấy; vài','家':'nhà; gia đình','叫':'gọi; tên là','今天':'hôm nay','九':'chín','开':'mở; lái','看':'xem; nhìn; đọc','看见':'nhìn thấy','块':'đồng (tiền); miếng','来':'đến','老师':'giáo viên','了':'trợ từ chỉ sự hoàn thành hoặc thay đổi','冷':'lạnh','里':'bên trong','六':'sáu','妈妈':'mẹ','吗':'trợ từ nghi vấn có/không','买':'mua','猫':'mèo','没':'không; chưa','没关系':'không sao','米饭':'cơm','明天':'ngày mai','名字':'tên','哪':'nào; đâu','哪儿':'ở đâu','那':'kia; đó','呢':'trợ từ hỏi tiếp hoặc chỉ trạng thái','能':'có thể; có khả năng','你':'bạn','年':'năm','女儿':'con gái','朋友':'bạn bè','漂亮':'đẹp; xinh','苹果':'táo','七':'bảy','钱':'tiền','前面':'phía trước','请':'mời; xin','去':'đi','热':'nóng','人':'người','认识':'quen biết; nhận ra','三':'ba','商店':'cửa hàng','上':'trên; lên','上午':'buổi sáng','少':'ít','谁':'ai','什么':'cái gì','十':'mười','时候':'lúc; thời điểm','是':'là','书':'sách','水':'nước','水果':'trái cây','睡觉':'ngủ','说':'nói','四':'bốn','岁':'tuổi','他':'anh ấy; ông ấy','她':'cô ấy; bà ấy','太':'quá; rất','天气':'thời tiết','听':'nghe','同学':'bạn học','我':'tôi','我们':'chúng tôi; chúng ta','五':'năm','喜欢':'thích','下':'dưới; xuống','下午':'buổi chiều','下雨':'mưa','先生':'ông; ngài','现在':'bây giờ','想':'muốn; nghĩ; nhớ','小':'nhỏ','些':'một ít; một số','写':'viết','谢谢':'cảm ơn','星期':'tuần; thứ','学生':'học sinh; sinh viên','学习':'học tập','学校':'trường học','一':'một','一点儿':'một chút','医生':'bác sĩ','医院':'bệnh viện','衣服':'quần áo','椅子':'ghế','有':'có','月':'tháng; mặt trăng','再见':'tạm biệt','在':'ở; đang','怎么':'thế nào; làm sao','怎么样':'như thế nào','这':'này; đây','中国':'Trung Quốc','中午':'buổi trưa','住':'ở; cư trú','桌子':'bàn','字':'chữ','昨天':'hôm qua','做':'làm','坐':'ngồi; đi (phương tiện)'};
Object.assign(overrides,{'嗯':'ừm; tiếng ngâm ngợi hoặc đồng tình tùy ngữ điệu','新媒体':'truyền thông mới; các phương tiện truyền thông dựa trên công nghệ số','新能源':'năng lượng mới; các nguồn năng lượng thay thế nguồn truyền thống','大学':'đại học; trường đại học','车':'xe','大家':'mọi người; cả nhà','菜':'rau; món ăn','手机':'điện thoại di động','电视':'ti vi; truyền hình','电影':'phim điện ảnh','医院':'bệnh viện'});
Object.assign(overrides,{'那里':'ở đó; chỗ đó','起来':'đứng dậy; bắt đầu; bổ ngữ hướng hoặc diễn tả sự bắt đầu','关系':'quan hệ; mối liên hệ; có liên quan đến','好处':'lợi ích; điểm tốt','恶心':'buồn nôn; ghê tởm'});
for(const w of records)if(overrides[w.hanzi])w.vi=overrides[w.hanzi];
const readingCorrections={'只':'chích','词':'từ','拿':'nã','最':'tối','碗':'oản','法':'pháp','留':'lưu','却':'khước','深':'thâm','据':'cứ','以':'dĩ','岸':'ngạn','岛':'đảo','暖':'noãn','散':'tán','射':'xạ','胸':'hung'};
for(const w of records)if(w.hanviet.includes('—')&&readingCorrections[w.hanzi])w.hanviet=readingCorrections[w.hanzi];
fs.writeFileSync('dist/data/vocabulary.js','window.HALO_VOCAB = '+JSON.stringify(records)+';\n');
const summary={edition:'HSK examination syllabus 2025-11',total:records.length,levels:[1,2,3,4,5,6].map(level=>({level,count:records.filter(w=>w.level===level).length,vietnamese:records.filter(w=>w.level===level&&w.vi).length})),sha256:crypto.createHash('sha256').update(JSON.stringify(records)).digest('hex')};
fs.writeFileSync('dist/data/manifest.json',JSON.stringify(summary,null,2));console.log(JSON.stringify(summary,null,2));
