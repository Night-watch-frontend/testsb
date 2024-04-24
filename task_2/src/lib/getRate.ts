const API_KEY = "deedbea1ce8caf8f8f0e60e8";

export async function getRateCurrency(
  baseCode: string,
  targetCode: string,
  ammount: number
): Promise<number | null> {
  try {
    let response = await fetch(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${baseCode}/${targetCode}/${ammount}`
    );
    let result = await response.json();
    return result.conversion_result;
  } catch (error) {
    console.warn(error);
    return null;
  }
}
