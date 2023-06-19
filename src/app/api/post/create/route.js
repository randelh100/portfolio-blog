import { prisma } from '../../../../app/lib/prisma'
import { NextResponse } from "next/server";


export async function POST(req, res) {
   const body= await req.text()
   const {header, description} = JSON.parse(body)
console.log(header
    , description)

    const post = await prisma
        .post.create(
            {
                data: {
                    header,
                    description,
                }
            }
        );

    return NextResponse.json(post);
}


