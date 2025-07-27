import {
  SelectContent,
  SelectGroup,
  SelectItem,
  Select as SelectStudent,
  SelectTrigger,
  SelectValue,
} from './ui/select'

export function SelectStudents() {
  return (
    <SelectStudent>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Aluno' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='Glauber'>Glauber</SelectItem>
          <SelectItem value='Jona'>Jonas</SelectItem>
          <SelectItem value='José<'>José</SelectItem>
          <SelectItem value='Natali'>Natalia</SelectItem>
          <SelectItem value='Ricardo'>Ricardo</SelectItem>
        </SelectGroup>
      </SelectContent>
    </SelectStudent>
  )
}
