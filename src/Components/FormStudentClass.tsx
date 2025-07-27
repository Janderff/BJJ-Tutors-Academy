import { Input } from './ui/input'
import { Button } from './ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Label } from './ui/label'
import { SelectTime } from './SelectTime'
import { SelectClassTime } from './SelectClassTime'
import { Calendar } from './Calendar'

interface FormStudentClassProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}
export function FormStudentClass({
  open,
  onOpenChange,
}: FormStudentClassProps) {
  return (
    <div>
      //Retirada do dialogtrigger para que ele seja renderigazo pelo comando
      abaixo
      <Dialog open={open} onOpenChange={onOpenChange}>
        <form>
          <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
              <DialogTitle>Agendar aula</DialogTitle>
              <DialogDescription>
                Escolha uma data e hora para a aula.
              </DialogDescription>
            </DialogHeader>
            <div className='grid gap-4'>
              <div className='grid gap-3'>
                <Label htmlFor='data'>Data da Aula *</Label>
                <Calendar />
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='horario'>Horário *</Label>
                <SelectClassTime />
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='duracao'>Duração *</Label>
                <SelectTime />
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='valor'>Valor da Aula</Label>
                <Input
                  id='valor'
                  name='valor'
                  disabled
                  defaultValue={'R$ 100,00'}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant='outline'>Cancel</Button>
              </DialogClose>
              <Button type='submit' variant={'destructive'}>
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  )
}
