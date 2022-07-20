
export interface User {
    token:    Token;
    email:    string;
    fullname: string;
    fname:    string;
    lname:    string;
}

export interface Token {
    refresh: string;
    access:  string;
}
