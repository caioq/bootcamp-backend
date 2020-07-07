// interface para o typescript entender quais as opções disponíveis de driver
interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'caio@gobarber.com.br',
      name: 'Caio do GoBarber',
    },
  },
} as IMailConfig;
