const catchError = store => next => action => {
    try {
      // aplicamos la acción
      next(action);
    } catch (error) {
      // mandamos nuestro error a algún servicio
      // como Sentry o Track:js donde luego
      // podamos revisarlo con detalle
      errorLogger.send(error);
    }
  };