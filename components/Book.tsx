import * as React from 'react'

interface Props {
  name: string
  author: string
}

const Book: React.SFC<Props> = ({ name, author }) => {
  return (
    <div>
      Name: {name} <br />
      author: {author} <br />
    </div>
  )
}

export default Book
