
import { clerkClient } from "@clerk/nextjs/server";

export async function updateMetadataClerk({uId,data}) {
    try {
        const { client } = await clerkClient(); 
        const result = await clerkClient.users.updateUserMetadata(uId, {
            publicMetadata: {
                data,
            }
        })
        console.log('RESULT SERVICE',result);
        
        return result
        
    } catch (error) {
        return error
    }
}