


export type User = {
    id: number,
    address: Address,

    
}

export type Address = {
    address: string

}

export type Message = {
    sender: User,
    recipient: User,
    cc: [User],
    
}