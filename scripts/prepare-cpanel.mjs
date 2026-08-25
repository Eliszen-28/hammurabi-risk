import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const source = fileURLToPath(new URL("../dist/client/", import.meta.url));
const target = fileURLToPath(new URL("../cpanel-upload/", import.meta.url));

await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });
await cp(source, target, { recursive: true });

const htaccess = `Options -MultiViews
RewriteEngine On

# Sirve las páginas exportadas con URLs limpias.
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{DOCUMENT_ROOT}/$1.html -f
RewriteRule ^(.+?)/?$ $1.html [L]

# Compresión y caché para recursos estáticos.
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript application/json image/svg+xml
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/avif "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

ErrorDocument 404 /404.html
`;

await writeFile(`${target}.htaccess`, htaccess);

const index = await readFile(`${target}index.html`, "utf8");
if (index.includes("/hammurabi-risk/")) {
  throw new Error("La exportación de cPanel contiene rutas de GitHub Pages.");
}

await writeFile(
  `${target}INSTRUCCIONES.txt`,
  "HAMMURABI RISK — INSTALACIÓN EN CPANEL\n\n1. Sube TODO el contenido de esta carpeta a public_html.\n2. Incluye el archivo oculto .htaccess.\n3. No subas la carpeta contenedora; sube su contenido.\n4. Si ya existe un sitio, respáldalo antes de reemplazar archivos.\n5. Abre el dominio y prueba Inicio, Servicios, páginas adicionales y el asesor.\n",
);
