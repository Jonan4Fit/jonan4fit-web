# Web de Jonan4Fit (jonan4fit-web)

Web estática hecha con [Astro](https://astro.build). No usa base de datos, ni servidor, ni
servicios de pago. Se aloja gratis en Cloudflare Pages.

Esta guía está pensada para que puedas mantenerla **sin ser desarrollador**. Léela entera una
vez; después solo necesitarás las secciones puntuales que uses.

---

## 1. Cómo ver la web

### Sin instalar nada (recomendado para el día a día)

No necesitas instalar nada en tu ordenador para publicar cambios: editas un archivo, lo subes a
GitHub, y Cloudflare Pages compila y publica la web automáticamente en 1-2 minutos (ver sección
6). Puedes revisar el resultado en la URL que te da Cloudflare cada vez.

### Si quieres verla en tu ordenador antes de subirla (opcional)

Hace falta tener instalado [Node.js](https://nodejs.org) (versión 22 o superior, descarga el
instalador "LTS"). Una vez instalado, desde la carpeta del proyecto:

```bash
npm install
npm run dev
```

Abre la URL que aparezca en la terminal (normalmente `http://localhost:4321`). Cada vez que
guardes un archivo, la página se actualiza sola.

---

## 2. Cómo cambiar textos

Cada página vive en `src/pages/`, con nombres claros:

| Página | Archivo |
|---|---|
| Inicio | `src/pages/index.astro` |
| Clases presenciales | `src/pages/clases.astro` |
| Clases particulares | `src/pages/particulares.astro` |
| Entrenamiento online | `src/pages/entrenamiento-online.astro` |
| Nutrición | `src/pages/nutricion.astro` |
| Sobre mí | `src/pages/sobre-mi.astro` |
| Preguntas frecuentes | `src/pages/faq.astro` (el contenido real está en `src/data/faq.ts`) |
| Contacto | `src/pages/contacto.astro` |

Dentro de cada archivo `.astro`, el texto visible está entre las etiquetas (por ejemplo
`<h1>Entrena escalada...</h1>` o dentro de `<p>...</p>`). Puedes editarlo directamente con
cualquier editor de texto (o desde el propio GitHub, ver sección 6). No toques lo que hay entre
`{` y `}` ni las palabras que empiezan por `class=`.

---

## 3. Cómo cambiar precios

**Todos los precios del negocio están en un único archivo:** `src/data/precios.ts`.

Por ejemplo, para subir el entrenamiento de fuerza de 50 € a 55 €/mes, busca este bloque y cambia
el número:

```ts
export const entrenamientoOnline = {
  fuerza: { precioMes: 50, nombre: 'Fuerza y movilidad' },
  ...
```

Cambia `50` por `55` y guarda. Ese precio se actualizará automáticamente en la home, en la página
de entrenamiento online y en cualquier otro sitio donde aparezca, porque todas las páginas leen
el precio desde aquí — no hay que buscarlo en varios archivos.

Lo mismo aplica a:
- Clases de adultos e infantiles (mismo archivo, bloques `clasesAdultos` y `clasesInfantiles`).
- Particulares (bloque `particulares`).
- Nutrición con INDYA (bloque `nutricion`).

---

## 4. Cómo cambiar horarios

Los horarios de las clases presenciales están en `src/data/horarios.ts`. Cada línea es un día y
un horario:

```ts
{ dias: 'Martes y jueves', horario: '09:00–10:30' },
```

Añade, borra o edita líneas siguiendo el mismo formato.

---

## 5. Cómo cambiar el número de WhatsApp

Está centralizado en `src/data/config.ts`, al principio del archivo:

```ts
export const contact = {
  whatsappNumber: '34611776778',
  ...
```

Ya está configurado con tu número real (+34 611 77 67 78). Si en el futuro cambia, sustitúyelo
aquí **en formato internacional, sin espacios ni signos** (código de país + número) y se
actualizará en todos los botones de WhatsApp de la web a la vez.

---

## 6. Cómo añadir tus fotos

Ahora mismo la web usa marcadores visuales (bloques con rayas) en lugar de fotos reales, para que
puedas publicarla ya y sustituirlas cuando tengas el material. Cada marcador indica qué foto va
ahí.

### Fotos necesarias

Son 6 fotos en total. El detalle completo de cada una (página, sección, qué debe aparecer,
orientación, proporción y resolución mínima) está en el mensaje de la sesión en la que se creó
esta lista; resumen rápido aquí:

| # | Página | Sección | Qué debe aparecer | Orientación | Proporción | Resolución mínima |
|---|---|---|---|---|---|---|
| 1 | Inicio | Hero (portada) | Jonan entrenando o escalando en Vuit Climbing Club | Vertical | 4:5 | 1200×1500 px |
| 2 | Inicio | Bloque "Sobre mí" | Retrato de Jonan | Cuadrada | 1:1 | 1000×1000 px |
| 3 | Clases | Metodología | Clase de adultos escalando en boulder | Horizontal | 4:3 | 1600×1200 px |
| 4 | Particulares | Cuándo elegir una particular | Clase particular, entrenador con un alumno en pared | Horizontal | 4:3 | 1600×1200 px |
| 5 | Entrenamiento online | Cómo funciona el seguimiento | Foto o captura de TrainingPeaks en uso | Horizontal | 4:3 | 1600×1200 px |
| 6 | Sobre mí | Hero (portada) | Retrato profesional de Jonan | Vertical | 4:5 | 1200×1500 px |

Recomendaciones: buena luz, fondo del rocódromo o pared de boulder, formato `.jpg` o `.webp`
comprimido (menos de 500 KB por foto para que la web siga cargando rápido).

### Dónde colocarlas

Copia los archivos dentro de `public/images/` (ya hay carpetas creadas por servicio, por ejemplo
`public/images/hero/`, `public/images/sobre-mi/`, etc.). El nombre del archivo no importa, pero
usa algo descriptivo, por ejemplo `jonan-boulder-01.jpg`.

### Cómo sustituir un marcador por la foto real

Busca en el archivo `.astro` correspondiente una línea como esta:

```astro
<PlaceholderImage label="Foto: Jonan entrenando o escalando en Vuit Climbing Club" ratio="4 / 5" />
```

Y sustitúyela por una etiqueta de imagen normal:

```astro
<img src="/images/hero/jonan-boulder-01.jpg" alt="Jonan entrenando en Vuit Climbing Club" width="1200" height="1500" loading="lazy" />
```

(Deja `loading="lazy"` en todas las fotos excepto la primera imagen del hero de portada, para que
la web cargue más rápido.)

---

## 7. Contenido pendiente en "Sobre mí"

La página `src/pages/sobre-mi.astro` tiene dos bloques marcados como `[PLACEHOLDER — ...]` con
instrucciones de qué escribir (tu presentación personal y tu formación/trayectoria). No se ha
inventado ningún dato de titulación, años de experiencia o logros porque no aparecían en la
documentación de base. Sustitúyelos por tu texto real antes de publicar.

---

## 8. Cómo subirla a GitHub

Si nunca has usado GitHub:

1. Crea una cuenta gratuita en [github.com](https://github.com) si no tienes una.
2. Crea un repositorio nuevo (botón verde "New"), llámalo por ejemplo `jonan4fit-web`, y déjalo
   **privado o público** (ambos funcionan con Cloudflare Pages). No marques ninguna casilla de
   "Add README" ni ".gitignore" al crearlo.
3. En tu ordenador, abre la Terminal, sitúate en la carpeta del proyecto y ejecuta:

```bash
git init
git add .
git commit -m "Primera versión de la web"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/jonan4fit-web.git
git push -u origin main
```

(Sustituye `TU-USUARIO` por tu nombre de usuario de GitHub; la URL exacta te la da GitHub al
crear el repositorio, en el botón "Copy" de la pantalla que aparece tras crearlo.)

---

## 9. Cómo publicarla gratis en Cloudflare Pages

1. Crea una cuenta gratuita en [Cloudflare](https://dash.cloudflare.com/sign-up) si no tienes.
2. En el panel de Cloudflare, ve a **Workers & Pages → Create → Pages → Connect to Git**.
3. Autoriza el acceso a GitHub y selecciona el repositorio `jonan4fit-web`.
4. En la configuración de compilación (build settings), usa:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Pulsa **Save and Deploy**. En 1-2 minutos tendrás la web publicada en una URL del tipo
   `https://jonan4fit.pages.dev` (puedes elegir/confirmar ese subdominio en la configuración del
   proyecto, dentro de "Custom domains" o en el nombre del proyecto).

No hace falta configurar nada más: no hay funciones, ni bases de datos, ni variables de entorno.

---

## 10. Cómo actualizarla después de publicada

Cada vez que quieras cambiar algo (precio, horario, texto, foto):

1. Edita el archivo correspondiente (localmente, o directamente desde la web de GitHub con el
   lápiz de "editar" en cada archivo).
2. Si lo hiciste en tu ordenador:
   ```bash
   git add .
   git commit -m "Actualizo precios"
   git push
   ```
3. Cloudflare Pages detecta el cambio automáticamente y vuelve a publicar la web en 1-2 minutos.
   No hace falta hacer nada más.

---

## 11. Cómo conectar tu dominio propio en el futuro

Cuando compres un dominio (por ejemplo `jonanentrenador.com`):

1. En Cloudflare Pages, entra en tu proyecto → **Custom domains → Set up a custom domain**, y
   sigue los pasos (si el dominio ya está en Cloudflare es prácticamente automático; si está en
   otro registrador, te pedirá apuntar unos registros DNS).
2. Abre `src/data/config.ts` y cambia esta línea con tu dominio definitivo:
   ```ts
   url: 'https://jonan4fit.pages.dev',
   ```
   por, por ejemplo:
   ```ts
   url: 'https://jonanentrenador.com',
   ```
3. Guarda, sube el cambio a GitHub (sección 10) y listo: el sitemap, las URLs canónicas y
   `robots.txt` se actualizan solos porque todos usan esta misma fuente. No hace falta rehacer la
   web ni tocar ningún otro archivo.

---

## Estructura del proyecto (referencia rápida)

```
src/
  data/           <- Toda la información que cambia a menudo: precios, horarios, FAQ, contacto
    config.ts     <- WhatsApp, ubicación, URL del sitio
    precios.ts    <- Todos los precios (fuente única)
    horarios.ts   <- Horarios de clases presenciales
    faq.ts        <- Preguntas frecuentes
  components/     <- Piezas reutilizables (botones, cabecera, pie, tarjetas de precio...)
  layouts/        <- Plantilla base común a todas las páginas (SEO, cabecera, pie)
  pages/          <- Una página por archivo = una URL (/clases, /faq, etc.)
  styles/         <- Estilos visuales (colores, tipografía, espaciados)
public/
  images/         <- Tus fotos (ver sección 6)
  favicon.svg     <- Icono de la pestaña del navegador
```

---

## Pendiente antes de publicar (resumen)

- [x] Número de WhatsApp real en `src/data/config.ts` (sección 5).
- [ ] Texto personal y de formación en `src/pages/sobre-mi.astro` (sección 7).
- [ ] Fotos reales sustituyendo los marcadores (sección 6).
- [ ] Revisar que los horarios y precios siguen vigentes en el momento de publicar.

> Esta web **todavía no se ha publicado ni subido a GitHub/Cloudflare**. Cuando tengas los textos
> y las fotos listos, sigue las secciones 8 y 9 para publicarla.
