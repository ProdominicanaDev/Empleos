/* eslint-disable prettier/prettier */
module.exports = {
    apps: [
      {
        name: 'Empleos',
        script: 'npm',
        args: 'start2',
        cwd: '/var/www/Empleos', // Ruta del directorio del proyecto en el servidor
        instances: 1, // Número de instancias que deseas ejecutar
        autorestart: true, // Hacer que la aplicación se reinicie automáticamente si falla
        watch: false, // Desactivar el monitoreo de cambios en los archivos para reiniciar automáticamente
        max_memory_restart: '1G', // Reiniciar la aplicación si el uso de memoria supera el límite (opcional)
        env: {
          NODE_ENV: 'production', // Establecer el entorno a producción (opcional)
        },
      },
    ],
  };