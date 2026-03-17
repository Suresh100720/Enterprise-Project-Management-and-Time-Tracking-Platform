import { useEffect, useState } from "react"
import api from "../services/api"

export default function Projects() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetchProjects()
    }, [])

    const fetchProjects = async () => {
        const res = await api.get("/projects")
        setProjects(res.data)
    }

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-4">
                Projects
            </h1>

            <div className="grid grid-cols-3 gap-4">

                {projects.map(p => (

                    <div
                        key={p._id}
                        className="p-4 border rounded shadow"
                    >

                        <h2 className="font-bold">
                            {p.name}
                        </h2>

                        <p>{p.description}</p>

                    </div>

                ))}

            </div>

        </div>
    )
}