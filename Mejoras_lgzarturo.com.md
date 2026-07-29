# Mejoras para lgzarturo.com — Alineación con objetivos de marca personal

Fecha de revisión: Julio 2026
Objetivo evaluado: posicionar a Arturo L. Gómez como autoridad técnica para atraer oportunidades de negocio, consultoría y networking de alto nivel (no búsqueda de empleo).

Se revisaron las 5 páginas listadas en https://lgzarturo.com/sitemap-0.xml:
- / (Home)
- /casos-de-estudio/ats-startalent/
- /casos-de-estudio/programa-de-lealtad/
- /recursos/
- /springboot-course/

---

## Resumen ejecutivo

El sitio ya tiene el activo más difícil de construir: dos casos de estudio con estructura de reto → arquitectura → impacto → lección, con diagramas y métricas reales. Esto es exactamente lo que un hiring manager técnico o un prospecto de negocio espera ver de un Staff/Principal Engineer o de un asesor técnico. El nombre ya quedó unificado como "Arturo L. Gómez" en los title tags de todas las páginas revisadas, lo cual resuelve la inconsistencia detectada anteriormente.

Las oportunidades de mejora no son de construir contenido nuevo desde cero, sino de: (1) traducir al inglés tus mejores piezas para audiencia internacional/FANG, (2) curar y enfocar la página de recursos para que no diluya tu posicionamiento, (3) unificar y reforzar las llamadas a la acción de negocio, y (4) resolver la fragmentación de dominio entre lgzarturo.com (sitio/casos) y arthurolg.com (blog).

---

## 1. Home (/)

### Qué funciona bien
- Hero claro con propuesta de valor y métricas (70K+, -40%, +60%) visibles sin scroll.
- Sección "Filosofía de Liderazgo Técnico" aporta profundidad de criterio, no solo stack técnico.
- El footer ya declara explícitamente "No estoy en búsqueda activa de empleo" — esto está perfectamente alineado con tu objetivo.

### Mejoras recomendadas
- **Define un único CTA primario.** Hoy conviven "Ver proyectos", "Descargar CV" y "Notas Técnicas" con el mismo peso visual. Para un sitio que busca generar conversaciones de negocio, el CTA principal debería ser algo como "Hablemos de tu proyecto" o "Agenda una conversación", dejando "Descargar CV" como acción secundaria (útil solo si algún día un reclutador FANG llega ahí).
- **Considera agregar un enlace a un calendario (Calendly o similar)** junto al CTA principal. Un botón de "escríbeme" es más pasivo que un enlace directo para agendar 20-30 min; esto comunica que estás genuinamente abierto a conversaciones, sin sonar a que buscas trabajo.
- **La sección "Laboratorio de ideas" mezcla casos de empresa reales con experimentos personales** (Bootzen, MailMind, CompraEnLineaYa, Pokedev) sin distinguir visualmente su nivel de madurez. Recomiendo separar en dos bloques claros: "Casos con impacto de negocio" (los que ya tienen caso de estudio) vs. "Experimentos y side projects" (el resto), para que un visitante entienda rápido cuál es tu trabajo serio vs. tu laboratorio de aprendizaje.
- **Los artículos del blog están hospedados en arthurolg.com**, un dominio distinto a lgzarturo.com. Esto fragmenta tu autoridad de SEO entre dos dominios. A mediano plazo, evalúa si conviene consolidar bajo un solo dominio principal (o al menos usar un subdominio de lgzarturo.com, como blog.lgzarturo.com) para que todo el link equity construya una sola marca de búsqueda.
- **Agrega una sección o página "Colaboraciones y Servicios"** que explique en 3-4 líneas qué tipo de conversaciones te interesan (asesoría técnica, fractional CTO, revisiones de arquitectura, charlas). Hoy esa intención solo aparece de forma breve en el footer; una empresa o inversionista que llega a tu sitio buscando "en qué te puedo contratar/colaborar" no debería tener que inferirlo.

---

