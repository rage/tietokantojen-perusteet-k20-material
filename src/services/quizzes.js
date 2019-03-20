import axios from "axios"
import { accessToken } from "./moocfi"

const BASE_URL = "https://quizzes.mooc.fi"
const COURSE_IDENTIFIER = "258dd4bd-7f17-41fb-9d90-1aeeb6cbeff0"

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
