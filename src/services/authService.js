export const loginUser = (email) => {
    // Simulating API call
    return new Promise((resolve) => {
        setTimeout(() => {
            localStorage.setItem('user', email);
            resolve();
        }, 500);
    });
};

export const logout = () => {
    localStorage.removeItem('user');
};

export const getCurrentUser = () => {
    return localStorage.getItem('user');
};

export const isAuthenticated = () => {
    return !!getCurrentUser();
};
