import { Client, Account } from 'appwrite';

export const client = new Client();

// Replace with your Appwrite Endpoint and Project ID
const ENDPOINT = 'https://cloud.appwrite.io/v1';
const PROJECT_ID = 'YOUR_PROJECT_ID';

client
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID);

export const account = new Account(client);

export default client;
