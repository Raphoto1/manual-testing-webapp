import { useUser } from '@clerk/nextjs'
import React from 'react'
import { Button } from '@chakra-ui/react';
import Link from 'next/link';

function BtnToArea({ isVisibleIn }) {
    const { isSignedIn, isLoaded, user } = useUser();
    console.log(user?.unsafeMetadata.area);
    const userArea = user?.unsafeMetadata.area;
    
    
    return (
        <>
            {isVisibleIn ?
                <div>
                   <Link href={`/platform/${userArea}`}>
                    <Button colorScheme='blue' mr={3}>
                                  {`Lets go to ${userArea}`}
                                </Button>
                   </Link>
                </div> : null}
        </>
    
  )
}

export default BtnToArea