import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"
import {schedulesDay} from "../schedules/load.js"

const form = document.querySelector("form");
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")


const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = inputToday

selectedDate.min = inputToday

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const name = clientName.value.trim()

    if (!name) {
      return alert("Por favor, insira seu nome.") 
    }

    const hourSelected = document.querySelector(".hour-selected")
    console.log(hourSelected)

    if (!hourSelected){
      return alert("Selecione a hora")
    }

    const [hour] = hourSelected.innerText.split(":")

    const when = dayjs(selectedDate.value).add(hour, "hour")

    const id = String(new Date().getTime())

    await scheduleNew({
      id,
      name,
      when,
    })

    await schedulesDay()

    clientName.value = ""
  } catch (error) {
    alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.")
    console.log(error)
  }
}