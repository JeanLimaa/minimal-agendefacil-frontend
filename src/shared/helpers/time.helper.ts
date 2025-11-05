
export const formatDuration = (duration: number) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  if (hours > 0 && minutes > 0) {
    return `${hours}h ${minutes}min`;
  } else if (hours > 0) {
    return `${hours}h`;
  } else {
    return `${minutes}min`;
  }
};

/**
 * Converte horário no formato "HH:mm" para minutos desde o início do dia
 */
export function parseTimeToMinutes(time: string): number {
  if (!time) throw new Error('Horário inválido');

  const timeRegex = /^([0-1]\d|2[0-3]):([0-5]\d)$/;
  if (!timeRegex.test(time)) {
    throw new Error(`Horário deve estar no formato HH:mm (00:00 a 23:59). Recebido: ${time}`);
  }

  const [hours, minutes] = time.split(':').map(Number);

  if (hours < 0 || hours > 23) {
    throw new Error(`Horas devem estar entre 00 e 23. Recebido: ${hours}`);
  }

  if (minutes < 0 || minutes > 59) {
    throw new Error(`Minutos devem estar entre 00 e 59. Recebido: ${minutes}`);
  }

  return hours * 60 + minutes;
}

/**
 * Converte minutos desde o início do dia para o formato "HH:mm"
 */
export function minutesToTimeString(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}

/**
 * Calcula a interseção de horários de trabalho
 * Retorna o horário comum entre todos os horários fornecidos
 * Se não houver interseção, retorna null
 */
export function adjustHoursIntersection(
  workingHours: { startTime: string; endTime: string }[]
): { startTime: string; endTime: string } | null {
  if (!workingHours?.length) return null;

  // Inicializa com o primeiro intervalo
  let maxStart = parseTimeToMinutes(workingHours[0].startTime);
  let minEnd = parseTimeToMinutes(workingHours[0].endTime);

  // Compara com os demais
  for (let i = 1; i < workingHours.length; i++) {
    const wh = workingHours[i];
    const whStart = parseTimeToMinutes(wh.startTime);
    const whEnd = parseTimeToMinutes(wh.endTime);

    maxStart = Math.max(maxStart, whStart);
    minEnd = Math.min(minEnd, whEnd);

    // Se a qualquer momento não houver interseção, pode encerrar
    if (maxStart >= minEnd) {
      return null;
    }
  }

  return {
    startTime: minutesToTimeString(maxStart),
    endTime: minutesToTimeString(minEnd)
  };
}