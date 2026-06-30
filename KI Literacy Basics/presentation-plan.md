# Präsentationskonzept: KI Literacy Basics (Erweitert)

Dieses Dokument enthält das erweiterte didaktische Konzept, die Zeitplanung und die Folienstruktur der Präsentation **KI Literacy Basics**, inklusive aller zusätzlichen Fachgrafiken und Analogien aus dem `UPLOADS`-Ordner.

## Rahmendaten & Zielgruppe

- **Thema:** KI Literacy Basics
- **Zielgruppe:** Studierende des 1. Semesters (Fokus auf Entzauberung, biologische Vergleiche, technische Vertiefung und Prompting-Strukturen)
- **Format:** Portable HTML-Präsentation (Offline-fähig, Responsive, Hell-/Dunkel-Modus, Druckansicht)
- **Seitenverhältnis:** 16:9-Widescreen-Layout (`width: min(100vw, 177.78vh)`)
- **Logo:** HFWU-Logo (`hfwu_logo.png`) oben rechts auf jeder Arbeitsfolie.
- **Sprache:** Deutsch (Standard).

---

## Zeit- und Folien-Budget (Erweitert)

- **Vortragszeit:** 60 Minuten
- **Gesamtzahl Folien:** 31 Folien
- **Durchschnittliche Dauer pro Folie:** ca. 2 Minuten

### Zeitbudget je Abschnitt

| Abschnitt | Folien | Geplante Dauer |
| :--- | :--- | :--- |
| **Auftakt & Leitfrage** | 1 – 2 | 3.5 Minuten |
| **1. Technikfundament & Biologische Analogie** | 3 – 12 | 18.5 Minuten |
| **2. Limitationen, RAG & Tool-Erweiterung** | 13 – 18 | 12.0 Minuten |
| **3. Kreativität & Multimodale Architekturen** | 19 – 22 | 8.0 Minuten |
| **4. Plattformen & Werkzeuge** | 23 – 24 | 4.0 Minuten |
| **5. Was ist heute möglich und wie? (Prompting & Vibe)** | 25 – 29 | 9.0 Minuten |
| **6. Abschlussquiz & Takeaway** | 30 – 31 | 5.0 Minuten |

---

## Detaillierter Folienplan

### 01. Auftakt: Cover-Folie
- **ID:** `slide-01-cover`
- **Kernaussage:** Einstieg in die KI-Literacy für Erstsemester.
- **Inhaltstyp / Layout:** `cover-slide` (Vollbild-Hero mit Overlay-Text, rahmenlos)
- **Medien:** `assets/media/slide-01-human-ai-hero-kie.png` (object-fit: cover)
- **Quellenbedarf:** Keine

### 02. Die Leitfrage
- **ID:** `slide-02-leitfrage`
- **Kernaussage:** Balance zwischen KI-Nutzung und menschlicher Verantwortung.
- **Inhaltstyp / Layout:** `question-slide` (Großer Text auf gedecktem Hintergrund mit Stimmungsbild)
- **Medien:** `assets/media/slide-02-guiding-question-kie.png` (object-fit: cover)
- **Quellenbedarf:** [I1]

---

### 1. Technikfundament & Biologische Analogie

### 03. Technikfundament: Wie funktioniert KI und was ist ihr Ziel?
- **ID:** `slide-03-funktionsweise-ki`
- **Kernaussage:** KI lernt statistische Regeln aus Daten statt manuell programmierter Abläufe.
- **Inhaltstyp / Layout:** `two-columns` (Text links, Grafik rechts)
- **Medien:** `assets/media/2026-06-29_funktionsweise_ki_u_ziel.jpg` (object-fit: contain)
- **Quellenbedarf:** [I1], [E2]

### 04. Biologische Analogie: Das biologische Neuron
- **ID:** `slide-04-bio-neuron`
- **Kernaussage:** Biologische Grundlage: Aufbau und Funktionsweise einer menschlichen Nervenzelle.
- **Inhaltstyp / Layout:** `two-columns` (Grafik links, Text rechts)
- **Medien:** `assets/media/neuron_anatomy.png` (object-fit: contain)
- **Quellenbedarf:** [I1]
- **Didaktische Wirkung:** Schafft den biologischen Bezugpunkt vor dem Sprung zur künstlichen Repräsentation.

### 05. Biologische Analogie: Die Synapse
- **ID:** `slide-05-synapse`
- **Kernaussage:** Informationsübertragung an chemischen Synapsen über Neurotransmitter.
- **Inhaltstyp / Layout:** `two-columns` (Text links, Grafik rechts)
- **Medien:** `assets/media/synapse_neurotransmitters.png` (object-fit: contain)
- **Quellenbedarf:** [I1]
- **Didaktische Wirkung:** Veranschaulicht den biologischen Gewichtungsfaktor der Signalübertragung.

