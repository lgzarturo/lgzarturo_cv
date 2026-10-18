# CV con texto seleccionable

- Tipo: `wayfinder:task` (AFK, con posible checklist HITL dentro)
- Estado: abierto
- Asignado: sin asignar
- Mapa: [Identidad única en lgzarturo.com](mapa-identidad-unica.md)
- Bloqueado por: nada (frontera)

## Question

El CV enlazado desde el hero es una imagen sin texto extraíble. Dejar un PDF con texto seleccionable en la misma URL (`/Arturo_L_Gomez_CV.pdf`).

Trabajo: verificar con `pdftotext` los tres PDF en `public/` (solo el del hero está enlazado; revisar si los otros dos se usan o son residuo); reconstruir el PDF con capa de texto (misma URL, mismo contenido visual salvo lo necesario). Si no hay fuente reconstruible y no se puede regenerar fielmente, el ticket pide al usuario el archivo fuente (checklist preciso) en vez de adivinar.

Aceptación:

- [ ] `pdftotext` sobre el PDF del hero extrae nombre, cargo y experiencia como texto.
- [ ] La URL del CV no cambia; el enlace del hero sigue funcionando.
- [ ] `npm run build` limpio.
