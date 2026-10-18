# llms.txt y robots con rastreadores IA

- Tipo: `wayfinder:task` (AFK)
- Estado: abierto
- Asignado: sin asignar
- Mapa: [Identidad única en lgzarturo.com](mapa-identidad-unica.md)
- Bloqueado por: nada (frontera)

## Question

Crear `public/llms.txt` (hoy da 404) y declarar explícitamente los rastreadores de búsqueda con IA en `public/robots.txt` (hoy solo `Allow: /` genérico + sitemap).

Trabajo: `llms.txt` con resumen del sitio, identidad canónica (nombre + cargo), enlaces canónicos (home, casos de estudio, recursos, curso, contacto) y nota de freelance; `robots.txt` con `Allow` explícito para OAI-SearchBot, PerplexityBot, Claude-SearchBot y Bingbot, conservando la línea de sitemap. Verificar contra `npm run preview` (Astro sirve `public/` en raíz).

Aceptación:

- [ ] `/llms.txt` responde 200 con resumen, identidad y enlaces canónicos.
- [ ] `robots.txt` nombra los cuatro bots IA y conserva el sitemap.
- [ ] `npm run build` limpio.
