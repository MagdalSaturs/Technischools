import React from 'react';
import './Biologia.scss';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

const Biologia = () => {

    return (
        <>
            <div className='Skladniki-pokarmowe'>
                <h1>Składniki pokarmowe</h1>
                <h2>Białka</h2>
                <p>Główny budulec organizmu</p>
                <p>Białka są najważniejszym elementem budującym komórki i tkanki</p>
                <h3>Funkcje białek</h3>
                <p>Budulcowa</p>
                <p>Regulacja przebiegu procesów</p>
                <p>Transport substancji</p>
                <h4>Przykłady białek</h4>
                <p>Chociaż poszczególne pokarmy roślinne zawierają białka niepełnowartościowe,
                    to jeżeli połączymy je ze sobą, możemy dostarczać organizmowi wszystkich niezbędnych
                    aminokwasów. Na przykład pełen zestaw aminokwasów daje połączenie ryżu z fasolą po meksykańsku
                    czy pełnoziarnistej pszenne bułki z sezamem i masłem orzechowym
                </p>
                <img src='https://0701.static.prezi.com/preview/v2/2p2utnwi3ninpnnwc6jyajd2nh6jc3sachvcdoaizecfr3dnitcq_3_0.png' alt='Białka' />
                <h2>Cukry</h2>
                <p>Cukry - główne źródło energii</p>
                <p>Cukry (węglowodany) to związki,  których podstawową funkcją jest dostarczanie organizmowi energii</p>
                <h3>Funkcje cukrów</h3>
                <p>Główną funkcją cukrów jest dostarczanie organizmowi energii</p>
                <p>Funkcja zapasowa (glikogen)</p>
                <h4>Przykłady cukrów</h4>
                <p>Cukry proste (monosacharydy) - należą do nich np.. Glukoza, fruktoza i galaktoza. Ich źródłem są głównie owoce</p>
                <p>Dwucukry (disacharydy) - to cukry złożone z dwóch cukrów prostych, np.. Sacharoza, laktoza (cukier mleczny) i mitoza.
                    Występują głównie w słodyczach i nabiale</p>
                <p>Wielocukry (polisacharydy) - to cukry złożone z wielu cząsteczek cukrów prostych, np.. Skrobia. Znajdują się m.in.
                    w produktach zbożowych, kaszach i makaronach</p>
                <img src='https://motywator.tv/wp-content/uploads/2020/08/PODZIA%C5%81-W%C4%98GLOWODAN%C3%93W-819x1024.png' alt='Cukry' />
                <h2>Tłuszcze</h2>
                <p>Tłuszcze - materiały zapasowe</p>
                <p>Tłuszcze to przede wszystkim materiały zapasowe dostarczające energii, gdy zabraknie cukrów</p>
                <h3>Funkcje tłuszczy</h3>
                <p>Funkcją tłuszczy jest głównie dostarczanie energii, gdy zabraknie cukrów</p>
                <h1>Znaczenie wody dla organizmu człowieka</h1>
                <p>Jako uniwersalny rozpuszczalnik jest nośnikiem substancji odżywczych, elektrolitów i produktów przemiany materii.
                    Tworzy środowisko dla procesów życiowych zachodzących w organizmie</p>
                <p>O ważnej roli wody w organizmie człowieka świadczy między innymi jej udział w procesach trawienia i wchłaniania oraz wydalania,
                    a także w procesach regulacji gospodarki wodno-elektrolitowej i kwasowo-zasadowej organizmu. Odpowiednie nawodnienie organizmu
                    zapewnia utrzymanie stałej temperatury ciała i prawidłowy przebieg funkcji życiowych. Organizm człowieka nie jest w stanie
                    magazynować większych ilości wody, dlatego musi być ona dostarczana regularnie</p>
                <p>Zapotrzebowanie na wodę wzrasta przy podwyższonej temperaturze i obniżonej wilgotności otoczenia,
                    ponieważ w tych warunkach tracimy z potem więcej wody. W niskiej temperaturze również zaleca się większe spożycie wody,
                    ponieważ rosną wtedy jej straty związane z wyższym wydatkiem energetycznym oraz wydychaniem pary wodnej. Podczas zwiększonej
                    aktywności fizycznej większe spożycie wody jest konieczne ze względu na większe ilości wody wydalanej z potem i przez płuca</p>
                <p>Zapotrzebowanie na płyny w organizmie człowieka zwiększa się wraz ze wzrostem wartości energetycznej diety,
                    ponieważ organizm musi metabolizować większe ilości składników odżywczych. Dodatkowe znaczenie ma również udział
                    składników pokarmowych w diecie. Zapotrzebowanie na wodę w organizmie człowieka jest zróżnicowane u poszczególnych
                    osób i zależy od różnych czynników, takich jak:</p>
                <li>rodzaj pożywienia</li>
                <li>temperatura otoczenia</li>
                <li>aktywność fizyczna</li>
                <img src='https://static.zpe.gov.pl/portal/f/res-minimized/RBOUFvmv88SKu/3/1ODrVDMGRZneWBFCHNuwwtaldnR0DXdN.png' alt='tłuszcze' width='50%' />
                <h1>Rola i funkcje witamin</h1>
                <h2>Co to są witamin i jak działają?</h2>
                <p>Witaminy - związki organiczne, niezbędne dla człowieka, ale których ludzki organizm nie potrafi sam wytwarzać.
                    Wyjątki to witamina D, powstają w skórze pod wpływam promieni społecznych i witamina K, która częściowo jest wytwarzania
                    przez bakterie żyjące w jelicie grubym.</p>
                <p>Witaminy dzielimy na dwie grupy:</p>
                <li>rozpuszczalne w tłuszczach - A, D, E, K</li>
                <li>rozpuszczalne w wodzie - C i grupa witamin B: B1, B2, B3, B6, B12</li>
                <h3>Do czego służą witaminy i co się dzieje gdy mamy ich za mało?</h3>
                <table>
                    <tr>
                        <th>Rozpuszczalne w tłuszczach</th>
                        <th>Rola</th>
                        <th>Skutku niedoboru</th>
                    </tr>
                    <tr>
                        <td>Witamina A → retinol i pochodne</td>
                        <td>Budulec komórek nabłonkowych</td>
                        <td>Zahamowanie wzrostu, choroby skóry (rogowacenie, tłuszczenie, itp.), choroby oczu
                            (kurza ślepota, zespół suchego oka, itp.)</td>
                    </tr>
                    <tr>
                        <td>Witamina D → cholekalcyferol</td>
                        <td>Wchłanianie wapnia w jelitach i zapobieganie krzywicy, zmniejszenie ryzyka wstąpienia złamań,
                            szczególnie ważne dostarczanie po urazach (odbudowanie tkanki chrzęstnej i kostnej)</td>
                        <td>Osteoporoza, krzywicza, zmniejszona odporność organizmu</td>
                    </tr>
                    <tr>
                        <td>Witaminy E → tokoferol</td>
                        <td>Ochrona komórek: zapobieganie utleniania tłuszczy, ochrona przed uszkodzeniem przez wolne rodniki.
                            Działa antyoksydacyjnie, zapobiega starzeniu i poprawia, zapobiega powstaniu nowotworów</td>
                        <td>Osłabienie i zanik mięśni, niedokrwistość, oznaki starzenia się skóry, zmniejszona odporność organizmu</td>
                    </tr>
                    <tr>
                        <td>Witamina K → filokalcyferol/filochinon</td>
                        <td>Wpływ na krzepliwość krwi i wzrost kości. Udowodniono związek między witaminą K i
                            zrzeszotnieniem kości związane z wiekiem (osteoporoza)</td>
                        <td>Zaburzenia krzepnięcia krwi, skłonność do krwawień</td>
                    </tr>
                </table>
                <h3>A:</h3>
                <img src='https://www.wapteka.pl/blog_zdjecia/witamina-a-wlasciwosci-i-zrodla-co-moze-powodowac-niedobor-lub-nadmiar-witaminy-a.jpg' alt='witamina-a' width='50%' />
                <h3>D:</h3>
                <img src='https://www.bcaa.pl/pf/72/1333-a.jpg' alt='witamina-d' width='50%' />
                <h3>E:</h3>
                <img src='https://www.bestbody.com.pl/blog/wp-content/uploads/2020/01/Witamina-E-1024x664.jpg' alt='witamina-e' width='50%' />
                <h3>K:</h3>
                <img src='https://diag1.fra1.digitaloceanspaces.com/wp-content/uploads/sites/5/2022/05/13105920/Witamina-K-jakie-ma-znaczenie-dla-organizmu-Skutki-niedoboru-560x534.jpg' alt='witamina-k' width='50%' />
                <h3>Do czego nam służą witaminy co sie dzieje gdy mamy ich za mało?</h3>
                <table>
                    <tr>
                        <th>Rozpuszcane w wodzie</th>
                        <th>Rola</th>
                        <th>Skutki niedoboru</th>
                    </tr>
                    <tr>
                        <td>Witamina B1 → tiamina</td>
                        <td>Odpowiada za metabolizm cukrów</td>
                        <td>Nietraweinie niektórych substancji, które gromadzą się w tkankach, prowadzące do zatrucia, grzybicy stóp,
                            utraty wrażliwości stóp, obrzęków, osłabienia mięśni, skóry i serca</td>
                    </tr>
                    <tr>
                        <td>Witamina B2 → rybofawina</td>
                        <td>Odpowiada za metabolizm tłuszczów i białek i za dekoksykację w wątrobie</td>
                        <td>Zajady, zapalenie warg, języka, światłowstręt, problemy z cerą i trawieniem</td>
                    </tr>
                    <tr>
                        <td>Witamina B3 → Niacyna, witamina PP</td>
                        <td>Wspiera krążenie krwi, obniża ciśnienie, poziom cholesterolu i trójgicerydów, łagodzi zaburzenia trawienia</td>
                        <td>Lekki niedobór - bezsenność, utrata łaknienia, bóle brzucha. Poważny niedobór wywołuje pelagrę (utrara masy ciała,
                            zaburzenia trawienia, zapalenia skóry i demencja (zapominanie))</td>
                    </tr>
                    <tr>
                        <td>Witamina B6 → pirydoksyna</td>
                        <td>Odpowiada za metabolizm aminokwasów, chroni trzustkę, odgrywa ważną rolę w wytwarzaniu przeciwciał i zapobieganiu miażdżycy</td>
                        <td>Podrażnienie nerwowo-mięśniowe (drgania powiek, u dzieci - skurcze), zapominanie, depresja, zapalenie błony śluzowej jamy ustnej</td>
                    </tr>
                    <tr>
                        <td>Witamina B9 → kwas foliowy</td>
                        <td>Synteza kwasów nukleinowych, z których powstaje DNA, releguje funkcjonowanie</td>
                        <td></td>
                    </tr>
                </table>
                <h3>B1:</h3>
                <img src='https://www.wapteka.pl/blog_zdjecia/witamina-b1-tiamina-do-czego-jest-potrzebna-jakie-sa-objawy-niedoboru-i-nadmiaru-witaminy-b1.jpg' alt='witamina-b1' width='50%' />
                <h3>B2:</h3>
                <img src='https://zdrowie.tvn.pl/media/cache/content/witamina-b2-jpg.jpg' alt='witamina-b2' width='50%'/>
                <h3>B3:</h3>
                <img src='https://ktomalek.pl/blog/zdjecie/niacyna.jpg' alt='witamina-b3' width='50%' />
                <h3>B6:</h3>
                <img src='https://ktomalek.pl/blog/zdjecie/najlepsze-zrodla-witaminy-b6-ktomalek.jpg' alt='witamina-b6' width='50%' />
                <h3>B9:</h3>
                <img src='https://d33wubrfki0l68.cloudfront.net/7acd33a9256852657224198360e30c23736c6a14/5f327/static/3f3b2f09c5b0b42a15588763a66670a4/9bd22/kwas-foliowy.jpg' alt='witamina-b9' width='50%' />
                <h3>Do czego nam służy witamina C? Co się dzieje gdy mamy jej za mało? Gdzie ją znaleźć?</h3>
                <table>
                    <tr>
                        <th>Rozpuszcane w wodzie</th>
                        <th>Rola</th>
                        <th>Skutki niedoboru</th>
                    </tr>
                    <tr>
                        <td>Witamina C → kwas askorbinowy</td>
                        <td>Zwiększa odporność organizmu i chroni naczynia włosowate, przyspiesza gojenie ran. Wspomaga wchłanianie żelaza</td>
                        <td>Zmniejszona odporność, szkorbut (wypadanie zębów, owrzodzenie dziąseł, kruchość naczyń i niedokrwistość)</td>
                    </tr>
                </table>
                <h3>C:</h3>
                <img src='https://gazetamedycyna.pl/wp-content/uploads/2019/11/Witamina-C-lewoskr%C4%99tna.jpg' alt='witamina-c' width='50%' />
                <h3>Źródła witamin z grupy “ADEK”</h3>
                <p>A → Papryka, marchewka, pomidor, truskawka</p>
                <p>D → Ryba, ser, jajko, masło</p>
                <p>E → oliwa z oliwek, olej, szpinak</p>
                <p>K → brokuł, śliwki, morele, orzechy, migdały</p>
                <h3>Źródła witamin z grupy B</h3>
                <p>B1 → chleb, jajko, pomarańcza</p>
                <p>B2 → ser, mięso, migdały, pieczarki</p>
                <p>B3 → brokuł, kiwi, morela</p>
                <p>B6 → banan, łosoć, ziemniaki, szynki</p>
                <p>B9 → Pomarańcza, pomidory, burak</p>
                <p>B12 → pieczarki, mięso, ser żółty, rak, łosoś</p>
                <p>B5 → ser żółty, jajka, łosoś, mięso, natka pietruszki, brokuły</p>
                <br/>
                <p>Awitaminoza → niedobór witamin w organizmie</p>
                <p>Hiperwitaminoza → nadmiar witaminy w organizmie</p>
                <h3>Witamina C</h3>
                <p>Skutki niedoboru: zmniejszona odporność, owrzodzenie dziąseł i wypadanie zębów</p>
                <p>Występowanie: owoce cytrusowe, cytryna, pietruszka, imbir, kapusta, porzeczki</p>
                <br/>
                <h4>Makro pierwiastki nazywane makro elementami są to pierwiastki które występują w ilości większa od 0,01% suchej masy</h4>
                <p>pierwiastki biogenne:</p>
                <li>C,O,H,N,S,P</li>
                <p>inne:</p>
                <li>Ca, Mg, K, Na, Cl, HCl</li>
                <h4>Mikro pierwiastki nazywane mikro elementami są to pierwiastki które występują w ilości większa od 0,001% suchej masy</h4>
                <p>Fe → anemia, F → szkliwo, J → tarczyca produkuje hormony</p>
                <h4>Znaczenie wody</h4>
                <p>Woda jest jednym z najważniejszych składników budulcowych organizmu człowieka</p>
                <p>Woda jest uniwersalnym rozpuszczalnikiem związków organicznych i niezbędnym uzupełnieniem pokarmu każdego organizmu</p>
                <p>Woda ma istotne znaczenie dla przebiegu procesu trawienia</p>
                <p>Woda ułatwia nam spożywanie, trawienie i wykorzystanie pożywienia. Pełni funkcję ochronną dla mózgu, gałki ocznej i rdzenia kręgowego,
                    a u kobiet ciężarnych – również płodu. Odpowiednie nawodnienie jest również niezbędne dla prawidłowej pracy stawów</p>
                <p>Woda daje człowiekowi energię, koncentrację, zmniejsza uczucie stresu i daje ogólne siły życiowe. Po większym wysiłku,
                    na długim spacerze, a nawet w pracy – zawsze miej przy sobie butelkę z wodą</p>
                <h4>Objawy odwodnienia organizmu:</h4>
                <p>uczucie pragnienia</p>
                <p>zmęczenie</p>
                <p>bóle głowy</p>
                <p>zawroty głowy lub oszołomienie</p>
                <p>rzadkie oddawanie moczu</p>
                <p>i wiele innych</p>
                <h1>Układ pokarmowy i jego funkcje</h1>
                <img src='http://zdrowie.med.pl/wp-content/uploads/2020/09/Anatomia-i-fizjologia-uk%C5%82adu-trawiennego.png' alt='układ pokarmowy'/>
                <h2>W jamie ustnej</h2>
                <p>rozdrabniamy pokarm</p>
                <p>trawienie wielocukrów</p>
                <p>gardło to połączenie ( oddechowy i pokarmowy )</p>
                <h3>przełyk jest umięśniony</h3>
                <p>mięśnie gładkie nie zależne od naszej woli</p>
                <h2>W żołądku</h2>
                <p>pokarm jest mieszany i rozdrabnianie</p>
                <h2>Sok żołądkowy zawiera</h2>
                <p>kwas solny  (zabija bakterie)</p>
                <p>enzymy trawinę (początek trawienia białek)</p>
                <h2>W jelicie cienkim  6 m długości</h2>
                <p>dwunastnica początek jelita cienkiego</p>
                <p>wątroba i trzustka wydzielają</p>
                <li>sok trzustkowy</li>
                <li>żółć z wątroby</li>
                <li>pęcherzyk żółciowy go zagęszcza i wypuszcza</li>
                <p>ostateczne trawienie i wchłanianie pokarmu</p>
                <p>kosmki jelitowe - zwiększają powierzchnię chłonną jelita  do 250 m^2</p>
                <li>niewielkie palczaste wypustki błony</li>
                <p>naczynia limfatyczne </p>
                <li>pobierają tłuszcze</li>
                <p>naczynia krwionośne </p>
                <li>pobierają reszta pokarmu</li>
                <p>gastroskopia</p>
                <h2>W jelicie grubym</h2>
                <p>kolagoskopia</p>
                <p>wchłanianie wody , witamin</p>
                <p>nie trawimy błonnika</p>
                <p>ponad 400 gatunków bakterii</p>
                <p>200 g kału dziennie</p>
                <p>ok. 6000 kg kału w ciągu życia</p>
                <p>zagęszczenie</p>
                <p>formowanie kału</p>
                <h2>W odbytnicy</h2>
                <p>defekacja - wydalanie kału</p>
                <br/>
                <p>amylaza -  enzym który rozkłada cukry</p>
                <h2>Cukry</h2>
                <p>jama ustna - amylaza ślinowa</p>
                <li>zaczyna rozkładać na mniejsze cząsteczki</li>
                <p>dwunastnica - sok trzustkowy ( amylaza trzustkowa ) → dwucukry ( maltoza ) → glukoza</p>
                <li>początek jelita cienkiego </li>
                <p>jelito cienkie - amylaza jelitowa → glukoza</p>
                <h2>Białka</h2>
                <p>Pobieramy białka</p>
                <p>przelatują aż do żołądka</p>
                <p>żołądek - pepsyna → mniejsze polipeptydy</p>
                <p>dwunastnica sok trzustkowy ( trypsyna i chymotrypsyna ) → jeszcze mniejsze polipeptydy ( dwupeptydy )</p>
                <p>jelito cienkie - peptydazy jelitowe → aminokwasy → wchłaniany przed układ krwionośny</p>
                <h2>Tłuszcze</h2>
                <p>ma swój udział wątroba</p>
                <p>elementy które budują tłuszcze</p>
                <li>glicerol</li>
                <li>kwasy tłuszczowe (nasycone i nie nasycone )</li>
                <h2>Tłuszcz</h2>
                <p>dwunastnica - wątroba (żółć → emulgacja tłuszczy  (tak jak płyn do naczyń na tłustą patelnie ))</p>
                <p>elito cienkie - sok trzustkowy ( lipaza trzustkowa i  jelitowa ) → glicerol → kwasy tłuszczowe → wchłaniane są do układu limfatycznego</p>
                <p>Trzustka jest gruczołem hormonalnym reguluje poziom cukru we krwi</p>
                <h2>Funkcje wątroby</h2>
                <p>produkuje żółć, która wspomaga trawienie tłuszczy</p>
                <p>magazynuje glikogen</p>
                <p>magazynuje witaminy rozpuszczalne w tłuszczach (ADEK)</p>
                <p>przekształca amoniak w mocznik</p>
                <p>neutralizuje związki niebezpieczne dla naszego organizmu</p>
                <h2>Zasady racjonalnego żywienia</h2>
                <p>piramida żywienia</p>
                <img src='https://optymalnewybory.pl/wp-content/uploads/piramida-zdrowego-%C5%BCywienia.jpg' alt='Piramida zdrowego żywienia' />
                <h1>Ciąg dalszy układu pokarmowego i jego funkcji</h1>
                <h2>Enzymy:</h2>
                <h3>Cukry:</h3>
                <p>jama ustna → amylaza ślinowa → rozkładanie cukrów na mniejsze cząsteczki</p>
                <p>dwunastnica → sok trzustkowy (amylaza trzustkowa) → rozłożenie do dwucukrów (np. maltoza, w rezultacie → glukoza)</p>
                <p>jelito cienkie → amylaza jelitowa → glukoza</p>
                <h3>Białka:</h3>
                <p>żołądek → pepsyna → mniejsze polipeptydy</p>
                <p>dwunastnica → sok trzustkowy (trypsyna i chymotrypsyna) →jeszcze mniejsze polipeptydy</p>
                <p>jelito cienkie → peptydazy jelitowe → rozkład do aminokwasów</p>
                <h3>Tłuszcze:</h3>
                <p>dwunastnica → wątroba wydziela żółć → emulgacja tłuszczy (rozbijanie tłuszczy na mniejsze cząsteczki)</p>
                <li>sok trzustkowy (lipaza trzustkowa)</li>
                <p>jelito cienki → lipaza jelitowa → glicerol, kwasy tłuszczowe</p>
                <h3>Funkcje wątroby:</h3>
                <p>produkuje żółć, która wspomaga trawienie tłuszczy</p>
                <p>magazynuje glikogen</p>
                <p>magazynuje witaminy rozpuszczalne w tłuszczach (ADEK)</p>
                <p>przekształca amoniak w mocznik</p>
                <p>neutralizuje związki niebezpieczne dla naszego organizmu</p>
                <h3>Bmi = masa ciała (w kg) / wzrost (w m^2)</h3>
                <table>
                    <tr>
                        <th>Bmi</th>
                        <th>klasyfikacja</th>
                    </tr>
                    <tr>
                        <td>poniżej 18,5</td>
                        <td>niedowaga</td>
                    </tr>
                    <tr>
                        <td>18,5 - 24,9</td>
                        <td>prawidłowa waga</td>
                    </tr>
                    <tr>
                        <td>25 - 29,9</td>
                        <td>nadwaga</td>
                    </tr>
                    <tr>
                        <td>30 lub więcej </td>
                        <td>otyłość</td>
                    </tr>
                </table>
                <h1>Funkcje układu krwionośnego</h1>
                <h2>Transport po organizmie</h2>
                <p>tlen</p>
                <p>składniki odżywcze</p>
                <p>witaminy</p>
                <p>hormony</p>
                <p>pierwiastki</p>
                <p>przenosi dwutlenek węgla do płuc</p>
                <p>szkodliwe przemiany materii do nerek</p>
                <h2>Regulacja</h2>
                <p>utrzymanie stałej temperatury ciała</p>
                <p>utrzymanie prawidłowego pH</p>
                <h2>Ochronna</h2>
                <p>ciągłość naczyń krwionośnych</p>
                <p>krew → strupek</p>
                <p>Hemofilia - brak krzepliwości krwi</p>
                <h2>Odporność - leucyty białe ciałka krwi</h2>
                <h2>Budowa krwi</h2>
                <p>osocze 55% substancja między komórkowe</p>
                <p>45%</p>
                <li>erykocyty 4-6 mln/ mm^3 krwi bez jądra</li>
                <li>leukocyty 4-10 tys. w mm^3 krwi z jądrem i są największe</li>
                <li>trombocyty 150 - 450 tys. / mm^3 krwi</li>
                <p>białe krwinki - zżerają obce ciało w naszym organizmie</p>
                <p>czerwone krwinki - transportują tlen</p>
                <br/>
                <p>Krew to tkanka łączna</p>
                <h1>Choroby układu pokarmowego</h1>
                <h2>Krew w kale wiąże się z rakiem jelita grubego</h2>
                <p>skraca się jelito</p>
                <h2>Endoskopowe badania</h2>
                <p>gastroskopia - od góry</p>
                <p>kolonoskopia - od tyłu</p>
                <h2>USG jamy brzusznej</h2>
                <h2>Pasożyty powodujące choroby</h2>
                <p>tasiemce</p>
                <p>glista ludzka</p>
                <p>włosień kręty</p>
                <p>owsik ludzki</p>
                <h2>Choroby wirusowe</h2>
                <p>WZW A</p>
                <li>Przyczyna: zakażenie zapalenie wątroby</li>
                <li>drogami pokarmowymi</li>
                <li>Profilaktyka: przestrzeganie zasad higieny, szczepienia ochronne</li>
                <p>WZW B</p>
                <li>Przyczyny: zakażenie wirusem zapalenia wątroby typu B (HBV)</li>
                <li>Drogi zakażenia : przez krew, drogą płciową</li>
                <li>Profilaktyka: unikanie kontaktu z krwią osób zakażonych, bezpieczne zachowania seksualne, szczepienia ochronne</li>
                <p>WZW C</p>
                <li>Przyczyna: zakażenie wirusem zapalenia wątroby typu C (HCV)</li>
                <li>Drogi zakażenia : przez krew, drogą płciową</li>
                <li>najgorsza</li>
                <li>wykańcza wątrobę (marskość wątroby)</li>
                <li>Profilaktyka: unikanie kontaktu z krwią osób zakażonych, bezpieczne zachowania seksualne, szczepienia ochronne</li>
                <h2>Choroby bakteryjne</h2>
                <p>Próchnica</p>
                <li>Przyczyna: bakterie występujące na powierzchni zębów i rozkładające cukry</li>
                <li>Droga zakażenia: bakterie powodujące próchnicę naturalnie występują w naszej jamie ustnej</li>
                <li>Profilaktyka: dieta bogata w wapń, fosfor, fluor i witaminę D3, ograniczenie spożycia cukrów, mycie zębów , kontrolne wizyty u stomatologa co najmniej dwa razy w roku</li>
                <h2>Choroba wrzodowa żołądka i dwunastnicy (bakteryjne)</h2>
                <p>Przyczyna: głównie zakażenie bakterią Helicobacter pylori. Na rozwój choroby mają wpływ także czynniki jak :</p>
                <li>palenie papierosów</li>
                <li>stosowanie leków przeciwzapalnych i przeciwbólowych</li>
                <li>stres</li>
                <li>niewłaściwe odżywianie</li>
                <p>Droga zakażenia: do zakażenia bakterią Helicobacter pylori dochodzi drogą pokarmoą</p>
                <p>Profilaktyka: polega na unikanie stresu, nadmiernego przyjmowania leków przeciwbólowych i przeciwzapalnych oraz niepaleniu papierosów</p>
                <h2>Salmonelloza (bakteryjne)</h2>
                <p>Przyczyna: zakażenie bakterią z rodzaju Salmonella</p>
                <p>Droga zakażenia: droga pokarmowa</p>
                <p>Profilaktyka: właściwe przechowywanie i przyrządzanie produktów spożywczych</p>
                <h2>Inne choroby:</h2>
                <p>rak trzustki</p>
                <p>rak żołądka</p>
                <p>rak jelita grubego</p>
                <p>nadwrażliwość jelita grubego</p>
                <h2>Objawy</h2>
                <p>wzdęcia</p>
                <p>biegunka</p>
                <p>utrata masy ciała</p>
                <p>niedokrwistość</p>
                <p>ból brzucha</p>
                <p>krew w stolcu</p>
                <p>wymioty</p>
                <p>stan zapalny</p>
                <p>brak apetytu</p>
                <p>ból i zgaga</p>
                <h2>Absorbcja czyli wchłanianie</h2>
                <p>nerki</p>
                <p>jelito cienkie</p>
                <p>jelito grube</p>
                <h2>Zagadnienia na sprawdzian</h2>
                <p>cukry , białka cukry</p>
                <li>budowa</li>
                <li>funkcje (białka !!! )</li>
                <li><p>hemoglobina</p></li>
                <li><p>miozyna</p></li>
                <li><p>aktyna</p></li>
                <li><p>kolagen</p></li>
                <li><p>mioglobina w mięśniach</p></li>
                <li>występowanie</li>
                <p>witaminy podstawowe A, K , C grupa B</p>
                <p>mikro elementy i makro elementy biogenne</p>
                <li>związki chemiczne i pierwiastki</li>
                <li>żelazo</li>
                <li>fluor</li>
                <li>wapń</li>
                <p>związki organiczne</p>
                <li>białka</li>
                <li>tłuszcze</li>
                <li>kwasy nukleinowe</li>
                <p>Znaczenie wody</p>
                <p>Budowa układu pokarmowego</p>
                <li>jama ustna</li>
                <li>gardło</li>
                <li>przełyk</li>
                <li>nie dotykają pokarmo</li>
                <li>gruczoły trawione:</li>
                <li>ślinianki</li>
                <li>wątroba</li>
                <li>trzustka</li>
                <br/>
                <p>człowiek dorosły ma 32 zęby (podział)</p>
                <p>zęby mleczne 20</p>
                <p>jama ustna - rozdrabnianie pokarmu itd. cukry</p>
                <p>gardło - oddechowy i pokarmowy układ</p>
                <p>żołądek - białka</p>
                <p>jelito cienkie - tłuszcze , białka , cukry</p>
                <li>wchłanianie wody</li>
                <p>kosmki jelitowe - zwiększają powierzchne chłonną</p>
                <p>zasady racjonalnego żywienia</p>
                <li>piramida</li>
                <li>anorekcja</li>
                <li>bulimia</li>
                <p>Choroby</p>
                <h2>Cukrzyca</h2>
            </div>
        </>
    )
};

export default Biologia;
