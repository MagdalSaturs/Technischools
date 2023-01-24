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
                <p>Dwucukry (disacharydy) - to cukry złożone z dwóch cukrów prostych, np.. Sacharoza, laktoza (cukier mleczny) i mitoza. Występują głównie w słodyczach i nabiale</p>
                <p>Wielocukry (polisacharydy) - to cukry złożone z wielu cząsteczek cukrów prostych, np.. Skrobia. Znajdują się m.in. w produktach zbożowych, kaszach i makaronach</p>
                <h2>Tłuszcze</h2>
                <p>Tłuszcze - materiały zapasowe</p>
                <p>Tłuszcze to przede wszystkim materiały zapasowe dostarczające energii, gdy zabraknie cukrów</p>
                <h3>Funkcje tłuszczy</h3>
                <p>Funkcją tłuszczy jest głównie dostarczanie energii, gdy zabraknie cukrów</p>
            </div>
            <div className='rola-i-funkcje-witamin'>

            </div>
        </>
    )
};

export default Biologia;