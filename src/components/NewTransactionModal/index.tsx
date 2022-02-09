    import { FormEvent, useState } from 'react';
    import Modal from 'react-modal';
    import closeImg from '../../assets/close.svg';
    import incomeImg from '../../assets/income.svg';
    import outcomeImg from '../../assets/outcome.svg';
    import { Container,TransactionTypeContainer, RadioBox } from './styles';

    interface newTransactionModalProps {
        isOpen: boolean;
        onRequestClose : () => void;
    }

    export function NewTransactionModal({isOpen, onRequestClose} :newTransactionModalProps) {
        const [title,setTitle] = useState('');
        const [value, setValue] = useState(0);
        const [category, setCategory] = useState('');
        const [type, setType] = useState('deposit');

        //pegando event do submit e tratando os dados
        function handleCreateNewTransaction(event: FormEvent) {
            event.preventDefault();

            console.log({
                title,
                value,
                category,
                type
            })
        }

        return (
        <Modal isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
                > 
                <button type="button"
                onClick={onRequestClose} 
                className="react-modal-close"
                >
                    <img src={closeImg} alt="Fechar modal" />
                </button>

                <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>

                <input 
                placeholder="Titulo"
                value={title}
                //pegando os dados do input e mandando para o estado
                onChange={event=>setTitle(event.target.value)} 
                />
                
                <input 
                type="number" 
                placeholder="Valor"
                value={value}
                //convertendo a resposta em number e enviando para o estado
                onChange={event=>setValue(Number(event.target.value))} 
                />

                <TransactionTypeContainer >
                    <RadioBox type="button"
                        onClick={() => {setType('deposit'); }}
                        isActive ={type == 'deposit'}
                        activeColor ="green"
                        >

                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>
                    
                    <RadioBox type="button"
                    onClick={() => {setType('widthdraw'); }}
                    isActive ={type == 'widthdraw'}
                    activeColor ="red"
                    >
                        <img src={outcomeImg} alt="Saida"/>
                        <span>Saida</span>
                    </RadioBox>
                    
                </TransactionTypeContainer>
                
                <input 
                placeholder="Categoria"
                value={category}
                onChange={event=>setCategory(event.target.value)}
                />
                
                <button type = "submit">
                    Cadastrar
                </button>
                </Container>
                </Modal>
        );
    }