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
            </div>
        </>
    )
};

export default Biologia;