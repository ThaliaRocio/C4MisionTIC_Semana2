import {Entity, model, property} from '@loopback/repository';

@model()
export class Vuelo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
  })
  fecha_inicio?: string;

  @property({
    type: 'number',
  })
  hora_inicio?: number;

  @property({
    type: 'date',
  })
  fecha_fin?: string;

  @property({
    type: 'number',
  })
  hora_fin?: number;

  @property({
    type: 'number',
  })
  asientos_vendidos?: number;

  @property({
    type: 'string',
  })
  nombre_piloto?: string;

  @property({
    type: 'string',
    required: true,
  })
  ruta: string;


  constructor(data?: Partial<Vuelo>) {
    super(data);
  }
}

export interface VueloRelations {
  // describe navigational properties here
}

export type VueloWithRelations = Vuelo & VueloRelations;
