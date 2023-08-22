import User from "../interfaces/Users";
export const fetchData = async () => {
    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const data: User[] = await response.json();

        data.map(userdata => console.log(userdata));
        return data;

    } catch (error) {
        console.error("Error fetching data", error);
        throw error;
    }
};