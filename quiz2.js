//問題の画像を格納する配列
let pic= ["images/アオノメハタ.jpg","images/アオブダイ.jpg","images/アオヤガラ.jpg","images/アカエイ.jpg","images/アカオビベラ（幼魚）.jpg","images/アカハタ.jpg","images/アカハチハゼ.jpg","images/アカハラヤッコ.jpg","images/アカヒメジ.jpg","images/アカマツカサ.jpg","images/アケボノチョウチョウウオ.jpg","images/アジアコショウダイ（若魚）.jpg","images/アブラヤッコ.jpg","images/アマミスズメダイ（幼魚）.jpg","images/アミアイゴ.jpg","images/アミチョウチョウウオ.jpg","images/アミメチョウチョウウオ.jpg","images/アミメハギ.jpg","images/アミメフエダイ.jpg","images/イサキ.jpg","images/イシガキカエルウオ.jpg","images/イシガキスズメダイ.jpg","images/イシガキダイ.jpg","images/イシガキフグ.jpg","images/イシダイ.jpg","images/イスズミ.jpg","images/イズヒメエイ.jpg","images/イソカサゴ.jpg","images/イソゴンベ.jpg","images/イタチウオ.jpg","images/イチモンスズメダイ（幼魚）.jpg","images/イッセンタカサゴ.jpg","images/イッテンチョウチョウウオ.jpg","images/イッテンフエダイ.jpg","images/イトヒキアジ.jpg","images/イナセギンポ.jpg","images/イラ.jpg","images/イロブダイ.jpg","images/イロブダイ（幼魚）.jpg","images/イワサキスズメダイ.jpg","images/インドカエルウオ.jpg","images/インドヒメジ.jpg","images/ウケグチイットウダイ.jpg","images/ウツボ.jpg","images/ウマヅラハギ.jpg","images/ウミスズメ.jpg","images/ウミヅキチョウチョウウオ.jpg","images/ウメイロ.jpg","images/ウメイロモドキ.jpg","images/ウルマカサゴ.jpg","images/オウゴンニジギンポ.jpg","images/オオスジヒメジ.jpg","images/オオセ.jpg","images/オオテンジクザメ.jpg","images/オキザヨリ.jpg","images/オキナヒメジ.jpg","images/オグロトラギス.jpg","images/オジサン.jpg","images/オトメベラ.jpg","images/オドリハゼ.jpg","images/オニカマス.jpg","images/オニダルマオコゼ.jpg","images/オニベラ（♀）.jpg","images/オハグロベラ.jpg","images/オビテンスモドキ.jpg","images/オビテンスモドキ（幼魚）.jpg","images/オビブダイ.jpg","images/オヤビッチャ.jpg","images/カガミチョウチョウウオ.jpg","images/カクレクマノミ.jpg","images/カゴカキダイ.jpg","images/カサゴ.jpg","images/カスミアジ.jpg","images/カスミチョウチョウウオ.jpg","images/カスリイシモチ.jpg","images/カノコベラ（幼魚）.jpg","images/カマスベラ.jpg","images/カワハギ.jpg","images/カワリブダイ.jpg","images/カンムリベラ.jpg","images/カンムリベラ（幼魚）.jpg","images/カンモンハタ.jpg","images/キイロハギ.jpg","images/キタマクラ.jpg","images/ギチベラ（♀）.jpg","images/ギチベラ（♂）.jpg","images/キツネベラ（幼魚）.jpg","images/キヌバリ.jpg","images/キミオコゼ.jpg","images/キリンミノ.jpg","images/キンギョハナダイ（♀）.jpg","images/キンセンイシモチ.jpg","images/キンセンハゼ.jpg","images/キンチャクダイ.jpg","images/キンチャクダイ（幼魚）.jpg","images/クギベラ（♀）.jpg","images/クサフグ.jpg","images/クマドリ.jpg","images/クマノミ.jpg","images/クラカオスズメダイ.jpg","images/クラカケチョウチョウウオ.jpg","images/クラカケモンガラ.jpg","images/クレナイニセスズメ.jpg","images/クログチニザ.jpg","images/クロサギ.jpg","images/クロスズメダイ.jpg","images/クロスズメダイ（幼魚）.jpg","images/クロソラスズメダイ.jpg","images/クロダイ.jpg","images/クロハコフグ.jpg","images/クロフチススキベラ.jpg","images/クロホシイシモチ.jpg","images/クロメガネスズメダイ（幼魚）.jpg","images/クロモンツキ.jpg",
"images/クロユリハゼ.jpg","images/コガシラベラ（♀）.jpg","images/コガネキュウセン.jpg","images/コガネヤッコ.jpg","images/コクテンサザナミハギ.jpg","images/コクテンフグ.jpg","images/ゴマハギ.jpg","images/ゴマハギ（幼魚）.jpg","images/ゴマモンガラ.jpg","images/コロダイ.jpg","images/コロダイ（幼魚）.jpg","images/ゴンズイ.jpg","images/サザナミハギ.jpg","images/サザナミフグ.jpg","images/サザナミヤッコ.jpg","images/サザナミヤッコ（幼魚）.jpg","images/サラサゴンベ.jpg","images/サンゴアイゴ.jpg","images/シコクスズメダイ.jpg","images/シチセンスズメダイ.jpg","images/シチセンチョウチョウウオ.jpg","images/シテンヤッコ.jpg","images/シマアジ.jpg","images/シマウミスズメ.jpg","images/シマハギ.jpg","images/シモフリタナバタウオ.jpg","images/シラコダイ.jpg","images/スカシテンジクダイ.jpg","images/スジオテンジクダイ.jpg","images/スジクロハギ.jpg","images/スダレチョウチョウウオ.jpg","images/スミツキカミナリベラ.jpg","images/スミツキソメワケベラ.jpg","images/スミツキトノサマダイ.jpg","images/セグロスズメダイ.jpg","images/セグロチョウチョウウオ.jpg","images/セグロマツカサ.jpg","images/セジロクマノミ.jpg","images/セダカスズメダイ.jpg","images/ソウシハギ.jpg","images/ソメワケベラ.jpg","images/ソメワケヤッコ.jpg","images/ソラスズメダイ.jpg","images/タカノハダイ.jpg","images/タカベ.jpg","images/タスキモンガラ.jpg","images/タテジマキンチャクダイ.jpg","images/タテジマキンチャクダイ（幼魚）.jpg","images/ダンゴウオ.jpg","images/ダンダラスズメダイ.jpg","images/チョウチョウウオ.jpg","images/チョウチョウコショウダイ（幼魚）.jpg","images/チョウハン.jpg","images/ツキチョウチョウウオ.jpg","images/ツノダシ.jpg","images/ツノハタタテダイ.jpg","images/ツマジロモンガラ.jpg","images/ツユベラ（幼魚）.jpg","images/デバスズメダイ.jpg","images/テングカワハギ.jpg","images/テングハギ.jpg","images/テングハギモドキ.jpg","images/テンクロスジギンポ.jpg","images/テンジクスズメダイ.jpg","images/トウアカクマノミ.jpg","images/トカラベラ.jpg","images/トゲチョウチョウウオ.jpg","images/ドチザメ.jpg","images/トノサマダイ.jpg","images/トラウツボ.jpg","images/ナガサキスズメダイ.jpg","images/ナガニザ.jpg","images/ナミスズメダイ.jpg","images/ナミダクロハギ.jpg","images/ナメラヤッコ.jpg","images/ナンヨウハギ.jpg","images/ニザダイ.jpg","images/ニシキテグリ.jpg","images/ニシキヤッコ.jpg","images/ニジハギ.jpg","images/ニジハタ.jpg","images/ニセクロスジギンポ.jpg","images/ニセフウライチョウチョウウオ.jpg","images/ニセモチノウオ.jpg","images/ネズスズメダイ（幼魚）.jpg","images/ネッタイスズメダイ.jpg","images/ネッタイミノカサゴ.jpg","images/ネムリブカ.jpg","images/ノコギリハギ.jpg","images/ノコギリヨウジ.jpg","images/ノドグロベラ.jpg","images/ハオコゼ.jpg","images/ハクセンスズメダイ.jpg","images/ハクセンスズメダイ（幼魚）.jpg","images/ハコフグ.jpg","images/ハコベラ.jpg","images/ハタタテダイ.jpg","images/ハタタテハゼ.jpg","images/ハナグロチョウチョウウオ.jpg","images/ハナゴイ.jpg","images/ハナハゼ.jpg","images/ハナビラウツボ.jpg","images/ハナビラクマノミ.jpg","images/ハマクマノミ.jpg","images/ハマフエフキ.jpg","images/バラハタ.jpg","images/バラフエダイ.jpg","images/ハリセンボン.jpg","images/ヒフキアイゴ.jpg","images/ヒメアイゴ.jpg","images/ヒメゴンベ.jpg","images/ヒメフウライチョウチョウウオ.jpg","images/ヒレグロコショウダイ（幼魚）.jpg","images/ヒレグロベラ（幼魚）.jpg","images/ヒレナガスズメダイ（幼魚）.jpg",
"images/ヒレナガハギ.jpg","images/ヒレナガハギ（幼魚）.jpg","images/フウライチョウチョウウオ.jpg","images/フエダイ.jpg","images/フエヤッコダイ.jpg","images/オオフエヤッコダイ.jpg","images/フタイロカエルウオ.jpg","images/フタスジタマガシラ.jpg","images/フタスジタマガシラ（幼魚）.jpg","images/フタスジヒメジ.jpg","images/フタスジリュウキュウスズメダイ（幼魚）.jpg","images/ブチススキベラ.jpg","images/ブチススキベラ（幼魚）.jpg","images/ヘラヤガラ.jpg","images/ヘラルドコガネヤッコ.jpg","images/ホウライヒメジ.jpg","images/ホクトベラ.jpg","images/ホシゴンベ.jpg","images/ホシササノハベラ.jpg","images/ボラ.jpg","images/ホンソメワケベラ.jpg","images/マジリアイゴ.jpg","images/マダイ.jpg","images/マダラタルミ（幼魚）.jpg","images/マツカサウオ.jpg","images/ミカヅキツバメウオ.jpg","images/ミカドチョウチョウウオ.jpg","images/ミギマキ.jpg","images/ミスジリュウキュウスズメダイ.jpg","images/ミゾレチョウチョウウオ.jpg","images/ミツボシクロスズメダイ.jpg","images/ミツボシクロスズメダイ（幼魚）.jpg","images/ミナミアカエソ.jpg","images/ミナミゴンベ.jpg","images/ミナミハコフグ（幼魚）.jpg","images/ミナミハタタテダイ.jpg","images/ミノカサゴ.jpg","images/ハナミノカサゴ.jpg","images/ミヤコイシモチ.jpg","images/ミヤコキセンスズメダイ（幼魚）.jpg","images/ミヤコテングハギ.jpg","images/ムスジコショウダイ　.jpg","images/ムラサメモンガラ.jpg","images/メガネクロハギ.jpg","images/メガネゴンベ.jpg","images/メガネスズメダイ（幼魚）.jpg","images/メガネモチノウオ（幼魚）.jpg","images/メギス.jpg","images/メジナ.jpg","images/モヨウモンガラドオシ.jpg","images/モンガラカワハギ.jpg","images/モンツキアカヒメジ.jpg","images/モンツキハギ.jpg","images/ヤエヤマギンポ.jpg","images/ヤマブキベラ（♀）.jpg","images/ヤマブキベラ（♂）.jpg","images/ヤリカタギ.jpg","images/ヤンセンニシキベラ.jpg","images/ユウゼン.jpg","images/ヨコシマクロダイ.jpg","images/ヨコシマタマガシラ.jpg","images/ヨコシマタマガシラ（幼魚）.jpg","images/ヨスジフエダイ.jpg","images/リュウキュウハタンポ.jpg","images/リュウキュウヤライイシモチ.jpg","images/ルリスズメダイ.jpg","images/ルリホシスズメダイ.jpg","images/ルリメイシガキスズメダイ.jpg","images/ルリヤッコ.jpg","images/レモンスズメダイ.jpg","images/レモンチョウチョウウオ.jpg","images/レンテンヤッコ.jpg","images/ロクセンスズメダイ.jpg","images/ロクセンヤッコ.jpg","images/ワカウツボ.jpg","images/ニシキベラ.jpg","images/トガリエビス.jpg","images/ゴマチョウチョウウオ.jpg","images/シマキンチャクフグ.jpg"];

