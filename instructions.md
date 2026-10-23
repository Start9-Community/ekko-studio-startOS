# Ekko Studio

## Documentation

- [Ekko Studio README](https://github.com/EKKOLearnAI/ekko-studio/blob/main/README.md) — model configuration, agents, and application features.

## What you get on StartOS

A single **Web Interface** serving Ekko Studio's browser app. Your conversations, uploaded files, agent settings, installed coding tools, and the files in the default workspace all live in this service's data and are included in its backups.

## Getting set up

1. Run **Set Admin Password** and save the password it shows you.
2. Start Ekko Studio and open **Web Interface**.
3. Sign in as `admin` with that password.
4. Add a model provider in Studio and configure an agent before starting a chat. Providers may require their own accounts and fees; none are included.

## Using Ekko Studio

### Actions

- **Set Admin Password** — generates a new password for the `admin` account and shows it once. Run it again if you lose the password; it is available while the service is stopped. Keep the account named `admin`, and create additional accounts inside Studio.

## Limitations

- LAN device discovery and direct peer-to-peer connections are turned off, and providers whose browser sign-in needs a separate callback listener (such as xAI) can't use it. Use the provider's API key instead.
- Studio's own update check is turned off; updates arrive as service updates.
