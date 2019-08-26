import axios from 'axios'

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer 8HeZkG1f8I3TvNLUn-RJSk1FP8wPYjHvOQPwi80kINGq7iCoE9yvJtW2hO4po_WNnLfWdZuy_Zq3j-F4YHJtrLSQ2Eyv7UqwetfiSmjK52gWvMlaEqiEqN7qkCpkXXYx"
    }
})