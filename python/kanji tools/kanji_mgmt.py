# Q: should you convert this to a list with 8 huge strings sorted by level?
# A: yes

# change the names too, like jouyou_string to just jouyou
jouyou = [
    # grade 1
    '一九七二人入八力十下三千上口土夕大女子小山川五天中六円手文日月木水火犬王正出本右四左玉生田白目石立百年休先名字早気竹糸耳虫村男町花見貝赤足車学林空金雨青草音校森', 
    # grade 2
    '刀万丸才工弓内午少元今公分切友太引心戸方止毛父牛半市北古台兄冬外広母用矢交会合同回寺地多光当毎池米羽考肉自色行西来何作体弟図声売形汽社角言谷走近里麦画東京夜直国姉妹岩店明歩知長門昼前南点室後春星海活思科秋茶計風食首夏弱原家帰時紙書記通馬高強教理細組船週野雪魚鳥黄黒場晴答絵買朝道番間雲園数新楽話遠電鳴歌算語読聞線親頭曜顔',
    # grade 3
    '丁予化区反央平申世由氷主仕他代写号去打皮皿礼両曲向州全次安守式死列羊有血住助医君坂局役投対決究豆身返表事育使命味幸始実定岸所放昔板泳注波油受物具委和者取服苦重乗係品客県屋炭度待急指持拾昭相柱洋畑界発研神秒級美負送追面島勉倍真員宮庫庭旅根酒消流病息荷起速配院悪商動宿帳族深球祭第笛終習転進都部問章寒暑植温湖港湯登短童等筆着期勝葉落軽運遊開階陽集悲飲歯業感想暗漢福詩路農鉄意様緑練銀駅鼻横箱談調橋整薬館題',
    # grade 4
    '士不夫欠氏民史必失包末未以付令加司功札辺印争仲伝共兆各好成灯老衣求束兵位低児冷別努労告囲完改希折材利臣良芸初果刷卒念例典周協参固官底府径松毒泣治法牧的季英芽単省変信便軍勇型建昨栄浅胃祝紀約要飛候借倉孫案害帯席徒挙梅残殺浴特笑粉料差脈航訓連郡巣健側停副唱堂康得救械清望産菜票貨敗陸博喜順街散景最量満焼然無給結覚象貯費達隊飯働塩戦極照愛節続置腸辞試歴察旗漁種管説関静億器賞標熱養課輪選機積録観類験願鏡競議',
    # grade 5
    '久仏支比可旧永句圧弁布刊犯示再仮件任因団在舌似余判均志条災応序快技状防武承価舎券制効妻居往性招易枝河版肥述非保厚故政査独祖則逆退迷限師個修俵益能容恩格桜留破素耕財造率貧基婦寄常張術情採授接断液混現略眼務移経規許設責険備営報富属復提検減測税程絶統証評賀貸貿過勢幹準損禁罪義群墓夢解豊資鉱預飼像境増徳慣態構演精総綿製複適酸銭銅際雑領導敵暴潔確編賛質興衛燃築輸績講謝織職額識護',
    # grade 6
    '亡寸己干仁尺片冊収処幼庁穴危后灰吸存宇宅机至否我系卵忘孝困批私乱垂乳供並刻呼宗宙宝届延忠拡担拝枚沿若看城奏姿宣専巻律映染段洗派皇泉砂紅背肺革蚕値俳党展座従株将班秘純納胸朗討射針降除陛骨域密捨推探済異盛視窓翌脳著訪訳欲郷郵閉頂就善尊割創勤裁揮敬晩棒痛筋策衆装補詞貴裏傷暖源聖盟絹署腹蒸幕誠賃疑層模穀磁暮誤誌認閣障劇権潮熟蔵諸誕論遺奮憲操樹激糖縦鋼厳優縮覧簡臨難臓警',
    # secondary school kanji
    '乙了又与及丈刃凡勺互弔井升丹乏匁屯介冗凶刈匹厄双孔幻斗斤且丙甲凸丘斥仙凹召巨占囚奴尼巧払汁玄甘矛込弐朱吏劣充妄企仰伐伏刑旬旨匠叫吐吉如妃尽帆忙扱朽朴汚汗江壮缶肌舟芋芝巡迅亜更寿励含佐伺伸但伯伴呉克却吟吹呈壱坑坊妊妨妙肖尿尾岐攻忌床廷忍戒戻抗抄択把抜扶抑杉沖沢沈没妥狂秀肝即芳辛迎邦岳奉享盲依佳侍侮併免刺劾卓叔坪奇奔姓宜尚屈岬弦征彼怪怖肩房押拐拒拠拘拙拓抽抵拍披抱抹昆昇枢析杯枠欧肯殴況沼泥泊泌沸泡炎炊炉邪祈祉突肢肪到茎苗茂迭迫邸阻附斉甚帥衷幽為盾卑哀亭帝侯俊侵促俗盆冠削勅貞卸厘怠叙咲垣契姻孤封峡峠弧悔恒恨怒威括挟拷挑施是冒架枯柄柳皆洪浄津洞牲狭狩珍某疫柔砕窃糾耐胎胆胞臭荒荘虐訂赴軌逃郊郎香剛衰畝恋倹倒倣俸倫翁兼准凍剣剖脅匿栽索桑唆哲埋娯娠姫娘宴宰宵峰貢唐徐悦恐恭恵悟悩扇振捜挿捕敏核桟栓桃殊殉浦浸泰浜浮涙浪烈畜珠畔疾症疲眠砲祥称租秩粋紛紡紋耗恥脂朕胴致般既華蚊被託軒辱唇逝逐逓途透酌陥陣隻飢鬼剤竜粛尉彫偽偶偵偏剰勘乾喝啓唯執培堀婚婆寂崎崇崩庶庸彩患惨惜悼悠掛掘掲控据措掃排描斜旋曹殻貫涯渇渓渋淑渉淡添涼猫猛猟瓶累盗眺窒符粗粘粒紺紹紳脚脱豚舶菓菊菌虚蛍蛇袋訟販赦軟逸逮郭酔釈釣陰陳陶陪隆陵麻斎喪奥蛮偉傘傍普喚喫圏堪堅堕塚堤塔塀媒婿掌項幅帽幾廃廊弾尋御循慌惰愉惑雇扉握援換搭揚揺敢暁晶替棺棋棚棟款欺殖渦滋湿渡湾煮猶琴畳塁疎痘痢硬硝硫筒粧絞紫絡脹腕葬募裕裂詠詐詔診訴越超距軸遇遂遅遍酢鈍閑隅随焦雄雰殿棄傾傑債催僧慈勧載嗣嘆塊塑塗奨嫁嫌寛寝廉微慨愚愁慎携搾摂搬暇楼歳滑溝滞滝漠滅溶煙煩雅猿献痴睡督碁禍禅稚継腰艇蓄虞虜褐裸触該詰誇詳誉賊賄跡践跳較違遣酬酪鉛鉢鈴隔雷零靴頑頒飾飽鼓豪僕僚暦塾奪嫡寡寧腐彰徴憎慢摘概雌漆漸漬滴漂漫漏獄碑稲端箇維綱緒網罰膜慕誓誘踊遮遭酵酷銃銑銘閥隠需駆駄髪魂錬緯韻影鋭謁閲縁憶穏稼餓壊懐嚇獲穫潟轄憾歓環監緩艦還鑑輝騎儀戯擬犠窮矯響驚凝緊襟謹繰勲薫慶憩鶏鯨撃懸謙賢顕顧稿衡購墾懇鎖錯撮擦暫諮賜璽爵趣儒襲醜獣瞬潤遵償礁衝鐘壌嬢譲醸錠嘱審薪震錘髄澄瀬請籍潜繊薦遷鮮繕礎槽燥藻霜騒贈濯濁諾鍛壇鋳駐懲聴鎮墜締徹撤謄踏騰闘篤曇縄濃覇輩賠薄爆縛繁藩範盤罷避賓頻敷膚譜賦舞覆噴墳憤幣弊壁癖舗穂簿縫褒膨謀墨撲翻摩磨魔繭魅霧黙躍癒諭憂融慰窯謡翼羅頼欄濫履離慮寮療糧隣隷霊麗齢擁露',
    # changes to the jouyou kanji list / additions to the list
    '藤誰俺岡頃奈阪韓弥那鹿斬虎狙脇熊尻旦闇籠呂亀頬膝鶴匂沙須椅股眉挨拶鎌凄謎稽曾喉拭貌塞蹴鍵膳袖潰駒剥鍋湧葛梨貼拉枕顎苛蓋裾腫爪嵐鬱妖藍捉宛崖叱瓦拳乞呪汰勃昧唾艶痕諦餅瞳唄隙淫錦箸戚蒙妬蔑嗅蜜戴痩怨醒詣窟巾蜂骸弄嫉罵璧阜埼伎曖餌爽詮芯綻肘麓憧頓牙咽嘲臆挫溺侶丼瘍僅諜柵腎梗瑠羨酎畿畏瞭踪栃蔽茨慄傲虹捻臼喩萎腺桁玩冶羞惧舷貪采堆煎斑冥遜旺麺璃串填箋脊緻辣摯汎憚哨氾諧媛彙恣聘沃憬捗訃'
    ]
