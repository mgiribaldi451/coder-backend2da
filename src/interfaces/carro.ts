export default interface Carro {
    id: number;
    timestampCart: number;
    productos: [{
    id: number;
    timestamp: number;
    description: string;
    nombre: string;
    codigo: string;
    foto: string;
    precio:number;
    stock:number;}]
  }