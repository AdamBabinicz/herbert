import React, { useState } from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Modal from "../Portal/Modal";
import Modal1 from "../Portal/Modal";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const Toggle = () => setModal(!modal);
  const Toggle1 = () => setModal1(!modal1);

  return (
    <div className="header flex flex-col" id="header">
      <Navbar />
      <div className="container flex">
        <div className="header-content">
          <h2 className="text-white op-07 fw-07 ls-2">
            Artysta niepokorny, gdy nie mógł pisać prawdy, wybierał milczenie.
          </h2>
          <h1 className="text-white fw-6 header-title">
            1924 -<span className="text-brown"> 1998</span>
          </h1>
          <div className="btn-groups flex">
            <button
              type="button"
              className="btn-item bg-brown fw-4 ls-2"
              onClick={() => Toggle()}
            >
              Zobacz
            </button>
            <Modal show={modal} close={Toggle} title="Poeta nieprzekupny">
              <p>
                Poeta i eseista, autor utworów dramatycznych i słuchowisk,
                pisarz o wielkim dorobku, wyjątkowym autorytecie artystycznym i
                moralnym, o biografii tragicznie uwikłanej w historię XX wieku.
              </p>
              <p>
                Jest laureatem wielu polskich i zagranicznych nagród
                literackich. Należy do najczęściej tłumaczonych polskich
                pisarzy. Jako poeta debiutował w 1950, jednak pierwszą książkę
                poetycką ("Struna światła") wydał dopiero w 1956 roku.
              </p>
              <br />
              <p>
                <em>culture.pl/pl/tworca/zbigniew-herbert</em>
              </p>
            </Modal>
            <button
              className="btn-item bg-dark fw-4 ls-2"
              onClick={() => Toggle1()}
            >
              Czytaj
            </button>
            <Modal1
              show={modal1}
              close={Toggle1}
              title="Herbert wobec komunizmu"
            >
              <p>
                Ze wzglę­du na kry­tycz­ny sto­su­nek do ko­mu­ni­zmu i władz
                PRL oraz sta­łe kon­tak­ty ze śro­do­wi­ska­mi emi­gra­cyj­ny­mi
                (m.in. Kulturą pa­ry­ską) w la­tach 1975- 1980 Her­bert był
                ob­ję­ty za­ka­zem dru­ku.
              </p>
              <p>
                W grud­niu 1975 roku zło­żył pod­pis pod Memoriałem 59
                sta­no­wią­cym pro­test wo­bec pla­no­wa­nym zmia­nom w
                Kon­sty­tu­cji PRL, m.in. wpro­wa­dze­niu za­pi­su o so­ju­szu z
                ZSRR. W la­tach 1975 - 1981 prze­by­wał za gra­ni­cą, po
                po­wro­cie do kra­ju zo­stał człon­kiem re­dak­cji
                uka­zu­ją­ce­go się poza kon­tro­lą cen­zu­ry "Za­pi­su".
              </p>
              <br />
              <p>
                <em>poezja.org/wz/Herbert_Zbigniew</em>
              </p>
            </Modal1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