//鳥類
let pic_bird=["bird/サカツラガン（カモ科）.jpg","bird/マガン（カモ科）.jpg","bird/ヒシクイ（カモ科）.jpg","bird/カリガネ（カモ科）.jpg","bird/ハイイロガン（カモ科）.jpg","bird/ハクガン（カモ科）.jpg","bird/シジュウカラガン（カモ科）.jpg","bird/コクガン（カモ科）.jpg","bird/オオハクチョウ（カモ科）.jpg","bird/コハクチョウ（カモ科）.jpg","bird/ツクシガモ（カモ科）.jpg","bird/アカツクシガモ（カモ科）.jpg","bird/オシドリ（カモ科）.jpg","bird/オカヨシガモ（カモ科）.jpg","bird/ヨシガモ（カモ科）.jpg","bird/アメリカヒドリ（カモ科）.jpg","bird/マガモ（カモ科）.jpg","bird/カルガモ（カモ科）.jpg","bird/ハシビロガモ（カモ科）.jpg","bird/オナガカモ（カモ科）.jpg","bird/シマアジ（カモ科）.jpg","bird/トモエガモ（カモ科）.jpg","bird/コガモ（カモ科）.jpg","bird/ホシハジロ（カモ科）.jpg","bird/キンクロハジロ（カモ科）.jpg","bird/スズガモ（カモ科）.jpg","bird/シノリガモ（カモ科）.jpg","bird/クロガモ（カモ科）.jpg","bird/ビロードキンクロ（カモ科）.jpg","bird/ホオジロガモ（カモ科）.jpg","bird/コオリガモ（カモ科）.jpg","bird/カイツブリ（カイツブリ科）.jpg","bird/カンムリカイツブリ（カイツブリ科）.jpg","bird/アカオネッタイチョウ（ネッタイチョウ科）.jpg","bird/シラオネッタイチョウ（ネッタイチョウ科）.jpg","bird/サケイ（サケイ科）.jpg","bird/カラスバト（ハト科）.jpg","bird/キジバト（ハト科）.jpg","bird/シラコバト（ハト科）.jpg","bird/キンバト（ハト科）.jpg","bird/アオバト（ハト科）.jpg","bird/アビ（アビ科）.jpg","bird/ハシジロアビ（アビ科）.jpg","bird/シロエリオオハム（アビ科）.jpg","bird/アホウドリ（アホウドリ科）.jpg","bird/クロアシアホウドリ（アホウドリ科）.jpg","bird/フルマカモメ（ミズナギドリ科）.jpg","bird/オオミズナギドリ（ミズナギドリ科）.jpg","bird/コシジロウミツバメ（ウミツバメ科）.jpg","bird/ハイイロウミツバメ（ウミツバメ科）.jpg","bird/ナベコウ（コウノトリ科）.jpg","bird/コウノトリ（コウノトリ科）.jpg","bird/オオグンカンドリ（グンカンドリ科）.jpg","bird/アオツラカツオドリ（カツオドリ科）.jpg","bird/カワウ（ウ科）.jpg","bird/チシマウガラス（ウ科）.jpg","bird/ウミウ（ウ科）.jpg","bird/ヒメウ（ウ科）.jpg","bird/モモイロペリカン（ペリカン科）.jpg","bird/サンカノゴイ（サギ科）.jpg","bird/ヨシゴイ（サギ科）.jpg","bird/ズグロミゾゴイ（サギ科）.jpg","bird/ゴイサギ（サギ科）.jpg","bird/アカガシラサギ（サギ）.jpg","bird/アマサギ（サギ科）.jpg","bird/アオサギ（サギ科）.jpg","bird/ムラサキサギ（サギ科）.jpg","bird/ダイサギ（サギ科）.jpg","bird/コサギ（サギ科）.jpg","bird/カラシラサギ（サギ科）.jpg","bird/クロサギ（サギ科）.jpg","bird/トキ（トキ科）.jpg","bird/ヘラサギ（サギ科）.jpg","bird/ソデグロヅル（ツル科）.jpg","bird/マナヅル（ツル科）.jpg","bird/タンチョウ（ツル科）.jpg","bird/ナベヅル（ツル科）.jpg","bird/クイナ（クイナ科）.jpg","bird/ヤンバルクイナ（クイナ科）.jpg","bird/ヒクイナ（クイナ科）.jpg","bird/バン（クイナ科）.jpg","bird/オオバン（クイナ科）.jpg","bird/ジュウイチ（カッコウ科）.jpg","bird/ホトトギス（カッコウ科）.jpg","bird/カッコウ（カッコウ科）.jpg","bird/ヨタカ（ヨタカ科）.jpg","bird/アマツバメ（アマツバメ科）.jpg",
"bird/タゲリ（チドリ科）.jpg","bird/ケリ（チドリ科）.jpg","bird/ムナグロ（チドリ科）.jpg","bird/イカルチドリ（チドリ科）.jpg","bird/ミヤコドリ（ミヤコドリ科）.jpg","bird/セイタカシギ（セイタカシギ科）.jpg","bird/ソリハシセイタカシギ（セイタカシギ科）.jpg","bird/ヤマシギ（シギ科）.jpg","bird/オグロシギ（シギ科）.jpg","bird/アオアシシギ（シギ科）.jpg","bird/キョウジョシギ（シギ科）.jpg","bird/ヘラシギ（シギ科）.jpg","bird/エリマキシギ（シギ科）.jpg","bird/レンカク（レンカク科）.jpg","bird/タマシギ（タマシギ科）.jpg","bird/ミフウズラ（ミフウズラ科）.jpg","bird/ツバメチドリ（ツバメチドリ科）.jpg","bird/クロアジサシ（カモメ科）.jpg","bird/ユリカモメ（カモメ科）.jpg","bird/ウミネコ（カモメ科）.jpg","bird/ズグロカモメ（カモメ科）.jpg","bird/オオアジサシ（カモメ科）.jpg","bird/カモメ（カモメ科）.jpg","bird/セグロカモメ（カモメ科）.jpg","bird/ベニアジサシ（カモメ科）.jpg","bird/エリグロアジサシ（カモメ科）.jpg","bird/トウゾクカモメ（トウゾクカモメ科）.jpg","bird/ウミガラス（ウミスズメ科）.jpg","bird/ウミバト（ウミスズメ科）.jpg","bird/ウミスズメ（ウミスズメ科）.jpg","bird/ウミオウム（ウミスズメ科）.jpg","bird/シラヒゲウミスズメ（ウミスズメ科）.jpg","bird/ツノメドリ（ウミスズメ科）.jpg","bird/エトピリカ（ウミスズメ科）.jpg","bird/ウトウ（ウミスズメ科）.jpg","bird/ミサゴ（ミサゴ科）.jpg","bird/トビ（タカ科）.jpg","bird/ハチクマ（タカ科）.jpg","bird/オオワシ（タカ科）.jpg","bird/オジロワシ（タカ科）.jpg","bird/カンムリワシ（タカ科）.jpg","bird/チュウヒ（タカ科）.jpg","bird/アカハラダカ（タカ科）.jpg","bird/オオタカ（タカ科）.jpg","bird/イヌワシ（タカ科）.jpg","bird/クマタカ（タカ科）.jpg","bird/ノスリ（タカ科）.jpg","bird/コノハズク（フクロウ科）.jpg","bird/オオコノハズク（フクロウ科）.jpg","bird/シロフクロウ（フクロウ科）.jpg","bird/ワシミミズク（フクロウ科）.jpg","bird/シマフクロウ（フクロウ科）.jpg","bird/トラフズク（フクロウ科）.jpg","bird/アオバズク（フクロウ科）.jpg","bird/キンメフクロウ（フクロウ科）.jpg","bird/ヤツガシラ（ヤツガシラ科）.jpg","bird/アカショウビン（カワセミ科）.jpg","bird/ヤマショウビン（カワセミ科）.jpg","bird/ナンヨウショウビン（カワセミ科）.jpg","bird/カワセミ（カワセミ科）.jpg","bird/ヤマセミ（カワセミ科）.jpg","bird/ブッポウソウ（ブッポウソウ科）.jpg","bird/アリスイ（キツツキ科）.jpg","bird/コゲラ（キツツキ科）.jpg","bird/アカゲラ（キツツキ科）.jpg","bird/クマゲラ（キツツキ科）.jpg","bird/アオゲラ（キツツキ科）.jpg","bird/ノグチゲラ（キツツキ科）.jpg","bird/チョウゲンボウ（ハヤブサ科）.jpg","bird/シロハヤブサ（ハヤブサ科）.jpg","bird/ハヤブサ（ハヤブサ科）.jpg","bird/コウライウグイス（コウライウグイス科）.jpg","bird/ヤイロチョウ（ヤイロチョウ科）.jpg","bird/サンショウクイ（サンショウクイ科）.jpg","bird/サンコウチョウ（カササギヒタキ科）.jpg","bird/モズ（モズ科）.jpg","bird/オオカラモズ（モズ科）.jpg","bird/チゴモズ（モズ科）.jpg","bird/カケス（カラス科）.jpg","bird/ルリカケス（カラス科）.jpg","bird/カササギ（カラス科）.jpg","bird/オナガ（カラス科）.jpg","bird/ホシガラス（カラス科）.jpg","bird/コクマルガラス（カラス科）.jpg","bird/ミヤマガラス（カラス科）.jpg","bird/ハシブトガラス（カラス科）.jpg","bird/ワタリガラス（カラス科）.jpg","bird/キクイタダキ（キクイタダキ科）.jpg","bird/ツリスガラ（ツリスガラ科）.jpg",
"bird/ハシブトガラ（シジュウカラ科）.jpg","bird/ヤマガラ（シジュウカラ科）.jpg","bird/シジュウカラ（シジュウカラ科）.jpg","bird/ヒバリ（ヒバリ科）.jpg","bird/ツバメ（ツバメ科）.jpg","bird/ショウドウツバメ（ツバメ科）.jpg","bird/リュウキュウツバメ（ツバメ科）.jpg","bird/コシアカツバメ（ツバメ科）.jpg","bird/ヒヨドリ（ヒヨドリ科）.jpg","bird/シロガシラ（ヒヨドリ科）.jpg","bird/ウグイス（ウグイス科）.jpg","bird/エナガ（エナガ科）.jpg","bird/オオムシクイ（ムシクイ科）.jpg","bird/メジロ（メジロ科）.jpg","bird/メグロ（メジロ科）.jpg","bird/マキノセンニュウ（センニュウ科）.jpg","bird/オオセッカ（センニュウ科）.jpg","bird/オオヨシキリ（ヨシキリ科）.jpg","bird/セッカ（セッカ科）.jpg","bird/キレンジャク（レンジャク科）.jpg","bird/ゴジュウカラ（ゴジュウカラ科）.jpg","bird/キバシリ（キバシリ科）.jpg","bird/ミソサザイ（ミソサザイ科）.jpg","bird/ムクドリ（ムクドリ科）.jpg","bird/カワガラス（カワガラス科）.jpg","bird/トラツグミ（ヒタキ科）.jpg","bird/カラアカハラ（ヒタキ科）.jpg","bird/アカコッコ（ヒタキ科）.jpg","bird/ツグミ（ヒタキ科）.jpg","bird/コマドリ（ヒタキ科）.jpg","bird/アカヒゲ（ヒタキ科）.jpg","bird/オガワコマドリ（ヒタキ科）.jpg","bird/コルリ（ヒタキ科）.jpg","bird/ルリビタキ（ヒタキ科）.jpg","bird/ジョウビタキ（ヒタキ科）.jpg","bird/イソヒヨドリ（ヒタキ科）.jpg","bird/キビタキ（ヒタキ科）.jpg","bird/オオルリ（ヒタキ科）.jpg","bird/イワヒバリ（イワヒバリ科）.jpg","bird/スズメ（スズメ科）.jpg","bird/キセキレイ（セキレイ科）.jpg","bird/ハクセキレイ（セキレイ科）.jpg","bird/タヒバリ（セキレイ科）.jpg","bird/アトリ（アトリ科）.jpg","bird/マヒワ（アトリ科）.jpg","bird/ベニヒワ（アトリ科）.jpg","bird/オオマシコ（アトリ科）.jpg","bird/イスカ（アトリ科）.jpg","bird/ウソ（アトリ科）.jpg","bird/イカル（アトリ科）.jpg","bird/ユキホオジロ（ツメナガホオジロ科）.jpg","bird/ホオジロ（ホオジロ科）.jpg","bird/ミヤマホオジロ（ホオジロ科）.jpg","bird/シマアオジ（ホオジロ科）.jpg","bird/シマノジコ（ホオジロ科）.jpg","bird/アオジ（ホオジロ科）.jpg","bird/クロジ（ホオジロ科）.jpg","bird/コジュリン（ホオジロ科）.jpg","bird/シャモ（キジ科）.jpg","bird/チャボ（キジ科）.jpg","bird/ヒナイドリ（キジ科）.jpg","bird/ウコッケイ（キジ科）.jpg","bird/アイガモ（カモ科）.jpg","bird/アヒル（カモ科）.jpg","bird/ガチョウ（カモ科）.jpg","bird/シナガチョウ（カモ科）.jpg","bird/セキセイインコ（インコ科）.jpg","bird/ジュウシマツ（カエデチョウ科）.jpg","bird/ブンチョウ（カエデチョウ科）.jpg","bird/カナリア（アトリ科）.jpg","bird/オカメインコ（オウム科）.jpg","bird/ルリコンゴウインコ（インコ科）.jpg","bird/コウテイペンギン（ペンギン科）.jpg","bird/オウサマペンギン（ペンギン科）.jpg","bird/アデリーペンギン（ペンギン科）.jpg","bird/ヒゲペンギン（ペンギン科）.jpg","bird/ジェンツーペンギン（ペンギン科）.jpg","bird/イワトビペンギン（ペンギン科）.jpg","bird/ケープペンギン（ペンギン科）.jpg","bird/フンボルトペンギン（ペンギン科）.jpg","bird/コガタペンギン（ペンギン科）.jpg","bird/マゼランペンギン（ペンギン科）.jpg","bird/ワタリアホウドリ（アホウドリ科）.jpg","bird/マユグロアホウドリ（アホウドリ科）.jpg","bird/オオフルマカモメ（ミズナギドリ科）.jpg","bird/アシナガウミツバメ（ウミツバメ科）.jpg","bird/サヤハシチドリ（サヤハシチドリ科）.jpg","bird/ヨーロッパオオライチョウ（キジ科）.jpg",
"bird/カオジロガン（カモ科）.jpg","bird/メガネケワタガモ（カモ科）.jpg","bird/キョクアジサシ（カモメ科）.jpg","bird/ダチョウ（ダチョウ科）.jpg","bird/ホロホロチョウ（ホロホロチョウ科）.jpg","bird/オオフラミンゴ（フラミンゴ科）.jpg","bird/シュモクドリ（シュモクドリ科）.jpg","bird/ハシビロコウ（ハシビロコウ科）.jpg","bird/アフリカオオノガン（ノガン科）.jpg","bird/エボシドリ（エボシドリ科）.jpg","bird/ラケットヨタカ（ヨタカ科）.jpg","bird/アフリカハサミアジサシ（カモメ科）.jpg","bird/ヘビクイワシ（ヘビクイワシ科）.jpg","bird/エジプトハゲワシ（タカ科）.jpg","bird/アカガオネズミドリ（ネズミドリ科）.jpg","bird/ベニハチクイ（ハチクイ科）.jpg","bird/ノドグロミツオシエ（ミツオシエ科）.jpg","bird/ツキノワテリムク（ムクドリ科）.jpg","bird/アカハシウシツツキ（ムクドリ科）.jpg","bird/シャカイハタオリドリ（ハタオリドリ科）.jpg","bird/コウヨウチョウ（ハタオリドリ科）.jpg","bird/テンニンチョウ（テンニンチョウ科）.jpg","bird/オオブッポウソウ（オオブッポウソウ科）.jpg","bird/マダガスカルチュウヒダカ（タカ科）.jpg","bird/アオメニセタイヨウチョウ（マミヤイロチョウ科）.jpg","bird/ヘルメットオオハシモズ（オオハシモズ科）.jpg","bird/ダルマワシ（タカ科）.jpg","bird/フサホロホロチョウ（ホロホロチョウ科）.jpg","bird/ホオジロカンムリヅル（ツル科）.jpg","bird/クラハシコウ（コウノトリ科）.jpg","bird/シチメンチョウ（キジ科）.jpg","bird/ナキハクチョウ（カモ科）.jpg","bird/クビナガカイツブリ（カイツブリ科）.jpg","bird/カッショクペリカン（ペリカン科）.jpg","bird/ハクトウワシ（タカ科）.jpg","bird/メンフクロウ（フクロウ科）.jpg","bird/ショウジョウコウカンチョウ（ショウジョウコウカンチョウ科）.jpg","bird/ニシマキバドリ（ムクドリモドキ科）.jpg","bird/レア（レア科）.jpg","bird/カンムリシギダチョウ（シギダチョウ科）.jpg","bird/オオホウカンチョウ（ホウカンチョウ科）.jpg","bird/カンムリサケビドリ（サケビドリ科）.jpg","bird/ベニイロフラミンゴ（フラミンゴ科）.jpg","bird/ツメバケイ（ツメバケイ科）.jpg","bird/ジャノメドリ（ジャノメドリ科）.jpg","bird/ツルモドキ（ツル科）.jpg","bird/アメリカヒレアシ（ヒレアシ科）.jpg","bird/リスカッコウ（カッコウ科）.jpg","bird/ヤリハシハチドリ（ハチドリ科）.jpg","bird/マメハチドリ（ハチドリ科）.jpg","bird/フキナガシハチドリ（ハチドリ科）.jpg","bird/コンドル（コンドル科）.jpg","bird/ケツァール（キヌバネドリ科）.jpg","bird/アカノガンモドキ（ノガンモドキ科）.jpg","bird/サンショクキムネオオハシ（オオハシ科）.jpg","bird/ギアナイワドリ（カザリドリ科）.jpg","bird/ヒゲドリ（カザリドリ科）.jpg","bird/オナガセアオマイコドリ（マイコドリ科）.jpg","bird/カグー（カグー科）.jpg","bird/ベニハワイミツスイ（ハワイミツスイ科）.jpg","bird/ガラパゴスフィンチ（フウキンチョウ科）.jpg","bird/ショウジョウトキ（トキ科）.jpg","bird/ヒクイドリ（ヒクイドリ科）.jpg","bird/エミュー（エミュー科）.jpg","bird/キーウィ（キーウィ科）.jpg","bird/ヤブツカツクリ（ツカツクリ科）.jpg","bird/カササギガン（カモ科）.jpg","bird/コクチョウ（カモ科）.jpg","bird/ニオイガモ（カモ科）.jpg","bird/オウギバト（ハト科）.jpg","bird/タカヘ（クイナ科）.jpg","bird/ズグロトサカゲリ（チドリ科）.jpg","bird/オオオナガショウビン（カワセミ科）.jpg","bird/フクロウオウム（フクロウオウム科）.jpg","bird/ヤシオウム（オウム科）.jpg","bird/ズグロモリモズ（カラス科）.jpg",
"bird/コトドリ（コトドリ科）.jpg","bird/ネコドリ（ニワシドリ科）.jpg","bird/ズアカミツスイ（ミツスイ科）.jpg","bird/メガネコウライウグイス（コウライウグイス科）.jpg","bird/カンザシフウチョウ（フウチョウ科）.jpg","bird/フキナガシフウチョウ（フウチョウ科）.jpg","bird/アオフウチョウ（フウチョウ科）.jpg","bird/カンムリセイラン（キジ科）.jpg","bird/ニジキジ（キジ科）.jpg","bird/インドクジャク（キジ科）.jpg","bird/モリバト（ハト科）.jpg","bird/インドトキコウ（コウノトリ科）.jpg","bird/クロトキ（トキ科）.jpg","bird/アジアヘビウ（ヘビウ科）.jpg","bird/オオヅル（ツル科）.jpg","bird/コシラヒゲカンムリアマツバメ（カンムリアマツバメ科）.jpg","bird/トキハシゲリ（トキハシゲリ科）.jpg","bird/ヒゲワシ（タカ科）.jpg","bird/サイチョウ（サイチョウ科）.jpg","bird/カベバシリ（カベバシリ科）.jpg","bird/アカオタイヨウチョウ（タイヨウチョウ科）.jpg","bird/コウライキジ（キジ科）.jpg","bird/コジュケイ（キジ科）.jpg","bird/ノバリケン（カモ科）.jpg","bird/ガビチョウ（チメドリ科）.jpg","bird/ホンセイインコ（インコ科）.jpg","bird/ベニスズメ（カエデチョウ科）.jpg","bird/ソウシチョウ（チメドリ科）.jpg","bird/ベニジュケイ（キジ科）.jpg","bird/ミノバト（ハト科）.jpg","bird/コキンチョウ（カエデチョウ科）.jpg"]
//魚類
let pic_fish= ["images/アオノメハタ.jpg","images/アオブダイ.jpg","images/アオヤガラ.jpg","images/アカエイ.jpg","images/アカオビベラ（幼魚）.jpg","images/アカハタ.jpg","images/アカハチハゼ.jpg","images/アカハラヤッコ.jpg","images/アカヒメジ.jpg","images/アカマツカサ.jpg","images/アケボノチョウチョウウオ.jpg","images/アジアコショウダイ（若魚）.jpg","images/アブラヤッコ.jpg","images/アマミスズメダイ（幼魚）.jpg","images/アミアイゴ.jpg","images/アミチョウチョウウオ.jpg","images/アミメチョウチョウウオ.jpg","images/アミメハギ.jpg","images/アミメフエダイ.jpg","images/イサキ.jpg","images/イシガキカエルウオ.jpg","images/イシガキスズメダイ.jpg","images/イシガキダイ.jpg","images/イシガキフグ.jpg","images/イシダイ.jpg","images/イスズミ.jpg","images/イズヒメエイ.jpg","images/イソカサゴ.jpg","images/イソゴンベ.jpg","images/イタチウオ.jpg","images/イチモンスズメダイ（幼魚）.jpg","images/イッセンタカサゴ.jpg","images/イッテンチョウチョウウオ.jpg","images/イッテンフエダイ.jpg","images/イトヒキアジ.jpg","images/イナセギンポ.jpg","images/イラ.jpg","images/イロブダイ.jpg","images/イロブダイ（幼魚）.jpg","images/イワサキスズメダイ.jpg","images/インドカエルウオ.jpg","images/インドヒメジ.jpg","images/ウケグチイットウダイ.jpg","images/ウツボ.jpg","images/ウマヅラハギ.jpg","images/ウミスズメ.jpg","images/ウミヅキチョウチョウウオ.jpg","images/ウメイロ.jpg","images/ウメイロモドキ.jpg","images/ウルマカサゴ.jpg","images/オウゴンニジギンポ.jpg","images/オオスジヒメジ.jpg","images/オオセ.jpg","images/オオテンジクザメ.jpg","images/オキザヨリ.jpg","images/オキナヒメジ.jpg","images/オグロトラギス.jpg","images/オジサン.jpg","images/オトメベラ.jpg","images/オドリハゼ.jpg","images/オニカマス.jpg","images/オニダルマオコゼ.jpg","images/オニベラ（♀）.jpg","images/オハグロベラ.jpg","images/オビテンスモドキ.jpg","images/オビテンスモドキ（幼魚）.jpg","images/オビブダイ.jpg","images/オヤビッチャ.jpg","images/カガミチョウチョウウオ.jpg","images/カクレクマノミ.jpg","images/カゴカキダイ.jpg","images/カサゴ.jpg","images/カスミアジ.jpg","images/カスミチョウチョウウオ.jpg","images/カスリイシモチ.jpg","images/カノコベラ（幼魚）.jpg","images/カマスベラ.jpg","images/カワハギ.jpg","images/カワリブダイ.jpg","images/カンムリベラ.jpg","images/カンムリベラ（幼魚）.jpg","images/カンモンハタ.jpg","images/キイロハギ.jpg","images/キタマクラ.jpg","images/ギチベラ（♀）.jpg","images/ギチベラ（♂）.jpg","images/キツネベラ（幼魚）.jpg","images/キヌバリ.jpg","images/キミオコゼ.jpg","images/キリンミノ.jpg","images/キンギョハナダイ（♀）.jpg","images/キンセンイシモチ.jpg","images/キンセンハゼ.jpg","images/キンチャクダイ.jpg","images/キンチャクダイ（幼魚）.jpg","images/クギベラ（♀）.jpg","images/クサフグ.jpg","images/クマドリ.jpg","images/クマノミ.jpg","images/クラカオスズメダイ.jpg","images/クラカケチョウチョウウオ.jpg","images/クラカケモンガラ.jpg","images/クレナイニセスズメ.jpg","images/クログチニザ.jpg","images/クロサギ.jpg","images/クロスズメダイ.jpg","images/クロスズメダイ（幼魚）.jpg","images/クロソラスズメダイ.jpg","images/クロダイ.jpg","images/クロハコフグ.jpg","images/クロフチススキベラ.jpg","images/クロホシイシモチ.jpg","images/クロメガネスズメダイ（幼魚）.jpg","images/クロモンツキ.jpg",
"images/クロユリハゼ.jpg","images/コガシラベラ（♀）.jpg","images/コガネキュウセン.jpg","images/コガネヤッコ.jpg","images/コクテンサザナミハギ.jpg","images/コクテンフグ.jpg","images/ゴマハギ.jpg","images/ゴマハギ（幼魚）.jpg","images/ゴマモンガラ.jpg","images/コロダイ.jpg","images/コロダイ（幼魚）.jpg","images/ゴンズイ.jpg","images/サザナミハギ.jpg","images/サザナミフグ.jpg","images/サザナミヤッコ.jpg","images/サザナミヤッコ（幼魚）.jpg","images/サラサゴンベ.jpg","images/サンゴアイゴ.jpg","images/シコクスズメダイ.jpg","images/シチセンスズメダイ.jpg","images/シチセンチョウチョウウオ.jpg","images/シテンヤッコ.jpg","images/シマアジ.jpg","images/シマウミスズメ.jpg","images/シマハギ.jpg","images/シモフリタナバタウオ.jpg","images/シラコダイ.jpg","images/スカシテンジクダイ.jpg","images/スジオテンジクダイ.jpg","images/スジクロハギ.jpg","images/スダレチョウチョウウオ.jpg","images/スミツキカミナリベラ.jpg","images/スミツキソメワケベラ.jpg","images/スミツキトノサマダイ.jpg","images/セグロスズメダイ.jpg","images/セグロチョウチョウウオ.jpg","images/セグロマツカサ.jpg","images/セジロクマノミ.jpg","images/セダカスズメダイ.jpg","images/ソウシハギ.jpg","images/ソメワケベラ.jpg","images/ソメワケヤッコ.jpg","images/ソラスズメダイ.jpg","images/タカノハダイ.jpg","images/タカベ.jpg","images/タスキモンガラ.jpg","images/タテジマキンチャクダイ.jpg","images/タテジマキンチャクダイ（幼魚）.jpg","images/ダンゴウオ.jpg","images/ダンダラスズメダイ.jpg","images/チョウチョウウオ.jpg","images/チョウチョウコショウダイ（幼魚）.jpg","images/チョウハン.jpg","images/ツキチョウチョウウオ.jpg","images/ツノダシ.jpg","images/ツノハタタテダイ.jpg","images/ツマジロモンガラ.jpg","images/ツユベラ（幼魚）.jpg","images/デバスズメダイ.jpg","images/テングカワハギ.jpg","images/テングハギ.jpg","images/テングハギモドキ.jpg","images/テンクロスジギンポ.jpg","images/テンジクスズメダイ.jpg","images/トウアカクマノミ.jpg","images/トカラベラ.jpg","images/トゲチョウチョウウオ.jpg","images/ドチザメ.jpg","images/トノサマダイ.jpg","images/トラウツボ.jpg","images/ナガサキスズメダイ.jpg","images/ナガニザ.jpg","images/ナミスズメダイ.jpg","images/ナミダクロハギ.jpg","images/ナメラヤッコ.jpg","images/ナンヨウハギ.jpg","images/ニザダイ.jpg","images/ニシキテグリ.jpg","images/ニシキヤッコ.jpg","images/ニジハギ.jpg","images/ニジハタ.jpg","images/ニセクロスジギンポ.jpg","images/ニセフウライチョウチョウウオ.jpg","images/ニセモチノウオ.jpg","images/ネズスズメダイ（幼魚）.jpg","images/ネッタイスズメダイ.jpg","images/ネッタイミノカサゴ.jpg","images/ネムリブカ.jpg","images/ノコギリハギ.jpg","images/ノコギリヨウジ.jpg","images/ノドグロベラ.jpg","images/ハオコゼ.jpg","images/ハクセンスズメダイ.jpg","images/ハクセンスズメダイ（幼魚）.jpg","images/ハコフグ.jpg","images/ハコベラ.jpg","images/ハタタテダイ.jpg","images/ハタタテハゼ.jpg","images/ハナグロチョウチョウウオ.jpg","images/ハナゴイ.jpg","images/ハナハゼ.jpg","images/ハナビラウツボ.jpg","images/ハナビラクマノミ.jpg","images/ハマクマノミ.jpg","images/ハマフエフキ.jpg","images/バラハタ.jpg","images/バラフエダイ.jpg","images/ハリセンボン.jpg","images/ヒフキアイゴ.jpg","images/ヒメアイゴ.jpg","images/ヒメゴンベ.jpg","images/ヒメフウライチョウチョウウオ.jpg","images/ヒレグロコショウダイ（幼魚）.jpg","images/ヒレグロベラ（幼魚）.jpg","images/ヒレナガスズメダイ（幼魚）.jpg",
"images/ヒレナガハギ.jpg","images/ヒレナガハギ（幼魚）.jpg","images/フウライチョウチョウウオ.jpg","images/フエダイ.jpg","images/フエヤッコダイ.jpg","images/オオフエヤッコダイ.jpg","images/フタイロカエルウオ.jpg","images/フタスジタマガシラ.jpg","images/フタスジタマガシラ（幼魚）.jpg","images/フタスジヒメジ.jpg","images/フタスジリュウキュウスズメダイ（幼魚）.jpg","images/ブチススキベラ.jpg","images/ブチススキベラ（幼魚）.jpg","images/ヘラヤガラ.jpg","images/ヘラルドコガネヤッコ.jpg","images/ホウライヒメジ.jpg","images/ホクトベラ.jpg","images/ホシゴンベ.jpg","images/ホシササノハベラ.jpg","images/ボラ.jpg","images/ホンソメワケベラ.jpg","images/マジリアイゴ.jpg","images/マダイ.jpg","images/マダラタルミ（幼魚）.jpg","images/マツカサウオ.jpg","images/ミカヅキツバメウオ.jpg","images/ミカドチョウチョウウオ.jpg","images/ミギマキ.jpg","images/ミスジリュウキュウスズメダイ.jpg","images/ミゾレチョウチョウウオ.jpg","images/ミツボシクロスズメダイ.jpg","images/ミツボシクロスズメダイ（幼魚）.jpg","images/ミナミアカエソ.jpg","images/ミナミゴンベ.jpg","images/ミナミハコフグ（幼魚）.jpg","images/ミナミハタタテダイ.jpg","images/ミノカサゴ.jpg","images/ハナミノカサゴ.jpg","images/ミヤコイシモチ.jpg","images/ミヤコキセンスズメダイ（幼魚）.jpg","images/ミヤコテングハギ.jpg","images/ムスジコショウダイ　.jpg","images/ムラサメモンガラ.jpg","images/メガネクロハギ.jpg","images/メガネゴンベ.jpg","images/メガネスズメダイ（幼魚）.jpg","images/メガネモチノウオ（幼魚）.jpg","images/メギス.jpg","images/メジナ.jpg","images/モヨウモンガラドオシ.jpg","images/モンガラカワハギ.jpg","images/モンツキアカヒメジ.jpg","images/モンツキハギ.jpg","images/ヤエヤマギンポ.jpg","images/ヤマブキベラ（♀）.jpg","images/ヤマブキベラ（♂）.jpg","images/ヤリカタギ.jpg","images/ヤンセンニシキベラ.jpg","images/ユウゼン.jpg","images/ヨコシマクロダイ.jpg","images/ヨコシマタマガシラ.jpg","images/ヨコシマタマガシラ（幼魚）.jpg","images/ヨスジフエダイ.jpg","images/リュウキュウハタンポ.jpg","images/リュウキュウヤライイシモチ.jpg","images/ルリスズメダイ.jpg","images/ルリホシスズメダイ.jpg","images/ルリメイシガキスズメダイ.jpg","images/ルリヤッコ.jpg","images/レモンスズメダイ.jpg","images/レモンチョウチョウウオ.jpg","images/レンテンヤッコ.jpg","images/ロクセンスズメダイ.jpg","images/ロクセンヤッコ.jpg","images/ワカウツボ.jpg","images/ニシキベラ.jpg","images/トガリエビス.jpg","images/ゴマチョウチョウウオ.jpg","images/シマキンチャクフグ.jpg"];
//哺乳類
let pic_animal=["animal/カモノハシ（カモノハシ科）.jpg","animal/ハリモグラ（ハリモグラ科）.jpg","animal/キタオポッサム（オポッサム科）.jpg","animal/エクアドルケノレステス（ケノレステス科）.jpg","animal/チロエオポッサム（ミクロビオテリウム科）.jpg","animal/フクロネコ（フクロネコ科）.jpg","animal/タスマニアデビル（フクロネコ科）.jpg","animal/フクロアリクイ（フクロアリクイ科）.jpg","animal/フクロモグラ（フクロモグラ科）.jpg","animal/ミズオポッサム（オポッサム科）.jpg","animal/ミミナガバンディクート（バンディクート科）.jpg","animal/コアラ（コアラ科）.jpg","animal/ウォンバット（ウォンバット科）.jpg","animal/ブチクスクス（クスクス科）.jpg","animal/フクロギツネ（クスクス科）.jpg","animal/フクロミツスイ（フクロミツスイ科）.jpg","animal/フクロモモンガ（フクロモモンガ科）.jpg","animal/ハイイロリングテイル（フクロモモンガ科）.jpg","animal/ハナナガネズミカンガルー（ネズミカンガルー科）.jpg","animal/アカカンガルー（カンガルー科）.jpg","animal/アカワラルー（カンガルー科）.jpg","animal/シマオイワワラビー（カンガルー科）.jpg","animal/オグロキノボリカンガルー（カンガルー科）.jpg","animal/アフリカゾウ（ゾウ科）.jpg","animal/アジアゾウ（ゾウ科）.jpg","animal/ジュゴン（ジュゴン科）.jpg","animal/アメリカマナティー（マナティー科）.jpg","animal/ミナミキノボリハイラックス（ハイラックス科）.jpg","animal/ツチブタ（ツチブタ科）.jpg","animal/アカハネジネズミ（ハネジネズミ科）.jpg","animal/ハリテンレック（テンレック科）.jpg","animal/シマテンレック（テンレック科）.jpg","animal/サバクキンモグラ（キンモグラ科）.jpg","animal/ミツオビアルマジロ（アルマジロ科）.jpg","animal/オオアルマジロ（アルマジロ科）.jpg","animal/オオアリクイ（アリクイ科）.jpg","animal/ヒメアリクイ（アリクイ科）.jpg","animal/タテガミナマケモノ（ミユビナマケモノ科）.jpg","animal/ワオキツネザル（キツネザル科）.jpg","animal/クロシロエリマキキツネザル（キツネザル科）.jpg","animal/インドリ（インドリ科）.jpg","animal/ベローシファカ（インドリ科）.jpg","animal/アイアイ（アイアイ科）.jpg","animal/スローロリス（ロリス科）.jpg","animal/オオガラゴ（ガラゴ科）.jpg","animal/ニシメガネザル（メガネザル科）.jpg","animal/ピグミーマーモセット（マーモセット科）.jpg","animal/エンペラータマリン（マーモセット科）.jpg","animal/ゴールデンライオンタマリン（マーモセット科）.jpg","animal/コモンリスザル（オマキザル科）.jpg","animal/クロヒゲサキ（サキ科）.jpg","animal/ヨザル（ヨザル科）.jpg","animal/ハゲウアカリ（サキ科）.jpg","animal/シロガオサキ（サキ科）.jpg","animal/ジョフロイクモザル（クモザル科）.jpg","animal/アカホエザル（クモザル科）.jpg","animal/ベルベット（オナガザル科）.jpg","animal/シロエリマンガベイ（オナガザル科）.jpg","animal/ブラッザザル（オナガザル科）.jpg","animal/アオザル（オナガザル科）.jpg","animal/ゲラダヒヒ（オナガザル科）.jpg","animal/ドリル（オナガザル科）.jpg","animal/マントヒヒ（オナガザル科）.jpg","animal/マンドリル（オナガザル科）.jpg","animal/ニホンザル（オナガザル科）.jpg","animal/シシオザル（オナガザル科）.jpg","animal/アビシニアコロブス（オナガザル科）.jpg","animal/キンシコウ（オナガザル科）.jpg","animal/テングザル（オナガザル科）.jpg","animal/シロテテナガザル（テナガザル科）.jpg","animal/ボルネオオランウータン（ヒト科）.jpg","animal/ヒガシゴリラ（ヒト科）.jpg","animal/ボノボ（ヒト科）.jpg","animal/チンパンジー（ヒト科）.jpg","animal/コモンツパイ（ツパイ科）.jpg","animal/マレーヒヨケザル（ヒヨケザル科）.jpg","animal/キタナキウサギ（ナキウサギ科）.jpg","animal/ニホンノウサギ（ウサギ科）.jpg",
"animal/ユキウサギ（ウサギ科）.jpg","animal/オグロジャックウサギ（ウサギ科）.jpg","animal/アナウサギ（ウサギ科）.jpg","animal/スマトラウサギ（ウサギ科）.jpg","animal/アマミノクロウサギ（ウサギ科）.jpg","animal/ニホンリス（リス科）.jpg","animal/キタリス（リス科）.jpg","animal/シマリス（リス科）.jpg","animal/ミケリス（リス科）.jpg","animal/ムササビ（リス科）.jpg","animal/ニホンモモンガ（リス科）.jpg","animal/インドオオリス（リス科）.jpg","animal/プレーリードッグ（リス科）.jpg","animal/アルプスマーモット（リス科）.jpg","animal/ヤマネ（ヤマネ科）.jpg","animal/ヤマビーバー（ヤマビーバー科）.jpg","animal/ケープアラゲジリス（リス科）.jpg","animal/アカネズミ（ネズミ科）.jpg","animal/タケネズミ（メクラネズミ科）.jpg","animal/クロハラハムスター（キヌゲネズミ科）.jpg","animal/マスクラット（キヌゲネズミ科）.jpg","animal/ノルウェーレミング（キヌゲネズミ科）.jpg","animal/キタミユビトビネズミ（トビネズミ科）.jpg","animal/トビウサギ（トビウサギ科）.jpg","animal/オルドカンガルーネズミ（ポケットマウス科）.jpg","animal/アメリカビーバー（ビーバー科）.jpg","animal/ケープタテガミヤマアラシ（ヤマアラシ科）.jpg","animal/ハダカデバネズミ（デバネズミ科）.jpg","animal/カピバラ（テンジクネズミ科）.jpg","animal/パカ（パカ科）.jpg","animal/マーラ（テンジクネズミ科）.jpg","animal/マダラアグーチ（アグーチ科）.jpg","animal/カナダヤマアラシ（アメリカヤマアラシ科）.jpg","animal/チンチラ（チンチラ科）.jpg","animal/ヌートリア（ヌートリア科）.jpg","animal/ビスカーチャ（チンチラ科）.jpg","animal/カワネズミ（トガリネズミ科）.jpg","animal/ヒミズ（モグラ科）.jpg","animal/アズマモグラ（モグラ科）.jpg","animal/ホシバナモグラ（モグラ科）.jpg","animal/ピレネーデスマン（モグラ科）.jpg","animal/ナミハリネズミ（ハリネズミ科）.jpg","animal/ハイチソレノドン（ソレノドン科）.jpg","animal/ニホンウサギコウモリ（ヒナコウモリ科）.jpg","animal/シロヘラコウモリ（ヘラコウモリ科）.jpg","animal/ウマヅラコウモリ（オオコウモリ科）.jpg","animal/オガサワラオオコウモリ（オオコウモリ科）.jpg","animal/オオセンザンコウ（センザンコウ科）.jpg","animal/ライオン（ネコ科）.jpg","animal/ジャガー（ネコ科）.jpg","animal/トラ（ネコ科）.jpg","animal/ヒョウ（ネコ科）.jpg","animal/ユキヒョウ（ネコ科）.jpg","animal/ウンピョウ（ネコ科）.jpg","animal/チーター（ネコ科）.jpg","animal/オオヤマネコ（ネコ科）.jpg","animal/オセロット（ネコ科）.jpg","animal/ピューマ（ネコ科）.jpg","animal/ジャガランディ（ネコ科）.jpg","animal/サーバル（ネコ科）.jpg","animal/カラカル（ネコ科）.jpg","animal/スナネコ（ネコ科）.jpg","animal/マヌルネコ（ネコ科）.jpg","animal/イリオモテヤマネコ（ネコ科）.jpg","animal/ブチハイエナ（ハイエナ科）.jpg","animal/アードウルフ（ハイエナ科）.jpg","animal/カッショクハイエナ（ハイエナ科）.jpg","animal/ヨーロッパジェネット（ジャコウネコ科）.jpg","animal/ハクビシン（ジャコウネコ科）.jpg","animal/フォッサ（マダガスカルマングース科）.jpg","animal/アフリカジャコウネコ（ジャコウネコ科）.jpg","animal/クマネコ（ジャコウネコ科）.jpg","animal/シママングース（マングース科）.jpg","animal/ミーアキャット（マングース科）.jpg","animal/オオカミ（イヌ科）.jpg","animal/コヨーテ（イヌ科）.jpg","animal/セグロジャッカル（イヌ科）.jpg","animal/リカオン（イヌ科）.jpg","animal/タテガミオオカミ（イヌ科）.jpg","animal/タヌキ（イヌ科）.jpg","animal/ヤブイヌ（イヌ科）.jpg","animal/ホッキョクギツネ（イヌ科）.jpg","animal/アカギツネ（イヌ科）.jpg","animal/フェネック（イヌ科）.jpg","animal/ハイイロギツネ（イヌ科）.jpg",
"animal/ヒグマ（クマ科）.jpg","animal/ツキノワグマ（クマ科）.jpg","animal/ホッキョクグマ（クマ科）.jpg","animal/ジャイアントパンダ（クマ科）.jpg","animal/メガネグマ（クマ科）.jpg","animal/マレーグマ（クマ科）.jpg","animal/ナマケグマ（クマ科）.jpg","animal/レッサーパンダ（レッサーパンダ科）.jpg","animal/キンカジュー（アライグマ科）.jpg","animal/アライグマ（アライグマ科）.jpg","animal/ニホンイタチ（イタチ科）.jpg","animal/オコジョ（イタチ科）.jpg","animal/ミンク（イタチ科）.jpg","animal/ニホンテン（イタチ科）.jpg","animal/クズリ（イタチ科）.jpg","animal/シマスカンク（スカンク科）.jpg","animal/ラッコ（イタチ科）.jpg","animal/アナグマ（イタチ科）.jpg","animal/ラーテル（イタチ科）.jpg","animal/ゴマフアザラシ（アザラシ科）.jpg","animal/タテゴトアザラシ（アザラシ科）.jpg","animal/ゼニガタアザラシ（アザラシ科）.jpg","animal/ワモンアザラシ（アザラシ科）.jpg","animal/バイカルアザラシ（アザラシ科）.jpg","animal/ズキンアザラシ（アザラシ科）.jpg","animal/キタゾウアザラシ（アザラシ科）.jpg","animal/クラカケアザラシ（アザラシ科）.jpg","animal/ヒョウアザラシ（アザラシ科）.jpg","animal/ウェッデルアザラシ（アザラシ科）.jpg","animal/カニクイアザラシ（アザラシ科）.jpg","animal/オットセイ（アシカ科）.jpg","animal/セイウチ（セイウチ科）.jpg","animal/トド（アシカ科）.jpg","animal/オタリア（アシカ科）.jpg","animal/カリフォルニアアシカ（アシカ科）.jpg","animal/サバンナシマウマ（ウマ科）.jpg","animal/モウコノウマ（ウマ科）.jpg","animal/アフリカノロバ（ウマ科）.jpg","animal/ミナミアメリカバク（バク科）.jpg","animal/マレーバク（バク科）.jpg","animal/シロサイ（サイ科）.jpg","animal/スマトラサイ（サイ科）.jpg","animal/フタコブラクダ（ラクダ科）.jpg","animal/ヒトコブラクダ（ラクダ科）.jpg","animal/ビクーニャ（ラクダ科）.jpg","animal/ラマ（ラクダ科）.jpg","animal/アルパカ（ラクダ科）.jpg","animal/イノシシ（イノシシ科）.jpg","animal/ヒゲイノシシ（イノシシ科）.jpg","animal/バビルーサ（イノシシ科）.jpg","animal/モリイノシシ（イノシシ科）.jpg","animal/クチジロペッカリー（ペッカリー科）.jpg","animal/ミズマメジカ（マメジカ科）.jpg","animal/ヤマジャコウジカ（ジャコウジカ科）.jpg","animal/キリン（キリン科）.jpg","animal/オカピ（キリン科）.jpg","animal/プロングホーン（プロングホーン科）.jpg","animal/ノロジカ（シカ科）.jpg","animal/キョン（シカ科）.jpg","animal/トナカイ（シカ科）.jpg","animal/ヘラジカ（シカ科）.jpg","animal/オジロジカ（シカ科）.jpg","animal/アカシカ（シカ科）.jpg","animal/シフゾウ（シカ科）.jpg","animal/バッファロー（ウシ科）.jpg","animal/ヤク（ウシ科）.jpg","animal/バンテン（ウシ科）.jpg","animal/ニアラ（ウシ科）.jpg","animal/ボンゴ（ウシ科）.jpg","animal/イランド（ウシ科）.jpg","animal/アフリカスイギュウ（ウシ科）.jpg","animal/ヨツヅノレイヨウ（ウシ科）.jpg","animal/オグロヌー（ウシ科）.jpg","animal/アラビアオリックス（ウシ科）.jpg","animal/オリックス（ウシ科）.jpg","animal/インパラ（ウシ科）.jpg","animal/セーブルアンテロープ（ウシ科）.jpg","animal/トムソンガゼル（ウシ科）.jpg","animal/ブラックバック（ウシ科）.jpg","animal/シャモア（ウシ科）.jpg","animal/シロイワヤギ（ウシ科）.jpg","animal/サイガ（ウシ科）.jpg","animal/スマトラカモシカ（ウシ科）.jpg","animal/ターキン（ウシ科）.jpg","animal/バーバリシープ（ウシ科）.jpg","animal/ジャコウウシ（ウシ科）.jpg","animal/ノヤギ（ウシ科）.jpg","animal/マーコール（ウシ科）.jpg","animal/アルガリ（ウシ科）.jpg","animal/ニホンジカ（シカ科）.jpg",
"animal/ニホンカモシカ（ウシ科）.jpg","animal/カバ（カバ科）.jpg","animal/シロナガスクジラ（ナガスクジラ科）.jpg","animal/ザトウクジラ（ナガスクジラ科）.jpg","animal/ミンククジラ（ナガスクジラ科）.jpg","animal/セミクジラ（セミクジラ科）.jpg","animal/コククジラ（コククジラ科）.jpg","animal/マッコウクジラ（マッコウクジラ科）.jpg","animal/ツチクジラ（アカボウクジラ科）.jpg","animal/アカボウクジラ（アカボウクジラ科）.jpg","animal/イッカク（イッカク科）.jpg","animal/シロイルカ（イッカク科）.jpg","animal/スナメリ（ネズミイルカ科）.jpg","animal/イシイルカ（ネズミイルカ科）.jpg","animal/コマッコウ（コマッコウ科）.jpg","animal/ハンドウイルカ（マイルカ科）.jpg","animal/マイルカ（マイルカ科）.jpg","animal/セミイルカ（マイルカ科）.jpg","animal/カマイルカ（マイルカ科）.jpg","animal/イロワケイルカ（マイルカ科）.jpg","animal/ハナゴンドウ（マイルカ科）.jpg","animal/シャチ（マイルカ科）.jpg","animal/オキゴンドウ（マイルカ科）.jpg","animal/アマゾンカワイルカ（アマゾンカワイルカ科）.jpg","animal/ダックスフンド（イヌ科）.jpg","animal/トイプードル（イヌ科）.jpg","animal/ヨークシャーテリア（イヌ科）.jpg","animal/チワワ（イヌ科）.jpg","animal/ポメラニアン（イヌ科）.jpg","animal/パピヨン（イヌ科）.jpg","animal/パグ（イヌ科）.jpg","animal/チン（イヌ科）.jpg","animal/ブルドッグ（イヌ科）.jpg","animal/ビーグル（イヌ科）.jpg","animal/チャウチャウ（イヌ科）.jpg","animal/シベリアンハスキー（イヌ科）.jpg","animal/ダルメシアン（イヌ科）.jpg","animal/ラブラドール・レトリーバー（イヌ科）.jpg","animal/ドーベルマン（イヌ科）.jpg","animal/アフガンハウンド（イヌ科）.jpg","animal/ボルゾイ（イヌ科）.jpg","animal/セント・バーナード（イヌ科）.jpg","animal/マンチカン（ネコ科）.jpg","animal/アメリカン・ショートヘア（ネコ科）.jpg","animal/アビシニアン（ネコ科）.jpg","animal/シャム（ネコ科）.jpg","animal/メインクーン（ネコ科）.jpg","animal/ペルシャ（ネコ科）.jpg","animal/ヒマラヤン（ネコ科）.jpg","animal/スフィンクス（ネコ科）.jpg","animal/ネザーランドドワーフ（ウサギ科）.jpg","animal/ジャンガリアンハムスター（キヌゲネズミ科）.jpg","animal/ラット（ネズミ科）.jpg","animal/モルモット.jpg","animal/ホルスタイン.jpg","animal/ゼブー.jpg","animal/ジャージー.jpg","animal/メリノ.jpg","animal/カシミアヤギ.jpg","animal/ヨークシャー.jpg","animal/ハンプシャー.jpg","animal/ミニブタ.jpg"];
let pic_title=["images/タイトル.jpeg","images/タイトル鳥.jpeg"]

