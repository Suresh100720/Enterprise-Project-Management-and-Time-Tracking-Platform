import { useState } from "react"
import api from "../services/api"

export default function TimeEntryForm() {

    const [hours, setHours] = useState(0)

    const submitTime = async () => {

        await api.post("/time", {
            hours
        })

        alert("Time logged")
    }

    return (

        <div>

            <input
                type="number"
                onChange={(e) => setHours(e.target.value)}
            />

            <button onClick={submitTime}>
                Log Time
            </button>

        </div>
    )
}