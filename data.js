const courseData = {
    chinese: {
        name: "语文",
        lessons: [
            {
                id: "chinese_1",
                number: 1,
                title: "第一课：草原",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、生字词</h4>
                        <ul>
                            <li>渲染：中国画的一种画法，用水墨或淡的色彩涂抹画面，以加强艺术效果。</li>
                            <li>勾勒：用线条画出轮廓。</li>
                            <li>翠色欲流：翠绿的颜色好像要流淌出来一样，形容绿得很浓、很润。</li>
                            <li>襟飘带舞：衣襟和裙带随风舞动。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句子</h4>
                        <ul>
                            <li>那里的天比别处的更可爱，空气是那么清鲜，天空是那么明朗，使我总想高歌一曲，表示我满心的愉快。</li>
                            <li>羊群一会儿上了小丘，一会儿又下来，走在哪里都像给无边的绿毯绣上了白色的大花。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、课文主题</h4>
                        <p>本文记叙了作者第一次访问内蒙古草原时看到的美丽景色以及受到蒙古族同胞热情欢迎的情景，表现了蒙汉人民团结友好的深情厚谊，抒发了作者对草原的热爱和对民族团结的赞美之情。</p>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>按要求写句子：</p>
                        <p>1. 羊群上了小丘。（扩句）</p>
                        <p>答案：洁白的羊群一会儿上了小丘，一会儿又下来。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "下列词语中，形容绿得很浓、很润的是？",
                        options: ["渲染", "勾勒", "翠色欲流", "襟飘带舞"],
                        answer: "翠色欲流"
                    },
                    {
                        type: "true-false",
                        question: "《草原》一课主要表现了蒙汉人民团结友好的深情厚谊。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "羊群一会儿上了小丘，一会儿又下来，走在哪里都像给无边的绿毯绣上了白色的________。",
                        answer: "大花"
                    }
                ]
            },
            {
                id: "chinese_2",
                number: 2,
                title: "第二课：丁香结",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、生字词</h4>
                        <ul>
                            <li>幽雅：幽静而雅致。</li>
                            <li>伏案：趴在桌子上（读书、写字）。</li>
                            <li>笨拙：笨；不聪明；不灵巧。</li>
                            <li>单薄：指身体瘦弱；不强壮。</li>
                            <li>恍然：形容忽然醒悟。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句子</h4>
                        <ul>
                            <li>有的宅院里探出半树银妆，星星般的小花缀满枝头，从墙上窥着行人，惹得人走过了还要回头望。</li>
                            <li>丁香结，这三个字给人许多想象。再联想到那些诗句，真觉得它们负担着解不开的愁怨了。</li>
                            <li>结，是解不完的；人生中的问题也是解不完的，不然，岂不是太平淡无味了么？</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、课文主题</h4>
                        <p>本文作者从丁香花写起，由丁香结引发联想，告诉我们：人生总有不顺心的事，如果一味地关注烦恼和忧愁，只会让心情更加沉重；我们应该以豁达的态度面对生活中的不顺心，这样人生才会更有滋味。</p>
                    </div>
                    <div class="tip-box">
                        <h4>写作技巧</h4>
                        <p>借物喻理：通过描写某种事物，来说明一个道理。本文通过描写丁香结，告诉我们应该以豁达的态度面对生活中的不顺心。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "下列哪个词语形容忽然醒悟？",
                        options: ["幽雅", "伏案", "笨拙", "恍然"],
                        answer: "恍然"
                    },
                    {
                        type: "true-false",
                        question: "《丁香结》一课运用了借物喻理的写作手法。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "结，是解不完的；人生中的问题也是解不完的，不然，岂不是太________了么？",
                        answer: "平淡无味"
                    }
                ]
            },
            {
                id: "chinese_3",
                number: 3,
                title: "第三课：古诗词三首",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、宿建德江</h4>
                        <p><strong>作者：</strong>孟浩然（唐代）</p>
                        <p><strong>原文：</strong></p>
                        <p>移舟泊烟渚，日暮客愁新。</p>
                        <p>野旷天低树，江清月近人。</p>
                        <p><strong>译文：</strong></p>
                        <p>把小船停靠在烟雾迷蒙的小洲，日暮时分新愁又涌上客子心头。</p>
                        <p>旷野无边无际远天比树还低沉，江水清清明月来和人相亲相近。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、六月二十七日望湖楼醉书</h4>
                        <p><strong>作者：</strong>苏轼（宋代）</p>
                        <p><strong>原文：</strong></p>
                        <p>黑云翻墨未遮山，白雨跳珠乱入船。</p>
                        <p>卷地风来忽吹散，望湖楼下水如天。</p>
                        <p><strong>译文：</strong></p>
                        <p>乌云上涌，就如墨汁泼下，却又在天边露出一段山峦，明丽清新，大雨激起的水花如白珠碎石，飞溅入船。</p>
                        <p>忽然间狂风卷地而来，吹散了满天的乌云，而那西湖的湖水碧波如镜，明媚温柔。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、西江月·夜行黄沙道中</h4>
                        <p><strong>作者：</strong>辛弃疾（宋代）</p>
                        <p><strong>原文：</strong></p>
                        <p>明月别枝惊鹊，清风半夜鸣蝉。稻花香里说丰年，听取蛙声一片。</p>
                        <p>七八个星天外，两三点雨山前。旧时茅店社林边，路转溪桥忽见。</p>
                        <p><strong>译文：</strong></p>
                        <p>天边的明月升上了树梢，惊飞了栖息在枝头的喜鹊。清凉的晚风仿佛传来了远处的蝉叫声。在稻花的香气里，人们谈论着丰收的年景，耳边传来一阵阵青蛙的叫声。</p>
                        <p>天空乌云密布，只有七八个星星闪烁，山前下起了小雨。往日的小茅草屋还在土地庙的树林旁，道路转过溪水的源头，它便忽然出现在眼前。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "《宿建德江》的作者是？",
                        options: ["李白", "孟浩然", "苏轼", "辛弃疾"],
                        answer: "孟浩然"
                    },
                    {
                        type: "true-false",
                        question: "《西江月·夜行黄沙道中》描写的是春天的景色。",
                        answer: false
                    },
                    {
                        type: "fill-blank",
                        question: "黑云翻墨未遮山，________乱入船。",
                        answer: "白雨跳珠"
                    }
                ]
            },
            {
                id: "chinese_4",
                number: 4,
                title: "第四课：花之歌",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、生字词</h4>
                        <ul>
                            <li>苍穹：天空。</li>
                            <li>孕育：怀胎生育，比喻既存的事物中酝酿着新事物。</li>
                            <li>冠冕：古代帝王、官员戴的帽子。</li>
                            <li>摇曳：摇荡。</li>
                            <li>旖旎：柔和美好。</li>
                            <li>馥郁：形容香气浓厚。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句子</h4>
                        <ul>
                            <li>我是大自然的话语，大自然说出来，又收回去，藏在心间，然后又说一遍……</li>
                            <li>我是星星，从苍穹坠落在绿茵中。</li>
                            <li>我是诸元素之女：冬将我孕育，春使我开放，夏让我成长，秋令我昏昏睡去。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、课文主题</h4>
                        <p>本文借花之歌，表达了诗人对美好光明的追求，对人生价值的思考。诗人用花的语言，赞美了大自然，赞美了生命，表达了对美好生活的向往。</p>
                    </div>
                    <div class="tip-box">
                        <h4>写作手法</h4>
                        <p>拟人：赋予花以人的思想感情和动作，使花形象更加生动可爱。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "下列哪个词语形容香气浓厚？",
                        options: ["苍穹", "孕育", "冠冕", "馥郁"],
                        answer: "馥郁"
                    },
                    {
                        type: "true-false",
                        question: "《花之歌》运用了拟人的写作手法。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "我是诸元素之女：冬将我孕育，春使我________，夏让我成长，秋令我昏昏睡去。",
                        answer: "开放"
                    }
                ]
            },
            {
                id: "chinese_5",
                number: 5,
                title: "第五课：七律·长征",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、生字词</h4>
                        <ul>
                            <li>逶迤：形容道路、山脉等弯弯曲曲、连绵不断的样子。</li>
                            <li>磅礴：气势雄伟。</li>
                            <li>云崖：高耸入云的山崖。</li>
                            <li>铁索：指大渡河上的泸定桥，它是用13根铁索组成的。</li>
                            <li>岷山：山名，在四川、甘肃交界处。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、原文</h4>
                        <p>红军不怕远征难，万水千山只等闲。</p>
                        <p>五岭逶迤腾细浪，乌蒙磅礴走泥丸。</p>
                        <p>金沙水拍云崖暖，大渡桥横铁索寒。</p>
                        <p>更喜岷山千里雪，三军过后尽开颜。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、译文</h4>
                        <p>红军不怕万里长征路上的一切艰难困苦，把千山万水都看得极为平常。</p>
                        <p>绵延不断的五岭，在红军看来只不过是微波细浪在起伏，气势雄伟的乌蒙山，在红军脚下也不过是一颗泥丸。</p>
                        <p>金沙江浊浪滔天，拍击着高耸入云的峭壁悬崖，热气腾腾。大渡河险桥横架，晃动着凌空高悬的根根铁索，寒意阵阵。</p>
                        <p>更加令人喜悦的是踏上千里积雪的岷山，红军翻越过去以后个个笑逐颜开。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>四、课文主题</h4>
                        <p>这首诗生动地概述了二万五千里长征的艰难历程，赞颂了中国工农红军不畏艰险、英勇顽强的革命英雄主义和革命乐观主义精神。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "《七律·长征》中描写的哪座山？",
                        options: ["泰山", "华山", "岷山", "黄山"],
                        answer: "岷山"
                    },
                    {
                        type: "true-false",
                        question: "《七律·长征》赞颂了红军的革命英雄主义精神。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "红军不怕远征难，________只等闲。",
                        answer: "万水千山"
                    }
                ]
            },
            {
                id: "chinese_6",
                number: 6,
                title: "第六课：狼牙山五壮士",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、生字词</h4>
                        <ul>
                            <li>居高临下：处在高处，俯视下面。形容处于有利的地位。</li>
                            <li>昂首挺胸：抬起头，挺起胸膛。形容斗志高，士气旺。</li>
                            <li>斩钉截铁：形容说话办事坚决果断，毫不犹豫。</li>
                            <li>热血沸腾：形容情绪高涨。</li>
                            <li>惊天动地：形容声音特别响亮，或事业伟大。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句子</h4>
                        <ul>
                            <li>为了不让敌人发现群众和连队主力，班长马宝玉斩钉截铁地说了一声："走！"带头向棋盘陀走去。</li>
                            <li>石头像雹子一样，带着五位壮士的决心，带着中国人民的仇恨，向敌人头上砸去。</li>
                            <li>这是英雄的中国人民坚强不屈的声音！这声音惊天动地，气壮山河！</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、课文主题</h4>
                        <p>本文记叙了抗日战争时期，八路军某部七连六班的五个战士，为了掩护群众和连队转移，诱敌上山，英勇杀敌，最后把敌人引上狼牙山顶峰，英勇跳崖的故事，表现了五壮士热爱祖国、热爱人民、仇恨敌人、勇于牺牲的革命精神和英雄气概。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "形容说话办事坚决果断的词语是？",
                        options: ["居高临下", "昂首挺胸", "斩钉截铁", "热血沸腾"],
                        answer: "斩钉截铁"
                    },
                    {
                        type: "true-false",
                        question: "狼牙山五壮士的故事发生在解放战争时期。",
                        answer: false
                    },
                    {
                        type: "fill-blank",
                        question: "这是英雄的中国人民坚强不屈的声音！这声音________，气壮山河！",
                        answer: "惊天动地"
                    }
                ]
            },
            {
                id: "chinese_7",
                number: 7,
                title: "第七课：开国大典",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、生字词</h4>
                        <ul>
                            <li>典礼：隆重庄严的仪式。</li>
                            <li>城防：城市的防务。</li>
                            <li>挺立：直立。</li>
                            <li>诞生：出生。</li>
                            <li>瞻仰：怀着崇高的敬意看。</li>
                            <li>肃静：严肃寂静。</li>
                            <li>欢呼：欢乐地呼喊。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句子</h4>
                        <ul>
                            <li>这庄严的宣告，这雄伟的声音，经过无线电的广播，传到长城内外，传到大江南北，使全中国人民的心一齐欢跃起来。</li>
                            <li>两个半钟头的检阅，广场上不断地欢呼，不断地鼓掌，一个高潮接着一个高潮。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、课文主题</h4>
                        <p>本文记叙了1949年10月1日首都北京举行开国大典的盛况，表达了中国人民对新中国的诞生无比自豪、激动的心情，展现了中华人民共和国的缔造者们特别是毛泽东的领袖风采。</p>
                    </div>
                    <div class="tip-box">
                        <h4>写作顺序</h4>
                        <p>课文按照时间顺序，记叙了开国大典的过程：大典开始、奏国歌、升国旗、宣读公告、阅兵式、群众游行。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "开国大典举行的时间是？",
                        options: ["1949年10月1日", "1949年10月2日", "1950年10月1日", "1951年10月1日"],
                        answer: "1949年10月1日"
                    },
                    {
                        type: "true-false",
                        question: "开国大典按照时间顺序记叙。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "这庄严的宣告，这雄伟的声音，经过无线电的广播，传到长城内外，传到________，使全中国人民的心一齐欢跃起来。",
                        answer: "大江南北"
                    }
                ]
            },
            {
                id: "chinese_8",
                number: 8,
                title: "第八课：灯光",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、生字词</h4>
                        <ul>
                            <li>宏伟：（规模、计划等）雄伟宏大。</li>
                            <li>赞叹：称赞。</li>
                            <li>沉醉：深深地迷恋。</li>
                            <li>憧憬：向往。</li>
                            <li>聚精会神：集中精神；集中注意力。</li>
                            <li>千钧一发：比喻情况万分危急。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句子</h4>
                        <ul>
                            <li>多好啊！这灯光照亮了天安门广场，也照亮了全国人民的心。</li>
                            <li>郝副营长在火光中点燃了那本书，借着微弱的火光，看清了突破口的位置。</li>
                            <li>这位年轻的战友不惜自己的性命，为了让孩子们能够在电灯底下学习，他自己却没有来得及见一见电灯。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、课文主题</h4>
                        <p>本文通过写郝副营长在战斗中点燃书本为部队照亮前进的道路，自己却壮烈牺牲的故事，歌颂了革命先烈为了后代的幸福生活不惜牺牲自己的崇高精神。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "形容情况万分危急的词语是？",
                        options: ["宏伟", "赞叹", "聚精会神", "千钧一发"],
                        answer: "千钧一发"
                    },
                    {
                        type: "true-false",
                        question: "郝副营长牺牲是为了让孩子们能够在电灯底下学习。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "多好啊！这灯光照亮了天安门广场，也照亮了________的心。",
                        answer: "全国人民"
                    }
                ]
            },
            {
                id: "chinese_9",
                number: 9,
                title: "第九课：竹节人",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、生字词</h4>
                        <ul>
                            <li>风靡：草木随风而倒，形容事物很风行。</li>
                            <li>疙瘩：皮肤上突起的或肌肉上结成的硬块。</li>
                            <li>疲倦不堪：疲倦得难以忍受。</li>
                            <li>威风凛凛：形容声势或气派令人敬畏。</li>
                            <li>别出心裁：独创一格，与众不同。</li>
                            <li>技高一筹：技艺比别人高出一筹。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句子</h4>
                        <ul>
                            <li>教室里的课桌破旧得看不出年纪，桌面上是一道道豁开的裂缝，像黄河长江。</li>
                            <li>下课时，教室里摆开场子，吸引了一圈黑脑袋，攒着观战，还跺脚拍手，咋咋呼呼，好不热闹。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、课文主题</h4>
                        <p>本文回忆了作者童年时代做竹节人、玩竹节人的情景，表现了童年游戏的乐趣，表达了作者对童年美好生活的怀念之情。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "形容独创一格，与众不同的词语是？",
                        options: ["风靡", "疙瘩", "别出心裁", "技高一筹"],
                        answer: "别出心裁"
                    },
                    {
                        type: "true-false",
                        question: "《竹节人》主要回忆了作者童年玩竹节人的乐趣。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "下课时，教室里摆开场子，吸引了一圈黑脑袋，攒着观战，还跺脚拍手，________，好不热闹。",
                        answer: "咋咋呼呼"
                    }
                ]
            },
            {
                id: "chinese_10",
                number: 10,
                title: "第十课：宇宙生命之谜",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、生字词</h4>
                        <ul>
                            <li>干燥：没有水分或水分很少。</li>
                            <li>稀薄：稀少；淡薄。</li>
                            <li>抵御：抵挡；抵抗。</li>
                            <li>观测：观察并测量（天文、地理、气象、方向等）。</li>
                            <li>璀璨：形容珠玉等光彩鲜明。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点内容</h4>
                        <ul>
                            <li>生命存在的条件：适宜的温度、必要的水分、适当成分的大气、足够的光和热。</li>
                            <li>太阳系中不可能存在生命的行星：水星、金星、木星、土星、天王星、海王星。</li>
                            <li>火星上可能存在生命的依据：火星上有水、有大气、温度适宜。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、课文主题</h4>
                        <p>本文介绍了科学家探索地球之外是否有生命存在的艰难历程，说明到目前为止，地球之外是否有生命存在，仍然是一个未解之谜。</p>
                    </div>
                    <div class="tip-box">
                        <h4>阅读方法</h4>
                        <p>有目的地阅读：根据阅读目的选择合适的阅读内容，运用恰当的阅读方法。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "下列哪个不是生命存在的条件？",
                        options: ["适宜的温度", "必要的水分", "适当成分的大气", "强烈的辐射"],
                        answer: "强烈的辐射"
                    },
                    {
                        type: "true-false",
                        question: "火星上可能存在生命。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "太阳系中不可能存在生命的行星包括水星、金星、木星、土星、天王星和________。",
                        answer: "海王星"
                    }
                ]
            },
            {
                id: "chinese_11",
                number: 11,
                title: "第十一课：故宫博物院",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、生字词</h4>
                        <ul>
                            <li>矗立：高耸地立着。</li>
                            <li>缭绕：回环旋转。</li>
                            <li>和谐：配合得适当和匀称。</li>
                            <li>掩映：彼此遮掩而互相衬托。</li>
                            <li>井然有序：整齐而有秩序。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点内容</h4>
                        <ul>
                            <li>故宫的布局：前朝（三大殿）——内廷（后三宫）——御花园。</li>
                            <li>三大殿：太和殿、中和殿、保和殿。</li>
                            <li>后三宫：乾清宫、交泰殿、坤宁宫。</li>
                            <li>故宫的特点：规模宏大、建筑精美、布局统一。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、课文主题</h4>
                        <p>本文按照参观顺序，介绍了故宫的主要建筑及其特色，表现了我国古代劳动人民的智慧和创造力，表达了作者对祖国传统文化的热爱。</p>
                    </div>
                    <div class="example-box">
                        <h4>说明方法</h4>
                        <p>1. 列数字：故宫占地72万平方米。</p>
                        <p>2. 作比较：太和殿是故宫最大的宫殿。</p>
                        <p>3. 打比方：弯弯的金水河像一条玉带。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "故宫的前朝包括哪三大殿？",
                        options: ["乾清宫、交泰殿、坤宁宫", "太和殿、中和殿、保和殿", "养心殿、储秀宫、翊坤宫", "太和殿、乾清宫、御花园"],
                        answer: "太和殿、中和殿、保和殿"
                    },
                    {
                        type: "true-false",
                        question: "故宫按照参观顺序介绍。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "故宫的特点是规模宏大、建筑精美、________。",
                        answer: "布局统一"
                    }
                ]
            },
            {
                id: "chinese_12",
                number: 12,
                title: "第十二课：少年闰土",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、生字词</h4>
                        <ul>
                            <li>祭祀：旧俗备供品向神佛或祖先行礼，表示崇敬并求保佑。</li>
                            <li>正月：农历一年的第一个月。</li>
                            <li>供品：供奉神佛祖宗用的食品。</li>
                            <li>值年：同族的人轮流祭祀祖先，轮到的叫值年。</li>
                            <li>郑重：严肃认真。</li>
                            <li>允许：许可。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句子</h4>
                        <ul>
                            <li>深蓝的天空中挂着一轮金黄的圆月，下面是海边的沙地，都种着一望无际的碧绿的西瓜。</li>
                            <li>他们不知道一些事，闰土在海边时，他们都和我一样，只看见院子里高墙上的四角的天空。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、课文主题</h4>
                        <p>本文通过"我"的回忆，刻画了一个见识丰富、活泼可爱、聪明能干的农村少年闰土的形象，反映了"我"与闰土儿时短暂而又真挚的友谊，以及"我"对他的怀念之情。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "《少年闰土》的作者是？",
                        options: ["鲁迅", "老舍", "巴金", "茅盾"],
                        answer: "鲁迅"
                    },
                    {
                        type: "true-false",
                        question: "闰土是一个见识丰富、聪明能干的农村少年。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "深蓝的天空中挂着一轮金黄的圆月，下面是海边的沙地，都种着一望无际的________的西瓜。",
                        answer: "碧绿"
                    }
                ]
            },
            {
                id: "chinese_13",
                number: 13,
                title: "第十三课：好的故事",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、生字词</h4>
                        <ul>
                            <li>预告：事先通告。</li>
                            <li>昏沉：暗淡。</li>
                            <li>幽雅：幽静而雅致。</li>
                            <li>错综：纵横交叉。</li>
                            <li>解散：集合的人分开。</li>
                            <li>消退：逐渐减退。</li>
                            <li>瘦削：形容身体或脸很瘦。</li>
                            <li>瞬间：一眨眼之间。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句子</h4>
                        <ul>
                            <li>灯火渐渐地缩小了，在预告石油的已经不多；石油又不是老牌，早熏得灯罩很昏暗。</li>
                            <li>我仿佛记得曾坐小船经过山阴道，两岸边的乌桕，新禾，野花，鸡，狗，丛树和枯树，茅屋，塔，伽蓝，农夫和村妇，村女，晒着的衣裳，和尚，蓑笠，天，云，竹，……都倒影在澄碧的小河中。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、课文主题</h4>
                        <p>本文通过描写"我"在昏沉的夜里的一个梦境，表现了作者对美好事物的向往和对现实的不满，表达了作者对美好生活的追求。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "形容纵横交叉的词语是？",
                        options: ["预告", "昏沉", "幽雅", "错综"],
                        answer: "错综"
                    },
                    {
                        type: "true-false",
                        question: "《好的故事》描写的是作者的一个梦境。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "我仿佛记得曾坐小船经过山阴道，两岸边的乌桕，新禾，野花，鸡，狗，丛树和枯树，茅屋，塔，伽蓝，农夫和村妇，村女，晒着的衣裳，和尚，蓑笠，天，云，竹，……都倒影在________的小河中。",
                        answer: "澄碧"
                    }
                ]
            },
            {
                id: "chinese_14",
                number: 14,
                title: "第十四课：我的伯父鲁迅先生",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、生字词</h4>
                        <ul>
                            <li>殡仪馆：供停放灵柩和办理丧事的场所。</li>
                            <li>追悼：沉痛地怀念（死者）。</li>
                            <li>吊唁：祭奠死者并慰问其家属。</li>
                            <li>爱戴：敬爱并且拥护。</li>
                            <li>惊异：惊奇诧异。</li>
                            <li>囫囵吞枣：把枣整个咽下去，比喻读书等不加分析地笼统接受。</li>
                            <li>张冠李戴：把姓张的帽子戴到姓李的头上，比喻名实不符，弄错了对象。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句子</h4>
                        <ul>
                            <li>伯父摸着胡子，笑了笑，说："哈哈！还是我的记性好。"</li>
                            <li>你想，四周黑洞洞的，还不容易碰壁吗？</li>
                            <li>这时候，我清清楚楚地看见，而且现在也清清楚楚地记得，他的脸上不再有那种慈祥的愉快的表情了，他变得那么严肃。</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、课文主题</h4>
                        <p>本文通过回忆伯父鲁迅先生生前的几件事，表现了鲁迅先生爱憎分明、为自己想得少、为别人想得多的崇高品质，表达了作者对伯父的敬爱和怀念之情。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "比喻读书等不加分析地笼统接受的成语是？",
                        options: ["囫囵吞枣", "张冠李戴", "爱戴", "惊异"],
                        answer: "囫囵吞枣"
                    },
                    {
                        type: "true-false",
                        question: "鲁迅先生是一个爱憎分明、为自己想得少、为别人想得多的人。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "你想，四周黑洞洞的，还不容易________吗？",
                        answer: "碰壁"
                    }
                ]
            },
            {
                id: "chinese_15",
                number: 15,
                title: "第十五课：有的人——纪念鲁迅有感",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、原文</h4>
                        <p>有的人活着，他已经死了；有的人死了，他还活着。</p>
                        <p>有的人骑在人民头上："呵，我多伟大！"有的人俯下身子给人民当牛马。</p>
                        <p>有的人把名字刻入石头，想"不朽"；有的人情愿作野草，等着地下的火烧。</p>
                        <p>有的人他活着别人就不能活；有的人他活着为了多数人更好地活。</p>
                        <p>骑在人民头上的，人民把他摔垮；给人民作牛马的，人民永远记住他！</p>
                        <p>把名字刻入石头的，名字比尸首烂得更早；只要春风吹到的地方，到处是青青的野草。</p>
                        <p>他活着别人就不能活的人，他的下场可以看到；他活着为了多数人更好地活着的人，群众把他抬举得很高，很高。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、课文主题</h4>
                        <p>这首诗通过两种人的对比，热情歌颂了鲁迅先生为人民无私奉献的伟大精神，无情鞭挞了骑在人民头上作威作福的反动派，表达了作者对鲁迅的深切怀念和崇敬之情。</p>
                    </div>
                    <div class="tip-box">
                        <h4>写作手法</h4>
                        <p>对比：将两种人进行对比，突出鲁迅先生的伟大品格。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "《有的人》是为了纪念谁而作的？",
                        options: ["毛泽东", "鲁迅", "周恩来", "朱德"],
                        answer: "鲁迅"
                    },
                    {
                        type: "true-false",
                        question: "《有的人》运用了对比的写作手法。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "有的人活着，他已经死了；有的人死了，________。",
                        answer: "他还活着"
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
                title: "第一单元：小数乘法",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、小数乘整数</h4>
                        <ul>
                            <li>计算方法：先按照整数乘法的法则算出积，再看因数中一共有几位小数，就从积的右边起数出几位，点上小数点。</li>
                            <li>注意：积的小数部分末尾有0，一般要根据小数的性质去掉小数末尾的0。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>计算：2.5 × 4</p>
                        <p>解：2.5 × 4 = 10</p>
                        <p>计算：0.72 × 5</p>
                        <p>解：0.72 × 5 = 3.6</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、小数乘小数</h4>
                        <ul>
                            <li>计算方法：先按照整数乘法算出积，再看两个因数中一共有几位小数，就从积的右边起数出几位，点上小数点。</li>
                            <li>注意：乘得的积的小数位数不够时，要在前面用0补足，再点小数点。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>计算：1.2 × 0.8</p>
                        <p>解：1.2 × 0.8 = 0.96</p>
                        <p>计算：0.56 × 0.04</p>
                        <p>解：0.56 × 0.04 = 0.0224</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、积的近似数</h4>
                        <ul>
                            <li>求积的近似数的方法：先算出积，然后看需要保留几位小数，就根据下一位数字进行四舍五入。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>计算：0.85 × 1.26（保留两位小数）</p>
                        <p>解：0.85 × 1.26 = 1.071 ≈ 1.07</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>四、运算定律推广到小数</h4>
                        <ul>
                            <li>整数乘法的交换律、结合律、分配律，对于小数乘法同样适用。</li>
                            <li>运用乘法运算定律，可以使一些计算简便。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>计算：0.25 × 4.78 × 4</p>
                        <p>解：0.25 × 4.78 × 4 = 0.25 × 4 × 4.78 = 1 × 4.78 = 4.78</p>
                        <p>计算：1.25 × 0.8 × 0.5</p>
                        <p>解：1.25 × 0.8 × 0.5 = 1 × 0.5 = 0.5</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "计算 2.5 × 4 的结果是？",
                        options: ["8", "9", "10", "11"],
                        answer: "10"
                    },
                    {
                        type: "true-false",
                        question: "整数乘法的运算定律对于小数乘法同样适用。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "计算 1.2 × 0.8 = ________",
                        answer: "0.96"
                    }
                ]
            },
            {
                id: "math_2",
                number: 2,
                title: "第二单元：位置",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、用数对表示位置</h4>
                        <ul>
                            <li>数对的表示方法：用有顺序的两个数表示出一个确定的位置。</li>
                            <li>书写格式：（列，行）</li>
                            <li>注意：列数从左往右数，行数从前往后数。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>小明坐在教室的第3列第4行，用数对表示是（3，4）。</p>
                        <p>小红的位置是（5，2），表示她坐在第5列第2行。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、数对的特点</h4>
                        <ul>
                            <li>两个数对，第一个数相同，说明它们在同一列。</li>
                            <li>两个数对，第二个数相同，说明它们在同一行。</li>
                            <li>两个数对，两个数都相同，说明它们是同一个位置。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>（3，4）和（3，7）在同一列。</p>
                        <p>（2，5）和（6，5）在同一行。</p>
                        <p>（4，3）和（4，3）是同一个位置。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、在方格纸上用数对确定位置</h4>
                        <ul>
                            <li>在方格纸上，用数对可以表示物体的位置。</li>
                            <li>横向的线表示列，纵向的线表示行。</li>
                            <li>交点就是物体的位置。</li>
                        </ul>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "小明坐在第3列第4行，用数对表示为？",
                        options: ["(3,4)", "(4,3)", "(3,3)", "(4,4)"],
                        answer: "(3,4)"
                    },
                    {
                        type: "true-false",
                        question: "数对（2，5）和（5，2）表示同一个位置。",
                        answer: false
                    },
                    {
                        type: "fill-blank",
                        question: "数对中第一个数表示________，第二个数表示行。",
                        answer: "列"
                    }
                ]
            },
            {
                id: "math_3",
                number: 3,
                title: "第三单元：小数除法",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、小数除以整数</h4>
                        <ul>
                            <li>计算方法：按照整数除法的法则去除，商的小数点要和被除数的小数点对齐。</li>
                            <li>注意：如果除到被除数的末尾仍有余数，就在余数后面添0继续除。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>计算：22.4 ÷ 4</p>
                        <p>解：22.4 ÷ 4 = 5.6</p>
                        <p>计算：5.6 ÷ 7</p>
                        <p>解：5.6 ÷ 7 = 0.8</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、一个数除以小数</h4>
                        <ul>
                            <li>计算方法：先移动除数的小数点，使它变成整数；除数的小数点向右移动几位，被除数的小数点也向右移动几位（位数不够的，在被除数的末尾用0补足）；然后按照除数是整数的小数除法进行计算。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>计算：7.65 ÷ 0.85</p>
                        <p>解：7.65 ÷ 0.85 = 765 ÷ 85 = 9</p>
                        <p>计算：12.6 ÷ 0.28</p>
                        <p>解：12.6 ÷ 0.28 = 1260 ÷ 28 = 45</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、商的近似数</h4>
                        <ul>
                            <li>求商的近似数的方法：先算出商，然后看需要保留几位小数，就根据下一位数字进行四舍五入。</li>
                            <li>注意：求商的近似数时，一般要除到比需要保留的小数位数多一位。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>计算：19.4 ÷ 12（保留两位小数）</p>
                        <p>解：19.4 ÷ 12 ≈ 1.62</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>四、循环小数</h4>
                        <ul>
                            <li>循环小数：一个数的小数部分，从某一位起，一个数字或者几个数字依次不断重复出现，这样的小数叫做循环小数。</li>
                            <li>循环节：一个循环小数的小数部分，依次不断重复出现的数字，就是这个循环小数的循环节。</li>
                            <li>循环小数的简便写法：只写出一个循环节，在这个循环节的首位和末位数字上各点一个圆点。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>5.333...的循环节是3，简写作5.3̇。</p>
                        <p>6.245245...的循环节是245，简写作6.245̇。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "计算 22.4 ÷ 4 的结果是？",
                        options: ["5.4", "5.6", "5.8", "6.0"],
                        answer: "5.6"
                    },
                    {
                        type: "true-false",
                        question: "5.333...是循环小数。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "计算 7.65 ÷ 0.85 = ________",
                        answer: "9"
                    }
                ]
            },
            {
                id: "math_4",
                number: 4,
                title: "第四单元：可能性",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、可能性</h4>
                        <ul>
                            <li>一定：发生的可能性是100%。</li>
                            <li>不可能：发生的可能性是0%。</li>
                            <li>可能：发生的可能性在0%到100%之间。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>太阳从东边升起，这是<strong>一定</strong>发生的。</p>
                        <p>明天会下雨，这是<strong>可能</strong>发生的。</p>
                        <p>石头会变成金子，这是<strong>不可能</strong>发生的。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、可能性的大小</h4>
                        <ul>
                            <li>可能性的大小与数量的多少有关。</li>
                            <li>在总数中所占数量越多，可能性越大；所占数量越少，可能性越小。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>盒子里有3个红球，2个黄球，1个蓝球。</p>
                        <p>摸到红球的可能性<strong>最大</strong>。</p>
                        <p>摸到蓝球的可能性<strong>最小</strong>。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、游戏规则的公平性</h4>
                        <ul>
                            <li>判断游戏规则是否公平，要看双方获胜的可能性是否相等。</li>
                            <li>如果双方获胜的可能性相等，游戏规则就是公平的；否则，就是不公平的。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>小明和小红玩抛硬币游戏，正面朝上小明赢，反面朝上小红赢。</p>
                        <p>这个游戏规则是<strong>公平</strong>的，因为正面朝上和反面朝上的可能性相等。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "盒子里有3个红球，2个黄球，1个蓝球，摸到哪种颜色球的可能性最大？",
                        options: ["红球", "黄球", "蓝球", "一样大"],
                        answer: "红球"
                    },
                    {
                        type: "true-false",
                        question: "抛硬币游戏中，正面朝上和反面朝上的可能性相等。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "太阳从东边升起，这是________发生的。",
                        answer: "一定"
                    }
                ]
            },
            {
                id: "math_5",
                number: 5,
                title: "第五单元：简易方程",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、用字母表示数</h4>
                        <ul>
                            <li>用字母可以表示数、数量关系、计算公式、运算定律。</li>
                            <li>注意：在含有字母的式子里，字母中间的乘号可以记作"·"，也可以省略不写。</li>
                            <li>数字与字母相乘时，省略乘号后，数字要写在字母的前面。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>省略乘号写出下列各式：</p>
                        <p>a × 8 = 8a</p>
                        <p>x × 2.5 = 2.5x</p>
                        <p>a × b = ab</p>
                        <p>a × a = a²</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、方程的意义</h4>
                        <ul>
                            <li>方程：含有未知数的等式叫做方程。</li>
                            <li>方程必须具备两个条件：①含有未知数；②是等式。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>下列哪些是方程？</p>
                        <p>x + 5 = 10 （是方程）</p>
                        <p>3 + 8 = 11 （不是方程，没有未知数）</p>
                        <p>x + 5 （不是方程，不是等式）</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、解方程</h4>
                        <ul>
                            <li>解方程：求方程的解的过程叫做解方程。</li>
                            <li>方程的解：使方程左右两边相等的未知数的值，叫做方程的解。</li>
                            <li>等式的性质：</li>
                            <li>①等式的两边同时加上（或减去）同一个数，左右两边仍然相等。</li>
                            <li>②等式的两边同时乘同一个数，或除以同一个不为0的数，左右两边仍然相等。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>解方程：x + 5 = 12</p>
                        <p>解：x + 5 - 5 = 12 - 5</p>
                        <p>x = 7</p>
                        <p>解方程：3x = 15</p>
                        <p>解：3x ÷ 3 = 15 ÷ 3</p>
                        <p>x = 5</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>四、实际问题与方程</h4>
                        <ul>
                            <li>列方程解应用题的步骤：</li>
                            <li>①弄清题意，找出未知数，用x表示；</li>
                            <li>②分析数量关系，找出等量关系；</li>
                            <li>③列出方程；</li>
                            <li>④解方程；</li>
                            <li>⑤检验，写出答案。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>小红有x本故事书，小明的故事书是小红的3倍，两人一共有40本故事书。</p>
                        <p>解：x + 3x = 40</p>
                        <p>4x = 40</p>
                        <p>x = 10</p>
                        <p>答：小红有10本故事书。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "下列哪个是方程？",
                        options: ["x + 5", "3 + 8 = 11", "x + 5 = 10", "2x"],
                        answer: "x + 5 = 10"
                    },
                    {
                        type: "true-false",
                        question: "解方程 3x = 15 的结果是 x = 5。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "a × 8 省略乘号后写作________",
                        answer: "8a"
                    }
                ]
            },
            {
                id: "math_6",
                number: 6,
                title: "第六单元：多边形的面积",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、平行四边形的面积</h4>
                        <ul>
                            <li>平行四边形的面积 = 底 × 高</li>
                            <li>字母公式：S = ah</li>
                            <li>注意：计算平行四边形的面积时，底和高要对应。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>一个平行四边形的底是6cm，高是4cm，求它的面积。</p>
                        <p>解：S = ah = 6 × 4 = 24（cm²）</p>
                        <p>答：它的面积是24cm²。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、三角形的面积</h4>
                        <ul>
                            <li>三角形的面积 = 底 × 高 ÷ 2</li>
                            <li>字母公式：S = ah ÷ 2</li>
                            <li>注意：计算三角形的面积时，底和高要对应。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>一个三角形的底是8cm，高是5cm，求它的面积。</p>
                        <p>解：S = ah ÷ 2 = 8 × 5 ÷ 2 = 20（cm²）</p>
                        <p>答：它的面积是20cm²。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、梯形的面积</h4>
                        <ul>
                            <li>梯形的面积 = （上底 + 下底）× 高 ÷ 2</li>
                            <li>字母公式：S = (a + b)h ÷ 2</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>一个梯形的上底是4cm，下底是6cm，高是5cm，求它的面积。</p>
                        <p>解：S = (a + b)h ÷ 2 = (4 + 6) × 5 ÷ 2 = 25（cm²）</p>
                        <p>答：它的面积是25cm²。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>四、组合图形的面积</h4>
                        <ul>
                            <li>组合图形的面积计算方法：</li>
                            <li>①分割法：把组合图形分割成几个简单的图形，分别求出面积，再相加。</li>
                            <li>②添补法：把组合图形添补成一个简单的图形，求出面积，再减去添补部分的面积。</li>
                        </ul>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "平行四边形的面积公式是？",
                        options: ["S = ah", "S = ah ÷ 2", "S = (a + b)h ÷ 2", "S = a²"],
                        answer: "S = ah"
                    },
                    {
                        type: "true-false",
                        question: "三角形的面积是等底等高的平行四边形面积的一半。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "梯形的面积 = （上底 + 下底）× ________ ÷ 2",
                        answer: "高"
                    }
                ]
            },
            {
                id: "math_7",
                number: 7,
                title: "第七单元：植树问题",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、两端都栽</h4>
                        <ul>
                            <li>间隔数 = 总长度 ÷ 间隔长度</li>
                            <li>棵数 = 间隔数 + 1</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>在一条长100m的小路一边植树，每隔5m栽一棵（两端都栽），一共要栽多少棵？</p>
                        <p>解：100 ÷ 5 = 20（个）</p>
                        <p>20 + 1 = 21（棵）</p>
                        <p>答：一共要栽21棵。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、两端都不栽</h4>
                        <ul>
                            <li>间隔数 = 总长度 ÷ 间隔长度</li>
                            <li>棵数 = 间隔数 - 1</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>在一条长100m的小路一边植树，每隔5m栽一棵（两端都不栽），一共要栽多少棵？</p>
                        <p>解：100 ÷ 5 = 20（个）</p>
                        <p>20 - 1 = 19（棵）</p>
                        <p>答：一共要栽19棵。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、只栽一端</h4>
                        <ul>
                            <li>间隔数 = 总长度 ÷ 间隔长度</li>
                            <li>棵数 = 间隔数</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>在一条长100m的小路一边植树，每隔5m栽一棵（只栽一端），一共要栽多少棵？</p>
                        <p>解：100 ÷ 5 = 20（棵）</p>
                        <p>答：一共要栽20棵。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>四、封闭图形</h4>
                        <ul>
                            <li>在封闭图形上植树（如圆形、方形等）：</li>
                            <li>棵数 = 间隔数</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>一个圆形花坛周长是50m，每隔5m栽一棵树，一共要栽多少棵？</p>
                        <p>解：50 ÷ 5 = 10（棵）</p>
                        <p>答：一共要栽10棵。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "在一条长100m的小路一边植树，每隔5m栽一棵（两端都栽），一共要栽多少棵？",
                        options: ["19", "20", "21", "22"],
                        answer: "21"
                    },
                    {
                        type: "true-false",
                        question: "在封闭图形上植树，棵数等于间隔数。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "在一条长100m的小路一边植树，每隔5m栽一棵（两端都不栽），一共要栽________棵。",
                        answer: "19"
                    }
                ]
            },
            {
                id: "math_8",
                number: 8,
                title: "第八单元：数学广角——找次品",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、找次品的方法</h4>
                        <ul>
                            <li>把待测物品分成3份，尽量平均分。</li>
                            <li>如果不能平均分，应该使多的一份与少的一份只相差1。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例题</h4>
                        <p>有8个零件，其中一个是次品（轻一些），用天平称，至少称几次能保证找出次品？</p>
                        <p>解：把8个零件分成（3，3，2）三份。</p>
                        <p>第一次称：天平两边各放3个。</p>
                        <p>如果平衡，次品在剩下的2个中，再称1次就能找出。</p>
                        <p>如果不平衡，次品在轻的3个中，再称1次就能找出。</p>
                        <p>所以至少称2次能保证找出次品。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、找次品的规律</h4>
                        <ul>
                            <li>待测物品数量与称的次数的关系：</li>
                            <li>2-3个：1次</li>
                            <li>4-9个：2次</li>
                            <li>10-27个：3次</li>
                            <li>28-81个：4次</li>
                            <li>82-243个：5次</li>
                        </ul>
                    </div>
                    <div class="tip-box">
                        <h4>优化策略</h4>
                        <p>找次品的最优策略：把待测物品分成3份，尽量平均分。这样能保证称的次数最少。</p>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "有8个零件，其中一个是次品（轻一些），用天平称，至少称几次能保证找出次品？",
                        options: ["1", "2", "3", "4"],
                        answer: "2"
                    },
                    {
                        type: "true-false",
                        question: "找次品的最优策略是把待测物品分成3份，尽量平均分。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "4-9个物品，至少需要称________次能保证找出次品。",
                        answer: "2"
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
                title: "Unit 1: What's he like?",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、重点单词</h4>
                        <ul>
                            <li>old - 年老的</li>
                            <li>young - 年轻的</li>
                            <li>funny - 滑稽的，可笑的</li>
                            <li>kind - 亲切的</li>
                            <li>strict - 严格的</li>
                            <li>polite - 有礼貌的</li>
                            <li>hard-working - 努力工作的</li>
                            <li>helpful - 有帮助的</li>
                            <li>clever - 聪明的</li>
                            <li>shy - 害羞的</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句型</h4>
                        <ul>
                            <li>— What's he like? 他是什么样的人？</li>
                            <li>— He's very funny. 他很滑稽。</li>
                            <li>— Is she strict? 她严格吗？</li>
                            <li>— Yes, she is. 是的，她很严格。</li>
                            <li>— No, she isn't. 不，她不严格。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例句</h4>
                        <p>Our maths teacher is very kind.</p>
                        <p>我们的数学老师很亲切。</p>
                        <p>Is your English teacher young?</p>
                        <p>你的英语老师年轻吗？</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、语法重点</h4>
                        <ul>
                            <li>询问某人外貌或性格的句型：What's + 主语 + like?</li>
                            <li>回答：主语 + be动词 + 形容词。</li>
                            <li>be动词的用法：am（我），is（他/她/它/单数），are（你/你们/他们/复数）。</li>
                        </ul>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "选择正确的翻译：strict",
                        options: ["年轻的", "严格的", "亲切的", "聪明的"],
                        answer: "严格的"
                    },
                    {
                        type: "true-false",
                        question: "询问某人性格的句型是：What's he like?",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "Our maths teacher is very ________.（亲切的）",
                        answer: "kind"
                    }
                ]
            },
            {
                id: "english_2",
                number: 2,
                title: "Unit 2: My week",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、重点单词</h4>
                        <ul>
                            <li>Monday - 星期一</li>
                            <li>Tuesday - 星期二</li>
                            <li>Wednesday - 星期三</li>
                            <li>Thursday - 星期四</li>
                            <li>Friday - 星期五</li>
                            <li>Saturday - 星期六</li>
                            <li>Sunday - 星期日</li>
                            <li>weekend - 周末</li>
                            <li>wash my clothes - 洗我的衣服</li>
                            <li>watch TV - 看电视</li>
                            <li>do homework - 做作业</li>
                            <li>read books - 看书</li>
                            <li>play football - 踢足球</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句型</h4>
                        <ul>
                            <li>— What do you have on Thursdays? 星期四你有什么课？</li>
                            <li>— I have maths, English and music. 我有数学、英语和音乐课。</li>
                            <li>— What do you do on the weekend? 你周末做什么？</li>
                            <li>— I often watch TV. 我经常看电视。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例句</h4>
                        <p>What do you have on Mondays?</p>
                        <p>星期一你有什么课？</p>
                        <p>I have Chinese, maths and English.</p>
                        <p>我有语文、数学和英语课。</p>
                        <p>Do you often read books on the weekend?</p>
                        <p>你周末经常看书吗？</p>
                        <p>Yes, I do. / No, I don't.</p>
                        <p>是的，我经常。/ 不，我不经常。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、语法重点</h4>
                        <ul>
                            <li>询问某人有什么课：What do/does + 主语 + have on + 星期s?</li>
                            <li>询问某人做什么：What do/does + 主语 + do?</li>
                            <li>一般现在时的用法：表示经常性、习惯性的动作。</li>
                        </ul>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "选择正确的翻译：Wednesday",
                        options: ["星期一", "星期二", "星期三", "星期四"],
                        answer: "星期三"
                    },
                    {
                        type: "true-false",
                        question: "询问周末做什么的句型是：What do you do on the weekend?",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "I often ________ TV on the weekend.（看电视）",
                        answer: "watch"
                    }
                ]
            },
            {
                id: "english_3",
                number: 3,
                title: "Unit 3: What would you like?",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、重点单词</h4>
                        <ul>
                            <li>sandwich - 三明治</li>
                            <li>salad - 沙拉</li>
                            <li>hamburger - 汉堡包</li>
                            <li>ice cream - 冰淇淋</li>
                            <li>tea - 茶</li>
                            <li>fresh - 新鲜的</li>
                            <li>healthy - 健康的</li>
                            <li>delicious - 美味的</li>
                            <li>hot - 辣的，热的</li>
                            <li>sweet - 甜的</li>
                            <li>drink - 喝</li>
                            <li>thirsty - 口渴的</li>
                            <li>hungry - 饥饿的</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句型</h4>
                        <ul>
                            <li>— What would you like to eat? 你想吃什么？</li>
                            <li>— I'd like a sandwich, please. 我想要一个三明治。</li>
                            <li>— What would you like to drink? 你想喝什么？</li>
                            <li>— I'd like some tea. 我想要一些茶。</li>
                            <li>— What's your favourite food? 你最喜欢的食物是什么？</li>
                            <li>— Noodles. They're delicious. 面条。它们很美味。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例句</h4>
                        <p>What would you like for dinner?</p>
                        <p>晚餐你想吃什么？</p>
                        <p>I'd like some beef and vegetables.</p>
                        <p>我想要一些牛肉和蔬菜。</p>
                        <p>The ice cream is sweet.</p>
                        <p>冰淇淋是甜的。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、语法重点</h4>
                        <ul>
                            <li>would like = 'd like，表示"想要"。</li>
                            <li>询问某人想要什么：What would + 主语 + like?</li>
                            <li>询问某人最喜欢的食物：What's + 主语 + favourite food?</li>
                        </ul>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "选择正确的翻译：delicious",
                        options: ["新鲜的", "健康的", "美味的", "甜的"],
                        answer: "美味的"
                    },
                    {
                        type: "true-false",
                        question: "询问想要喝什么的句型是：What would you like to drink?",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "I'd like a ________.（三明治）",
                        answer: "sandwich"
                    }
                ]
            },
            {
                id: "english_4",
                number: 4,
                title: "Unit 4: What can you do?",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、重点单词</h4>
                        <ul>
                            <li>sing - 唱歌</li>
                            <li>song - 歌曲</li>
                            <li>dance - 跳舞</li>
                            <li>draw - 画</li>
                            <li>cartoon - 卡通</li>
                            <li>cook - 烹饪</li>
                            <li>swim - 游泳</li>
                            <li>play basketball - 打篮球</li>
                            <li>play ping-pong - 打乒乓球</li>
                            <li>speak English - 说英语</li>
                            <li>party - 聚会</li>
                            <li>wonderful - 精彩的</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句型</h4>
                        <ul>
                            <li>— What can you do for the party? 你能为聚会做什么？</li>
                            <li>— I can sing English songs. 我会唱英文歌。</li>
                            <li>— Can you do any kung fu? 你会功夫吗？</li>
                            <li>— Yes, I can. 是的，我会。</li>
                            <li>— No, I can't. 不，我不会。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例句</h4>
                        <p>I can draw cartoons.</p>
                        <p>我会画卡通画。</p>
                        <p>She can dance very well.</p>
                        <p>她跳舞跳得很好。</p>
                        <p>Can you swim?</p>
                        <p>你会游泳吗？</p>
                        <p>No, I can't. But I can play football.</p>
                        <p>不，我不会。但我会踢足球。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、语法重点</h4>
                        <ul>
                            <li>情态动词can的用法：can + 动词原形，表示"能够、会"。</li>
                            <li>询问某人能做什么：What can + 主语 + do?</li>
                            <li>询问某人是否会做某事：Can + 主语 + 动词原形?</li>
                            <li>肯定回答：Yes, 主语 + can.</li>
                            <li>否定回答：No, 主语 + can't.</li>
                        </ul>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "选择正确的翻译：swim",
                        options: ["唱歌", "跳舞", "游泳", "画画"],
                        answer: "游泳"
                    },
                    {
                        type: "true-false",
                        question: "can后面接动词原形。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "I can ________ English.（说英语）",
                        answer: "speak"
                    }
                ]
            },
            {
                id: "english_5",
                number: 5,
                title: "Unit 5: There is a big bed",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、重点单词</h4>
                        <ul>
                            <li>clock - 时钟</li>
                            <li>plant - 植物</li>
                            <li>water bottle - 水瓶</li>
                            <li>bike - 自行车</li>
                            <li>photo - 照片</li>
                            <li>clock - 时钟</li>
                            <li>in front of - 在...前面</li>
                            <li>beside - 在...旁边</li>
                            <li>behind - 在...后面</li>
                            <li>between - 在...中间</li>
                            <li>above - 在...上方</li>
                            <li>house - 房子</li>
                            <li>flower - 花</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句型</h4>
                        <ul>
                            <li>There is a clock on the wall. 墙上有一个时钟。</li>
                            <li>There is a plant in front of the house. 房子前面有一株植物。</li>
                            <li>There are so many pictures on the wall. 墙上有这么多画。</li>
                            <li>Where is the ball? 球在哪里？</li>
                            <li>It's in front of the dog. 它在狗的前面。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例句</h4>
                        <p>There is a big bed in the room.</p>
                        <p>房间里有一张大床。</p>
                        <p>There are many flowers in the garden.</p>
                        <p>花园里有很多花。</p>
                        <p>Where is the ball?</p>
                        <p>球在哪里？</p>
                        <p>It's beside the box.</p>
                        <p>它在盒子旁边。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、语法重点</h4>
                        <ul>
                            <li>There be句型：表示"有..."。</li>
                            <li>There is + 单数名词/不可数名词。</li>
                            <li>There are + 复数名词。</li>
                            <li>就近原则：There be句型中，be动词的形式由离它最近的名词决定。</li>
                        </ul>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "选择正确的翻译：beside",
                        options: ["在...前面", "在...旁边", "在...后面", "在...中间"],
                        answer: "在...旁边"
                    },
                    {
                        type: "true-false",
                        question: "There be句型中，be动词的形式由离它最近的名词决定。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "There ________ a plant in front of the house.（有）",
                        answer: "is"
                    }
                ]
            },
            {
                id: "english_6",
                number: 6,
                title: "Unit 6: In a nature park",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、重点单词</h4>
                        <ul>
                            <li>forest - 森林</li>
                            <li>river - 河</li>
                            <li>lake - 湖</li>
                            <li>mountain - 山</li>
                            <li>hill - 小山</li>
                            <li>tree - 树</li>
                            <li>building - 建筑物</li>
                            <li>bridge - 桥</li>
                            <li>village - 村庄</li>
                            <li>house - 房子</li>
                            <li>boating - 划船</li>
                            <li>go boating - 去划船</li>
                            <li>aren't = are not</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句型</h4>
                        <ul>
                            <li>— Is there a river in the forest? 森林里有一条河吗？</li>
                            <li>— Yes, there is. 是的，有。</li>
                            <li>— No, there isn't. 不，没有。</li>
                            <li>— Are there any lakes in the park? 公园里有湖吗？</li>
                            <li>— Yes, there are. 是的，有。</li>
                            <li>— No, there aren't. 不，没有。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例句</h4>
                        <p>There is a high mountain in the park.</p>
                        <p>公园里有一座高山。</p>
                        <p>There are many small houses in the village.</p>
                        <p>村庄里有很多小房子。</p>
                        <p>Is there a bridge over the river?</p>
                        <p>河上有一座桥吗？</p>
                        <p>Yes, there is.</p>
                        <p>是的，有。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、语法重点</h4>
                        <ul>
                            <li>There be句型的一般疑问句：把be动词提到句首。</li>
                            <li>Is there + 单数名词/不可数名词?</li>
                            <li>Are there + 复数名词?</li>
                            <li>肯定回答：Yes, there is/are.</li>
                            <li>否定回答：No, there isn't/aren't.</li>
                        </ul>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "选择正确的翻译：forest",
                        options: ["森林", "河流", "湖泊", "山脉"],
                        answer: "森林"
                    },
                    {
                        type: "true-false",
                        question: "询问公园里是否有湖的句型是：Are there any lakes in the park?",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "Is there a ________ in the forest?（河流）",
                        answer: "river"
                    }
                ]
            },
            {
                id: "english_7",
                number: 7,
                title: "Unit 7: Can I help you?",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、重点单词</h4>
                        <ul>
                            <li>scarf - 围巾</li>
                            <li>gloves - 手套</li>
                            <li>umbrella - 雨伞</li>
                            <li>sunglasses - 太阳镜</li>
                            <li>pretty - 漂亮的</li>
                            <li>expensive - 昂贵的</li>
                            <li>cheap - 便宜的</li>
                            <li>nice - 好的</li>
                            <li>try on - 试穿</li>
                            <li>size - 尺码</li>
                            <li>of course - 当然</li>
                            <li>too - 太</li>
                            <li>just right - 正好</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句型</h4>
                        <ul>
                            <li>— Can I help you? 我能帮你吗？</li>
                            <li>— Yes. These gloves are nice. 是的。这双手套很漂亮。</li>
                            <li>— Can I try them on? 我可以试穿吗？</li>
                            <li>— Of course. Here you are. 当然。给你。</li>
                            <li>— How do you like this skirt? 你觉得这条裙子怎么样？</li>
                            <li>— It's very pretty. 它很漂亮。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例句</h4>
                        <p>Can I help you?</p>
                        <p>我能帮你吗？</p>
                        <p>Yes. I'd like a scarf.</p>
                        <p>是的。我想要一条围巾。</p>
                        <p>How much is it?</p>
                        <p>它多少钱？</p>
                        <p>It's 50 yuan.</p>
                        <p>它50元。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、语法重点</h4>
                        <ul>
                            <li>购物用语：Can I help you? / What can I do for you?</li>
                            <li>询问价格：How much is/are + 物品?</li>
                            <li>试穿：Can I try it/them on?</li>
                            <li>表达看法：It's/They're + 形容词。</li>
                        </ul>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "选择正确的翻译：expensive",
                        options: ["便宜的", "昂贵的", "漂亮的", "好的"],
                        answer: "昂贵的"
                    },
                    {
                        type: "true-false",
                        question: "询问价格的句型是：How much is it?",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "Can I ________ them on?（试穿）",
                        answer: "try"
                    }
                ]
            },
            {
                id: "english_8",
                number: 8,
                title: "Unit 8: Whose dog is it?",
                points: 10,
                content: `
                    <div class="knowledge-point">
                        <h4>一、重点单词</h4>
                        <ul>
                            <li>whose - 谁的</li>
                            <li>mine - 我的</li>
                            <li>yours - 你的</li>
                            <li>his - 他的</li>
                            <li>hers - 她的</li>
                            <li>theirs - 他们的</li>
                            <li>ours - 我们的</li>
                            <li>theirs - 他们的</li>
                            <li>climbing - 攀爬（现在分词）</li>
                            <li>eating - 吃（现在分词）</li>
                            <li>playing - 玩（现在分词）</li>
                            <li>jumping - 跳（现在分词）</li>
                            <li>drinking - 喝（现在分词）</li>
                            <li>sleeping - 睡觉（现在分词）</li>
                        </ul>
                    </div>
                    <div class="knowledge-point">
                        <h4>二、重点句型</h4>
                        <ul>
                            <li>— Whose dog is it? 这是谁的狗？</li>
                            <li>— It's my dog. It's mine. 它是我的狗。它是我的。</li>
                            <li>— Whose book is this? 这是谁的书？</li>
                            <li>— It's Amy's. 它是艾米的。</li>
                            <li>The dog is yours. 狗是你的。</li>
                        </ul>
                    </div>
                    <div class="example-box">
                        <h4>例句</h4>
                        <p>Whose pen is this?</p>
                        <p>这是谁的钢笔？</p>
                        <p>It's mine.</p>
                        <p>它是我的。</p>
                        <p>The cat is climbing the tree.</p>
                        <p>猫正在爬树。</p>
                        <p>The rabbits are jumping.</p>
                        <p>兔子们正在跳。</p>
                    </div>
                    <div class="knowledge-point">
                        <h4>三、语法重点</h4>
                        <ul>
                            <li>名词性物主代词：mine, yours, his, hers, ours, theirs。</li>
                            <li>名词性物主代词 = 形容词性物主代词 + 名词。</li>
                            <li>现在进行时：be动词 + 动词ing，表示正在进行的动作。</li>
                            <li>动词ing的变化规则：</li>
                            <li>①直接加ing：play → playing</li>
                            <li>②以不发音的e结尾，去e加ing：make → making</li>
                            <li>③重读闭音节，双写末尾字母加ing：run → running</li>
                        </ul>
                    </div>
                `,
                quiz: [
                    {
                        type: "multiple-choice",
                        question: "选择正确的翻译：mine",
                        options: ["我的", "你的", "他的", "她的"],
                        answer: "我的"
                    },
                    {
                        type: "true-false",
                        question: "现在进行时的结构是：be动词 + 动词ing。",
                        answer: true
                    },
                    {
                        type: "fill-blank",
                        question: "The cat is ________ the tree.（爬）",
                        answer: "climbing"
                    }
                ]
            }
        ]
    }
};

