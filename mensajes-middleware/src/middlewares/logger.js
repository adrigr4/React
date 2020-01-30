const logger = store => next => action => {
    // agrupamos lo que vamos a mostrar en
    // consola usando el tipo de la acción
    console.group(action.type);
    // mostramos el estado actual del store
    console.debug('current state', store.getState());
  
    // mostramos la acción despachada
    console.debug('action', action);
  
    // empezamos a contar cuanto se tarda en
    // aplicar la acción
    console.time('duration');
  
    // pasamos la acción al store
    next(action);
  
    // terminamos de contar
    console.timeEnd('duration');
  
    // mostramos el estado nuevo
    console.debug('new state', store.getState());
    // terminamos el grupo
    console.groupEnd();
  };

  export default logger;