//準備
let i=0;　//i+1問目
let mondai=5; //出題される問題数
let count=0;　//正解数
let mondai_g=10000;　//誤答した問題数
let re_pic=[];　//誤答した問題
let goto=[]; //誤答した問題の番号を保持しておく配列
let re_count=0;　//復習フラグ
let hard_count=0; //ハードモードのフラグ
let s=0; //初めてページを読み込むかどうか

let list_ch=["one","two","three","four"]; //選択肢のidリスト
let list_top_n=["one","two","three","four","ques","init","result","result2","re","next","to_res","hard","seikai"]; //トップページに必要ないもの
let list_top_y=["normal_m","hard_m","rule","change"]; //トップページにのみ必要なもの
let list_q=["ques","pic"]; //出題中にずっと必要なもの
let list_ans=["next","seikai"]; //問題の答えを表示するときに必要なもの
let list_result=["result","result2","init","ques"] //リザルト画面に必ず必要なもの

//画像をシャッフルする
function ran(inputArray){
    inputArray.sort(()=> Math.random() - 0.5);
}

//選択肢やボタンを非表示にする
function del(id){
    //引数が配列なら
    if(Array.isArray(id)){
        for(let n=0; n<id.length; n++){
            let ele = document.getElementById(id[n]);
            ele.style.display = 'none';
        }
    }
    //引数が配列以外なら
    else{
        let ele = document.getElementById(id);
        ele.style.display = 'none';
    }
}

