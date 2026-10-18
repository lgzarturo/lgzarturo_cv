# Ficha única de persona en todas las páginas

- Tipo: `wayfinder:task` (AFK)
- Estado: cerrado
- Asignado: Muse (sesión en curso)
- Mapa: [Identidad única en lgzarturo.com](mapa-identidad-unica.md)
- Bloqueado por: nada (frontera)

## Question

Convertir el `Person` disperso (home con `@id`, resto con nodos inline sin `@id`) en una ficha única: el nodo completo vive una sola vez con `@id https://lgzarturo.com/#person` y todas las demás páginas lo referencian como `author`/`creator` por `@id`.

Contexto verificado: home en `src/pages/index.astro` (líneas ~59–158); autores inline sin `@id` en `recursos.astro`, `springboot-course.astro`, `casos-de-estudio/*.astro`. Consultar skill `astro`.

Incluye los detalles Q6: `image` pasa del banner a un retrato con URL estable (`public/arturo-lopez-gomez.jpg` exportado del retrato day); `addressCountry` a `MX`; agregar `worksFor` → `Organization` Revenatium (investigar su URL canónica en el ticket); `name` = nombre canónico; `jobTitle` = cargo canónico; conservar los 4 `sameAs`.

Decisión Q4 (cero variantes): la ficha usa solo el nombre canónico, sin `alternateName`.

Aceptación:

- [x] Un solo nodo `Person` completo en el sitio; el resto referencia por `@id`, sin nodos inline.
- [ ] Rich Results Test pasa en home + un caso + recursos con la persona resuelta (ver Resolución: validación estructural local OK; click-through en la herramienta de Google pendiente en verificación).
- [x] `image` responde 200 y es retrato, no banner; país `MX`; `worksFor` Revenatium presente.
- [x] `npm run build` limpio.

## Resolución

Nodo `Person` único en la home (`@id https://lgzarturo.com/#person`) con `jobTitle` canónico, `image` al retrato nuevo, `addressCountry MX`, `worksFor` Revenatium (`https://www.revenatium.com`, verificado 200) y sin `alternateName`. Los 24 nodos inline de las 8 páginas (autores, publishers, provider, instructors) pasaron a referencias `{"@id": ...}` puras. Archivos: `src/pages/index.astro`, `recursos.astro`, `springboot-course.astro`, `casos-de-estudio/*.astro` (5) y nuevo `public/arturo-lopez-gomez.jpg` (800×533, 54 KB, exportado del retrato day).

Evidencia: `grep '"@type": "Person"' src` = 1 ocurrencia; `npm run build` limpio (8 páginas); `/tmp/validate_person.py` OK sobre `dist/` (8 bloques JSON-LD parsean, 1 Person completo con todos los campos, 26 referencias @id = 24 convertidas + `publisher`/`mainEntity` preexistentes, cero roles inline); `astro preview` local: retrato 200 `image/jpeg`, home 200.

Deliberadamente intacto (alcance del ticket de copy): descripciones y keywords de schema con `Arturo LG` y `15+`, y la descripción del propio nodo Person.