jouyou_all = ''
for level in jouyou:
    for item in level:
        jouyou_all += item
        
jouyou_grades_only = ''
for level in jouyou:
    if level == 5:
        break
    for item in level:
        jouyou_grades_only += item
# jouyou_all = str(sorted(list((char for char in jouyou_all)))
jinmeiyo = '娃阿挨逢葵茜渥旭葦芦梓斡宛絢綾鮎或粟庵按闇鞍杏伊夷惟椅畏謂亥郁磯溢茨鰯允胤蔭烏迂卯鵜窺丑碓臼唄姥厩瓜閏噂云叡曳瑛榎堰奄燕艶苑薗於甥旺襖岡荻臆桶牡俺伽嘉珂禾茄蝦嘩迦霞俄峨牙臥駕廻恢魁晦芥蟹凱崖蓋鎧浬馨柿笠樫梶恰葛叶椛樺鞄兜蒲釜鎌鴨茅萱粥瓦侃柑竿莞韓巌玩雁伎嬉毅畿稀徽亀祇誼掬鞠桔橘砧杵汲灸笈鋸亨匡卿喬蕎饗尭桐僅巾錦欣欽禽芹衿玖矩駈駒喰寓串櫛釧屑窟沓窪熊隈栗鍬袈祁圭慧桂稽詣戟隙桁訣倦喧拳捲牽硯鍵絃舷諺乎糊袴胡虎跨伍吾梧檎瑚醐鯉倖勾宏巷庚弘昂晃杭梗浩紘腔膏閤鴻劫壕轟忽惚此頃昏些叉嵯沙瑳裟坐哉塞采犀砦冴阪堺榊肴埼鷺朔柵窄笹拶薩皐錆晒撒燦珊纂讃仔孜斯獅爾而蒔汐鹿竺雫悉篠偲柴縞紗灼錫惹洲蒐蹴輯峻竣舜駿楯淳醇曙渚恕哨嘗庄捷昌梢樟湘菖蕉裳鞘丞杖穣埴拭燭晋榛秦芯壬腎訊諏須厨逗翠錐瑞嵩雛菅頗雀裾摺凄棲栖醒戚蹟碩尖撰煎穿羨詮閃膳噌曾曽楚疏蘇遡叢爽宋惣槍漕綜聡蒼捉袖其揃遜汰舵楕陀堆戴苔黛鯛醍鷹瀧啄托琢茸凧只辰巽竪辿樽誰坦旦歎湛耽檀弛智馳筑註酎猪喋寵帖暢牒蝶椎槌槻佃柘辻蔦綴椿紬爪鶴悌挺梯汀禎諦蹄鄭釘鼎擢填纏貼顛兎堵杜砥套宕嶋燈董藤憧撞瞳萄栃鳶寅酉惇敦沌遁頓奈那凪薙謎灘捺鍋楢馴楠汝匂賑虹廿濡禰祢捻乃之埜巴播杷琶芭盃煤這秤萩柏箔曝莫函箸肇筈幡畠鳩塙隼斑汎挽磐蕃庇斐緋樋枇毘琵眉柊疋彦菱肘畢桧媛紐彪瓢豹廟彬瀕冨斧芙阜撫葡蕪楓葺蕗淵吻焚蔽頁碧瞥篇娩鞭圃甫輔戊菩峯捧朋萌蓬蜂鋒鳳鵬貌卜睦勃殆幌昧哩槙枕柾鱒亦俣沫迄麿蔓巳箕蜜湊蓑稔牟椋冥姪孟蒙儲勿餅尤籾貰也冶耶弥靖佑宥柚湧祐邑輿傭妖楊耀蓉遥淀螺洛嵐藍蘭李梨璃裡掠劉溜琉龍侶亮凌梁瞭稜諒遼淋琳鱗麟瑠伶嶺怜玲憐漣煉簾蓮呂魯櫓狼麓禄肋倭脇鷲亙亘詫藁蕨椀碗乘亞佛侑來俐傳僞價儉兒凉凛凰刹剩劍勁勳卷單嚴圈國圓團壞壘壯壽奎奧奬孃實寢將專峽崚巖已帶廣廳彈彌彗從徠恆惡惠惺愼應懷戰戲拔拜拂搜搖攝收敍昊昴晏晄晝晨晟暉曉曖檜栞條梛椰榮樂樣橙檢櫂櫻盜毬氣洸洵淨滉漱滯澁澪濕煌燒燎燿爭爲狹默獸珈珀琥瑶疊皓盡眞眸碎祕祿禪禮稟稻穗穰笙粹絆綺綸縣縱纖羚翔飜聽脩臟與苺茉莊莉菫萠萬蕾藏藝藥衞裝覽詢諄謠讓賣赳轉迪逞醉釀釉鎭鑄陷險雜靜頌顯颯騷驍驗髮鷄麒黎齊堯槇遙凜熙俠摑擊焰瘦禱繡繫萊蔣蠟醬頰鷗'