//選択肢やボタンを表示する
function appear(id){
    //引数が配列なら
    if(Array.isArray(id)){
        for(let n=0; n<id.length; n++){
            let ele = document.getElementById(id[n]);
            //普通に表示
            if(id[n]=="normal_m" || id[n]=="pic" || id[n]=="init" || id[n]=="re" ||id[n]=="next" || id[n]=="to_res" || id[n]=="hard_m"){
                ele.style.display = '';
            }
            //ブロックで表示
            else{
                ele.style.display = 'block';
            }
        }
    }
    //引数が配列以外なら
    else{
        let ele = document.getElementById(id);
        if(id=="normal_m" || id=="pic" || id=="init" || id=="re" ||id=="next" || id=="to_res" || id=="hard_m"){
            ele.style.display = '';
        }
        else{
            ele.style.display = 'block';
        }
    }
}

//トップ画面に戻る
function init(){
    //初期化
    i=0;
    count=0;
    mondai_g=10000;
    goto=[];
    re_count=0;
    re_pic=[];
    hard_count=0;

    //画面の整理
    del(list_top_n);
    if(s!=0){
        re_color();
    }
    s=1;
    appear(list_top_y);
    appear("pic");

    //タイトル画像を表示
    if(!Boolean(change_count)){
        document.getElementById("pic").src = pic_title[0];
    }
    else{
        document.getElementById("pic").src = pic_title[1];
    }

    //ロードの完了と同時にローディング画面を非表示にする
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}

