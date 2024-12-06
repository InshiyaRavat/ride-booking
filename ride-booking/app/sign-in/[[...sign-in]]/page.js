import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return(
    <div className="relative h-screen w-screen overflow-hidden">
      <Image src='/login_screen.jpg' alt='login screen' width={900} height={1000} className='object-cover h-full w-full'/>
      <div className='absolute top-10 left-10' >
      <SignIn
        appearance={{
          variables: {
            spacingUnit: '13px', 
          },
        }}
      />

      </div>
    </div>   
  )
}