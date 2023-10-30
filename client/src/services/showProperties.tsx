import User from "../interfaces/Users";
const showProperties = (userResponse: User) => (
    Object.values(userResponse).filter(value => {
        if (typeof value === "object" && value !== null) {
            return value;
        } else {
            return false;
        }
    })
);
export default showProperties;