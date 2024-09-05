export const loginUser = async (email, password) => {
    const response = await fetch("http://localhost:5050/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Nepavyko prisijungti");
    }

    const data = await response.json();
    return data;
};

export const registerUser = async (email, name, password) => {
    const response = await fetch("http://localhost:5050/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, password }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Nepavyko prisiregistruoti");
    }

    const data = await response.json();
    return data.message;
};