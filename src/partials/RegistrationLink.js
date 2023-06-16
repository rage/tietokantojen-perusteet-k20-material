import React from "react"
import moment from "moment"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const start = moment("01/01/2018", "DD/MM/YYYY")
const summerStart = moment("18/03/2019", "DD/MM/YYYY")
const autumnStart = moment("30/08/2019", "DD/MM/YYYY")

const springLink =
  "https://www.avoin.helsinki.fi/palvelut/esittely.aspx?o=127404110"
const summerLink =
  "https://www.avoin.helsinki.fi/palvelut/esittely.aspx?o=127952762"
const autumnLink = "TODO: lisää linkki"

function getLink() {
  const currentDate = moment()
  if (currentDate.isBetween(start, summerStart)) {
    return springLink
  }
  if (currentDate.isBetween(start, autumnStart)) {
    return summerLink
  }
  return autumnLink
}

const RegistrationLink = () => {
  return <a href={getLink()}>{getLink()}</a>
}

export default withSimpleErrorBoundary(RegistrationLink)
