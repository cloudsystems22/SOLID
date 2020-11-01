import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
export class CreateUserUseCase {

    constructor(
        //Aplicando o principio de substituição de Liskov
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider,
    ){}
        
    //Aplicando principio de inversão de dependencias
    async execute(data: ICreateUserRequestDTO){
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
        if(userAlreadyExists){
            throw new Error("User already exists.");
        }

        const user = new User(data);

        await this.usersRepository.save(user);

        await this.mailProvider.sendMail({
            to:{
                name:data.name,
                email: data.email
            },
            from:{
                name: "Meu app",
                email: "equipe@meuapp.com",
            },
            subject: "Seja bem vindo a plataforma",
            body: "<p>Vosê já pode se logar a plataforma</p>"
        })
    }
}