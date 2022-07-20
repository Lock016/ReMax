
export interface Office {
    id:       number;
    name:     string;
    location: string;
}

export interface Origin {
    id:          number;
    name:        string;
    description: string;
}

export interface Contact {
    id:        number;
    email:     string;
    fname:     string;
    lname:     string;
    cellphone: string;
    status:    boolean;
    notes:     string;
    office:    number;
    origin:    number;
    agent:     number;
}

