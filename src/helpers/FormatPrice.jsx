let usdToNprRate = 132
export const formatPrice = (usd) => {
    return (usd * usdToNprRate).toFixed(0);
}