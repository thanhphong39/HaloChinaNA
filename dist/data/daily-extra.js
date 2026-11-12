/* 100 additional situations, originally authored for HaloChina.
   Each block: metadata, then ten Chinese | pinyin | Vietnamese examples.
   The opening four examples form a two-person practice dialogue. */
(() => {
 const blocks = [String.raw`
@thuc-day|Thức dậy & chuẩn bị buổi sáng|Cuộc sống|🌅|起床 là ra khỏi giường; 醒 là tỉnh giấc. Dùng 该…了 để nhắc đã đến lúc làm việc gì.
你起床了吗？|Nǐ qǐchuáng le ma?|Bạn dậy chưa?
刚起床，还有点困。|Gāng qǐchuáng, hái yǒudiǎn kùn.|Tôi vừa dậy, vẫn hơi buồn ngủ.
要一起吃早饭吗？|Yào yìqǐ chī zǎofàn ma?|Cùng ăn sáng nhé?
好，我洗漱完就来。|Hǎo, wǒ xǐshù wán jiù lái.|Được, tôi vệ sinh cá nhân xong sẽ tới.
闹钟响了。|Nàozhōng xiǎng le.|Chuông báo thức reo rồi.
我想再睡五分钟。|Wǒ xiǎng zài shuì wǔ fēnzhōng.|Tôi muốn ngủ thêm năm phút.
该起床了。|Gāi qǐchuáng le.|Đến giờ dậy rồi.
我先刷牙洗脸。|Wǒ xiān shuāyá xǐ liǎn.|Tôi đánh răng rửa mặt trước.
今天穿什么好呢？|Jīntiān chuān shénme hǎo ne?|Hôm nay mặc gì thì hợp nhỉ?
别忘了带钥匙。|Bié wàng le dài yàoshi.|Đừng quên mang chìa khóa.
@di-ngu|Đi ngủ & nghỉ ngơi|Cuộc sống|🌙|睡不着 diễn tả muốn ngủ mà không ngủ được. 早点休息 là lời nhắc nghỉ sớm nhẹ nhàng.
你怎么还没睡？|Nǐ zěnme hái méi shuì?|Sao bạn vẫn chưa ngủ?
我在看书，马上就睡。|Wǒ zài kàn shū, mǎshàng jiù shuì.|Tôi đang đọc sách, sẽ ngủ ngay.
明天要早起，早点休息吧。|Míngtiān yào zǎo qǐ, zǎodiǎn xiūxi ba.|Mai phải dậy sớm, nghỉ sớm nhé.
好的，你也早点睡。|Hǎo de, nǐ yě zǎodiǎn shuì.|Được, bạn cũng ngủ sớm nhé.
我有点累了。|Wǒ yǒudiǎn lèi le.|Tôi hơi mệt rồi.
我去铺床。|Wǒ qù pū chuáng.|Tôi đi dọn giường.
请把灯关掉。|Qǐng bǎ dēng guān diào.|Bạn tắt đèn giúp nhé.
我昨晚没睡好。|Wǒ zuówǎn méi shuì hǎo.|Tối qua tôi ngủ không ngon.
我现在睡不着。|Wǒ xiànzài shuì bu zháo.|Bây giờ tôi không ngủ được.
晚安，做个好梦。|Wǎn'ān, zuò ge hǎo mèng.|Ngủ ngon, chúc bạn mơ đẹp.
@don-nha|Dọn nhà & chia việc|Cuộc sống|🧹|先…再… giúp sắp xếp thứ tự công việc. Dùng 我来… để chủ động nhận phần việc.
今天一起打扫房间吧？|Jīntiān yìqǐ dǎsǎo fángjiān ba?|Hôm nay cùng dọn phòng nhé?
好，我来扫地。|Hǎo, wǒ lái sǎo dì.|Được, để tôi quét nhà.
那我擦桌子，好吗？|Nà wǒ cā zhuōzi, hǎo ma?|Vậy tôi lau bàn nhé?
好，打扫完再休息。|Hǎo, dǎsǎo wán zài xiūxi.|Được, dọn xong rồi nghỉ.
扫把在哪里？|Sàoba zài nǎlǐ?|Chổi ở đâu?
地上有点脏。|Dìshang yǒudiǎn zāng.|Sàn nhà hơi bẩn.
我先把东西收好。|Wǒ xiān bǎ dōngxi shōu hǎo.|Tôi cất gọn đồ trước.
请把垃圾拿出去。|Qǐng bǎ lājī ná chūqu.|Bạn mang rác ra ngoài giúp nhé.
这个袋子装可回收的东西。|Zhège dàizi zhuāng kě huíshōu de dōngxi.|Túi này đựng đồ tái chế.
房间终于干净了。|Fángjiān zhōngyú gānjìng le.|Cuối cùng căn phòng cũng sạch rồi.
@giat-quan-ao|Giặt & phơi quần áo|Cuộc sống|🧺|晾 dùng khi phơi đồ. 深色 và 浅色 lần lượt là màu đậm và màu nhạt.
洗衣机空着吗？|Xǐyījī kòng zhe ma?|Máy giặt đang trống chứ?
空着，你先用吧。|Kòng zhe, nǐ xiān yòng ba.|Đang trống, bạn dùng trước đi.
这些白衣服要分开洗吗？|Zhèxiē bái yīfu yào fēnkāi xǐ ma?|Những áo trắng này cần giặt riêng không?
要，别和深色衣服一起洗。|Yào, bié hé shēnsè yīfu yìqǐ xǐ.|Có, đừng giặt cùng quần áo màu đậm.
洗衣液快用完了。|Xǐyīyè kuài yòng wán le.|Nước giặt sắp hết rồi.
这件衣服只能手洗。|Zhè jiàn yīfu zhǐ néng shǒu xǐ.|Áo này chỉ giặt tay được.
我把衣服放进去了。|Wǒ bǎ yīfu fàng jìnqu le.|Tôi đã cho quần áo vào rồi.
洗好了，去晾衣服吧。|Xǐ hǎo le, qù liàng yīfu ba.|Giặt xong rồi, đi phơi đồ nhé.
衣服还没干。|Yīfu hái méi gān.|Quần áo vẫn chưa khô.
请帮我收一下衣服。|Qǐng bāng wǒ shōu yíxià yīfu.|Bạn thu quần áo giúp tôi nhé.
@nau-an|Nấu ăn cùng nhau|Ăn uống|🍳|切 là thái; 炒 là xào; 煮 là luộc hoặc nấu trong nước. 熟了 nghĩa là đã chín.
今晚我们做什么菜？|Jīnwǎn wǒmen zuò shénme cài?|Tối nay mình nấu món gì?
做西红柿炒鸡蛋吧。|Zuò xīhóngshì chǎo jīdàn ba.|Làm trứng xào cà chua nhé.
好，我来洗菜。|Hǎo, wǒ lái xǐ cài.|Được, để tôi rửa rau.
那我来切西红柿。|Nà wǒ lái qiē xīhóngshì.|Vậy để tôi thái cà chua.
盐放在哪里？|Yán fàng zài nǎlǐ?|Muối để ở đâu?
少放一点油。|Shǎo fàng yìdiǎn yóu.|Cho ít dầu một chút.
水已经开了。|Shuǐ yǐjīng kāi le.|Nước đã sôi rồi.
小心，锅很烫。|Xiǎoxīn, guō hěn tàng.|Cẩn thận, nồi nóng lắm.
你尝尝咸不咸。|Nǐ chángchang xián bu xián.|Bạn nếm xem có mặn không.
菜熟了，可以吃了。|Cài shú le, kěyǐ chī le.|Món ăn chín rồi, ăn được rồi.
@mua-thuc-pham|Lên danh sách mua thực phẩm|Ăn uống|📝|还缺什么 hỏi còn thiếu gì. 够了 diễn tả số lượng đã đủ.
家里还缺什么？|Jiālǐ hái quē shénme?|Nhà mình còn thiếu gì?
鸡蛋和牛奶都快没了。|Jīdàn hé niúnǎi dōu kuài méi le.|Trứng và sữa đều sắp hết rồi.
我去买，你还要别的吗？|Wǒ qù mǎi, nǐ hái yào bié de ma?|Tôi đi mua, bạn cần gì khác không?
再买一点青菜就够了。|Zài mǎi yìdiǎn qīngcài jiù gòu le.|Mua thêm ít rau xanh là đủ.
我先列个清单。|Wǒ xiān liè ge qīngdān.|Tôi viết danh sách trước.
我们买一袋米吧。|Wǒmen mǎi yí dài mǐ ba.|Mình mua một túi gạo nhé.
冰箱里还有肉。|Bīngxiāng lǐ hái yǒu ròu.|Trong tủ lạnh vẫn còn thịt.
别买太多，吃不完。|Bié mǎi tài duō, chī bu wán.|Đừng mua nhiều quá, ăn không hết.
记得看看保质期。|Jìde kànkan bǎozhìqī.|Nhớ xem hạn sử dụng.
我带了购物袋。|Wǒ dài le gòuwùdài.|Tôi mang túi mua hàng rồi.
@mua-trai-cay|Mua trái cây ở chợ|Ăn uống|🍎|斤 là đơn vị 500 g ở Trung Quốc đại lục. Hãy hỏi rõ đơn vị trước khi tính giá.
苹果怎么卖？|Píngguǒ zěnme mài?|Táo bán thế nào?
一斤八块钱。|Yì jīn bā kuài qián.|Tám tệ một cân 500 g.
甜吗？可以尝一下吗？|Tián ma? Kěyǐ cháng yíxià ma?|Có ngọt không? Tôi nếm thử được không?
可以，您尝尝。|Kěyǐ, nín chángchang.|Được, anh/chị nếm thử đi.
我要两斤橘子。|Wǒ yào liǎng jīn júzi.|Tôi lấy một ký quýt.
请帮我挑几个熟的。|Qǐng bāng wǒ tiāo jǐ ge shú de.|Nhờ bạn chọn giúp vài quả chín.
这个西瓜重多少？|Zhège xīguā zhòng duōshao?|Quả dưa hấu này nặng bao nhiêu?
香蕉还有新鲜的吗？|Xiāngjiāo hái yǒu xīnxiān de ma?|Còn chuối tươi không?
这几个有点软。|Zhè jǐ ge yǒudiǎn ruǎn.|Mấy quả này hơi mềm.
请分成两个袋子装。|Qǐng fēn chéng liǎng ge dàizi zhuāng.|Xin chia vào hai túi.
@tiem-banh|Mua bánh mì & bánh ngọt|Ăn uống|🥐|刚出炉 chỉ bánh vừa ra lò. 个 dùng cho chiếc bánh; 片 dùng cho lát bánh.
这个面包是刚出炉的吗？|Zhège miànbāo shì gāng chū lú de ma?|Bánh mì này vừa ra lò phải không?
是的，还热着呢。|Shì de, hái rè zhe ne.|Đúng rồi, vẫn còn nóng.
那我要两个。|Nà wǒ yào liǎng ge.|Vậy tôi lấy hai cái.
好的，需要切片吗？|Hǎo de, xūyào qiē piàn ma?|Vâng, có cần cắt lát không?
有没有不太甜的？|Yǒu méiyǒu bú tài tián de?|Có loại nào không quá ngọt không?
这个里面有什么馅？|Zhège lǐmiàn yǒu shénme xiàn?|Bên trong bánh này có nhân gì?
我想买全麦面包。|Wǒ xiǎng mǎi quánmài miànbāo.|Tôi muốn mua bánh mì nguyên cám.
请给我一块蛋糕。|Qǐng gěi wǒ yí kuài dàngāo.|Cho tôi một miếng bánh kem.
可以帮我加热吗？|Kěyǐ bāng wǒ jiārè ma?|Bạn hâm nóng giúp tôi được không?
这个要放冰箱吗？|Zhège yào fàng bīngxiāng ma?|Bánh này cần để tủ lạnh không?
@an-sang|Gọi bữa sáng|Ăn uống|🥣|份 dùng cho một suất. 豆浆 là sữa đậu nành; 油条 là quẩy.
早饭你想吃什么？|Zǎofàn nǐ xiǎng chī shénme?|Bạn muốn ăn gì vào bữa sáng?
我想喝豆浆，吃包子。|Wǒ xiǎng hē dòujiāng, chī bāozi.|Tôi muốn uống sữa đậu nành, ăn bánh bao.
豆浆要热的还是冷的？|Dòujiāng yào rè de háishi lěng de?|Sữa đậu nành lấy nóng hay lạnh?
热的，不加糖。|Rè de, bù jiā táng.|Nóng, không thêm đường.
请来一碗粥。|Qǐng lái yì wǎn zhōu.|Cho tôi một bát cháo.
还有鸡蛋吗？|Hái yǒu jīdàn ma?|Còn trứng không?
这个包子是肉馅的吗？|Zhège bāozi shì ròu xiàn de ma?|Bánh bao này nhân thịt phải không?
我要一份煎饼。|Wǒ yào yí fèn jiānbing.|Tôi lấy một suất bánh kếp mặn.
我赶时间，可以快一点吗？|Wǒ gǎn shíjiān, kěyǐ kuài yìdiǎn ma?|Tôi đang vội, làm nhanh hơn một chút được không?
吃完早饭再出门。|Chī wán zǎofàn zài chū mén.|Ăn sáng xong rồi ra ngoài.
@an-lau|Đi ăn lẩu|Ăn uống|🍲|锅底 là nước lẩu nền; 鸳鸯锅 có hai ngăn với hai vị nước lẩu.
你能吃辣吗？|Nǐ néng chī là ma?|Bạn ăn cay được không?
只能吃一点点。|Zhǐ néng chī yìdiǎndiǎn.|Tôi chỉ ăn cay được chút xíu.
那我们点鸳鸯锅吧。|Nà wǒmen diǎn yuānyāngguō ba.|Vậy mình gọi lẩu hai ngăn nhé.
好，一半辣，一半不辣。|Hǎo, yíbàn là, yíbàn bú là.|Được, một nửa cay, một nửa không cay.
你喜欢什么锅底？|Nǐ xǐhuan shénme guōdǐ?|Bạn thích loại nước lẩu nào?
先下蔬菜还是肉？|Xiān xià shūcài háishi ròu?|Cho rau hay thịt vào trước?
请再加一点汤。|Qǐng zài jiā yìdiǎn tāng.|Xin thêm một chút nước lẩu.
这片肉还没熟。|Zhè piàn ròu hái méi shú.|Miếng thịt này chưa chín.
调料在哪里？|Tiáoliào zài nǎlǐ?|Gia vị ở đâu?
我们先点这些，不够再加。|Wǒmen xiān diǎn zhèxiē, bú gòu zài jiā.|Mình gọi chừng này trước, thiếu thì gọi thêm.
@do-nuong|Gọi món nướng|Ăn uống|🍢|串 là một xiên. 烤焦了 nghĩa là bị nướng cháy.
你想吃什么串？|Nǐ xiǎng chī shénme chuàn?|Bạn muốn ăn xiên gì?
先来两串羊肉吧。|Xiān lái liǎng chuàn yángròu ba.|Trước hết lấy hai xiên thịt cừu nhé.
要放辣椒吗？|Yào fàng làjiāo ma?|Có cho ớt không?
少放一点就好。|Shǎo fàng yìdiǎn jiù hǎo.|Cho ít thôi là được.
这个是牛肉还是猪肉？|Zhège shì niúròu háishi zhūròu?|Đây là thịt bò hay thịt lợn?
请再来一盘烤蔬菜。|Qǐng zài lái yì pán kǎo shūcài.|Cho thêm một đĩa rau nướng.
这串好像烤焦了。|Zhè chuàn hǎoxiàng kǎo jiāo le.|Xiên này hình như bị cháy rồi.
可以少放盐吗？|Kěyǐ shǎo fàng yán ma?|Cho ít muối được không?
请给我们几个盘子。|Qǐng gěi wǒmen jǐ ge pánzi.|Cho chúng tôi vài cái đĩa.
剩下的可以打包吗？|Shèngxià de kěyǐ dǎbāo ma?|Phần còn lại gói mang về được không?
@dat-do-an|Đặt đồ ăn giao tận nơi|Ăn uống|🛵|外卖 là đồ ăn giao tận nơi; 备注 là ghi chú đơn hàng.
你点的外卖到了吗？|Nǐ diǎn de wàimài dào le ma?|Đồ ăn bạn đặt đã tới chưa?
还没，显示还有十分钟。|Hái méi, xiǎnshì hái yǒu shí fēnzhōng.|Chưa, ứng dụng báo còn mười phút.
地址填对了吗？|Dìzhǐ tián duì le ma?|Bạn điền đúng địa chỉ chứ?
填对了，我也留了电话。|Tián duì le, wǒ yě liú le diànhuà.|Đúng rồi, tôi cũng để lại số điện thoại.
请不要放葱。|Qǐng bú yào fàng cōng.|Xin đừng cho hành.
餐具要几份？|Cānjù yào jǐ fèn?|Cần mấy bộ dụng cụ ăn?
请送到楼下门口。|Qǐng sòng dào lóuxià ménkǒu.|Xin giao tới cửa dưới tầng.
到了请给我打电话。|Dào le qǐng gěi wǒ dǎ diànhuà.|Đến nơi xin gọi cho tôi.
少送了一份米饭。|Shǎo sòng le yí fèn mǐfàn.|Đơn giao thiếu một phần cơm.
我在订单里写了备注。|Wǒ zài dìngdān lǐ xiě le bèizhù.|Tôi đã ghi chú trong đơn hàng.
@di-ung-thuc-pham|Hỏi thành phần & dị ứng thức ăn|Ăn uống|🥜|对…过敏 diễn tả dị ứng với thứ gì. Khi cần, hỏi trực tiếp về nguyên liệu và dụng cụ chế biến.
这道菜里有花生吗？|Zhè dào cài lǐ yǒu huāshēng ma?|Món này có đậu phộng không?
我不确定，帮您问一下厨房。|Wǒ bù quèdìng, bāng nín wèn yíxià chúfáng.|Tôi chưa chắc, để tôi hỏi bếp giúp anh/chị.
谢谢，我对花生过敏。|Xièxie, wǒ duì huāshēng guòmǐn.|Cảm ơn, tôi dị ứng với đậu phộng.
好的，请稍等。|Hǎo de, qǐng shāo děng.|Vâng, xin chờ một chút.
请帮我确认配料。|Qǐng bāng wǒ quèrèn pèiliào.|Xin kiểm tra thành phần giúp tôi.
这个酱里有芝麻吗？|Zhège jiàng lǐ yǒu zhīma ma?|Nước sốt này có mè không?
我不能吃海鲜。|Wǒ bù néng chī hǎixiān.|Tôi không ăn được hải sản.
能不放奶制品吗？|Néng bú fàng nǎizhìpǐn ma?|Có thể không cho sản phẩm từ sữa không?
能用干净的锅单独做吗？|Néng yòng gānjìng de guō dāndú zuò ma?|Có thể dùng nồi sạch nấu riêng không?
如果不能确认，我换一道菜。|Rúguǒ bù néng quèrèn, wǒ huàn yí dào cài.|Nếu không xác nhận được, tôi đổi món khác.
@an-chay|Gọi món chay|Ăn uống|🥬|素食 nghĩa là thức ăn chay. Nên nói rõ cả yêu cầu về nước dùng, trứng và sữa vì cách hiểu có thể khác nhau.
你们有素食吗？|Nǐmen yǒu sùshí ma?|Quán có món chay không?
有，您吃鸡蛋吗？|Yǒu, nín chī jīdàn ma?|Có, anh/chị có ăn trứng không?
不吃，也不喝牛奶。|Bù chī, yě bù hē niúnǎi.|Tôi không ăn, cũng không uống sữa.
明白了，我推荐炒蔬菜。|Míngbai le, wǒ tuījiàn chǎo shūcài.|Tôi hiểu rồi, tôi gợi ý món rau xào.
请不要放肉。|Qǐng bú yào fàng ròu.|Xin đừng cho thịt.
这个汤是用什么做的？|Zhège tāng shì yòng shénme zuò de?|Nước dùng này nấu bằng gì?
请用清水煮面。|Qǐng yòng qīngshuǐ zhǔ miàn.|Xin dùng nước thường để nấu mì.
有没有豆腐？|Yǒu méiyǒu dòufu?|Có đậu phụ không?
蚝油也请不要放。|Háoyóu yě qǐng bú yào fàng.|Cũng xin đừng cho dầu hào.
这道菜可以改成素的吗？|Zhè dào cài kěyǐ gǎi chéng sù de ma?|Món này có thể làm thành món chay không?
@chia-tien-an|Thanh toán & chia tiền bữa ăn|Ăn uống|🧾|AA制 nghĩa là chia phần thanh toán. 请客 là mời và trả tiền cho bữa đó.
这顿饭一共多少钱？|Zhè dùn fàn yígòng duōshao qián?|Bữa này tổng cộng bao nhiêu tiền?
一共两百块。|Yígòng liǎng bǎi kuài.|Tổng cộng hai trăm tệ.
我们四个人，每人五十，对吗？|Wǒmen sì ge rén, měi rén wǔshí, duì ma?|Bốn người, mỗi người năm mươi, đúng không?
对，你先付，我转给你。|Duì, nǐ xiān fù, wǒ zhuǎn gěi nǐ.|Đúng, bạn trả trước, tôi chuyển lại cho bạn.
今天我请客。|Jīntiān wǒ qǐngkè.|Hôm nay tôi mời.
下次我请你。|Xià cì wǒ qǐng nǐ.|Lần sau tôi mời bạn.
我们AA吧。|Wǒmen ēi ēi ba.|Mình chia tiền nhé.
可以分开结账吗？|Kěyǐ fēnkāi jiézhàng ma?|Có thể thanh toán riêng không?
账单好像多算了一份。|Zhàngdān hǎoxiàng duō suàn le yí fèn.|Hóa đơn hình như tính thừa một phần.
钱已经转过去了。|Qián yǐjīng zhuǎn guòqu le.|Tôi đã chuyển tiền rồi.
@uong-tra|Uống trà & mời trà|Ăn uống|🍵|泡茶 là pha trà; 淡 và 浓 nói về độ nhạt và đậm của trà.
你想喝什么茶？|Nǐ xiǎng hē shénme chá?|Bạn muốn uống trà gì?
绿茶吧，不要太浓。|Lǜchá ba, bú yào tài nóng.|Trà xanh nhé, đừng quá đậm.
好，我给你泡一杯。|Hǎo, wǒ gěi nǐ pào yì bēi.|Được, tôi pha cho bạn một cốc.
谢谢，闻起来很香。|Xièxie, wén qǐlái hěn xiāng.|Cảm ơn, ngửi thơm lắm.
这是什么茶？|Zhè shì shénme chá?|Đây là trà gì?
水有点烫，慢慢喝。|Shuǐ yǒudiǎn tàng, mànmàn hē.|Nước hơi nóng, uống từ từ nhé.
请再加一点热水。|Qǐng zài jiā yìdiǎn rè shuǐ.|Xin thêm ít nước nóng.
我喜欢淡一点的。|Wǒ xǐhuan dàn yìdiǎn de.|Tôi thích trà nhạt hơn một chút.
这个杯子是你的吗？|Zhège bēizi shì nǐ de ma?|Cốc này của bạn phải không?
我们边喝茶边聊天吧。|Wǒmen biān hē chá biān liáotiān ba.|Mình vừa uống trà vừa nói chuyện nhé.
@tra-sua|Đặt trà sữa theo khẩu vị|Ăn uống|🧋|少冰 là ít đá; 去冰 là bỏ đá. Các mức đường có thể khác nhau giữa cửa hàng.
您要什么饮料？|Nín yào shénme yǐnliào?|Anh/chị muốn đồ uống gì?
一杯珍珠奶茶。|Yì bēi zhēnzhū nǎichá.|Một cốc trà sữa trân châu.
甜度和冰量呢？|Tiándù hé bīngliàng ne?|Mức đường và lượng đá thế nào ạ?
三分糖，少冰，谢谢。|Sān fēn táng, shǎo bīng, xièxie.|Ba phần đường, ít đá, cảm ơn.
我要中杯的。|Wǒ yào zhōng bēi de.|Tôi lấy cỡ vừa.
可以换成燕麦奶吗？|Kěyǐ huàn chéng yànmài nǎi ma?|Có thể đổi sang sữa yến mạch không?
不要珍珠，加椰果。|Bú yào zhēnzhū, jiā yēguǒ.|Không lấy trân châu, thêm thạch dừa.
这杯请做常温的。|Zhè bēi qǐng zuò chángwēn de.|Cốc này xin làm ở nhiệt độ thường.
大概要等多久？|Dàgài yào děng duō jiǔ?|Khoảng bao lâu thì có?
我的取餐号是十二号。|Wǒ de qǔcān hào shì shí'èr hào.|Số nhận đồ của tôi là mười hai.
@sieu-thi|Tìm hàng trong siêu thị|Mua sắm & dịch vụ|🛒|货架 là kệ hàng; 收银台 là quầy thu ngân. Dùng 在哪一排 để hỏi dãy hàng.
请问，牛奶在哪一排？|Qǐngwèn, niúnǎi zài nǎ yì pái?|Xin hỏi, sữa ở dãy nào?
在第三排，靠右边。|Zài dì sān pái, kào yòubian.|Ở dãy thứ ba, phía bên phải.
谢谢，购物车在哪里拿？|Xièxie, gòuwùchē zài nǎlǐ ná?|Cảm ơn, lấy xe đẩy ở đâu?
入口旁边就有。|Rùkǒu pángbiān jiù yǒu.|Ngay cạnh cửa vào có đấy.
这个有小包装的吗？|Zhège yǒu xiǎo bāozhuāng de ma?|Loại này có gói nhỏ không?
今天有什么打折的商品？|Jīntiān yǒu shénme dǎzhé de shāngpǐn?|Hôm nay có hàng nào giảm giá?
这个价格是会员价吗？|Zhège jiàgé shì huìyuán jià ma?|Giá này là giá thành viên phải không?
请帮我称一下。|Qǐng bāng wǒ chēng yíxià.|Xin cân giúp tôi.
这台机器怎么用？|Zhè tái jīqì zěnme yòng?|Máy này dùng thế nào?
我不需要塑料袋。|Wǒ bù xūyào sùliàodài.|Tôi không cần túi nhựa.
@thu-quan-ao|Thử & chọn quần áo|Mua sắm & dịch vụ|👗|合身 chỉ quần áo vừa người; 合适 dùng rộng hơn để nói phù hợp.
这件有大一点的吗？|Zhè jiàn yǒu dà yìdiǎn de ma?|Mẫu này có cỡ lớn hơn không?
有，您试试这件。|Yǒu, nín shìshi zhè jiàn.|Có, anh/chị thử chiếc này nhé.
试衣间在哪里？|Shìyījiān zài nǎlǐ?|Phòng thử đồ ở đâu?
在那边，镜子旁边。|Zài nàbian, jìngzi pángbiān.|Ở bên kia, cạnh gương.
我平时穿中号。|Wǒ píngshí chuān zhōng hào.|Tôi thường mặc cỡ M.
这件袖子有点长。|Zhè jiàn xiùzi yǒudiǎn cháng.|Tay áo này hơi dài.
有没有粉色的？|Yǒu méiyǒu fěnsè de?|Có màu hồng không?
这个颜色很适合你。|Zhège yánsè hěn shìhé nǐ.|Màu này rất hợp với bạn.
这件穿着很舒服。|Zhè jiàn chuān zhe hěn shūfu.|Chiếc này mặc rất thoải mái.
我再考虑一下。|Wǒ zài kǎolǜ yíxià.|Tôi cân nhắc thêm một chút.
@mua-giay|Mua & thử giày|Mua sắm & dịch vụ|👟|码 là cỡ giày. 磨脚 diễn tả giày cọ làm đau chân; 试走 là đi thử.
您穿多大码的鞋？|Nín chuān duō dà mǎ de xié?|Anh/chị đi giày cỡ bao nhiêu?
我一般穿三十八码。|Wǒ yìbān chuān sānshíbā mǎ.|Tôi thường đi cỡ ba mươi tám.
这双怎么样？可以试走一下。|Zhè shuāng zěnmeyàng? Kěyǐ shì zǒu yíxià.|Đôi này thế nào? Anh/chị có thể đi thử.
有点紧，能拿大一码吗？|Yǒudiǎn jǐn, néng ná dà yì mǎ ma?|Hơi chật, lấy lớn hơn một cỡ được không?
这双鞋会磨脚吗？|Zhè shuāng xié huì mó jiǎo ma?|Đôi giày này có cọ đau chân không?
我想买适合走路的鞋。|Wǒ xiǎng mǎi shìhé zǒulù de xié.|Tôi muốn mua giày phù hợp để đi bộ.
还有别的颜色吗？|Hái yǒu bié de yánsè ma?|Còn màu khác không?
鞋底会滑吗？|Xiédǐ huì huá ma?|Đế giày có trơn không?
可以两只都试一下吗？|Kěyǐ liǎng zhī dōu shì yíxià ma?|Tôi thử cả hai chiếc được không?
这双大小正好。|Zhè shuāng dàxiǎo zhènghǎo.|Đôi này vừa đúng cỡ.
`,String.raw`
@my-pham|Chọn mỹ phẩm & chăm sóc da|Mua sắm & dịch vụ|🧴|试用 là dùng thử; 无香 là không thêm hương. Hỏi thành phần trên nhãn khi lựa chọn sản phẩm.
这款适合干性皮肤吗？|Zhè kuǎn shìhé gānxìng pífū ma?|Loại này phù hợp với da khô không?
适合，您可以先试用一下。|Shìhé, nín kěyǐ xiān shìyòng yíxià.|Có, anh/chị có thể dùng thử trước.
有没有无香的？|Yǒu méiyǒu wú xiāng de?|Có loại không hương liệu không?
有，我拿给您看看。|Yǒu, wǒ ná gěi nín kànkan.|Có, tôi lấy cho anh/chị xem.
我想看看成分表。|Wǒ xiǎng kànkan chéngfènbiǎo.|Tôi muốn xem bảng thành phần.
这支口红是什么色号？|Zhè zhī kǒuhóng shì shénme sèhào?|Thỏi son này là mã màu nào?
请给我一个新的试用棒。|Qǐng gěi wǒ yí ge xīn de shìyòngbàng.|Xin cho tôi một que thử mới.
有没有旅行装？|Yǒu méiyǒu lǚxíng zhuāng?|Có bộ cỡ du lịch không?
我先买小瓶试试。|Wǒ xiān mǎi xiǎo píng shìshi.|Tôi mua chai nhỏ dùng thử trước.
开封后能用多久？|Kāifēng hòu néng yòng duō jiǔ?|Sau khi mở nắp có thể dùng bao lâu?
@cat-toc|Đặt lịch & cắt tóc|Mua sắm & dịch vụ|💇|修一下 thường là tỉa nhẹ; 剪短 là cắt ngắn. Dùng 厘米 để nói rõ độ dài muốn cắt.
您好，现在可以剪头发吗？|Nín hǎo, xiànzài kěyǐ jiǎn tóufa ma?|Xin chào, bây giờ cắt tóc được không?
可以，您想怎么剪？|Kěyǐ, nín xiǎng zěnme jiǎn?|Được, anh/chị muốn cắt thế nào?
只修一下发尾，不要太短。|Zhǐ xiū yíxià fàwěi, bú yào tài duǎn.|Chỉ tỉa đuôi tóc, đừng ngắn quá.
好的，大概剪两厘米，可以吗？|Hǎo de, dàgài jiǎn liǎng límǐ, kěyǐ ma?|Vâng, cắt khoảng hai xăng-ti-mét được không?
我有预约，下午两点。|Wǒ yǒu yùyuē, xiàwǔ liǎng diǎn.|Tôi có hẹn lúc hai giờ chiều.
洗剪吹一共多少钱？|Xǐ jiǎn chuī yígòng duōshao qián?|Gội, cắt, sấy tổng cộng bao nhiêu tiền?
刘海再短一点。|Liúhǎi zài duǎn yìdiǎn.|Phần mái ngắn hơn chút nữa.
两边请剪得一样长。|Liǎng biān qǐng jiǎn de yíyàng cháng.|Xin cắt hai bên dài bằng nhau.
吹干就好，不用造型。|Chuī gān jiù hǎo, bú yòng zàoxíng.|Sấy khô thôi, không cần tạo kiểu.
后面可以给我看一下吗？|Hòumian kěyǐ gěi wǒ kàn yíxià ma?|Cho tôi xem phía sau được không?
@lam-mong|Chọn mẫu & làm móng|Mua sắm & dịch vụ|💅|款式 là kiểu mẫu; 卸甲 là tháo lớp móng hoặc sơn cũ. Hỏi rõ giá từng dịch vụ trước khi làm.
我想做简单一点的款式。|Wǒ xiǎng zuò jiǎndān yìdiǎn de kuǎnshì.|Tôi muốn làm kiểu đơn giản một chút.
您喜欢什么颜色？|Nín xǐhuan shénme yánsè?|Chị thích màu gì?
浅粉色，有样板吗？|Qiǎn fěnsè, yǒu yàngbǎn ma?|Hồng nhạt, có bảng mẫu không?
有，您看看这几个。|Yǒu, nín kànkan zhè jǐ ge.|Có, chị xem mấy mẫu này nhé.
指甲不要留太长。|Zhǐjia bú yào liú tài cháng.|Đừng để móng quá dài.
请帮我修圆一点。|Qǐng bāng wǒ xiū yuán yìdiǎn.|Xin giũa tròn hơn chút.
这个图案要另外收费吗？|Zhège tú'àn yào lìngwài shōufèi ma?|Họa tiết này có tính phí riêng không?
我需要先卸甲。|Wǒ xūyào xiān xiè jiǎ.|Tôi cần tháo lớp móng cũ trước.
大概需要多长时间？|Dàgài xūyào duō cháng shíjiān?|Khoảng bao lâu thì xong?
这边有一点不平。|Zhè biān yǒu yìdiǎn bù píng.|Bên này hơi không phẳng.
@tiem-giat|Gửi đồ ở tiệm giặt|Mua sắm & dịch vụ|👔|干洗 là giặt khô. 取衣凭条 là phiếu nhận đồ; nhớ kiểm tra ngày nhận trên phiếu.
这件外套可以干洗吗？|Zhè jiàn wàitào kěyǐ gānxǐ ma?|Áo khoác này giặt khô được không?
可以，您想什么时候取？|Kěyǐ, nín xiǎng shénme shíhou qǔ?|Được, anh/chị muốn nhận khi nào?
周五之前能洗好吗？|Zhōuwǔ zhīqián néng xǐ hǎo ma?|Trước thứ Sáu giặt xong được không?
可以，周四下午来取吧。|Kěyǐ, zhōusì xiàwǔ lái qǔ ba.|Được, chiều thứ Năm tới nhận nhé.
这里有一块污渍。|Zhèlǐ yǒu yí kuài wūzì.|Chỗ này có một vết bẩn.
请先检查一下口袋。|Qǐng xiān jiǎnchá yíxià kǒudài.|Xin kiểm tra túi áo trước.
这件不能用热水洗。|Zhè jiàn bù néng yòng rè shuǐ xǐ.|Chiếc này không giặt bằng nước nóng được.
能帮我熨一下吗？|Néng bāng wǒ yùn yíxià ma?|Bạn ủi giúp tôi được không?
这是我的取衣凭条。|Zhè shì wǒ de qǔ yī píngtiáo.|Đây là phiếu nhận đồ của tôi.
衣服好像还没洗干净。|Yīfu hǎoxiàng hái méi xǐ gānjìng.|Quần áo hình như vẫn chưa sạch.
@sua-quan-ao|Sửa & may quần áo|Mua sắm & dịch vụ|🪡|裤脚 là gấu quần; 拉链 là khóa kéo. 改短一点 nghĩa là sửa cho ngắn hơn một chút.
这条裤子能改短一点吗？|Zhè tiáo kùzi néng gǎi duǎn yìdiǎn ma?|Quần này sửa ngắn hơn chút được không?
可以，您先穿上试试。|Kěyǐ, nín xiān chuān shàng shìshi.|Được, anh/chị mặc vào thử trước.
到这里就可以了。|Dào zhèlǐ jiù kěyǐ le.|Dài đến đây là được.
好的，我做个记号。|Hǎo de, wǒ zuò ge jìhao.|Vâng, tôi đánh dấu lại.
腰有一点松。|Yāo yǒu yìdiǎn sōng.|Phần eo hơi rộng.
能换一条拉链吗？|Néng huàn yì tiáo lāliàn ma?|Thay khóa kéo được không?
这个扣子掉了。|Zhège kòuzi diào le.|Cúc áo này rơi rồi.
请用相近颜色的线。|Qǐng yòng xiāngjìn yánsè de xiàn.|Xin dùng chỉ màu gần giống.
我想保留原来的裤脚。|Wǒ xiǎng bǎoliú yuánlái de kùjiǎo.|Tôi muốn giữ gấu quần ban đầu.
明天下午能来拿吗？|Míngtiān xiàwǔ néng lái ná ma?|Chiều mai tôi tới lấy được không?
@nhan-buu-kien|Nhận bưu kiện & lấy hàng|Mua sắm & dịch vụ|📦|取件码 là mã lấy hàng. Chỉ cung cấp mã tại đúng điểm nhận hàng của mình.
您好，我来取快递。|Nín hǎo, wǒ lái qǔ kuàidì.|Xin chào, tôi tới lấy bưu kiện.
请出示取件码。|Qǐng chūshì qǔjiànmǎ.|Xin cho xem mã lấy hàng.
这是取件码，一共两个包裹。|Zhè shì qǔjiànmǎ, yígòng liǎng ge bāoguǒ.|Đây là mã, tổng cộng hai kiện.
找到了，请核对一下姓名。|Zhǎo dào le, qǐng héduì yíxià xìngmíng.|Tìm thấy rồi, xin kiểm tra tên.
快递放在哪里了？|Kuàidì fàng zài nǎlǐ le?|Bưu kiện được để ở đâu rồi?
可以暂时帮我保管吗？|Kěyǐ zànshí bāng wǒ bǎoguǎn ma?|Bạn giữ hộ tôi tạm thời được không?
这个包裹不是我的。|Zhège bāoguǒ bú shì wǒ de.|Kiện hàng này không phải của tôi.
包装好像破了。|Bāozhuāng hǎoxiàng pò le.|Bao bì hình như bị rách.
我想当面检查一下。|Wǒ xiǎng dāngmiàn jiǎnchá yíxià.|Tôi muốn kiểm tra ngay tại đây.
我已经签收了。|Wǒ yǐjīng qiānshōu le.|Tôi đã ký nhận rồi.
@gui-buu-pham|Gửi bưu phẩm ở bưu điện|Mua sắm & dịch vụ|📮|寄 là gửi; 收件人 là người nhận. Hỏi nhân viên về món đồ được phép gửi và thủ tục cần thiết.
我想寄一个包裹。|Wǒ xiǎng jì yí ge bāoguǒ.|Tôi muốn gửi một bưu kiện.
请问寄到哪里？|Qǐngwèn jì dào nǎlǐ?|Xin hỏi gửi tới đâu?
寄到这个地址，里面是书。|Jì dào zhège dìzhǐ, lǐmiàn shì shū.|Gửi tới địa chỉ này, bên trong là sách.
好的，请先填一下单子。|Hǎo de, qǐng xiān tián yíxià dānzi.|Vâng, xin điền phiếu trước.
邮费怎么算？|Yóufèi zěnme suàn?|Phí gửi được tính thế nào?
大概几天能到？|Dàgài jǐ tiān néng dào?|Khoảng mấy ngày thì tới?
请给我一个纸箱。|Qǐng gěi wǒ yí ge zhǐxiāng.|Xin cho tôi một thùng giấy.
需要写收件人的电话吗？|Xūyào xiě shōujiànrén de diànhuà ma?|Có cần ghi số điện thoại người nhận không?
这个东西可以寄吗？|Zhège dōngxi kěyǐ jì ma?|Đồ này có gửi được không?
请把运单号发给我。|Qǐng bǎ yùndānhào fā gěi wǒ.|Xin gửi cho tôi mã vận đơn.
@ngan-hang|Giao tiếp tại ngân hàng|Mua sắm & dịch vụ|🏦|取号 là lấy số thứ tự; 柜台 là quầy giao dịch. Hỏi nhân viên về giấy tờ của dịch vụ cụ thể.
请问，办理业务先取号吗？|Qǐngwèn, bànlǐ yèwù xiān qǔ hào ma?|Xin hỏi, giao dịch có cần lấy số trước không?
是的，在那台机器上取号。|Shì de, zài nà tái jīqì shàng qǔ hào.|Có, lấy số ở máy kia.
我想咨询银行卡的事情。|Wǒ xiǎng zīxún yínhángkǎ de shìqing.|Tôi muốn hỏi về thẻ ngân hàng.
请到三号柜台。|Qǐng dào sān hào guìtái.|Xin tới quầy số ba.
需要带哪些证件？|Xūyào dài nǎxiē zhèngjiàn?|Cần mang những giấy tờ nào?
请帮我查一下余额。|Qǐng bāng wǒ chá yíxià yú'é.|Xin giúp tôi kiểm tra số dư.
我想更新联系电话。|Wǒ xiǎng gēngxīn liánxì diànhuà.|Tôi muốn cập nhật số điện thoại liên hệ.
这项服务有手续费吗？|Zhè xiàng fúwù yǒu shǒuxùfèi ma?|Dịch vụ này có phí không?
我的银行卡找不到了。|Wǒ de yínhángkǎ zhǎo bu dào le.|Tôi không tìm thấy thẻ ngân hàng.
请问怎么申请挂失？|Qǐngwèn zěnme shēnqǐng guàshī?|Xin hỏi, làm thế nào để báo mất thẻ?
@doi-tien|Hỏi dịch vụ đổi tiền|Mua sắm & dịch vụ|💱|兑换 là đổi tiền; 汇率 là tỷ giá. Đây là câu giao tiếp để hỏi nhân viên, không phải mức giá hay quy định hiện hành.
这里可以兑换外币吗？|Zhèlǐ kěyǐ duìhuàn wàibì ma?|Ở đây có đổi ngoại tệ không?
您想兑换哪种货币？|Nín xiǎng duìhuàn nǎ zhǒng huòbì?|Anh/chị muốn đổi loại tiền nào?
我想换一些人民币。|Wǒ xiǎng huàn yìxiē rénmínbì.|Tôi muốn đổi một ít nhân dân tệ.
好的，请看今天的牌价。|Hǎo de, qǐng kàn jīntiān de páijià.|Vâng, xin xem bảng tỷ giá hôm nay.
今天的汇率是多少？|Jīntiān de huìlǜ shì duōshao?|Tỷ giá hôm nay là bao nhiêu?
需要收手续费吗？|Xūyào shōu shǒuxùfèi ma?|Có thu phí giao dịch không?
我需要出示什么证件？|Wǒ xūyào chūshì shénme zhèngjiàn?|Tôi cần xuất trình giấy tờ gì?
请给我一些小面额的。|Qǐng gěi wǒ yìxiē xiǎo miàn'é de.|Xin cho tôi một ít tiền mệnh giá nhỏ.
请帮我确认总金额。|Qǐng bāng wǒ quèrèn zǒng jīn'é.|Xin xác nhận tổng số tiền giúp tôi.
这张凭条需要保留吗？|Zhè zhāng píngtiáo xūyào bǎoliú ma?|Tôi có cần giữ biên nhận này không?
@may-atm|Sử dụng máy ATM|Mua sắm & dịch vụ|🏧|取款 là rút tiền; 吞卡 diễn tả máy giữ thẻ. Không cần nói mã PIN trong hội thoại.
附近有自动取款机吗？|Fùjìn yǒu zìdòng qǔkuǎnjī ma?|Gần đây có máy ATM không?
银行门口有一台。|Yínháng ménkǒu yǒu yì tái.|Có một máy ở cửa ngân hàng.
那台机器现在能用吗？|Nà tái jīqì xiànzài néng yòng ma?|Máy đó bây giờ dùng được không?
可以，我刚用过。|Kěyǐ, wǒ gāng yòng guo.|Được, tôi vừa dùng xong.
我想取一点现金。|Wǒ xiǎng qǔ yìdiǎn xiànjīn.|Tôi muốn rút một ít tiền mặt.
可以选择英文界面吗？|Kěyǐ xuǎnzé Yīngwén jièmiàn ma?|Có thể chọn giao diện tiếng Anh không?
屏幕上显示交易失败。|Píngmù shàng xiǎnshì jiāoyì shībài.|Màn hình báo giao dịch thất bại.
钱没有出来。|Qián méiyǒu chūlai.|Tiền không ra.
我的卡被机器吞了。|Wǒ de kǎ bèi jīqì tūn le.|Thẻ của tôi bị máy giữ lại.
请帮我联系银行工作人员。|Qǐng bāng wǒ liánxì yínháng gōngzuò rényuán.|Xin giúp tôi liên hệ nhân viên ngân hàng.
@mua-sim|Mua SIM & gói dữ liệu|Mua sắm & dịch vụ|📱|流量 là dung lượng dữ liệu; 套餐 là gói dịch vụ. Hỏi rõ thời hạn và chi phí trước khi đăng ký.
我想买一张手机卡。|Wǒ xiǎng mǎi yì zhāng shǒujīkǎ.|Tôi muốn mua một SIM điện thoại.
您主要打电话还是上网？|Nín zhǔyào dǎ diànhuà háishi shàng wǎng?|Anh/chị chủ yếu gọi điện hay dùng mạng?
主要上网，用一个月。|Zhǔyào shàng wǎng, yòng yí ge yuè.|Chủ yếu dùng mạng trong một tháng.
那您可以看看这个套餐。|Nà nín kěyǐ kànkan zhège tàocān.|Vậy anh/chị có thể xem gói này.
每个月有多少流量？|Měi ge yuè yǒu duōshao liúliàng?|Mỗi tháng có bao nhiêu dung lượng?
流量用完了怎么收费？|Liúliàng yòng wán le zěnme shōufèi?|Hết dung lượng thì tính phí thế nào?
可以帮我安装吗？|Kěyǐ bāng wǒ ānzhuāng ma?|Bạn lắp giúp tôi được không?
什么时候可以开始使用？|Shénme shíhou kěyǐ kāishǐ shǐyòng?|Khi nào tôi có thể bắt đầu dùng?
这个套餐会自动续费吗？|Zhège tàocān huì zìdòng xùfèi ma?|Gói này có tự động gia hạn không?
怎么查询剩余流量？|Zěnme cháxún shèngyú liúliàng?|Kiểm tra dung lượng còn lại thế nào?
@ket-noi-wifi|Kết nối Wi-Fi|Công nghệ|📶|连不上 nghĩa là không kết nối được; 信号 là tín hiệu. Dùng 网络名称 để hỏi tên mạng.
请问，这里有无线网络吗？|Qǐngwèn, zhèlǐ yǒu wúxiàn wǎngluò ma?|Xin hỏi, ở đây có Wi-Fi không?
有，网络名称写在桌上。|Yǒu, wǎngluò míngchēng xiě zài zhuōshang.|Có, tên mạng ghi trên bàn.
密码是什么？|Mìmǎ shì shénme?|Mật khẩu là gì?
我写给你，里面有大写字母。|Wǒ xiě gěi nǐ, lǐmiàn yǒu dàxiě zìmǔ.|Tôi viết cho bạn, trong đó có chữ in hoa.
我的手机连不上。|Wǒ de shǒujī lián bu shàng.|Điện thoại của tôi không kết nối được.
这里的信号有点弱。|Zhèlǐ de xìnhào yǒudiǎn ruò.|Tín hiệu ở đây hơi yếu.
需要打开网页登录吗？|Xūyào dǎkāi wǎngyè dēnglù ma?|Có cần mở trang web để đăng nhập không?
我试着重新连接。|Wǒ shì zhe chóngxīn liánjiē.|Tôi thử kết nối lại.
现在可以上网了。|Xiànzài kěyǐ shàng wǎng le.|Bây giờ vào mạng được rồi.
这个网络是免费的吗？|Zhège wǎngluò shì miǎnfèi de ma?|Mạng này miễn phí phải không?
@sac-dien-thoai|Mượn sạc & tìm ổ cắm|Công nghệ|🔋|充电 là sạc; 插座 là ổ cắm; 充电宝 là pin sạc dự phòng.
我的手机快没电了。|Wǒ de shǒujī kuài méi diàn le.|Điện thoại tôi sắp hết pin.
我有充电宝，你要用吗？|Wǒ yǒu chōngdiànbǎo, nǐ yào yòng ma?|Tôi có sạc dự phòng, bạn cần dùng không?
要，谢谢，你有充电线吗？|Yào, xièxie, nǐ yǒu chōngdiànxiàn ma?|Có, cảm ơn, bạn có dây sạc không?
有，你看看接口合不合适。|Yǒu, nǐ kànkan jiēkǒu hé bu héshì.|Có, bạn xem đầu cắm có phù hợp không.
这里有插座吗？|Zhèlǐ yǒu chāzuò ma?|Ở đây có ổ cắm không?
我可以在这里充电吗？|Wǒ kěyǐ zài zhèlǐ chōngdiàn ma?|Tôi có thể sạc ở đây không?
这根线好像坏了。|Zhè gēn xiàn hǎoxiàng huài le.|Dây này hình như hỏng rồi.
电量还剩百分之十。|Diànliàng hái shèng bǎi fēn zhī shí.|Pin còn mười phần trăm.
充一会儿就够了。|Chōng yíhuìr jiù gòu le.|Sạc một lát là đủ.
用完我马上还给你。|Yòng wán wǒ mǎshàng huán gěi nǐ.|Dùng xong tôi trả bạn ngay.
@sua-dien-thoai|Mang điện thoại đi sửa|Công nghệ|🛠️|检测 là kiểm tra; 备份 là sao lưu. Có thể yêu cầu báo giá trước khi đồng ý sửa.
我的手机屏幕碎了。|Wǒ de shǒujī píngmù suì le.|Màn hình điện thoại của tôi bị vỡ.
我先帮您检测一下。|Wǒ xiān bāng nín jiǎncè yíxià.|Tôi kiểm tra giúp anh/chị trước.
请先告诉我维修价格。|Qǐng xiān gàosu wǒ wéixiū jiàgé.|Xin báo giá sửa cho tôi trước.
好的，确认价格后再修。|Hǎo de, quèrèn jiàgé hòu zài xiū.|Vâng, xác nhận giá rồi mới sửa.
手机突然开不了机。|Shǒujī tūrán kāi bu liǎo jī.|Điện thoại bỗng không bật được.
充电的时候没有反应。|Chōngdiàn de shíhou méiyǒu fǎnyìng.|Khi sạc không có phản ứng.
里面的照片能保留吗？|Lǐmiàn de zhàopiàn néng bǎoliú ma?|Ảnh bên trong có giữ được không?
我已经做了备份。|Wǒ yǐjīng zuò le bèifèn.|Tôi đã sao lưu rồi.
换电池要多长时间？|Huàn diànchí yào duō cháng shíjiān?|Thay pin mất bao lâu?
修好后请联系我。|Xiū hǎo hòu qǐng liánxì wǒ.|Sửa xong xin liên hệ cho tôi.
@mua-hang-online|Hỏi mua hàng trực tuyến|Mua sắm & dịch vụ|🛍️|现货 là hàng có sẵn; 发货 là gửi hàng đi. Phân biệt 发货时间 với thời gian hàng tới nơi.
你好，这个还有现货吗？|Nǐ hǎo, zhège hái yǒu xiànhuò ma?|Chào bạn, mẫu này còn hàng sẵn không?
有的，您要哪个颜色？|Yǒu de, nín yào nǎ ge yánsè?|Có, anh/chị muốn màu nào?
粉色的，什么时候能发货？|Fěnsè de, shénme shíhou néng fā huò?|Màu hồng, khi nào có thể gửi hàng?
明天下午可以发出。|Míngtiān xiàwǔ kěyǐ fā chū.|Chiều mai có thể gửi đi.
可以看看实物照片吗？|Kěyǐ kànkan shíwù zhàopiàn ma?|Tôi xem ảnh thật của sản phẩm được không?
这个尺寸是多少？|Zhège chǐcùn shì duōshao?|Kích thước sản phẩm này là bao nhiêu?
运费包含在价格里吗？|Yùnfèi bāohán zài jiàgé lǐ ma?|Giá đã bao gồm phí vận chuyển chưa?
我想修改收货地址。|Wǒ xiǎng xiūgǎi shōuhuò dìzhǐ.|Tôi muốn sửa địa chỉ nhận hàng.
订单现在是什么状态？|Dìngdān xiànzài shì shénme zhuàngtài?|Đơn hàng hiện đang ở trạng thái nào?
收到后我会检查一下。|Shōu dào hòu wǒ huì jiǎnchá yíxià.|Sau khi nhận tôi sẽ kiểm tra.
@doi-hang|Đổi hàng & đổi kích cỡ|Mua sắm & dịch vụ|🔄|换货 là đổi hàng; 小票 là hóa đơn bán lẻ. Đây là câu hỏi về điều kiện cửa hàng, không giả định hàng nào cũng được đổi.
这件衣服可以换吗？|Zhè jiàn yīfu kěyǐ huàn ma?|Áo này có thể đổi không?
请问，您想换什么？|Qǐngwèn, nín xiǎng huàn shénme?|Xin hỏi, anh/chị muốn đổi gì?
我想换一个大号的。|Wǒ xiǎng huàn yí ge dà hào de.|Tôi muốn đổi sang cỡ lớn.
请给我看一下购物小票。|Qǐng gěi wǒ kàn yíxià gòuwù xiǎopiào.|Xin cho tôi xem hóa đơn mua hàng.
我昨天在这里买的。|Wǒ zuótiān zài zhèlǐ mǎi de.|Tôi mua ở đây hôm qua.
吊牌还没有拆。|Diàopái hái méiyǒu chāi.|Tôi vẫn chưa tháo thẻ sản phẩm.
能换成别的颜色吗？|Néng huàn chéng bié de yánsè ma?|Đổi sang màu khác được không?
需要补差价吗？|Xūyào bǔ chājià ma?|Có cần trả thêm phần chênh lệch không?
换货需要多长时间？|Huàn huò xūyào duō cháng shíjiān?|Đổi hàng mất bao lâu?
请帮我确认换货条件。|Qǐng bāng wǒ quèrèn huàn huò tiáojiàn.|Xin xác nhận điều kiện đổi hàng giúp tôi.
@hoan-tien|Yêu cầu trả hàng & hoàn tiền|Mua sắm & dịch vụ|💳|退款 là hoàn tiền; 退货 là trả hàng. 原路退回 nghĩa là hoàn về phương thức thanh toán ban đầu.
我想咨询一下退款。|Wǒ xiǎng zīxún yíxià tuìkuǎn.|Tôi muốn hỏi về việc hoàn tiền.
请问商品有什么问题？|Qǐngwèn shāngpǐn yǒu shénme wèntí?|Xin hỏi, sản phẩm gặp vấn đề gì?
收到的型号和订单不一样。|Shōu dào de xínghào hé dìngdān bù yíyàng.|Mẫu nhận được khác với đơn đặt.
请发一下照片和订单号。|Qǐng fā yíxià zhàopiàn hé dìngdānhào.|Xin gửi ảnh và mã đơn hàng.
我需要先退货吗？|Wǒ xūyào xiān tuì huò ma?|Tôi có cần trả hàng trước không?
退货地址在哪里？|Tuì huò dìzhǐ zài nǎlǐ?|Địa chỉ trả hàng ở đâu?
运费由谁承担？|Yùnfèi yóu shéi chéngdān?|Ai chịu phí vận chuyển?
退款会原路退回吗？|Tuìkuǎn huì yuán lù tuì huí ma?|Tiền có hoàn về phương thức thanh toán ban đầu không?
预计什么时候到账？|Yùjì shénme shíhou dào zhàng?|Dự kiến khi nào tiền vào tài khoản?
请告诉我申请的进度。|Qǐng gàosu wǒ shēnqǐng de jìndù.|Xin cho tôi biết tiến độ xử lý yêu cầu.
@rap-phim|Mua vé & xem phim|Vui chơi & sở thích|🎬|场 dùng cho suất chiếu; 排 và 座 lần lượt là hàng và ghế. 字幕 là phụ đề.
你想看哪部电影？|Nǐ xiǎng kàn nǎ bù diànyǐng?|Bạn muốn xem bộ phim nào?
想看这部喜剧。|Xiǎng kàn zhè bù xǐjù.|Tôi muốn xem bộ phim hài này.
那买晚上七点的票吧？|Nà mǎi wǎnshang qī diǎn de piào ba?|Vậy mua vé suất bảy giờ tối nhé?
好，选中间的位置。|Hǎo, xuǎn zhōngjiān de wèizhi.|Được, chọn chỗ ở giữa nhé.
这部电影有中文字幕吗？|Zhè bù diànyǐng yǒu Zhōngwén zìmù ma?|Phim này có phụ đề tiếng Trung không?
请问，几号厅？|Qǐngwèn, jǐ hào tīng?|Xin hỏi, phòng chiếu số mấy?
我们的座位在第六排。|Wǒmen de zuòwèi zài dì liù pái.|Ghế của mình ở hàng thứ sáu.
电影还有多久开始？|Diànyǐng hái yǒu duō jiǔ kāishǐ?|Bao lâu nữa phim bắt đầu?
请把手机调成静音。|Qǐng bǎ shǒujī tiáo chéng jìngyīn.|Xin chuyển điện thoại sang chế độ im lặng.
看完后我们聊聊剧情吧。|Kàn wán hòu wǒmen liáoliao jùqíng ba.|Xem xong mình bàn về nội dung phim nhé.
@buoi-hoa-nhac|Đi xem biểu diễn âm nhạc|Vui chơi & sở thích|🎵|演出 là buổi biểu diễn; 入场 là vào khu vực xem. Hỏi nhân viên về quy định tại địa điểm.
演唱会几点开始？|Yǎnchànghuì jǐ diǎn kāishǐ?|Buổi ca nhạc bắt đầu lúc mấy giờ?
晚上八点，七点可以入场。|Wǎnshang bā diǎn, qī diǎn kěyǐ rù chǎng.|Tám giờ tối, bảy giờ có thể vào.
我们提前半小时到吧。|Wǒmen tíqián bàn ge xiǎoshí dào ba.|Mình tới sớm nửa tiếng nhé.
好，在入口见。|Hǎo, zài rùkǒu jiàn.|Được, gặp ở cửa vào.
电子票在哪里出示？|Diànzǐpiào zài nǎlǐ chūshì?|Xuất trình vé điện tử ở đâu?
这个入口排哪一队？|Zhège rùkǒu pái nǎ yí duì?|Ở cửa này xếp hàng nào?
我们的座位连在一起吗？|Wǒmen de zuòwèi lián zài yìqǐ ma?|Ghế của mình có liền nhau không?
这里允许拍照吗？|Zhèlǐ yǔnxǔ pāizhào ma?|Ở đây có được chụp ảnh không?
这首歌我会唱。|Zhè shǒu gē wǒ huì chàng.|Tôi biết hát bài này.
散场后在哪里集合？|Sàn chǎng hòu zài nǎlǐ jíhé?|Tan buổi diễn thì tập trung ở đâu?
@bao-tang|Tham quan bảo tàng|Du lịch & di chuyển|🏛️|展厅 là phòng trưng bày; 讲解 là thuyết minh. 拍照 và 使用闪光灯 là hai việc cần hỏi riêng.
请问，需要预约吗？|Qǐngwèn, xūyào yùyuē ma?|Xin hỏi, có cần đặt lịch trước không?
您预约了吗？|Nín yùyuē le ma?|Anh/chị đã đặt lịch chưa?
预约了，这是确认信息。|Yùyuē le, zhè shì quèrèn xìnxī.|Tôi đặt rồi, đây là thông tin xác nhận.
好的，请从这里进入。|Hǎo de, qǐng cóng zhèlǐ jìnrù.|Vâng, xin vào từ đây.
今天有什么特别展览？|Jīntiān yǒu shénme tèbié zhǎnlǎn?|Hôm nay có triển lãm đặc biệt nào?
有中文讲解吗？|Yǒu Zhōngwén jiǎngjiě ma?|Có thuyết minh tiếng Trung không?
可以租语音导览器吗？|Kěyǐ zū yǔyīn dǎolǎnqì ma?|Có thể thuê máy thuyết minh không?
这个展厅可以拍照吗？|Zhège zhǎntīng kěyǐ pāizhào ma?|Phòng trưng bày này được chụp ảnh không?
请不要使用闪光灯。|Qǐng bú yào shǐyòng shǎnguāngdēng.|Xin đừng dùng đèn flash.
出口在几楼？|Chūkǒu zài jǐ lóu?|Lối ra ở tầng mấy?
`,String.raw`
@thu-vien|Mượn sách ở thư viện|Học tập & công việc|📚|借 là mượn; 还 là trả; 续借 là gia hạn mượn. Tra ngày trả trên tài khoản hoặc phiếu mượn.
请问，这本书可以借吗？|Qǐngwèn, zhè běn shū kěyǐ jiè ma?|Xin hỏi, cuốn sách này mượn được không?
可以，请出示借书证。|Kěyǐ, qǐng chūshì jièshūzhèng.|Được, xin cho xem thẻ thư viện.
我还没有，怎么办理？|Wǒ hái méiyǒu, zěnme bànlǐ?|Tôi chưa có, đăng ký thế nào?
请到服务台咨询。|Qǐng dào fúwùtái zīxún.|Xin tới quầy hỗ trợ để hỏi.
这本书最晚什么时候还？|Zhè běn shū zuì wǎn shénme shíhou huán?|Cuốn này hạn trả muộn nhất là khi nào?
我想续借这本书。|Wǒ xiǎng xùjiè zhè běn shū.|Tôi muốn gia hạn mượn cuốn này.
中文书在哪个区域？|Zhōngwén shū zài nǎ ge qūyù?|Sách tiếng Trung ở khu vực nào?
这里有空座位吗？|Zhèlǐ yǒu kòng zuòwèi ma?|Ở đây có chỗ trống không?
请保持安静。|Qǐng bǎochí ānjìng.|Xin giữ yên lặng.
我来还书。|Wǒ lái huán shū.|Tôi tới trả sách.
@hieu-sach|Tìm sách ở hiệu sách|Mua sắm & dịch vụ|📖|书名 là tên sách; 作者 là tác giả. 本 dùng để đếm sách.
你们有这本书吗？|Nǐmen yǒu zhè běn shū ma?|Cửa hàng có cuốn sách này không?
请问书名是什么？|Qǐngwèn shūmíng shì shénme?|Xin hỏi tên sách là gì?
我不记得书名，有封面的照片。|Wǒ bú jìde shūmíng, yǒu fēngmiàn de zhàopiàn.|Tôi không nhớ tên, nhưng có ảnh bìa.
给我看看，我帮您找。|Gěi wǒ kànkan, wǒ bāng nín zhǎo.|Cho tôi xem, tôi tìm giúp anh/chị.
我想买一本汉语词典。|Wǒ xiǎng mǎi yì běn Hànyǔ cídiǎn.|Tôi muốn mua một cuốn từ điển tiếng Trung.
有没有带拼音的故事书？|Yǒu méiyǒu dài pīnyīn de gùshishū?|Có sách truyện kèm pinyin không?
这本适合初学者吗？|Zhè běn shìhé chūxuézhě ma?|Cuốn này phù hợp với người mới học không?
可以先翻看一下吗？|Kěyǐ xiān fānkàn yíxià ma?|Tôi xem qua trước được không?
这本还有别的版本吗？|Zhè běn hái yǒu bié de bǎnběn ma?|Cuốn này còn phiên bản khác không?
请帮我订一本。|Qǐng bāng wǒ dìng yì běn.|Xin đặt giúp tôi một cuốn.
@phong-gym|Đăng ký & tập ở phòng gym|Vui chơi & sở thích|🏋️|体验课 là buổi học thử; 器械 là thiết bị tập. Không biết cách dùng thì nhờ huấn luyện viên hướng dẫn.
这里可以先体验一次吗？|Zhèlǐ kěyǐ xiān tǐyàn yí cì ma?|Ở đây có thể tập thử một lần không?
可以，您想参加什么课程？|Kěyǐ, nín xiǎng cānjiā shénme kèchéng?|Được, anh/chị muốn tham gia lớp nào?
我想先了解基础训练。|Wǒ xiǎng xiān liǎojiě jīchǔ xùnliàn.|Tôi muốn tìm hiểu bài tập cơ bản trước.
我请教练给您介绍一下。|Wǒ qǐng jiàoliàn gěi nín jièshào yíxià.|Tôi nhờ huấn luyện viên giới thiệu cho anh/chị.
更衣室在哪里？|Gēngyīshì zài nǎlǐ?|Phòng thay đồ ở đâu?
这台器械怎么使用？|Zhè tái qìxiè zěnme shǐyòng?|Thiết bị này dùng thế nào?
你还剩几组？|Nǐ hái shèng jǐ zǔ?|Bạn còn mấy hiệp nữa?
我们可以轮流用吗？|Wǒmen kěyǐ lúnliú yòng ma?|Mình dùng luân phiên được không?
我先休息一下。|Wǒ xiān xiūxi yíxià.|Tôi nghỉ một chút trước.
月卡包含哪些服务？|Yuèkǎ bāohán nǎxiē fúwù?|Thẻ tháng bao gồm những dịch vụ nào?
@boi-loi|Đi bơi tại hồ bơi|Vui chơi & sở thích|🏊|泳道 là làn bơi; 深水区 là khu nước sâu. Dùng 我不太会游泳 để nói rõ khả năng của mình.
请问，现在可以游泳吗？|Qǐngwèn, xiànzài kěyǐ yóuyǒng ma?|Xin hỏi, bây giờ bơi được không?
可以，请先看入场须知。|Kěyǐ, qǐng xiān kàn rùchǎng xūzhī.|Được, xin đọc hướng dẫn vào hồ trước.
需要戴泳帽吗？|Xūyào dài yǒngmào ma?|Có cần đội mũ bơi không?
需要，这里也可以买。|Xūyào, zhèlǐ yě kěyǐ mǎi.|Có, ở đây cũng có bán.
浅水区在哪边？|Qiǎnshuǐqū zài nǎ biān?|Khu nước nông ở phía nào?
我不太会游泳。|Wǒ bú tài huì yóuyǒng.|Tôi bơi chưa giỏi lắm.
有没有初学者课程？|Yǒu méiyǒu chūxuézhě kèchéng?|Có lớp cho người mới học không?
这条泳道有人用吗？|Zhè tiáo yǒngdào yǒu rén yòng ma?|Làn bơi này có người dùng không?
储物柜怎么锁？|Chǔwùguì zěnme suǒ?|Tủ đồ khóa thế nào?
游泳池几点关门？|Yóuyǒngchí jǐ diǎn guān mén?|Hồ bơi đóng cửa lúc mấy giờ?
@lop-yoga|Tham gia lớp yoga|Vui chơi & sở thích|🧘|跟不上 nghĩa là chưa theo kịp. Nói rõ khi muốn nghỉ hoặc cần động tác dễ hơn.
这是初级瑜伽课吗？|Zhè shì chūjí yújiā kè ma?|Đây là lớp yoga cơ bản phải không?
是的，你以前练过吗？|Shì de, nǐ yǐqián liàn guo ma?|Đúng, trước đây bạn đã tập chưa?
没有，这是第一次。|Méiyǒu, zhè shì dì yī cì.|Chưa, đây là lần đầu.
没关系，跟着自己的节奏来。|Méi guānxi, gēn zhe zìjǐ de jiézòu lái.|Không sao, cứ theo nhịp của mình.
需要自己带瑜伽垫吗？|Xūyào zìjǐ dài yújiādiàn ma?|Có cần tự mang thảm yoga không?
我坐在后面可以吗？|Wǒ zuò zài hòumian kěyǐ ma?|Tôi ngồi phía sau được không?
这个动作我跟不上。|Zhège dòngzuò wǒ gēn bu shàng.|Động tác này tôi chưa theo kịp.
有没有简单一点的做法？|Yǒu méiyǒu jiǎndān yìdiǎn de zuòfǎ?|Có cách tập đơn giản hơn không?
我需要休息一会儿。|Wǒ xūyào xiūxi yíhuìr.|Tôi cần nghỉ một lát.
下次上课是什么时候？|Xià cì shàng kè shì shénme shíhou?|Buổi học tiếp theo là khi nào?
@chay-bo|Rủ nhau chạy bộ|Vui chơi & sở thích|🏃|配速 là nhịp chạy theo thời gian trên quãng đường. 慢跑 là chạy chậm.
明天早上一起跑步吗？|Míngtiān zǎoshang yìqǐ pǎobù ma?|Sáng mai cùng chạy bộ không?
好，在哪里见？|Hǎo, zài nǎlǐ jiàn?|Được, gặp ở đâu?
六点半，在公园门口。|Liù diǎn bàn, zài gōngyuán ménkǒu.|Sáu giờ rưỡi, ở cửa công viên.
没问题，我带点水。|Méi wèntí, wǒ dài diǎn shuǐ.|Không vấn đề, tôi mang ít nước.
我们先热身吧。|Wǒmen xiān rèshēn ba.|Mình khởi động trước nhé.
今天慢跑三公里。|Jīntiān mànpǎo sān gōnglǐ.|Hôm nay chạy chậm ba ki-lô-mét.
你跑得太快了。|Nǐ pǎo de tài kuài le.|Bạn chạy nhanh quá.
我们放慢一点吧。|Wǒmen fàng màn yìdiǎn ba.|Mình chậm lại chút nhé.
前面有个休息的地方。|Qiánmian yǒu ge xiūxi de dìfang.|Phía trước có chỗ nghỉ.
今天就跑到这里吧。|Jīntiān jiù pǎo dào zhèlǐ ba.|Hôm nay chạy đến đây thôi nhé.
@cau-long|Hẹn chơi cầu lông|Vui chơi & sở thích|🏸|球拍 là vợt; 双打 là đánh đôi. 轮到你了 nghĩa là đến lượt bạn.
周末去打羽毛球吗？|Zhōumò qù dǎ yǔmáoqiú ma?|Cuối tuần đi đánh cầu lông không?
好啊，场地订了吗？|Hǎo a, chǎngdì dìng le ma?|Được đấy, đặt sân chưa?
订了，周六下午三点。|Dìng le, zhōuliù xiàwǔ sān diǎn.|Đặt rồi, ba giờ chiều thứ Bảy.
好，我带球拍和球。|Hǎo, wǒ dài qiúpāi hé qiú.|Được, tôi mang vợt và cầu.
你会打双打吗？|Nǐ huì dǎ shuāngdǎ ma?|Bạn biết đánh đôi không?
我们先练习发球。|Wǒmen xiān liànxí fā qiú.|Mình tập giao cầu trước.
这个球出界了。|Zhège qiú chū jiè le.|Quả cầu này ra ngoài rồi.
现在比分是多少？|Xiànzài bǐfēn shì duōshao?|Tỷ số bây giờ là bao nhiêu?
轮到你发球了。|Lún dào nǐ fā qiú le.|Đến lượt bạn giao cầu.
休息五分钟再打。|Xiūxi wǔ fēnzhōng zài dǎ.|Nghỉ năm phút rồi đánh tiếp.
@dap-xe|Đạp xe cùng bạn bè|Vui chơi & sở thích|🚴|骑车 có thể nói về việc đi xe hai bánh; 自行车 chỉ rõ xe đạp. 刹车 là phanh.
下午一起骑自行车吗？|Xiàwǔ yìqǐ qí zìxíngchē ma?|Chiều cùng đạp xe không?
好，走哪条路线？|Hǎo, zǒu nǎ tiáo lùxiàn?|Được, đi tuyến nào?
沿着河边骑吧。|Yán zhe hébiān qí ba.|Đạp dọc bờ sông nhé.
好，我先检查一下车。|Hǎo, wǒ xiān jiǎnchá yíxià chē.|Được, tôi kiểm tra xe trước.
别忘了戴头盔。|Bié wàng le dài tóukuī.|Đừng quên đội mũ bảo hiểm.
我的车胎气不足。|Wǒ de chētāi qì bù zú.|Lốp xe tôi hơi non.
附近有打气的地方吗？|Fùjìn yǒu dǎ qì de dìfang ma?|Gần đây có chỗ bơm xe không?
前面有坡，慢一点。|Qiánmian yǒu pō, màn yìdiǎn.|Phía trước có dốc, chậm chút.
我们在路边停一下。|Wǒmen zài lùbiān tíng yíxià.|Mình dừng bên đường một chút.
回程换一条路吧。|Huíchéng huàn yì tiáo lù ba.|Lúc về đổi đường khác nhé.
@cong-vien|Đi dạo trong công viên|Vui chơi & sở thích|🌳|散步 là đi dạo; 绕一圈 là đi một vòng. Chỉ đường bằng 湖边 hoặc 大门口 cho dễ nhận biết.
晚饭后去公园走走吗？|Wǎnfàn hòu qù gōngyuán zǒuzou ma?|Sau bữa tối đi dạo công viên không?
好，今天天气不错。|Hǎo, jīntiān tiānqì búcuò.|Được, hôm nay thời tiết khá đẹp.
我们从哪个门进去？|Wǒmen cóng nǎ ge mén jìnqu?|Mình vào từ cổng nào?
从南门，离湖比较近。|Cóng nánmén, lí hú bǐjiào jìn.|Từ cổng nam, gần hồ hơn.
这里的花开得真漂亮。|Zhèlǐ de huā kāi de zhēn piàoliang.|Hoa ở đây nở đẹp thật.
我们绕湖走一圈吧。|Wǒmen rào hú zǒu yì quān ba.|Mình đi một vòng quanh hồ nhé.
那边有长椅。|Nàbian yǒu chángyǐ.|Bên kia có ghế dài.
洗手间在什么方向？|Xǐshǒujiān zài shénme fāngxiàng?|Nhà vệ sinh ở hướng nào?
请不要踩草坪。|Qǐng bú yào cǎi cǎopíng.|Xin đừng giẫm lên bãi cỏ.
天快黑了，我们回去吧。|Tiān kuài hēi le, wǒmen huíqu ba.|Trời sắp tối rồi, mình về nhé.
@vuon-thu|Tham quan vườn thú|Du lịch & di chuyển|🐼|喂 là cho ăn; 围栏 là hàng rào. 看动物 là xem động vật, không hàm ý được chạm hay cho ăn.
你最想看什么动物？|Nǐ zuì xiǎng kàn shénme dòngwù?|Bạn muốn xem con vật nào nhất?
我想先看大熊猫。|Wǒ xiǎng xiān kàn dàxióngmāo.|Tôi muốn xem gấu trúc trước.
熊猫馆在地图的这边。|Xióngmāoguǎn zài dìtú de zhè biān.|Khu gấu trúc ở phía này trên bản đồ.
好，我们沿这条路走。|Hǎo, wǒmen yán zhè tiáo lù zǒu.|Được, mình đi dọc đường này.
它正在吃竹子。|Tā zhèngzài chī zhúzi.|Nó đang ăn tre.
请不要敲玻璃。|Qǐng bú yào qiāo bōli.|Xin đừng gõ kính.
这里禁止喂动物。|Zhèlǐ jìnzhǐ wèi dòngwù.|Ở đây cấm cho động vật ăn.
我们站在围栏外面看。|Wǒmen zhàn zài wéilán wàimian kàn.|Mình đứng ngoài hàng rào xem.
这个动物叫什么名字？|Zhège dòngwù jiào shénme míngzi?|Con vật này tên là gì?
我们去看看介绍牌。|Wǒmen qù kànkan jièshàopái.|Mình đi xem bảng giới thiệu nhé.
@di-bien|Đi chơi ở bãi biển|Du lịch & di chuyển|🏖️|海边 là ven biển; 涨潮 là thủy triều lên. Hỏi nhân viên khu vực được phép xuống nước.
我们把东西放在哪里？|Wǒmen bǎ dōngxi fàng zài nǎlǐ?|Mình để đồ ở đâu?
放在这把伞下面吧。|Fàng zài zhè bǎ sǎn xiàmian ba.|Để dưới chiếc ô này nhé.
好，你想先散步吗？|Hǎo, nǐ xiǎng xiān sànbù ma?|Được, bạn muốn đi dạo trước không?
想，沿着海边走走吧。|Xiǎng, yán zhe hǎibiān zǒuzou ba.|Có, mình đi dọc bờ biển nhé.
沙子有点烫。|Shāzi yǒudiǎn tàng.|Cát hơi nóng.
这里可以游泳吗？|Zhèlǐ kěyǐ yóuyǒng ma?|Ở đây được bơi không?
我们先问问救生员。|Wǒmen xiān wènwen jiùshēngyuán.|Mình hỏi nhân viên cứu hộ trước.
今天浪有点大。|Jīntiān làng yǒudiǎn dà.|Hôm nay sóng hơi lớn.
别把垃圾留在沙滩上。|Bié bǎ lājī liú zài shātān shàng.|Đừng để rác lại trên bãi biển.
我们等日落再回去吧。|Wǒmen děng rìluò zài huíqu ba.|Mình đợi ngắm hoàng hôn rồi về nhé.
@cam-trai|Chuẩn bị & đi cắm trại|Du lịch & di chuyển|⛺|搭帐篷 là dựng lều; 营地 là khu cắm trại. Nói rõ số người và thời gian khi đặt chỗ.
周末去露营需要带什么？|Zhōumò qù lùyíng xūyào dài shénme?|Cuối tuần đi cắm trại cần mang gì?
帐篷、睡袋，还有饮用水。|Zhàngpeng, shuìdài, hái yǒu yǐnyòngshuǐ.|Lều, túi ngủ và nước uống.
帐篷我来带吧。|Zhàngpeng wǒ lái dài ba.|Để tôi mang lều nhé.
好，我负责带吃的。|Hǎo, wǒ fùzé dài chī de.|Được, tôi phụ trách mang đồ ăn.
营地需要提前预订吗？|Yíngdì xūyào tíqián yùdìng ma?|Khu cắm trại có cần đặt trước không?
这里允许搭帐篷吗？|Zhèlǐ yǔnxǔ dā zhàngpeng ma?|Ở đây có được dựng lều không?
地面有点不平。|Dìmiàn yǒudiǎn bù píng.|Mặt đất hơi không bằng phẳng.
我们换个位置吧。|Wǒmen huàn ge wèizhi ba.|Mình đổi chỗ khác nhé.
晚上可能会冷。|Wǎnshang kěnéng huì lěng.|Buổi tối có thể sẽ lạnh.
离开前检查有没有遗漏。|Líkāi qián jiǎnchá yǒu méiyǒu yílòu.|Trước khi rời đi kiểm tra xem có bỏ sót gì không.
@da-ngoai|Tổ chức buổi picnic|Vui chơi & sở thích|🧺|野餐 là picnic; 分工 là chia việc. 自带 nghĩa là tự mang theo.
周日一起去野餐吧？|Zhōurì yìqǐ qù yěcān ba?|Chủ nhật cùng đi picnic nhé?
好，我们怎么分工？|Hǎo, wǒmen zěnme fēngōng?|Được, mình chia việc thế nào?
我带三明治，你带水果。|Wǒ dài sānmíngzhì, nǐ dài shuǐguǒ.|Tôi mang bánh mì kẹp, bạn mang trái cây.
没问题，我再带一张垫子。|Méi wèntí, wǒ zài dài yì zhāng diànzi.|Không vấn đề, tôi mang thêm tấm thảm.
大家自带水杯。|Dàjiā zì dài shuǐbēi.|Mọi người tự mang cốc nước.
我们找个有树荫的地方。|Wǒmen zhǎo ge yǒu shùyīn de dìfang.|Mình tìm chỗ có bóng cây.
食物放在保温袋里。|Shíwù fàng zài bǎowēndài lǐ.|Đồ ăn để trong túi giữ nhiệt.
风有点大，压住桌布。|Fēng yǒudiǎn dà, yā zhù zhuōbù.|Gió hơi lớn, chặn khăn trải lại.
要是下雨，就改天吧。|Yàoshi xià yǔ, jiù gǎi tiān ba.|Nếu trời mưa thì đổi hôm khác nhé.
我们把垃圾都带走。|Wǒmen bǎ lājī dōu dài zǒu.|Mình mang hết rác đi.
@chup-anh|Nhờ chụp ảnh & tạo dáng|Vui chơi & sở thích|📸|横着拍 là chụp ngang; 竖着拍 là chụp dọc. 逆光 nghĩa là ngược sáng.
不好意思，能帮我们拍张照吗？|Bù hǎoyìsi, néng bāng wǒmen pāi zhāng zhào ma?|Xin lỗi, bạn chụp giúp chúng tôi một tấm được không?
可以，用这部手机吗？|Kěyǐ, yòng zhè bù shǒujī ma?|Được, dùng điện thoại này phải không?
对，按这个按钮就好。|Duì, àn zhège ànniǔ jiù hǎo.|Đúng, chỉ cần bấm nút này.
好，看这里，一、二、三！|Hǎo, kàn zhèlǐ, yī, èr, sān!|Được, nhìn đây, một, hai, ba!
能再拍一张吗？|Néng zài pāi yì zhāng ma?|Bạn chụp thêm một tấm được không?
请把后面的花也拍进去。|Qǐng bǎ hòumian de huā yě pāi jìnqu.|Xin chụp cả hoa phía sau vào ảnh.
这张有点模糊。|Zhè zhāng yǒudiǎn móhu.|Tấm này hơi mờ.
我们换个角度吧。|Wǒmen huàn ge jiǎodù ba.|Mình đổi góc khác nhé.
这里逆光，站到那边吧。|Zhèlǐ nìguāng, zhàn dào nàbian ba.|Ở đây ngược sáng, đứng sang bên kia nhé.
发照片前我会先问你。|Fā zhàopiàn qián wǒ huì xiān wèn nǐ.|Trước khi gửi ảnh tôi sẽ hỏi bạn trước.
@thu-cung|Trò chuyện về thú cưng|Cuộc sống|🐈|养 là nuôi; 摸 là vuốt hoặc chạm. Luôn hỏi chủ trước khi chạm vào thú cưng.
这是你养的小猫吗？|Zhè shì nǐ yǎng de xiǎomāo ma?|Đây là mèo bạn nuôi phải không?
是的，它叫奶茶。|Shì de, tā jiào Nǎichá.|Đúng, nó tên là Trà Sữa.
真可爱，我可以摸摸它吗？|Zhēn kě'ài, wǒ kěyǐ mōmo tā ma?|Dễ thương thật, tôi vuốt nó được không?
可以，轻一点就好。|Kěyǐ, qīng yìdiǎn jiù hǎo.|Được, nhẹ tay là được.
它今年几岁了？|Tā jīnnián jǐ suì le?|Năm nay nó mấy tuổi?
你每天遛狗吗？|Nǐ měi tiān liù gǒu ma?|Bạn dắt chó đi dạo mỗi ngày không?
请把牵引绳系好。|Qǐng bǎ qiānyǐnshéng jì hǎo.|Xin buộc dây dắt cẩn thận.
它有点怕生。|Tā yǒudiǎn pàshēng.|Nó hơi sợ người lạ.
我出门时请你帮忙喂猫。|Wǒ chū mén shí qǐng nǐ bāngmáng wèi māo.|Khi tôi đi vắng, nhờ bạn cho mèo ăn giúp.
宠物店在小区旁边。|Chǒngwùdiàn zài xiǎoqū pángbiān.|Cửa hàng thú cưng ở cạnh khu dân cư.
@mua-hoa|Mua hoa & chăm cây|Cuộc sống|🌷|束 dùng cho bó hoa; 盆 dùng cho chậu cây. 浇水 là tưới nước.
我想买一束花送朋友。|Wǒ xiǎng mǎi yí shù huā sòng péngyou.|Tôi muốn mua một bó hoa tặng bạn.
您的朋友喜欢什么颜色？|Nín de péngyou xǐhuan shénme yánsè?|Bạn của anh/chị thích màu gì?
她喜欢粉色，预算一百块。|Tā xǐhuan fěnsè, yùsuàn yì bǎi kuài.|Cô ấy thích màu hồng, ngân sách một trăm tệ.
好的，我帮您搭配。|Hǎo de, wǒ bāng nín dāpèi.|Vâng, tôi phối hoa giúp anh/chị.
能加一张小卡片吗？|Néng jiā yì zhāng xiǎo kǎpiàn ma?|Có thể thêm một tấm thiệp nhỏ không?
请包装得简单一点。|Qǐng bāozhuāng de jiǎndān yìdiǎn.|Xin gói đơn giản hơn một chút.
这盆植物需要多少阳光？|Zhè pén zhíwù xūyào duōshao yángguāng?|Chậu cây này cần bao nhiêu ánh nắng?
多久浇一次水？|Duō jiǔ jiāo yí cì shuǐ?|Bao lâu tưới nước một lần?
可以放在室内吗？|Kěyǐ fàng zài shìnèi ma?|Có thể để trong nhà không?
叶子有点黄了。|Yèzi yǒudiǎn huáng le.|Lá hơi vàng rồi.
@hang-xom|Làm quen & trao đổi với hàng xóm|Cuộc sống|🏘️|邻居 là hàng xóm; 打扰 là làm phiền. Nhắc vấn đề bằng 有点… giúp lời nói nhẹ nhàng hơn.
你好，我刚搬到隔壁。|Nǐ hǎo, wǒ gāng bān dào gébì.|Chào bạn, tôi vừa chuyển tới căn bên cạnh.
欢迎，以后我们就是邻居了。|Huānyíng, yǐhòu wǒmen jiù shì línjū le.|Chào mừng, từ nay mình là hàng xóm rồi.
以后请多关照。|Yǐhòu qǐng duō guānzhào.|Sau này mong được bạn giúp đỡ.
有需要随时找我。|Yǒu xūyào suíshí zhǎo wǒ.|Cần gì cứ tìm tôi nhé.
不好意思，昨天有点吵。|Bù hǎoyìsi, zuótiān yǒudiǎn chǎo.|Xin lỗi, hôm qua hơi ồn.
晚上能小声一点吗？|Wǎnshang néng xiǎo shēng yìdiǎn ma?|Buổi tối bạn nhỏ tiếng hơn chút được không?
这个快递是不是你的？|Zhège kuàidì shì bu shì nǐ de?|Bưu kiện này có phải của bạn không?
电梯好像停了。|Diàntī hǎoxiàng tíng le.|Thang máy hình như dừng rồi.
楼道里请不要堆东西。|Lóudào lǐ qǐng bú yào duī dōngxi.|Xin đừng chất đồ ở hành lang.
谢谢你帮我收快递。|Xièxie nǐ bāng wǒ shōu kuàidì.|Cảm ơn bạn đã nhận bưu kiện giúp tôi.
@ban-cung-phong|Thỏa thuận với bạn cùng phòng|Cuộc sống|🛋️|轮流 là luân phiên; 公共区域 là khu dùng chung. 说好 là bàn và thống nhất trước.
我们先说好打扫的安排吧？|Wǒmen xiān shuō hǎo dǎsǎo de ānpái ba?|Mình thống nhất lịch dọn dẹp trước nhé?
好，厨房轮流打扫怎么样？|Hǎo, chúfáng lúnliú dǎsǎo zěnmeyàng?|Được, luân phiên dọn bếp thì sao?
可以，这周我来，下周你来。|Kěyǐ, zhè zhōu wǒ lái, xià zhōu nǐ lái.|Được, tuần này tôi làm, tuần sau bạn làm.
没问题，我记在日历上。|Méi wèntí, wǒ jì zài rìlì shàng.|Không vấn đề, tôi ghi vào lịch.
用完厨房请收拾一下。|Yòng wán chúfáng qǐng shōushi yíxià.|Dùng bếp xong xin dọn lại.
我可以借一下你的锅吗？|Wǒ kěyǐ jiè yíxià nǐ de guō ma?|Tôi mượn nồi của bạn một chút được không?
冰箱上层留给你。|Bīngxiāng shàng céng liú gěi nǐ.|Ngăn trên tủ lạnh để cho bạn.
我今晚有朋友来。|Wǒ jīnwǎn yǒu péngyou lái.|Tối nay tôi có bạn tới chơi.
十点以后尽量安静一点。|Shí diǎn yǐhòu jǐnliàng ānjìng yìdiǎn.|Sau mười giờ cố gắng yên lặng hơn chút.
公共用品我们一起买吧。|Gōnggòng yòngpǐn wǒmen yìqǐ mǎi ba.|Đồ dùng chung mình cùng mua nhé.
@xem-nha-thue|Hỏi thuê & xem căn hộ|Cuộc sống|🔑|房租 là tiền thuê; 押金 là tiền cọc. Dùng 包含 hỏi khoản nào nằm trong giá thuê.
这套房子还可以租吗？|Zhè tào fángzi hái kěyǐ zū ma?|Căn hộ này còn cho thuê không?
可以，您什么时候方便看房？|Kěyǐ, nín shénme shíhou fāngbiàn kàn fáng?|Còn, khi nào anh/chị tiện xem nhà?
明天下午可以吗？|Míngtiān xiàwǔ kěyǐ ma?|Chiều mai được không?
可以，我们三点见。|Kěyǐ, wǒmen sān diǎn jiàn.|Được, mình gặp lúc ba giờ.
每个月房租多少？|Měi ge yuè fángzū duōshao?|Tiền thuê mỗi tháng bao nhiêu?
水电费包含在房租里吗？|Shuǐdiànfèi bāohán zài fángzū lǐ ma?|Giá thuê đã bao gồm điện nước chưa?
押金需要交多少？|Yājīn xūyào jiāo duōshao?|Cần đặt cọc bao nhiêu?
最短可以租多久？|Zuì duǎn kěyǐ zū duō jiǔ?|Thời gian thuê tối thiểu là bao lâu?
房间里的家具都包括吗？|Fángjiān lǐ de jiājù dōu bāokuò ma?|Có bao gồm toàn bộ nội thất trong phòng không?
我想先看看合同。|Wǒ xiǎng xiān kànkan hétong.|Tôi muốn xem hợp đồng trước.
@chuyen-nha|Thuê xe & chuyển nhà|Cuộc sống|🚚|搬家 là chuyển nhà; 易碎 là dễ vỡ. Báo rõ tầng và thang máy khi hỏi giá.
我想预约搬家服务。|Wǒ xiǎng yùyuē bānjiā fúwù.|Tôi muốn đặt dịch vụ chuyển nhà.
您准备哪天搬？|Nín zhǔnbèi nǎ tiān bān?|Anh/chị dự định chuyển hôm nào?
周六上午，从三楼搬到五楼。|Zhōuliù shàngwǔ, cóng sān lóu bān dào wǔ lóu.|Sáng thứ Bảy, chuyển từ tầng ba sang tầng năm.
两边都有电梯吗？|Liǎng biān dōu yǒu diàntī ma?|Cả hai nơi đều có thang máy chứ?
这些箱子里是书。|Zhèxiē xiāngzi lǐ shì shū.|Trong những thùng này là sách.
这个箱子易碎，请轻放。|Zhège xiāngzi yì suì, qǐng qīng fàng.|Thùng này dễ vỡ, xin đặt nhẹ tay.
大件家具需要拆开吗？|Dà jiàn jiājù xūyào chāi kāi ma?|Nội thất lớn có cần tháo ra không?
费用包括搬上楼吗？|Fèiyòng bāokuò bān shàng lóu ma?|Chi phí có bao gồm mang lên tầng không?
请把桌子放在窗边。|Qǐng bǎ zhuōzi fàng zài chuāngbiān.|Xin đặt bàn cạnh cửa sổ.
我们核对一下物品数量。|Wǒmen héduì yíxià wùpǐn shùliàng.|Mình kiểm tra lại số lượng đồ đạc.
`,String.raw`
@tien-dien|Hỏi hóa đơn & sự cố điện|Cuộc sống|💡|停电 là mất điện; 电费 là tiền điện; 跳闸 là nhảy cầu dao. Dùng câu mẫu để báo sự cố cho người phụ trách.
家里怎么没电了？|Jiālǐ zěnme méi diàn le?|Sao nhà mình mất điện rồi?
我看看是不是跳闸了。|Wǒ kànkan shì bu shì tiào zhá le.|Để tôi xem có phải nhảy cầu dao không.
走廊的灯也不亮。|Zǒuláng de dēng yě bú liàng.|Đèn hành lang cũng không sáng.
那我们问问物业吧。|Nà wǒmen wènwen wùyè ba.|Vậy mình hỏi ban quản lý nhé.
这个月电费是多少？|Zhège yuè diànfèi shì duōshao?|Tiền điện tháng này bao nhiêu?
在哪里可以查看账单？|Zài nǎlǐ kěyǐ chákàn zhàngdān?|Có thể xem hóa đơn ở đâu?
电费已经交过了。|Diànfèi yǐjīng jiāo guo le.|Tiền điện đã đóng rồi.
预计什么时候恢复供电？|Yùjì shénme shíhou huīfù gōngdiàn?|Dự kiến khi nào có điện trở lại?
这个插座好像有问题。|Zhège chāzuò hǎoxiàng yǒu wèntí.|Ổ cắm này hình như có vấn đề.
请安排电工来检查。|Qǐng ānpái diàngōng lái jiǎnchá.|Xin bố trí thợ điện tới kiểm tra.
@nuoc-sinh-hoat|Báo sự cố nước & vòi nước|Cuộc sống|🚰|漏水 là rò nước; 停水 là mất nước; 水压 là áp lực nước. 报修 là báo yêu cầu sửa chữa.
厨房的水龙头一直漏水。|Chúfáng de shuǐlóngtóu yìzhí lòu shuǐ.|Vòi nước trong bếp cứ bị rò.
你联系房东了吗？|Nǐ liánxì fángdōng le ma?|Bạn đã liên hệ chủ nhà chưa?
联系了，他说下午安排人来。|Liánxì le, tā shuō xiàwǔ ānpái rén lái.|Rồi, ông ấy nói chiều sẽ bố trí người tới.
好，先把下面的东西移开。|Hǎo, xiān bǎ xiàmian de dōngxi yí kāi.|Được, chuyển đồ bên dưới ra trước.
今天小区停水吗？|Jīntiān xiǎoqū tíng shuǐ ma?|Hôm nay khu nhà có cắt nước không?
热水器没有热水。|Rèshuǐqì méiyǒu rè shuǐ.|Bình nước nóng không có nước nóng.
水压比平时低。|Shuǐyā bǐ píngshí dī.|Áp lực nước thấp hơn thường ngày.
洗手池排水很慢。|Xǐshǒuchí páishuǐ hěn màn.|Bồn rửa thoát nước rất chậm.
我想报修一下。|Wǒ xiǎng bàoxiū yíxià.|Tôi muốn báo sửa chữa.
师傅大概几点到？|Shīfu dàgài jǐ diǎn dào?|Khoảng mấy giờ thợ sẽ tới?
@sua-mang|Báo hỏng & sửa mạng Internet|Công nghệ|🌐|断网 là mất mạng; 路由器 là bộ định tuyến. 重启 là khởi động lại.
您好，我家的网络断了。|Nín hǎo, wǒ jiā de wǎngluò duàn le.|Xin chào, mạng nhà tôi bị ngắt.
请问，路由器的灯亮吗？|Qǐngwèn, lùyóuqì de dēng liàng ma?|Xin hỏi, đèn bộ định tuyến có sáng không?
亮着，但是上不了网。|Liàng zhe, dànshì shàng bu liǎo wǎng.|Có sáng nhưng không vào mạng được.
好的，我帮您查询一下。|Hǎo de, wǒ bāng nín cháxún yíxià.|Vâng, tôi kiểm tra giúp anh/chị.
我已经重启过了。|Wǒ yǐjīng chóngqǐ guo le.|Tôi đã khởi động lại rồi.
所有设备都连不上。|Suǒyǒu shèbèi dōu lián bu shàng.|Tất cả thiết bị đều không kết nối được.
网速最近特别慢。|Wǎngsù zuìjìn tèbié màn.|Gần đây tốc độ mạng rất chậm.
可以预约上门检查吗？|Kěyǐ yùyuē shàngmén jiǎnchá ma?|Có thể đặt lịch kiểm tra tại nhà không?
我明天上午在家。|Wǒ míngtiān shàngwǔ zài jiā.|Sáng mai tôi ở nhà.
维修前请先打电话。|Wéixiū qián qǐng xiān dǎ diànhuà.|Trước khi tới sửa xin gọi điện trước.
@do-gia-dung|Sử dụng & bảo hành đồ gia dụng|Mua sắm & dịch vụ|🔌|说明书 là hướng dẫn sử dụng; 保修 là bảo hành sửa chữa. Hỏi rõ phạm vi bảo hành của sản phẩm.
这个电饭锅怎么用？|Zhège diànfànguō zěnme yòng?|Nồi cơm điện này dùng thế nào?
先选模式，再按开始。|Xiān xuǎn móshì, zài àn kāishǐ.|Chọn chế độ trước, rồi bấm bắt đầu.
说明书里有中文介绍吗？|Shuōmíngshū lǐ yǒu Zhōngwén jièshào ma?|Sách hướng dẫn có phần tiếng Trung không?
有，在前面几页。|Yǒu, zài qiánmian jǐ yè.|Có, ở mấy trang đầu.
这台机器有点响。|Zhè tái jīqì yǒudiǎn xiǎng.|Máy này hơi ồn.
空调遥控器在哪里？|Kōngtiáo yáokòngqì zài nǎlǐ?|Điều khiển điều hòa ở đâu?
温度可以调高一点吗？|Wēndù kěyǐ tiáo gāo yìdiǎn ma?|Có thể tăng nhiệt độ lên chút không?
这个还在保修期内吗？|Zhège hái zài bǎoxiūqī nèi ma?|Sản phẩm này còn trong thời hạn bảo hành không?
需要提供购买凭证吗？|Xūyào tígōng gòumǎi píngzhèng ma?|Có cần cung cấp chứng từ mua hàng không?
请告诉我售后服务的联系方式。|Qǐng gàosu wǒ shòuhòu fúwù de liánxì fāngshì.|Xin cho tôi thông tin liên hệ dịch vụ sau bán hàng.
@bao-ve-toa-nha|Trao đổi với bảo vệ & lễ tân tòa nhà|Cuộc sống|🏢|访客 là khách tới thăm; 门禁卡 là thẻ ra vào. 登记 là đăng ký thông tin.
您好，我来找三楼的朋友。|Nín hǎo, wǒ lái zhǎo sān lóu de péngyou.|Xin chào, tôi tới gặp bạn ở tầng ba.
请问，您和他约好了吗？|Qǐngwèn, nín hé tā yuē hǎo le ma?|Xin hỏi, anh/chị đã hẹn trước với người đó chưa?
约好了，我现在给他打电话。|Yuē hǎo le, wǒ xiànzài gěi tā dǎ diànhuà.|Hẹn rồi, bây giờ tôi gọi cho bạn ấy.
好的，请先登记一下。|Hǎo de, qǐng xiān dēngjì yíxià.|Vâng, xin đăng ký trước.
访客需要从哪个门进？|Fǎngkè xūyào cóng nǎ ge mén jìn?|Khách cần vào từ cửa nào?
我的门禁卡刷不开。|Wǒ de ménjìnkǎ shuā bu kāi.|Thẻ ra vào của tôi quẹt không mở được.
我忘带门禁卡了。|Wǒ wàng dài ménjìnkǎ le.|Tôi quên mang thẻ ra vào.
请帮我联系物业。|Qǐng bāng wǒ liánxì wùyè.|Xin giúp tôi liên hệ ban quản lý.
有东西落在大厅了。|Yǒu dōngxi là zài dàtīng le.|Tôi để quên đồ ở sảnh.
失物招领处在哪里？|Shīwù zhāolǐngchù zài nǎlǐ?|Quầy đồ thất lạc ở đâu?
@gui-xe|Tìm chỗ & gửi xe|Du lịch & di chuyển|🅿️|停车场 là bãi đỗ xe; 车位 là chỗ đỗ. 临时停车 nghĩa là đỗ xe tạm thời.
请问，这里可以停车吗？|Qǐngwèn, zhèlǐ kěyǐ tíng chē ma?|Xin hỏi, có thể đỗ xe ở đây không?
可以，请开到地下停车场。|Kěyǐ, qǐng kāi dào dìxià tíngchēchǎng.|Được, xin đi xuống bãi đỗ xe ngầm.
入口在前面吗？|Rùkǒu zài qiánmian ma?|Lối vào ở phía trước phải không?
对，往前走再右转。|Duì, wǎng qián zǒu zài yòu zhuǎn.|Đúng, đi tiếp rồi rẽ phải.
还有空车位吗？|Hái yǒu kòng chēwèi ma?|Còn chỗ đỗ trống không?
停车费怎么收？|Tíngchēfèi zěnme shōu?|Phí đỗ xe tính thế nào?
我只停半个小时。|Wǒ zhǐ tíng bàn ge xiǎoshí.|Tôi chỉ đỗ nửa tiếng.
停车票需要保留吗？|Tíngchēpiào xūyào bǎoliú ma?|Có cần giữ vé xe không?
我忘了车停在哪一层。|Wǒ wàng le chē tíng zài nǎ yì céng.|Tôi quên đã đỗ xe ở tầng nào.
出口可以扫码付款吗？|Chūkǒu kěyǐ sǎo mǎ fùkuǎn ma?|Ở lối ra có thể quét mã thanh toán không?
@goi-taxi|Gọi & đi taxi|Du lịch & di chuyển|🚕|师傅 là cách gọi lịch sự thường dùng với tài xế. 靠边停 là dừng sát bên đường.
师傅，去这个地址。|Shīfu, qù zhège dìzhǐ.|Bác tài, tới địa chỉ này giúp tôi.
好的，您赶时间吗？|Hǎo de, nín gǎn shíjiān ma?|Vâng, anh/chị có vội không?
有一点，麻烦您了。|Yǒu yìdiǎn, máfan nín le.|Có một chút, phiền bác nhé.
我尽量选不堵的路。|Wǒ jǐnliàng xuǎn bù dǔ de lù.|Tôi sẽ cố chọn đường ít tắc.
请问，大概要多久？|Qǐngwèn, dàgài yào duō jiǔ?|Xin hỏi, khoảng bao lâu thì tới?
请把空调调小一点。|Qǐng bǎ kōngtiáo tiáo xiǎo yìdiǎn.|Xin giảm điều hòa một chút.
前面路口右转。|Qiánmian lùkǒu yòu zhuǎn.|Ngã rẽ phía trước rẽ phải.
在这里靠边停就好。|Zài zhèlǐ kào biān tíng jiù hǎo.|Dừng sát lề ở đây là được.
请给我一张发票。|Qǐng gěi wǒ yì zhāng fāpiào.|Xin cho tôi một hóa đơn.
我好像把包落在车上了。|Wǒ hǎoxiàng bǎ bāo là zài chē shàng le.|Tôi hình như để quên túi trên xe.
@xe-buyt|Hỏi tuyến & đi xe buýt|Du lịch & di chuyển|🚌|站 có nghĩa là bến hoặc trạm. 坐反了 nghĩa là đi nhầm chiều.
这辆车到火车站吗？|Zhè liàng chē dào huǒchēzhàn ma?|Xe này có tới ga tàu không?
到，要坐六站。|Dào, yào zuò liù zhàn.|Có, đi sáu trạm.
到了能提醒我一下吗？|Dào le néng tíxǐng wǒ yíxià ma?|Tới nơi bạn nhắc tôi một chút được không?
可以，我也在那里下车。|Kěyǐ, wǒ yě zài nàlǐ xià chē.|Được, tôi cũng xuống ở đó.
这路车往哪个方向开？|Zhè lù chē wǎng nǎ ge fāngxiàng kāi?|Tuyến xe này chạy hướng nào?
下一班车多久来？|Xià yì bān chē duō jiǔ lái?|Bao lâu nữa chuyến tiếp theo tới?
上车要刷卡吗？|Shàng chē yào shuā kǎ ma?|Lên xe có cần quẹt thẻ không?
我要在下一站下车。|Wǒ yào zài xià yí zhàn xià chē.|Tôi muốn xuống ở trạm tiếp theo.
不好意思，借过一下。|Bù hǎoyìsi, jiè guò yíxià.|Xin lỗi, cho tôi đi nhờ qua.
我好像坐反了。|Wǒ hǎoxiàng zuò fǎn le.|Hình như tôi đi nhầm chiều rồi.
@tau-dien-ngam|Mua vé & đổi tuyến tàu điện ngầm|Du lịch & di chuyển|🚇|换乘 là chuyển tuyến; 出口 là cửa ra. Hỏi số tuyến cùng hướng ga cuối để tránh nhầm chiều.
去市中心坐几号线？|Qù shìzhōngxīn zuò jǐ hào xiàn?|Tới trung tâm thành phố đi tuyến số mấy?
坐二号线，再换乘一号线。|Zuò èr hào xiàn, zài huànchéng yī hào xiàn.|Đi tuyến hai rồi chuyển sang tuyến một.
在哪一站换乘？|Zài nǎ yí zhàn huànchéng?|Chuyển tuyến ở ga nào?
在人民广场站换乘。|Zài Rénmín Guǎngchǎng zhàn huànchéng.|Chuyển ở ga Quảng trường Nhân Dân.
自动售票机在哪里？|Zìdòng shòupiàojī zài nǎlǐ?|Máy bán vé tự động ở đâu?
这边是去机场的方向吗？|Zhè biān shì qù jīchǎng de fāngxiàng ma?|Bên này là hướng tới sân bay phải không?
请站在黄线后面。|Qǐng zhàn zài huángxiàn hòumian.|Xin đứng phía sau vạch vàng.
我们从三号口出去。|Wǒmen cóng sān hào kǒu chūqu.|Mình ra từ cửa số ba.
末班车是几点？|Mòbānchē shì jǐ diǎn?|Chuyến cuối là lúc mấy giờ?
我的票刷不过去。|Wǒ de piào shuā bu guòqu.|Vé của tôi quét không qua được.
@ga-tau|Hỏi đường & chờ tàu ở nhà ga|Du lịch & di chuyển|🚉|候车室 là phòng chờ; 检票口 là cửa kiểm tra vé; 站台 là sân ga.
请问，候车室怎么走？|Qǐngwèn, hòuchēshì zěnme zǒu?|Xin hỏi, đi tới phòng chờ thế nào?
过了安检往左走。|Guò le ānjiǎn wǎng zuǒ zǒu.|Qua kiểm tra an ninh rồi rẽ trái.
谢谢，检票口在里面吗？|Xièxie, jiǎnpiàokǒu zài lǐmiàn ma?|Cảm ơn, cửa kiểm tra vé ở bên trong phải không?
对，请看大屏幕上的信息。|Duì, qǐng kàn dà píngmù shàng de xìnxī.|Đúng, xin xem thông tin trên màn hình lớn.
这趟车晚点了吗？|Zhè tàng chē wǎn diǎn le ma?|Chuyến tàu này bị trễ phải không?
什么时候开始检票？|Shénme shíhou kāishǐ jiǎn piào?|Khi nào bắt đầu kiểm tra vé?
我在几号站台上车？|Wǒ zài jǐ hào zhàntái shàng chē?|Tôi lên tàu ở sân ga số mấy?
请帮我看看车票。|Qǐng bāng wǒ kànkan chēpiào.|Xin xem giúp tôi vé tàu.
行李可以放在哪里？|Xíngli kěyǐ fàng zài nǎlǐ?|Tôi có thể để hành lý ở đâu?
请问，还有多久到站？|Qǐngwèn, hái yǒu duō jiǔ dào zhàn?|Xin hỏi, còn bao lâu nữa tới ga?
@tau-cao-toc|Đặt chỗ & đi tàu cao tốc|Du lịch & di chuyển|🚄|车次 là mã chuyến tàu; 车厢 là toa. 靠窗 và 靠过道 lần lượt là cạnh cửa sổ và cạnh lối đi.
我想买明天上午的高铁票。|Wǒ xiǎng mǎi míngtiān shàngwǔ de gāotiě piào.|Tôi muốn mua vé tàu cao tốc sáng mai.
您要去哪个城市？|Nín yào qù nǎ ge chéngshì?|Anh/chị muốn tới thành phố nào?
去上海，最好靠窗。|Qù Shànghǎi, zuì hǎo kào chuāng.|Tới Thượng Hải, tốt nhất là cạnh cửa sổ.
我帮您查一下余票。|Wǒ bāng nín chá yíxià yúpiào.|Tôi kiểm tra vé còn giúp anh/chị.
二等座还有吗？|Èr děng zuò hái yǒu ma?|Còn ghế hạng hai không?
这趟车中途停几站？|Zhè tàng chē zhōngtú tíng jǐ zhàn?|Chuyến này dừng mấy ga dọc đường?
我们在五号车厢。|Wǒmen zài wǔ hào chēxiāng.|Mình ở toa số năm.
不好意思，这是我的座位。|Bù hǎoyìsi, zhè shì wǒ de zuòwèi.|Xin lỗi, đây là chỗ của tôi.
请把大箱子放到行李区。|Qǐng bǎ dà xiāngzi fàng dào xíngli qū.|Xin đặt va-li lớn vào khu hành lý.
下车前别忘了拿行李。|Xià chē qián bié wàng le ná xíngli.|Trước khi xuống đừng quên lấy hành lý.
@thue-xe-dap|Thuê & trả xe đạp|Du lịch & di chuyển|🚲|租车 là thuê xe; 还车 là trả xe; 计费 là tính phí. Hỏi rõ điểm trả được phép.
这里可以租自行车吗？|Zhèlǐ kěyǐ zū zìxíngchē ma?|Ở đây có cho thuê xe đạp không?
可以，您想租多久？|Kěyǐ, nín xiǎng zū duō jiǔ?|Có, anh/chị muốn thuê bao lâu?
两个小时，怎么计费？|Liǎng ge xiǎoshí, zěnme jìfèi?|Hai tiếng, tính phí thế nào?
按小时收费，我给您看价目表。|Àn xiǎoshí shōufèi, wǒ gěi nín kàn jiàmùbiǎo.|Tính theo giờ, tôi cho anh/chị xem bảng giá.
需要交押金吗？|Xūyào jiāo yājīn ma?|Có cần đặt cọc không?
车座可以调低一点吗？|Chēzuò kěyǐ tiáo dī yìdiǎn ma?|Có thể hạ yên xe thấp hơn chút không?
我先试一下刹车。|Wǒ xiān shì yíxià shāchē.|Tôi thử phanh trước.
还车必须回这里吗？|Huán chē bìxū huí zhèlǐ ma?|Trả xe có bắt buộc quay lại đây không?
如果超过时间怎么收费？|Rúguǒ chāoguò shíjiān zěnme shōufèi?|Nếu quá giờ thì tính phí thế nào?
我来还车，请检查一下。|Wǒ lái huán chē, qǐng jiǎnchá yíxià.|Tôi tới trả xe, xin kiểm tra.
@xem-ban-do|Dùng bản đồ & chia sẻ vị trí|Công nghệ|🗺️|定位 là định vị; 导航 là dẫn đường. 步行路线 là tuyến dành cho đi bộ.
你现在在哪里？|Nǐ xiànzài zài nǎlǐ?|Bây giờ bạn ở đâu?
我在咖啡店门口。|Wǒ zài kāfēidiàn ménkǒu.|Tôi ở cửa quán cà phê.
可以发个定位给我吗？|Kěyǐ fā ge dìngwèi gěi wǒ ma?|Bạn gửi vị trí cho tôi được không?
可以，我现在发。|Kěyǐ, wǒ xiànzài fā.|Được, tôi gửi ngay.
地图上显示步行十分钟。|Dìtú shàng xiǎnshì bùxíng shí fēnzhōng.|Bản đồ hiển thị đi bộ mười phút.
这个位置好像不准确。|Zhège wèizhi hǎoxiàng bù zhǔnquè.|Vị trí này hình như không chính xác.
请把地址完整地发给我。|Qǐng bǎ dìzhǐ wánzhěng de fā gěi wǒ.|Xin gửi cho tôi địa chỉ đầy đủ.
我们走步行路线。|Wǒmen zǒu bùxíng lùxiàn.|Mình đi tuyến dành cho người đi bộ.
导航让我们从这里转弯。|Dǎoháng ràng wǒmen cóng zhèlǐ zhuǎn wān.|Ứng dụng chỉ mình rẽ ở đây.
我已经看到你了。|Wǒ yǐjīng kàn dào nǐ le.|Tôi đã nhìn thấy bạn rồi.
@tac-duong|Báo kẹt xe & đến muộn|Du lịch & di chuyển|🚦|堵车 là kẹt xe; 绕路 là đi đường vòng. 快到了 nghĩa là sắp tới nơi.
你快到了吗？|Nǐ kuài dào le ma?|Bạn sắp tới chưa?
还没有，路上有点堵。|Hái méiyǒu, lùshang yǒudiǎn dǔ.|Chưa, trên đường hơi tắc.
没关系，你别着急。|Méi guānxi, nǐ bié zháojí.|Không sao, bạn đừng vội.
谢谢，我到了给你发消息。|Xièxie, wǒ dào le gěi nǐ fā xiāoxi.|Cảm ơn, tới nơi tôi nhắn bạn.
前面好像在修路。|Qiánmian hǎoxiàng zài xiū lù.|Phía trước hình như đang sửa đường.
我们要不要绕路？|Wǒmen yào bu yào rào lù?|Mình có nên đi vòng không?
我可能晚到二十分钟。|Wǒ kěnéng wǎn dào èrshí fēnzhōng.|Có thể tôi sẽ tới muộn hai mươi phút.
你们先进去吧。|Nǐmen xiān jìnqu ba.|Mọi người cứ vào trước nhé.
现在车开始动了。|Xiànzài chē kāishǐ dòng le.|Bây giờ xe bắt đầu di chuyển rồi.
不好意思，让你久等了。|Bù hǎoyìsi, ràng nǐ jiǔ děng le.|Xin lỗi đã để bạn đợi lâu.
@tram-xang|Giao tiếp tại trạm xăng|Du lịch & di chuyển|⛽|加油 trong tình huống này là đổ nhiên liệu. 号 chỉ loại xăng theo số; xác nhận loại phù hợp với xe.
您好，我想加油。|Nín hǎo, wǒ xiǎng jiā yóu.|Xin chào, tôi muốn đổ xăng.
请问加哪种油？|Qǐngwèn jiā nǎ zhǒng yóu?|Xin hỏi, đổ loại nào?
我先确认一下车辆说明。|Wǒ xiān quèrèn yíxià chēliàng shuōmíng.|Tôi kiểm tra hướng dẫn của xe trước.
好的，确认后告诉我。|Hǎo de, quèrèn hòu gàosu wǒ.|Vâng, xác nhận xong cho tôi biết.
请加一百块钱的。|Qǐng jiā yì bǎi kuài qián de.|Xin đổ một trăm tệ.
这次请加满。|Zhè cì qǐng jiā mǎn.|Lần này xin đổ đầy.
在哪里付款？|Zài nǎlǐ fùkuǎn?|Thanh toán ở đâu?
能给我一张收据吗？|Néng gěi wǒ yì zhāng shōujù ma?|Cho tôi một biên nhận được không?
这里有洗手间吗？|Zhèlǐ yǒu xǐshǒujiān ma?|Ở đây có nhà vệ sinh không?
我想买一瓶水。|Wǒ xiǎng mǎi yì píng shuǐ.|Tôi muốn mua một chai nước.
@sua-xe|Báo lỗi & mang xe đi sửa|Du lịch & di chuyển|🔧|故障 là trục trặc; 异响 là tiếng động bất thường. 报价 là báo giá trước khi sửa.
车子启动不了，能帮我看看吗？|Chēzi qǐdòng bu liǎo, néng bāng wǒ kànkan ma?|Xe không khởi động được, bạn xem giúp được không?
可以，什么时候开始的？|Kěyǐ, shénme shíhou kāishǐ de?|Được, tình trạng này bắt đầu khi nào?
今天早上，昨天还正常。|Jīntiān zǎoshang, zuótiān hái zhèngcháng.|Sáng nay, hôm qua vẫn bình thường.
我先检查，再给您报价。|Wǒ xiān jiǎnchá, zài gěi nín bàojià.|Tôi kiểm tra trước, rồi báo giá cho anh/chị.
刹车的时候有异响。|Shāchē de shíhou yǒu yìxiǎng.|Khi phanh có tiếng động bất thường.
这个轮胎漏气了。|Zhège lúntāi lòu qì le.|Lốp xe này bị xì hơi.
仪表盘上有故障提示。|Yíbiǎopán shàng yǒu gùzhàng tíshì.|Bảng đồng hồ có cảnh báo lỗi.
今天能修好吗？|Jīntiān néng xiū hǎo ma?|Hôm nay sửa xong được không?
换零件前请先联系我。|Huàn língjiàn qián qǐng xiān liánxì wǒ.|Trước khi thay phụ tùng xin liên hệ tôi.
请把维修项目写清楚。|Qǐng bǎ wéixiū xiàngmù xiě qīngchu.|Xin ghi rõ các hạng mục sửa chữa.
@hanh-ly|Gửi & tìm hành lý|Du lịch & di chuyển|🧳|寄存 là gửi giữ đồ; 行李牌 là thẻ hành lý. Mô tả màu sắc và kích thước giúp nhận diện va-li.
这里可以寄存行李吗？|Zhèlǐ kěyǐ jìcún xíngli ma?|Ở đây có gửi hành lý được không?
可以，您有几个箱子？|Kěyǐ, nín yǒu jǐ ge xiāngzi?|Được, anh/chị có mấy va-li?
两个，晚上六点来取。|Liǎng ge, wǎnshang liù diǎn lái qǔ.|Hai chiếc, sáu giờ tối tôi tới lấy.
好的，请保管好寄存凭证。|Hǎo de, qǐng bǎoguǎn hǎo jìcún píngzhèng.|Vâng, xin giữ kỹ phiếu gửi đồ.
我的箱子是蓝色的。|Wǒ de xiāngzi shì lánsè de.|Va-li của tôi màu xanh dương.
上面系着一条粉色丝带。|Shàngmian jì zhe yì tiáo fěnsè sīdài.|Bên trên có buộc một dải ruy-băng hồng.
行李转盘在哪里？|Xíngli zhuànpán zài nǎlǐ?|Băng chuyền hành lý ở đâu?
我的行李还没出来。|Wǒ de xíngli hái méi chūlai.|Hành lý của tôi vẫn chưa ra.
这个箱子的轮子坏了。|Zhège xiāngzi de lúnzi huài le.|Bánh xe của va-li này bị hỏng.
请帮我查一下行李牌。|Qǐng bāng wǒ chá yíxià xínglipái.|Xin kiểm tra thẻ hành lý giúp tôi.
@lam-thu-tuc-bay|Làm thủ tục chuyến bay|Du lịch & di chuyển|🛫|值机 là làm thủ tục chuyến bay; 登机牌 là thẻ lên máy bay. Hỏi hãng về hành lý của vé cụ thể.
您好，我来办理值机。|Nín hǎo, wǒ lái bànlǐ zhíjī.|Xin chào, tôi tới làm thủ tục chuyến bay.
请出示护照和预订信息。|Qǐng chūshì hùzhào hé yùdìng xìnxī.|Xin xuất trình hộ chiếu và thông tin đặt chỗ.
在这里，我有一件托运行李。|Zài zhèlǐ, wǒ yǒu yí jiàn tuōyùn xíngli.|Đây ạ, tôi có một kiện hành lý ký gửi.
好的，请把箱子放上来。|Hǎo de, qǐng bǎ xiāngzi fàng shànglai.|Vâng, xin đặt va-li lên đây.
可以给我靠过道的座位吗？|Kěyǐ gěi wǒ kào guòdào de zuòwèi ma?|Cho tôi ghế cạnh lối đi được không?
这张票包含托运行李吗？|Zhè zhāng piào bāohán tuōyùn xíngli ma?|Vé này có bao gồm hành lý ký gửi không?
登机口在哪里？|Dēngjīkǒu zài nǎlǐ?|Cửa lên máy bay ở đâu?
几点开始登机？|Jǐ diǎn kāishǐ dēngjī?|Mấy giờ bắt đầu lên máy bay?
航班时间有变化吗？|Hángbān shíjiān yǒu biànhuà ma?|Giờ chuyến bay có thay đổi không?
我需要去转机柜台吗？|Wǒ xūyào qù zhuǎnjī guìtái ma?|Tôi có cần tới quầy nối chuyến không?
@kiem-tra-nhap-canh|Hỏi hỗ trợ tại khu nhập cảnh|Du lịch & di chuyển|🛂|入境 là nhập cảnh; 申报 là khai báo. Câu mẫu luyện ngôn ngữ; điền và trả lời đúng hoàn cảnh thực tế của bạn.
您好，请问入境通道在哪里？|Nín hǎo, qǐngwèn rùjìng tōngdào zài nǎlǐ?|Xin chào, lối làm thủ tục nhập cảnh ở đâu?
在前面，请按指示排队。|Zài qiánmian, qǐng àn zhǐshì pái duì.|Ở phía trước, xin xếp hàng theo chỉ dẫn.
这张表需要现在填吗？|Zhè zhāng biǎo xūyào xiànzài tián ma?|Tờ khai này có cần điền bây giờ không?
请向那边的工作人员确认。|Qǐng xiàng nàbian de gōngzuò rényuán quèrèn.|Xin xác nhận với nhân viên bên kia.
我听不太懂，请说慢一点。|Wǒ tīng bú tài dǒng, qǐng shuō màn yìdiǎn.|Tôi nghe chưa hiểu lắm, xin nói chậm hơn.
这是我的住宿地址。|Zhè shì wǒ de zhùsù dìzhǐ.|Đây là địa chỉ lưu trú của tôi.
我计划停留五天。|Wǒ jìhuà tíngliú wǔ tiān.|Tôi dự định ở lại năm ngày.
这是我的返程机票。|Zhè shì wǒ de fǎnchéng jīpiào.|Đây là vé máy bay chiều về của tôi.
我不确定这件物品是否需要申报。|Wǒ bù quèdìng zhè jiàn wùpǐn shìfǒu xūyào shēnbào.|Tôi chưa chắc món đồ này có cần khai báo không.
请问，应该向谁咨询？|Qǐngwèn, yīnggāi xiàng shéi zīxún?|Xin hỏi, tôi nên hỏi ai?
@hang-mien-thue|Hỏi mua hàng tại sân bay|Mua sắm & dịch vụ|🛫|免税店 là cửa hàng miễn thuế. Hỏi nhân viên về điều kiện mua và nhận hàng, thay vì tự suy đoán.
这款香水有小瓶的吗？|Zhè kuǎn xiāngshuǐ yǒu xiǎo píng de ma?|Mẫu nước hoa này có chai nhỏ không?
有，这是三十毫升的。|Yǒu, zhè shì sānshí háoshēng de.|Có, đây là chai ba mươi mi-li-lít.
可以试闻一下吗？|Kěyǐ shì wén yíxià ma?|Tôi ngửi thử được không?
可以，请用这张试香纸。|Kěyǐ, qǐng yòng zhè zhāng shìxiāngzhǐ.|Được, xin dùng tờ giấy thử hương này.
这个价格包含所有费用吗？|Zhège jiàgé bāohán suǒyǒu fèiyòng ma?|Giá này đã bao gồm mọi khoản phí chưa?
购买需要出示什么？|Gòumǎi xūyào chūshì shénme?|Khi mua cần xuất trình gì?
我应该在哪里提货？|Wǒ yīnggāi zài nǎlǐ tí huò?|Tôi nên nhận hàng ở đâu?
可以直接带上飞机吗？|Kěyǐ zhíjiē dài shàng fēijī ma?|Có thể mang thẳng lên máy bay không?
如果要转机，需要注意什么？|Rúguǒ yào zhuǎnjī, xūyào zhùyì shénme?|Nếu nối chuyến thì cần chú ý gì?
我先确认一下再购买。|Wǒ xiān quèrèn yíxià zài gòumǎi.|Tôi xác nhận trước rồi mới mua.
`,String.raw`
@le-tan-cong-ty|Đến công ty & gặp lễ tân|Học tập & công việc|🏢|拜访 là tới thăm hoặc gặp công việc; 预约 là hẹn trước. Giới thiệu tên và người cần gặp khi tới quầy.
您好，我和王经理有预约。|Nín hǎo, wǒ hé Wáng jīnglǐ yǒu yùyuē.|Xin chào, tôi có hẹn với quản lý Vương.
请问您怎么称呼？|Qǐngwèn nín zěnme chēnghu?|Xin hỏi, tôi nên xưng hô với anh/chị thế nào?
我姓阮，约的是十点。|Wǒ xìng Ruǎn, yuē de shì shí diǎn.|Tôi họ Nguyễn, có hẹn lúc mười giờ.
好的，请坐，我帮您联系。|Hǎo de, qǐng zuò, wǒ bāng nín liánxì.|Vâng, mời ngồi, tôi liên hệ giúp anh/chị.
这是我的名片。|Zhè shì wǒ de míngpiàn.|Đây là danh thiếp của tôi.
会议室在几楼？|Huìyìshì zài jǐ lóu?|Phòng họp ở tầng mấy?
我可以在这里等吗？|Wǒ kěyǐ zài zhèlǐ děng ma?|Tôi đợi ở đây được không?
请问电梯在哪边？|Qǐngwèn diàntī zài nǎ biān?|Xin hỏi, thang máy ở phía nào?
我来送一份文件。|Wǒ lái sòng yí fèn wénjiàn.|Tôi tới giao một tập tài liệu.
麻烦您转交给王经理。|Máfan nín zhuǎnjiāo gěi Wáng jīnglǐ.|Phiền anh/chị chuyển cho quản lý Vương.
@cuoc-hop|Phát biểu & trao đổi trong cuộc họp|Học tập & công việc|💬|补充 là bổ sung; 建议 là đề nghị. Dùng 我想… để xin góp ý lịch sự.
我们可以开始了吗？|Wǒmen kěyǐ kāishǐ le ma?|Mình có thể bắt đầu chưa?
可以，今天先讨论时间安排。|Kěyǐ, jīntiān xiān tǎolùn shíjiān ānpái.|Được, hôm nay bàn lịch trình trước.
我想先确认一下截止日期。|Wǒ xiǎng xiān quèrèn yíxià jiézhǐ rìqī.|Tôi muốn xác nhận hạn chót trước.
好的，我们一起看一下计划。|Hǎo de, wǒmen yìqǐ kàn yíxià jìhuà.|Được, mình cùng xem kế hoạch.
我有一个建议。|Wǒ yǒu yí ge jiànyì.|Tôi có một đề nghị.
我想补充一点。|Wǒ xiǎng bǔchōng yìdiǎn.|Tôi muốn bổ sung một ý.
这个问题可以再解释一下吗？|Zhège wèntí kěyǐ zài jiěshì yíxià ma?|Bạn giải thích lại vấn đề này được không?
我们先听听其他人的意见。|Wǒmen xiān tīngting qítā rén de yìjiàn.|Mình nghe ý kiến của những người khác trước.
这部分由我负责。|Zhè bùfen yóu wǒ fùzé.|Phần này do tôi phụ trách.
会后我把记录发给大家。|Huì hòu wǒ bǎ jìlù fā gěi dàjiā.|Sau buổi họp tôi gửi ghi chép cho mọi người.
@hop-truc-tuyen|Họp video trực tuyến|Công nghệ|💻|静音 là tắt tiếng; 共享屏幕 là chia sẻ màn hình. 掉线 là mất kết nối giữa chừng.
大家听得到我说话吗？|Dàjiā tīng de dào wǒ shuōhuà ma?|Mọi người nghe tôi nói được không?
听得到，不过声音有点小。|Tīng de dào, búguò shēngyīn yǒudiǎn xiǎo.|Nghe được, nhưng tiếng hơi nhỏ.
我把麦克风调大一点。|Wǒ bǎ màikèfēng tiáo dà yìdiǎn.|Tôi tăng âm lượng micro lên chút.
现在清楚多了。|Xiànzài qīngchu duō le.|Bây giờ rõ hơn nhiều rồi.
你还在静音状态。|Nǐ hái zài jìngyīn zhuàngtài.|Bạn vẫn đang tắt tiếng.
我来共享屏幕。|Wǒ lái gòngxiǎng píngmù.|Để tôi chia sẻ màn hình.
能看到我的画面吗？|Néng kàn dào wǒ de huàmiàn ma?|Mọi người thấy hình của tôi không?
网络有点卡，请稍等。|Wǎngluò yǒudiǎn kǎ, qǐng shāo děng.|Mạng hơi giật, xin đợi một chút.
我刚才掉线了。|Wǒ gāngcái diào xiàn le.|Tôi vừa bị mất kết nối.
请把会议链接再发一次。|Qǐng bǎ huìyì liànjiē zài fā yí cì.|Xin gửi lại liên kết cuộc họp một lần nữa.
@gui-email|Gửi email & tài liệu|Học tập & công việc|📧|附件 là tệp đính kèm; 收到 là đã nhận được. 抄送 là gửi bản sao cho người khác.
我刚发的邮件你收到了吗？|Wǒ gāng fā de yóujiàn nǐ shōu dào le ma?|Bạn nhận được email tôi vừa gửi chưa?
收到了，但是没有附件。|Shōu dào le, dànshì méiyǒu fùjiàn.|Nhận rồi, nhưng không có tệp đính kèm.
不好意思，我马上补发。|Bù hǎoyìsi, wǒ mǎshàng bǔ fā.|Xin lỗi, tôi gửi bổ sung ngay.
好的，收到后我会回复。|Hǎo de, shōu dào hòu wǒ huì huífù.|Được, sau khi nhận tôi sẽ phản hồi.
请查收附件。|Qǐng cháshōu fùjiàn.|Xin kiểm tra tệp đính kèm.
邮件主题写清楚一点。|Yóujiàn zhǔtí xiě qīngchu yìdiǎn.|Viết tiêu đề email rõ hơn một chút.
请把这封邮件抄送给我。|Qǐng bǎ zhè fēng yóujiàn chāosòng gěi wǒ.|Xin gửi bản sao email này cho tôi.
这个文件打不开。|Zhège wénjiàn dǎ bu kāi.|Tệp này không mở được.
可以换成PDF格式吗？|Kěyǐ huàn chéng PDF géshì ma?|Có thể đổi sang định dạng PDF không?
收到后请回复确认。|Shōu dào hòu qǐng huífù quèrèn.|Sau khi nhận xin trả lời xác nhận.
@tien-do-cong-viec|Báo tiến độ & trao đổi hạn chót|Học tập & công việc|📋|进度 là tiến độ; 按时 là đúng hạn. 来得及 diễn tả vẫn còn đủ thời gian để làm kịp.
这项任务进展怎么样？|Zhè xiàng rènwu jìnzhǎn zěnmeyàng?|Nhiệm vụ này tiến triển thế nào?
已经完成一半了。|Yǐjīng wánchéng yíbàn le.|Đã hoàn thành một nửa rồi.
周五之前来得及吗？|Zhōuwǔ zhīqián lái de jí ma?|Trước thứ Sáu có kịp không?
应该可以，我明天再更新进度。|Yīnggāi kěyǐ, wǒ míngtiān zài gēngxīn jìndù.|Chắc là kịp, mai tôi cập nhật tiến độ tiếp.
我还需要一些资料。|Wǒ hái xūyào yìxiē zīliào.|Tôi vẫn cần một số tài liệu.
这部分遇到了一点问题。|Zhè bùfen yù dào le yìdiǎn wèntí.|Phần này gặp một chút vấn đề.
可以请你帮忙检查吗？|Kěyǐ qǐng nǐ bāngmáng jiǎnchá ma?|Nhờ bạn kiểm tra giúp được không?
我们先处理最紧急的。|Wǒmen xiān chǔlǐ zuì jǐnjí de.|Mình xử lý phần gấp nhất trước.
能把截止时间延后一天吗？|Néng bǎ jiézhǐ shíjiān yán hòu yì tiān ma?|Có thể lùi hạn chót một ngày không?
我会尽量按时完成。|Wǒ huì jǐnliàng ànshí wánchéng.|Tôi sẽ cố gắng hoàn thành đúng hạn.
@xin-nghi|Xin nghỉ & bàn giao công việc|Học tập & công việc|🗓️|请假 là xin nghỉ; 交接 là bàn giao. Nêu ngày và cách sắp xếp công việc giúp yêu cầu rõ ràng.
我想请周五一天假。|Wǒ xiǎng qǐng zhōuwǔ yì tiān jià.|Tôi muốn xin nghỉ một ngày thứ Sáu.
工作交接安排好了吗？|Gōngzuò jiāojiē ānpái hǎo le ma?|Đã sắp xếp bàn giao công việc chưa?
安排好了，小林会帮忙跟进。|Ānpái hǎo le, Xiǎolín huì bāngmáng gēnjìn.|Đã xong, Tiểu Lâm sẽ giúp theo dõi.
好的，请在系统里提交申请。|Hǎo de, qǐng zài xìtǒng lǐ tíjiāo shēnqǐng.|Được, hãy nộp yêu cầu trên hệ thống.
我明天上午需要外出。|Wǒ míngtiān shàngwǔ xūyào wàichū.|Sáng mai tôi cần ra ngoài.
我想调换一下值班时间。|Wǒ xiǎng diàohuàn yíxià zhíbān shíjiān.|Tôi muốn đổi ca trực một chút.
请问还需要什么手续？|Qǐngwèn hái xūyào shénme shǒuxù?|Xin hỏi còn cần thủ tục gì?
我把待办事项写好了。|Wǒ bǎ dàibàn shìxiàng xiě hǎo le.|Tôi đã ghi các việc cần làm.
有急事可以发消息给我。|Yǒu jíshì kěyǐ fā xiāoxi gěi wǒ.|Có việc gấp thì nhắn tôi.
我下周一回来上班。|Wǒ xià zhōuyī huílai shàng bān.|Thứ Hai tuần sau tôi trở lại làm việc.
@phong-van|Phỏng vấn xin việc|Học tập & công việc|🤝|应聘 là ứng tuyển; 岗位 là vị trí công việc. Chuẩn bị câu trả lời phù hợp với kinh nghiệm thực tế.
请先简单介绍一下自己。|Qǐng xiān jiǎndān jièshào yíxià zìjǐ.|Trước hết hãy giới thiệu ngắn gọn về bản thân.
您好，我叫小安，学的是中文。|Nín hǎo, wǒ jiào Xiǎo'ān, xué de shì Zhōngwén.|Xin chào, tôi là Tiểu An, tôi học ngành tiếng Trung.
你为什么想应聘这个岗位？|Nǐ wèishénme xiǎng yìngpìn zhège gǎngwèi?|Vì sao bạn muốn ứng tuyển vị trí này?
我希望把语言能力用在工作中。|Wǒ xīwàng bǎ yǔyán nénglì yòng zài gōngzuò zhōng.|Tôi muốn vận dụng khả năng ngôn ngữ vào công việc.
这是我的简历。|Zhè shì wǒ de jiǎnlì.|Đây là hồ sơ ứng tuyển của tôi.
我有一年的相关经验。|Wǒ yǒu yì nián de xiāngguān jīngyàn.|Tôi có một năm kinh nghiệm liên quan.
我愿意学习新的技能。|Wǒ yuànyì xuéxí xīn de jìnéng.|Tôi sẵn sàng học kỹ năng mới.
这个岗位主要负责什么？|Zhège gǎngwèi zhǔyào fùzé shénme?|Vị trí này chủ yếu phụ trách những việc gì?
方便介绍一下团队吗？|Fāngbiàn jièshào yíxià tuánduì ma?|Anh/chị có thể giới thiệu về nhóm được không?
请问，什么时候会有结果？|Qǐngwèn, shénme shíhou huì yǒu jiéguǒ?|Xin hỏi, khi nào sẽ có kết quả?
@ngay-dau-di-lam|Ngày đầu thực tập & đi làm|Học tập & công việc|🌱|入职 là bắt đầu làm tại công ty; 带教 là hướng dẫn người mới. 请教 là hỏi học một cách lịch sự.
你好，我是今天入职的实习生。|Nǐ hǎo, wǒ shì jīntiān rùzhí de shíxíshēng.|Chào bạn, tôi là thực tập sinh bắt đầu hôm nay.
欢迎，我带你熟悉一下环境。|Huānyíng, wǒ dài nǐ shúxī yíxià huánjìng.|Chào mừng, tôi dẫn bạn làm quen môi trường.
谢谢，我的工位在哪里？|Xièxie, wǒ de gōngwèi zài nǎlǐ?|Cảm ơn, chỗ làm việc của tôi ở đâu?
在窗边，电脑已经准备好了。|Zài chuāngbiān, diànnǎo yǐjīng zhǔnbèi hǎo le.|Ở cạnh cửa sổ, máy tính đã chuẩn bị xong.
我应该先做什么？|Wǒ yīnggāi xiān zuò shénme?|Tôi nên làm gì trước?
有不懂的地方可以请教谁？|Yǒu bù dǒng de dìfang kěyǐ qǐngjiào shéi?|Có điều chưa hiểu thì tôi hỏi ai được?
这个系统怎么登录？|Zhège xìtǒng zěnme dēnglù?|Hệ thống này đăng nhập thế nào?
午饭一般在哪里吃？|Wǔfàn yìbān zài nǎlǐ chī?|Bữa trưa thường ăn ở đâu?
我先记一下操作步骤。|Wǒ xiān jì yíxià cāozuò bùzhòu.|Tôi ghi lại các bước thao tác trước.
谢谢你的耐心指导。|Xièxie nǐ de nàixīn zhǐdǎo.|Cảm ơn bạn đã kiên nhẫn hướng dẫn.
@hoc-nhom|Lập nhóm & học cùng nhau|Học tập & công việc|👩‍🎓|分组 là chia nhóm; 分工 là phân chia công việc. 一人一部分 nghĩa là mỗi người một phần.
我们一起做小组作业吧？|Wǒmen yìqǐ zuò xiǎozǔ zuòyè ba?|Mình cùng làm bài nhóm nhé?
好，这次怎么分工？|Hǎo, zhè cì zěnme fēngōng?|Được, lần này chia việc thế nào?
我查资料，你整理内容。|Wǒ chá zīliào, nǐ zhěnglǐ nèiróng.|Tôi tìm tài liệu, bạn sắp xếp nội dung.
可以，最后一起检查。|Kěyǐ, zuìhòu yìqǐ jiǎnchá.|Được, cuối cùng cùng kiểm tra lại.
我们建一个学习群吧。|Wǒmen jiàn yí ge xuéxí qún ba.|Mình lập một nhóm học tập nhé.
资料放在共享文件夹里。|Zīliào fàng zài gòngxiǎng wénjiànjiā lǐ.|Tài liệu để trong thư mục dùng chung.
这个例子很适合。|Zhège lìzi hěn shìhé.|Ví dụ này rất phù hợp.
你能解释一下这部分吗？|Nǐ néng jiěshì yíxià zhè bùfen ma?|Bạn giải thích phần này được không?
我们周三一起讨论。|Wǒmen zhōusān yìqǐ tǎolùn.|Thứ Tư mình cùng thảo luận.
每个人都练习一下发言。|Měi ge rén dōu liànxí yíxià fāyán.|Mỗi người đều luyện phát biểu một chút.
@bai-tap-ve-nha|Hỏi & nộp bài tập|Học tập & công việc|✏️|交作业 là nộp bài; 补交 là nộp bổ sung sau đó. 题目 là đề hoặc câu hỏi.
今天的作业是哪几页？|Jīntiān de zuòyè shì nǎ jǐ yè?|Bài tập hôm nay ở những trang nào?
第二十页到第二十二页。|Dì èrshí yè dào dì èrshí'èr yè.|Từ trang hai mươi đến trang hai mươi hai.
阅读题也要做吗？|Yuèdú tí yě yào zuò ma?|Bài đọc cũng phải làm sao?
要，老师说下节课一起讲。|Yào, lǎoshī shuō xià jié kè yìqǐ jiǎng.|Có, thầy/cô nói buổi sau sẽ chữa cùng nhau.
这道题我不太明白。|Zhè dào tí wǒ bú tài míngbai.|Tôi chưa hiểu câu này lắm.
请再说明一下要求。|Qǐng zài shuōmíng yíxià yāoqiú.|Xin giải thích lại yêu cầu.
作业要手写还是打印？|Zuòyè yào shǒuxiě háishi dǎyìn?|Bài tập cần viết tay hay in ra?
什么时候交作业？|Shénme shíhou jiāo zuòyè?|Khi nào nộp bài tập?
我已经上传了。|Wǒ yǐjīng shàngchuán le.|Tôi đã tải bài lên rồi.
我可以明天补交吗？|Wǒ kěyǐ míngtiān bǔ jiāo ma?|Ngày mai tôi nộp bổ sung được không?
@on-thi|Lập kế hoạch ôn thi|Học tập & công việc|🎯|复习 là ôn tập; 错题 là câu làm sai. 掌握 là nắm vững kiến thức hoặc kỹ năng.
你准备怎么复习？|Nǐ zhǔnbèi zěnme fùxí?|Bạn định ôn tập thế nào?
先看错题，再练听力。|Xiān kàn cuòtí, zài liàn tīnglì.|Xem câu sai trước, rồi luyện nghe.
我们每天一起练二十分钟吧。|Wǒmen měi tiān yìqǐ liàn èrshí fēnzhōng ba.|Mỗi ngày mình cùng luyện hai mươi phút nhé.
好，晚上八点开始。|Hǎo, wǎnshang bā diǎn kāishǐ.|Được, bắt đầu lúc tám giờ tối.
这部分我还没掌握。|Zhè bùfen wǒ hái méi zhǎngwò.|Phần này tôi vẫn chưa nắm vững.
我想再做一套练习。|Wǒ xiǎng zài zuò yí tào liànxí.|Tôi muốn làm thêm một bộ bài tập.
先别看答案。|Xiān bié kàn dá'àn.|Trước hết đừng xem đáp án.
我们检查一下错误原因。|Wǒmen jiǎnchá yíxià cuòwù yuányīn.|Mình kiểm tra nguyên nhân làm sai.
这个语法点容易混淆。|Zhège yǔfǎ diǎn róngyì hùnxiáo.|Điểm ngữ pháp này dễ nhầm lẫn.
今天的目标完成了。|Jīntiān de mùbiāo wánchéng le.|Mục tiêu hôm nay đã hoàn thành.
@trao-doi-ngon-ngu|Tìm bạn trao đổi ngôn ngữ|Học tập & công việc|🗣️|语言交换 là trao đổi ngôn ngữ; 纠正 là sửa lỗi. Hỏi người học muốn được sửa lỗi vào lúc nào.
你想一起练习语言吗？|Nǐ xiǎng yìqǐ liànxí yǔyán ma?|Bạn muốn cùng luyện ngôn ngữ không?
想，我想学一点越南语。|Xiǎng, wǒ xiǎng xué yìdiǎn Yuènányǔ.|Có, tôi muốn học một ít tiếng Việt.
我可以教你，你帮我练中文。|Wǒ kěyǐ jiāo nǐ, nǐ bāng wǒ liàn Zhōngwén.|Tôi có thể dạy bạn, bạn giúp tôi luyện tiếng Trung.
太好了，我们轮流说吧。|Tài hǎo le, wǒmen lúnliú shuō ba.|Tốt quá, mình nói luân phiên nhé.
我说错了请告诉我。|Wǒ shuō cuò le qǐng gàosu wǒ.|Nếu tôi nói sai xin cho tôi biết.
等我说完再纠正，好吗？|Děng wǒ shuō wán zài jiūzhèng, hǎo ma?|Đợi tôi nói xong rồi sửa lỗi nhé?
这个说法自然吗？|Zhège shuōfǎ zìrán ma?|Cách nói này tự nhiên không?
你们平时怎么表达这个意思？|Nǐmen píngshí zěnme biǎodá zhège yìsi?|Bình thường các bạn diễn đạt ý này thế nào?
我们今天聊旅行吧。|Wǒmen jīntiān liáo lǚxíng ba.|Hôm nay mình nói về du lịch nhé.
谢谢你陪我练习。|Xièxie nǐ péi wǒ liànxí.|Cảm ơn bạn đã luyện tập cùng tôi.
@lop-hoc-online|Tham gia lớp học trực tuyến|Học tập & công việc|🖥️|课件 là tài liệu trình chiếu của bài học; 回放 là bản phát lại. 签到 là điểm danh.
老师，今天的课程链接在哪里？|Lǎoshī, jīntiān de kèchéng liànjiē zài nǎlǐ?|Thầy/cô ơi, liên kết buổi học hôm nay ở đâu?
已经发到学习群里了。|Yǐjīng fā dào xuéxí qún lǐ le.|Đã gửi vào nhóm học rồi.
我找到了，现在进入。|Wǒ zhǎo dào le, xiànzài jìnrù.|Em tìm thấy rồi, giờ em vào.
好的，进来后先签到。|Hǎo de, jìnlai hòu xiān qiān dào.|Được, vào rồi điểm danh trước.
课件可以下载吗？|Kèjiàn kěyǐ xiàzài ma?|Tài liệu bài học có tải xuống được không?
我想举手提问。|Wǒ xiǎng jǔ shǒu tíwèn.|Em muốn giơ tay đặt câu hỏi.
刚才那一页能再讲一下吗？|Gāngcái nà yí yè néng zài jiǎng yíxià ma?|Thầy/cô giảng lại trang vừa rồi được không?
下课后有回放吗？|Xià kè hòu yǒu huífàng ma?|Sau buổi học có bản phát lại không?
我的摄像头暂时打不开。|Wǒ de shèxiàngtóu zànshí dǎ bu kāi.|Camera của em tạm thời không mở được.
我把问题写在聊天框里。|Wǒ bǎ wèntí xiě zài liáotiānkuàng lǐ.|Em viết câu hỏi trong khung chat.
@in-tai-lieu|In, photocopy & đóng tài liệu|Mua sắm & dịch vụ|🖨️|双面 là hai mặt; 彩色 là màu; 装订 là đóng thành tập. 份 dùng cho số bộ in.
你好，我想打印这个文件。|Nǐ hǎo, wǒ xiǎng dǎyìn zhège wénjiàn.|Chào bạn, tôi muốn in tệp này.
要彩色还是黑白？|Yào cǎisè háishi hēibái?|In màu hay đen trắng?
黑白，双面，打印两份。|Hēibái, shuāngmiàn, dǎyìn liǎng fèn.|Đen trắng, hai mặt, in hai bộ.
好的，需要装订吗？|Hǎo de, xūyào zhuāngdìng ma?|Vâng, có cần đóng tập không?
请用A4纸。|Qǐng yòng ēi sì zhǐ.|Xin dùng giấy A4.
这几页只打印单面。|Zhè jǐ yè zhǐ dǎyìn dānmiàn.|Mấy trang này chỉ in một mặt.
请先打印一页让我看看。|Qǐng xiān dǎyìn yí yè ràng wǒ kànkan.|Xin in thử một trang cho tôi xem.
字体有点小，能放大吗？|Zìtǐ yǒudiǎn xiǎo, néng fàng dà ma?|Chữ hơi nhỏ, có thể phóng to không?
我还需要复印这张表。|Wǒ hái xūyào fùyìn zhè zhāng biǎo.|Tôi còn cần photocopy tờ biểu mẫu này.
请按页码排好。|Qǐng àn yèmǎ pái hǎo.|Xin sắp đúng thứ tự số trang.
@sinh-nhat|Chúc mừng & tổ chức sinh nhật|Quan hệ & dịp đặc biệt|🎂|过生日 là đón sinh nhật; 许愿 là ước nguyện. Dùng 提前祝… khi chúc trước ngày sinh nhật.
周六是你的生日吗？|Zhōuliù shì nǐ de shēngrì ma?|Thứ Bảy là sinh nhật bạn phải không?
是的，想请朋友一起吃饭。|Shì de, xiǎng qǐng péngyou yìqǐ chī fàn.|Đúng, tôi muốn mời bạn bè cùng ăn.
太好了，我可以带蛋糕来。|Tài hǎo le, wǒ kěyǐ dài dàngāo lái.|Tuyệt quá, tôi có thể mang bánh kem tới.
谢谢，有你们就很开心。|Xièxie, yǒu nǐmen jiù hěn kāixīn.|Cảm ơn, có mọi người là tôi vui rồi.
祝你生日快乐！|Zhù nǐ shēngrì kuàilè!|Chúc bạn sinh nhật vui vẻ!
提前祝你生日快乐。|Tíqián zhù nǐ shēngrì kuàilè.|Chúc mừng sinh nhật bạn trước nhé.
我们一起唱生日歌。|Wǒmen yìqǐ chàng shēngrì gē.|Mình cùng hát bài chúc mừng sinh nhật.
先许个愿，再吹蜡烛。|Xiān xǔ ge yuàn, zài chuī làzhú.|Ước một điều trước, rồi thổi nến.
这份礼物送给你。|Zhè fèn lǐwù sòng gěi nǐ.|Món quà này tặng bạn.
希望你新的一岁天天开心。|Xīwàng nǐ xīn de yí suì tiān tiān kāixīn.|Mong tuổi mới của bạn ngày nào cũng vui.
@tang-qua|Chọn, tặng & nhận quà|Quan hệ & dịp đặc biệt|🎁|心意 là tấm lòng; 不用破费 là lời nói lịch sự rằng không cần tốn kém vì mình.
送朋友什么礼物比较好？|Sòng péngyou shénme lǐwù bǐjiào hǎo?|Tặng bạn món quà gì thì hợp?
她平时喜欢做什么？|Tā píngshí xǐhuan zuò shénme?|Bình thường cô ấy thích làm gì?
她喜欢画画，也喜欢小兔子。|Tā xǐhuan huàhuà, yě xǐhuan xiǎotùzi.|Cô ấy thích vẽ và thích thỏ nhỏ.
那送一本兔子图案的画册吧。|Nà sòng yì běn tùzi tú'àn de huàcè ba.|Vậy tặng một tập tranh có họa tiết thỏ nhé.
这是一点小心意。|Zhè shì yìdiǎn xiǎo xīnyì.|Đây là chút lòng thành.
希望你会喜欢。|Xīwàng nǐ huì xǐhuan.|Mong bạn sẽ thích.
谢谢，你太用心了。|Xièxie, nǐ tài yòngxīn le.|Cảm ơn, bạn chu đáo quá.
下次不用这么破费。|Xià cì bú yòng zhème pòfèi.|Lần sau không cần tốn kém thế này đâu.
我可以现在打开吗？|Wǒ kěyǐ xiànzài dǎ kāi ma?|Tôi mở ngay bây giờ được không?
能帮我包装成礼物吗？|Néng bāng wǒ bāozhuāng chéng lǐwù ma?|Bạn gói thành quà giúp tôi được không?
@du-dam-cuoi|Nhận lời mời & dự đám cưới|Quan hệ & dịp đặc biệt|💐|婚礼 là lễ cưới; 请柬 là thiệp mời. 回执 là phản hồi xác nhận tham dự.
下个月我们办婚礼，你能来吗？|Xià ge yuè wǒmen bàn hūnlǐ, nǐ néng lái ma?|Tháng sau chúng tôi tổ chức đám cưới, bạn tới được không?
恭喜你们！是几号？|Gōngxǐ nǐmen! Shì jǐ hào?|Chúc mừng hai bạn! Ngày mấy vậy?
十二号中午，我把请柬发给你。|Shí'èr hào zhōngwǔ, wǒ bǎ qǐngjiǎn fā gěi nǐ.|Trưa ngày mười hai, tôi gửi thiệp cho bạn.
好的，我看一下日程再回复。|Hǎo de, wǒ kàn yíxià rìchéng zài huífù.|Được, tôi xem lịch rồi trả lời.
祝你们新婚快乐！|Zhù nǐmen xīnhūn kuàilè!|Chúc hai bạn tân hôn hạnh phúc!
婚礼在哪里举行？|Hūnlǐ zài nǎlǐ jǔxíng?|Lễ cưới tổ chức ở đâu?
需要提前多久到场？|Xūyào tíqián duō jiǔ dào chǎng?|Cần có mặt trước bao lâu?
有着装要求吗？|Yǒu zhuózhuāng yāoqiú ma?|Có yêu cầu về trang phục không?
我可以带一位家人吗？|Wǒ kěyǐ dài yí wèi jiārén ma?|Tôi đi cùng một người nhà được không?
很高兴见证你们的幸福。|Hěn gāoxìng jiànzhèng nǐmen de xìngfú.|Tôi rất vui được chứng kiến hạnh phúc của hai bạn.
@le-tet|Trò chuyện & chúc mừng lễ Tết|Quan hệ & dịp đặc biệt|🏮|过节 là đón dịp lễ; 团圆 là sum họp. Chọn lời chúc phù hợp với đúng dịp lễ.
春节你打算怎么过？|Chūnjié nǐ dǎsuàn zěnme guò?|Tết bạn định đón thế nào?
我准备回家陪家人。|Wǒ zhǔnbèi huí jiā péi jiārén.|Tôi định về nhà ở bên gia đình.
你们会一起吃年夜饭吗？|Nǐmen huì yìqǐ chī niányèfàn ma?|Mọi người sẽ cùng ăn bữa cơm tất niên chứ?
会，大家都很期待。|Huì, dàjiā dōu hěn qīdài.|Có, mọi người đều rất mong chờ.
新年快乐，万事如意！|Xīnnián kuàilè, wànshì rúyì!|Chúc mừng năm mới, vạn sự như ý!
祝你和家人身体健康。|Zhù nǐ hé jiārén shēntǐ jiànkāng.|Chúc bạn và gia đình mạnh khỏe.
中秋节快乐！|Zhōngqiūjié kuàilè!|Chúc Tết Trung thu vui vẻ!
你喜欢吃什么口味的月饼？|Nǐ xǐhuan chī shénme kǒuwèi de yuèbǐng?|Bạn thích bánh trung thu vị gì?
端午节我们一起包粽子吧。|Duānwǔjié wǒmen yìqǐ bāo zòngzi ba.|Tết Đoan Ngọ mình cùng gói bánh ú nhé.
祝你假期愉快！|Zhù nǐ jiàqī yúkuài!|Chúc bạn có kỳ nghỉ vui vẻ!
@tinh-nguyen|Đăng ký hoạt động tình nguyện|Quan hệ & dịp đặc biệt|💗|志愿者 là tình nguyện viên; 报名 là đăng ký; 集合 là tập trung tại điểm hẹn.
我想报名参加志愿活动。|Wǒ xiǎng bàomíng cānjiā zhìyuàn huódòng.|Tôi muốn đăng ký tham gia hoạt động tình nguyện.
欢迎，你周末有空吗？|Huānyíng, nǐ zhōumò yǒu kòng ma?|Hoan nghênh, cuối tuần bạn có rảnh không?
周日上午有空，需要做什么？|Zhōurì shàngwǔ yǒu kòng, xūyào zuò shénme?|Sáng Chủ nhật tôi rảnh, cần làm gì?
我们一起清理公园里的垃圾。|Wǒmen yìqǐ qīnglǐ gōngyuán lǐ de lājī.|Mình cùng thu dọn rác trong công viên.
活动在哪里集合？|Huódòng zài nǎlǐ jíhé?|Hoạt động tập trung ở đâu?
需要自带手套吗？|Xūyào zì dài shǒutào ma?|Có cần tự mang găng tay không?
我没有经验，可以参加吗？|Wǒ méiyǒu jīngyàn, kěyǐ cānjiā ma?|Tôi chưa có kinh nghiệm, tham gia được không?
请告诉我注意事项。|Qǐng gàosu wǒ zhùyì shìxiàng.|Xin cho tôi biết những điều cần chú ý.
这边需要多一个人帮忙。|Zhè biān xūyào duō yí ge rén bāngmáng.|Bên này cần thêm một người giúp.
很高兴能出一份力。|Hěn gāoxìng néng chū yí fèn lì.|Tôi rất vui vì có thể góp một phần sức.
@ke-hoach-cuoi-tuan|Lên kế hoạch cuối tuần|Vui chơi & sở thích|🌈|打算 là dự định; 改天 là đổi sang ngày khác; 到时候 là khi tới lúc đó.
这个周末你有什么打算？|Zhège zhōumò nǐ yǒu shénme dǎsuàn?|Cuối tuần này bạn có dự định gì?
还没决定，你有什么建议？|Hái méi juédìng, nǐ yǒu shénme jiànyì?|Tôi chưa quyết định, bạn có gợi ý gì không?
听说新开的书店不错，要去吗？|Tīngshuō xīn kāi de shūdiàn búcuò, yào qù ma?|Nghe nói hiệu sách mới khá hay, đi không?
好啊，看完书再一起吃饭。|Hǎo a, kàn wán shū zài yìqǐ chī fàn.|Được đấy, xem sách xong cùng ăn cơm.
周六还是周日比较方便？|Zhōuliù háishi zhōurì bǐjiào fāngbiàn?|Thứ Bảy hay Chủ nhật tiện hơn?
我上午有事，下午可以。|Wǒ shàngwǔ yǒu shì, xiàwǔ kěyǐ.|Buổi sáng tôi có việc, buổi chiều thì được.
我们别安排得太满。|Wǒmen bié ānpái de tài mǎn.|Mình đừng xếp lịch kín quá.
如果下雨，就在室内活动。|Rúguǒ xià yǔ, jiù zài shìnèi huódòng.|Nếu trời mưa thì hoạt động trong nhà.
具体时间到时候再确认。|Jùtǐ shíjiān dào shíhou zài quèrèn.|Thời gian cụ thể tới lúc đó xác nhận lại.
期待周末见到你！|Qīdài zhōumò jiàn dào nǐ!|Mong được gặp bạn vào cuối tuần!
`];
 window.HALO_DAILY_EXTRA_RAW=blocks.join('\n').trim().split(/\n(?=@)/).map(block=>{
  const [header,...rows]=block.trim().split('\n');
  const [id,title,group,icon,tip]=header.slice(1).split('|');
  if(rows.length!==10||rows.some(row=>row.split('|').length!==3))throw new Error(`Invalid conversation topic: ${id}`);
  return {id,title,group,icon,tip,description:`Thực hành ${title.toLocaleLowerCase('vi')} qua câu mẫu và hội thoại.`,roles:['Người A','Người B'],phrases:rows.join('\n'),dialogue:rows.slice(0,4).map((row,i)=>`${i%2?'B':'A'}|${row}`).join('\n')};
 });
})();
