const vapp = {
    data(){
        return{
            fontStyle: 'italic',
            fontSize: 30,
            color: 'dimgrey',
            texto: "",
            ultimaPos: 0,
            tamanho: 0,
            stringAnterior: 0
        }
    },

    methods:{
        verificaCor(){
            let pos;
            console.log(this.texto);
            if(this.ultimaPos>this.texto.length)
            {
                this.texto = "";
                this.ultimaPos = 0;
                this.color = "white";
                
            }else
                if(this.texto.indexOf("vermelho", this.ultimaPos)>=0){
                    pos = this.texto.lastIndexOf("vermelho", this.ultimaPos);
                    this.color = 'red';
                    this.tamanho = 8;
                    this.ultimaPos = pos+this.tamanho;
                }else
                    if (this.texto.indexOf("azul", this.ultimaPos)>=0) {
                        pos = this.texto.lastIndexOf("azul");
                        this.color = 'blue';
                        this.tamanho = 4;
                        this.ultimaPos = pos+this.tamanho;
                    }
                    else
                        if (this.texto.indexOf("branco", this.ultimaPos)>=0) {
                            pos = this.texto.lastIndexOf("branco");
                            this.color = 'white';
                            this.tamanho = 6;
                            this.ultimaPos = pos+this.tamanho;
                        }
                        else
                            if (this.texto.indexOf("preto", this.ultimaPos)>=0) {
                                pos = this.texto.lastIndexOf("preto")
                                this.color = 'black';
                                this.tamanho = 5;
                                this.ultimaPos = pos+this.tamanho;
                            }
                            else
                                if (this.texto.indexOf("amarelo",this.ultimaPos)>=0) {
                                    pos = this.texto.lastIndexOf("amarelo");
                                    this.color = 'yellow';
                                    this.tamanho = 7;
                                    this.ultimaPos = pos+this.tamanho;
                                }
                                else
                                    if (this.texto.indexOf("verde", this.ultimaPos)>=0) {
                                        pos = this.texto.lastIndexOf("verde");
                                        this.color = 'green';
                                        this.tamanho = 5;
                                        this.ultimaPos = pos+this.tamanho;
                                    }
        }
    },

    template:
    `
    <div class="form-control" v-bind:style="{background: color}" style="height: 500px">
        <h3 class="texto">Informe a cor</h3>
        <textarea style="max-height: 300px" v-model="texto" v-on:keyup="verificaCor" class="form-control" aria-label="With textarea"> 
        </textarea>
    </div>
    `
};

Vue.createApp(vapp).mount('#app');
