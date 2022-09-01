# Platform API Specifications

This directory hosts the canonical Markdown specifications of the Platform API.

It shall be used to describe protocol semantics, namely the client-server RPC methods, types and errors. The specification includes encoding descriptions used in interprocess communication to comply with the protocol. It defines the interface between the application and the Platform API.

## Table of Contents

- [Overview](#overview)
- [Server](./server/README.md)
- [Client](./client/README.md)
- [Types](./core/types.md)
- [Errors](./core/errors.md)
- [Encoding](./core/encoding.md)
- [Manifest](./core/manifest.md)
- [Remote Procedure Calls](./rpc/README.md)

## Version

This specification uses [semantic versioning](https://semver.org/)

**Version: 0.1.0**

### Changelog

| Version | Description   |
| ------- | ------------- |
| 0.1.0   | Initial draft |

## Contibuting

Contributions are welcome.

Proposals at an early stage can first be drafted as Github issues. To progress, a proposal will often need to be written out and approved as a [Request For Comment (RFC)](../rfc/README.md).

The standard language for coding is Typescript.

If you find discrepancies between the spec and the code that
do not have an associated issue or pull request on github,
please create a new issue !

## Overview
