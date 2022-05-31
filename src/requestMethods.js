import axios from "axios"

const BASE_URL="http://localhost:5000/api/"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODIyMTMyMjQ3YzNmNDk3N2ViMjJjZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzQ5MTUyMCwiZXhwIjoxNjUzNzUwNzIwfQ.Uy_Wtr3ZfzryWDuUUakn8NjLcLkMlY67hVQgO_a2y6M"
export const publicRequest=axios.create({
    baseURL:BASE_URL,
});

export const userRequest=axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`},
});
