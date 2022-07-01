
export interface Token {
    refresh: string;
    access:  string;
}

export interface User {
    security:  Token;
    email: string;
    fname: string;
    lname: string;
}