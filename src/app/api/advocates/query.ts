import db from "@/db";
import { advocates } from "@/db/schema";
import { or, ilike, arrayContains, like, eq, gte } from "drizzle-orm";

export const getAdvocatesBy = async (searchTerm: string | null) => {
    if(!searchTerm) {
        return await db.select().from(advocates);
    }
    
    const filters = [];
    filters.push(ilike(advocates.firstName, searchTerm));
    filters.push(ilike(advocates.lastName, searchTerm));
    filters.push(ilike(advocates.city, searchTerm));
    filters.push(ilike(advocates.degree, searchTerm));
    filters.push(arrayContains(advocates.specialties, searchTerm));
    if(!isNaN(parseInt(searchTerm))) {
        filters.push(gte(advocates.yearsOfExperience, parseInt(searchTerm)))
    }
    
    return await db
    .select()
    .from(advocates)
    .where(or(...filters));

}