//問題の画像を格納する配列
let pic= ["debasuzumedai","nisikibera","togariebisu","gomatixyoutixyouuo","simakinntixyakuhugu","tenngukawahagi","wakautubo","rokusennyaxtuko","rokusennsuzumedai","renntennyaxtuko","remonntixyoutixyouuo","remonnsuzumedai","ruriyaxtuko","rurimeisigakisuzumedai","rurihosisuzumedai","rurisuzumedai","rixyuukixyuuyaraiisimoti","rixyuukixyuuhatannpo","yosuzihuedai","yokosimatamagasira（幼魚）","yokosimatamagasira","yokosimakurodai","yuuzenn","yannsennnisikibera","yarikatagi","yamabukibera（♂）","yamabukibera（♀）","yaeyamaginnpo","monntukihagi","monntukiakahimezi","monngarakawahagi","moyoumonngaradoosi","mezina","megisu","meganemotinouo（幼魚）","meganesuzumedai（幼魚）","meganegonnbe","meganekurohagi","murasamemonngara","musuzikosixyoudai","miyakotennguhagi","miyakokisennsuzumedai（幼魚）","hanaminokasago","miyakoisimoti","minokasago","minamihatatatedai","minamihakohugu（幼魚）","minamigonnbe","minamiakaeso","mitubosikurosuzumedai（幼魚）","mitubosikurosuzumedai","mizoretixyoutixyouuo","misuzirixyuukixyuusuzumedai","migimaki","mikadotixyoutixyouuo","mikadukitubameuo","matukasauo","madaratarumi（幼魚）","madai","maziriaigo","honnsomewakebera","bora","hosisasanohabera","hosigonnbe","hokutobera","houraihimezi","herayagara","butisusukibera（幼魚）","butisusukibera","hutasuzirixyuukixyuusuzumedai（幼魚）","hutasuzihimezi","hutasuzitamagasira（幼魚）","hutasuzitamagasira","hutairokaeruuo","oohueyaxtukodai","hueyaxtukodai","huedai","huuraitixyoutixyouuo","hirenagahagi（幼魚）","hirenagahagi","hirenagasuzumedai（幼魚）","hiregurobera（幼魚）","hiregurokosixyoudai（幼魚）","himehuuraitixyoutixyouuo","himegonnbe","himeaigo","hihukiaigo","harisennbonn","barahuedai","barahata","hamahuehuki","hamakumanomi","hanabirakumanomi","hanabirautubo","hanahaze","hanagoi","hanagurotixyoutixyouuo","hatatatehaze","hatatatedai","hakobera","hakohugu","hakusennsuzumedai","hakusennsuzumedai（幼魚）","haokoze","nodogurobera","nokogiriyouzi","nokogirihagi","nemuribuka","nextutaiminokasago","nextutaisuzumedai","nezusuzumedai（幼魚）","nisemotinouo","nisehuuraitixyoutixyouuo","nisekurosuziginnpo","nizihata","nizihagi","nisikiyaxtuko","nisikiteguri","nizadai","nannyouhagi","namerayaxtuko","namidakurohagi","namisuzumedai","naganiza","nagasakisuzumedai","torautubo","tonosamadai","dotizame","togetixyoutixyouuo","tokarabera","touakakumanomi","tennzikusuzumedai","tennkurosuziginnpo","tennguhagimodoki","tennguhagi","tuyubera（幼魚）","tumaziromonngara",
"tunohatatatedai","tunodasi","tukitixyoutixyouuo","tixyouhann","tixyoutixyoukosixyoudai（幼魚）","tixyoutixyouuo","danndarasuzumedai","danngouo","tatezimakinntixyakudai（幼魚）","tatezimakinntixyakudai","tasukimonngara","takabe","takanohadai","sorasuzumedai","somewakeyaxtuko","somewakebera","sousihagi","sedakasuzumedai","sezirokumanomi",
"seguromatukasa","segurotixyoutixyouuo","segurosuzumedai","sumitukitonosamadai","sumitukisomewakebera","sumitukikaminaribera","sudaretixyoutixyouuo","suzikurohagi","suziotennzikudai","sukasitennzikudai","sirakodai","simohuritanabatauo","simahagi","simaumisuzume","simaazi","sitennyaxtuko","sitisenntixyoutixyouuo","sitisennsuzumedai","sikokusuzumedai","sanngoaigo","sarasagonnbe","sazanamiyaxtuko（幼魚）","sazanamiyaxtuko","sazanamihugu","sazanamihagi","gonnzui","korodai（幼魚）","korodai","gomamonngara","gomahagi","gomahagi（幼魚）","kokutennhugu","kokutennsazanamihagi","koganeyaxtuko","koganekixyuusenn","kogasirabera（♀）","kuroyurihaze","kuromonntuki","kuromeganesuzumedai（幼魚）","kurohosiisimoti","kurohutisusukibera","kurohakohugu","kurodai","kurosorasuzumedai","kurosuzumedai（幼魚）","kurosuzumedai","kurosagi","kurogutiniza","kurenainisesuzume","kurakakemonngara","kurakaketixyoutixyouuo","kurakaosuzumedai","kumanomi","kumadori","kusahugu","kugibera（♀）","kinntixyakudai","kinntixyakudai（幼魚）","kinnsennhaze","kinnsennisimoti","kinngixyohanadai","kirinnmino","kimiokoze","kinubari","kitunebera（幼魚）","gitibera（♂）","gitibera（♀）","kitamakura","kiirohagi","kannmonnhata","kannmuribera（幼魚）","kannmuribera","kawaribudai","kawahagi","kamasubera","kanokobera（幼魚）","kasuriisimoti","kasumitixyoutixyouuo","kasumiazi","kasago","kagokakidai","kakurekumanomi","kagamitixyoutixyouuo","oyabixtutixya","obibudai","obitennsumodoki（幼魚）","obitennsumodoki","ohagurobera","onibera（♀）","onidarumaokoze","onikamasu","odorihaze","otomebera","ozisann","ogurotoragisu","okinahimezi","ootennzikuzame","oose","oosuzihimezi","ougonnniziginnpo","urumakasago","umeiromodoki","umeiro","umidukitixyoutixyouuo","umisuzume","umadurahagi","utubo","ukegutiixtutoudai","inndohimezi","inndokaeruuo","iwasakisuzumedai","irobudai（幼魚）","irobudai","ira","inaseginnpo","itohikiazi","ixtutennhuedai","ixtutenntixyoutixyouuo","ixtusenntakasago","itimonnsuzumedai（幼魚）","itatiuo","isogonnbe","isokasago","izuhimeei","isuzumi","isidai","isigakihugu","isigakidai","isigakisuzumedai","isigakikaeruuo","isaki","amimehuedai","amimehagi","amimetixyoutixyouuo","amitixyoutixyouuo","amiaigo","amamisuzumedai（幼魚）","aburayaxtuko","aziakosixyoudai（若魚）","akebonotixyoutixyouuo","akamatukasa","akahimezi","akaharayaxtuko","akahatihaze","akahata","akaobiberayg","akaei","aoyagara","aobudai","aonomehata","okizayori"];

