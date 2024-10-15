import React from 'react'
import { Badge } from '../../ui/badge';
import { ICardAdvantages } from '../../../global/interface/interface';

const CardAdvantages: React.FC<ICardAdvantages> = (props) => {
    return (
        <div className='flex items-center text-nowrap gap-4 md:gap-6'>
            {/* For the badge name part */}
            <Badge className='w-fit font-medium rounded-full' variant={props.badge.variant}>
                {props.badge.content}
            </Badge>

            {/* For the content part */}
            <p className=" text-foreground/90 font-medium">
                {props.content}
            </p>
        </div>
    )
}

export default CardAdvantages