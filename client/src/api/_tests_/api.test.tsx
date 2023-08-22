import { fetchData } from "../api";

jest.mock("../api");

describe("Fetch data", () => {
    it("should return data promise properly", async () => {
        const mockedData = [
            {
                id: 1,
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz",
                address: {
                    street: "Kulas Light",
                    suite: "Apt. 556",
                    city: "Gwenborough",
                    zipcode: "92998-3874",
                    geo: {
                        lat: "-37.3159",
                        lng: "81.1496"
                    }
                },
                phone: "1-770-736-8031 x56442",
                website: "hildegard.org",
                company: {
                    name: "Romaguera-Crona",
                    catchPhrase: "Multi-layered client-server neural-net",
                    bs: "harness real-time e-markets"
                }
            }
        ];
        (fetchData as jest.Mock).mockResolvedValue(mockedData);

        const result = await fetchData();

        expect(fetchData).toHaveBeenCalledTimes(1);
        expect(result).toBe(mockedData);
    });
});