//鳥類
let pic_bird=["inndokuzixyaku（kizi科）","ukoxtukei（kizi科）","uzura（kizi科）","ezoraitixyou（kizi科）","kannmuriseirann（kizi科）","kizi（kizi科）","kouraikizi（kizi科）","kozixyukei（kizi科）","sitimenntixyou（kizi科）","sixyamo（kizi科）","tixyabo（kizi科）","nizikizi（kizi科）","hinaidori（kizi科）","benizixyukei（kizi科）","yamadori（kizi科）","yoーroxtupaooraitixyou（kizi科）","raitixyou（kizi科）","oohoukanntixyou（houkanntixyou科）","husahorohorotixyou（horohorotixyou科）","horohorotixyou（horohorotixyou科）","yabutukatukuri（tukatukuri科）","yosigamo（kamo科）","aigamo（kamo科）","akatukusigamo（kamo科）","ahiru（kamo科）","amerikahidori（kamo科）","oohakutixyou（kamo科）","okayosigamo（kamo科）","osidori（kamo科）","onagakamo（kamo科）","kaozirogann（kamo科）","kasasagigann（kamo科）","karigane（kamo科）","karugamo（kamo科）","gatixyou（kamo科）","kinnkurohaziro（kamo科）","kurogamo（kamo科）","koorigamo（kamo科）","kogamo（kamo科）","kokugann（kamo科）","kokutixyou（kamo科）","kohakutixyou（kamo科）","sakaturagann（kamo科）","sizixyuukaragann（kamo科）","sinagatixyou（kamo科）","sinorigamo（kamo科）","simaazi（kamo科）","suzugamo（kamo科）","tukusigamo（kamo科）","tomoegamo（kamo科）","nakihakutixyou（kamo科）","nioigamo（kamo科）","nobarikenn（kamo科）","haiirogann（kamo科）","hakugann（kamo科）","hasibirogamo（kamo科）","hisikui（kamo科）","biroーdokinnkuro（kamo科）","hoozirogamo（kamo科）","hosihaziro（kamo科）","magamo（kamo科）","magann（kamo科）","meganekewatagamo（kamo科）","kannmurisakebidori（sakebidori科）","kuginagakaituburi（kaituburi科）","kaituburi（kaituburi科）",
"kannmurikaituburi（kaituburi科）","siraonextutaitixyou（nextutaitixyou科）","akaonextutaitixyou（nextutaitixyou科）","sakei（sakei科）","sirakobato（hato科）","aobato（hato科）","ougibato（hato科）","karasubato（hato科）","kizibato（hato科）","kinnbato（hato科）","minobato（hato科）","moribato（hato科）","abi（abi科）","siroerioohamu（abi科）","hasiziroabi（abi科）","oomizunagidori（mizunagidori科）","oohurumakamome（mizunagidori科）","hurumakamome（mizunagidori科）","watariahoudori（ahoudori科）","ahoudori（ahoudori科）","kuroasiahoudori（ahoudori科）","mayuguroahoudori（ahoudori科）","asinagaumitubame（umitubame科）","kosiziroumitubame（umitubame科）","haiiroumitubame（umitubame科）","inndotokikou（kounotori科）","kurahasikou（kounotori科）","kounotori（kounotori科）","nabekou（kounotori科）","aoturakatuodori（katuodori科）","umiu（u科）","kawau（u科）","tisimaugarasu（u科）","himeu（u科）","momoiroperikann（perikann科）","kaxtusixyokuperikann（perikann科）","oogunnkanndori（gunnkanndori科）","zuguromizogoi（sagi科）","aosagi（sagi科）","akagasirasagi（sagi科）","amasagi（sagi科）","karasirasagi（sagi科）","kurosagi（sagi科）","kosagi（sagi科）","goisagi（sagi科）","sannkanogoi（sagi科）","daisagi（sagi科）","herasagi（sagi科）","murasakisagi（sagi科）","yosigoi（sagi科）","sixyumokudori（sixyumokudori科）","hasibirokou（hasibirokou科）","aziahebiu（hebiu科）","toki（toki科）","kurotoki（toki科）","sixyouzixyoutoki（toki科）","ooduru（turu科）","sodeguroduru（turu科）","tanntixyou（turu科）","turumodoki（turu科）","nabeduru（turu科）","hoozirokannmuriduru（turu科）",
"manaduru（turu科）","amerikahireasi（hireasi科）","yannbarukuina（kuina科）","oobann（kuina科）","kuina（kuina科）","takahe（kuina科）","bann（kuina科）","hikuina（kuina科）","kaxtukou（kaxtukou科）","zixyuuiti（kaxtukou科）","hototogisu（kaxtukou科）","risukaxtukou（kaxtukou科）","yotaka（yotaka科）","rakextutoyotaka（yotaka科）","amatubame（amatubame科）","amatubame（amatubame科）","kosirahigekannmuriamatubame（kannmuriamatubame科）","zugurotosakageri（tidori科）","ikarutidori（tidori科）","keri（tidori科）","tageri（tidori科）","munaguro（tidori科）","ahurikahasamiazisasi（kamome科）","umineko（kamome科）","eriguroazisasi（kamome科）","ooazisasi（kamome科）","kamome（kamome科）","kixyokuazisasi（kamome科）","kuroazisasi（kamome科）","segurokamome（kamome科）","zugurokamome（kamome科）","beniazisasi（kamome科）","yurikamome（kamome科）","mihuuzura（mihuuzura科）","miyakodori（miyakodori科）","rennkaku（rennkaku科）","sayahasitidori（sayahasitidori科）","sorihasiseitakasigi（seitakasigi科）","seitakasigi（seitakasigi科）","yamasigi（sigi科）","aoasisigi（sigi科）","erimakisigi（sigi科）","ogurosigi（sigi科）","kixyouzixyosigi（sigi科）","herasigi（sigi科）","tamasigi（tamasigi科）","tokihasigeri（tokihasigeri科）","touzokukamome（touzokukamome科）","tubametidori（tubametidori科）","utou（umisuzume科）","umioumu（umisuzume科）","umigarasu（umisuzume科）","umisuzume（umisuzume科）","umibato（umisuzume科）","etopirika（umisuzume科）","sirahigeumisuzume（umisuzume科）","tunomedori（umisuzume科）","tobi（taka科）","akaharadaka（taka科）","inuwasi（taka科）","eziputohagewasi（taka科）","ootaka（taka科）",
"oowasi（taka科）","ozirowasi（taka科）","kannmuriwasi（taka科）","kumataka（taka科）","darumawasi（taka科）","tixyuuhi（taka科）","nosuri（taka科）","hakutouwasi（taka科）","hatikuma（taka科）","higewasi（taka科）","madagasukarutixyuuhidaka（taka科）","hebikuiwasi（hebikuiwasi科）","konndoru（konndoru科）","kotodori（kotodori科）","misago（misago科）","wasimimizuku（hukurou科）","aobazuku（hukurou科）","ookonohazuku（hukurou科）","kinnmehukurou（hukurou科）","konohazuku（hukurou科）","simahukurou（hukurou科）","sirohukurou（hukurou科）","torahuzuku（hukurou科）","mennhukurou（hukurou科）","saitixyou（saitixyou科）","yatugasira（yatugasira科）","buxtupousou（buxtupousou科）","benihatikui（hatikui科）","yamasixyoubinn（kawasemi科）","akasixyoubinn（kawasemi科）","ooonagasixyouginn（kawasemi科）","kawasemi（kawasemi科）","nannyousixyoubinn（kawasemi科）","yamasemi（kawasemi科）","oobuxtupousou（oobuxtupousou科）","nogutigera（kitutuki科）","aogera（kitutuki科）","akagera（kitutuki科）","arisui（kitutuki科）","kumagera（kitutuki科）","kogera（kitutuki科）","nodoguromituosie（mituosie科）","sannsixyokukimuneoohasi（oohasi科）","tixyougennbou（hayabusa科）","sirohayabusa（hayabusa科）","hayabusa（hayabusa科）","suzume（suzume科）","garaパgosuhuxinnti（huukinntixyou科）","simanoziko（hooziro科）","aozi（hooziro科）","aozi（hooziro科）","kurozi（hooziro科）","kurozi（hooziro科）","kozixyurinn（hooziro科）","kozixyurinn（hooziro科）","simaaozi（hooziro科）","simaaozi（hooziro科）","simanoziko（hooziro科）","hooziro（hooziro科）","hooziro（hooziro科）","miyamahooziro（hooziro科）",
"miyamahooziro（hooziro科）","kannzasihuutixyou（huutixyou科）","aohuutixyou（huutixyou科）","hukinagasihuutixyou（huutixyou科）","iwahibari（iwahibari科）","kabebasiri（kabebasiri科）","zixyuusimatu（kaedetixyou科）","kokinntixyou（kaedetixyou科）","bunntixyou（kaedetixyou科）","benisuzume（kaedetixyou科）","onaga（karasu科）","kakesu（karasu科）","kasasagi（karasu科）","kokumarugarasu（karasu科）","zuguromorimozu（karasu科）","hasibutogarasu（karasu科）","hosigarasu（karasu科）","miyamagarasu（karasu科）","rurikakesu（karasu科）","watarigarasu（karasu科）","sannkoutixyou（kasasagihitaki科）","kawagarasu（kawagarasu科）","hibari（hibari科）","higedori（kazaridori科）","gianaiwadori（kazaridori科）","sirogasira（hiyodori科）","kibasiri（kibasiri科）","hiyodori（hiyodori科）","kikuitadaki（kikuitadaki科）","onagaseaomaikodori（maikodori科）","kouraiuguisu（kouraiuguisu科）","meganekouraiuguisu（kouraiuguisu科）","aomenisetaiyoutixyou（mamiyairotixyou科）","misosazai（misosazai科）","meguro（meziro科）","meziro（meziro科）","gozixyuukara（gozixyuukara科）","zuakamitusui（mitusui科）","tigomozu（mozu科）","ookaramozu（mozu科）","mozu（mozu科）","zixyougitaki（hitaki科）","akakoxtuko（hitaki科）","akahige（hitaki科）","isohiyodori（hitaki科）","ooruri（hitaki科）","ogawakomadori（hitaki科）","karaakahara（hitaki科）","kigitaki（hitaki科）","komadori（hitaki科）","koruri（hitaki科）","tugumi（hitaki科）","toratugumi（hitaki科）","rurigitaki（hitaki科）","nisimakibadori（mukudorimodoki科）","oomusikui（musikui科）","akahasiusitutuki（mukudori科）",
"tukinowaterimuku（mukudori科）","mukudori（mukudori科）","uso（atori科）","atori（atori科）","ikaru（atori科）","isuka（atori科）","oomasiko（atori科）","kanaria（atori科）","benihiwa（atori科）","mahiwa（atori科）","benihawaimitusui（hawaimitusui科）","nekodori（niwasidori科）","herumextutooohasimozu（oohasimozu科）","enaga（enaga科）","sixyakaihataoridori（hataoridori科）","kouyoutixyou（hataoridori科）","kirennzixyaku（rennzixyaku科）","hukinagasihatidori（hatidori科）","mamehatidori（hatidori科）","yarihasihatidori（hatidori科）","sannsixyoukui（sannsixyoukui科）","oosextuka（sennnixyuu科）","kisekirei（sekirei科）","tahibari（sekirei科）","hakusekirei（sekirei科）","sextuka（sextuka科）","makinosennnixyuu（sennnixyuu科）","sixyouzixyoukoukanntixyou（sixyouzixyoukoukanntixyou科）","akaotaiyoutixyou（taiyoutixyou科）","sizixyuukara（sizixyuukara科）","hasibutogara（sizixyuukara科）","yamagara（sizixyuukara科）","tennninntixyou（tennninntixyou科）","sousitixyou（timedori科）","gabitixyou（timedori科）","tubame（tubame科）","kosiakatubame（tubame科）","sixyoudoutubame（tubame科）","rixyuukixyuutubame（tubame科）","yukihooziro（tumenagahooziro科）","turisugara（turisugara科）","uguisu（uguisu科）","yairotixyou（yairotixyou科）","ooyosikiri（yosikiri科）","datixyou（datixyou科）","hikuidori（hikuidori科）","emixyuー（emixyuー科）","ebosidori（ebosidori科）","yasioumu（oumu科）","okameinnko（oumu科）","hukurououmu（hukurououmu科）","sekiseiinnko（innko科）","honnseiinnko（innko科）","rurikonngouinnko（innko科）","oohuraminngo（huraminngo科）","beniirohuraminngo（huraminngo科）","zixyanomedori（zixyanomedori科）","kaguー（kaguー科）","ketuxaーru（kinubanedori科）","kiーuxi（kiーuxi科）","akagaonezumidori（nezumidori科）","akanogannmodoki（nogannmodoki科）","ahurikaoonogann（nogann科）","zixenntuーpennginn（pennginn科）","aderiーpennginn（pennginn科）","iwatogipennginn（pennginn科）","ousamapennginn（pennginn科）","keーpupennginn（pennginn科）","kouteipennginn（pennginn科）","kogatapennginn（pennginn科）","higepennginn（pennginn科）","hunnborutopennginn（pennginn科）","mazerannpennginn（pennginn科）","rea（rea科）","kannmurisigidatixyou（sigidatixyou科）","tumebakei（tumebakei科）"];