kanji_you_know = '犬猫机水家外時半歳窓庭鳥肉魚何私僕零茂花今分語羽誰卍一二三四五六七八九十卵個気彼女男万弟兄妹姉父母娘孫車雨円千百朝昼晩目糞人両親甘子供日本中国田出身学生先話英名前元野菜飯茶飲校行会社午後寝起部屋風呂台所室椅東京都大阪住申留年違小高族息戚食堂好冷熱嫌安辛韓眼鏡愛恋月働間来仕事買昨明勉強友達曜火木金土忙週末平右左上下隣横冊隅棚長布団片新低古蔵庫紙手歌絵枚映画書見読散歩描泳走習音楽遊聞写真撮旅山死亖駅自転電地鉄使空港図飛機速遅近遠乗靴服冬春夏秋色白赤着黄青履黒洗帽被欲脱緩紫再公園緒館掛教弾練作料理番号丈夫神君妻心憂鬱桜雪夜悪天降晴暗弱夕方寒暑涼暖石言物塩酒変弁当全然果多砂糖結構紅牛乳少林森血店道北南西次角建入口銀病院向通狭広進曲腹箸皿寿司碗毎去休誕鞄腕他計財荷重軽切同持要売汚祖立派呼勢婚若有離似亡氏別独村願健実曇吹醤油産湾在宅奥主掃除濯浴帰座開閉付消早勤待携帯瓶池海川声匹傘鹿熊猿狐馬鳩登賑鳴動咲差静始宿題終授業易難科漢字覚葉意味辞引必性袋菓唐揚温召内夢知質問答定規簡単度鉛筆玄関暇面怖疲困嬉悲耳門町戸橋階交廊符段止危運虫足力文正玉王竹糸貝刃鬼巨草鍵箱細薄太厚押丸吸鹸置忘飴洋背締豚鶏払尻組革袖緑洒落灰制短衣指輪嵌漫球思頼投蹴取章雑誌並返貸借渡頭体薬鼻顔髪歯痛邪医者磨痩辺便利周積雷郵局貼送封筒包届更配航伝説倒負勝試合最得苦線数渋谷原点混市場首減増島集民銅選操陸種柔卓属信踊直具珍探無発凄優星湖枝光波陽舎浜折景濡深乾浅富士揺釣量汁湯様客氷和注濃噌残予約勧決現噛支狼兎鼠象蜂植染環境飼資源限殺豊可能形壊素格普美厳感値回懸命豆蓋鍋茸鮮腐材刻沸流炒焼固研究比測専攻化用反応験調床因故件不険助警察逮捕突非常怪我救急状態打逃席裏船側幹到途拾寄駐換受徒育卒成績歴史提講義準備頑張議給刺複功訳類判務続工貧相談失礼秒順割等算均占燃捨参加預任禁煙倍束守破街路録涙幸興甲斐的眺念玩趣嘘際考吐秘密由魔表絶対拝観搭券済塞込丁寧尊敬謙譲怒拳替例法律師欠位解典型挙課寺式魂祈仏宗仰葬存滅坊聖奇跡獄鈴盗犯肘喉肩爪骨膝脳眠射康治臓看護舞退般魅郎穏鮪鮭蛸握老巻軍艦河童県皇徴世界慣戦争経活価胸寂冗精笑情微互係恐恥驚触政統領員批府党案票改候補役久泥棒特懐振沖縄過代劇詩壁芸術俳拍監督品視偉演執雲霧報季節稲示域蒸燥滑猛烈刑罪訴裁官確宣告囚許為戻越以訪連博認未将泉縫米麦粉茹器凍保栄養抹含剣敵盾弓矢銃兵基第武撃衛隊渉紛激競率暴訓爆叫呟智嵐津災害洪伴犠奪防避署停鯛介責怠担駄努共喫求徹畳枕根賃敷井居溜香臭納整余毛餌暮挨拶則絡職敗己紹税収輸貿完頂戴致迷惑宜是協儀慮謝億兆箇才昭暦株札証記貯儲唯硬貨営勘契超奴丘塔断列噴漠覆接郷郊距賀咳傷舌肺肌効患睡妊娠復毒泊拭貴覧伺推薦縮滞各標識尋免期延汗裸鍛筋伸憩姿伏杖城姫竜勇妖幽霊屈械販技像充印刷削障崇罠麻雀容聴敏想論権哲況賛雰囲崩瞬漬紀騒恭飾贈喜祝祭良迎招旗催商樹裕朋奨掘満罰悩令頃州駆粧快掌往醜炭潟燕条扱費贅沢製需益企酔模擬放遺径殖胞与従労就僚募編織設築程菅総臣塁阿蓮諦緊措策群福埼奈岐阜媛移扉炊清潔管綿響端跳笛乏級噂詳査述偶載購疑蚊泣悔奮慢乱誇漱純顧添援黙抗威挑影輩焦擦騙訟融庁促穴滝底芝追叩狩沈愚蛇蟹亀鯨網巣蟻蝶雌雄虎梟哺蜘蛛双吠唸麒麟謎膨喧嘩皮宇宙検系兼漏洩妙展雇序依望希廃修及装頬腫茎診否了索房掲句苺缶酢桃溶塗剥詰仲賞導択茨岩児佐滋徳栃梨婦齢偏憶衆寮範稚幼板秀脚腰胃処箋症療凝膚圧酸較液仮析傾幕抽著創造盛誤適賢極概粋璧昔刀忍江憲杯麺餃華却昇没凸凹輝洞窟蝙蝠衝岸宝陰埋隠永冒呪騎幻抱畑農蒔刈穀牧穫栽培誠承委絹彙翻繰暢異釈曖昧詞恵慰抑耐梅盆晦幌舟掴籠股鸚鵡伊藤旦那慈略称昏貫弄闇嫉妬躊躇憧照伎瓜胡蜀黍薔薇蒜畜殲透淵魑魍魎刹煉冥椒鎌倉砕鳳凰彗逡巡焉懺咆哮螺旋羅渇痢疹膣暁曙炎鶴隼蕾鵺勃只頓姦孤松濤狗睨槌辿饅菊砦翼兜鮫鰯鯖殿柴暈椿樒褌萌志勅塾笠橘狸侍嬢汽灯飢餓磊薙綱琵琶捧闘針疆区泡鎧槍粗哀廉妥沌齟齬叱惹讐維垢筍至層迂痺乖祀餐揶揄嗽嘲遮罵蘇唖柄囮蝉蠍樫棗孕奏嬲馴栗杏絆璽靨瞼壺柑葵綴塊劣溺贔屓蹂躙耕恩善罹悟拡凪颪峠稽函虹仙稼詫賊烏釜歓撲犀逆旧繭渦肝瓦恣歪苔檻孑酬裂尽討伐額銭鎖癖碌蜻蛉狂隙鷲鷹儂鶯軒陥棋碁獲籍楓豹菫禅雫斧豪貢献傀儡虚偽撫嘴諺彩克杉虜栞蚕顎鯉魘炙聾鉢誘祇錨桐施疎矛逐潜痴霜鱗李珊瑚痙攣椎版琴糧侘斎桂慎晒貌迫礎鋭爽既晶榊柾柱貞鉱竈澳採醸稀纏稿喚籤露衰峡軌潮汐殻艶鼈隷錬焜炉甥帝殴褒鱈挿獣坂薫笘詐欺覗拒虐惚須俗蔑鬘拓也艱餅初宮省皆幅震牲菌俺柏鬣濱昴袴襟黎辱郭咄嗟胆杓沼匿鴨燐魁閲涌窒釁蕪葛淫靡卑屑旬紗齋蝸挫辻逢萬伯叔斗崎堀徐抜癒酷誓踏随捻岡喋弘檎葡萄繋皐妄悶憎恨羞痣斑隕巫拗吉剤忠宴滴控脅頷把砲墜朧鯱侵轟拷弊縦漁遣酵鯰媚膵憑祓邂逅鱒遡駱駝併拘蜥蜴蛍墓躯嗅腋漂麩朗慶應膜浮堕臨祷鯣央茄貶銘躁蜚蠊煮盥禿盲戒湿瑠璃襲蹌踉狽恍髑髏丼靄霙逸駿偵愕迸巽鰐塚迅蠢捏鑑瀞愉莞爾呑飽損孝乞叶鰻眉絞怯囁驢繊盤荒蠅篠肥囂尾巧遭讒謗曰舐疇誹蔕姑畿斜瞞埒萎柵縞鯵蝲蛄摺翔核浦沿敢奢馳拠奄蕭之囀鼓硫皺痘霞祠芽枠淹釧丹拉些睥犇髭詣疫肋盟審鈍副譜梗躍聡晃捗羊励紐桁彰捜蜜凛弥淡扇閃誑脆甚瞑匠塒諡齣熟項軟肯瑛淑里隆墨懲錮侮遜謀猶蛙評揃軸轢梶雅珠洲蟋蟀蝗軋髄尼鼾継刊蝦蟇婆竄綻蔽欒醒牙欄俵冴慌饒跪騰請邦擁尖摩摘諜几帳唱脈腸郡寛仁后垂寸尺干秤御湧鏖祥溢脇忌唆藻躾喝棄疼覇廻蒼穹漆償雹堤桑頻縛赴揮班翌諸鋼閣陛孵垣珪蛞蝓窮濁蒐乃泌肪脂繁脊捉旱魃狙圏舗倫姪踪褄沙汰奉冑佩奔瑕疵塵憫帆喪嫁斂綺麗蛻嘆鎹陵虻渕譚檜傲吊煽拙瀕蛮耗咤鑽穢巷跋扈壇毟欣咽濫觴嗜鳶荻萩鴇糊棺澪溝謁邸撹癇癪恫囃哥賽躑躅骸楚墟袈裟錠錯綜賜挟蘖晋誉掬攫掻幇赦閥椛粥隈串怜邑彦唇狡銛勲澤刳庇惨賤瀬抉渓倦貪棲獺槽堪鰭倅昆蓑粟撤暫凡瀾遂燈愁謳姻慇懃悍蘊蓄'
# kanji you have on your deck but don't have a card themselves
suspicious_kanji = '蝮氣曻沒窪學觀屬拜辭讀竒麥滯軰兒單黑關漸箭奬駈驅敺條檢俢穉稺填耻燒傳濟泄裝旾瘠瘦絕對藝銜聯驗准埦鎔專惧懼畏祕國聽圍鐵徑說棘緡苛莿皰嘔狀體藥處旹閇斬截實廣佳踋斷壓暜秇戰矩竟亊縡賣碕嵜覺龜乕虝〆朙壞絨毯竝傡踴變權雙捌艸幾詛咒隱顕會恰鷰畫顏麭參葱頁壱弌壹蔭帋躰軆乘椉勿嚊嬶穐龝牝蕉嗚噫弗每圓猟噓肆俄朱緋芲臘烟垨仗縣伍淚泪涕惟哭佛珈琲髮姐玖迚惡夛這晝寶寳寚阴阥隂險乚冐籖橇轌譯其發虞當數伙犧附熔衞逞懷褱聀軄耺𫟉侭儘庶况匣查擔兩爭觔覽歷輿齦莖齒假證號郶饂飩來戾澁圖乄亜𬇐勸將產轉卸枉憇秊壅颱臺餘繫從內滿旺壮圀戀綂臾龍龒經邀亂揭遲橫㐂步播苅圃畝稻麵麪缻罐鑵胤畠穀收溫糓藕鰕魵戶蘭魯淸哇麑諾靜繩橡杤巴瑞灣瀧瀑敦剌櫻濠埃陀乙賓瀉泻吾莨柳斯倶莓荊粁芋獨厵佱灋屎諳黨已摂莫迦樣凖頰輛輌續迄恢此邉邊緞氈靣鹹倖刅戧徤魄響响惱冀眞贒翅栬栴皨讓蕐叅垩鐸旭冲灮炗榮𫞂倭閑嶋嶌嶹冣洯冰鮉靁豐喆嚞德斈斅綠翠翆勈伮壘畾但鄰乹僜囙煅樂奧涉芯忄裡靑碧餠劍劔劒剱釼垕杜牡侽禽夓镸蝿煩嚙咬嚼寢巢栖窼鷄毀辝辤爲册擧舉妝僃曆頸頚價營點撡唄箪笥凥煖呆騏驎辯疊疉疂叠遵从齡勞拔蟲齲筈弭醫團懶如廢畄鬚髯缺蕈呉愍剝䯊眾爺殆傭乨兘嚴卷遥遙彈乍豫浪嘯靈灵喩譬默馘盖葢效恾辨辧辮瓣坐吼聲輯悦螘灘媒曾嘗夲躬遷貰誮騷繪擊抄柰恖罸釖刂盃鄕哉或吃賴恃譼孃檸檬羨濛朦屡揉剪螯鉗梳捲櫛惣渾齎炬燵屹嚏嚔軈粘薩藷傍遉抵葫弐貮貳抔旨蕎簞癌掏摸蝋燭蠟怎桌槪殘粹脹鈆訛傑羪盜偸碻硏暒蟁謬飜釋鰞魷鰂觸訫禦寐傅慥諠譁贊沗僱吿扶輔壽禮蔓擇槗缼贁拂肱臂臟穩錄巌磐櫔醉巵盞坏徃卻毓瘇阡仟慾亘亙佑屆舍寍耀赫燿煌鹼淺徵總摠緫鐶辷澑姙夅噄餝沓鞋梦殊莩䇳攜厡舩駭冝宐个緖逕朞埜壄叮嚀旉昰又亦歸塲蹟狎紕兦錺荘闔騐笧羣叢簇夶礆增晚厺挻梃雺堺篭𫝓腦迹址𫐤與舘溪谿佀詮冃觧玅昂亢浸輕獎欝鴿鮏亰悑筥筺鮨鮓訊擂掠醋眎刄淋圕榦壜甕甁塟敲淒斉㔫翫臰冩寫膏爰茲卆厯蛋囘蛔鮹鱆坭蠏勉悔仾棉陳曩坵壟佰厸疋屯呻蔴苧虵亗埽馨郞郒搔赱噺卜墖鹽醬迯窗囱牎牕窻牖掩薹坮汝衿搖罷旁戝厭屚飮賡鼡恠偀鱚顫惠恤誼慧驛菟兔蛭紋綾絢㐧剰卛仇銕鐡鋨絲糹凮飌灾烖庖圭噐楯珎冠蒙蛽黃笔狹冨凉謡詠裹黴楳槑縨践摑蕃臥牢叉俣脵胯檀稱畧穪憬昬挊挵妒蹰躕踌墸曌瞾妓殱橙稷萁渊囦檫鐮括弧摧碎谺厘幡懴鵬鴻篲蜷渴眩腟曉焔潰隨靎靏鸖鶻鸇涛莟鎚奸姧枩柗梥𥆩寨鱟鰮鰛鯆榴櫁萠敕藏菩剛饑擎鬭蝟猬貍區汔礫鬪鬦鉤鈎鍼沫憐鉏鋙𠮟呵讎鎗鑓𪗱𪘚寇孰戯秩箰痲痹飡撚拈捩甦啞嗎蘓酥瘂穎欛銑釻枘臍蟬弦嫐橿櫧檍羹蛤按紲緤靽壐𥇥壷躪閱凷尿擴譱忢挄凾筐篋闕霓毬嚢涯鴉釡窯歡舊絸蠒擅櫃蘚蘿孒酧醻盡牫雜錢喰啖鎻鐺鏈鉧鏁縋蜉蝣蜒蜓圣吝嗇陷隟鴬簷檐棊檱猟槭禪霹靂鍊獻虛僞瞿戲虗贋喙觜檆椙擄擒俘箏蠶蝅蠺頤腮顋齶腭焙烘焚茗閊癈缽扨扠偖唀碇𨦈矴而戟剋潛癡踈鉾鋒戈桙濳滸乎枯糎𫞬桘珡琹筝粮寵愼曝曬仔逼排銳朏搏鑛礦砿磺竃窯灶釀澚纒稾藳鬮峽殼窃壳霰艷豓豔瞳鱉龞隸爐毆擲襃讃獸裒鰔猪脫薰覘𬼂𬻿囏巾贄儞槲檞𮫋鬛瑜伽褲絝廓膽於吁膻鰒𩷪鮐魨鯸鯺蝌蚪禰鶩鳧粦頽菁猥鄙婬慚慙﨑岬壕瘉怨憾黶滓駁駮稅覡劑扣嚇劫讌匂苟冦軣縱竪慿呶溯泝倂駞蝘蝪螢軀齅掖苹麸麬朖聢即輒泛墮禱歲夷戎泰岱厖尨烹濕琉瞽璢俎爼僅纔逬辰巳蠕鱷冢鑒鍳藺尓伱你您厨搾篇寡迥纖纎笹坦毘甞筱篶舓畴蒂謾凋埓撓鰺蜊躄薺驕據嘉坡耄蓬艾蒿䔥𫝚皷皴痕翳瑣框聊睤頾嘸沁滲宷勵聰聦晄搜稔彌暝凜愈脃脺匞㣺慕謚𫠚肎籌尚稍劃舵鱏鮙匈蛩蛬蛼螽髓𮝩楫檝楮膸癲繼瞠俤蟾蜍蟾蟆捷蛯圝栾冱欗沍𩜙擵賬帷幄誯脉膓寬妃埀椣咫馭芥嗣諍歐腥霸弃宆柒桼埞桒猜牆竆膩膠陞遁舖鋪啻胄暉圈妷蹤珮娵媳㪘裳歎咜鑚搦毮噎蝱潭桧蠻鏨衖衢俽惞胭嚥吭卮觚呩碱攪疳愒鴟鵄吳骰蔐鷺鵇鴾鳭雁譏猨悖柩挾顰捁𫝜采楉杪笞譽啼拐糵晉㬜匊爴帮幫糶梛樺磯崖烽鞦韆鬻俼皈彥脣勳蘞醶賎瀨剔銽煠噪勛廂慘湍嵠磎捿悴伜蒲丄吟簑簔凢斃殪仆戍灌潅濺漑𧦅薀婣猂藴'
non_joyo = []

