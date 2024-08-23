import PropTypes from 'prop-types'
import sortByDate from './sortByDate'
import sortByYear from './sortByYear'
import sortByMonths from './sortByMonths'
import moment from 'moment/min/moment-with-locales'
moment.locale('ru')

/**
 * A higher-order component that sorts data based on the provided component type.
 *
 * @param {React.Component} Component - The component to wrap with sorted data.
 * @return {React.Component} A new component with sorted data.
 */
export default function SortedData(Component) {
  return function WithSortedData(props) {
    let list = null
    switch (Component.name) {
      case 'SortTable':
        list = sortByDate(props.list)
        break
      case 'YearTable':
        list = sortByYear(props.list)
        break
      case 'MonthTable':
        list = sortByMonths(props.list)
        break
      default:
        break
    }

    WithSortedData.propTypes = {
      list: PropTypes.array.isRequired,
    }

    return <Component list={list} />
  }
}

SortedData.propTypes = {
  Component: PropTypes.element.isRequired,
}
