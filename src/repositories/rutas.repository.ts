import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Rutas, RutasRelations, Aeropuerto} from '../models';
import {AeropuertoRepository} from './aeropuerto.repository';

export class RutasRepository extends DefaultCrudRepository<
  Rutas,
  typeof Rutas.prototype.id,
  RutasRelations
> {

  public readonly origenFK: BelongsToAccessor<Aeropuerto, typeof Rutas.prototype.id>;

  public readonly destinoFK: BelongsToAccessor<Aeropuerto, typeof Rutas.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('AeropuertoRepository') protected aeropuertoRepositoryGetter: Getter<AeropuertoRepository>,
  ) {
    super(Rutas, dataSource);
    this.destinoFK = this.createBelongsToAccessorFor('destinoFK', aeropuertoRepositoryGetter,);
    this.registerInclusionResolver('destinoFK', this.destinoFK.inclusionResolver);
    this.origenFK = this.createBelongsToAccessorFor('origenFK', aeropuertoRepositoryGetter,);
    this.registerInclusionResolver('origenFK', this.origenFK.inclusionResolver);
  }
}
