import moment from 'moment'

const sortByYear = (list) => {
  const result = list.reduce((acc, item) => {
    const year = moment(item.date).format('YYYY')
    const amount = acc[year] || 0
    acc[year] = amount + item.amount
    return acc
  }, {})
  return Object.entries(result).map(([key, value]) => ({ year: key, amount: value }))
}

export default sortByYear
