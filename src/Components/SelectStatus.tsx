import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

export function SelectStatusClass() {
  return (
    <Select>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Status' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='Agendada'>Agendada</SelectItem>
        <SelectItem value='Realizada'>Realizada</SelectItem>
        <SelectItem value='Cancelada'>Cancelada</SelectItem>
      </SelectContent>
    </Select>
  )
}