//魚類
let pic_fish= ["debasuzumedai","nisikibera","togariebisu","gomatixyoutixyouuo","simakinntixyakuhugu","tenngukawahagi","wakautubo","rokusennyaxtuko","rokusennsuzumedai","renntennyaxtuko","remonntixyoutixyouuo","remonnsuzumedai","ruriyaxtuko","rurimeisigakisuzumedai","rurihosisuzumedai","rurisuzumedai","rixyuukixyuuyaraiisimoti","rixyuukixyuuhatannpo","yosuzihuedai","yokosimatamagasira（幼魚）","yokosimatamagasira","yokosimakurodai","yuuzenn","yannsennnisikibera","yarikatagi","yamabukibera（♂）","yamabukibera（♀）","yaeyamaginnpo","monntukihagi","monntukiakahimezi","monngarakawahagi","moyoumonngaradoosi","mezina","megisu","meganemotinouo（幼魚）","meganesuzumedai（幼魚）","meganegonnbe","meganekurohagi","murasamemonngara","musuzikosixyoudai","miyakotennguhagi","miyakokisennsuzumedai（幼魚）","hanaminokasago","miyakoisimoti","minokasago","minamihatatatedai","minamihakohugu（幼魚）","minamigonnbe","minamiakaeso","mitubosikurosuzumedai（幼魚）","mitubosikurosuzumedai","mizoretixyoutixyouuo","misuzirixyuukixyuusuzumedai","migimaki","mikadotixyoutixyouuo","mikadukitubameuo","matukasauo","madaratarumi（幼魚）","madai","maziriaigo","honnsomewakebera","bora","hosisasanohabera","hosigonnbe","hokutobera","houraihimezi","herayagara","butisusukibera（幼魚）","butisusukibera","hutasuzirixyuukixyuusuzumedai（幼魚）","hutasuzihimezi","hutasuzitamagasira（幼魚）","hutasuzitamagasira","hutairokaeruuo","oohueyaxtukodai","hueyaxtukodai","huedai","huuraitixyoutixyouuo","hirenagahagi（幼魚）","hirenagahagi","hirenagasuzumedai（幼魚）","hiregurobera（幼魚）","hiregurokosixyoudai（幼魚）","himehuuraitixyoutixyouuo","himegonnbe","himeaigo","hihukiaigo","harisennbonn","barahuedai","barahata","hamahuehuki","hamakumanomi","hanabirakumanomi","hanabirautubo","hanahaze","hanagoi","hanagurotixyoutixyouuo","hatatatehaze","hatatatedai","hakobera","hakohugu","hakusennsuzumedai","hakusennsuzumedai（幼魚）","haokoze","nodogurobera","nokogiriyouzi","nokogirihagi","nemuribuka","nextutaiminokasago","nextutaisuzumedai","nezusuzumedai（幼魚）","nisemotinouo","nisehuuraitixyoutixyouuo","nisekurosuziginnpo","nizihata","nizihagi","nisikiyaxtuko","nisikiteguri","nizadai","nannyouhagi","namerayaxtuko","namidakurohagi","namisuzumedai","naganiza","nagasakisuzumedai","torautubo","tonosamadai","dotizame","togetixyoutixyouuo","tokarabera","touakakumanomi","tennzikusuzumedai","tennkurosuziginnpo","tennguhagimodoki","tennguhagi","tuyubera（幼魚）","tumaziromonngara",
"tunohatatatedai","tunodasi","tukitixyoutixyouuo","tixyouhann","tixyoutixyoukosixyoudai（幼魚）","tixyoutixyouuo","danndarasuzumedai","danngouo","tatezimakinntixyakudai（幼魚）","tatezimakinntixyakudai","tasukimonngara","takabe","takanohadai","sorasuzumedai","somewakeyaxtuko","somewakebera","sousihagi","sedakasuzumedai","sezirokumanomi",
"seguromatukasa","segurotixyoutixyouuo","segurosuzumedai","sumitukitonosamadai","sumitukisomewakebera","sumitukikaminaribera","sudaretixyoutixyouuo","suzikurohagi","suziotennzikudai","sukasitennzikudai","sirakodai","simohuritanabatauo","simahagi","simaumisuzume","simaazi","sitennyaxtuko","sitisenntixyoutixyouuo","sitisennsuzumedai","sikokusuzumedai","sanngoaigo","sarasagonnbe","sazanamiyaxtuko（幼魚）","sazanamiyaxtuko","sazanamihugu","sazanamihagi","gonnzui","korodai（幼魚）","korodai","gomamonngara","gomahagi","gomahagi（幼魚）","kokutennhugu","kokutennsazanamihagi","koganeyaxtuko","koganekixyuusenn","kogasirabera（♀）","kuroyurihaze","kuromonntuki","kuromeganesuzumedai（幼魚）","kurohosiisimoti","kurohutisusukibera","kurohakohugu","kurodai","kurosorasuzumedai","kurosuzumedai（幼魚）","kurosuzumedai","kurosagi","kurogutiniza","kurenainisesuzume","kurakakemonngara","kurakaketixyoutixyouuo","kurakaosuzumedai","kumanomi","kumadori","kusahugu","kugibera（♀）","kinntixyakudai","kinntixyakudai（幼魚）","kinnsennhaze","kinnsennisimoti","kinngixyohanadai","kirinnmino","kimiokoze","kinubari","kitunebera（幼魚）","gitibera（♂）","gitibera（♀）","kitamakura","kiirohagi","kannmonnhata","kannmuribera（幼魚）","kannmuribera","kawaribudai","kawahagi","kamasubera","kanokobera（幼魚）","kasuriisimoti","kasumitixyoutixyouuo","kasumiazi","kasago","kagokakidai","kakurekumanomi","kagamitixyoutixyouuo","oyabixtutixya","obibudai","obitennsumodoki（幼魚）","obitennsumodoki","ohagurobera","onibera（♀）","onidarumaokoze","onikamasu","odorihaze","otomebera","ozisann","ogurotoragisu","okinahimezi","ootennzikuzame","oose","oosuzihimezi","ougonnniziginnpo","urumakasago","umeiromodoki","umeiro","umidukitixyoutixyouuo","umisuzume","umadurahagi","utubo","ukegutiixtutoudai","inndohimezi","inndokaeruuo","iwasakisuzumedai","irobudai（幼魚）","irobudai","ira","inaseginnpo","itohikiazi","ixtutennhuedai","ixtutenntixyoutixyouuo","ixtusenntakasago","itimonnsuzumedai（幼魚）","itatiuo","isogonnbe","isokasago","izuhimeei","isuzumi","isidai","isigakihugu","isigakidai","isigakisuzumedai","isigakikaeruuo","isaki","amimehuedai","amimehagi","amimetixyoutixyouuo","amitixyoutixyouuo","amiaigo","amamisuzumedai（幼魚）","aburayaxtuko","aziakosixyoudai（若魚）","akebonotixyoutixyouuo","akamatukasa","akahimezi","akaharayaxtuko","akahatihaze","akahata","akaobiberayg","akaei","aoyagara","aobudai","aonomehata","okizayori"];
//哺乳類
let pic_animal=["kamonohasi（kamonohasi科）","harimogura（harimogura科）","kitaopoxtusamu（opoxtusamu科）","mizuopoxtusamu（opoxtusamu科）","ekuadorukenoresutesu（kenoresutesu科）","tiroeopoxtusamu（mikurobioteriumu科）","tasumaniadebiru（hukuroneko科）","hukuroneko（hukuroneko科）","hukuroarikui（hukuroarikui科）","hukuromogura（hukuromogura科）","miminagabanndexikuーto（banndexikuーto科）","akakanngaruー（kanngaruー科）","akawararuー（kanngaruー科）","ogurokinoborikanngaruー（kanngaruー科）","simaoiwawarabiー（kanngaruー科）","hananaganezumikanngaruー（nezumikanngaruー科）","hukurogitune（kusukusu科）","butikusukusu（kusukusu科）","koara（koara科）","uxonnbaxtuto（uxonnbaxtuto科）","hukuromitusui（hukuromitusui科）","haiirorinnguteiru（hukuromomonnga科）","hukuromomonnga（hukuromomonnga科）","aziazou（zou科）","ahurikazou（zou科）","zixyugonn（zixyugonn科）","amerikamanatexiー（manatexiー科）","minamikinoborihairaxtukusu（hairaxtukusu科）","tutibuta（tutibuta科）","akahanezinezumi（hanezinezumi科）","simatennrextuku（tennrextuku科）","haritennrextuku（tennrextuku科）","sabakukinnmogura（kinnmogura科）","ooarumaziro（arumaziro科）","mituobiarumaziro（arumaziro科）","ooarikui（arikui科）","himearikui（arikui科）","tategaminamakemono（miyuginamakemono科）","kurosiroerimakikitunezaru（kitunezaru科）","waokitunezaru（kitunezaru科）","aiai（aiai科）","oogarago（garago科）","inndori（inndori科）","beroーsihuxaka（inndori科）","nisimeganezaru（meganezaru科）","ennperaーtamarinn（maーmosextuto科）","goーrudennraionntamarinn（maーmosextuto科）","pigumiーmaーmosextuto（maーmosextuto科）","akahoezaru（kumozaru科）","zixyohuroikumozaru（kumozaru科）","komonnrisuzaru（omakizaru科）",
"kurohigesaki（saki科）","sirogaosaki（saki科）","hageuakari（saki科）","yozaru（yozaru科）","aozaru（onagazaru科）","abisiniakorobusu（onagazaru科）","kinnsikou（onagazaru科）","geradahihi（onagazaru科）","sisiozaru（onagazaru科）","siroerimanngabei（onagazaru科）","tennguzaru（onagazaru科）","doriru（onagazaru科）","nihonnzaru（onagazaru科）","buraxtuzazaru（onagazaru科）","berubextuto（onagazaru科）","manntohihi（onagazaru科）","manndoriru（onagazaru科）","sirotetenagazaru（tenagazaru科）","tinnpannziー（hito科）","higasigorira（hito科）","bonobo（hito科）","boruneoorannuーtann（hito科）","komonntupai（tupai科）","mareーhiyokezaru（hiyokezaru科）","anausagi（usagi科）","amaminokurousagi（usagi科）","ogurozixyaxtukuusagi（usagi科）","sumatorausagi（usagi科）","nihonnnousagi（usagi科）","nezaーranndodowaーhu（usagi科）","yukiusagi（usagi科）","kitanakiusagi（nakiusagi科）","akanezumi（nezumi科）","raxtuto（nezumi科）","madaraaguーti（aguーti科）","kanadayamaarasi（amerikayamaarasi科）","amerikabiーbaー（biーbaー科）","hadakadebanezumi（debanezumi科）","kuroharahamusutaー（kinugenezumi科）","zixyanngariannhamusutaー（kinugenezumi科）","noruuxeーreminngu（kinugenezumi科）","masukuraxtuto（kinugenezumi科）","takenezumi（mekuranezumi科）","nuーtoria（nuーtoria科）","paka（paka科）","orudokanngaruーnezumi（pokextutomausu科）","arupusumaーmoxtuto（risu科）","inndooorisu（risu科）","kitarisu（risu科）","keーpuaragezirisu（risu科）","simarisu（risu科）","nihonnmomonnga（risu科）","nihonnrisu（risu科）","pureーriーdoxtugu（risu科）","mikerisu（risu科）","musasagi（risu科）","suroーrorisu（rorisu科）","kapibara（tennzikunezumi科）","maーra（tennzikunezumi科）","tinntira（tinntira科）","bisukaーtixya（tinntira科）","tobiusagi（tobiusagi科）","kitamiyubitobinezumi（tobinezumi科）","keーputategamiyamaarasi（yamaarasi科）","yamabiーbaー（yamabiーbaー科）","yamane（yamane科）","azumamogura（mogura科）","himizu（mogura科）","pireneーdesumann（mogura科）","hosibanamogura（mogura科）","kawanezumi（togarinezumi科）","namiharinezumi（harinezumi科）","haitisorenodonn（sorenodonn科）","umadurakoumori（ookoumori科）","ogasawaraookoumori（ookoumori科）","siroherakoumori（herakoumori科）",
"nihonnusagikoumori（hinakoumori科）","oosennzannkou（sennzannkou科）","abisiniann（neko科）","amerikann・sixyoーtohea（neko科）","iriomoteyamaneko（neko科）","unnpixyou（neko科）","ooyamaneko（neko科）","oseroxtuto（neko科）","karakaru（neko科）","saーbaru（neko科）","sixyamu（neko科）","zixyagaranndexi（neko科）","zixyagaー（neko科）","sunaneko（neko科）","suhuxinnkusu（neko科）","tiーtaー（neko科）","tora（neko科）","himarayann（neko科）","hixyou（neko科）","pixyuーma（neko科）","perusixya（neko科）","manuruneko（neko科）","manntikann（neko科）","meinnkuーnn（neko科）","yukihixyou（neko科）","raionn（neko科）","aーdouruhu（haiena科）","kaxtusixyokuhaiena（haiena科）","butihaiena（haiena科）","ahurikazixyakouneko（zixyakouneko科）","kumaneko（zixyakouneko科）","hakubisinn（zixyakouneko科）","yoーroxtupazixenextuto（zixyakouneko科）","yamazixyakouzika（zixyakouzika科）","simasukannku（sukannku科）","simamannguーsu（mannguーsu科）","huxoxtusa（madagasukarumannguーsu科）","akagitune（inu科）","ahugannhaunndo（inu科）","ookami（inu科）","koyoーte（inu科）","siberiannhasukiー（inu科）","segurozixyaxtukaru（inu科）","sennto・baーnaーdo（inu科）","tategamiookami（inu科）","tanuki（inu科）","daxtukusuhunndo（inu科）","darumesiann（inu科）","tixyautixyau（inu科）","tiwawa（inu科）","tinn（inu科）","toipuーdoru（inu科）","doーberumann（inu科）","haiirogitune（inu科）","pagu（inu科）","papiyonn（inu科）","biーguru（inu科）","huxenextuku（inu科）","burudoxtugu（inu科）","hoxtukixyokugitune（inu科）","boruzoi（inu科）","pomeraniann（inu科）","yabuinu（inu科）","yoーkusixyaーteria（inu科）","raburadoーru・retoriーbaー（inu科）","rikaonn（inu科）","araiguma（araiguma科）","kinnkazixyuー（araiguma科）","zixyaianntopannda（kuma科）","tukinowaguma（kuma科）","namakeguma（kuma科）","higuma（kuma科）","hoxtukixyokuguma（kuma科）","mareーguma（kuma科）","meganeguma（kuma科）","rextusaーpannda（rextusaーpannda科）","anaguma（itati科）","okozixyo（itati科）","kuzuri（itati科）","nihonnitati（itati科）","nihonntenn（itati科）","minnku（itati科）","raxtuko（itati科）","raーteru（itati科）","uxextuderuazarasi（azarasi科）","kanikuiazarasi（azarasi科）","kitazouazarasi（azarasi科）","kurakakeazarasi（azarasi科）","gomahuazarasi（azarasi科）","zukinnazarasi（azarasi科）",
"zenigataazarasi（azarasi科）","tategotoazarasi（azarasi科）","baikaruazarasi（azarasi科）","hixyouazarasi（azarasi科）","wamonnazarasi（azarasi科）","otaria（asika科）","oxtutosei（asika科）","karihuxoruniaasika（asika科）","todo（asika科）","seiuti（seiuti科）","ahurikanoroba（uma科）","sabannnasimauma（uma科）","moukonouma（uma科）","mareーbaku（baku科）","minamiamerikabaku（baku科）","sirosai（sai科）","sumatorasai（sai科）","arupaka（rakuda科）","hitokoburakuda（rakuda科）","bikuーnixya（rakuda科）","hutakoburakuda（rakuda科）","rama（rakuda科）","inosisi（inosisi科）","babiruーsa（inosisi科）","higeinosisi（inosisi科）","moriinosisi（inosisi科）","kutiziropextukariー（pextukariー科）","mizumamezika（mamezika科）","okapi（kirinn科）","kirinn（kirinn科）","puronnguhoーnn（puronnguhoーnn科）","akasika（sika科）","ozirozika（sika科）","kixyonn（sika科）","sihuzou（sika科）","tonakai（sika科）","nihonnzika（sika科）","norozika（sika科）","herazika（sika科）","ahurikasuigixyuu（usi科）","aragiaorixtukusu（usi科）","arugari（usi科）","iranndo（usi科）","innpara（usi科）","oguronuー（usi科）","orixtukusu（usi科）","saiga（usi科）","sixyamoa（usi科）","siroiwayagi（usi科）","zixyakouusi（usi科）","sumatorakamosika（usi科）","seーburuannteroーpu（usi科）","taーkinn（usi科）","tomusonngazeru（usi科）","niara（usi科）","nihonnkamosika（usi科）","noyagi（usi科）","baxtuhuxaroー（usi科）","banntenn（usi科）","baーbarisiーpu（usi科）","buraxtukubaxtuku（usi科）","bonngo（usi科）","maーkoーru（usi科）","yaku（usi科）","yotudunoreiyou（usi科）","kaba（kaba科）","maxtukoukuzira（maxtukoukuzira科）","kokukuzira（kokukuzira科）","akaboukuzira（akaboukuzira科）","tutikuzira（akaboukuzira科）","semikuzira（semikuzira科）","zatoukuzira（nagasukuzira科）","sironagasukuzira（nagasukuzira科）","minnkukuzira（nagasukuzira科）","irowakeiruka（mairuka科）","okigonndou（mairuka科）","kamairuka（mairuka科）","sixyati（mairuka科）","semiiruka（mairuka科）","hanagonndou（mairuka科）","hanndouiruka（mairuka科）","mairuka（mairuka科）","isiiruka（nezumiiruka科）","sunameri（nezumiiruka科）","komaxtukou（komaxtukou科）","amazonnkawairuka（amazonnkawairuka科）","morumoxtuto（tenzikunezumi科）","horusutainn（usi科）","zebuー（usi科）","zixyaーziー（usi科）","merino（usi科）","kasimiayagi（usi科）","yoーkusixyaー（inosisi科）","hannpusixyaー（inosisi科）","minibuta（inosisi科）","siroiruka（ixtukaku科）","ixtukaku（ixtukaku科）"];
//植物
let pic_plant=["aberia（suikazura科）","abunome（oobako科）","abutironn（aoi科）","adann（takonoki科）","agapannsasu（higannbana科）","ainae（matinn科）","aisuranndopopi-（kesi科）","akabana（akabana科）","akamegasiwa（toudaigusa科）","akane（akane科）","akasia（mame科）","akaso（irakusa科）","akebi（akebi科）","akebonosou（rinndou科）","akigiri（siso科）","akikaramatu（kinnpouge科）","akinokirinnsou（kiku科）","akinonogesi（kiku科）","akkesisou（hiyu科）","akou（kuwa科）","amadokoro（kizikakusi科）","amaririsu（higannbana科）","amerikadeigo（mame科）","amerikahodoimo（mame科）","amerikaiwananntenn（tutuzi科）","amerikasenndanngusa（kiku科）","anemone（kinnpouge科）","aodamo（mokusei科）","aogiri（aoi科）","aoki（aoki科）","aomizu（irakusa科）","aosuge（kayaturigusa科）","arekayasi（yasi科）","aretinogiku（kiku科）","aretiuri（uri科）","arimaumanosuzukusa（umanosuzukusa科）","arinotougusa（arinotougusa科）","arusutoromeria（yurizuisenn科）","asagao（hirugao科）","asaza（mitugasiwa科）","asebi（tutuzi科）","atubakimigayorann（kizikakusi科）","atumorisou（rann科）","awagoke（oobako科）","ayame（ayame科）","azarea（tutuzi科）","azesuge（kayaturigusa科）","azetougarasi（azetougarasi科）","azumatumekusa（bennkeisou科）","azumayamaazami（kiku科）","ba-bena（kumatudura科）","baikaikarisou（megi科）","baikamo（kinnpouge科）","baikeisou（syurosou科）","begonia（syuukaidou科）","benibanaitiyakusou（tutuzi科）","bennkeisou（bennkeisou科）","biba-namu（rennpukusou科）","biora（sumire科）","biro-domouzuika（gomanohagusa科）","biwa（bara科）","biyouyanagi（otogirisou科）","bodaizyu（aoi科）","boke（bara科）","bonntennka（aoi科）","bonntokutade（tade科）","boronia（mikann科）","botannkusagi（siso科）","botannnekonomesou（yukinosita科）","botann（botann科）","bu-gennbiria（osiroibana科）","buddorea（gomanohagusa科）","budou（budou科）","buru-beri-（tutuzi科）","butakusa（kiku科）","daikonnsou（bara科）","daimonnzisou（yukinosita科）","daisagisou（rann科）","daiyamonndoriri-（higannbana科）","danngiku（siso科）","dannkoubai（kusunoki科）","daria（kiku科）","deizi-（kiku科）","doitutouhi（matu科）","dokudami（dokudami科）","doudanntutuzi（tutuzi科）","ebiduru（budou科）","ebine（rann科）","egonoki（egonoki科）","ehimeayame（ayame科）","enisida（mame科）","ennbisennnou（nadesiko科）","ennreisou（syurosou科）","ennzyu（mame科）","enokigusa（toudaigusa科）","enoki（asa科）","erika（tutuzi科）","ezorinndou（rinndou科）","ezosirone（siso科）","feizyoa（hutomomo科）","ga-bera（kiku科）","gagabuta（mitugasiwa科）","gagaimo（kyoutikutou科）","gama（gama科）","gannkubisou（kiku科）","gekkabizinn（sabotenn科）","gekkeizyu（kusunoki科）","gekkitu（mikann科）","gennge（mame科）","gennpeikusagi（siso科）","ginnbaika（hutomomo科）","ginnbaisou（azisai科）","ginnreika（sakurasou科）","ginnryousou（tutuzi科）","gisigisi（tade科）","gokiduru（uri科）","gomakusa（hamautubo科）","gomanohagusa（gomanohagusa科）","gonnzui（mitubautugi科）","gouso（kayaturigusa科）","goyouitigo（bara科）","gozenntatibana（mizuki科）","gumi（gumi科）","gunnbaiduru（oobako科）","gunnnaihuuro（huurosou科）","guraziorasu（ayame科）","guroriosa（inusahurann科）","gyoryuubai（hutomomo科）","gyoryuu（gyoryuu科）","habotann（aburana科）","hadakahoozuki（nasu科）","haedokusou（haedokusou科）","hagurosou（kitunenomago科）","hahakogusa（kiku科）","hainoki（hainoki科）","hakidamegiku（kiku科）","hakka（siso科）","hakobehoozuki（nasu科）","hakobe（nadesiko科）","hakumokurenn（mokurenn科）","hakusannhatazao（aburana科）","hakutyouge（akane科）","hakuunnboku（egonoki科）","hamabennkeisou（murasaki科）","hamabisi（hamabisi科）","hamabossu（sakurasou科）","hamabou（aoi科）","hamadaikonn（aburana科）","hamagou（siso科）","hamahatazao（aburana科）","hamakannzou（wasuregusa科）","hamamatuna（hiyu科）","hamanadesiko（nadesiko科）","hamaomoto（higannbana科）","hamasazi（isomatu科）","hamasuge（kayaturigusa科）","hamatumekusa（nadesiko科）","hamautubo（hamautubo科）","hamazeri（seri科）","hanabizekisyou（igusa科）","hanaikada（hanaikada科）","hanaikari（rinndou科）","hanamizuki（mizuki科）","hanamyouga（syouga科）","hananoki（mukurozi科）","hanasinobu（hanasinobu科）","hanaudo（seri科）","hanazekisyou（tisimazekisyou科）","hanazuou（mame科）","hanngesyou（dokudami科）","hannkatinoki（numamizuki科）","hannnoki（kabanoki科）","hariennzyu（mame科）","harii（kayaturigusa科）","hasibami（kabanoki科）","hasikagusa（akane科）","hasiridokoro（nasu科）","hatazao（aburana科）","hazenoki（urusi科）","he-be（oobako科）","hekusokazura（akane科）","heraoobako（oobako科）","heriotoro-pu（murasaki科）","hetukarinndou（rinndou科）","hiasinnsu（kizikakusi科）","hiberuthia（biwamodoki科）","hidakaennreisou（syurosou科）","hideriko（kayaturigusa科）","higannbana（higannbana科）","higotai（kiku科）","hiiraginanntenn（megi科）","hiiragi（mokusei科）","hikageinokozuti（hiyu科）","hikiyomogi（hamautubo科）","himarayasugi（matu科）","himegoyouitigo（bara科）","himehagi（himehagi科）","himehebiitigo（bara科）","himehiougizuisenn（ayame科）","himehuuro（huurosou科）","himekannsuge（kayaturigusa科）","himekikutabirako（kiku科）","himekugu（kayaturigusa科）","himemisohagi（misohagi科）","himemukasiyomogi（kiku科）","himenamiki（siso科）","himeodorikosou（siso科）","himerennge（bennkeisou科）","himesennnarihoozuki（nasu科）","himesirone（siso科）","himeyuri（yuri科）","himeziso（siso科）","hinagikyou（kikyou科）","hinanokannzasi（himehagi科）","hinanokinntyaku（himehagi科）","hinanosyakuzyou（hinanosyakuzyou科）","hinanousutubo（gomanohagusa科）","hiougi（ayame科）","hiperikamu（otogirisou科）","hirugao（hirugao科）","hirumusiro（hirumusiro科）","hiruzakitukimisou（akabana科）","hisi（misohagi科）","hitomotosusuki（kayaturigusa科）","hitorisizuka（sennryou科）","hitotubatago（mokusei科）","hituzigusa（suirenn科）","hoonoki（mokurenn科）","hoozuki（nasu科）","horutonoki（horutonoki科）","hosikusa（hosikusa科）","hosoaogeitou（hiyu科）","hosobahaguma（kiku科）","hosobahamaakaza（hiyu科）","hosobakogomegusa（hamautubo科）","hotarubukuro（kikyou科）","hotarui（kayaturigusa科）","hotarukazura（murasaki科）","hoteiaoi（mizuaoi科）","hotokenoza（siso科）","hototogisu（yuri科）","houkigi（hiyu科）","housennka（turihunesou科）","hozakitukinukisou（suikazura科）","hukiyamituba（seri科）","huki（kiku科）","hukkisou（tuge科）","hukugi（hukugi科）","hukuousou（kiku科）","hukusia（akabana科）","hukuzyusou（kinnpouge科）","huri-zia（ayame科）","husigurosennnou（nadesiko科）","hutabaaoi（umanosuzukusa科）","hutabamugura（akane科）","huusennkazura（mukurozi科）","huu（huu科）","huyou（aoi科）","huyusanngo（nasu科）","huziazami（kiku科）","huzibakama（kiku科）","huzihatazao（aburana科）","huzi（mame科）","ibokusa（tuyukusa科）","ibotanoki（mokusei科）","ibukitoranoo（tade科）","igahoozuki（nasu科）","iigiri（yanagi科）","ikarisou（megi科）","ikema（kyoutikutou科）","imokatabami（katabami科）","inamorisou（akane科）","inndogomunoki（kuwa科）","inubiwa（kuwa科）","inugarasi（aburana科）","inugoma（siso科）","inukouzyu（siso科）","inunohanahige（kayaturigusa科）","inutade（tade科）","inutoubana（siso科）","irakusa（irakusa科）","irohamomizi（mukurozi科）","isimikawa（tade科）","isogiku（kiku科）","isohusagi（hiyu科）","isunoki（mannsaku科）","itabikazura（kuwa科）","itadori（tade科）","itatisasage（mame科）","itibi（aoi科）","itii（itii科）","itirinnsou（kinnpouge科）","itiziku（kuwa科）","iwadaresou（kumatudura科）","iwagirisou（iwatabako科）","iwaityou（mitugasiwa科）","iwakagami（iwaume科）","iwanekonomesou（yukinosita科）","iwaninnzinn（seri科）","iwasenntousou（seri科）","iwasyazinn（kikyou科）","iwasyoubu（tisimazekisyou科）","iwatabako（iwatabako科）","iwautiwa（iwaume科）","iyohuuro（huurosou科）","iyokazura（kyoutikutou科）","i（igusa科）","ka-ne-syonn（nadesiko科）","kaikobaimo（yuri科）","kakinohagusa（himehagi科）","kakinoki（kakinoki科）","kakitubata（ayame科）","kakomahaguma（kiku科）","kakuremino（ukogi科）","kamiyatude（ukogi科）","kamomerann（rann科）","kanabikisou（byakudann科）","kanamemoti（bara科）","kanikoumori（kiku科）","kannna（kannna科）","kanokosou（suikazura科）","karahanasou（asa科）","karakusanazuna（aburana科）","karamatusou（kinnpouge科）","karamatu（matu科）","karamusi（irakusa科）","karasubisyaku（satoimo科）","karasunoenndou（mame科）","karasunogoma（aoi科）","karasuuri（uri科）","karasuzannsyou（mikann科）","karataneogatama（mokurenn科）","karatatibana（sakurasou科）","karatati（mikann科）","kariganesou（siso科）","karinn（bara科）","karu-na（tutuzi科）","karumia（tutuzi科）","kasiwabahaguma（kiku科）","kasiwa（buna科）","kasi（buna科）","katabami（katabami科）","katakuri（yuri科）","katennsou（irakusa科）","katura（katura科）","kawagokesou（kawagokesou科）","kawamidori（siso科）","kawaraakaza（hiyu科）","kawaraketumei（mame科）","kawaranadesiko（nadesiko科）","kawaraninnzinn（kiku科）","kawarasaiko（bara科）","kawarasuge（kayaturigusa科）","kayaturigusa（kayaturigusa科）","kaya（itii科）","kazaguruma（kinnpouge科）","kearitasou（hiyu科）","keibirann（kizikakusi科）","keyaki（nire科）","kibananoamana（yuri科）","kibananokawaramatuba（akane科）","kibusi（kibusi科）","kiduta（ukogi科）","kikasigusa（misohagi科）","kikuazami（kiku科）","kikumo（oobako科）","kikuzakiitige（kinnpouge科）","kikyou（kikyou科）","kingyosou（oobako科）","kinnbaisou（kinnpouge科）","kinnbaizasa（kinnbaizasa科）","kinnginnboku（suikazura科）","kinnkouka（nogirann科）","kinnmizuhiki（bara科）","kinnmokusei（mokusei科）","kirannsou（siso科）","kirenngesyouma（azisai科）","kirinnsou（bennkeisou科）","kirisimasyakuzyou（hinanosyakuzyou科）","kiri（kiri科）","kisasage（nouzennkazura科）","kisumire（sumire科）","kitizyousou（kizikakusi科）","kitunenokamisori（higannbana科）","kitunenomago（kitunenomago科）","kiturihune（turihunesou科）","kiuihuru-tu（matatabi科）","kiyosumiutubo（hamautubo科）","kizikakusi（kizikakusi科）","kizimusiro（bara科）","kizyorann（kyoutikutou科）","kobagibousi（kizikakusi科）","kobananabewari（byakubu科）","kobanokamomeduru（kyoutikutou科）","kobanozuina（zuina科）","kobusi（mokurenn科）","kodemari（bara科）","koitiyakusou（tutuzi科）","kokemomo（tutuzi科）","kokeotogiri（otogirisou科）","kokerinndou（rinndou科）","komikannsou（komikannsou科）","komurasaki（siso科）","konara（buna科）","konisikisou（toudaigusa科）","konnronnka（akane科）","korutikamu（inusahurann科）","kosikagiku（kiku科）","kosiogama（hamautubo科）","kosumosu（kiku科）","kotoneasuta-（bara科）","kouboumugi（kayaturigusa科）","kouhone（suirenn科）","kourinnka（kiku科）","kourinntannpopo（kiku科）","kouyabouki（kiku科）","kouyamaki（kouyamaki科）","kozyuzusuge（kayaturigusa科）","kufea（misohagi科）","kugaisou（oobako科）","kuko（nasu科）","kumaside（kabanoki科）","kumatudura（kumatudura科）","kumorann（rann科）","kurara（mame科）","kurematisu（kinnpouge科）","kurinnsou（sakurasou科）","kurisumasuro-zu（kinnpouge科）","kuri（buna科）","kuroganemoti（motinoki科）","kurokkasu（ayame科）","kurokumosou（yukinosita科）","kuromozi（kusunoki科）","kuroyatusirorann（rann科）","kurumabana（siso科）","kurumi（kurumi科）","kusaazisai（azisai科）","kusahuzi（mame科）","kusanagiogoke（kyoutikutou科）","kusanoou（kesi科）","kusaredama（sakurasou科）","kusasugikazura（kizikakusi科）","kusayatude（kiku科）","kusoninnzinn（kiku科）","kusunoki（kusunoki科）","kutinasigusa（hamautubo科）","kutinasi（akane科）","kuwagatasou（oobako科）","kuwakusa（kuwa科）","kuzu（mame科）","kyoutikutou（kyoutikutou科）","ma-garetto（kiku科）","maidurusou（kizikakusi科）","maki（maki科）","mamedutarann（rann科）","mamekamiture（kiku科）","manekigusa（siso科）","manndevira（kyoutikutou科）","mannryou（sakurasou科）","mannsaku（mannsaku科）","manntema（nadesiko科）","mari-go-rudo（kiku科）","marubanoki（mannsaku科）","marubatyarumerusou（yukinosita科）","maruminourusi（toudaigusa科）","masaki（nisikigi科）","matubagiku（hamamizuna科）","matukazesou（mikann科）","matumotosennnou（nadesiko科）","matumusisou（suikazura科）","medohagi（mame科）","megi（megi科）","megusurinoki（mukurozi科）","mehaziki（siso科）","mehirugi（hirugi科）","menamomi（kiku科）","merareuka（hutomomo科）","metakarakou（kiku科）","mikadukigusa（kayaturigusa科）","mikosigaya（kayaturigusa科）","mikuri（mikuri科）","miminagusa（nadesiko科）","minntobussyu（siso科）","misimasaiko（seri科）","misogawasou（siso科）","misohagi（misohagi科）","misumisou（kinnpouge科）","mitiyanagi（tade科）","mitubaourenn（kinnpouge科）","mitugasiwa（mitugasiwa科）","mitumata（zinntyouge科）","miyakogusa（mame科）","miyamahotarukazura（murasaki科）","miyamakatabami（katabami科）","miyamasirasuge（kayaturigusa科）","miyamatamurasou（siso科）","mizohoozuki（haedokusou科）","mizokakusi（kikyou科）","mizosoba（tade科）","mizuaoi（mizuaoi科）","mizubasyou（satoimo科）","mizuhiki（tade科）","mizukinnbai（akabana科）","mizuki（mizuki科）","mizuotogiri（otogirisou科）","mizutamasou（akabana科）","mizutoranoo（siso科）","mokkoku（tubaki科）","mokugennzi（mukurozi科）","mokumaou（mokumaou科）","mokusennna（mame科）","momizigasa（kiku科）","morokosisou（sakurasou科）","motinoki（motinoki科）","mousenngoke（mousenngoke科）","mube（akebi科）","mukagosou（rann科）","mukuge（aoi科）","murasakikemann（kesi科）","murasakimimikakigusa（tanukimo科）","murasakinanahuzi（mame科）","murasakinigana（kiku科）","murasakisennburi（rinndou科）","murasaki（murasaki科）","musikusa（oobako科）","musitorinadesiko（nadesiko科）","musitorisumire（tanukimo科）","musukari（kizikakusi科）","musyarinndou（siso科）","nabena（suikazura科）","nabewari（byakubu科）","nagabanoisimotisou（mousenngoke科）","nagabonosirowaremokou（bara科）","nagahanasumire（sumire科）","nagamihinagesi（kesi科）","nagiikada（kizikakusi科）","naginatakouzyu（siso科）","nagi（maki科）","nanakamado（bara科）","naniwazu（zinntyouge科）","nannbanngiseru（hamautubo科）","nannbusou（megi科）","nannkinnhaze（toudaigusa科）","nanntennhagi（mame科）","natume（kuroumemodoki科）","natutubaki（tubaki科）","nazuna（aburana科）","nekonomesou（yukinosita科）","nekonosita（kiku科）","nemofira（murasaki科）","nemunoki（mame科）","nenasikazura（hirugao科）","nezibana（rann科）","nezumimoti（mokusei科）","nigakusa（siso科）","nigana（kiku科）","nikkei（kusunoki科）","nioibannmaturi（nasu科）","nioisyurorann（kizikakusi科）","nipponninunohige（hosikusa科）","nira（negi科）","nire（nire科）","nisikigi（nisikigi科）","nisikisou（toudaigusa科）","nitinitisou（kyoutikutou科）","niwahuzi（mame科）","niwatoko（rennpukusou科）","niwazekisyou（ayame科）","noazami（kiku科）","noazuki（mame科）","nobinetidori（rann科）","nobiru（negi科）","nobotann（nobotann科）","nobudou（budou科）","nobuki（kiku科）","nodisya（suikazura科）","nogeitou（hiyu科）","nogirann（nogirann科）","noharanadesiko（nadesiko科）","nokogirisou（kiku科）","nosasage（mame科）","nougouitigo（bara科）","nourusi（toudaigusa科）","nouzennkazura（nouzennkazura科）","nozigiku（kiku科）","numadaikonn（kiku科）","nurude（urusi科）","nyohoutidori（rann科）","odorikosou（siso科）","okahiziki（hiyu科）","okamezasa（ine科）","okatoranoo（sakurasou科）","okera（kiku科）","okinagusa（kinnpouge科）","ominaesi（suikazura科）","onamomi（kiku科）","oninoyagara（rann科）","onisimotuke（bara科）","oniyuri（yuri科）","oobako（oobako科）","oohutabamugura（akane科）","ooinunohuguri（oobako科）","ookanadamo（totikagami科）","ookinnreika（suikazura科）","ookinutasou（akane科）","oomatuyoigusa（akabana科）","oomomizigasa（kiku科）","ooreizinnsou（kinnpouge科）","oosennnari（nasu科）","ooyamahusuma（nadesiko科）","ori-bu（mokusei科）","otogirisou（otogirisou科）","otokoesi（suikazura科）","otokoyouzome（rennpukusou科）","oubai（mokusei科）","ourenn（kinnpouge科）","oyamabokuti（kiku科）","ozigisou（mame科）","pannzi-（sumire科）","passyonnhuru-tu（tokeisou科）","penntasu（akane科）","petyunia（nasu科）","pirakannsa（bara科）","po-tyuraka（suberihiyu科）","poinnsetia（toudaigusa科）","popura（yanagi科）","purimura（sakurasou科）","rairakku（mokusei科）","raisuhurawa-（kiku科）","ranannkyurasu（kinnpouge科）","ranntana（kumatudura科）","raseitasou（irakusa科）","rasyoumonnkazura（siso科）","remonnegoma（siso科）","renngesyouma（kinnpouge科）","renngyou（mokusei科）","rennpukusou（rennpukusou科）","rennrisou（mame科）","rikyuubai（bara科）","rinaria（oobako科）","rinndou（rinndou科）","rinnnesou（suikazura科）","ro-zumari-（siso科）","roberia（kikyou科）","roubai（roubai科）","ruiyoubotann（megi科）","rukousou（hirugao科）","rurihakobe（sakurasou科）","rurimaturi（isomatu科）","rurisou（murasaki科）","rurisyakuzyou（hinanosyakuzyou科）","ruritoranoo（oobako科）","ryoubu（ryoubu科）","ryuukinnka（kinnpouge科）","sabanoo（kinnpouge科）","sadekusa（tade科）","sagigoke（haedokusou科）","saihairann（rann科）","saikati（mame科）","sakaki（mokkoku科）","sakanerann（rann科）","sakuraisou（sakuraisou科）","sakurarann（kyoutikutou科）","sakurasoumodoki（sakurasou科）","sakurasou（sakurasou科）","sanekazura（matubusa科）","sanngozyu（suikazura科）","sannkayou（megi科）","sannsyuyu（mizuki科）","sannzasi（bara科）","sansyou（mikann科）","sarasinasyouma（kinnpouge科）","sarubia（siso科）","sarusuberi（misohagi科）","satumainamori（akane科）","sawagikyou（kikyou科）","sawarurisou（murasaki科）","sazannka（tubaki科）","saziomodaka（omodaka科）","seitakasuzumusisou（rann科）","seiyouaburana（aburana科）","seiyouhiiragi（motinoki科）","seiyouhirugao（hirugao科）","seiyoumizakura（bara科）","seiyouninnzinnboku（siso科）","sekisyoumo（totikagami科）","sennburi（rinndou科）","senndann（senndann科）","sennninnsou（kinnpouge科）","sennnitikou（hiyu科）","sennryou（sennryou科）","senntousou（seri科）","seribahiennsou（kinnpouge科）","seribasiogama（hamautubo科）","setubunnsou（kinnpouge科）","si-kuwa-sa-（mikann科）","sibazakura（hanasinobu科）","sidekobusi（mokurenn科）","sidesyazinn（kikyou科）","sikimi（matubusa科）","sikuramenn（sakurasou科）","simatoneriko（mokusei科）","simobasira（siso科）","simokurenn（mokurenn科）","simotukesou（bara科）","simotuke（bara科）","sinagawahagi（mame科）","sinanoki（aoi科）","sinnnouyasi（yasi科）","siode（siode科）","sionn（kiku科）","sirahigesou（nisikigi科）","siraitosou（syurosou科）","sirakaba（kabanoki科）","siraneaoi（kinnpouge科）","sirobanahannsyouduru（kinnpouge科）","sirobanakamomeduru（kyoutikutou科）","sirobananekonomesou（yukinosita科）","sirodamo（kusunoki科）","sironosenndanngusa（kiku科）","sirotumekusa（mame科）","siroumaasatuki（negi科）","siroyomogi（kiku科）","siroza（hiyu科）","sitakisou（kyoutikutou科）","sokuzu（rennpukusou科）","sotetu（sotetu科）","soyogo（motinoki科）","suberihiyu（suberihiyu科）","sudazii（buna科）","sugi（hinoki科）","suguri（suguri科）","sui-toarissamu（aburana科）","sui-topi-（mame科）","suiba（tade科）","suikazura（suikazura科）","suisenn（higannbana科）","sumo-kuturi-（urusi科）","sunabikisou（murasaki科）","sunaduru（kusunoki科）","suzukakenoki（suzukakenoki科）","suzukouzyu（siso科）","suzumenoyari（igusa科）","suzumeuri（uri科）","suzumusibana（kitunenomago科）","suzurann（kizikakusi科）","syaga（ayame科）","syakobasabotenn（sabotenn科）","syakunage（tutuzi科）","syakuyaku（botann科）","syakuzyousou（tutuzi科）","syarinnbai（bara科）","syasyannbo（tutuzi科）","syoubu（syoubu科）","syouzyoubakama（syurosou科）","syunnrann（rann科）","syuro（yasi科）","syusurann（rann科）","tabunoki（kusunoki科）","tagarasi（kinnpouge科）","tagasodesou（nadesiko科）","taisannboku（mokurenn科）","takanehannsyouduru（kinnpouge科）","takasaburou（kiku科）","takatoudai（toudaigusa科）","takenigusa（kesi科）","takesimarann（yuri科）","takonoasi（yukinosita科）","tamanokannaoi（umanosuzukusa科）","tanigikyou（kikyou科）","tannkirimame（mame科）","tanukimo（tanukimo科）","tanukinosyokudai（tanukinosyokudai科）","taranoki（ukogi科）","tateyamagiku（kiku科）","tatiaoi（aoi科）","tatidokoro（yamanoimo科）","tatigasiwa（kyoutikutou科）","tatikamebasou（murasaki科）","tatimo（arinotougusa科）","tatunamisou（siso科）","teikakazura（kyoutikutou科）","teisyousou（kiku科）","tennninnsou（siso科）","tidakesasi（yukinosita科）","tigoyuri（inusahurann科）","tinomegusa（ukogi科）","titikogusa（kiku科）","tobera（tobera科）","togakusisou（megi科）","tokeisou（tokeisou科）","tokinnsou（kiku科）","tokiwamannsaku（mannsaku科）","tomoesou（otogirisou科）","torenia（azena科）","torikabuto（kinnpouge科）","tosamizuki（mannsaku科）","totibaninnzinn（ukogi科）","totikagami（totikagami科）","totinoki（mukurozi科）","toubana（siso科）","toudaigusa（toudaigusa科）","toukaede（mukurozi科）","tubaki（tubak科）","tubameomoto（yuri科）","tubokusa（seri科）","tuge（tuge科）","tukinukisou（suikazura科）","tukubanesou（syurosou科）","tukusihagi（mame科）","tumatorisou（sakurasou科）","tumerennge（bennkeisou科）","turibana（nisikigi科）","turiganeninnzinn（kikyou科）","turihunesou（turihunesou科）","turisyusurann（rann科）","turuaridoosi（akane科）","turubo（kizikakusi科）","turuhananasu（nasu科）","turumao（irakusa科）","turumasaki（nisikigi科）","turuna（hamamizuna科）","turuninnzinn（kikyou科）","tururinndou（rinndou科）","turuumemodoki（nisikigi科）","tuta（budou科）","tutiakebi2（rann科）","tutiakebi（rann科）","tutitorimoti（tutitorimoti科）","tuyukusa（tuyukusa科）","tyabohototogisu（yuri科）","tyabotumerennge（bennkeisou科）","tyanoki（tubaki科）","tyokuzakimizu（irakusa科）","tyousennasagao（nasu科）","tyousenngominn（matubusa科）","tyouzisou（kyoutikutou科）","tyouzitade（akabana科）","ubasinoki（hutomomo科）","ubayuri（yuri科）","udo（ukogi科）","uesutorinngia（siso科）","ukikusa（satoimo科）","umagoyasi（mame科）","umanomituba（seri科）","umebatisou（nisikigi科）","umegasasou（tutuzi科）","umemodoki（motinoki科）","umimidori（sakurasou科）","unnrann（oobako科）","urasimasou（satoimo科）","usuyukisou（kiku科）","utubogusa（siso科）","utugi（azisai科）","uwamizuzakura（bara科）","wakkusuhurawa-（hutomomo科）","waremokou（bara科）","warunasubi（nasu科）","wasabi（aburana科）","wasurenagusa（murasaki科）","watasuge（kayaturigusa科）","watigaisou（nadesiko科）","yabukannzou（wasuregusa科）","yabukarasi（budou科）","yabumame（mame科）","yabumao（irakusa科）","yabumyouga（tuyukusa科）","yaburann（kizikakusi科）","yaburegasamodoki（kiku科）","yaburegasa（kiku科）","yadorigi（byakudann科）","yadorihukanoki（ukogi科）","yaemugura（akane科）","yagurumagiku（kiku科）","yakkosou（yakkosou科）","yakouboku（nasu科）","yakusimaotogiri（otogirisou科）","yamaai（toudaigusa科）","yamaazisai（azisai科）","yamabousi（mizuki科）","yamabukisou（kesi科）","yamabukisyouma（bara科）","yamabuki（bara科）","yamaguwa（kuwa科）","yamahahako（kiku科）","yamahakka（siso科）","yamahanasou（yukinosita科）","yamahoozuki（nasu科）","yamainoimo（yamanoimo科）","yamakitunenobotann（kinnpouge科）","yamamomo（yamamomo科）","yamaodamaki（kinnpouge科）","yamarakkyou（negi科）","yamasyakuyaku（botann科）","yamatogusa（akane科）","yamayuri（yuri科）","yanagirann（akabana科）","yanagisubuta（totikagami科）","yanagitoranoo（sakurasou科）","yaseutubo（hamautubo科）","yasyabusi（kabanoki科）","yatude（ukogi科）","yatusirosou（kikyou科）","yawatasou（yukinosita科）","yomogi（kiku科）","yourakurann（rann科）","yousyuyamagobou（yamagobou科）","yu-kari（hutomomo科）","yukimibana（kitunenomago科）","yukinosita（yukinosita科）","yukiyanagi（bara科）","yukizasa（kizikakusi科）","yurinoki（mokurenn科）","yuusuge（wasuregusa科）","yuzuriha（toudaigusa科）","yuzu（mikann科）","zaihuriboku（bara科）","zakurosou（zakurosou科）","zakuro（misohagi科）","zazennsou（satoimo科）","zeniaoi（aoi科）","zenibaaoi（aoi科）","zeraniumu（huurosou科）","zinia（kiku科）","zinntyouge（zinntyouge科）","zudayakusyu（yukinosita科）","zyakousou（siso科）","zyanohige（kizikakusi科）","zyasuminn（mokusei科）","zyourouhototogisu（yuri科）","zyuunihitoe（siso科）"]
               

