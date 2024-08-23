/* eslint-disable react/prop-types */

import React from 'react'
import { v4 as uuid } from 'uuid'
import SortedData from './components/SortedData/SortedData'

const WithYearSortedData = SortedData(YearTable, 'YearTable')
const WithMonthSortedData = SortedData(MonthTable, 'MonthTable')
const WitSortedData = SortedData(SortTable, 'SortTable')

function YearTable(props) {
  console.log('YearTable', props)

  return (
    <div>
      <h2>Year Table</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((item) => (
            <tr key={uuid()}>
              <td>{item.year}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function SortTable(props) {
  console.log('SortTable', props)

  return (
    <div>
      <h2>Sort Table</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((item) => (
            <tr key={uuid()}>
              <td>{item.date}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function MonthTable(props) {
  console.log('MonthTable', props)

  return (
    <div>
      <h2>Month Table</h2>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((item) => (
            <tr key={uuid()}>
              <td>{item.month}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// TODO:
// 1. Загрузите данные с помощью fetch: https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json
// 2. Не забудьте вынести URL в переменные окружения (не хардкодьте их здесь)
// 3. Положите их в state
export default class App extends React.Component {
  state = {
    list: [],
  }

  componentDidMount() {
    try {
      fetch(import.meta.env.VITE_API_URL)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ list: data.list })
        })
    } catch (error) {
      console.error(error)
    }
  }

  componentDidUpdate() {}

  render() {
    const { list } = this.state
    return (
      <div id='app'>
        {list.length && <WithMonthSortedData list={list} />}
        {list.length && <WithYearSortedData list={list} />}
        {list.length && <WitSortedData list={list} />}
      </div>
    )
  }
}
