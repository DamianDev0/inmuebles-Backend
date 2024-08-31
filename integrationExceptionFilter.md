**Archivo: `INTEGRATE-FILTER.md`**

```markdown
# Instrucciones para Integrar el Filtro de Excepciones Global

Para integrar el filtro de excepciones global en la aplicación NestJS, realiza las siguientes modificaciones en el archivo `main.ts`:

1. **Importa el filtro de excepciones**:

   Agrega la siguiente línea al inicio del archivo `main.ts`:

   ```typescript
   import { HttpExceptionFilter } from './common/exception-filters/http-exception.filter';
   ```

2. **Registra el filtro globalmente**:

   Añade la siguiente línea después de crear la instancia de la aplicación NestJS:

   ```typescript
   app.useGlobalFilters(new HttpExceptionFilter());
   ```

Estas modificaciones aseguran que el filtro de excepciones sea aplicado a todas las solicitudes HTTP en la aplicación.

## Conclusión

Estas instrucciones permiten integrar el filtro de excepciones global en tu aplicación NestJS, proporcionando un manejo uniforme de los errores a nivel de aplicación.
```

Estos archivos proporcionan una guía clara y separada para documentar la implementación del filtro de excepciones y las instrucciones para integrarlo en el archivo `main.ts`.