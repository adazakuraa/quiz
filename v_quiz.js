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
let pic_plant=["niwazekisyou(ayame科)","syaga(ayame科)","hatakenira(higannbana科)","hananira(higannbana科)","ooamana(kizikakusi科)","tokiwatuyukusa(tuyukusa科)","suzumenoyari(igusa科)","tigaya(ine科)","nagamihinagesi(kesi科)","mekisikomannnenngusa(bennkeisou科)","miyakogusa(mame科)","karasunoenndou(mame科)","rengesou(mame科)","imokatabami(katabami科)","katabami(katabami科)","toudaigusa(toudaigusa科)","tanetukebana(aburana科)","syokatusai(aburana科)","seiyouaburana(aburana科)","nazuna(aburana科)","hakobe(nadesiko科)","tumekusa(nedesiko科)","kyuurigusa(murasaki科)","hotokenoza(siso科)","himeodorikosou(siso科)","tokiwahaze(sagigoke科)","tutabaunnrann(oobako科)","matubaunnrann(oobako科)","hurasabasou(oobako科)","ooinunohuguri(oobako科)","seiyoutannpopo(kiku科)","hahakogusa(kiku科)","nogesi(kiku科)","haruzionn(kiku科)","koonitabirako(kiku科)","onitabirako(kiku科)","butana(kiku科)","zisibari(kiku科)"]

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
    else if(change_count==2{
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
    if(mondai=="あ"){
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
