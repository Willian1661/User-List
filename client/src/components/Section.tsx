import React from "react";
import Table from "./Table";
import { fetchData } from "../api/api";
const Section: React.FC = () => (
    <>
        <section className="section is-medium">
            <Table data={fetchData()} />
        </section>
    </>
);
export default Section;