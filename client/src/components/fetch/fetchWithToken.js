export const fetchWithToken = async (url, options = {}) => {

    const token = JSON.parse(localStorage.getItem("token"));

    const headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const response = await fetch(`http://localhost:5050${url}`, {
        ...options,
        headers,
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Įvyko klaida");
    }
    const data = await response.json();
    return data

}