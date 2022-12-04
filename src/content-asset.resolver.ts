import { Args, Resolver, Query } from '@nestjs/graphql';
import { Allow, Ctx, Permission, RequestContext, TransactionalConnection } from '@vendure/core';
import { ContentAssetConfigEntity } from './content-asset-config.entity';
import { QueryContentAssetArgs } from './generated-graphql';

@Resolver()
export class ContentAssetResolver {
    constructor(private connection: TransactionalConnection) {}

    @Query()
    @Allow(Permission.ReadCatalog)
    async contentAsset(@Ctx() ctx: RequestContext, @Args() args: QueryContentAssetArgs) {
        return this.connection.getRepository(ctx, ContentAssetConfigEntity).findOne(args.id);
    }
}