export interface User {
    id: number;
    nume: string,
    prenume: string,
    datanastere: Date,
    email: string,
    telefon: string,
    dataadaugare?: Date,
    actiune?: string
}
