# BACKLOG.md — lgzarturo.com

> Cola operativa en formato **OpenSpec / CodeConductor**. Cada item es una unidad
> entregable con criterios de aceptación medibles. No procesar items con
> aceptación vaga ("mejorar UX", "arreglar SEO"): toda aceptación aquí es
> verificable con una herramienta o inspección concreta.

## Global

- Product: lgzarturo.com — sitio de marca personal de Arturo L. Gómez (Astro 6 + React + Tailwind CSS 4, deploy estático).
- Strategy: Posicionar a Arturo L. Gómez como autoridad técnica (Staff/Principal Engineer, asesor técnico) para atraer conversaciones de negocio, consultoría y networking de alto nivel, no búsqueda de empleo.
- Policy: YAGNI, Stdlib-first, cambios quirúrgicos (tocar solo lo planeado), seguir patrones de Astro/Tailwind y el sistema de DESIGN.md, sin dependencias nuevas salvo justificación documentada.
- Review required: yes
- TDD required: no
- Focus: (1) cambios requeridos en el sitio, (2) SEO on-page, (3) datos estructurados schema.org, (4) microformatos para redes sociales (Open Graph / Twitter Cards).
- Skills: astro, seo-review, pagespeed-perf, modern-web-guidance, a11y-debugging.

### Notas de entrega (sesión 2026-07-28)

Entregados e archivados: BC-001, BC-002, BC-003, BC-004, BC-005, BC-008, BC-010, BC-011, BC-012. Verificación: `npm run build` limpio (5 páginas) + inspección del HTML/CSS generado. Diferidos por requerir decisión del usuario: BC-007 (texto/URL de agenda), BC-009 (qué proyectos), BC-013 (traducciones), BC-014 (ADR de dominio) y BC-006 (depende de BC-013).

---

## Items

### BC-006 | hreflang y preparación i18n para versión en inglés

- Priority: P3
- Status: TODO
- Type: feature
- Depends on: BC-013
- Description: Una vez existan versiones en inglés, añadir enlaces hreflang recíprocos es/en/x-default para que Google sirva la variante correcta y no trate las páginas como contenido duplicado, habilitando la audiencia internacional priorizada en el documento.
- Scope: Emitir link rel alternate hreflang en BaseLayout para páginas con par es/en; og:locale:alternate; ruteo /en/ en Astro.
- Out of scope: La traducción del contenido en sí (BC-013).
- Acceptance:
- [ ] Cada página con par bilingüe emite hreflang es, en y x-default recíprocos y correctos.
- [ ] Google Search Console no reporta errores de hreflang tras el despliegue.
- [ ] La etiqueta og:locale:alternate está presente en las páginas bilingües.

---

### BC-007 | Unificar CTA de negocio con agenda directa

- Priority: P1
- Status: TODO
- Type: feature
- Depends on: none
- Description: Hoy conviven CTAs con el mismo peso (Ver proyectos, Descargar CV, Notas Técnicas) y el texto de contacto varía por página, mientras el documento prioriza un único CTA de negocio consistente, idealmente con enlace a agenda, en home y ambos casos de estudio. La sección Colaboraciones y servicios (BC-010) y los casos usan enlaces interinos a contacto/email a la espera de la URL de agenda.
- Scope: Definir un CTA primario único y aplicarlo en home y los 2 casos de estudio; degradar Descargar CV a acción secundaria; enlazar a una agenda o contacto.
- Out of scope: Rediseño visual completo del hero; página de servicios (ya cubierta por BC-010).
- Acceptance:
- [ ] La home muestra un único CTA primario jerarquizado y Descargar CV queda como acción secundaria.
- [ ] El mismo texto y mecanismo de contacto aparece en home y en los dos casos de estudio.
- [ ] El CTA enlaza a un destino de agenda o contacto funcional provisto por el usuario.

---

### BC-009 | Curar recursos: enfocar proyectos y estados consistentes

- Priority: P2
- Status: TODO
- Type: feature
- Depends on: none
- Description: La página recursos lista 9 proyectos heterogéneos que diluyen el posicionamiento; el documento recomienda dejar 3-4 alineados a la narrativa (IA, SaaS, travel/hospitality), mover el resto a Otros experimentos, badges de estado consistentes, y aclarar que joobslot.com es un SaaS para terceros.
- Scope: Reducir a 3-4 proyectos destacados; sección plegable Otros experimentos; badge de estado consistente para todos; nota aclaratoria de joobslot.
- Out of scope: Eliminar el Radar Tecnológico; rediseño total de la página.
- Acceptance:
- [ ] La vista principal muestra 3-4 proyectos destacados alineados a la narrativa.
- [ ] El resto de proyectos vive en una sección Otros experimentos plegada o secundaria.
- [ ] Todo proyecto listado tiene un badge de estado del conjunto cerrado y joobslot describe su naturaleza SaaS.

---

### BC-013 | Traducción al inglés de casos de estudio y Home

