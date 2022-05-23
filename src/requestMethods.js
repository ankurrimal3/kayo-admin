import axios from "axios"

const BASE_URL="http://localhost:5000/api/"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODIyMTMyMjQ3YzNmNDk3N2ViMjJjZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzE0NzMwNCwiZXhwIjoxNjUzNDA2NTA0fQ.w0an6p8av9gIeNbVvFbHVZNGVdRvI_aY6FMT0zP_6dE"
export const publicRequest=axios.create({
    baseURL:BASE_URL,
});

export const userRequest=axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`},
});