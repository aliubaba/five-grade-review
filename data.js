const courseData = {
    chinese: {
        name: "语文",
        lessons: [
            {
                id: "chinese_1",
                number: 1,
                title: "第一课：古诗三首",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、四时田园杂兴（其三十一）</h4>
                        <p><strong>作者：</strong>范成大（宋代）</p>
                        <p><strong>原文：</strong></p>
                        <p>昼出耘田夜绩麻，村庄儿女各当家。</p>
                        <p>童孙未解供耕织，也傍桑阴学种瓜。</p>
                        <p><strong>译文：</strong></p>
                        <p>白天在田里锄草，夜晚在家中搓麻线，村中男男女女各有各的家务劳动。</p>
                        <p>小孩子虽然不会耕田织布，也在那桑树阴下学着种瓜。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、稚子弄冰</h4>
                        <p><strong>作者：</strong>杨万里（宋代）</p>
                        <p><strong>原文：</strong></p>
                        <p>稚子金盆脱晓冰，彩丝穿取当银钲。</p>
                        <p>敲成玉磬穿林响，忽作玻璃碎地声。</p>
                        <p><strong>译文：</strong></p>
                        <p>一个小孩子，早上起来，从结有坚冰的铜盆里剜冰，用彩丝穿起来当钲来敲。</p>
                        <p>敲出的声音像玉磬一般穿越树林，突然冰落在地上发出玻璃一样的碎裂声。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、村晚</h4>
                        <p><strong>作者：</strong>雷震（宋代）</p>
                        <p><strong>原文：</strong></p>
                        <p>草满池塘水满陂，山衔落日浸寒漪。</p>
                        <p>牧童归去横牛背，短笛无腔信口吹。</p>
                        <p><strong>译文：</strong></p>
                        <p>绿草长满了池塘，池塘里的水呢，几乎溢出了塘岸。远远的青山，衔着彤红的落日，一起把影子倒映在水中，闪动着粼粼波光。</p>
                        <p>那小牧童横骑在牛背上，缓缓地把家还。拿着一支短笛，随口吹着，也没有固定的声腔。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "《四时田园杂兴》的作者是？",
                        options: ["杨万里", "范成大", "雷震", "苏轼"],
                        answer: "范成大"
                    },
                    {
                        type: "true-false",
                        question: "《稚子弄冰》中，孩子把冰当作银钲来敲。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "牧童归去横牛背，________无腔信口吹。",
                        answer: "短笛"
                    }
                ]
            },
            {
                id: "chinese_2",
                number: 2,
                title: "第二课：祖父的园子",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、生字词</h4>
                        <ul>
                            <li>蝴蝶：昆虫，翅膀阔大，颜色美丽。</li>
                            <li>蜻蜓：昆虫，身体细长，胸部背面有两对膜状的翅。</li>
                            <li>蚂蚱：蝗虫的俗称。</li>
                            <li>倭瓜：南瓜。</li>
                            <li>蚌壳：蚌的外壳。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句子</h4>
                        <ul>
                            <li>祖父铲地，我也铲地。因为我太小，拿不动锄头杆，祖父就把锄头杆拔下来，让我单拿着那个锄头的“头”来铲。</li>
                            <li>花开了，就像睡醒了似的。鸟飞了，就像在天上逛似的。虫子叫了，就像在说话似的。一切都活了，要做什么，就做什么。要怎么样，就怎么样，都是自由的。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、课文主题</h4>
                        <p>本文通过对祖父园子的描述，展现了作者童年生活的自由与快乐，表达了作者对童年生活的怀念和对祖父的思念之情。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "文中的倭瓜指的是？",
                        options: ["西瓜", "南瓜", "冬瓜", "苦瓜"],
                        answer: "南瓜"
                    },
                    {
                        type: "true-false",
                        question: "祖父的园子是一个自由、快乐的地方。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "花开了，就像睡醒了似的。鸟飞了，就像在天上________似的。",
                        answer: "逛"
                    }
                ]
            },
            {
                id: "chinese_3",
                number: 3,
                title: "第三课：月是故乡明",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、生字词</h4>
                        <ul>
                            <li>徘徊：在一个地方来回地走。</li>
                            <li>篝火：原指用笼子罩着的火，现借指在空旷的地方或野外架木柴燃烧的火堆。</li>
                            <li>萌动：（植物）开始发芽；（事物）开始发动。</li>
                            <li>旖旎：柔和美好。</li>
                            <li>澄澈：清澈透明。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句子</h4>
                        <ul>
                            <li>每个人都有个故乡，每个人的故乡都有个月亮。人人都爱自己故乡的月亮。</li>
                            <li>我的小月亮，我永远忘不掉你！</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、课文主题</h4>
                        <p>本文以“月”为线索，通过对故乡和他乡月亮的对比，表达了作者对故乡的思念之情。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "下列哪个词语形容清澈透明？",
                        options: ["徘徊", "篝火", "萌动", "澄澈"],
                        answer: "澄澈"
                    },
                    {
                        type: "true-false",
                        question: "作者认为他乡的月亮比故乡的月亮更圆。",
                        answer: false
                    },
                    {
                        type: "fill-blank",
                        question: "我的小月亮，我永远________你！",
                        answer: "忘不掉"
                    }
                ]
            },
            {
                id: "chinese_4",
                number: 4,
                title: "第四课：梅花魂",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、生字词</h4>
                        <ul>
                            <li>幽芳：形容香味清淡而芬芳。</li>
                            <li>玷污：弄脏；使有污点。</li>
                            <li>秉性：性格。</li>
                            <li>眷恋：（对自己喜爱的人或地方）深切地留恋。</li>
                            <li>华侨：侨居国外的中国人。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句子</h4>
                        <ul>
                            <li>旁的花，大抵是春暖才开花，她却不一样，愈是寒冷，愈是风欺雪压，花开得愈精神，愈秀气。</li>
                            <li>他们不管历经多少磨难，不管受到怎样的欺凌，从来都是顶天立地，不肯低头折节。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、课文主题</h4>
                        <p>本文通过赞美梅花来颂扬像梅花一样有气节的中国人，寄托了老人对祖国深深的眷恋之情。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "梅花的秉性是什么？",
                        options: ["软弱", "坚强不屈", "随波逐流", "胆小怕事"],
                        answer: "坚强不屈"
                    },
                    {
                        type: "true-false",
                        question: "梅花在春天开花。",
                        answer: false
                    },
                    {
                        type: "fill-blank",
                        question: "他们不管历经多少磨难，不管受到怎样的欺凌，从来都是________，不肯低头折节。",
                        answer: "顶天立地"
                    }
                ]
            },
            {
                id: "chinese_5",
                number: 5,
                title: "第五课：草船借箭",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、生字词</h4>
                        <ul>
                            <li>妒忌：对才能、名誉、地位或境遇等胜过自己的人心怀怨恨。</li>
                            <li>都督：古代的军事长官。</li>
                            <li>委托：请人或机构等代办。</li>
                            <li>迟延：耽搁；拖延。</li>
                            <li>调度：管理并安排（工作、人力、车辆等）。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句子</h4>
                        <ul>
                            <li>诸葛亮说：“怎么敢跟都督开玩笑？我愿意立下军令状，三天造不好，甘受惩罚。”</li>
                            <li>雾这样大，曹操一定不敢派兵出来。我们只管饮酒取乐，天亮了就回去。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、课文主题</h4>
                        <p>本文讲述了诸葛亮利用草船向曹操“借”箭的故事，表现了诸葛亮的神机妙算和足智多谋。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "草船借箭的主人公是谁？",
                        options: ["周瑜", "诸葛亮", "曹操", "鲁肃"],
                        answer: "诸葛亮"
                    },
                    {
                        type: "true-false",
                        question: "诸葛亮用了七天时间借到了箭。",
                        answer: false
                    },
                    {
                        type: "fill-blank",
                        question: "雾这样大，曹操一定不敢________。",
                        answer: "派兵出来"
                    }
                ]
            },
            {
                id: "chinese_6",
                number: 6,
                title: "第六课：景阳冈",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、生字词</h4>
                        <ul>
                            <li>筛酒：斟酒。</li>
                            <li>客官：旧时店家对顾客的尊称。</li>
                            <li>但凡：凡是；只要是。</li>
                            <li>榜文：古代指文告。</li>
                            <li>请勿自误：请不要自己耽误自己。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句子</h4>
                        <ul>
                            <li>武松走了一直，酒力发作，焦热起来，一只手提着哨棒，一只手把胸膛前袒开，踉踉跄跄，直奔过乱树林来。</li>
                            <li>说时迟，那时快，武松见大虫扑来，只一闪，闪在大虫背后。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、课文主题</h4>
                        <p>本文讲述了武松在景阳冈打死老虎的故事，表现了武松豪放、勇武而又机敏的英雄性格。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "《景阳冈》选自哪部名著？",
                        options: ["西游记", "水浒传", "三国演义", "红楼梦"],
                        answer: "水浒传"
                    },
                    {
                        type: "true-false",
                        question: "武松在景阳冈打死了一只老虎。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "请勿________：请不要自己耽误自己。",
                        answer: "自误"
                    }
                ]
            },
            {
                id: "chinese_7",
                number: 7,
                title: "第七课：猴王出世",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、生字词</h4>
                        <ul>
                            <li>名曰：名字叫做。</li>
                            <li>围圆：指周长。</li>
                            <li>灵通：聪明伶俐。</li>
                            <li>迸裂：破裂；裂开而往外飞溅。</li>
                            <li>喜不自胜：高兴得自己都觉得受不了，形容喜悦到了极点。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句子</h4>
                        <ul>
                            <li>那猴在山中，却会行走跳跃，食草木，饮涧泉，采山花，觅树果；与狼虫为伴，虎豹为群，獐鹿为友，猕猿为亲；夜宿石崖之下，朝游峰洞之中。</li>
                            <li>他瞑目蹲身，将身一纵，径跳入瀑布泉中，忽睁睛抬头观看，那里边却无水无波，明明朗朗的一架桥梁。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、课文主题</h4>
                        <p>本文讲述了石猴从出世到成为猴王的过程，表现了石猴活泼可爱、敢作敢为的特点。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "《猴王出世》选自哪部名著？",
                        options: ["西游记", "水浒传", "三国演义", "红楼梦"],
                        answer: "西游记"
                    },
                    {
                        type: "true-false",
                        question: "石猴是从石头中蹦出来的。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "他瞑目蹲身，将身一纵，径跳入________中。",
                        answer: "瀑布泉"
                    }
                ]
            },
            {
                id: "chinese_8",
                number: 8,
                title: "第八课：红楼春趣",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、生字词</h4>
                        <ul>
                            <li>恰才：刚才。</li>
                            <li>忌讳：因风俗习惯或个人原因等，对某些言语或举动有所顾忌，积久成为禁忌。</li>
                            <li>籰子：绕丝、纱、线等的工具。</li>
                            <li>展眼：转眼。形容时间过得很快。</li>
                            <li>飘飘飖飖：随风飘动的样子。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句子</h4>
                        <ul>
                            <li>黛玉笑道：“这一放虽有趣，只是不忍。”</li>
                            <li>紫鹃笑道：“难道天下没有一样的风筝，单他有这个不成？”</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、课文主题</h4>
                        <p>本文讲述了宝玉、黛玉等在大观园里放风筝的故事，表现了他们放风筝时的自由与快乐。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "《红楼春趣》选自哪部名著？",
                        options: ["西游记", "水浒传", "三国演义", "红楼梦"],
                        answer: "红楼梦"
                    },
                    {
                        type: "true-false",
                        question: "宝玉、黛玉等在大观园里放风筝。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "难道天下没有一样的风筝，________他有这个不成？",
                        answer: "单"
                    }
                ]
            },
            {
                id: "chinese_9",
                number: 9,
                title: "第九课：古诗三首",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、从军行</h4>
                        <p><strong>作者：</strong>王昌龄（唐代）</p>
                        <p><strong>原文：</strong></p>
                        <p>青海长云暗雪山，孤城遥望玉门关。</p>
                        <p>黄沙百战穿金甲，不破楼兰终不还。</p>
                        <p><strong>译文：</strong></p>
                        <p>青海湖上乌云密布，遮得连绵雪山一片黯淡。边塞古城，玉门雄关，远隔千里，遥遥相望。</p>
                        <p>守边将士，身经百战，铠甲磨穿，壮志不灭，不打败进犯之敌，誓不返回家乡。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、秋夜将晓出篱门迎凉有感</h4>
                        <p><strong>作者：</strong>陆游（宋代）</p>
                        <p><strong>原文：</strong></p>
                        <p>三万里河东入海，五千仞岳上摩天。</p>
                        <p>遗民泪尽胡尘里，南望王师又一年。</p>
                        <p><strong>译文：</strong></p>
                        <p>三万里长的黄河奔腾向东流入大海，五千仞高的华山耸入云霄上摩青天。</p>
                        <p>中原人民在胡人压迫下眼泪已流尽，他们盼望王师北伐盼了一年又一年。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、闻官军收河南河北</h4>
                        <p><strong>作者：</strong>杜甫（唐代）</p>
                        <p><strong>原文：</strong></p>
                        <p>剑外忽传收蓟北，初闻涕泪满衣裳。</p>
                        <p>却看妻子愁何在，漫卷诗书喜欲狂。</p>
                        <p>白日放歌须纵酒，青春作伴好还乡。</p>
                        <p>即从巴峡穿巫峡，便下襄阳向洛阳。</p>
                        <p><strong>译文：</strong></p>
                        <p>剑门关外，喜讯忽传，官军收复冀北一带。高兴之余，泪满衣裳。</p>
                        <p>回望妻子儿女，也已一扫愁云，随手卷起诗书，全家欣喜若狂。</p>
                        <p>老夫想要纵酒高歌，结伴春光同回故乡。</p>
                        <p>我的心魂早已高飞，就从巴峡穿过巫峡，再到襄阳直奔洛阳。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "《闻官军收河南河北》的作者是？",
                        options: ["王昌龄", "陆游", "杜甫", "李白"],
                        answer: "杜甫"
                    },
                    {
                        type: "true-false",
                        question: "《从军行》表达了将士们的爱国情怀。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "黄沙百战穿金甲，不破________终不还。",
                        answer: "楼兰"
                    }
                ]
            },
            {
                id: "chinese_10",
                number: 10,
                title: "第十课：青山处处埋忠骨",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、生字词</h4>
                        <ul>
                            <li>拟定：起草制定。</li>
                            <li>参谋：军队中参与指挥部队行动、制定作战计划的人员。</li>
                            <li>损失：消耗或失去的东西。</li>
                            <li>情不自禁：抑制不住自己的感情。</li>
                            <li>若有所思：好像在思考着什么。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句子</h4>
                        <ul>
                            <li>毛主席不由自主地站了起来，仰起头，望着天花板，强忍着心中的悲痛，目光中流露出无限的眷恋。</li>
                            <li>青山处处埋忠骨，何须马革裹尸还。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、课文主题</h4>
                        <p>本文讲述了毛主席得知爱子毛岸英牺牲的消息后，内心极度痛苦、煎熬，最终决定将毛岸英的遗骨安葬在朝鲜的故事，表现了毛主席作为父亲的慈爱和作为领袖的胸怀。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "毛岸英牺牲在哪里？",
                        options: ["中国", "朝鲜", "越南", "美国"],
                        answer: "朝鲜"
                    },
                    {
                        type: "true-false",
                        question: "毛主席决定将毛岸英的遗骨安葬在中国。",
                        answer: false
                    },
                    {
                        type: "fill-blank",
                        question: "青山处处埋忠骨，何须________裹尸还。",
                        answer: "马革"
                    }
                ]
            },
            {
                id: "chinese_11",
                number: 11,
                title: "第十一课：军神",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、生字词</h4>
                        <ul>
                            <li>土匪：在地方上抢劫财物，为非作歹的武装匪徒。</li>
                            <li>绷带：包扎伤口用的纱布带。</li>
                            <li>审视：仔细看。</li>
                            <li>一针见血：比喻说话直截了当，切中要害。</li>
                            <li>从容镇定：不慌不忙，沉着冷静。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句子</h4>
                        <ul>
                            <li>病人平静地回答：“沃克医生，眼睛离脑子太近，我担心施行麻醉会影响脑神经。而我，今后需要一个非常清醒的大脑！”</li>
                            <li>沃克医生惊呆了，大声嚷道：“你是一个真正的男子汉，一块会说话的钢板！你堪称军神！”</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、课文主题</h4>
                        <p>本文讲述了刘伯承在重庆治疗受伤的眼睛时，拒绝使用麻醉剂，展现了他钢铁般的意志，被沃克医生称为“军神”的故事。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "被称为军神的是谁？",
                        options: ["沃克医生", "刘伯承", "毛泽东", "朱德"],
                        answer: "刘伯承"
                    },
                    {
                        type: "true-false",
                        question: "刘伯承在手术时使用了麻醉剂。",
                        answer: false
                    },
                    {
                        type: "fill-blank",
                        question: "你是一个真正的男子汉，一块会说话的________！",
                        answer: "钢板"
                    }
                ]
            },
            {
                id: "chinese_12",
                number: 12,
                title: "第十二课：清贫",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、生字词</h4>
                        <ul>
                            <li>清贫：贫穷（旧时多形容读书人）。</li>
                            <li>矜持不苟：庄重谨严，丝毫也不马虎。</li>
                            <li>舍己为公：为了公共的利益而牺牲个人的利益。</li>
                            <li>猜疑：无中生有地起疑心；对人对事不放心。</li>
                            <li>齿冷：耻笑（笑则张口，时间长了，牙齿就会感到冷）。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句子</h4>
                        <ul>
                            <li>清贫，洁白朴素的生活，正是我们革命者能够战胜许多困难的地方！</li>
                            <li>我从事革命斗争，已经十余年了。在这长期的奋斗中，我一向是过着朴素的生活，从没有奢侈过。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、课文主题</h4>
                        <p>本文通过方志敏在被捕时敌人对他进行搜身的故事，表现了方志敏清贫朴素的生活作风和坚定的革命信念。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "《清贫》的作者是谁？",
                        options: ["方志敏", "刘伯承", "毛泽东", "周恩来"],
                        answer: "方志敏"
                    },
                    {
                        type: "true-false",
                        question: "方志敏过着奢侈的生活。",
                        answer: false
                    },
                    {
                        type: "fill-blank",
                        question: "清贫，洁白朴素的生活，正是我们革命者能够________许多困难的地方！",
                        answer: "战胜"
                    }
                ]
            }
        ]
    },
    math: {
        name: "数学",
        lessons: [
            {
                id: "math_1",
                number: 1,
                title: "第一单元：分数加减法",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、同分母分数加减法</h4>
                        <ul>
                            <li>计算方法：分母不变，分子相加减。</li>
                            <li>注意：结果能约分的要约成最简分数。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>计算：1/4 + 2/4</p>
                        <p>解：1/4 + 2/4 = 3/4</p>
                        <p>计算：5/6 - 2/6</p>
                        <p>解：5/6 - 2/6 = 3/6 = 1/2</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、异分母分数加减法</h4>
                        <ul>
                            <li>计算方法：先通分，化成同分母分数，再相加减。</li>
                            <li>通分：找到两个分母的最小公倍数作为公分母。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>计算：1/2 + 1/3</p>
                        <p>解：1/2 + 1/3 = 3/6 + 2/6 = 5/6</p>
                        <p>计算：3/4 - 1/2</p>
                        <p>解：3/4 - 1/2 = 3/4 - 2/4 = 1/4</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "计算 1/3 + 1/4 的结果是？",
                        options: ["2/7", "7/12", "2/12", "7/7"],
                        answer: "7/12"
                    },
                    {
                        type: "true-false",
                        question: "异分母分数相加减时，直接分子分母分别相加减。",
                        answer: false
                    },
                    {
                        type: "fill-blank",
                        question: "计算 5/6 - 1/3 = ________",
                        answer: "1/2"
                    }
                ]
            },
            {
                id: "math_2",
                number: 2,
                title: "第二单元：长方体和正方体",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、长方体的特征</h4>
                        <ul>
                            <li>有6个面，都是长方形（特殊情况有两个相对的面是正方形）。</li>
                            <li>相对的面完全相同。</li>
                            <li>有12条棱，相对的棱长度相等。</li>
                            <li>有8个顶点。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、正方体的特征</h4>
                        <ul>
                            <li>有6个面，都是正方形，6个面完全相同。</li>
                            <li>有12条棱，12条棱长度都相等。</li>
                            <li>有8个顶点。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、表面积</h4>
                        <ul>
                            <li>长方体表面积 = (长×宽 + 长×高 + 宽×高) × 2</li>
                            <li>正方体表面积 = 棱长×棱长×6</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>一个长方体，长5cm，宽4cm，高3cm，求表面积。</p>
                        <p>解：(5×4 + 5×3 + 4×3) × 2 = (20 + 15 + 12) × 2 = 47 × 2 = 94(cm²)</p>
                        <p>一个正方体，棱长2cm，求表面积。</p>
                        <p>解：2×2×6 = 24(cm²)</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>四、体积</h4>
                        <ul>
                            <li>长方体体积 = 长×宽×高</li>
                            <li>正方体体积 = 棱长×棱长×棱长</li>
                            <li>体积单位：立方厘米(cm³)、立方分米(dm³)、立方米(m³)</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>一个长方体，长5cm，宽4cm，高3cm，求体积。</p>
                        <p>解：5×4×3 = 60(cm³)</p>
                        <p>一个正方体，棱长2cm，求体积。</p>
                        <p>解：2×2×2 = 8(cm³)</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "正方体有多少条棱？",
                        options: ["8", "10", "12", "14"],
                        answer: "12"
                    },
                    {
                        type: "true-false",
                        question: "长方体的6个面都是长方形。",
                        answer: false
                    },
                    {
                        type: "fill-blank",
                        question: "长方体表面积公式是：(长×宽 + 长×高 + 宽×高) × ________",
                        answer: "2"
                    }
                ]
            },
            {
                id: "math_3",
                number: 3,
                title: "第三单元：分数乘法",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、分数乘整数</h4>
                        <ul>
                            <li>计算方法：分子与整数相乘，分母不变。</li>
                            <li>注意：结果能约分的要约成最简分数。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>计算：2/3 × 4</p>
                        <p>解：2/3 × 4 = 8/3</p>
                        <p>计算：3/5 × 2</p>
                        <p>解：3/5 × 2 = 6/5</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、分数乘分数</h4>
                        <ul>
                            <li>计算方法：分子相乘的积作分子，分母相乘的积作分母。</li>
                            <li>注意：能约分的要先约分再计算。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>计算：1/2 × 1/3</p>
                        <p>解：1/2 × 1/3 = 1/6</p>
                        <p>计算：2/3 × 3/4</p>
                        <p>解：2/3 × 3/4 = 6/12 = 1/2</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、分数乘法的应用</h4>
                        <ul>
                            <li>求一个数的几分之几是多少，用乘法计算。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>小明有12元，花了1/3，花了多少钱？</p>
                        <p>解：12 × 1/3 = 4(元)</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "计算 2/5 × 3 的结果是？",
                        options: ["6/5", "5/6", "2/15", "3/10"],
                        answer: "6/5"
                    },
                    {
                        type: "true-false",
                        question: "分数乘分数时，分子相乘作分母，分母相乘作分子。",
                        answer: false
                    },
                    {
                        type: "fill-blank",
                        question: "计算 3/4 × 2/3 = ________",
                        answer: "1/2"
                    }
                ]
            },
            {
                id: "math_4",
                number: 4,
                title: "第四单元：分数除法",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、分数除以整数</h4>
                        <ul>
                            <li>计算方法：分数除以整数（0除外），等于分数乘这个整数的倒数。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>计算：2/3 ÷ 2</p>
                        <p>解：2/3 ÷ 2 = 2/3 × 1/2 = 1/3</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、一个数除以分数</h4>
                        <ul>
                            <li>计算方法：一个数除以分数，等于这个数乘分数的倒数。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>计算：2 ÷ 1/2</p>
                        <p>解：2 ÷ 1/2 = 2 × 2 = 4</p>
                        <p>计算：3/4 ÷ 1/2</p>
                        <p>解：3/4 ÷ 1/2 = 3/4 × 2 = 3/2</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、分数除法的应用</h4>
                        <ul>
                            <li>已知一个数的几分之几是多少，求这个数，用除法计算。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>小明花了4元，是他总钱数的1/3，他总共有多少钱？</p>
                        <p>解：4 ÷ 1/3 = 4 × 3 = 12(元)</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "计算 3/4 ÷ 2 的结果是？",
                        options: ["3/2", "3/8", "8/3", "2/3"],
                        answer: "3/8"
                    },
                    {
                        type: "true-false",
                        question: "一个数除以分数，等于这个数乘分数的倒数。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "计算 4 ÷ 1/3 = ________",
                        answer: "12"
                    }
                ]
            },
            {
                id: "math_5",
                number: 5,
                title: "第五单元：百分数",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、百分数的意义</h4>
                        <ul>
                            <li>表示一个数是另一个数的百分之几的数，叫做百分数。</li>
                            <li>百分数也叫做百分率或百分比。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、百分数与小数的互化</h4>
                        <ul>
                            <li>小数化百分数：把小数点向右移动两位，同时在后面添上百分号。</li>
                            <li>百分数化小数：把百分号去掉，同时把小数点向左移动两位。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>0.25 = 25%</p>
                        <p>3.75 = 375%</p>
                        <p>50% = 0.5</p>
                        <p>12.5% = 0.125</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、百分数与分数的互化</h4>
                        <ul>
                            <li>分数化百分数：先把分数化成小数，再化成百分数。</li>
                            <li>百分数化分数：先把百分数写成分母是100的分数，再约分。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>1/2 = 0.5 = 50%</p>
                        <p>3/4 = 0.75 = 75%</p>
                        <p>25% = 25/100 = 1/4</p>
                        <p>60% = 60/100 = 3/5</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "0.75 化成百分数是？",
                        options: ["7.5%", "75%", "0.75%", "750%"],
                        answer: "75%"
                    },
                    {
                        type: "true-false",
                        question: "百分数表示一个数是另一个数的几分之几。",
                        answer: false
                    },
                    {
                        type: "fill-blank",
                        question: "50% 化成分数是 ________",
                        answer: "1/2"
                    }
                ]
            },
            {
                id: "math_6",
                number: 6,
                title: "第六单元：统计",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、扇形统计图</h4>
                        <ul>
                            <li>扇形统计图：用整个圆表示总数，用圆内各个扇形的大小表示各部分数量占总数的百分数。</li>
                            <li>特点：可以清楚地表示出各部分数量与总数之间的关系。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、折线统计图</h4>
                        <ul>
                            <li>折线统计图：用折线的起伏表示数据的增减变化。</li>
                            <li>特点：不仅可以表示数量的多少，还可以反映数据的增减变化趋势。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、条形统计图</h4>
                        <ul>
                            <li>条形统计图：用直条的长短表示数量的多少。</li>
                            <li>特点：可以清楚地表示出各种数量的多少。</li>
                        </ul>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "要表示各部分数量与总数之间的关系，应选择哪种统计图？",
                        options: ["条形统计图", "折线统计图", "扇形统计图", "以上都可以"],
                        answer: "扇形统计图"
                    },
                    {
                        type: "true-false",
                        question: "折线统计图可以反映数据的增减变化趋势。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "条形统计图可以清楚地表示出各种数量的________。",
                        answer: "多少"
                    }
                ]
            },
            {
                id: "math_7",
                number: 7,
                title: "第七单元：数学广角",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、找次品</h4>
                        <ul>
                            <li>找次品的方法：把待测物品分成3份，尽量平均分，不能平均分的，也应使多的一份与少的一份只相差1。</li>
                            <li>规律：用天平找次品时，所称物品的数目与测试的次数关系：</li>
                            <li>2-3个物品，1次；4-9个物品，2次；10-27个物品，3次；28-81个物品，4次...</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>有9个零件，其中有一个是次品（次品重一些），用天平至少称几次能保证找出次品？</p>
                        <p>解：把9个零件分成3份，每份3个。第一次称：把其中两份放在天平两端，如果平衡，次品在第三份；如果不平衡，次品在较重的一份。第二次称：把含有次品的3个零件分成3份，每份1个，称其中两个，如果平衡，次品是第三个；如果不平衡，次品是较重的那个。所以至少称2次。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "有10个零件，其中有一个是次品，用天平至少称几次能保证找出次品？",
                        options: ["2", "3", "4", "5"],
                        answer: "3"
                    },
                    {
                        type: "true-false",
                        question: "找次品时，应把待测物品分成2份。",
                        answer: false
                    },
                    {
                        type: "fill-blank",
                        question: "找次品的最优方法是把待测物品分成________份。",
                        answer: "3"
                    }
                ]
            }
        ]
    },
    english: {
        name: "英语",
        lessons: [
            {
                id: "english_1",
                number: 1,
                title: "Unit 1: My school calendar",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、核心词汇</h4>
                        <ul>
                            <li>January (Jan.) 一月</li>
                            <li>February (Feb.) 二月</li>
                            <li>March (Mar.) 三月</li>
                            <li>April (Apr.) 四月</li>
                            <li>May 五月</li>
                            <li>June 六月</li>
                            <li>July 七月</li>
                            <li>August (Aug.) 八月</li>
                            <li>September (Sept.) 九月</li>
                            <li>October (Oct.) 十月</li>
                            <li>November (Nov.) 十一月</li>
                            <li>December (Dec.) 十二月</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句型</h4>
                        <ul>
                            <li>When is...? 什么时候是...？</li>
                            <li>It's in... 在...（月份）</li>
                            <li>We have... 我们有...</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例句</h4>
                        <p>- When is your birthday? 你的生日是什么时候？</p>
                        <p>- It's in May. 在五月。</p>
                        <p>We have a school trip in April. 我们在四月有一次学校旅行。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "Which month comes after March?",
                        options: ["February", "April", "May", "June"],
                        answer: "April"
                    },
                    {
                        type: "true-false",
                        question: "August is the eighth month of the year.",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "When is Christmas? It's in ________.",
                        answer: "December"
                    }
                ]
            },
            {
                id: "english_2",
                number: 2,
                title: "Unit 2: What's your favourite season?",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、核心词汇</h4>
                        <ul>
                            <li>spring 春天</li>
                            <li>summer 夏天</li>
                            <li>autumn (fall) 秋天</li>
                            <li>winter 冬天</li>
                            <li>season 季节</li>
                            <li>favourite 最喜欢的</li>
                            <li>warm 温暖的</li>
                            <li>hot 热的</li>
                            <li>cool 凉爽的</li>
                            <li>cold 冷的</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句型</h4>
                        <ul>
                            <li>What's your favourite season? 你最喜欢的季节是什么？</li>
                            <li>My favourite season is... 我最喜欢的季节是...</li>
                            <li>Why? 为什么？</li>
                            <li>Because... 因为...</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例句</h4>
                        <p>- What's your favourite season? 你最喜欢的季节是什么？</p>
                        <p>- My favourite season is spring. 我最喜欢的季节是春天。</p>
                        <p>- Why? 为什么？</p>
                        <p>- Because it's warm and I can fly kites. 因为天气温暖，我可以放风筝。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "Which season is cold?",
                        options: ["spring", "summer", "autumn", "winter"],
                        answer: "winter"
                    },
                    {
                        type: "true-false",
                        question: "Summer is hot.",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "What's your favourite ________?",
                        answer: "season"
                    }
                ]
            },
            {
                id: "english_3",
                number: 3,
                title: "Unit 3: My school trip",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、核心词汇</h4>
                        <ul>
                            <li>trip 旅行</li>
                            <li>meet 见面</li>
                            <li>tiger 老虎</li>
                            <li>elephant 大象</li>
                            <li>panda 熊猫</li>
                            <li>zoo 动物园</li>
                            <li>park 公园</li>
                            <li>mountain 山</li>
                            <li>lake 湖</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句型</h4>
                        <ul>
                            <li>When is the trip? 旅行是什么时候？</li>
                            <li>It's in... 在...（月份）</li>
                            <li>Where are we going? 我们要去哪里？</li>
                            <li>We're going to... 我们要去...</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例句</h4>
                        <p>- When is the school trip? 学校旅行是什么时候？</p>
                        <p>- It's in May. 在五月。</p>
                        <p>- Where are we going? 我们要去哪里？</p>
                        <p>- We're going to the zoo. 我们要去动物园。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "Where can we see tigers?",
                        options: ["zoo", "park", "school", "home"],
                        answer: "zoo"
                    },
                    {
                        type: "true-false",
                        question: "We can see pandas in the zoo.",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "When is the ________? It's in June.",
                        answer: "trip"
                    }
                ]
            },
            {
                id: "english_4",
                number: 4,
                title: "Unit 4: When is Easter?",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、核心词汇</h4>
                        <ul>
                            <li>Easter 复活节</li>
                            <li>April Fool's Day 愚人节</li>
                            <li>Mother's Day 母亲节</li>
                            <li>Father's Day 父亲节</li>
                            <li>Children's Day 儿童节</li>
                            <li>Christmas 圣诞节</li>
                            <li>birthday 生日</li>
                            <li>party 派对</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句型</h4>
                        <ul>
                            <li>When is...? 什么时候是...？</li>
                            <li>It's on... 在...（具体日期）</li>
                            <li>What do you do on...? 你在...做什么？</li>
                            <li>I... 我...</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例句</h4>
                        <p>- When is Children's Day? 儿童节是什么时候？</p>
                        <p>- It's on June 1st. 在6月1日。</p>
                        <p>- What do you do on Children's Day? 你在儿童节做什么？</p>
                        <p>- I have a party. 我举办一个派对。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "When is Children's Day?",
                        options: ["May 1st", "June 1st", "July 1st", "August 1st"],
                        answer: "June 1st"
                    },
                    {
                        type: "true-false",
                        question: "Easter is in March or April.",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "What do you do on Mother's Day? I give my mom a ________.",
                        answer: "gift"
                    }
                ]
            },
            {
                id: "english_5",
                number: 5,
                title: "Unit 5: Work quietly!",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、核心词汇</h4>
                        <ul>
                            <li>work 工作</li>
                            <li>quietly 安静地</li>
                            <li>talk 说话</li>
                            <li>loudly 大声地</li>
                            <li>walk 走路</li>
                            <li>slowly 慢慢地</li>
                            <li>run 跑</li>
                            <li>fast 快地</li>
                            <li>write 写</li>
                            <li>carefully 仔细地</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句型</h4>
                        <ul>
                            <li>Work quietly! 安静工作！</li>
                            <li>Talk quietly! 小声说话！</li>
                            <li>Walk slowly! 慢慢走！</li>
                            <li>Run fast! 快跑！</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例句</h4>
                        <p>Please work quietly in the library. 请在图书馆安静工作。</p>
                        <p>Don't talk loudly in class. 不要在课堂上大声说话。</p>
                        <p>Walk slowly in the hallway. 在走廊里慢慢走。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "What do we say when someone is talking loudly in the library?",
                        options: ["Talk loudly!", "Talk quietly!", "Run fast!", "Work quietly!"],
                        answer: "Talk quietly!"
                    },
                    {
                        type: "true-false",
                        question: "We should run fast in the classroom.",
                        answer: false
                    },
                    {
                        type: "fill-blank",
                        question: "Please work ________ in the library.",
                        answer: "quietly"
                    }
                ]
            },
            {
                id: "english_6",
                number: 6,
                title: "Unit 6: Whose dog is it?",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、核心词汇</h4>
                        <ul>
                            <li>mine 我的</li>
                            <li>yours 你的；你们的</li>
                            <li>his 他的</li>
                            <li>hers 她的</li>
                            <li>theirs 他们的；她们的；它们的</li>
                            <li>ours 我们的</li>
                            <li>climbing 爬</li>
                            <li>eating 吃</li>
                            <li>playing 玩</li>
                            <li>sleeping 睡觉</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句型</h4>
                        <ul>
                            <li>Whose... is it? 这是谁的...？</li>
                            <li>It's... 它是...</li>
                            <li>What's... doing? ...在做什么？</li>
                            <li>It's... 它在...</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例句</h4>
                        <p>- Whose dog is it? 这是谁的狗？</p>
                        <p>- It's mine. 它是我的。</p>
                        <p>- What's the dog doing? 狗在做什么？</p>
                        <p>- It's sleeping. 它在睡觉。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "Whose book is this? It's ________.",
                        options: ["mine", "my", "I", "me"],
                        answer: "mine"
                    },
                    {
                        type: "true-false",
                        question: "'Theirs' means '他们的' in Chinese.",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "What's the cat doing? It's ________.",
                        answer: "sleeping"
                    }
                ]
            }
        ]
    }
};

