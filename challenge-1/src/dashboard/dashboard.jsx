import React from 'react';
import {UserDetails} from '../user-details/user-details'
import {RewardsSection} from '../rewards-section/rewards-section'
import '../uistyles.scss'

export const Dashboard=()=>{return(
    <div className={'layout'}>
        <UserDetails className='column' name="John Doe" email='johndoe@gmail.com' points={560}/>
        <RewardsSection className='column'/>
    </div>
)}