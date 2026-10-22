import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'ekko-studio',
  title: 'Ekko Studio',
  license: 'BUSL-1.1',
  packageRepo: 'https://github.com/Start9-Community/ekko-studio-startOS',
  upstreamRepo: 'https://github.com/EKKOLearnAI/ekko-studio',
  marketingUrl: 'https://ekkostudio.xyz',
  donationUrl: null,
  description: { short, long },
  volumes: ['main', 'startos'],
  images: {
    studio: {
      source: {
        dockerTag:
          'ekkoye8888/hermes-web-ui:v0.7.38@sha256:23f72dc4900534b2eb6d0511f5b81d3cf620f5dce69cf132b32317e88d4a4f01',
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
})
