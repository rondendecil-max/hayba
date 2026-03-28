# ⚡ QUICK START - MI INVENTARIO

## 🚀 5 minutos para tener todo funcionando

### Paso 1: Clonar y Levantar Docker (2 min)

```bash
git clone https://github.com/rondendecil-max/hayba.git
cd hayba
docker-compose up -d
```

Espera ~30 segundos para que se levante PostgreSQL.

### Paso 2: Crear Admin (1 min)

Abre **Postman** o **curl**:

```bash
curl -X POST http://localhost:4000/api/auth/register-admin \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@hayba.local",
    "password": "admin123456",
    "nombre": "Administrador"
  }'
```

Guarda el **token** que retorna.

### Paso 3: Crear Empresa (1 min)

```bash
curl -X POST http://localhost:4000/api/admin/empresa \
  -H "Authorization: Bearer {TU_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Mi Negocio",
    "ruc": "20123456789",
    "email": "negocio@example.com"
  }'
```

Guarda el **id** de la empresa.

### Paso 4: Generar Credenciales Cliente (1 min)

```bash
curl -X POST http://localhost:4000/api/admin/empresa/{EMPRESA_ID}/credencial \
  -H "Authorization: Bearer {TU_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Juan García",
    "email": "juan@negocio.com"
  }'
```

Te dará:
- Usuario: `USR-ABC123XYZ`
- Contraseña: `aBcDeFg1`

### Paso 5: Acceder a la App

**Admin:**
- URL: http://localhost:5173
- Usuario: `admin@hayba.local`
- Contraseña: `admin123456`

**Cliente:**
- URL: http://localhost:5173/login-cliente
- Usuario: `USR-ABC123XYZ`
- Contraseña: `aBcDeFg1`

## 🎉 ¡Listo! Ya está funcionando

Ahora puedes:
- ✅ Crear productos
- ✅ Abrir cajas
- ✅ Realizar ventas
- ✅ Ver reportes
- ✅ Instalar como PWA

## 🔧 Parar la App

```bash
docker-compose down
```

## 📝 Notas Importantes

- Las **credenciales de cliente se muestran una sola vez**. Guarda bien.
- El **token JWT expira en 7 días**.
- Todo se sincroniza en **tiempo real** con WebSocket.
- Funciona **offline** una vez instalada como PWA.

---

¿Necesitas ayuda? Revisa `README.md` para más detalles.