def kanji(kanjistring, mode, gradelevel):
    # 0 = list, 1 = string as one line, 2 = string separated by newlines
    # grades 1-6 are numbered 1-6, 7 is secondary school kanji, 8 is additions to the jouyou list, 'A' is all kanji in the jouyou_string list
    
    # list
    # result = '' UNCOMMENT THIS AND TEST IF THIS WORKS AND ERASE THE TWO DECLARATIONS BELOW
    if mode == 0:
        result = []
        if kanjistring == jouyou:
            if gradelevel == 'A':
                for level in kanjistring:
                    for char in level:
                        result.append(char)
            else:
                for char in kanjistring[gradelevel]:
                    result.append(char)
        else:
            for char in kanjistring:
                result.append(char)
    # string as one line
    elif mode == 1:
        result = ''
        if kanjistring == jouyou:
            if gradelevel == 'A':
                for level in kanjistring:
                    for char in level:
                        result+=char
            else:
                result = kanjistring[gradelevel - 1]
        else:
            result = kanjistring
    # string separated by newlines
    elif mode == 2:
        result = ''
        if kanjistring == jouyou:
            if gradelevel == 'A':
                for level in kanjistring:
                    for char in level:
                        result += char + '\n'
            else:
                for char in kanjistring[gradelevel - 1]:
                    result += char + '\n'
        else:
            for char in kanjistring:
                result += char + '\n'
    else:
        pass
    return result

