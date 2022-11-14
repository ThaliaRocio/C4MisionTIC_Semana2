import {Entity, model, property} from '@loopback/repository';

@model()
export class Aeropuerto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  nombre?: string;

  @property({
    type: 'string',
  })
  ciudad?: string;

  @property({
    type: 'string',
  })
  pais?: string;

  @property({
    type: 'string',
  })
  coord_x?: string;

  @property({
    type: 'string',
  })
  coord_y?: string;

  @property({
    type: 'string',
  })
  siglas?: string;

  @property({
    type: 'string',
  })
  tipo?: string;


  constructor(data?: Partial<Aeropuerto>) {
    super(data);
  }
}

export interface AeropuertoRelations {
  // describe navigational properties here
}

export type AeropuertoWithRelations = Aeropuerto & AeropuertoRelations;
