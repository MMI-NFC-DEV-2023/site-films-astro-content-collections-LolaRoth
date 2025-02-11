const formatter = new Intl.DateTimeFormat('fr-FR', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    

})

export const formatDate = (date: Date) => {
    return formatter.format(date)
}