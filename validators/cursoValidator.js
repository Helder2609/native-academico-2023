import * as Yup from 'yup';

const cursoValidator = Yup.object().shape({
    nome: Yup.string()
        .min(5, 'Valor muito curto')
        .max(10, 'Valor muito grande')
        .required('Campo obrigatório'),

    duracao: Yup.number('alerta: somente nùmeros'),
    modalidade: Yup.string(),
})

export default cursoValidator