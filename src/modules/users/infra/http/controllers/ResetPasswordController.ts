import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ResetPasswordService from '@modules/users/services/ResetPasswordService';

export default class ResetPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    // Funcao do controller:
    // Receber requisição
    const { token, password } = request.body;

    const resetPassword = container.resolve(ResetPasswordService);

    // Chamar outro arquivo para lidar com a logica de negocio (service)
    await resetPassword.execute({ token, password });

    // retornar a resposta
    return response.status(204).json();
  }
}