- Priority: P3
- Status: TODO
- Type: feature
- Depends on: none
- Description: Prioridad top del documento: traducir al inglés las piezas de mayor ROI para audiencia internacional, en orden los dos casos de estudio, el home y el resumen del curso, lo que además habilita hreflang en BC-006.
- Scope: Rutas /en/ para los dos casos y el home con contenido traducido y estructura i18n mínima en Astro.
- Out of scope: hreflang (BC-006); traducir recursos completo.
- Acceptance:
- [ ] Existen versiones en inglés navegables de los dos casos de estudio y del home bajo /en/.
- [ ] Las versiones en inglés entran al sitemap con canonical propio.
- [ ] El contenido traducido conserva la estructura y las métricas del original.

---

### BC-014 | ADR estrategia de consolidación de dominio

- Priority: P3
- Status: TODO
- Type: tech-debt
- Depends on: none
- Description: El blog vive en arthurolg.com y el sitio en lgzarturo.com, fragmentando el link equity entre dos dominios; antes de implementar nada hay que decidir la estrategia y documentarla como ADR, por lo que es un item de decisión y no de código directo.
- Scope: ADR con contexto, opciones evaluadas (subdominio, migración o statu quo con canonicals), decisión y consecuencias, más plan de redirects 301 si aplica.
- Out of scope: La migración o implementación del dominio, que será item propio tras la decisión.
- Acceptance:
- [ ] Existe el archivo docs/adr/ADR-0001-estrategia-dominio.md con estado, contexto, decisión y consecuencias.
- [ ] La decisión especifica el destino canónico y, si aplica, la tabla de redirects 301.

---

## Archive

### BC-001 | Crear imágenes de vista previa social (OG/Twitter)

- Priority: P0
- Status: DONE
- Type: bug
- Depends on: none
- Progress: 100
- Description: BaseLayout referenciaba imágenes OG/Twitter inexistentes; se generó public/og-image.jpg (1200x630) con branding y Twitter reutiliza esa imagen, eliminando las referencias rotas.
- Scope: Generar public/og-image.jpg con ImageMagick usando el gradiente de marca; apuntar twitter:image a la misma imagen.
- Out of scope: Imágenes OG por página; rediseño del branding.
- Acceptance:
- [ ] public/og-image.jpg de 1200x630 px y menor a 300 KB (resultó 48 KB).
- [ ] npm run build genera dist/og-image.jpg accesible en la raíz.
- [ ] No quedan referencias a imágenes inexistentes en el HTML renderizado.

---

### BC-002 | Parametrizar Open Graph y Twitter Cards por página

- Priority: P1
- Status: DONE
- Type: feature
- Depends on: none
- Progress: 100
- Description: BaseLayout ahora acepta props ogImage/ogImageAlt/keywords/twitterCard y emite og:site_name, og:locale es_MX, og:image:width/height/alt, twitter:site y twitter:creator @arturolgdev; los casos de estudio y el curso pasan ogType article.
- Scope: Props en BaseLayout y microformatos completos; ogType article en casos y curso.
- Out of scope: Creación de imágenes por página; traducción; schema.org.
- Acceptance:
- [ ] BaseLayout acepta ogImage/ogImageAlt con fallback a og-image.jpg.
- [ ] El HTML incluye og:site_name, og:locale es_MX, og:image:width/height/alt, twitter:site y twitter:creator @arturolgdev.
- [ ] Cada página muestra exactamente una og:image y una og:title sin duplicados.

---

### BC-003 | Corregir head duplicado y meta repetidas en springboot-course

- Priority: P1
- Status: DONE
- Type: bug
- Depends on: none
- Progress: 100
- Description: Se eliminó el head anidado del curso que duplicaba meta dentro del body; ahora title/description/canonical/ogImage/ogType van por props de BaseLayout y el JSON-LD Course y las fuentes van por slot head.
- Scope: Eliminar head anidado; mover meta a props; conservar Course y fuentes Pixelify/JetBrains vía slot.
- Out of scope: Cambios de contenido del curso.
- Acceptance:
- [ ] El HTML de /springboot-course tiene un único head y una sola etiqueta por meta.
- [ ] Las fuentes Pixelify Sans y JetBrains Mono siguen cargando.
- [ ] npm run build sin head dentro del body.

---

### BC-004 | Reestructurar datos estructurados schema.org por tipo de página

- Priority: P1
- Status: DONE
- Type: feature
- Depends on: none
- Progress: 100
- Description: Se quitó el Person estático del layout global; la home emite WebSite y ProfilePage/Person, los casos de estudio BreadcrumbList y TechArticle, y el curso Course con provider e instructor.
- Scope: Grafo schema.org por tipo de página; sin Person residual del layout.
- Out of scope: Microformatos OG/Twitter; traducciones y hreflang.
- Acceptance:
- [ ] Person deja de inyectarse globalmente y no aparece duplicado.
- [ ] La home valida WebSite y ProfilePage/Person.
- [ ] Cada caso valida BreadcrumbList y TechArticle; el curso valida Course con provider e instructor.

