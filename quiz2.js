//問題の画像を格納する配列
let pic= ["debasuzumedai","nisikibera","togariebisu","gomatixyoutixyouuo","simakinntixyakuhugu","tenngukawahagi","wakautubo","rokusennyaxtuko","rokusennsuzumedai","renntennyaxtuko","remonntixyoutixyouuo","remonnsuzumedai","ruriyaxtuko","rurimeisigakisuzumedai","rurihosisuzumedai","rurisuzumedai","rixyuukixyuuyaraiisimoti","rixyuukixyuuhatannpo","yosuzihuedai","yokosimatamagasira（幼魚）","yokosimatamagasira","yokosimakurodai","yuuzenn","yannsennnisikibera","yarikatagi","yamabukibera（♂）","yamabukibera（♀）","yaeyamaginnpo","monntukihagi","monntukiakahimezi","monngarakawahagi","moyoumonngaradoosi","mezina","megisu","meganemotinouo（幼魚）","meganesuzumedai（幼魚）","meganegonnbe","meganekurohagi","murasamemonngara","musuzikosixyoudai","miyakotennguhagi","miyakokisennsuzumedai（幼魚）","hanaminokasago","miyakoisimoti","minokasago","minamihatatatedai","minamihakohugu（幼魚）","minamigonnbe","minamiakaeso","mitubosikurosuzumedai（幼魚）","mitubosikurosuzumedai","mizoretixyoutixyouuo","misuzirixyuukixyuusuzumedai","migimaki","mikadotixyoutixyouuo","mikadukitubameuo","matukasauo","madaratarumi（幼魚）","madai","maziriaigo","honnsomewakebera","bora","hosisasanohabera","hosigonnbe","hokutobera","houraihimezi","herayagara","butisusukibera（幼魚）","butisusukibera","hutasuzirixyuukixyuusuzumedai（幼魚）","hutasuzihimezi","hutasuzitamagasira（幼魚）","hutasuzitamagasira","hutairokaeruuo","oohueyaxtukodai","hueyaxtukodai","huedai","huuraitixyoutixyouuo","hirenagahagi（幼魚）","hirenagahagi","hirenagasuzumedai（幼魚）","hiregurobera（幼魚）","hiregurokosixyoudai（幼魚）","himehuuraitixyoutixyouuo","himegonnbe","himeaigo","hihukiaigo","harisennbonn","barahuedai","barahata","hamahuehuki","hamakumanomi","hanabirakumanomi","hanabirautubo","hanahaze","hanagoi","hanagurotixyoutixyouuo","hatatatehaze","hatatatedai","hakobera","hakohugu","hakusennsuzumedai","hakusennsuzumedai（幼魚）","haokoze","nodogurobera","nokogiriyouzi","nokogirihagi","nemuribuka","nextutaiminokasago","nextutaisuzumedai","nezusuzumedai（幼魚）","nisemotinouo","nisehuuraitixyoutixyouuo","nisekurosuziginnpo","nizihata","nizihagi","nisikiyaxtuko","nisikiteguri","nizadai","nannyouhagi","namerayaxtuko","namidakurohagi","namisuzumedai","naganiza","nagasakisuzumedai","torautubo","tonosamadai","dotizame","togetixyoutixyouuo","tokarabera","touakakumanomi","tennzikusuzumedai","tennkurosuziginnpo","tennguhagimodoki","tennguhagi","tuyubera（幼魚）","tumaziromonngara",
"tunohatatatedai","tunodasi","tukitixyoutixyouuo","tixyouhann","tixyoutixyoukosixyoudai（幼魚）","tixyoutixyouuo","danndarasuzumedai","danngouo","tatezimakinntixyakudai（幼魚）","tatezimakinntixyakudai","tasukimonngara","takabe","takanohadai","sorasuzumedai","somewakeyaxtuko","somewakebera","sousihagi","sedakasuzumedai","sezirokumanomi",
"seguromatukasa","segurotixyoutixyouuo","segurosuzumedai","sumitukitonosamadai","sumitukisomewakebera","sumitukikaminaribera","sudaretixyoutixyouuo","suzikurohagi","suziotennzikudai","sukasitennzikudai","sirakodai","simohuritanabatauo","simahagi","simaumisuzume","simaazi","sitennyaxtuko","sitisenntixyoutixyouuo","sitisennsuzumedai","sikokusuzumedai","sanngoaigo","sarasagonnbe","sazanamiyaxtuko（幼魚）","sazanamiyaxtuko","sazanamihugu","sazanamihagi","gonnzui","korodai（幼魚）","korodai","gomamonngara","gomahagi","gomahagi（幼魚）","kokutennhugu","kokutennsazanamihagi","koganeyaxtuko","koganekixyuusenn","kogasirabera（♀）","kuroyurihaze","kuromonntuki","kuromeganesuzumedai（幼魚）","kurohosiisimoti","kurohutisusukibera","kurohakohugu","kurodai","kurosorasuzumedai","kurosuzumedai（幼魚）","kurosuzumedai","kurosagi","kurogutiniza","kurenainisesuzume","kurakakemonngara","kurakaketixyoutixyouuo","kurakaosuzumedai","kumanomi","kumadori","kusahugu","kugibera（♀）","kinntixyakudai","kinntixyakudai（幼魚）","kinnsennhaze","kinnsennisimoti","kinngixyohanadai","kirinnmino","kimiokoze","kinubari","kitunebera（幼魚）","gitibera（♂）","gitibera（♀）","kitamakura","kiirohagi","kannmonnhata","kannmuribera（幼魚）","kannmuribera","kawaribudai","kawahagi","kamasubera","kanokobera（幼魚）","kasuriisimoti","kasumitixyoutixyouuo","kasumiazi","kasago","kagokakidai","kakurekumanomi","kagamitixyoutixyouuo","oyabixtutixya","obibudai","obitennsumodoki（幼魚）","obitennsumodoki","ohagurobera","onibera（♀）","onidarumaokoze","onikamasu","odorihaze","otomebera","ozisann","ogurotoragisu","okinahimezi","ootennzikuzame","oose","oosuzihimezi","ougonnniziginnpo","urumakasago","umeiromodoki","umeiro","umidukitixyoutixyouuo","umisuzume","umadurahagi","utubo","ukegutiixtutoudai","inndohimezi","inndokaeruuo","iwasakisuzumedai","irobudai（幼魚）","irobudai","ira","inaseginnpo","itohikiazi","ixtutennhuedai","ixtutenntixyoutixyouuo","ixtusenntakasago","itimonnsuzumedai（幼魚）","itatiuo","isogonnbe","isokasago","izuhimeei","isuzumi","isidai","isigakihugu","isigakidai","isigakisuzumedai","isigakikaeruuo","isaki","amimehuedai","amimehagi","amimetixyoutixyouuo","amitixyoutixyouuo","amiaigo","amamisuzumedai（幼魚）","aburayaxtuko","aziakosixyoudai（若魚）","akebonotixyoutixyouuo","akamatukasa","akahimezi","akaharayaxtuko","akahatihaze","akahata","akaobiberayg","akaei","aoyagara","aobudai","aonomehata","okizayori"];

