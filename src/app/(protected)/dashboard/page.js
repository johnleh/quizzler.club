"use client"
import React, { useEffect, useMemo, useState } from 'react'
import { useSession } from "next-auth/react";
import Loading from '@/app/loading'
import { getSets } from "@/utils/services/flashcardServices";


const Dashboard = () => {
    const { data: session, status } = useSession()
    const sessionLoading = status === "loading" 
    const [setsStatus, setSetStatus] = useState("loading")
    const [sets, setSets] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {

        const fetchSets = async (userId) => {
            try{
                const fetchedSets = await getSets(userId)
                setSets(fetchedSets)
                setSetStatus("loaded")
                return fetchedSets
            } catch (error) {
                console.log("Error retrieving user flash card sets...")
                setError(error)
                setSetStatus("error")
                return null
            }
        }

        if(!sessionLoading) {
            fetchSets(session.user.id)
        }
    }, [sessionLoading])


    return (
        <>
            <h1>Dashboard</h1>
            {renderSets(sets,setsStatus)}
        </>
    )
}

const renderSets = (sets,setsStatus) => {
    switch (setsStatus) {
        case "loading":
            return <Loading />
        case "loaded":
            return renderSetsList(sets)
        case "error":
            return <p>Something went wrong when getting your sets :(</p>
    }
}

const renderSetsList =(sets) => {
    console.log(sets)
    if(!sets) {
        return <p>You have no sets, time to make some!</p>
    }

    console.log(sets)
    try {
        console.log(sets)
        return (
            <ul>
            {sets.map(set => {
                return (
                    <li>
                        <h2>{set.title}</h2>
                        <p>{set.description}</p>
                    </li>
                )
            })}
            </ul>
            )
    } catch (error) {
        console.log(error)
        return <p>Something went wrong, please try again</p>
    }
}


export default Dashboard
