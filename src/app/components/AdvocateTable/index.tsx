
import { Advocate } from "@/app/types";
import AdvocateRow from "./AdvocateRow";

type AdvocateTableProps = {
    advocates: Array<Advocate>
}

const AdvocateTable = ({advocates}:AdvocateTableProps) => {
    return (
        <table className="w-full text-left mt-16">
            <thead>
                <tr className="w-100">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>City</th>
                    <th>Degree</th>
                    <th>Specialties</th>
                    <th>Years of Experience</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
            { advocates.map((advocate) => {
               return <AdvocateRow advocate={advocate} key={`advocate_${advocate.id}`} />
            })}
            </tbody>
        </table>
    )

}

export default AdvocateTable;