## 2. Caso de Estudio: ATS StarTalent (/casos-de-estudio/ats-startalent/)

### Qué funciona bien
- Estructura impecable: Reto → Arquitectura y Decisiones Técnicas → Impacto → Lección clave.
- Explicaste el "por qué" de cada decisión técnica (Groovy/Grails, VPS vs. hosting compartido), no solo el "qué". Esto es justo el nivel de razonamiento que se evalúa en entrevistas de arquitectura de FANG.
- Cierra con CTA de negocio explícito: "¿Tienes un producto que necesita un rediseño estratégico?".

### Mejoras recomendadas
- **Traduce esta página al inglés.** Es tu mejor pieza de portafolio técnico y hoy es invisible para cualquier reclutador o hiring manager que no lea español.
- **Agrega 1-2 líneas de contexto de negocio al inicio** (tamaño de la empresa, cuántos hoteles/usuarios finales, en qué mercado) para que alguien sin contexto previo de StarChoice entienda la escala del problema en los primeros 5 segundos.
- **Incluye un enlace de navegación cruzada** hacia el caso de "Programa de Lealtad" más visible (hoy solo existe "Ver caso anterior/siguiente" al final); ayuda a que quien llegue por SEO a un caso, descubra el segundo.

---

## 3. Caso de Estudio: Migración del Programa de Lealtad (/casos-de-estudio/programa-de-lealtad/)

### Qué funciona bien
- Mencionas explícitamente el patrón Strangler Fig, además de justificar por qué NO usaste Kubernetes ("hubiera sido over-engineering para nuestro tamaño"). Ese tipo de honestidad técnica es una señal fuerte de seniority real, no solo de conocer buzzwords.
- Métricas de impacto muy claras (+25% suscriptores, 0 min downtime, 5x velocidad de deploys).

### Mejoras recomendadas
- **Traduce esta página al inglés también** — junto con la de StarTalent, son tu dupla más fuerte para audiencia internacional.
- **Agrega una sección corta de "Equipo y mi rol específico".** El texto usa "elegimos"/"el equipo" en varias partes; para reforzar tu narrativa de autoridad individual, aclara qué decisiones fueron tuyas directamente (arquitectura, elección de stack) vs. cuáles fueron consenso de equipo. Esto no resta mérito al trabajo colaborativo, pero ayuda a un lector externo a identificar tu contribución específica.
- Considera añadir un diagrama o mención breve de **cómo mediste el éxito de la migración** (qué dashboards, qué alertas) — refuerza la narrativa de "ingeniería con observabilidad", coherente con tu perfil de LinkedIn.

---

## 4. Recursos y Aprendizaje (/recursos/)

### Qué funciona bien
- El "Radar Tecnológico" (Adopción / Trial / Hold) es un recurso de muy buen nivel — pocos perfiles individuales comunican su criterio tecnológico de forma tan clara y honesta (incluir "Hold" con PHP Legado y Grails es una señal de madurez, no de debilidad).
- Buena variedad de repositorios de aprendizaje que respaldan tu identidad de mentor/educador.

### Mejoras recomendadas
- **Esta página es la que más diluye tu posicionamiento.** Lista simultáneamente 9 "proyectos en marcha" de naturaleza muy distinta: herramientas internas (Cotizador, Faro-valt, Devtools), un blog de videojuegos (miraeljuego.com), una bolsa de trabajo (joobslot.com) y un portal de turismo (visitapormexico.com). Para alguien evaluando tu autoridad en hospitality/travel tech y AI-assisted engineering, esta mezcla puede leerse como dispersión en vez de foco.
- **Recomendación concreta:** deja visibles en esta página solo 3-4 proyectos que refuercen directamente tu narrativa (por ejemplo los relacionados con IA, SaaS o travel/hospitality como visitapormexico.com), y mueve el resto a una sección plegada tipo "Otros experimentos" o simplemente quítalos de la vista principal. Menos proyectos mostrados con más contexto transmiten más autoridad que una lista larga sin jerarquía.
- **"joobslot.com" (herramienta para promocionar posiciones de empleo)** contradice ligeramente tu mensaje de "no busco empleo, busco autoridad" si un visitante lo interpreta como que operas en el espacio de reclutamiento. Si el proyecto sigue activo, aclara en una línea que es una herramienta que construyes para terceros (SaaS), no una señal de que buscas vacantes.
- Agrega, si es posible, **un indicador de estado más claro** (idea / en desarrollo / en producción / archivado) de forma consistente para todos los proyectos — hoy algunos lo tienen ("En desarrollo", "Próximamente") y otros no.

