import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { WrapperBusca } from '../home/Home.style'
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import DatePicker from "@mui/lab/DatePicker"
import { Button } from '@mui/material'

const InsertData = () => {

    //Criando constantes e gerenciando seus estados
    const [state, setState] = useState('')
    const [cases, setCases] = useState('')
    const [confirmed, setConfirmed] = useState('')
    const [deaths, setDeaths] = useState('')
    const [recovered, setRecovered] = useState('')
    const [date, setDate] = useState(null)

    //Quando o estado é mudado, esses métodos são chamados
    const handleState = (event) => setState(event.target.value)
    const handleCases = (event) => setCases(event.target.value)
    const handleConfirmed = (event) => setConfirmed(event.target.value)
    const handleDeaths = (event) => setDeaths(event.target.value)
    const handleRecovered = (event) => setRecovered(event.target.value)
    const handleDate = (newValue) => setDate(newValue)

    //Essa constante cria um objeto com as informações da API e retorna um body
    const sendData = () => {
        const body = {
            state: state,
            cases: cases,
            confirmed: confirmed,
            deaths: deaths,
            recovered: recovered,
            date: date
        }
        return body
    }

    return (
        <div>
            <WrapperBusca>
                {/*Criando TextField com a função onChange para ser chamado a cada modificação*/}
                <TextField
                    id="outlined-state"
                    onChange={handleState}
                    label="Estado"
                    variant="outlined"
                />
                <TextField
                    id="outlined-cases"
                    type="number"
                    onChange={handleCases}
                    label="Casos"
                    variant="outlined"
                />
                <TextField
                    id="outlined-confirmed"
                    type="number"
                    onChange={handleConfirmed}
                    label="Confirmados"
                    variant="outlined"
                />
                <TextField
                    id="outlined-deaths"
                    type="number"
                    onChange={handleDeaths}
                    label="Mortos"
                    variant="outlined"
                />
                <TextField
                    id="outlined-recovered"
                    type="number"
                    onChange={handleRecovered}
                    label="Recuperados"
                    variant="outlined"
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Selecione uma data"
                        value={date}
                        onChange={newValue => handleDate(newValue)} //Resgata o valor que foi definido pelo
                        //usuário e passa ele pela função onChange
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>

                {/*Quando o botão é clicado, o disabled fará uma validação para ver se os cenários são true,
                caso sejam, o botão será liberado para enviar os dados*/}
                <Button disabled={
                    state === '' || cases === '' || confirmed === ''
                    || deaths === '' || recovered === '' || date === null
                } onClick={() => console.log(sendData())}>Enviar</Button> {/*os dados serão mostrados
                no console após ser chamado o método sendData() onClick*/}
            </WrapperBusca>
        </div >

    )
}

export default InsertData