### 06. Biologisches Lernen: Die Hebbsche Regel
- **ID:** `slide-06-hebbsche-regel`
- **Kernaussage:** „What fires together, wires together“ – Wiederholtes Lernen hinterlässt neuronale Spuren wie ein Wiesenpfad.
- **Inhaltstyp / Layout:** `two-columns` (Grafik links, Text rechts)
- **Medien:** `assets/media/hebbian_path_medium.jpg` (object-fit: contain)
- **Quellenbedarf:** [I1]
- **Didaktische Wirkung:** Nutzung der Wiesenpfad-Metapher zur Erklärung von synaptischer Plastizität und künstlicher Gewichtsanpassung.

### 07. Technikfundament: Wie funktioniert ein LLM?
- **ID:** `slide-07-funktionsweise-llm`
- **Kernaussage:** LLMs sagen die mathematisch wahrscheinlichsten nächsten Wortteile (Tokens) voraus.
- **Inhaltstyp / Layout:** `two-columns` (Text links, Grafik rechts)
- **Medien:** `assets/media/2026-06-29_funktionsweise_llm_u_ziel.jpg` (object-fit: contain)
- **Quellenbedarf:** [A1], [I1]

### 08. Lernen oder Verstehen? Generalisierung vs. Auswendiglernen
- **ID:** `slide-08-generalize-memorize`
- **Kernaussage:** Echtes Verständnis (Generalisierung) zeigt sich erst bei neuen Aufgaben, nicht beim bloßen Auswendiglernen (Overfitting).
- **Inhaltstyp / Layout:** `two-columns` (Grafik links, Text rechts mit Choice-Buttons)
- **Medien:** `assets/media/memorize_vs_generalize.png` (object-fit: contain)
- **Quellenbedarf:** [I1]
- **Didaktische Wirkung:** Analogie zwischen menschlicher Klausurvorbereitung und dem Training von Machine-Learning-Modellen.

### 09. Technikfundament: Wie läuft das Training ab?
- **ID:** `slide-09-llm-training`
- **Kernaussage:** Dreistufiger Prozess: Pretraining, Fine-Tuning und Alignment (RLHF).
- **Inhaltstyp / Layout:** `two-columns` (Text links, Grafik rechts)
- **Medien:** `assets/media/2026-06-29_llm_training.jpg` (object-fit: contain)
- **Quellenbedarf:** [A1], [H1], [I1]

### 10. Energieeffizienz: Gehirn vs. Chip
- **ID:** `slide-10-energy-efficiency`
- **Kernaussage:** Das biologische Gehirn arbeitet mit ca. 20W extrem effizient; künstliche Rechencluster verbrauchen Megawatt.
- **Inhaltstyp / Layout:** `two-columns` (Grafik links, Text rechts)
- **Medien:** `assets/media/energy_efficiency_brain_vs_chip.png` (object-fit: contain)
- **Quellenbedarf:** [I1]
- **Didaktische Wirkung:** Nachhaltigkeitsaspekt und strukturelle Unterschiede zwischen biologischen und siliziumbasierten Netzen aufzeigen.

### 11. Technikfundament: Spezialisten, große/kleine Modelle & Foundation Models
- **ID:** `slide-11-spezialisten-modelle`
- **Kernaussage:** Spezialisierte Small Language Models (SLMs) arbeiten lokal oft effizienter als gigantische Frontier-Modelle.
- **Inhaltstyp / Layout:** `two-columns` (Text links, Grafik rechts)
- **Medien:** `assets/media/2026-06-29_spezialisten_grosse_kleine_llm.jpg` (object-fit: contain)
- **Quellenbedarf:** [I1], [W1]

### 12. Technikfundament: Agentic AI vs. Chatbots
- **ID:** `slide-12-agentic-ai`
- **Kernaussage:** Übergang von einfachen Prompt-Response-Chats zu autonomen Schleifen.
- **Inhaltstyp / Layout:** `two-columns` (Grafik links, Text rechts)
- **Medien:** `assets/media/2026-06-29_agentic_ai_vs_chatbots.jpg` (object-fit: contain)
- **Quellenbedarf:** [I1]

---

### 2. Limitationen, RAG & Tool-Erweiterung

### 13. Limitationen: Halluzinationen
- **ID:** `slide-13-halluzinationen`
- **Kernaussage:** KI halluziniert, weil sie auf Plausibilität optimiert ist, nicht auf Wahrheit.
- **Inhaltstyp / Layout:** `two-columns` (Text links, Grafik rechts)
- **Medien:** `assets/media/2026-06-29_limitationen_halluzinationen.jpg` (object-fit: contain)
- **Quellenbedarf:** [H1], [E2], [I1]

