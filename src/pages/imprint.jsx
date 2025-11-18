import Navigation from "../components/Navigation/Navigation";
import React, {useState} from "react";
import {translations} from "../translations/translations";
import {useNavigate} from "react-router-dom";
import './imprint.css';

export default function Imprint() {
    const [language, setLanguage] = useState('de');
    const t = translations[language];

    let navigate = useNavigate();

    const scrollToSection = (section) => {
        navigate('/');
        setTimeout(() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' }), 250);
    };

    return (
        <div className="app">
            <div className="imprint-container">
                <h1 className="imprint-title">{t.imprint.title}</h1>

                <div className="imprint-content">
                    <p><strong>{t.imprint.paragraph}</strong></p>

                    <p><strong>{t.imprint.associationName}</strong><br />
                        Phoenix Athletics e.V.<br />
                        Curd-Jürgens-Str. 23<br />
                        89231 Neu-Ulm</p>

                    <p><strong>{t.imprint.authorizedBoardMembers}</strong><br />
                        Vertreten durch den Vorstand gemäß § 26 BGB:<br />
                        1. Vorsitzende: Viola Hentrich<br />
                        2. Vorsitzende: Sabrina Ng<br />
                        Weitere vertretungsberechtigte Vorstandsmitglieder: David Baum</p>

                    <p><strong>Kontakt</strong><br />
                        E-Mail: info@phoenix-athletics.de</p>

                    <p><strong>{t.imprint.registerEntryTitle}</strong><br />
                        Eintragung im Vereinsregister.<br />
                        Registergericht: Memmingen<br />
                        Registernummer: VR 201286</p>

                    <p><strong>{t.imprint.liabilityForContentTitle}</strong><br />
                        {t.imprint.liabilityForContentText}</p>
                    <p><strong>{t.imprint.copyrightTitle}</strong><br />
                        {t.imprint.copyrightText}.</p>
                </div>
            </div>
            <Navigation
                language={language}
                setLanguage={setLanguage}
                t={t}
                scrollToSection={scrollToSection}
            />
        </div>
    );
}