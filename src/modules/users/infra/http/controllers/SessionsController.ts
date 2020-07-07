import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    // Funcao do controller:
    // Receber requisição
    const { email, password } = request.body;

    const authenticateUser = container.resolve(AuthenticateUserService);

    // Chamar outro arquivo para lidar com a logica de negocio (service)
    const { user, token } = await authenticateUser.execute({ email, password });

    // retornar a resposta
    return response.json({ user: classToClass(user), token });
  }
}
