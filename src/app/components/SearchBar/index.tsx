import { useAdvocateSearch } from "@/app/hooks/advocateSearch";
import { Advocate } from "@/app/types";
import { ChangeEvent, useState } from "react";

type AdvocateSearchProps = {
    onSearchResults: (searchTerm: Array<Advocate>) => void
}

const AdvocateSearch = ({onSearchResults}: AdvocateSearchProps) => {

    const [searchTerm, setSearchTerm] = useState<string>("");
    const { searchBy, isSearching } = useAdvocateSearch();
    
    const onChange = async (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchTerm(e.target.value);
        const results = await searchBy(e.target.value);
        onSearchResults(results);
    }

    const onClickReset = async () => {
        const advocates = await searchBy();
        setSearchTerm("");
        onSearchResults(advocates);
    }

    return (
        <div className="mt-8">
            <h3>Search</h3>
              <p>
                    <span className="text-xs">Searching for: </span>
                    { isSearching &&
                        <span className="text-xs">{searchTerm}</span>
                    
                    }
              </p>
            <input className="mr-4" style={{ border: "1px solid black" }} onChange={onChange} value={searchTerm}/>
            <button className="border-2 rounded-lg hover:bg-blue-100 p-1" onClick={onClickReset}>Reset Search</button>

        </div>
    )
}

export default AdvocateSearch;