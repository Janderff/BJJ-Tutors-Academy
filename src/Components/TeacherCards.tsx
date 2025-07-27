import type { IconBaseProps } from 'react-icon-base'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import type { LucideProps } from 'lucide-react'

interface TeacherCardsProps {
  cardName: string
  number: number
  icon?: React.ComponentType<LucideProps & IconBaseProps>
  iconColor?: string
}
export function TeacherCards({
  cardName,
  number,
  icon: Icon,
  iconColor,
}: TeacherCardsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-left'>{cardName}</CardTitle>
      </CardHeader>
      <CardContent className='grid grid-cols-2  gap-9 ml-6 mr-6'>
        <div className='text-left text-2xl'>{number}</div>
        <div className=' flex justify-end items-center'>
          {Icon && <Icon size={40} className={` ${iconColor}`} />}
        </div>
      </CardContent>
    </Card>
  )
}
