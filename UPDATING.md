# Updating Ekko Studio

Upstream is `EKKOLearnAI/ekko-studio`; the documented Docker distribution is
`ekkoye8888/hermes-web-ui`. Read the upstream GitHub Releases and Docker Hub
manifest list before choosing a version.

1. Verify the release tag and both linux/amd64 and linux/arm64 manifests.
2. Change the tag and immutable index digest in `startos/manifest/index.ts`.
3. Update `startos/versions/current.ts` using `<upstream-version>:<package-revision>`.
   Add localized release notes. Do not copy an old migration into a new version.
4. Recheck the upstream entrypoint, data paths, reset-default-login CLI, login and
   password-change API. Credential setup deliberately uses those upstream APIs.
5. Refresh `LICENSE` and `icon.svg` from upstream if they changed.
6. Run the package checks/builds and test initial password setup, old-password
   rejection, rotation, persistence, interfaces, and backup/restore on StartOS.
7. Review limitations in README and instructions. Merging to `main` tags the
   version and publishes it to the community-beta registry.

The icon is upstream `packages/tos/icon.svg`; the license is upstream `LICENSE`.