---

## 5. Curso Gamificado Spring Boot + Kotlin (/springboot-course/)

### Qué funciona bien
- Es tu diferenciador más original: combina profundidad técnica real (TDD, Testcontainers, Spring Security, mensajería con Kafka/RabbitMQ) con una narrativa gamificada bien ejecutada.
- El roadmap semanal público con versionado (v0.0.1, v0.0.2...) demuestra cadencia de entrega constante — una señal de disciplina que cualquier empresa valora en un Staff Engineer.
- Enlace directo a GitHub y wiki del proyecto invita a colaboración real, coherente con tu identidad de builder open source.

### Mejoras recomendadas
- **Dale más visibilidad desde el Home y desde LinkedIn.** Hoy es una de tus piezas más fuertes de "enseño lo que sé" y está un poco escondida dentro de /recursos/. Considera destacarlo en el home con su propia tarjeta, al mismo nivel que los casos de estudio.
- **Agrega una sección de "Impacto/Comunidad"** una vez que tengas los primeros forks, estrellas o testimonios de quienes lo siguen — hoy la página es 100% sobre el contenido del curso, pero no muestra tracción externa (útil para reforzar percepción de autoridad).
- Igual que con los casos de estudio, si tu audiencia objetivo incluye reclutadores o ingenieros de habla inglesa, **evalúa traducir al menos el resumen y el "¿Qué es este curso gamificado?"** — es contenido muy compartible en comunidades internacionales de Spring Boot/Kotlin.

---

## 6. Recomendaciones transversales (todo el sitio)

- **SEO técnico:** audita el `<title>`, meta description y Open Graph de cada página para asegurar que incluyan de forma natural tus keywords principales (Technical Leader, Software Architect, Microservices, Spring Boot, Kotlin, AI-Assisted Engineering, Hospitality/Travel Tech). Esto afecta tanto el ranking en Google como la vista previa cuando compartes enlaces en LinkedIn.
- **Consistencia de dominio:** decide una estrategia clara entre lgzarturo.com (sitio/casos de estudio) y arthurolg.com (blog). Hoy dividir el contenido entre ambos fragmenta tu autoridad de búsqueda; considera unificar bajo un solo dominio principal a mediano plazo.
- **Versión en inglés:** de todo el sitio, prioriza traducir en este orden: (1) los dos casos de estudio, (2) el home, (3) el curso de Spring Boot. Son las piezas con mayor probabilidad de ser vistas por una audiencia internacional o un reclutador de una empresa FANG.
- **CTA de negocio unificado:** usa el mismo texto y mecanismo de contacto en todas las páginas (hoy varía entre "Escribirme", "Hablemos", "Cuéntame el contexto"). Un botón consistente, idealmente con enlace a agenda directa, refuerza profesionalismo.
- **Indicadores de estado y madurez:** aplica de forma consistente en toda página que liste proyectos (recursos, home) un badge de estado (Producción / En desarrollo / Experimento / Archivado) para que el visitante priorice qué mirar primero.

---

## Prioridad sugerida (si solo puedes hacer 3 cosas)

1. Traducir al inglés los dos casos de estudio (mayor ROI para visibilidad internacional/FANG).
2. Curar la página de /recursos/ para reducir de 9 a 3-4 proyectos destacados y mover el resto a una sección secundaria.
3. Definir un único CTA de negocio (idealmente con calendario) y aplicarlo de forma consistente en Home y en ambos casos de estudio.
