import React, { useState, useEffect } from 'react'
import { TextField, MenuItem, Button } from '@mui/material'
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import DatePicker from "@mui/lab/DatePicker"
import axios from 'axios'
import { WrapperBusca } from './Home.style'
import Detail from '../../components/Detail'
import { Link } from 'react-router-dom'

const baseUrl = 'https://covid19-brazil-api.now.sh/api/report/v1' // Definindo url base da API 

// Definindo objetos dos estados do Brasil
const stateOptions = [
    { initial: 'Todos', name: 'Todos' },
    { initial: 'AC', name: 'Acre' },
    { initial: 'AL', name: 'Alagoas' },
    { initial: 'AP', name: 'Amapá' },
    { initial: 'AM', name: 'Amazonas' },
    { initial: 'BA', name: 'Bahia' },
    { initial: 'CE', name: 'Ceará' },
    { initial: 'DF', name: 'Distrito Federal' },
    { initial: 'ES', name: 'Espírito Santo' },
    { initial: 'GO', name: 'Goiás' },
    { initial: 'MA', name: 'Maranhão' },
    { initial: 'MT', name: 'Mato Grosso' },
    { initial: 'MS', name: 'Mato Grosso do Sul' },
    { initial: 'MG', name: 'Minas Gerais' },
    { initial: 'PA', name: 'Pará' },
    { initial: 'PB', name: 'Paraíba' },
    { initial: 'PR', name: 'Paraná' },
    { initial: 'PE', name: 'Pernambuco' },
    { initial: 'PI', name: 'Piauí' },
    { initial: 'RJ', name: 'Rio de Janeiro' },
    { initial: 'RN', name: 'Rio Grande do Norte' },
    { initial: 'RS', name: 'Rio Grande do Sul' },
    { initial: 'RO', name: 'Rondônia' },
    { initial: 'RR', name: 'Roraima' },
    { initial: 'SC', name: 'Santa Catarina' },
    { initial: 'SP', name: 'São Paulo' },
    { initial: 'SE', name: 'Sergipe' },
    { initial: 'TO', name: 'Tocantins' }
]

//const Home irá renderizar todos os componentes que compôe a página
const Home = () => {
    //Gerenciando os estados dos valores (resposta da API, estado selecionado, mudanças de URL e de data)
    const [response, setResponse] = useState(false)
    const [state, setState] = useState('')
    const [url, setUrl] = useState('')
    const [date, setDate] = useState(null)

    //Quando o estado é mudado, essa função irá mudar o estado e a url para consultar um estado específico
    //na API
    const handleChangeState = (event) => {
        setState(event.target.value)
        setUrl(
            event.target.value === 'Todos' ? '' : '/brazil/uf/' + event.target.value)
    }

    //Logo quando a página carrega, faz uma busca de todos os estados brasileiros
    //Quando acontece alguma mudança na url (quando um novo estado é selecionado ou a data é modificada),
    //é realizada uma nova busca
    useEffect(() => {
        setResponse(false)
        axios.get(baseUrl + url)
            .then(res => {
                setResponse(res.data)
            })
    }, [url])

    return (
        <div>
            <WrapperBusca>
                <TextField
                    sx={{ width: 250, height: '56px' }}
                    id="select-state"
                    select
                    label="Selecione um estado"
                    value={state}
                    onChange={handleChangeState}
                >
                    {stateOptions.map((option) => ( //Realiza um mapeamento do stateOption, onde cada objeto
                        //encontrado dentro do Array é criado um novo MenuItem
                        <MenuItem key={option.initial} value={option.initial}>
                            {option.name}
                        </MenuItem>
                    ))}
                </TextField>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Selecione uma data"
                        value={date}
                        onChange={(newValue) => { //A cada mudança de data, a URL é setada com um novo valor,
                            //neste caso adicionado "/brazil/" e fazendo a tratativa necessária com o valor
                            // de data que este componente me retorna. No caso, eu a transformo no padrâo
                            //YYYY-MM-DD e depois faço um replaceAll para trocar todos os "-" para ""
                            setUrl('/brazil/' + newValue.toLocaleDateString("en-CA").replaceAll("-", ""))
                            setDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>

                <Button variant="outlined"
                    //Quando o botão é clicado, a URL é setada com o final "/countries" para trazer informações
                    //de todos os países
                    onClick={() => setUrl('/countries')}
                >Covid em outros países</Button>

                {/*Quando o botão é clicado, ele será redirecionado para uma nova rota*/}
                <Link to='/form'>
                    <Button variant="outlined"
                        sx={{ marginLeft: '10px' }}
                    >Inserir dados</Button>
                </Link>

            </WrapperBusca>
            {/*Neste caso, temos uma validação para renderizar o componente de detalhes (<Detail>). Caso a resposta 
            da API é retornada, o componente é renderizado*/}
            {
                response && <Detail
                    info={response}
                />
            }
        </div>
    )
}

export default Home