//鳥類
let pic_bird=["abi（abi科）","aderiーpennginn（pennginn科）","ahiru（kamo科）","ahoudori（ahoudori科）","ahurikahasamiazisasi（kamome科）","ahurikaoonogann（nogann科）","aigamo（kamo科）","akagaonezumidori（nezumidori科）","akagasirasagi（sagi科）","akagera（kitutuki科）","akaharadaka（taka科）","akahasiusitutuki（mukudori科）","akahige（hitaki科）","akakoxtuko（hitaki科）","akanogannmodoki（nogannmodoki科）","akaonextutaitixyou（nextutaitixyou科）","akaotaiyoutixyou（taiyoutixyou科）","akasixyoubinn（kawasemi科）","akatukusigamo（kamo科）","amasagi（sagi科）","amatubame（amatubame科）","amerikahidori（kamo科）","amerikahireasi（hireasi科）","aoasisigi（sigi科）","aobato（hato科）","aobazuku（hukurou科）","aogera（kitutuki科）","aohuutixyou（huutixyou科）","aomenisetaiyoutixyou（mamiyairotixyou科）","aosagi（sagi科）","aoturakatuodori（katuodori科）","aozi（hooziro科）","arisui（kitutuki科）","asinagaumitubame（umitubame科）","atori（atori科）","aziahebiu（hebiu科）","bann（kuina科）","beniazisasi（kamome科）","benihatikui（hatikui科）","benihawaimitusui（hawaimitusui科）","benihiwa（atori科）","beniirohuraminngo（huraminngo科）","benisuzume（kaedetixyou科）","benizixyukei（kizi科）","biroーdokinnkuro（kamo科）","bunntixyou（kaedetixyou科）","buxtupousou（buxtupousou科）","daisagi（sagi科）","darumawasi（taka科）","datixyou（datixyou科）","ebosidori（ebosidori科）","emixyuー（emixyuー科）","enaga（enaga科）","eriguroazisasi（kamome科）","erimakisigi（sigi科）","etopirika（umisuzume科）","eziputohagewasi（taka科）","ezoraitixyou（kizi科）","gabitixyou（timedori科）","garaパgosuhuxinnti（huukinntixyou科）","gatixyou（kamo科）","gianaiwadori（kazaridori科）","goisagi（sagi科）","gozixyuukara（gozixyuukara科）","haiirogann（kamo科）","haiiroumitubame（umitubame科）","hakugann（kamo科）","hakusekirei（sekirei科）","hakutouwasi（taka科）","hasibirogamo（kamo科）","hasibutogara（sizixyuukara科）","hasibutogarasu（karasu科）","hasigirokou（hasigirokou科）","hasiziroabi（abi科）","hatikuma（taka科）","hayabusa（hayabusa科）","hegikuiwasi（hegikuiwasi科）","herasagi（sagi科）","herasigi（sigi科）","herumextutooohasimozu（oohasimozu科）","hibari（hibari科）","higedori（kazaridori科）","higepennginn（pennginn科）","higewasi（taka科）","hikuidori（hikuidori科）","hikuina（kuina科）","himeu（u科）","hinaidori（kizi科）","hisikui（kamo科）","hiyodori（hiyodori科）",
"honnseiinnko（innko科）","hooziro（hooziro科）","hoozirogamo（kamo科）","hoozirokannmuriduru（turu科）","horohorotixyou（horohorotixyou科）","hosigarasu（karasu科）","hosihaziro（kamo科）","hototogisu（kaxtukou科）","hukinagasihatidori（hatidori科）","hukinagasihuutixyou（huutixyou科）","hukurououmu（hukurououmu科）","hunnborutopennginn（pennginn科）","hurumakamome（mizunagidori科）","husahorohorotixyou（horohorotixyou科）","ikaru（atori科）","ikarutidori（tidori科）","inndokuzixyaku（kizi科）","inndotokikou（kounotori科）","inuwasi（taka科）","isohiyodori（hitaki科）","isuka（atori科）","iwahibari（iwahibari科）","iwatogipennginn（pennginn科）","kabebasiri（kabebasiri科）","kaguー（kaguー科）","kaituburi（kaituburi科）","kakesu（karasu科）","kamome（kamome科）","kanaria（atori科）","kannmurikaituburi（kaituburi科）","kannmurisakegidori（sakegidori科）","kannmuriseirann（kizi科）","kannmurisigidatixyou（sigidatixyou科）","kannmuriwasi（taka科）","kannzasihuutixyou（huutixyou科）","kaozirogann（kamo科）","karaakahara（hitaki科）","karasirasagi（sagi科）","karasubato（hato科）","karigane（kamo科）","karugamo（kamo科）","kasasagi（karasu科）","kasasagigann（kamo科）","kawagarasu（kawagarasu科）","kawasemi（kawasemi科）","kawau（u科）","kaxtukou（kaxtukou科）","kaxtusixyokuperikann（perikann科）","keーpupennginn（pennginn科）","keri（tidori科）","ketuxaーru（kinubanedori科）","kiーuxi（kiーuxi科）","kibasiri（kibasiri科）","kigitaki（hitaki科）","kikuitadaki（kikuitadaki科）","kinnbato（hato科）","kinnkurohaziro（kamo科）","kinnmehukurou（hukurou科）","kirennzixyaku（rennzixyaku科）","kisekirei（sekirei科）","kixyokuazisasi（kamome科）","kixyouzixyosigi（sigi科）","kizi（kizi科）","kizibato（hato科）","kogamo（kamo科）","kogatapennginn（pennginn科）","kogera（kitutuki科）","kohakutixyou（kamo科）","kokinntixyou（kaedetixyou科）","kokugann（kamo科）","kokumarugarasu（karasu科）","kokutixyou（kamo科）","komadori（hitaki科）","konndoru（konndoru科）","konohazuku（hukurou科）","koorigamo（kamo科）","koruri（hitaki科）","kosagi（sagi科）","kosiakatubame（tubame科）","kosirahigekannmuriamatubame（kannmuriamatubame科）","kosiziroumitubame（umitubame科）","kotodori（kotodori科）","kounotori（kounotori科）","kouraikizi（kizi科）","kouraiuguisu（kouraiuguisu科）","kouteipennginn（pennginn科）","kouyoutixyou（hataoridori科）","kozixyukei（kizi科）",
"kozixyurinn（hooziro科）","kuginagakaituburi（kaituburi科）","kuina（kuina科）","kumagera（kitutuki科）","kumataka（taka科）","kurahasikou（kounotori科）","kuroasiahoudori（ahoudori科）","kuroazisasi（kamome科）","kurogamo（kamo科）","kurosagi（sagi科）","kurotoki（toki科）","kurozi（hooziro科）","madagasukarutixyuuhidaka（taka科）","magamo（kamo科）","magann（kamo科）","mahiwa（atori科）","makinosennnixyuu（sennnixyuu科）","mamehatidori（hatidori科）","manaduru（turu科）","mayuguroahoudori（ahoudori科）","mazerannpennginn（pennginn科）","meganekewatagamo（kamo科）","meganekouraiuguisu（kouraiuguisu科）","meguro（meziro科）","mennhukurou（hukurou科）","meziro（meziro科）","mihuuzura（mihuuzura科）","minobato（hato科）","misago（misago科）","misosazai（misosazai科）","miyakodori（miyakodori科）","miyamagarasu（karasu科）","miyamahooziro（hooziro科）","momoiroperikann（perikann科）","moribato（hato科）","mozu（mozu科）","mukudori（mukudori科）","munaguro（tidori科）","murasakisagi（sagi科）","nabeduru（turu科）","nabekou（kounotori科）","nakihakutixyou（kamo科）","nannyousixyoubinn（kawasemi科）","nekodori（niwasidori科）","nioigamo（kamo科）","nisimakibadori（mukudorimodoki科）","nizikizi（kizi科）","nobarikenn（kamo科）","nodoguromituosie（mituosie科）","nogutigera（kitutuki科）","nosuri（taka科）","ogawakomadori（hitaki科）","ogurosigi（sigi科）","okameinnko（oumu科）","okayosigamo（kamo科）","onaga（karasu科）","onagakamo（kamo科）","onagaseaomaikodori（maikodori科）","ooazisasi（kamome科）","oobann（kuina科）","oobuxtupousou（oobuxtupousou科）","ooduru（turu科）","oogunnkanndori（gunnkanndori科）","oohakutixyou（kamo科）","oohoukanntixyou（houkanntixyou科）","oohuraminngo（huraminngo科）","oohurumakamome（mizunagidori科）","ookaramozu（mozu科）","ookonohazuku（hukurou科）","oomasiko（atori科）","oomizunagidori（mizunagidori科）","oomusikui（musikui科）","ooonagasixyouginn（kawaセmi科）","ooruri（hitaki科）","oosextuka（sennnixyuu科）","ootaka（taka科）","oowasi（taka科）","ooyosikiri（yosikiri科）","osidori（kamo科）","ougibato（hato科）","ousamapennginn（pennginn科）","ozirowasi（taka科）","raitixyou(kizi科）","rakextutoyotaka（yotaka科）","rea（rea科）","rennkaku（rennkaku科）","risukaxtukou（kaxtukou科）","rixyuukixyuutubame（tubame科）","rurigitaki（hitaki科）","rurikakesu（karasu科）","rurikonngouinnko（innko科）","saitixyou（saitixyou科）",
"sakaturagann（kamo科）","sakei（sakei科）","sannkanogoi（sagi科）","sannkoutixyou（kasasagihitaki科）","sannsixyokukimuneoohasi（oohasi科）","sannsixyoukui（sannsixyoukui科）","sayahasitidori（sayahasitidori科）","segurokamome（kamome科）","seitakasigi（seitakasigi科）","sekiseiinnko（innko科）","sextuka（sextuka科）","simaaozi（hooziro科）","simaazi（kamo科）","simahukurou（hukurou科）","simanoziko（hooziro科）","sinagatixyou（kamo科）","sinorigamo（kamo科）","sirahigeumisuzume（umisuzume科）","sirakobato（hato科）","siraonextutaitixyou（nextutaitixyou科）","siroerioohamu（abi科）","sirogasira（hiyodori科）","sirohayabusa（hayabusa科）","sirohukurou（hukurou科）","sitimenntixyou（kizi科）","sixyakaihataoridori（hataoridori科）","sixyamo（kizi科）","sixyoudoutubame（tubame科）","sixyouzixyoukoukanntixyou（sixyouzixyoukoukanntixyou科）","sixyouzixyoutoki（toki科）","sixyumokudori（sixyumokudori科）","sizixyuukara（sizixyuukara科）","sizixyuukaragann（kamo科）","sodeguroduru（turu科）","sorihasiseitakasigi（seitakasigi科）","sousitixyou（timedori科）","suzugamo（kamo科）","suzume（suzume科）","tageri（tidori科）","tahibari（sekirei科）","takahe（kuina科）","tamasigi（tamasigi科）","tanntixyou（turu科）","tennninntixyou（tennninntixyou科）","tigomozu（mozu科）","tisimaugarasu（u科）","tixyabo（kizi科）","tixyougennbou（hayabusa科）","tixyuuhi（taka科）","togi（taka科）","toki（toki科）","tokihasigeri（tokihasigeri科）","tomoegamo（kamo科）","torahuzuku（hukurou科）","toratugumi（hitaki科）","touzokukamome","tubame（tubame科）","tubametidori（tubametidori科）","tugumi（hitaki科）","tukinowaterimuku（mukudori科）","tukusigamo（kamo科）","tumebakei（tumebakei科）","tunomedori（umisuzume科）","turisugara（turisugara科）","turumodoki（turu科）","uguisu（uguisu科）","ukoxtukei（kizi科）","umibato（umisuzume科）","umigarasu（umisuzume科）","umineko（kamome科）","umioumu（umisuzume科）","umisuzume 2","umiu（u科）","uso（atori科）","utou（umisuzume科）","uzura（kizi科）","wasimimizuku（hukurou科）","watariahoudori（ahoudori科）","watarigarasu（karasu科）","yabutukatukuri（tukatukuri科）","yairotixyou（yairotixyou科）","yamadori（kizi科）","yamagara（sizixyuukara科）","yamasemi（kawasemi科）","yamasigi（sigi科）","yamasixyoubinn（kawasemi科）","yannbarukuina（kuina科）",
"yarihasihatidori（hatidori科）","yasioumu（oumu科）","yatugasira（yatugasira科）","yoーroxtupaooraitixyou（kizi科）","yosigamo（kamo科）","yosigoi（sagi科）","yotaka（yotaka科）","yukihooziro（tumenagahooziro科）","yurikamome（kamome科）","zixenntuーpennginn（pennginn科）","zixyanomedori（zixyanomedori科）","zixyougitaki（hitaki科）","zixyuuiti（kaxtukou科）","zixyuusimatu（kaedetixyou科）","zuakamitusui（mitusui科）","zugurokamome（kamome科）","zuguromizogoi（sagi科）","zuguromorimozu（karasu科）","zugurotosakageri（tidori科）"]
//魚類
let pic_fish= ["debasuzumedai","nisikibera","togariebisu","gomatixyoutixyouuo","simakinntixyakuhugu","tenngukawahagi","wakautubo","rokusennyaxtuko","rokusennsuzumedai","renntennyaxtuko","remonntixyoutixyouuo","remonnsuzumedai","ruriyaxtuko","rurimeisigakisuzumedai","rurihosisuzumedai","rurisuzumedai","rixyuukixyuuyaraiisimoti","rixyuukixyuuhatannpo","yosuzihuedai","yokosimatamagasira（幼魚）","yokosimatamagasira","yokosimakurodai","yuuzenn","yannsennnisikibera","yarikatagi","yamabukibera（♂）","yamabukibera（♀）","yaeyamaginnpo","monntukihagi","monntukiakahimezi","monngarakawahagi","moyoumonngaradoosi","mezina","megisu","meganemotinouo（幼魚）","meganesuzumedai（幼魚）","meganegonnbe","meganekurohagi","murasamemonngara","musuzikosixyoudai","miyakotennguhagi","miyakokisennsuzumedai（幼魚）","hanaminokasago","miyakoisimoti","minokasago","minamihatatatedai","minamihakohugu（幼魚）","minamigonnbe","minamiakaeso","mitubosikurosuzumedai（幼魚）","mitubosikurosuzumedai","mizoretixyoutixyouuo","misuzirixyuukixyuusuzumedai","migimaki","mikadotixyoutixyouuo","mikadukitubameuo","matukasauo","madaratarumi（幼魚）","madai","maziriaigo","honnsomewakebera","bora","hosisasanohabera","hosigonnbe","hokutobera","houraihimezi","herayagara","butisusukibera（幼魚）","butisusukibera","hutasuzirixyuukixyuusuzumedai（幼魚）","hutasuzihimezi","hutasuzitamagasira（幼魚）","hutasuzitamagasira","hutairokaeruuo","oohueyaxtukodai","hueyaxtukodai","huedai","huuraitixyoutixyouuo","hirenagahagi（幼魚）","hirenagahagi","hirenagasuzumedai（幼魚）","hiregurobera（幼魚）","hiregurokosixyoudai（幼魚）","himehuuraitixyoutixyouuo","himegonnbe","himeaigo","hihukiaigo","harisennbonn","barahuedai","barahata","hamahuehuki","hamakumanomi","hanabirakumanomi","hanabirautubo","hanahaze","hanagoi","hanagurotixyoutixyouuo","hatatatehaze","hatatatedai","hakobera","hakohugu","hakusennsuzumedai","hakusennsuzumedai（幼魚）","haokoze","nodogurobera","nokogiriyouzi","nokogirihagi","nemuribuka","nextutaiminokasago","nextutaisuzumedai","nezusuzumedai（幼魚）","nisemotinouo","nisehuuraitixyoutixyouuo","nisekurosuziginnpo","nizihata","nizihagi","nisikiyaxtuko","nisikiteguri","nizadai","nannyouhagi","namerayaxtuko","namidakurohagi","namisuzumedai","naganiza","nagasakisuzumedai","torautubo","tonosamadai","dotizame","togetixyoutixyouuo","tokarabera","touakakumanomi","tennzikusuzumedai","tennkurosuziginnpo","tennguhagimodoki","tennguhagi","tuyubera（幼魚）","tumaziromonngara",
"tunohatatatedai","tunodasi","tukitixyoutixyouuo","tixyouhann","tixyoutixyoukosixyoudai（幼魚）","tixyoutixyouuo","danndarasuzumedai","danngouo","tatezimakinntixyakudai（幼魚）","tatezimakinntixyakudai","tasukimonngara","takabe","takanohadai","sorasuzumedai","somewakeyaxtuko","somewakebera","sousihagi","sedakasuzumedai","sezirokumanomi",
"seguromatukasa","segurotixyoutixyouuo","segurosuzumedai","sumitukitonosamadai","sumitukisomewakebera","sumitukikaminaribera","sudaretixyoutixyouuo","suzikurohagi","suziotennzikudai","sukasitennzikudai","sirakodai","simohuritanabatauo","simahagi","simaumisuzume","simaazi","sitennyaxtuko","sitisenntixyoutixyouuo","sitisennsuzumedai","sikokusuzumedai","sanngoaigo","sarasagonnbe","sazanamiyaxtuko（幼魚）","sazanamiyaxtuko","sazanamihugu","sazanamihagi","gonnzui","korodai（幼魚）","korodai","gomamonngara","gomahagi","gomahagi（幼魚）","kokutennhugu","kokutennsazanamihagi","koganeyaxtuko","koganekixyuusenn","kogasirabera（♀）","kuroyurihaze","kuromonntuki","kuromeganesuzumedai（幼魚）","kurohosiisimoti","kurohutisusukibera","kurohakohugu","kurodai","kurosorasuzumedai","kurosuzumedai（幼魚）","kurosuzumedai","kurosagi","kurogutiniza","kurenainisesuzume","kurakakemonngara","kurakaketixyoutixyouuo","kurakaosuzumedai","kumanomi","kumadori","kusahugu","kugibera（♀）","kinntixyakudai","kinntixyakudai（幼魚）","kinnsennhaze","kinnsennisimoti","kinngixyohanadai","kirinnmino","kimiokoze","kinubari","kitunebera（幼魚）","gitibera（♂）","gitibera（♀）","kitamakura","kiirohagi","kannmonnhata","kannmuribera（幼魚）","kannmuribera","kawaribudai","kawahagi","kamasubera","kanokobera（幼魚）","kasuriisimoti","kasumitixyoutixyouuo","kasumiazi","kasago","kagokakidai","kakurekumanomi","kagamitixyoutixyouuo","oyabixtutixya","obibudai","obitennsumodoki（幼魚）","obitennsumodoki","ohagurobera","onibera（♀）","onidarumaokoze","onikamasu","odorihaze","otomebera","ozisann","ogurotoragisu","okinahimezi","ootennzikuzame","oose","oosuzihimezi","ougonnniziginnpo","urumakasago","umeiromodoki","umeiro","umidukitixyoutixyouuo","umisuzume","umadurahagi","utubo","ukegutiixtutoudai","inndohimezi","inndokaeruuo","iwasakisuzumedai","irobudai（幼魚）","irobudai","ira","inaseginnpo","itohikiazi","ixtutennhuedai","ixtutenntixyoutixyouuo","ixtusenntakasago","itimonnsuzumedai（幼魚）","itatiuo","isogonnbe","isokasago","izuhimeei","isuzumi","isidai","isigakihugu","isigakidai","isigakisuzumedai","isigakikaeruuo","isaki","amimehuedai","amimehagi","amimetixyoutixyouuo","amitixyoutixyouuo","amiaigo","amamisuzumedai（幼魚）","aburayaxtuko","aziakosixyoudai（若魚）","akebonotixyoutixyouuo","akamatukasa","akahimezi","akaharayaxtuko","akahatihaze","akahata","akaobiberayg","akaei","aoyagara","aobudai","aonomehata","okizayori"];
//哺乳類
let pic_animal=["minibuta","hannpusixyaー","yoーkusixyaー","kasimiayagi","merino","zixyaーziー","zebuー","horusutainn","morumoxtuto","raxtuto（nezumi科）","zixyanngariannhamusutaー（kinugenezumi科）","nezaーranndodowaーhu（usagi科）","suhuxinnkusu（neko科）","himarayann（neko科）","perusixya（neko科）","meinnkuーnn（neko科）","sixyamu（neko科）","abisiniann（neko科）","amerikann・sixyoーtohea（neko科）","manntikann（neko科）","sennto・baーnaーdo（inu科）","boruzoi（inu科）","ahugannhaunndo（inu科）","doーberumann（inu科）","raburadoーru・retoriーbaー（inu科）","darumesiann（inu科）","siberiannhasukiー（inu科）","tixyautixyau（inu科）","biーguru（inu科）","burudoxtugu（inu科）","tinn（inu科）","pagu（inu科）","papiyonn（inu科）","pomeraniann（inu科）","tiwawa（inu科）","yoーkusixyaーteria（inu科）","toipuーdoru（inu科）","daxtukusuhunndo（inu科）","amazonnkawairuka（amazonnkawairuka科）","okigonndou（mairuka科）","sixyati（mairuka科）","hanagonndou（mairuka科）","irowakeiruka（mairuka科）","kamairuka（mairuka科）","semiiruka（mairuka科）","mairuka（mairuka科）","hanndouiruka（mairuka科）","komaxtukou（komaxtukou科）","isiiruka（nezumiiruka科）","sunameri（nezumiiruka科）","siroiruka（ixtukaku科）","ixtukaku（ixtukaku科）","akaboukuzira（akaboukuzira科）","tutikuzira（akaboukuzira科）","maxtukoukuzira（maxtukoukuzira科）","kokukuzira（kokukuzira科）","semikuzira（semikuzira科）","minnkukuzira（nagasukuzira科）","zatoukuzira（nagasukuzira科）","sironagasukuzira（nagasukuzira科）","kaba（kaba科）","nihonnkamosika（usi科）","nihonnzika（sika科）","arugari（usi科）","maーkoーru（usi科）","noyagi（usi科）","zixyakouusi（usi科）","baーbarisiーpu（usi科）","taーkinn（usi科）","sumatorakamosika（usi科）","saiga（usi科）","siroiwayagi（usi科）","sixyamoa（usi科）","buraxtukubaxtuku（usi科）","tomusonngazeru（usi科）","seーburuannteroーpu（usi科）","innpara（usi科）","orixtukusu（usi科）","aragiaorixtukusu（usi科）","oguronuー（usi科）","yotudunoreiyou（usi科）","baxtuhuxaroー（usi科）","ahurikasuigixyuu（usi科）","iranndo（usi科）","bonngo（usi科）","niara（usi科）","banntenn（usi科）","yaku（usi科）","sihuzou（sika科）","akasika（sika科）","ozirozika（sika科）","herazika（sika科）","tonakai（sika科）","kixyonn（sika科）","norozika（sika科）","puronnguhoーnn（puronnguhoーnn科）","okapi（kirinn科）","kirinn（kirinn科）","yamazixyakouzika（zixyakouzika科）","mizumamezika（mamezika科）","kutiziropextukariー（pextukariー科）","moriinosisi（inosisi科）","babiruーsa（inosisi科）","higeinosisi（inosisi科）","inosisi（inosisi科）","arupaka（rakuda科）","rama（rakuda科）","bikuーnixya（rakuda科）","hitokoburakuda（rakuda科）","hutakoburakuda（rakuda科）","sumatorasai（sai科）","sirosai（sai科）","mareーbaku（baku科）","minamiamerikabaku（baku科）","ahurikanoroba（uma科）","moukonouma（uma科）","sabannnasimauma（uma科）",
"karihuxoruniaasika（asika科）","otaria（asika科）","todo（asika科）","seiuti（seiuti科）","oxtutosei（asika科）","kanikuiazarasi（azarasi科）","uxextuderuazarasi（azarasi科）","hixyouazarasi（azarasi科）","kurakakeazarasi（azarasi科）","kitazouazarasi（azarasi科）","zukinnazarasi（azarasi科）","baikaruazarasi（azarasi科）","zenigataazarasi（azarasi科）","wamonnazarasi（azarasi科）","tategotoazarasi（azarasi科）","gomahuazarasi（azarasi科）","raーteru（itati科）","anaguma（itati科）","raxtuko（itati科）","simasukannku（sukannku科）","kuzuri（itati科）","nihonntenn（itati科）","minnku（itati科）","okozixyo（itati科）","nihonnitati（itati科）","araiguma（araiguma科）","kinnkazixyuー（araiguma科）","rextusaーpannda（rextusaーpannda科）","namakeguma（kuma科）","mareーguma（kuma科）","meganeguma（kuma科）","zixyaianntopannda（kuma科）","hoxtukixyokuguma（kuma科）","tukinowaguma（kuma科）","higuma（kuma科）","haiirogitune（inu科）","huxenextuku（inu科）","akagitune（inu科）","hoxtukixyokugitune（inu科）","yabuinu（inu科）","tanuki（inu科）","tategamiookami（inu科）","rikaonn（inu科）","segurozixyaxtukaru（inu科）","koyoーte（inu科）","ookami（inu科）","simamannguーsu（mannguーsu科）","kumaneko（zixyakouneko科）","ahurikazixyakouneko（zixyakouneko科）","huxoxtusa（madagasukarumannguーsu科）","hakubisinn（zixyakouneko科）","yoーroxtupazixenextuto（zixyakouneko科）","kaxtusixyokuhaiena（haiena科）","aーdouruhu（haiena科）","butihaiena（haiena科）","iriomoteyamaneko（neko科）","manuruneko（neko科）","sunaneko（neko科）","karakaru（neko科）","saーbaru（neko科）","zixyagaranndexi（neko科）","pixyuーma（neko科）","oseroxtuto（neko科）","ooyamaneko（neko科）","tiーtaー（neko科）","unnpixyou（neko科）","yukihixyou（neko科）","hixyou（neko科）","tora（neko科）.webp","zixyagaー（neko科）","raionn（neko科）","oosennzannkou（sennzannkou科）","ogasawaraookoumori（ookoumori科）","umadurakoumori（ookoumori科）","siroherakoumori（herakoumori科）","nihonnusagikoumori（hinakoumori科）","haitisorenodonn（sorenodonn科）","namiharinezumi（harinezumi科）","pireneーdesumann（mogura科）","hosibanamogura（mogura科）","azumamogura（mogura科）","himizu（mogura科）","kawanezumi（togarinezumi科）","bisukaーtixya（tinntira科）","nuーtoria（nuーtoria科）","tinntira（tinntira科）","kanadayamaarasi（amerikayamaarasi科）","madaraaguーti（aguーti科）","maーra（tennzikunezumi科）","paka（paka科）","kapibara（tennzikunezumi科）","hadakadebanezumi（debanezumi科）","keーputategamiyamaarasi（yamaarasi科）","amerikabiーbaー（biーbaー科）","orudokanngaruーnezumi（pokextutomausu科）","tobiusagi（tobiusagi科）","kitamiyugitoginezumi（toginezumi科）","noruuxeーreminngu（kinugenezumi科）","masukuraxtuto（kinugenezumi科）","kuroharahamusutaー（kinugenezumi科）","takenezumi（mekuranezumi科）",
"akanezumi（nezumi科）","keーpuaragezirisu（risu科）","yamabiーbaー（yamabiーbaー科）","yamane（yamane科）","arupusumaーmoxtuto（risu科）","pureーriーdoxtugu（risu科）","inndooorisu（risu科）","nihonnmomonnga（risu科）","musasagi（risu科）","mikerisu（risu科）","simarisu（risu科）","kitarisu（risu科）","nihonnrisu（risu科）","amaminokurousagi（usagi科）","sumatorausagi（usagi科）","anausagi（usagi科）","ogurozixyaxtukuusagi（usagi科）","yukiusagi（usagi科）","nihonnnousagi（usagi科）","kitanakiusagi（nakiusagi科）","mareーhiyokezaru（hiyokezaru科）","komonntupai（tupai科）","tinnpannziー（hito科）","bonobo（hito科）","higasigorira（hito科）","boruneoorannuーtann（hito科）","sirotetenagazaru（tenagazaru科）","tennguzaru（onagazaru科）","kinnsikou（onagazaru科）","abisiniakorobusu（onagazaru科）","sisiozaru（onagazaru科）","nihonnzaru（onagazaru科）","manndoriru（onagazaru科）","manntohihi（onagazaru科）","doriru（onagazaru科）","geradahihi（onagazaru科）","aozaru（onagazaru科）","buraxtuzazaru（onagazaru科）","siroerimanngabei（onagazaru科）","berubextuto（onagazaru科）","akahoezaru（kumozaru科）","zixyohuroikumozaru（kumozaru科）","sirogaosaki（saki科）","hageuakari（saki科）","yozaru（yozaru科）","kurohigesaki（saki科）","komonnrisuzaru（omakizaru科）","goーrudennraionntamarinn（maーmosextuto科）","ennperaーtamarinn（maーmosextuto科）","pigumiーmaーmosextuto（maーmosextuto科）","nisimeganezaru（meganezaru科）","oogarago（garago科）","suroーrorisu（rorisu科）","aiai（aiai科）","beroーsihuxaka（inndori科）","inndori（inndori科）","kurosiroerimakikitunezaru（kitunezaru科）","waokitunezaru（kitunezaru科）","tategaminamakemono（miyuginamakemono科）","himearikui（arikui科）","ooarikui（arikui科）","ooarumaziro（arumaziro科）","mituobiarumaziro（arumaziro科）","sabakukinnmogura（kinnmogura科）","simatennrextuku（tennrextuku科）","haritennrextuku（tennrextuku科）","akahanezinezumi（hanezinezumi科）","tutibuta（tutibuta科）","minamikinoborihairaxtukusu（hairaxtukusu科）","amerikamanatexiー（manatexiー科）","zixyugonn（zixyugonn科）","aziazou（zou科）","ahurikazou（zou科）","ogurokinoborikanngaruー（kanngaruー科）","simaoiwawarabiー（kanngaruー科）","akawararuー（kanngaruー科）","akakanngaruー（kanngaruー科）","hananaganezumikanngaruー（nezumikanngaruー科）","haiirorinnguteiru（hukuromomonnga科）","hukuromomonnga（hukuromomonnga科）","hukuromitusui（hukuromitusui科）","hukurogitune（kusukusu科）","butikusukusu（kusukusu科）","uxonnbaxtuto（uxonnbaxtuto科）","koara（koara科）","miminagabanndexikuーto（banndexikuーto科）","mizuopoxtusamu（opoxtusamu科）","hukuromogura（hukuromogura科）","hukuroarikui（hukuroarikui科）","tasumaniadebiru（hukuroneko科）","hukuroneko（hukuroneko科）","tiroeopoxtusamu（mikurogioteriumu科）",
"ekuadorukenoresutesu（kenoresutesu科）","kitaopoxtusamu（opoxtusamu科）","harimogura（harimogura科）","kamonohasi（kamonohasi科）"]
let pic_title=["images/taitoru.jpeg","images/taitoru鳥.jpeg"]

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
    document.getElementById("pic").src = get_url(pic[i]);
    document.getElementById("ques").innerHTML = "これは何？　("+(i+1)+"/"+mondai+")";
    //選択肢を表示
    choice(pic);
}

