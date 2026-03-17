export interface StatusDTO {
  code: string;
  name: string;
}

// Simulated API delay
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function fetchStatus(): Promise<StatusDTO[]> {
  await delay(500); // simulate network latency

  return [
    { code: "ACTIVE", name: "Active" },
    { code: "INACTIVE", name: "Inactive" },
  ];
}