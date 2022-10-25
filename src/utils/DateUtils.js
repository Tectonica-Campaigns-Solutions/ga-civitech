export const formatDate = (dateToFormat) => {
    const date = new Date(dateToFormat);
    return date.toLocaleDateString("en-US", {
        year: 'numeric', month: 'long', day: 'numeric'
    });
}

