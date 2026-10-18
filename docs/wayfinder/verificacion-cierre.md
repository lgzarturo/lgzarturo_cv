# Verificación de cierre de identidad única

- Tipo: `wayfinder:task` (AFK)
- Estado: abierto
- Asignado: sin asignar
- Mapa: [Identidad única en lgzarturo.com](mapa-identidad-unica.md)
- Bloqueado por: [Ficha única de persona en todas las páginas](ficha-unica-de-persona.md), [Copy y metadatos con identidad canónica, freelance y años dinámicos](copy-metadatos-canonicos.md), [CV con texto seleccionable](cv-texto-seleccionable.md), [llms.txt y robots con rastreadores IA](llms-robots-ia.md)

## Question

Verificar los cuatro criterios internos de Q3 y cerrar el mapa: Rich Results, grep, curl en producción y CV.

Trabajo: tras el deploy a producción (push → Vercel), comprobar (1) Rich Results Test en home + un caso + recursos con la persona única resuelta (herramienta manual de Google; si la sesión no tiene navegador, validar estructura con `/tmp/validate_person.py` o equivalente y dejar el click-through al humano); (2) greps (`Arturo LG` cero, `15+` cero, años = añoActual − 2005); (3) `curl` en producción de `/llms.txt` y `robots.txt` con bots IA; (4) `pdftotext` del CV en producción con texto extraíble. Registrar evidencias (URLs, salidas) como comentario de cierre del ticket.

Aceptación:

- [ ] Los cuatro criterios verificados en producción con evidencia registrada.
- [ ] `npm run build` limpio en el commit verificado.
- [ ] Mapa cerrado: Decisiones-so-far completa, cero tickets abiertos.
