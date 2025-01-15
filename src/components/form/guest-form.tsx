import React from 'react'

import { User } from '@supabase/supabase-js'

const GuestForm = ({ user } : {user: User | null}) => {
    return (
        <div className='felx flex-col gap-4 w-fit h-fit'>
            {user ? 
                <div>
                    
                </div> 
                    : 
                <div>
                    Please log in
                </div>}
        </div>
    )
}

export default GuestForm