# Turbin3 Prerequisites

A TypeScript-based project for interacting with the Solana blockchain, specifically designed for Turbin3 prerequisites. This repository contains scripts for key generation, airdrop requests, token transfers, and program enrollment.

## Features

- **Key Generation**: Generate Solana keypairs for development
- **Airdrop**: Request SOL tokens on the Solana Devnet
- **Token Transfer**: Transfer SOL tokens between wallets
- **Program Enrollment**: Enroll in the Turbin3 program using your GitHub account

## Prerequisites

- Node.js (v14 or higher)
- Yarn package manager
- Solana CLI tools
- A Solana wallet with some SOL tokens for testing

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Tubrin3-Prereq-ts
```

2. Install dependencies:
```bash
yarn install
```

## Usage

The project provides several scripts for different operations:

### Generate a Keypair
```bash
yarn keygen
```

### Request Airdrop (Devnet)
```bash
yarn airdrop
```

### Transfer SOL Tokens
```bash
yarn transfer
```

### Enroll in Turbin3 Program
```bash
yarn enroll
```

## Project Structure

- `keygen.ts`: Generates Solana keypairs
- `airdrop.ts`: Requests SOL airdrop on Devnet
- `transfer.ts`: Handles SOL token transfers
- `enroll.ts`: Enrolls in the Turbin3 program
- `programs/`: Contains the Turbin3 program interface

## Dependencies

- `@coral-xyz/anchor`: Anchor framework for Solana development
- `@solana/web3.js`: Solana Web3 JavaScript API
- `bs58`: Base58 encoding/decoding
- `prompt-sync`: For command-line input
- `typescript`: TypeScript support
- `ts-node`: TypeScript execution environment

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.