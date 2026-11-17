import { apiConfig } from "./api-config";

export async function scheduleNew({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        when,
      }),
    })

    alert("Horário agendado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Ocorreu um erro ao tentar agendar o horário, tente novamente.");
  }
}