### 14. Limitationen: Das Kontextfenster
- **ID:** `slide-14-kontextfenster`
- **Kernaussage:** Der Arbeitsspeicher eines Modells ist begrenzt. Lost in the Middle.
- **Inhaltstyp / Layout:** `two-columns` (Grafik links, Text rechts mit interaktivem Slider)
- **Medien:** `assets/media/2026-06-29_limitationen_kontextfenster.jpg` (object-fit: contain)
- **Quellenbedarf:** [I1]

### 15. Limitationen: Sprachen im KI-Raum
- **ID:** `slide-15-sprachen-ki`
- **Kernaussage:** Dominanz von Englisch (50%+) vs. Deutsch (ca. 2%) im KI-Trainingsraum.
- **Inhaltstyp / Layout:** `two-columns` (Text links, Grafik rechts)
- **Medien:** `assets/media/2026-06-29_sprachen_verteilung.jpg` (object-fit: contain)
- **Quellenbedarf:** [E2], [I1]

### 16. Erweiterungen: RAG und Memory
- **ID:** `slide-16-rag-memory`
- **Kernaussage:** Retrieval-Augmented Generation (RAG) gibt dem Modell ein Buch zum Nachschlagen.
- **Inhaltstyp / Layout:** `two-columns` (Text links, Grafik rechts)
- **Medien:** `assets/media/2026-06-29_rag_und_memory.jpg` (object-fit: contain)
- **Quellenbedarf:** [I1]

### 17. Die RAG-Kochmetapher
- **ID:** `slide-17-rag-koch`
- **Kernaussage:** Der RAG-Chef: Der Koch (LLM) nutzt Rezepte (Datenbank) in der Küche (Kontext), um ein Gericht (Antwort) zuzubereiten.
- **Inhaltstyp / Layout:** `two-columns` (Grafik links, Text rechts)
- **Medien:** `assets/media/ch3_rag_koch.jpg` (object-fit: contain)
- **Quellenbedarf:** [I1]
- **Didaktische Wirkung:** Humorvolle und einprägsame Veranschaulichung der Systemkomponenten eines RAG-Setups.

### 18. Erweiterungen: Tool-Anbindung & Schnittstellen
- **ID:** `slide-18-tool-anbindung`
- **Kernaussage:** APIs und MCP erlauben Modellen den Zugriff auf Web-Recherche, Datenbanken und Python-Sandboxes.
- **Inhaltstyp / Layout:** `two-columns` (Grafik links, Text rechts)
- **Medien:** `assets/media/2026-06-29_tool_anbindung_schnittstellen.jpg` (object-fit: contain)
- **Quellenbedarf:** [M1], [I1]

---

### 3. Kreativität & Multimodale Architekturen

### 19. Kreativität: Mensch vs. LLM
- **ID:** `slide-19-kreativitaetstrennung`
- **Kernaussage:** LLMs erzeugen unzählige Varianten, der Mensch bewertet.
- **Inhaltstyp / Layout:** `two-columns` (Grafik links, Text rechts)
- **Medien:** `assets/media/2026-06-29_kreativitaetstrennung_llm_vs.jpg` (object-fit: contain)
- **Quellenbedarf:** [I1], [W1]

### 20. Additive vs. Subtraktive Kreativität
- **ID:** `slide-20-creativity-comparison`
- **Kernaussage:** Additive Kreativität (KI schüttet Ideen auf) vs. Subtraktive Kreativität (Mensch schnitzt den Kern heraus).
- **Inhaltstyp / Layout:** `two-columns` (Text links, Grafik rechts mit Choice-Buttons)
- **Medien:** `assets/media/creativity_comparison.png` (object-fit: contain)
- **Quellenbedarf:** [I1]
- **Didaktische Wirkung:** Definiert die komplementäre Arbeitsteilung zwischen menschlicher Filterung und maschineller Generierung.

### 21. Multimodalität: Generative Medien
- **ID:** `slide-21-multimodalität`
- **Kernaussage:** Multimodale Modelle erzeugen Text, Bild, Video, Audio und Musik.
- **Inhaltstyp / Layout:** `two-columns` (Grafik links, Text rechts)
- **Medien:** `assets/media/2026-06-29_multimodale_generierung.jpg` (object-fit: contain)
- **Quellenbedarf:** [I1]

### 22. Multimodale Bilderstellung: Das Diffusions-Modell
- **ID:** `slide-22-architectures-diagram`
- **Kernaussage:** Architektur zur Bilderstellung: Von verrauschtem Input über Textkonditionierung zum scharfen Zielbild.
- **Inhaltstyp / Layout:** `two-columns` (Text links, Grafik rechts)
- **Medien:** `assets/media/architectures_diagram.png` (object-fit: contain)
- **Quellenbedarf:** [I1]
- **Didaktische Wirkung:** Bietet den interessierten IT-Studierenden einen tieferen Einblick in die Funktionsweise von Diffusionsmodellen.

