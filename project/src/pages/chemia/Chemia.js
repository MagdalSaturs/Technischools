import React from 'react';
import './Chemia.scss';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

const Chemia = () => {
    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => navigate('/listOfSubjects')}>Powrót</button>
            <h1>Chemia</h1>
            <h3>1. Dysocjacja to:</h3>
            <p>Proces rozpadu związków chemicznych na mniejsze cząstki, które są bardziej stabilne.</p>
            <h3>2. Substancje, które rozpuszczają się na jony moża ogólnie nazwać:</h3>
            <p>elektronami</p>
            <h3>3. Po rozpuszczeniu soli w wodzi</h3>
            <p>KNO3 → K+ + NO3-</p>
            <p>Ba(NO5)2 → Ba2+ + 2NO3-</p>
            <p>K3PO4 → 3k + PO4 3-</p>
            <h3>4. Roztwór uzyskany po rozpuszczeniu...</h3>
            <p>Nie zdysocjonowane cząsteczki...</p>
            <h3>5. Mocne kwasy to:</h3>
            <p>H2So4, HNO3, HCL, HBr, HJ</p>
            <h3>6. Mocne zasady to:</h3>
            <p>NaOH, KOH, Ca(OH)2, Ba(OH)2, LiOH</p>
            <h3>7. Wodny roztwór kwasów o wzorze HA...</h3>
            <p>a) HA ⇒ A- + H+</p>
            <li>H+ = 1 mol</li>
            <li>4 mole niezd.</li>
            <li>α = Czd/Cwp = [H+]/Cc * 100%</li>
            <li>α = 1/1+4 * 100% = 1/5 * 100% = 20%</li>
            <p>b)</p>
            <li>H+ = 0,1</li>
            <li>0,4 mole niezd.</li>
            <li>α = Czd/Cwp = [H+]/Cc * 100%</li>
            <li>α = 0,1/0,1+0,4 * 100% = 20%</li>
            <h3>8. Stężenie jonów wprowadzonych</h3>
            <p>α = Czd/Cwpr * 100%</p>
            <p>Czd = α*Cwpr/100% = (3,5% * 0,2mol/dm3)/100% = 0,007mol/dm3</p>
            <h3>9. Oblicz pH</h3>
            <p>HCL → 0,01</p>
            <li>pH = -log[H+]</li>
            <li>pH = -log0,01 = 2</li>
            <p>NaOK → 0,00001</p>
            <li>pOH = -log[OH-]</li>
            <li>pH + pOH = 14</li>
            <li>ph = -loh[H+]</li>
            <li>pOH = -log0,00001 = 5</li>
            <li>pH = 14-5 = 9</li>
            <p>Ca(OH)2 → 0,0005</p>
            <li>Ca(OH)2 → 0,0005 * 2 = 0,001</li>
            <li>pOH = -log0,001 = 3</li>
            <li>pH = 14-3 = 11</li>
            <p>H2SO4 → 0,05</p>
            <li>H2SO4 - 0,05*2 = 0,1</li>
            <li>pH=-log0,1=1</li>
            <p>HNO2 → 0,0015(α=7%)</p>
            <li>α=[H+]/Cwp * 100%</li>
            <li>[H+] = α*Cwp/100% = 7*0,0015/100 = 0,000105</li>
            <li>pH = -log0,000105 = 3,98</li>
            <h3>10. Reakcja chemiczna</h3>
            <p>H2SO4 + Fe(OH)2 → FeSO4 + 2H2O</p>
            <p>Zapis jonowy</p>
            <li>2H+ + SO4 2- + Fe(OH)2 → Fe2+ + SO4 2- + 2H2O</li>
            <p>Zapis jonowy skócony</p>
            <li>2H+ + Fe(OH)2 → Fe2+ + 2H2O</li>
            <p>AgNO3 + NaCL → NaNO3 + AgCl</p>
            <p>Zapis jonowy</p>
            <li>Ag+ + NO3- + Na+Cl- → Na+ + NO3- + AgCl</li>
            <p>Zapis jonowy skócony</p>
            <li>Ag+ + Cl- → AgCl</li>
            <p>2HNO2 + Pb(OH)2 → Pb(NO3)2 + 2H2O</p>
            <p>Zapis jonowy</p>
            <li>2H+ + 2NO3^- + Pb(OH)2 → Pb2+ + 2NO3^- + 2H2O</li>
            <p>Zapis jonowy skócony</p>
            <li>2H+ + Pb(OH)2 → Pb2+ + 2H2O</li>
            <p>Na2SO4 + BaCl2 → 2NaCl + BaSO4</p>
            <p>Zapis jonowy</p>
            <li>2Na+ + SO4 2- + Ba2+ + 2Cl- → 2Na+ + Cl- + BaSO4</li>
            <p>Zapis jonowy skócony</p>
            <li>2Na+ + Ba2+ → 2Na+ + Ba2+</li>
        </>
    )
};

export default Chemia;
