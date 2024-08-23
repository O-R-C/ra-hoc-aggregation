const sortByDate = (list) => {
  return list.sort((a, b) => (a.date < b.date ? -1 : 1))
}

export default sortByDate
