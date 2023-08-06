export interface Item {
    id: string // barcode
    name: string
    description: string
    expiry: Date
    parent: string // for duplicate or new upc, merge into this parent
}