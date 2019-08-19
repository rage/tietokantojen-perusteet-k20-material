import { zip } from "../util/arrays"
import { fetchQuizzesProgress } from "./quizzes"
import { fetchProgrammingProgress } from "./moocfi"

export async function fetchProgress() {
  const serviceIdentifiers = ["Ohjelmointitehtävät", "Kyselyt"]
  const progressesCollection = await Promise.all([
    fetchProgrammingProgress(),
    fetchQuizzesProgress(),
  ])
  const progressByGroup = {}

  zip(serviceIdentifiers, progressesCollection).forEach(
    ([identifier, progresses]) => {
      progresses.forEach(progressEntry => {
        const group = progressEntry.group.replace("osa", "viikko")
        if (!progressByGroup[group]) {
          progressByGroup[group] = {}
        }
        progressByGroup[group][identifier] = progressEntry
      })
    },
  )
  // const toBeDeleted = []
  // Object.entries(progressByGroup).forEach(([group, serviceEntries]) => {
  //   if (!Object.keys(serviceEntries).find(o => o === "Ohjelmointitehtävät")) {
  //     toBeDeleted.push(group)
  //   }
  // })
  // toBeDeleted.forEach(o => {
  //   delete progressByGroup[o]
  // })
  return progressByGroup
}
