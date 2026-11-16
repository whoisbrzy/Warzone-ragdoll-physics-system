# Open-source 3D-assets voor Plein '40-'45

Deze repository bevat een eigen, procedureel opgebouwde Three.js-stadswijk. De onderstaande projecten zijn geselecteerde bronnen voor latere uitbreiding met echte GLB-modellen. Er zijn in deze commit geen externe modelbestanden gekopieerd.

## Gebouwen, straten en stadsmeubilair

- [Low Poly City Kit](https://github.com/kayquer/kit-cidade-lowpoly) — 129 GLB-modellen, CC0 1.0. Commercieel gebruik en aanpassing toegestaan; naamsvermelding optioneel. De stijl is low-poly en de voorbeelden zijn niet specifiek Nederlands.
- [Monuments](https://github.com/bilol-makhmudov/monuments) — GLB-modellen van historische gebouwen, CC BY-SA 4.0. Naamsvermelding en dezelfde licentie voor afgeleide werken zijn vereist. Controleer ook de documentatie over auteursrecht op architectuur.

## Menselijke personages

- [Ara 3D Gen](https://github.com/olatunde85/3d-gen) — open-source generator (MIT-code) op basis van CC0 MakeHuman-assets. Exporteert rigged GLB/FBX-personages en animaties. De personage-assets worden apart opgehaald met de setup-stap van het project; ze zitten niet automatisch in deze game.

## Integratie-afspraken

1. Gebruik bij voorkeur GLB-bestanden voor Three.js en laad modellen lokaal uit de map assets/models/.
2. Bewaar per model de oorspronkelijke licentie en maker in assets/THIRD_PARTY_CREDITS.md.
3. Optimaliseer modellen voor mobiel: beperkte polygonen, gecomprimeerde textures, gedeelde materialen en waar mogelijk LOD.
4. Gebruik geen model zonder eerst de licentie en eventuele beperkingen van textures, animaties en bronfoto's te controleren.
