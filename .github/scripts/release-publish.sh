#!/usr/bin/env bash
# Publish script for changesets/action/publish in release.yml.
#
# 1. Publishes the attested tarballs in PACK_DIR, if anything was packed.
# 2. Tags every package whose current version has no git tag yet (local or on origin).
#
# Step 2 is what makes a rerun recover a release that published to JFrog but failed
# before its tags and GitHub releases were created: the published versions drop out of
# the publish plan, so `changeset publish` alone would never tag them again. Both
# commands report their tags through CHANGESETS_OUTPUT (set by the action), which is how
# the action knows which tags to push, which GitHub releases to create and what to
# report as `published-packages`.
set -euo pipefail

if [ -n "${PACK_DIR:-}" ]; then
  pnpm exec changeset publish --from-pack-dir "$PACK_DIR"
fi

pnpm exec changeset git-tag