const dailyTasks = [
    {
        name: "完成1个语文课程",
        reward: 5,
        completed: false,
        check: (progress) => progress.todayCompleted >= 1
    },
    {
        name: "完成1个数学课程",
        reward: 5,
        completed: false,
        check: (progress) => progress.todayCompleted >= 1
    },
    {
        name: "完成1个英语课程",
        reward: 5,
        completed: false,
        check: (progress) => progress.todayCompleted >= 1
    },
    {
        name: "完成3个课程",
        reward: 10,
        completed: false,
        check: (progress) => progress.todayCompleted >= 3
    },
    {
        name: "学习3个不同科目",
        reward: 15,
        completed: false,
        check: (progress) => progress.todaySubjects.size >= 3
    }
];

const achievements = [
    {
        id: "first_lesson",
        name: "初次尝试",
        desc: "完成第一个课程",
        icon: "🌟",
        condition: (progress) => progress.totalCompleted >= 1
    },
    {
        id: "week_streak",
        name: "坚持一周",
        desc: "连续学习7天",
        icon: "🔥",
        condition: (progress) => progress.streak >= 7
    },
    {
        id: "math_master",
        name: "数学大师",
        desc: "完成所有数学课程",
        icon: "🔢",
        condition: (progress) => progress.mathCompleted >= courseData.math.lessons.length
    },
    {
        id: "chinese_master",
        name: "语文大师",
        desc: "完成所有语文课程",
        icon: "📚",
        condition: (progress) => progress.chineseCompleted >= courseData.chinese.lessons.length
    },
    {
        id: "english_master",
        name: "英语大师",
        desc: "完成所有英语课程",
        icon: "🔤",
        condition: (progress) => progress.englishCompleted >= courseData.english.lessons.length
    },
    {
        id: "all_lessons",
        name: "全知全能",
        desc: "完成所有课程",
        icon: "🏆",
        condition: (progress) => {
            const totalLessons = courseData.chinese.lessons.length + 
                               courseData.math.lessons.length + 
                               courseData.english.lessons.length;
            return progress.totalCompleted >= totalLessons;
        }
    },
    {
        id: "points_100",
        name: "积分达人",
        desc: "获得100积分",
        icon: "💎",
        condition: (progress) => progress.points >= 100
    },
    {
        id: "level_5",
        name: "等级提升",
        desc: "达到5级",
        icon: "⭐",
        condition: (progress) => progress.level >= 5
    }
];