window.onload = function() {
    init();
  }

//問題の画像を表示する
function start(){
    //画面の整理
    del(list_top_y);
    appear(list_ch);
    appear(list_q);

    ran(pic);
    //画像と問題を表示
    document.getElementById("pic").src = pic[i];
    document.getElementById("ques").innerHTML = "これは何？　("+(i+1)+"/"+mondai+")";
    //選択肢を表示
    choice(pic);
}

//選択肢を表示する
function choice(pi){
    //選択肢の生成
    let pic3=cho(pi);

    for(let n=0; n<list_ch.length; n++){
        document.getElementById(list_ch[n]).innerHTML = get_name(pic3[n]);
    }
}

//選択肢を生成する
function cho(pi){
    let pic2=Array.from(pic);

    //復習中でなければ
    if(!Boolean(re_count)){
        pic2.splice(i,1);
    }
    //復習中なら
    else{
        pic2.splice(goto[i],1);
    }
    ran(pic2);

    let pic3=[pi[i],pic2[0],pic2[1],pic2[2]];
    ran(pic3);
    return pic3
}

//画像ファイル名から魚の名前を取得する
function get_name(list_name){
    let str = list_name.split("/");
    let str2 = str[1].split(".");
    return str2[0]
}

//選択肢が押されたときの挙動
function ans(clicked_id){
    //復習中でなければ
    if(!Boolean(re_count)){
        z(pic,clicked_id);
    }
    //復習中なら
    else{
        z(re_pic,clicked_id);
    }

}

