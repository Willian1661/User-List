import React from "react";
import Table from "./Table";
import { fetchData } from "../api/api";

const { allUsers } = await fetchData();
const Section: React.FC = () => (
    <>
        <section className="section is-medium">
            <Table data={allUsers} />
        </section>
    </>
);
export default Section;