
export const getDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
}