# Georg.edu Italienisch A1-A2 Integrationsprüfung-Portal 🇮🇹

Ein interaktives, hocheffizientes Trainings- und Prüfungsportal für das offizielle italienische **A1- und A2-Integrationscurriculum (Accordo di Integrazione)**. Entwickelt im Auftrag der **Georg.edu** zur gezielten Förderung und Vorbereitung auf die bürgerlichen und sprachlichen Integrationsprüfungen.

Dieses Portal ist voll PWA-fähig (Progressive Web App), läuft offline-first und bietet haptische Ton-Feedbacks, personalisierte Themen sowie einen hochentwickelten intelligenten Schwäche-Trainer.

---

## 🌟 Key Features

*   **📚 Getrennte Sprachniveaus (A1 & A2)**: Filtern Sie Lernbereiche nach einfachem Grundwortschatz (A1) oder fortgeschritteneren Alltagssituationen und Bürgerkunde zur Integration (A2).
*   **⏰ Offizielle Prüfungssimulation**: Simulieren Sie die echte Prüfung mit 20 ausgewogenen Fragen, abgedecktem Syllabus-Mix und 15-Minuten-Zeitlimit.
*   **🎯 Gezieltes Fehlertraining**: Jede falsch beantwortete Frage wird automatisch gelistet und lässt sich in personalisierten Drills separat üben, bis sie vollständig beherrscht wird.
*   **📱 PWA-Ready (Offline-Unterstützung)**: Voll funktionsfähig auf Handys und Tablets ohne ständige Internetverbindung dank modernem Service Worker.
*   **🎨 Dynamic Neobrutalist & Modern Styles**: Flexible visuelle Interfaces inkl. Soundsteuerung und mehreren sorgfältig abgestimmten Farbpaletten.

---

## 🛠️ Technische Spezifikation & Installation

Dieses Webprojekt basiert auf modernsten, leichtgewichtigen Webtechnologien:
*   **Framework**: [React 19](https://react.dev/) mit [TypeScript](https://www.typescriptlang.org/)
*   **Packer**: [Vite 6](https://vitejs.dev/)
*   **Stilmittel**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animationen**: [Motion](https://motion.dev/)
*   **Icons**: [Lucide-React](https://lucide.dev/)

### Projekt lokal starten

1.  **Repository klonen**:
    ```bash
    git clone https://github.com/georg-edu/georg-edu-italian-quiz.git
    cd georg-edu-italian-quiz
    ```

2.  **Abhängigkeiten installieren**:
    ```bash
    npm install
    ```

3.  **Entwicklerserver starten**:
    ```bash
    npm run dev
    ```
    Der Server läuft standardmäßig auf `http://localhost:3000`.

4.  **Für die Produktion bauen (Build)**:
    ```bash
    npm run build
    ```
    Erzeugt optimierte statische Dateien im Ordner `dist/`, inklusive des registrierten Service Workers für den PWA-Betrieb.

---

## 📱 Progressive Web App (PWA)

Diese Anwendung implementiert die vollständige PWA-Spezifikation:
*   **Weboberflächen-Manifest**: `/public/manifest.json` regelt Startverhalten und Geräterahmenfarben.
*   **Service Worker**: `/public/sw.js` ermöglicht das Laden des Portals über lokale Caches für blitzschnellen Offlinezugriff.

---

## 📞 Kontakt & Support

Das Portal wird direkt betreut und gepflegt durch das Studien-Zentrum der **Georg.edu**:

*   **Entwickelt von**: olamidegeorg
*   **Telefonischer Support / Hotline**: [09134088925](tel:09134088925)

---

*Lizenzierte Nutzung im Rahmen des Integrationsabkommens (Accordo di Integrazione).*