//指定ミリ秒の間、処理を止める
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//正解か不正解かによって挙動を変える
async function z(list_mondai, clicked_id){
    //選ばれた選択肢の情報を取得
    let answer=document.getElementById(clicked_id).innerHTML;
    let answer2=document.getElementById(clicked_id);

    //正解なら
    if(answer==get_name(list_mondai[i])){
        answer2.style.backgroundColor = "green";
        await sleep(300);
        count+=1;
        all("green");
    }
    //誤答なら
    else{
        answer2.style.backgroundColor = "red";
        look(get_name(list_mondai[i])).style.backgroundColor = "green";
        await sleep(300);
        goto.push(i);
        all("red");
    }
}

//正解の選択肢を探す
function look(an){
    for(let n=0; n<list_ch.length; n++){
        if(document.getElementById(list_ch[n]).innerHTML==an){
            return document.getElementById(list_ch[n]);
        }
    }
}

//選択肢の色を元に戻す
function re_color(){
    for(let n=0; n<list_ch.length; n++){
        document.getElementById(list_ch[n]).style.backgroundColor = "#668ad8";
    }
}

//全ての問題を出題し終えたかチェックして次の画面に移動させる
function all(color){
    i+=1;
    appear(list_ans);
    
    //これが最後の問題でなければ
    if(i<Math.min(mondai,mondai_g)){
        //正解なら
        if(color=="green"){
            document.getElementById("next").innerHTML="正解！　次の問題へ";
        }
        //誤答なら
        else{
            document.getElementById("next").innerHTML="不正解！　次の問題へ"
        }
        teach_an();
    }
    //これが最後の問題なら
    else{
        del("next");
        //正解なら
        if(color=="green"){
            document.getElementById("to_res").innerHTML="正解！　結果を見る";
        }
        //誤答なら
        else{
            document.getElementById("to_res").innerHTML="不正解！　結果を見る";
        }
        teach_an();

        appear("to_res");
    }
}

