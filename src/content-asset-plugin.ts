import { PluginCommonModule, VendurePlugin } from '@vendure/core';

import { schema } from './content-asset.graphql';
import { ContentAssetResolver } from './content-asset.resolver';

@VendurePlugin({
    imports: [PluginCommonModule],
    shopApiExtensions: {
        schema: schema,
        resolvers: [ContentAssetResolver],
    },
})
export class ContentAssetPlugin {
    context = "ContentAssetPlugin"
}
