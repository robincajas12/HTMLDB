# HTMLDB
## ETIQUETAS
``` HTML
<sql-select></sql-select>
```
### Propiedades que son importantes y **OBLIGATORIAS**
- **src** : ruta de la db
- **db-name** : nombre de la tabla
- **columns** : columnas a regresar para regresar todas usamos "*"
- **where** : etiqueta de condicional (no esta funcionando es necesario dejar en blanco)
### ejemplos
```HTML
<sql-select src="-/db/super.db" db-name="empleados" columns="*" where="<siempre vacio>"></sql-select>
```
```HTML
<sql-select src="-/db/escuela.db" db-name="notas" columns="alumno, grado, nota" where=""></sql-select>
```
```HTML
<sql-select src="-/db/restaurante.db" db-name="ingredientes" columns="id, nombre" where=""></sql-select>
```
## creditos al dueño del meme original  [programación orientada a memes](https://www.facebook.com/programacionorientadaamemes/)
