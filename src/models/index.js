// Isso é um arquivo de exemplo, crie os arquivos das models necessárias.
export class Jogador {
    constructor(nome){
        this._nome = nome;
        this._pontos = 0;
        this._mao;
    };
    get nome(){
        return this._nome;
    };
    set nome(valor){
        this._nome = valor;
    };
    
    get pontos(){
        return this._pontos;
    };
    set pontos(valor){
        this._pontos = valor;
    };

    get mao(){
        return this._mao;
    };
    set mao(valor){
        this._mao = valor;
    };

    pedra(){
        this.mao = "pedra"
    }

    papel(){
        this.mao = "papel"
    }

    tesoura(){
        this.mao = "tesoura"
    }

    aumentarPontos(){
        this.pontos++;
    }

};