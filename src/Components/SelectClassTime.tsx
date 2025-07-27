import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

export function SelectClassTime() {
  return (
    <Select>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Class Time' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='5:45 - 6:45'>5:45 - 6:45</SelectItem>
          <SelectItem value='6:00 - 7:00'>6:00 - 7:00</SelectItem>
          <SelectItem value='6:30 - 7:30'>6:30 - 7:30</SelectItem>
          <SelectItem value='18:30 - 19:30'>18:30 - 19:30</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
