import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) {}

  guardarPersonas(personas: Persona[]) {
      this.httpClient.put('https://listado-personas-2001a-default-rtdb.firebaseio.com/datos.json', personas)
      .subscribe(
          response=>console.log("resultado de guardar las personas: "+response),
          error=> console.log("error al guardar personas: "+ error) 
          );  
  }

  cargarPersonas(){
      return this.httpClient.get<Persona[]>('https://listado-personas-2001a-default-rtdb.firebaseio.com/datos.json');
  }

  modificarPersona(indice:number, persona:Persona){
      let url:string='https://listado-personas-2001a-default-rtdb.firebaseio.com/datos/' + indice+ '.json';
      this.httpClient.put(url, persona)
      .subscribe(
          response=> console.log("resultado de modificar el objeto persona: "+ response)
          ,error=> console.log("error modificando la persona: "+ error)
      );
  }

  eliminarPersona(indice:number){
    let url:string='https://listado-personas-2001a-default-rtdb.firebaseio.com/datos/' + indice+ '.json';
    this.httpClient.delete(url)
    .subscribe(
        response=> console.log("resultado de eliminar el objeto persona: "+ response)
        ,error=> console.log("error eliminando la persona: "+ error)
    );
  }
}
