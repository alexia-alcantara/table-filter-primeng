export interface Representative {
    name?: string;
    image?: string;
}

export interface Fornecedor {
    name?: string;
}

export interface EnvioDate {
    date?: string | Date;
}

export interface Aprovacao {
    date?: string | Date;
}

export interface cCusto {
    custo?: string;
}

export interface ordemCompra {
    compra?: number;
}

export interface informacoesAdicionais {
    informacoes?: string;
}
export interface Customer {
    notaFiscal?: string;
    fornecedor?: string;
    valor?: string;
    envioDate?: string;
    status?: string;
    aprovacao?: string;
    cCusto?: string;
    ordemCompra?: string;
    informacoesAdicionais?: string;
}