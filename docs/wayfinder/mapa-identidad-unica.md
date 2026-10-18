# Identidad única en lgzarturo.com

Etiquetas: `wayfinder:map`

## Destination

lgzarturo.com muestra una sola identidad en todas sus páginas —ficha de persona única, nombre y cargo canónicos, retrato, país, empleador, frase freelance, años dinámicos, CV legible y archivos de rastreo— verificada con Rich Results, grep y curl.

## Notes

- Dominio: SEO técnico y schema.org en Astro (este repo, sitio estático en Vercel).
- Ejecución dentro del mapa (override): el destino es el cambio hecho en place, no una spec. Los tickets son tareas que entregan incrementos verificables.
- Sesiones: consultar el skill `astro`. Solo invocar `grilling` + `domain-modeling` si hay que tocar términos de identidad ya fijados.
- Lenguaje fijado (rondas Q4–Q9): **nombre canónico** `Arturo L. Gómez`; **cargo canónico** `Technical Leader & Product Engineer`; **ficha única** = nodo `Person` con `@id https://lgzarturo.com/#person`; **variante** = cualquier otro nombre o cargo visible; años de experiencia = `añoActual − 2005` calculado en build-time.
- Copy freelance fijado (Q7): footer «No busco empleo, pero sí tomo proyectos y colaboraciones freelance de backend y arquitectura para hotelería y travel tech.»; badge del hero «Disponible para proyectos y freelance».
- Restricciones del repo: cada página pasa `title`, `description`, `canonical`, `ogType` a `BaseLayout`; cambios quirúrgicos, sin dependencias nuevas; verificación con `npm run build` limpio (no hay lint ni typecheck).
- Cero variantes (corrección Q4, decidida): ningún `Arturo LG` en `src/` ni `public/` — sin `alternateName`, sin mención de alias en el About, `short_name` del manifest = nombre canónico (si el SO trunca el despliegue, es truncamiento, no variante). Handles y URLs (`@algforge`, `lgzarturo` en enlaces) no son variantes y se conservan.

## Decisions so far

- [Ficha única de persona en todas las páginas](ficha-unica-de-persona.md): un solo nodo Person en la home (retrato, MX, Revenatium, sin alias) y 24 referencias @id en las 8 páginas.

## Not yet specified

Sin niebla a la vista: todo lo especificable está en tickets. Si un ticket abre preguntas nuevas, se gradúan aquí primero.

## Out of scope

- Perfil de GitHub, arthurolg.com, X y LinkedIn: fuera del repo por decisión Q1.
- vibes-scanner y sus 33 fichas de arquetipo: otro sitio, otra decisión.
- Traducciones i18n y hreflang (BC-013, BC-006): esfuerzo propio del backlog.
- Consolidación de dominio (BC-014) y URL de agenda (BC-007): decisiones de backlog fuera de este mapa.
- IndexNow, Search Console e informes de IA: medición y servicios externos, no identidad on-page.
- `sameAs` bidireccional: requiere editar propiedades externas.
- Imágenes OG por página: mejora social, no identidad.
