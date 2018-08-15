export const formatReal = (number) => {
    if (number !== undefined) {
        return number.toFixed(2).replace('.', ',');
    }
};
