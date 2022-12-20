export async function fetchDb(url: string) {
  try {
    const response = await fetch(url);
    const error = response.ok ? false : true
    const data = await response.json();
    return { data, error };
  } catch (err) {
    return { data: null, error: true };
  }
}
