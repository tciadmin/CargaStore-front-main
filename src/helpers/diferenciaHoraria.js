export default function getTimeDifference(dateString) {
    // Obtener la fecha actual
    const now = new Date();
    
    // Convertir la fecha dada a un objeto Date
    const givenDate = new Date(dateString);
  
    // Calcular la diferencia en milisegundos
    const differenceInMilliseconds = now - givenDate;
  
    // Calcular la diferencia en minutos, horas y días
    const differenceInMinutes = Math.floor(differenceInMilliseconds / (1000 * 60));
    const differenceInHours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  
    // Devolver el resultado adecuado según la diferencia
    if (differenceInMinutes < 60) {
      return `Hace ${differenceInMinutes} min.`;
    } else if (differenceInHours < 24) {
      return `Hace ${differenceInHours} horas`;
    } else {
      return `Hace ${differenceInDays} días`;
    }
  }