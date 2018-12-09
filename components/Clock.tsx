import * as React from 'react'

interface Props {
  light: string
  lastUpdate: Date
}

const Clock: React.SFC<Props> = ({ light, lastUpdate }) => {
  return (
    <div className={light ? 'light' : ''}>{format(new Date(lastUpdate))}</div>
  )
}

const format = (t: Date) =>
  `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`

const pad = (n: number) => (n < 10 ? `0${n}` : n)

export default Clock
