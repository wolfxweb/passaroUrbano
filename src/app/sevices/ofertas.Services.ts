import { Oferta } from "../model/oferta.model"


export class OfertasService{
   
    public ofertas:Array<Oferta> =[
        {
            id: 1,
            categoria: "restaurante",
            titulo: "Super Burger",
            descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
            anunciante: "Original Burger",
            valor: 29.90,
            destaque: true,
            imagens: [
                {urlImg: "/assets/ofertas/1/img1.jpg"},
                {urlImg: "/assets/ofertas/1/img2.jpg"},
                {urlImg: "/assets/ofertas/1/img3.jpg"},
                {urlImg: "/assets/ofertas/1/img4.jpg"}
            ]
        },
        {
            id: 2,
            categoria: "restaurante",
            titulo: "Cozinha Mexicana",
            descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            anunciante: "Mexicana",
            valor: 32.90,
            destaque: true,
            imagens: [
                {urlImg: "/assets/ofertas/2/img1.jpg"},
                {urlImg: "/assets/ofertas/2/img2.jpg"},
                {urlImg: "/assets/ofertas/2/img3.jpg"},
                {urlImg: "/assets/ofertas/2/img4.jpg"}
            ]
        
        },
        {
            id: 4,
            categoria: "diversao",
            titulo: "Estância das águas",
            descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
            anunciante: "Estância das águas",
            valor: 31.90,
            destaque: true,
            imagens: [
                {urlImg: "/assets/ofertas/3/img2.jpg"},
                {urlImg: "/assets/ofertas/3/img3.jpg"},
                {urlImg: "/assets/ofertas/3/img4.jpg"},
                {urlImg: "/assets/ofertas/3/img5.jpg"},
                {urlImg: "/assets/ofertas/3/img6.jpg"}
            ]
        }
    ]

    public getOferta(): Promise<Oferta[]>{

        return new Promise((resolve, reject)=>{

            let teste = true

            if(teste){
                resolve(this.ofertas)
            }else{
                reject({codigo_erro: 404, Servidor:"Item não encontado." })
            }

           
        })
    }
}