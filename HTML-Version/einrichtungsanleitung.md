# Einrichtungsanleitung für "App-Prototyping mit Claude: Leitfaden für Produktmanager"
Version 1.0 | 28.06.2026

*Diese Anleitung führst du einmalig durch, bevor du deinen ersten Prototyp mit dem Framework baust. Ab dem zweiten Projekt startest du direkt mit Schritt 0 des Framework-Dokuments.*

---

## Was du einrichtest

| Tool | Zweck | Kosten |
|---|---|---|
| Claude Code Desktop App | Das agentische KI-System, das die App auf deine Anweisung hin baut | 21,42 EUR/Monat (Stand: 28.06.2026) |
| Vercel | Deployment-Plattform, die deine App öffentlich erreichbar macht | Kostenlos (Free Tier) |
| Supabase | Datenbank (nur wenn deine App Daten speichert) | Kostenlos (Free Tier) |

---

## Schritt 1: Claude Desktop App installieren

**1.1** Öffne einen Browser und gehe zu **[claude.com/de/download](https://claude.com/de/download)**.

**1.2** Lade die Desktop App für dein Betriebssystem herunter (macOS oder Windows).

**1.3** Öffne die heruntergeladene Datei und folge dem Installationsassistenten.

**1.4** Starte Claude Code. Beim ersten Start wirst du aufgefordert, dich mit einem Anthropic-Konto anzumelden oder eines zu erstellen.

![Claude Code Startbildschirm nach der Anmeldung](../../Images/ClaudeSetup/7.png)

**1.5** Die App heißt „Claude" und zeigt oben mehrere Reiter, aktuell z. B. „Chat", „Cowork" und **„Code"**. Klicke auf den Reiter **„Code"**.

**Verifizierung:** Claude Code ist bereit, wenn du im Reiter „Code" im Textfeld unten eine Nachricht eingeben kannst und Claude Code antwortet.

---

## Schritt 2: Vercel einrichten und mit Claude Code verbinden

*Für den nächsten Schritt benötigst du ein Vercel-Konto. Vercel ist das Tool, das deine fertige App deployed, also über eine öffentliche URL im Internet zugänglich macht. Damit das automatisch aus Claude heraus funktioniert, muss Vercel mit Claude verbunden werden.*

**2.1** Öffne einen Browser und gehe zu **[vercel.com](https://vercel.com)**.

**2.2** Klicke auf „Sign Up" (oben rechts). Erstelle ein kostenloses Konto — du kannst dich mit GitHub, GitLab oder einer E-Mail-Adresse anmelden.

**2.3** Schließe den Vercel-Einrichtungsassistenten ab. Du landest auf dem Vercel-Dashboard (anfangs leer — das ist normal).

![Vercel Dashboard nach der Einrichtung](../../Images/VercelSetup/1.png)

**2.4** Wechsle zu Claude Code. Klicke links in der Seitenleiste auf **„Anpassen"**, dann auf **„Konnektoren"**.

**2.5** Klicke auf **+**, dann auf **„Konnektoren durchsuchen"**.

![Konnektoren durchsuchen](../../Images/ClaudeSetup/8.png)

**2.6** Gib in der Suchzeile **„Vercel"** ein und klicke auf den Vercel-Eintrag.

![Vercel in der Konnektorensuche](../../Images/ClaudeSetup/10.png)

**2.7** Es öffnet sich ein Browserfenster von Vercel. Klicke dort auf das Team, das du beim Vercel-Setup-Assistenten erstellt hast, und dann auf **„Allow"**.

![Vercel Allow-Dialog](../../Images/ClaudeSetup/13.png)

**2.8** Es erscheint ein Popup **„Claude öffnen"** — klicke darauf. In der Konnektoren-Ansicht siehst du nun, dass Vercel verbunden ist.

![Vercel erfolgreich verbunden](../../Images/ClaudeSetup/14.png)

**Verifizierung:** Schreibe in Claude Code:

```
Liste meine Vercel-Projekte auf.
```

Claude Code gibt eine Projektliste aus — anfangs leer, das ist in Ordnung. Entscheidend ist, dass Claude Code antwortet und keine Fehlermeldung erscheint.

![Vercel Verbindung verifiziert](../../Images/VercelSetup/2.png)

**Voreinrichtungs-Gate — erfüllt wenn:**
- ☐ Claude Code antwortet auf deine Nachrichten
- ☐ Claude Code gibt auf „Liste meine Vercel-Projekte auf" eine Antwort ohne Fehlermeldung

---

## Schritt 3: Supabase einrichten und mit Claude Code verbinden (optional)

*Schritt 3 ist nur nötig, wenn du planst, eine App zu bauen, die Daten speichert (z.B. Formulare, Nutzerlisten, Feedback). Ob du Supabase brauchst, erfährst du in Phase 1 des Frameworks. Claude Code beantwortet die Frage anhand deiner App-Idee. Überspringe Schritt 3 vorerst, falls du noch nicht weißt ob du eine Datenbank brauchst. **Wenn Claude Code in Phase 1 feststellt, dass deine App Supabase benötigt, komme zurück zu dieser Anleitung und schließe Schritt 3 ab, bevor Phase 2 beginnt — Claude Code weist dich darauf hin.***

**3.1** Öffne einen Browser und gehe zu **[supabase.com](https://supabase.com)**.

**3.2** Klicke auf "Start your project" und erstelle ein kostenloses Konto (GitHub-Anmeldung empfohlen, da sie auch bei Vercel verwendet werden kann).

**3.3** Schließe die Supabase-Einrichtung ab. Du landest auf dem Supabase-Dashboard (ohne Projekte — normal).

**3.4** Wechsle zu Claude Code. Klicke links in der Seitenleiste auf **„Anpassen"** → **„Konnektoren"** → **+** → **„Konnektoren durchsuchen"**. Gib **„Supabase"** in der Suchzeile ein und klicke auf den Supabase-Eintrag.

![Supabase in der Konnektorensuche](../../Images/SupabaseSetup/2.png)

**3.5** Es öffnet sich ein Browserfenster von Supabase — klicke dort auf **„Allow"** (gleicher Ablauf wie bei Vercel in Schritt 2).

**3.6** Klicke im erscheinenden Popup auf **„Claude öffnen"**. In der Konnektoren-Ansicht siehst du nun, dass Supabase verbunden ist.

![Supabase erfolgreich verbunden](../../Images/SupabaseSetup/4.png)

**Verifizierung:** Schreibe in Claude Code:

```
Liste meine Supabase-Projekte auf.
```

Claude Code gibt eine Projektliste aus — anfangs leer, das ist in Ordnung. Entscheidend ist, dass Claude Code antwortet und keine Fehlermeldung erscheint.

![Supabase Verbindung verifiziert](../../Images/SupabaseSetup/5.png)

---

## Einrichtung abgeschlossen

Du brauchst diese Anleitung nicht mehr. Ab jetzt startest du jeden neuen Prototyp mit **Schritt 0 des Framework-Dokuments** (Projektordner einrichten) — und danach direkt mit Phase 1.

Deine Vercel- und Supabase-Verbindungen bleiben aktiv — du musst sie nicht bei jeder neuen Session neu herstellen. Wenn Claude Code nach einer längeren Pause die Verbindung verloren hat, führe Schritt 2 (und ggf. 3) erneut durch.

---