const achievements = [
    {
        id: "first_lesson",
        name: "初出茅庐",
        icon: "🌱",
        desc: "完成第一课学习",
        condition: (progress) => progress.totalCompleted >= 1
    },
    {
        id: "lesson_10",
        name: "学有所成",
        icon: "📚",
        desc: "完成10课学习",
        condition: (progress) => progress.totalCompleted >= 10
    },
    {
        id: "lesson_20",
        name: "博学多才",
        icon: "🎓",
        desc: "完成20课学习",
        condition: (progress) => progress.totalCompleted >= 20
    },
    {
        id: "chinese_master",
        name: "语文达人",
        icon: "📖",
        desc: "完成所有语文课程",
        condition: (progress) => progress.chineseCompleted === courseData.chinese.lessons.length
    },
    {
        id: "math_master",
        name: "数学高手",
        icon: "🔢",
        desc: "完成所有数学课程",
        condition: (progress) => progress.mathCompleted === courseData.math.lessons.length
    },
    {
        id: "english_master",
        name: "英语专家",
        icon: "🔤",
        desc: "完成所有英语课程",
        condition: (progress) => progress.englishCompleted === courseData.english.lessons.length
    },
    {
        id: "streak_3",
        name: "坚持不懈",
        icon: "🔥",
        desc: "连续学习3天",
        condition: (progress) => progress.streak >= 3
    },
    {
        id: "streak_7",
        name: "持之以恒",
        icon: "💪",
        desc: "连续学习7天",
        condition: (progress) => progress.streak >= 7
    },
    {
        id: "points_100",
        name: "积分新星",
        icon: "💎",
        desc: "获得100积分",
        condition: (progress) => progress.points >= 100
    },
    {
        id: "points_500",
        name: "积分达人",
        icon: "🌟",
        desc: "获得500积分",
        condition: (progress) => progress.points >= 500
    },
    {
        id: "level_5",
        name: "等级晋升",
        icon: "⭐",
        desc: "达到5级",
        condition: (progress) => progress.level >= 5
    },
    {
        id: "level_10",
        name: "登峰造极",
        icon: "👑",
        desc: "达到10级",
        condition: (progress) => progress.level >= 10
    }
];

const dailyTasks = [
    {
        id: "task_1",
        name: "完成1课学习",
        reward: 20,
        completed: false,
        check: (progress) => progress.todayCompleted >= 1
    },
    {
        id: "task_2",
        name: "完成3课学习",
        reward: 50,
        completed: false,
        check: (progress) => progress.todayCompleted >= 3
    },
    {
        id: "task_3",
        name: "学习所有科目",
        reward: 30,
        completed: false,
        check: (progress) => progress.todaySubjects.size >= 3
    }
];