import { Calendar } from './Calendar'
import { SelectClassTime } from './SelectClassTime'
import { SelectPayment } from './SelectPayment'
import { SelectStatusClass } from './SelectStatus'
import { SelectStudents } from './SelectStudents'
import { SelectTime } from './SelectTime'
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
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
interface FormTeacherClassProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}
export function FormTeacherClass({
  open,
  onOpenChange,
}: FormTeacherClassProps) {
  return (
    <div>
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
                <Label htmlFor='data'>Aluno </Label>
                <SelectStudents />
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div className='grid gap-3'>
                  <Label htmlFor='data'>Data da Aula </Label>
                  <Calendar />
                </div>
                <div className='grid gap-3'>
                  <Label htmlFor='horario'>Horário </Label>
                  <SelectClassTime />
                </div>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div className='grid gap-3'>
                  <Label htmlFor='duracao'>Duração </Label>
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
              <div className='grid grid-cols-2 gap-4'>
                <div className='grid gap-3'>
                  <Label htmlFor='duracao'>Status *</Label>
                  <SelectStatusClass />
                </div>
                <div className='grid gap-3'>
                  <Label htmlFor='valor'>Pagamento</Label>
                  <SelectPayment />
                </div>
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='valor'>Técnicas Praticadas</Label>
                <Input id='valor' name='valor' />
                <Label htmlFor='valor'>Drills Praticados</Label>
                <Input id='valor' name='valor' />
                <Label htmlFor='valor'>Observações</Label>
                <Textarea id='valor' name='valor' />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant='outline'>Cancelar</Button>
              </DialogClose>
              <Button type='submit' variant={'destructive'}>
                Criar Aula
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  )
}
