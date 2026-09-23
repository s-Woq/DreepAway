import { useQuery } from '@tanstack/react-query';
import { appClient } from '@/lib/app-client';

export function useTalentData(slug) {
  return useQuery({
    queryKey: ['talent', slug],
    queryFn: async () => {
      const { data } = await appClient.get(`/talent/${slug}`);
      return data;
    },
    // No ejecuta la consulta si no hay un slug válido
    enabled: Boolean(slug),
    // Evita refetching innecesario si la información no cambia seguido
    staleTime: 1000 * 60 * 5, // 5 minutos de datos frescos
    retry: 1, // Limita los reintentos en caso de error 404/500
  });
}