def kanji_format(file, result, mode):
    # gets all the kanji from a text file that represents an exported anki deck
        if mode == 1:
            for line in file:
                result += line[0] + '\n'
        elif mode == 2:        
            for line in file:
                result += line[0]
        else:
            result = ''
        return result.strip('\n')
        
# finds duplicates. i don't know fix it later.
# DOES NOT ACTUALLY FIND DUPLICATES. YOUR DUMBASS FUCKING RETARD ASS THOUGHT THAT YOU'VE DOING SOMETHING REMARKABLE BUT IN REALITY YOU'VE ONLY ACCOMPLISHED JACK SHIT.
def find_dupes(string1, string2, mode, grade_level='A'):
    '''
    string1 = your string to look duplicates from (ex, kanji_you_know)
    string2 = base string from the variables above (ex, jouyou_string[0])
    '''
    result = ''
    temp = {} # not used?
    string1set = set(string1) # bigger string
    string2set = set(string2) # smaller string
    # returns a sorted list
    if mode == 0:
        result = []
        temp = string1set - string2set
        for item in temp:
            result.append(item)
        result = sorted(result)
    # string. i know it looks fucking stupid, but it works
    elif mode == 1:
        temp = string1set - string2set
        for item in temp:
            result += item
        result = sorted(result)
        wtfresult = ''
        for item in result:
            wtfresult += item
        result = wtfresult
    # print(f'you put in {string1} as the larger string and {string2} as the smaller string')
    return result

