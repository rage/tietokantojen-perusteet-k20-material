import { zip } from "../util/arrays"
import { fetchQuizzesProgress } from "./quizzes"

export async function fetchProgress() {
  const serviceIdentifiers = ["Kyselyt"]
  const progressesCollection = await Promise.all([fetchQuizzesProgress()])
  const progressByGroup = {}

  zip(serviceIdentifiers, progressesCollection).forEach(
    ([identifier, progresses]) => {
      progresses.forEach(progressEntry => {
        if (!progressByGroup[progressEntry.group]) {
          progressByGroup[progressEntry.group] = {}
        }
        progressByGroup[progressEntry.group][identifier] = progressEntry
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
