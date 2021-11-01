import React, { useEffect } from 'react'
import { InfoStatesWrapper } from './Detail.style'
import { TextField } from '@mui/material'

const Detail = ({ info }) => {


    return (
        //Verificando se info possui dados e, caso exista, fazendo um mapeamento dos mesmos 
        info.data ? info.data.map(item => (
            <InfoStatesWrapper>
                <TextField
                    InputProps={{
                        readOnly: true
                    }}
                    id='state'
                    label={item.state ? 'Estado' : 'País'} //Operador ternário para validar se item está 
                    //recebendo um estado ou um país e alterando o nome da label
                    variant='outlined'
                    defaultValue={item.state ? item.state : item.country} //Operador ternário para validar o 
                    //valor que irá receber da API
                />

                <TextField
                    InputProps={{
                        readOnly: true
                    }}
                    id='state'
                    label={item.cases ? 'Casos' : 'Confirmados'}
                    variant='outlined'
                    defaultValue={item.cases ? item.cases : item.confirmed}
                />

                <TextField
                    InputProps={{
                        readOnly: true
                    }}
                    id='state'
                    label="Mortes"
                    variant='outlined'
                    defaultValue={item.deaths}
                />

                {item.suspects &&
                    <TextField
                        InputProps={{
                            readOnly: true
                        }}
                        id='state'
                        label="Suspeitos"
                        variant='outlined'
                        defaultValue={item.suspects}
                    />
                }

            </InfoStatesWrapper>
        )) //Renderizando um estado por vez
            : <InfoStatesWrapper>
                <TextField
                    InputProps={{
                        readOnly: true
                    }}
                    id='state'
                    label="Estado"
                    variant='outlined'
                    defaultValue={info.state}
                />

                <TextField
                    InputProps={{
                        readOnly: true
                    }}
                    id='state'
                    label="Casos"
                    variant='outlined'
                    defaultValue={info.cases}
                />

                <TextField
                    InputProps={{
                        readOnly: true
                    }}
                    id='state'
                    label="Mortes"
                    variant='outlined'
                    defaultValue={info.deaths}
                />

                <TextField
                    InputProps={{
                        readOnly: true
                    }}
                    id='state'
                    label="Suspeitos"
                    variant='outlined'
                    defaultValue={info.suspects}
                />
            </InfoStatesWrapper>
    )
}

export default Detail