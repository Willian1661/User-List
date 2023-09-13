import User from "../interfaces/Users";
const showProperties = (userResponse: User) => (
    Object.values(userResponse).map(value => {
        if (typeof value === 'object') {
            console.log('has object nested');

            return true
        } else {
            return false
        }
    })
)
export default showProperties;