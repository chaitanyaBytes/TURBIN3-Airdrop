import { Transaction, SystemProgram, Connection, Keypair, LAMPORTS_PER_SOL, sendAndConfirmTransaction, PublicKey } from "@solana/web3.js";
import wallet from "./dev-wallet.json";

// wallet from devne-wallet
const from = Keypair.fromSecretKey(new Uint8Array(wallet));

// defining turbin3 wallet using public key
const to = new PublicKey("6e8eGHYa9nPPfLnx6JJx6bUGcFVk8XxHNcy2mLW4kmJU");
const connection = new Connection("https://api.devnet.solana.com");

(async () => {
    try {
        // Get balance of dev wallet
        const balance = await connection.getBalance(from.publicKey)

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: from.publicKey,
                toPubkey: to,
                lamports: balance
            })
        );
        transaction.recentBlockhash = (await connection.getLatestBlockhash("confirmed")).blockhash;
        transaction.feePayer = from.publicKey;

        const fee = (await connection.getFeeForMessage(transaction.compileMessage(), "confirmed")).value || 0;
        transaction.instructions.pop();
        transaction.add(SystemProgram.transfer({ fromPubkey: from.publicKey, toPubkey: to, lamports: balance - fee }));

        const signature = await sendAndConfirmTransaction(connection, transaction, [from]);
        console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${signature}?cluster=devnet`);
    } catch (e) {
        console.error(`Oops, something went wrong: ${e}`);
    }
})();
