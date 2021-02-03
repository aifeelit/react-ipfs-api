export const columnsHeaders = ['Key ID', 'Info', 'Disable'];

export function formatKeysData(data){
  const formatted = Object.entries(data).map(([key, data]) => {
    const { status, logs } = data;
    return {
      id: key,
      status,
      logs
    }
  });
  return formatted;
};