//正解を表示する
function teach_an(){
    if(!Boolean(re_count)){
        document.getElementById("seikai").innerHTML="正解は「"+get_name(pic[i-1])+"」です。";
    }
    else{
        document.getElementById("seikai").innerHTML="正解は「"+get_name(re_pic[i-1])+"」です。";
    }
}

//次の問題へ進む
function ne(){
    //画面の整理
    del(list_ans);
    re_color();

    //復習中でなければ
    if(!Boolean(re_count)){
        next(pic,mondai);
    }
    //復習中なら
    else{
        next(re_pic,mondai_g);
    }
}

//次の問題をセットする
function next(pi,mon){
    //問題を表示
    document.getElementById("pic").src = pi[i];
    document.getElementById("ques").innerHTML = "これは何？　("+(i+1)+"/"+mon+")";

    //ノーマルモードなら
    if(!Boolean(hard_count)){
        choice(pi);
    }
    //ハードモードなら
    else{
        appear("hard");
    }
}

//リザルト画面を表示する
async function result(){
    //画面整理
    del(list_top_n);
    del("pic");
    appear(list_result);

    document.getElementById("ques").innerHTML = "結果発表";
    document.getElementById("result").innerHTML = Math.min(mondai,mondai_g)+"問中"+count+"問正解！";

    //全問正解なら
    if(mondai==count || mondai_g==count){
        document.getElementById("result2").innerHTML = "全問正解！！！";
    }
    //正解率が6割以上なら
    else if((count/Math.min(mondai,mondai_g))>=0.6){
        document.getElementById("result2").innerHTML = "すごい！！";
    }
    //全問不正解なら
    else　if(count==0){
        document.getElementById("result2").innerHTML = "精進してください。";
    }
    //それ以外なら
    else{
        document.getElementById("result2").innerHTML = "一般人レベル！";
    }

    document.getElementById("init").innerHTML = "トップ画面に戻る";

    //復習ボタンを表示
    if(re_count==0 && count!=mondai){
        appear("re");
    }
}

