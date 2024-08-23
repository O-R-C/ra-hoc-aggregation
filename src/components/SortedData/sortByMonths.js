import moment from 'moment/min/moment-with-locales'
moment.locale('ru')

const sortByMonths = (list) => {
  const result = list.reduce(
    (acc, item) => {
      if (moment(item.date).format('YYYY') !== '2018') return acc
      const month = moment(item.date).format('MM')
      acc[month] += item.amount
      return acc
    },
    { '01': 0, '02': 0, '03': 0, '04': 0, '05': 0, '06': 0, '07': 0, '08': 0, '09': 0, 10: 0, 11: 0, 12: 0 }
  )
  return Object.entries(result)
    .map(([key, value]) => ({ month: key, amount: value }))
    .sort((a, b) => (a.month < b.month ? -1 : 1))
    .map(({ month, amount }) => ({
      month: moment()
        .month(month - 1)
        .format('MMMM'),
      amount,
    }))
}

export default sortByMonths
