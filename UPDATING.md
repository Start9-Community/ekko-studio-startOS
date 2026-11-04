# Updating Ekko Studio

Upstream is `EKKOLearnAI/ekko-studio`; the documented Docker distribution is
`ekkoye8888/hermes-web-ui`. Read the upstream GitHub Releases and Docker Hub
manifest list before choosing a version.

1. Verify the release tag and both linux/amd64 and linux/arm64 manifests.
2. Change the tag and immutable index digest in `startos/manifest/index.ts`.
3. Recheck the upstream entrypoint, data paths, reset-default-login CLI, login and
   password-change API. Credential setup deliberately uses those upstream APIs.
4. Refresh `LICENSE` and `icon.svg` from upstream if they changed.

The icon is upstream `packages/tos/icon.svg`; the license is upstream `LICENSE`.
