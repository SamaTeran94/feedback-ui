/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react"

const FeedbackContext = createContext()

export const FeeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    //Fetch Feedback

    const fetchFeedback = async () => {
        const response = await fetch('http://localhost:3000/feedback?_sort=id&_order=desc')
        const data = await response.json()
        console.log(data)
        setFeedback(data)
        setIsLoading(false)
    }

    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete?'))
            await fetch(`http://localhost:3000/feedback/${id}`, {
                method: 'DELETE'
            })
        setFeedback(feedback.filter((item) => item.id !== id))
    }

    const addFeedback = async (newFeedback) => {

        const response = await fetch('http://localhost:3000/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback),
        })

        const data = await response.json()

        setFeedback([data, ...feedback])
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`http://localhost:3000/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json()

        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...data } : item))
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isLoading
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext