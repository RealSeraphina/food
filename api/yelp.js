import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer Ale1knzDNoyphMn6OVw4ndFU4t2tovWu2Aey6ttEx8EpGosT0mwaIi2wtc3IU3IGqdC3v5V1B4zDNvv57EqoYzJrTEwsUi34lFLMQjFq7XX-Zyu2_zUGsLRyJohSZHYx"
    }
});