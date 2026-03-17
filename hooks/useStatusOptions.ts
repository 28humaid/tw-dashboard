// hooks/useStatusOptions.ts
import { useEffect, useState, useCallback } from "react";
import { fetchStatus } from "@/services/statusService";

interface Option {
  label: string;
  value: string;
}

export function useStatusOptions() {
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadOptions = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchStatus();
      const formatted = data.map((item) => ({
        label: item.name,
        value: item.code,
      }));
      setOptions(formatted);
    } catch (err) {
      console.error("Failed to load status options:", err);
      setError("Failed to load statuses");
      setOptions([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadOptions();
  }, [loadOptions]);

  return { options, loading, error, refetch: loadOptions };
}