# WORK HERE
with (
    # DO NOT UNCOMMENT
    # open('E:\日本語を勉強するの物\python\mese.txt', 'r', encoding="utf8") as f,
    open("E:\日本語を勉強するの物\python\kanji tools\\results.txt", 'w', encoding="utf8") as r
    ):

    compiled_text = ''
    new_text = ''

    # kanji_lists[0][0-5] is equivalent to grades 1-6, kanji_lists[0][6] is secondary school kanji, kanji_lists[0][7] is additional kanji
    # kanji_lists[1] is jouyou_all, kanji_lists[2] is jouyou_grades_only, and kanji_lists[3] is jinmeiyo
    kanji_lists = (jouyou, jouyou_all, jouyou_grades_only, jinmeiyo)
    kanji_learned = (kanji_you_know, suspicious_kanji)
    # all kanji in the lists
    text = f"{jouyou[0]}\n\n{jouyou[1]}\n\n{jouyou[2]}\n\n{jouyou[3]}\n\n{jouyou[4]}\n\n{jouyou[5]}\n\n{jouyou[6]}\n\n{jouyou[7]}\n\n{jinmeiyo}, {kanji_you_know}\n\n{suspicious_kanji}"
    
    text = f"""
        Jouyou
        {jouyou[0]}
        {jouyou[1]}
        {jouyou[2]}
        {jouyou[3]}
        {jouyou[4]}
        {jouyou[5]}
        second grade
        {jouyou[6]}
        additions
        {jouyou[7]}
        used in names
        {jinmeiyo}
        kanji you know
        {kanji_you_know}
        suspicious kanji
        {suspicious_kanji}
        """
    
    """    
    sample function calls:
    return all kanji you know, sorted by unicode point
        results = find_dupes(kanji_learned[0], '', 1)
    
    does the same thing, but for suspicious kanji
        results = find_dupes(kanji_learned[1], '', 1)
    
    return anything from the first kanji list, that is not in the second kanji list.
    if this returns nothing, then that means you know all the kanji in first list.
        results = find_dupes(kanji_lists[0][7], kanji_learned[0], 1)
    """

    """what_the_fuck = kanji(jouyou_all, 1, 0) # probably deprecate this function"""
    
    results = find_dupes(kanji_lists[3], kanji_learned[0], 1)

    r.write(results)

    print("Ran successfully.")
    
exit = input('Press any button to exit...\n')