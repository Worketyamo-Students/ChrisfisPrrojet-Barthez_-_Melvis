import React from 'react'
import { IAuthor } from '../../../global/interface/interface'
import { Card } from '../../ui/card'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";

import { ITruncateText } from '../../../global/interface/interface'

const TruncatedText: React.FC<ITruncateText> = ({text,wordLimit = 8}) => {
  const truncatedText = text.length > wordLimit
  ?text.slice(0, wordLimit)+ '...'
  : text;

return <p >{truncatedText}</p>;
}

const CardAuthor: React.FC<IAuthor> = (props) => {
    return (
        <Card className='w-full md:w-fit relative p-6'>
            <Link to={props.url} className='flex flex-col items-center gap-4'>

                <div className="w-24 h-24 rounded-full overflow-hidden">
                    <img
                        src={props.image}
                        alt={`Preview of city ${props.name}`}
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className="flex flex-col gap-2">
                    {/* Name of the Author */}
                    <h4 className="text-lg text-foreground/font-semibold">
                    <TruncatedText text= {props.name} />
                    </h4>

                    {/*Country of origin */}
                    <p className="text-sm text-foreground/70 text-nowrap">
                        {props.country} 
                    </p>
                    <button className='flex items-center bg-transparent rounded-full hover:bg-slate-500hover:-translate-y-1 hover:scale-110 duration-300 text-6 p-2 gap-4 bg-gray-300'>4.9 <span><FaStar className='text-yellow-300' /></span></button>
                </div>
            </Link>
        </Card>
    )
}

export default CardAuthor