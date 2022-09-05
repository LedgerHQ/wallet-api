# Manifest

The manifest describe how an Application can be loaded by a Wallet, gives informations about it (name, description, icons) and allows to restrict permissions to specific RPC calls. It uses the JSON format.

## Schema

| Name                     | type                                                          | Description              | Validation |
| ------------------------ | ------------------------------------------------------------- | ------------------------ | ---------- |
| id                       | string                                                        | Manifest unique id       |            |
| private                  | boolean (optional)                                            | Is this manifest private |            |
| name                     | string                                                        |                          |            |
| url                      | string                                                        |                          |            |
| homepageUrl              | string                                                        |                          |            |
| supportUrl               | string (optional)                                             |                          |            |
| icon                     | string (optional)                                             |                          |            |
| platform                 | AppPlatform (`"desktop" \| "mobile" \| "all"`)                |                          |            |
| apiVersion               | string                                                        |                          |            |
| manifestVersion          | string                                                        |                          |            |
| branch                   | AppBranch (`"stable" \| "experimental" \| "soon" \| "debug"`) |                          |            |
| categories               | array of strings (`string[]`)                                 |                          |            |
| currencies               | array of strings (`string[]`) or `"*"`                        |                          |            |
| content.shortDescription | TranslatableString                                            |                          |            |
| content.description      | TranslatableString                                            |                          |            |
| permissions              | array of AppPermission (`AppPermission[]`)                    |                          |            |
| domains                  | array of strings (`string[]`)                                 |                          |            |
