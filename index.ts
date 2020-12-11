import { Observable, Observer } from "rxjs";
import { filter, map } from "rxjs/operators";

const miObserver: Observer<any> = {
  next: x => {
    if (!isNaN(x)) {
      console.log(x + 10);
    } else {
      console.log(`'${x}': no es un valor permitido`);
    }
  },
  error: err => console.error(`le erraste`, err),
  complete: () => console.log("termine de trabajar")
};

const miObserver2: Observer<any> = {
  next: x => {
    console.log(`'${x}': recibo ese valor soy persona 2`);
  },
  error: err => console.error(`le erraste`, err),
  complete: () => console.log("termine de trabajar")
};

const miObservable = new Observable(data => {
  data.next("hola");
  data.next(10);
  data.next(30);
  data.next(40);
  data.error("soy un error");
  data.next(20);
});

const miObservable2 = new Observable(data => {
  data.complete();
  data.next(20);
});

// YOUTUBE ES miObservable
// LOS USUARIOS SON LOS OBSERVERS
// SUSCRIBE CREA EL CANAL PARA TRANSMITIR LOS DATOS ES LA SUSCRIPCION A UN CANAL DE YOUTUBE

const miFiltro = miObservable.pipe(
  filter((valor: any) => !isNaN(valor)),
  map((valor: any) => {
    return valor + 10;
  })
);

const miObserver3: Observer<any> = {
  next: x => {
    console.log(x);
  },
  error: err => console.error("le erraste", err),
  complete: () => console.log("terminamos rxjs")
};

miFiltro.subscribe(miObserver3);

// const a = miObservable.subscribe(miObserver);
// miObservable.subscribe(miObserver2);
// miObservable2.subscribe(miObserver);