---

### 4. Plattformen & Werkzeuge

### 23. Plattformen & Werkzeugübersicht
- **ID:** `slide-23-werkzeuguebersicht`
- **Kernaussage:** Werkzeugauswahl: Chats, NotebookLM, Higgsfield und Codex.
- **Inhaltstyp / Layout:** `two-columns` (Grafik links, Text rechts)
- **Medien:** `assets/media/2026-06-29_werkzeuge_uebersicht.jpg` (object-fit: contain)
- **Quellenbedarf:** [E2], [I1]

### 24. Plattformen: Lokal vs. Cloud
- **ID:** `slide-24-lokal-vs-cloud`
- **Kernaussage:** Cloud-Leistung vs. lokale Datenhoheit.
- **Inhaltstyp / Layout:** `two-columns` (Text links, Grafik rechts)
- **Medien:** `assets/media/2026-06-29_lokal_vs_cloud.jpg` (object-fit: contain)
- **Quellenbedarf:** [E2], [I1]

---

### 5. Was ist heute möglich und wie? (Praxis)

### 25. Praxis: Prompting als Steuerung
- **ID:** `slide-25-prompting`
- **Kernaussage:** Strukturierte Prompts steuern KI-Modelle zielgerichtet.
- **Inhaltstyp / Layout:** `two-columns` (Grafik links, Text rechts)
- **Medien:** `assets/media/2026-06-29_prompting_steuerung.jpg` (object-fit: contain)
- **Quellenbedarf:** [I1]

### 26. Praxis: Anatomie eines Prompts
- **ID:** `slide-26-anatomie-prompt`
- **Kernaussage:** Systematischer Aufbau: Rolle, Aufgabe, Kontext, Einschränkung und Output-Format.
- **Inhaltstyp / Layout:** `two-columns` (Grafik links, Text rechts)
- **Medien:** `assets/media/anatomie_prompt.jpg` (object-fit: contain)
- **Quellenbedarf:** [I1]
- **Didaktische Wirkung:** Liefert ein direkt einsatzbereites Template für das wissenschaftliche Arbeiten.

### 27. Praxis: Kontext-Engineering
- **ID:** `slide-27-context-engineering`
- **Kernaussage:** Das gezielte Vorbereiten des Kontextes ist wichtiger als die genaue Formulierung der Frage.
- **Inhaltstyp / Layout:** `two-columns` (Text links, Grafik rechts)
- **Medien:** `assets/media/context_engineering.jpg` (object-fit: contain)
- **Quellenbedarf:** [I1]
- **Didaktische Wirkung:** Zeigt auf, wie man durch systematisches Einbetten von Kontext Modellanfragen optimiert.

### 28. Praxis: Vibe Coding
- **ID:** `slide-28-vibe-coding`
- **Kernaussage:** Softwareentwicklung im deklarativen Dialog.
- **Inhaltstyp / Layout:** `two-columns` (Grafik links, Text rechts)
- **Medien:** `assets/media/2026-06-29_vibe_coding.jpg` (object-fit: contain)
- **Quellenbedarf:** [I1]

### 29. Praxis: Orchestrierung paralleler Agenten
- **ID:** `slide-29-agenten-orchestrierung`
- **Kernaussage:** Komplexe Aufgaben werden im Team spezialisierter KIs gelöst.
- **Inhaltstyp / Layout:** `two-columns` (Grafik links, Text rechts)
- **Medien:** `assets/media/2026-06-29_agenten_orchestrierung.jpg` (object-fit: contain)
- **Quellenbedarf:** [W1], [I1]

---

### 6. Abschlussquiz & Takeaway

### 30. Interaktives Abschlussquiz
- **ID:** `slide-30-abschlussquiz`
- **Kernaussage:** Wissensüberprüfung der Kernkonzepte.
- **Inhaltstyp / Layout:** `quiz-slide` (3 interaktive Spalten mit Choice-Buttons)
- **Medien:** HFWU-Logo
- **Quellenbedarf:** [I1]

### 31. Abschluss: Drei Dinge zum Mitnehmen
- **ID:** `slide-31-abschluss`
- **Kernaussage:** Muster verstehen, Werkzeuge gezielt wählen und die Verantwortung behalten.
- **Inhaltstyp / Layout:** `takeaway-slide` (Drei Kacheln mit finalem Impuls)
- **Medien:** HFWU-Logo
- **Quellenbedarf:** [E2]
