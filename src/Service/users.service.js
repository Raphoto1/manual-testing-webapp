import { clerkClient } from "@clerk/nextjs/dist/types/server";

export async function updateMetadataClerk(uId, data) {
    await clerkClient.users.updateMetadataClerk(uId, {
        unsafeMetadata: {
            data,
        }
    })
}