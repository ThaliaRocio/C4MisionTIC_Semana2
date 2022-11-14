import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Aeropuerto} from './aeropuerto.model';

@model()
export class Rutas extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;
  @property({
    type: 'number',
  })
  tiempo_estimado?: number;

  @belongsTo(() => Aeropuerto, {name: 'origenFK'})
  origen: string;

  @belongsTo(() => Aeropuerto, {name: 'destinoFK'})
  destino: string;

  constructor(data?: Partial<Rutas>) {
    super(data);
  }
}

export interface RutasRelations {
  // describe navigational properties here
}

export type RutasWithRelations = Rutas & RutasRelations;