---

### BC-005 | Optimizar title, description, keywords y canonical por página

- Priority: P2
- Status: DONE
- Type: feature
- Depends on: none
- Progress: 100
- Description: Se ajustaron title, description y keywords por página con keywords objetivo, se alinearon los canonicals con el trailing slash del sitemap y se corrigió el comentario de archivo en recursos.astro.
- Scope: title, description y keywords por página; canonicals con trailing slash; fix comentario recursos.astro.
- Out of scope: Reescritura del contenido del cuerpo; traducción.
- Acceptance:
- [ ] Cada página tiene title y description propios con keywords objetivo.
- [ ] Las keywords de cada página reflejan su tema.
- [ ] El canonical de cada página coincide con su URL del sitemap incluido el trailing slash.

---

### BC-008 | Home: separar casos con impacto y experimentos con badges de estado

- Priority: P2
- Status: DONE
- Type: feature
- Depends on: none
- Progress: 100
- Description: La sección Laboratorio de ideas se reorganizó en dos bloques (Casos con impacto de negocio y Experimentos y otros proyectos) y cada tarjeta muestra un badge de estado de un conjunto cerrado (Producción, En desarrollo, Experimento).
- Scope: Dos bloques diferenciados y badge de estado consistente por tarjeta.
- Out of scope: Crear nuevos casos de estudio; cambios en recursos.
- Acceptance:
- [ ] Dos bloques diferenciados para casos con impacto y experimentos.
- [ ] Cada tarjeta muestra un badge de estado de un conjunto cerrado y consistente.
- [ ] Los dos casos con estudio quedan en el bloque de impacto y el resto en experimentos.

---

### BC-010 | Sección o página Colaboraciones y Servicios

- Priority: P2
- Status: DONE
- Type: feature
- Depends on: none
- Progress: 100
- Description: Se añadió una sección Colaboraciones y servicios en la home con cuatro tipos de colaboración (asesoría técnica, fractional CTO, revisiones de arquitectura, charlas y mentoring); el CTA definitivo depende de BC-007.
- Scope: Nueva sección con tipos de colaboración enlazando al bloque de contacto interino.
- Out of scope: Sistema de reservas o pagos; formularios complejos.
- Acceptance:
- [ ] Existe una sección que enumera explícitamente los tipos de colaboración ofrecidos.
- [ ] La sección se integra en la home y compila sin errores.
- [ ] El CTA definitivo con agenda se cierra en BC-007.

---

### BC-011 | Destacar el curso Spring Boot desde el Home

- Priority: P3
- Status: DONE
- Type: feature
- Depends on: none
- Progress: 100
- Description: Se añadió una tarjeta destacada de ancho completo del curso Spring Boot al inicio del laboratorio, con jerarquía superior a las tarjetas normales y enlace a /springboot-course.
- Scope: Tarjeta destacada del curso en el home con enlace a la página del curso.
- Out of scope: Cambios en la página del curso; sección de comunidad o tracción.
- Acceptance:
- [ ] El home muestra una tarjeta del curso con jerarquía equivalente o superior a los casos de estudio.
- [ ] La tarjeta enlaza correctamente a la página del curso.

---

### BC-012 | Navegación cruzada visible entre casos de estudio

- Priority: P3
- Status: DONE
- Type: feature
- Depends on: none
- Progress: 100
- Description: Cada caso de estudio muestra un bloque visible Otros casos de estudio con una tarjeta que enlaza recíprocamente al otro caso, además del enlace de volver al inicio.
- Scope: Bloque visible con enlace recíproco entre ATS StarTalent y Programa de Lealtad.
- Out of scope: Crear casos nuevos.
- Acceptance:
- [ ] Cada caso de estudio enlaza de forma visible al otro caso.
- [ ] Los enlaces entre ambos casos son recíprocos y correctos.

---

### BC-015 | Estandarización profunda del diseño de springboot-course

- Priority: P1
- Status: DONE
- Type: refactor
- Depends on: BC-003
- Progress: 100
- Description: Se migró el diseño del curso al sistema de DESIGN.md conservando el acento gamificado: tokens estructurales con modo claro por defecto y modo oscuro neón bajo .dark, acentos de texto legibles theme-aware, glow solo en oscuro, tipografía Inter para el cuerpo y fondo de página que respeta el tema, manteniendo Pixelify en títulos y JetBrains en mono.
- Scope: Tokens light/dark, acentos legibles, glow theme-aware, Inter en cuerpo, fondo temático; conservar identidad pixel.
- Out of scope: Reescritura del contenido; cambios de copy del curso.
- Acceptance:
- [ ] La página responde al toggle claro/oscuro del sitio (tokens en :root y .dark compilados).
- [ ] El cuerpo usa Inter y los títulos conservan el acento Pixelify.
- [ ] npm run build limpio y sin regresión de fuentes.
