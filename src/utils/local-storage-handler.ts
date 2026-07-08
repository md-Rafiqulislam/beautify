// save item to local storage
const saveItemToLocal = (key: string, value: any) => {

    if (typeof window === "undefined" || !key || !value) {
        return;
    }

    try {
        const serializedValue = typeof value === "string" ? value : JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
    } catch {
        return;
    }
};


// get item to local
const getItemFromLocal = (key: string): Record<string, string> | null => {
    if (typeof window === "undefined" || !key) {
        return null;
    }

    try {
        const item = localStorage.getItem(key);

        if (item === null) {
            return null;
        }

        return JSON.parse(item);
    } catch {
        return null;
    }
};


// save product to local
export const saveProductToCart = (key: string, value: string) => {
    saveItemToLocal(key, value);
};


// get products
export const getProduct = (key: string) => {
    return getItemFromLocal(key);
};