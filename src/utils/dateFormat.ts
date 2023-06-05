export const dateFormat = (date: string): string => {
  const currentDate = new Date(date)
  const day = currentDate.getDate()
  const month = currentDate.getMonth() + 1
  const year = currentDate.getFullYear()

  const dayFormat = day > 9 ? day : `0${day}`
  const monthFormat = month > 9 ? month : `0${month}`
  const formattedDate = `${dayFormat}/${monthFormat}/${year}`

  return formattedDate
}
