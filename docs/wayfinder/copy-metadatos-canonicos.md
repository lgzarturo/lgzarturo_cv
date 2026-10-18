# Copy y metadatos con identidad canónica, freelance y años dinámicos

- Tipo: `wayfinder:task` (AFK)
- Estado: abierto
- Asignado: sin asignar
- Mapa: [Identidad única en lgzarturo.com](mapa-identidad-unica.md)
- Bloqueado por: [Ficha única de persona en todas las páginas](ficha-unica-de-persona.md)

## Question

Dejar nombre canónico, cargo canónico, frase freelance y años dinámicos consistentes en títulos, descripciones, keywords identitarias, h1, defaults de `BaseLayout`, `site.webmanifest`, copy visible y descripciones de schema. Bloquea tras la ficha única porque tocan los mismos archivos (`index.astro` sobre todo).

Trabajo: crear constante compartida (p. ej. `src/data/site.ts`, hay precedente en `src/data/course.ts`) con nombre, cargo y `años = añoActual − 2005`, y usarla en copy, metas y schema (incluye badge «15+», `aria-label`, About, footer, hero y `recursos.astro` «más de 15 años»). Títulos `| Arturo LG` → nombre canónico; cargo `Software Architect` → cargo canónico en títulos, h1, metas y defaults del layout; `name` del manifest → nombre canónico; footer y badge del hero → copy freelance Q7.

Cero variantes (Q4): `short_name` del manifest = nombre canónico; About sin mención de alias. `Software Architect` puede permanecer como término de skill en `keywords`, nunca como cargo.

Nota: retirar variantes revierte BC-017 intencionalmente; al trabajar el ticket, documentar el porqué en `docs/adr/` (reversión con trade-off real: alias de marca vs consolidación de entidad).

Aceptación:

- [ ] `grep 'Arturo LG' src public` da cero (handles y URLs con `algforge`/`lgzarturo` no cuentan: no llevan espacio).
- [ ] `grep 15+ src public` da cero; el número renderizado equals añoActual − 2005.
- [ ] Cada página sigue pasando `title`, `description`, `canonical`, `ogType` a `BaseLayout`.
- [ ] `npm run build` limpio.
