import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
  // the OpenAPI schema, you can also give it an external URL.
  input: ['https://fiber-explorer-api-testnet.magickbase.com/api/openapi.json'],
  output: './content/docs/open-api/',
  // we recommend to enable it
  // make sure your endpoint description doesn't break MDX syntax.
  includeDescription: true,
});
