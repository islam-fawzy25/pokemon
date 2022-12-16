export async function fetchDb(url: string) {
  try {
    const response = await fetch(url);
    const error = response.ok;
    if (!response.ok) { return error }
    const data = await response.json();
    return { data, error };
  } catch (err) {
    return { data: null, error: err };
  }
}
