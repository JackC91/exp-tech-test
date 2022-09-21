import data from "../db/index.js";

export default function getUsers(user_name) {
    let searched_user = [];
    if (!user_name) {
        // console.log("no query")
        return data;
    } else {
        for (let i = 0; i < data.length; i++) {
            if (data[i].name.toLowerCase().includes(user_name.toLowerCase())) {
                searched_user.push(data[i]);
            }
        }
        // console.log("name was in query")
        return searched_user;
    }
}