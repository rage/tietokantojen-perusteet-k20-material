import axios from "axios"
import { accessToken } from "./moocfi"

const BASE_URL = "https://quizzes.mooc.fi"
const COURSE_IDENTIFIER = "41f3eb80-d8e1-412a-9ff8-7f574d48ea85"

export async function fetchQuizzesProgress(exerciseName) {
  const res = await axios.get(
    `${BASE_URL}/api/v1/courses/${COURSE_IDENTIFIER}/users/current/progress`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken()}`,
      },
    },
  )
  return res.data?.points_by_group
}
