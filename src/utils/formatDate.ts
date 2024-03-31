import moment from "moment";

export function formatDate(data: string | Date): string {
  const dataFormatada: string = moment(data).format("DD/MM/YYYY");
  return dataFormatada;
}

export function formatDateUs(data: Date): string {
  const dataFormatada: string = moment(data).format("YYYY-MM-DD");
  return dataFormatada;
}
