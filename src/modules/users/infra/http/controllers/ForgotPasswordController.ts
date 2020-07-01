import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';

export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    // Funcao do controller:
    // Receber requisição
    const { email } = request.body;

    const sendForgotPasswordEmail = container.resolve(
      SendForgotPasswordEmailService,
    );

    // Chamar outro arquivo para lidar com a logica de negocio (service)
    await sendForgotPasswordEmail.execute({ email });

    // retornar a resposta
    return response.status(204).json();
  }
}
