import {NextResponse} from "next/server";
import { mockData } from "../../../data";


export const GET = async (req) => {


    try{

        const products = mockData
        
        return new NextResponse(JSON.stringify(products), { status: 200 })

    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: "Something went wrong"}), { status: 500 })
    }
}