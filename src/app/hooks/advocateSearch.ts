import { useEffect, useState } from "react";
import { Advocate } from "../types";

export function useAdvocateSearch() {
    const [advocates, setAdvocates] = useState<Array<Advocate>>([]);
    const [isSearching, setIsSearching] = useState<boolean>(false);
    
    useEffect(() => {
        search();
    },[])

    const search = async (searchTerm?: string) => {
        setIsSearching(true);
        const params = new URLSearchParams({
            searchTerm: searchTerm ?? "",
        });
        const response = await fetch(`/api/advocates?${params}`);
        const json = await response.json();
        const advocates = json.data;
        setAdvocates(advocates);

        setTimeout(() => {
            setIsSearching(false);
        },500)

        return advocates;
    }

    const searchBy = async (searchTerm?: string) => {
        return await search(searchTerm);
    }

    return {
        advocates,
        isSearching,
        searchBy,
    }


}