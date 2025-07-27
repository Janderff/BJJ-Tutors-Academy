import {
  Select as SelectPrimitive,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/Components/ui/select'
export function SelectTime() {
  return (
    <SelectPrimitive>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Escolha um tempo' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='timeSixty'>60 minutos</SelectItem>
        <SelectItem value='timeNinety'>90 minutos</SelectItem>
      </SelectContent>
    </SelectPrimitive>
  )
}
