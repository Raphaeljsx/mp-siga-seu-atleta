
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';

export function About() {
  return (
    <Dialog>
      <DialogTrigger>Sobre</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sobre o projeto</DialogTitle>
          <DialogDescription>
            
              Projeto criado com o intuito de apresentar os atletas brasileiros e suas contas no Instagram. {""}
              Tendo como objetivo o estudo do framework Next.js e do Prisma ORM.
       
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
