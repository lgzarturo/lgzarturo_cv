---
name: pragmatic-astro-design
description: Analiza las decisiones de diseño de Basecamp, HEY, Fizzy, Writebook y Campfire para crear sistemas de diseño pragmáticos con Astro y Tailwind CSS.
---

# Sistema de Diseño Pragmático para Astro

Crea sistemas de diseño e interfaces web inspirados en las decisiones de diseño de Basecamp y sus productos, sin copiarlos, para sitios y aplicaciones construidos con Astro y Tailwind CSS.

## Cuándo usar

Usa esta skill cuando el usuario pida:

- Diseñar o rediseñar una página, sitio o interfaz con Astro.
- Definir o evolucionar un sistema de diseño (tipografía, escala, layout, componentes).
- Revisar una UI buscando simplicidad, jerarquía clara y espacios con aire.

## Fuentes de inspiración

Analiza patrones y decisiones, nunca copies textos, marcas, ilustraciones ni código:

- https://basecamp.com/
- https://www.hey.com/
- https://www.fizzy.do/
- https://once.com/writebook
- https://once.com/campfire

Extrae qué hace cada sitio: propuesta de valor directa, jerarquía tipográfica marcada, secciones cortas, CTAs escasos, prueba social compacta, precios simples, ilustración con carácter propio.

## Principios no negociables

1. Inspiración, no copia: reinterpreta patrones con voz, tipografía y color propios.
2. Pragmatismo pulido: menos elementos, mejor jerarquía, cada sección responde una sola pregunta.
3. Aire para respirar: generoso `padding` vertical, anchos de lectura estrechos (`max-w-prose` / `max-w-3xl` para texto, `max-w-6xl` para página), un solo foco por viewport.
4. Mobile first y responsivo: diseña primero a 360px, luego escala con `sm:`, `md:`, `lg:`.
5. Facilidad: navegación obvia, copy corto, estados claros (hover, focus, disabled, vacío, error).

## Proceso

1. **Observar:** identifica en las fuentes el patrón relevante (hero, features, pricing, manifiesto, onboarding, dashboard) y nómbralo en una línea.
2. **Destilar:** traduce el patrón a una decisión abstracta (ejemplo: "hero de una sola columna, titular grande, un CTA primario, captura pequeña debajo").
3. **Definir:** convierte la decisión en tokens y componentes Tailwind reutilizables, con variantes responsive y estados.
4. **Aplicar en Astro:** propone estructura de página con layouts y componentes Astro (`.astro`), estilos solo con clases Tailwind más tokens CSS mínimos.

## Salida esperada

Toda propuesta debe definir, en este orden:

1. **Tipografía propia:** una familia para titulares y una para texto (o una sola con dos pesos), escala modular (`text-sm` a `text-5xl`), interlineados y anchos de línea. Justifica por qué se parece en espíritu, no en forma, a las fuentes de referencia.
2. **Tamaños y espaciado:** escala de espaciado 4/8px, ritmo vertical de secciones (`py-16 md:py-24`), contenedores y breakpoints.
3. **Estructura de contenidos:** orden de secciones de la página o regiones de la interfaz, con el objetivo de cada bloque en una frase.
4. **Componentes Tailwind:** botones, tarjetas, formularios, navegación, hero, features, testimonios, pricing, footer y estados vacíos/error. Cada uno con clases Tailwind, variantes y ejemplo de uso en Astro.
5. **Color y superficie:** paleta mínima (fondo, texto, acento, bordes, estados), con contraste suficiente y soporte de modo claro/oscuro solo si el proyecto ya lo usa.

## Restricciones

- El stack de estilos es siempre Tailwind CSS; evita CSS custom salvo tokens (`:root`) estrictamente necesarios.
- Sirve tanto para sitios de marketing como para interfaces UX-UI (paneles, listas, formularios, pantallas de app).
- No inventes dependencias nuevas; usa lo instalado en el proyecto.
- Si falta información (audiencia, objetivo de la página, contenido real), asume el caso más simple, diséñalo y anota la suposición en una línea.
