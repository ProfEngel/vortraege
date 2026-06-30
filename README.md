# HTML-Präsentationswerkstatt

Dieses Verzeichnis ist ein lokaler, portabler Workflow für interaktive Vortragsunterlagen als HTML – ausdrücklich **keine PowerPoint-Dateien**. Jede fertige Präsentation lebt vollständig in ihrem eigenen Ordner und lässt sich ohne Build-Schritt kopieren oder offline öffnen.

## Schnellstart

1. Öffne `template/briefing.html` im Browser.
2. Fülle das Briefing aus, platziere Beispielinhalte auf der Mini-Folie und ziehe vorhandene Medien in die Medienablage.
3. Ergänze bei Bedarf eigene PDF-, PPTX-, Markdown-, HTML- oder Bildunterlagen im Bereich **Referenzmaterial**. Sie werden als kommentierte Aufbauhilfe exportiert.
4. Klicke auf **KI-Prompt kopieren** und gib den Prompt einer KI zusammen mit `AGENTS.md` und `agents/`.
5. Die KI führt zuerst Deep Research aus, sichert die Evidenz im Projekt und erstellt danach den neuen Präsentationsordner nach dem untenstehenden Vertrag.
5. Öffne im fertigen Ordner `review.html`, hinterlege foliengenaue Hinweise und kopiere den Revisionsprompt. Wiederhole das, bis alles sitzt.

Chrome/Edge können mit **Projektordner exportieren** einen Ordner inklusive Briefing und hochgeladener Assets anlegen. In Safari/Firefox stehen stattdessen Downloads für Briefing und Prompt bereit; die Originalmedien werden dort aus Sicherheitsgründen nicht automatisch in einen Ordner geschrieben.

Der Prompt arbeitet bewusst zweistufig: Zuerst erhältst du `presentation-plan.md` als kurze Folien- und Rechercheplanung. Erst nach deinem Wort `FREIGABE` wird der Foliensatz gebaut. Für Deutsch/Englisch (Standard) und weitere ausgewählte Sprachen entstehen getrennte Präsentationsdateien; beschriftete neue Grafiken werden ebenfalls sprachspezifisch erzeugt.

Im Briefing müssen außerdem mindestens Vortragsdauer oder Folienzahl gesetzt sein. Bei nur einem Wert leitet der Bauplan das andere Budget transparent ab; bei beiden Werten prüft er das Tempo, bevor du freigibst.

Wie eine KI die lokalen Agenten tatsächlich findet und was bei externen Web-KIs als Anhang mit muss, steht in [RUN_WITH_CODEX.md](RUN_WITH_CODEX.md).

## Vertrag eines fertigen Präsentationsordners

```text
mein-vortrag/
├── presentation.html        # Einstieg, offline lauffähig
├── review.html              # Sticky Review-Leiste, Crop- und Druckfunktion
├── presentation-spec.json   # unverändertes Briefing
├── README.md                # Start-/Bedienhinweise
├── assets/
│   ├── css/presentation.css
│   ├── js/presentation.js
│   └── media/               # alle Bilder, Videos, Audio-Dateien, Fonts
├── reference-material/       # bereitgestellte PDF/PPTX/MD/HTML/Bilder, unverändert
├── sources/
│   ├── sources.json          # valide, zitierfähige Quellenmetadaten und IDs
│   ├── source-overview.md    # Evidenzmatrix, Suchweg, Grenzen
│   ├── source-overview.html  # klickbare Quellenübersicht für Übergabe/Backup
│   └── artifacts/            # gesicherte PDFs, Web-Snapshots, Datensätze
└── review-assets/
    ├── review.css
    └── review.js
```

Keine CDNs, keine Build-Abhängigkeiten und keine externen Webfonts: `presentation.html` muss auch nach dem Kopieren des gesamten Ordners funktionieren. Medien dürfen nur verwendet werden, wenn ihre Nutzung geklärt ist. Jede fachliche Kernbehauptung wird einer verifizierten Quellen-ID zugeordnet; die Folie zeigt diese dezent und verlinkt unten.

## Enthalten

- `template/briefing.html`: visuelles Briefing mit 3×3-Slide-Layout, Seitenverhältnissen, Medien- und Referenz-Dropzone, Zielgruppen-/Interaktions- und Stilwahl.
- `review/review.html`: portable Review-Schale mit foliengenauen Hinweisen, zerstörungsfreiem Bild-Crop und Druck.
- `examples/demo-erneuerbare-energien/`: kleine, interaktive Referenzpräsentation inklusive Review.
- `agents/`: klare Rollen für Briefing, Bau, Medien/Interaktion, Review und Qualitätsprüfung.

## Browser-Bedienung einer fertigen Präsentation

- Pfeiltasten, Leertaste und die Navigationsknöpfe wechseln Folien.
- `Home` / `Ende` springen an Anfang / Ende.
- Jede Folie muss Fortschritt, aktuelle Position und eine verständliche Bildschirmleser-Beschriftung enthalten.
- Die Präsentation meldet Folienwechsel per `postMessage`; damit erkennt die Review-Schale zuverlässig die gerade geprüfte Folie.
- In der Druckansicht werden alle Folien als statische, vollständige Folge ausgegeben; Animationen, Bedienleisten und Interaktionen fallen weg, Quellenlinks bleiben sichtbar.