let pic_title=["images/taitoru.jpeg","images/taitoru鳥.jpeg","images/タイトル_哺乳類.jpg"]

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
let list_top_y=["normal_m","hard_m","rule"]; //トップページにのみ必要なもの
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
    document.getElementById("pic_a").setAttribute("data-lightbox", "center");
    document.getElementById("pic_a").href=get_url(pic[i]);
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
    else if(change_count==2){
        url="animal/"+list_name+".jpg";

    }
    else{
        url="plant/"+list_name+".jpg";

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
    document.getElementById("pic_a").setAttribute("data-lightbox", "center");
    document.getElementById("pic_a").href=get_url(pic[i]);
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
    if(mondai=="タテキン"){
        change();
        mondai=5;
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
        document.getElementById("pic").src = pic_title[2];
        change_count=2;
    }
    //問題が哺乳類なら
    else if(change_count==2){
        pic=Array.from(pic_plant);
        alert("問題を植物にしました！");
        change_count=3;
    }
    else{
        pic=Array.from(pic_fish);
        alert("問題を魚類にしました！");
        document.getElementById("pic").src = pic_title[0];
        change_count=0;
    }

}

//ローマ字をカタカナに変換
var roman2hiragana = {
    'a':'あ', 'i':'い', 'u':'う', 'e':'え', 'o':'お','kka': 'っか',
    'kki': 'っき',
    'kku': 'っく',
    'kke': 'っけ',
    'kko': 'っこ',
    'ssa': 'っさ',
    'ssi': 'っし',
    'ssu': 'っす',
    'sse': 'っせ',
    'sso': 'っそ',
    'tta': 'った',
    'tti': 'っち',
    'ttu': 'っつ',
    'tte': 'って',
    'tto': 'っと',
    'ccha': 'っちゃ',
    'cchi': 'っち',
    'cchu': 'っちゅ',
    'cche': 'っちぇ',
    'ccho': 'っちょ',
    'ppa': 'っぱ',
    'ppi': 'っぴ',
    'ppu': 'っぷ',
    'ppe': 'っぺ',
    'ppo': 'っぽ',
    'bba': 'っば',
    'bbi': 'っび',
    'bbu': 'っぶ',
    'bbe': 'っべ',
    'bbo': 'っぼ',
    'dda': 'っだ',
    'ddi': 'っぢ',
    'ddu': 'っづ',
    'dde': 'っで',
    'ddo': 'っど',
    'gga': 'っが',
    'ggi': 'っぎ',
    'ggu': 'っぐ',
    'gge': 'っげ',
    'ggo': 'っご',
    'jja': 'っじゃ',
    'jji': 'っじ',
    'jju': 'っじゅ',
    'jje': 'っじぇ',
    'jjo': 'っじょ',
    'zza': 'っざ',
    'zzi': 'っじ',
    'zzu': 'っず',
    'zze': 'っぜ',
    'zzo': 'っぞ',
    'hhya': 'っひゃ',
    'hhyu': 'っひゅ',
    'hhyo': 'っひょ',
    'ffya': 'っふゃ',
    'ffyu': 'っふゅ',
    'ffyo': 'っふょ',
    'vva': 'っゔぁ',
    'vvi': 'っゔぃ',
    'vvu': 'っゔ',
    'vve': 'っゔぇ',
    'vvo': 'っゔぉ',
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
        } 
        else if (/^([^n])\1$/.test(match[0])) {
          hiragana += match[0];
        } 
        else {
          hiragana += table[match[0]];
        }
        i += match[0].length - 1;
      } else {
        hiragana += roman[i];
      }
    }
    return hiraToKana(hiragana);
  }

function show(){
    if(change_count==0){
        location.href = "https://adazakuraa.github.io/quiz/fish_list.html";
    }
    if(change_count==1){
        location.href = "https://adazakuraa.github.io/quiz/bird_list.html";
    }
    if(change_count==2){
        location.href = "https://adazakuraa.github.io/quiz/animal_list.html";
    }
}
