# Plein '40-'45 — 3D browserprototype

Een mobielvriendelijke Three.js openwereldprototype geïnspireerd op Plein '40-'45 in Amsterdam Nieuw-West.

## Spelen
- Open de site via GitHub Pages: https://whoisbrzy.github.io/Warzone-ragdoll-physics-system/
- Mobiel: linker joystick om te bewegen, sleep aan de rechterkant om de camera te draaien, **AUTO** om in/uit te stappen en **REN** om te sprinten.
- Desktop: WASD, muis, E en Shift.

## GitHub Pages inschakelen
Als de link nog niet werkt:
1. Ga naar **Settings → Pages**.
2. Kies **Deploy from a branch**.
3. Selecteer **main** en de map **/(root)** en klik **Save**.
4. Wacht tot GitHub Pages klaar is en open de URL hierboven.

Three.js wordt via jsDelivr geladen; een internetverbinding is nodig.

## Stad en 3D-assets

De stadsuitbreiding wordt procedureel opgebouwd in [city.js](./city.js): extra woonblokken, winkelpuien, tramrails, fietsstroken, bomen, straatlampen, bankjes en een plein. Dit is eigen geometrie voor een lichte browsergame, geen exacte bouwkundige reconstructie.

Geselecteerde open-source bronnen en licentie-informatie staan in [assets/README.md](./assets/README.md) en [assets/THIRD_PARTY_CREDITS.md](./assets/THIRD_PARTY_CREDITS.md). De externe modellen zijn nog niet in de game gebundeld; controleer per bestand de licentie voordat je ze toevoegt.
