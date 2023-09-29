(english translation coming soon)

## Einrichtung und Ausführung des Projekts ##

Diese README-Datei dient dazu, das Projekt ordnungsgemäß auf deinem gewünschten Gerät zum Laufen zu bringen. Es ist wichtig zu beachten, dass die Befehle und Schritte je nach Betriebssystem variieren können. Dieses Projekt ist eher für Benutzer gedacht, die bereits Erfahrung mit Java und JavaScript sowie deren Bibliotheken und Frameworks gesammelt haben.
Dieses Repository enthält eine Fullstack-Anwendung, die mit Java Spring Boot für das Backend und React für das Frontend entwickelt wurde.

## Systemvoraussetzungen:

1.  **Java Development Kit (JDK):** Du benötigst eine Java-Umgebung. Installiere das JDK gemäß den Anweisungen für dein Betriebssystem.
2. **Node.js und npm (Node Package Manager):** Diese werden für die Verwaltung der Frontend-Abhängigkeiten benötigt. Installiere Node.js und npm entsprechend deinem Betriebssystem.
3. **Maven:** Dieses Build-Tool wird für die Verwaltung der Backend-Abhängigkeiten verwendet. Installiere Maven gemäß den Anweisungen für dein Betriebssystem.
4. **SQL-Datenbank:** Du benötigst die SQL-Datenbank MariaDB. Stelle sicher, dass sie installiert und betriebsbereit ist, da sie zur Speicherung von Daten verwendet wird.
5. **JavaScript/TypeScript:** Grundlegende Kenntnisse in JavaScript und TypeScript sind erforderlich, da sie für die Entwicklung und Anpassung des Frontends verwendet werden.
6. **SQL:** Grundlegende Kenntnisse in SQL sind erforderlich, da du SQL-Abfragen für die Datenbankverwaltung schreiben musst.
7. **Java:** Grundlegende Kenntnisse in Java sind erforderlich, da du Java Spring Boot für die Entwicklung und Anpassung des Backends verwenden wirst.

## Schritte zur Einrichtung und Ausführung der Anwendung

1. Lade das Projekt herunter, entweder durch Klonen des Repositorys ```$Git clone``` oder durch Herunterladen des ZIP-Archivs.
2. Wechsle in den gewünschten Projektbranch ```$git checkout -b standalone```. Beachte, dass der master-Branch hauptsächlich zur Veranschaulichung dient und die Datenbank hier nicht erstellt oder genutzt werden kann.
3. Installiere die Frontend-Abhängigkeiten, indem du in das Frontend-Verzeichnis wechselst und den folgenden Befehl ausführst:

``` $ cd frontend/```
``` $ npm install```

###  Dieser Befehl installiert alle erforderlichen Frontend-Abhängigkeiten aus der package.json-Datei, einschließlich Frameworks wie Bulma und React.

4. Stelle sicher, dass du das Java Development Kit **(JDK)** auf deinem Computer installiert hast.
5. Installiere **Java Spring Boot** auf deinem Computer.
6. Wechsle zurück zum Hauptverzeichnis des Projekts.
7. Installiere die Backend-Abhängigkeiten, indem du den folgenden Befehl ausführst 

    ``` $mvn install```
       
### Dieser Befehl installiert alle Backend-Abhängigkeiten mithilfe von Maven, einschließlich Java Spring Boot.

- Lade die books.sql-Datei in deine MariaDB-Datenbank hoch. Die SQL-Datei befindet sich im Verzeichnis 
**backend/src/main/resources/sql/books.sql.**
- Passe die Datei example.properties an, indem du durch deinen Datenbank-Benutzernamen und dein Passwort ersetzt. Lösche „example“ aus dem Dateiennamen example.application.properties. Diese Datei enthält die Datenbankkonfiguration für das Backend.
- Starte das Frontend, indem du in das Frontend-Verzeichnis wechselst und den folgenden Befehl ausführst: ```$ npm run dev```

###  Dieser Befehl startet die Entwicklungsserver für das Frontend.

Starte das Backend, indem du den folgenden Befehl ausführst: 
```$mvn spring-boot:run```
oder per start-Knopf in deinem IDE (Meistens oben Links)
Dieser Befehl startet die Spring Boot-Anwendung für das Backend.

### Die Anwendung sollte nun lokal laufen, und du kannst sie über deinen Webbrowser aufrufen.
## Viel Spaß beim Entwickeln! **:D**