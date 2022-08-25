export interface Representative {
    name?: string;
}

export interface Fornecedor {
    name?: string;
}

export interface Valor {
    item?: string;
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
    compra?: string;
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