//復習する
function re(){
    re_count=1;
    //初期化
    count=0;
    i=0;

    //画面の整理
    re_color();
    del(list_result);
    del("re");
    appear(list_q);
    //ノーマルモードなら
    if(!Boolean(hard_count)){
        appear(list_ch);
    }

    //誤答した問題を取得
    for(let n=0; n<goto.length; n++){
        re_pic.push(pic[goto[n]])
    }
    mondai_g=re_pic.length;
    next(re_pic,mondai_g);
}

//問題数を設定する
function rule(){
    if(window.confirm("出題される問題数を変更しますか？")){
        mondai=prompt("何問にしますか？　（問題は全部で"+pic.length+"問です。)");
    }
    mondai=parseInt(mondai,10);

    //想定されない値が渡されたら初期値に戻す
    if(isNaN(mondai) || mondai<1){
        mondai=5;
    }
}

//ハードモード
function hard(){
    hard_count=1;
    //画面の整理
    del(list_top_y);
    del(list_result);
    appear(list_q);
    appear("hard");

    ran(pic);
    //問題の表示
    document.getElementById("pic").src = pic[i];
    document.getElementById("ques").innerHTML = "これは何？　("+(i+1)+"/"+mondai+")";

}

//入力された回答を受け取る
function ans2(){
    del("hard");

    //復習中でなければ
    if(!Boolean(re_count)){
        z2(pic);
    }
    //復習中なら
    else{
        z2(re_pic);
    }
}

//ひらがなをカタカナに変換する
const hiraToKana = text =>{
    return text.replace( /[\u3042-\u3093]/g, 
                 m => String.fromCharCode(m.charCodeAt(0) + 96)
             );
};

async function z2(list_mondai){
    //回答を取得
    let an=hiraToKana(a.b.value);

    //正解なら
    if(get_name(list_mondai[i]).indexOf(an)!=-1 && an!="" ){
        await sleep(300);
        count+=1;
        all("green");

    }
    //誤答なら
    else{
        await sleep(300);
        goto.push(i);
        all("red");
    }

    //入力フォームを空白に戻す
    a.b.value="";
}

let change_count=0; //問題変更フラグ

//問題を入れ替える
function change(){
    //問題が魚類なら
    if(!Boolean(change_count)){
        pic=Array.from(pic_bird);
        alert("問題を鳥類にしました！");
        document.getElementById("pic").src = pic_title[1];
        change_count=1;
    }
    //問題が鳥類なら
    else if(change_count==1){
        pic=Array.from(pic_animal);
        alert("問題を哺乳類にしました！");
        document.getElementById("pic").src = pic_title[1];
        change_count=2;
    }
    //問題が哺乳類なら
    else{
        pic=Array.from(pic_fish);
        alert("問題を魚類にしました！");
        document.getElementById("pic").src = pic_title[0];
        change_count=0;
    }

}
