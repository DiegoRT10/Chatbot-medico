import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface Medicina {
  id: String,
  nombre: String
  link: String
}

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrl: './medicamento.component.scss'
})
export class MedicamentoComponent implements OnInit{

  medicina: Medicina[] = [
    {
      id: "1",
      nombre: "Ibuprofeno",
      link: "https://www.life.com.ec/wp-content/uploads/2022/02/IBUPROFENO_200_DOLOR_ESPALDA_CABEZA_GARGANTA_CONTRACTURA_GENERICOS_GENAMERICA.png"
    },
    {
      id: "2",
      nombre: "Acetaminofen",
      link: "https://www.plmconnection.com/plmservices/PharmaSearchEngine/Cad/DEF/SIDEF/400x400/CALOX_acetaminofen_TABLETAS%20750.png"
    },
    {
      id: "3",
      nombre: "Naproxeno",
      link: "https://www.laproff.com/img/product/Naproxeno.png"
    },
    {
      id: "4",
      nombre: "Diclofenaco",
      link: "https://www.plmconnection.com/plmservices/PharmaSearchEngine/Mexico/DEF/SIDEF/400x400/amsa_diclofenaco_solinyec_75mg_3ml_2.png"
    },
    {
      id: "5",
      nombre: "Sumatriptán",
      link: "https://www.cloudpharmacy.co.uk/uploads/images/products/large/cloud-pharmacy-sumatriptan-tablets-50mg-100mg-1639060696Sumatriptan-Migraine-Online.png"
    },
    {
      id: "6",
      nombre: "Amitriptilina",
      link: "https://luveck.com/wp-content/uploads/2021/12/caja-amitriptilina-25mg.png"
    },
    {
      id: "7",
      nombre: "Gabapentina",
      link: "https://www.plmconnection.com/plmservices/PharmaSearchEngine/Mexico/DEF/SIDEF/400x400/amsa_gabapentina_cap_300mg_cap.png"
    },
    {
      id: "8",
      nombre: "Topiramato",
      link: "https://grupofarmapronto.com/wp-content/uploads/2022/11/7502216796553.png"
    },
    {
      id: "9",
      nombre: "Pregabalina",
      link: "https://www.plmconnection.com/plmservices/PharmaSearchEngine/Mexico/DEF/SIDEF/400x400/amsa_pregabalina_cap_75mg_14.png"
    },
  ]

  itemId: String = "";
  name: String = ""
  headerImageUrl: String = '';

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.itemId = params.get('id')!;
      this.headerImageUrl = this.medicina[Number(this.itemId)].link;
      this.name = this.medicina[Number(this.itemId)-1].nombre;
      console.log('id ', this.itemId);
    });
  }

}
