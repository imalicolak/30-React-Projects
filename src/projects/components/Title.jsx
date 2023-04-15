import React from 'react'

export default function Title({classes, text}) {
  return (
    <h1 className={!classes ? "title": classes && "title"}> {!text ? "Date" : text} </h1>
  )
}
