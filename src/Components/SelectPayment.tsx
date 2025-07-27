import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

export function SelectPayment() {
  return (
    <Select>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Pagamento' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='pago'>Pago</SelectItem>
        <SelectItem value='pendente'>Pendente</SelectItem>
      </SelectContent>
    </Select>
  )
}
