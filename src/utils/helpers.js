const momentTz = require('moment-timezone')

export const getMonthName = (numb) => {
  const months = ['january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december']

  return months[numb - 1]
}

export const getPath = (date, slug) => {
  const momentDate = momentTz(date).tz('America/Los_Angeles').format('L')
  const [month, day, year] = momentDate.split('/')

  const path = `/blog/${year}/${getMonthName(month)}/${slug}`

  return path
}

export default {
  getMonthName,
  getPath,
}
