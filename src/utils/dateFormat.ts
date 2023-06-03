export const dateFormat = (date: string): string => {
  const dateFormatted = new Date(date)
  const day = dateFormatted.getDate()
  const month = dateFormatted.getMonth() + 1
  const year = dateFormatted.getFullYear()

  const dayFormat = day > 9 ? day : `0${day}`
  const monthFormat = month > 9 ? month : `0${month}`
  const formattedDate = `${dayFormat}/${monthFormat}/${year}`

  return formattedDate
}
