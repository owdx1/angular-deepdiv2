export interface newTicket {
  title: string
  desc: string
}

export interface Ticket { 
  id: string
  title: string
  desc: string
  date: Date
  isComplete: boolean
}