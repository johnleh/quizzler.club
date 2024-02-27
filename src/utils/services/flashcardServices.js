"use server"
import { fetchWrapper } from '@/utils/api/fetchWrapper';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.baseUrl}/flashcards`;

export async function getSets(userId) {
    const getSetURL = `${baseUrl}/${userId}`;

    const res = await fetchWrapper.get(getSetURL, null)
    const sets = res.flashcardSets;
    

    return sets;
}

export async function getSetById() {
    throw new Error('Not implemented');
}

export async function newSet(userId, set) {
    throw new Error('Not implemented');
}

export async function updateSet() {
    throw new Error('Not implemented');
}

export async function deleteSet() {
    throw new Error('Not implemented');
}