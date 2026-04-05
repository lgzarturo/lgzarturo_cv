// src/data/course.ts
// ──────────────────────────────────────────────────────────────
//  Edita este archivo para actualizar el progreso del curso.
//  Para marcar una semana como completada: cambia done: false → true
//  Para agregar un artículo del blog: cambia ready: false → true y pon el href
// ──────────────────────────────────────────────────────────────

export type MilestoneKey = 'M0' | 'M1' | 'M2' | 'M3' | 'M4' | 'M5' | 'M6';

export interface Milestone {
  label: string;
  color: string;
  icon: string;
}

export interface Week {
  n: number;
  done: boolean;
  ms: MilestoneKey;
  ver: string;
  date: string;
  name: string;
  detail: string;
}

export interface BlogPost {
  title: string;
  desc: string;
  tag: string;
  tagColor: string;
  href: string;
  ready: boolean;
}

// ── Definición de milestones ──────────────────────────────────
export const MILESTONES: Record<MilestoneKey, Milestone> = {
  M0: { label: 'Inicio',       color: '#6b7280', icon: '🌱' },
  M1: { label: 'Persistencia', color: '#f59e0b', icon: '🗄️' },
  M2: { label: 'Seguridad',    color: '#ef4444', icon: '🔐' },
  M3: { label: 'Testing',      color: '#22c55e', icon: '🧪' },
  M4: { label: 'Producción',   color: '#3b82f6', icon: '🚀' },
  M5: { label: 'Avanzado',     color: '#8b5cf6', icon: '⚡' },
  M6: { label: 'Release',      color: '#f97316', icon: '🏆' },
};

// ── Semanas del curso ─────────────────────────────────────────
// 👇 Cambia `done` a true para marcar como completada
export const weeks: Week[] = [
  { n: 1,  done: true,  ms: 'M0', ver: 'v0.0.1', date: '19 Oct 2025', name: 'Inicio y versión base',                   detail: 'Estructura base del proyecto, configuración inicial de Gradle, Spring Boot y primer milestone funcional.' },
  { n: 2,  done: true,  ms: 'M1', ver: 'v0.0.2', date: '26 Oct 2025', name: 'Persistencia y configuración (inicio)',     detail: 'JPA, entidades, repositorios y primeros casos de uso con persistencia real.' },
  { n: 3,  done: true,  ms: 'M1', ver: 'v0.0.2', date: '2 Nov 2025',  name: 'Perfiles, Gradle y Sentry',                detail: 'Cierre de Milestone 1: perfiles de Spring, tasks de Gradle, integración de Sentry y casos de uso completos.' },
  { n: 4,  done: true,  ms: 'M2', ver: 'v0.0.3', date: '9 Nov 2025',  name: 'Jakarta Validation + manejo de errores',   detail: 'Bean Validation, @ControllerAdvice global y respuestas de error estructuradas y consistentes.' },
  { n: 5,  done: true,  ms: 'M2', ver: 'v0.0.3', date: '16 Nov 2025', name: 'Spring Security + JWT',                    detail: 'Autenticación con JWT, definición de roles y protección de endpoints con Spring Security.' },
  { n: 6,  done: false, ms: 'M3', ver: 'v0.0.4', date: '--', name: 'Tests con Testcontainers',                 detail: 'Pruebas unitarias y de integración con base de datos real usando Testcontainers.' },
  { n: 7,  done: false, ms: 'M3', ver: 'v0.0.4', date: '--', name: 'OpenAPI/Swagger + Sentry en tests',        detail: 'Documentación de la API con OpenAPI 3, Swagger UI y trazabilidad de errores en el pipeline de tests.' },
  { n: 8,  done: false, ms: 'M4', ver: 'v0.0.5', date: '--',  name: 'Actuator y empaquetado',                   detail: 'Spring Boot Actuator, health checks personalizados y empaquetado listo para producción.' },
  { n: 9,  done: false, ms: 'M4', ver: 'v0.0.5', date: '--', name: 'CORS, rate limiting y monitoreo',          detail: 'Seguridad reforzada: CORS, rate limiting, cabeceras de seguridad y monitoreo avanzado con Sentry.' },
  { n: 10, done: false, ms: 'M5', ver: 'v0.0.6', date: '--', name: 'Eventos de dominio + RabbitMQ/Kafka',      detail: 'Eventos de dominio, procesamiento async, mensajería con RabbitMQ o Kafka y caching con Spring Cache.' },
  { n: 11, done: false, ms: 'M5', ver: 'v0.0.6', date: '--', name: 'Gradle avanzado + JWT reforzado',          detail: 'Ajustes de Gradle, pruebas de integración para mensajería y caching, y seguridad JWT avanzada.' },
  { n: 12, done: false, ms: 'M6', ver: 'v1.0.0', date: '--',  name: 'Integración final',                        detail: 'Gestión completa de módulos, pruebas end-to-end y documentación final del proyecto.' },
  { n: 13, done: false, ms: 'M6', ver: 'v1.0.0', date: '--', name: 'CI/CD y release final',                    detail: 'Pipeline CI/CD completo, cobertura >85%, versionamiento semántico y release a producción.' },
];

// ── Artículos del blog ────────────────────────────────────────
// 👇 Cambia `ready` a true y pon el href cuando el artículo esté publicado
export const blogPosts: BlogPost[] = [
  {
    title: 'El fin de la ceremonia innecesaria en Spring Boot',
    desc: 'En lugar de diseñar para un futuro incierto, he llegado a la conclusión de que es más pragmático diseñar para el presente.',
    tag: 'Spring Boot', tagColor: '#22c55e',
    href: 'https://www.arthurolg.com/article/programming_arquitectura-hexagonal-vs-mvc-spring-boot-pragmatico', ready: true,
  },
  {
    title: '¿Por qué Spring Boot es tan popular? Una mirada honesta',
    desc: 'Spring Boot se ha convertido en el framework de referencia para el desarrollo backend en Java, y su popularidad no es casualidad.',
    tag: 'Spring Boot', tagColor: '#582ff4',
    href: 'https://www.arthurolg.com/springboot', ready: true,
  },
  {
    title: 'Lecciones que Spring Boot me Enseñó a la Fuerza sobre Java',
    desc: 'Invierte en comprender los fundamentos profundos, participa activamente en comunidades técnicas, y recuerda: el mejor código es aquel que se comparte y mejora colectivamente.',
    tag: 'Kotlin', tagColor: '#8b5cf6',
    href: 'https://www.arthurolg.com/article/programming_backend-java-spring-boot-lecciones-curso', ready: true,
  },
  {
    title: 'Desarrollo de software y aprendizaje continuo: una perspectiva personal',
    desc: 'El aprendizaje continuo es una práctica fundamental que garantiza la evolución constante de las habilidades y el conocimiento de los programadores.',
    tag: 'Desarrollo', tagColor: '#f59e0b',
    href: 'https://www.arthurolg.com/article/technology_learning-resources-github-repos', ready: true,
  },
  {
    title: 'Testcontainers: tests de integración sin mocks falsos',
    desc: 'Levanta PostgreSQL real en tus tests y deja de fingir que H2 es suficiente.',
    tag: 'TDD', tagColor: '#3b82f6',
    href: '#', ready: false,
  },
];

// ── Stats derivados (no editar) ───────────────────────────────
export const completedWeeks  = weeks.filter(w => w.done).length;
export const totalWeeks      = weeks.length;
export const progressPercent = Math.round((completedWeeks / totalWeeks) * 100);
export const currentLevel    = completedWeeks;
export const lastVersion     = [...weeks].filter(w => w.done).at(-1)?.ver ?? 'v0.0.1';