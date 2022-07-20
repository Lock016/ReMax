
export interface User {
    token:    Token;
    id:       number;
    email:    string;
    fullname: string;
    fname:    string;
    lname:    string;
}

export interface Token {
    refresh: string;
    access:  string;
}
