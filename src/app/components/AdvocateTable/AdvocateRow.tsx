import { Advocate } from "@/app/types";

type AdvocateRowProps = {
    advocate: Advocate
}

const AdvocateRow = ({ advocate }: AdvocateRowProps) => {
    const {id, firstName, lastName, city, degree, specialties, yearsOfExperience, phoneNumber} = advocate;
    return (
        <tr className="border-2" key={`advocate_${id}`}>
            <td className="p-4" key={ `advocate_${id}_firstName` }>{firstName}</td>
            <td className="p-4" key={ `advocate_${id}_lastName` }>{lastName}</td>
            <td className="p-4" key={ `advocate_${id}_city` }>{city}</td>
            <td className="p-4" key={ `advocate_${id}_degree` }>{degree}</td>
            <td className="p-4" key={ `advocate_${id}_specialties` }>
            {specialties.map((s) => (
                <div key={`${id}_${s}`}>{s}</div>
            ))}
            </td>
            <td className="p-4" key={ `advocate_${id}_yoe` }>{yearsOfExperience}</td>
            <td className="p-4" key={ `advocate_${id}_pn` }>{phoneNumber}</td>
        </tr>
    );
}

export default AdvocateRow;