//選択肢を表示する
function choice(pi){
    //選択肢の生成
    let pic3=cho(pi);

    for(let n=0; n<list_ch.length; n++){
        document.getElementById(list_ch[n]).innerHTML = r2k(pic3[n]);
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

    let pic3=[r2k(pi[i]),r2k(pic2[0]),r2k(pic2[1]),r2k(pic2[2])];
    ran(pic3);
    return pic3
}

//魚の名前から画像ファイル名を取得する
function get_url(list_name){
    let url;
    if(change_count==0){
        url="images/"+list_name+".jpg";
    }
    else if(change_count==1){
        url="bird/"+list_name+".jpg";
    }
    else{
        url="animal/"+list_name+".jpg";

    }
    return url
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
    if(answer==r2k(list_mondai[i])){
        answer2.style.backgroundColor = "green";
        await sleep(300);
        count+=1;
        all("green");
    }
    //誤答なら
    else{
        answer2.style.backgroundColor = "red";
        look(r2k(list_mondai[i])).style.backgroundColor = "green";
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
        document.getElementById("seikai").innerHTML="正解は「"+r2k(pic[i-1])+"」です。";
    }
    else{
        document.getElementById("seikai").innerHTML="正解は「"+r2k(re_pic[i-1])+"」です。";
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
    document.getElementById("pic").src = get_url(pi[i]);
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
    document.getElementById("pic").src = get_url(pic[i]);
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
    if(r2k(list_mondai[i]).indexOf(an)!=-1 && an!="" ){
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

//ローマ字をカタカナに変換
var roman2hiragana = {
    'a':'あ', 'i':'い', 'u':'う', 'e':'え', 'o':'お',
    'ka':'か', 'ki':'き', 'ku':'く', 'ke':'け', 'ko':'こ',
    'sa':'さ', 'si':'し', 'su':'す', 'se':'せ', 'so':'そ',
    'ta':'た', 'ti':'ち', 'tu':'つ', 'te':'て', 'to':'と', 'chi':'ち', 'tsu':'つ',
    'na':'な', 'ni':'に', 'nu':'ぬ', 'ne':'ね', 'no':'の',
    'ha':'は', 'hi':'ひ', 'hu':'ふ', 'he':'へ', 'ho':'ほ', 'fu':'ふ',
    'ma':'ま', 'mi':'み', 'mu':'む', 'me':'め', 'mo':'も',
    'ya':'や', 'yi':'い', 'yu':'ゆ', 'ye':'いぇ', 'yo':'よ',
    'ra':'ら', 'ri':'り', 'ru':'る', 're':'れ', 'ro':'ろ',
    'wa':'わ', 'wyi':'ゐ', 'wu':'う', 'wye':'ゑ', 'wo':'を',
    'nn':'ん',
    'ga':'が', 'gi':'ぎ', 'gu':'ぐ', 'ge':'げ', 'go':'ご',
    'za':'ざ', 'zi':'じ', 'zu':'ず', 'ze':'ぜ', 'zo':'ぞ', 'ji':'じ',
    'da':'だ', 'di':'ぢ', 'du':'づ', 'de':'で', 'do':'ど',
    'ba':'ば', 'bi':'び', 'bu':'ぶ', 'be':'べ', 'bo':'ぼ',
    'pa':'ぱ', 'pi':'ぴ', 'pu':'ぷ', 'pe':'ぺ', 'po':'ぽ',
    'kya':'きゃ', 'kyu':'きゅ', 'kyo':'きょ',
    'sya':'しゃ', 'syu':'しゅ', 'syo':'しょ',
    'tya':'ちゃ', 'tyi':'ちぃ', 'tyu':'ちゅ', 'tye':'ちぇ', 'tyo':'ちょ', 'cha':'ちゃ', 'chu':'ちゅ', 'che':'ちぇ', 'cho':'ちょ',
    'nya':'にゃ', 'nyi':'にぃ', 'nyu':'にゅ', 'nye':'にぇ', 'nyo':'にょ',
    'hya':'ひゃ', 'hyi':'ひぃ', 'hyu':'ひゅ', 'hye':'ひぇ', 'hyo':'ひょ',
    'mya':'みゃ', 'myi':'みぃ', 'myu':'みゅ', 'mye':'みぇ', 'myo':'みょ',
    'rya':'りゃ', 'ryi':'りぃ', 'ryu':'りゅ', 'rye':'りぇ', 'ryo':'りょ',
    'gya':'ぎゃ', 'gyi':'ぎぃ', 'gyu':'ぎゅ', 'gye':'ぎぇ', 'gyo':'ぎょ',
    'zya':'じゃ', 'zyi':'じぃ', 'zyu':'じゅ', 'zye':'じぇ', 'zyo':'じょ',
    'ja':'じゃ', 'ju':'じゅ', 'je':'じぇ', 'jo':'じょ', 'jya':'じゃ', 'jyi':'じぃ', 'jyu':'じゅ', 'jye':'じぇ', 'jyo':'じょ',
    'dya':'ぢゃ', 'dyi':'ぢぃ', 'dyu':'ぢゅ', 'dye':'ぢぇ', 'dyo':'ぢょ',
    'bya':'びゃ', 'byi':'びぃ', 'byu':'びゅ', 'bye':'びぇ', 'byo':'びょ',
    'pya':'ぴゃ', 'pyi':'ぴぃ', 'pyu':'ぴゅ', 'pye':'ぴぇ', 'pyo':'ぴょ',
    'fa':'ふぁ', 'fi':'ふぃ', 'fe':'ふぇ', 'fo':'ふぉ',
    'fya':'ふゃ', 'fyu':'ふゅ', 'fyo':'ふょ',
    'xa':'ぁ', 'xi':'ぃ', 'xu':'ぅ', 'xe':'ぇ', 'xo':'ぉ', 'la':'ぁ', 'li':'ぃ', 'lu':'ぅ', 'le':'ぇ', 'lo':'ぉ',
    'xya':'ゃ', 'xyu':'ゅ', 'xyo':'ょ',
    'xtu':'っ', 'xtsu':'っ',
    'wi':'うぃ', 'we':'うぇ',
    'va':'ヴぁ', 'vi':'ヴぃ', 'vu':'ヴ', 've':'ヴぇ', 'vo':'ヴぉ'
  };
  
  /*
   * roman -> hiragana
   *
   * @param (String) roman:
   * @return (String): hiragana
   */
  function r2k(roman) {
    var i, iz, match, regex,
        hiragana = '', table = roman2hiragana;
  
    regex = new RegExp((function(table){
      var key,
          s = '^(?:';
  
      for (key in table) if (table.hasOwnProperty(key)) {
        s += key + '|';
      }
      return s + '(?:n(?![aiueo]|y[aiueo]|$))|' + '([^aiueon])\\1)';
    })(table));
    for (i = 0, iz = roman.length; i < iz; ++i) {
      if (match = roman.slice(i).match(regex)) {
        if (match[0] === 'n') {
          hiragana += 'ん';
        } else if (/^([^n])\1$/.test(match[0])) {
          hiragana += 'っ';
          --i;
        } else {
          hiragana += table[match[0]];
        }
        i += match[0].length - 1;
      } else {
        hiragana += roman[i];
      }
    }
    return hiraToKana(hiragana);
  }
