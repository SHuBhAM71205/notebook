import React, { useContext } from 'react'

export default function About() {
   
    return (
        <div>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            />
            <div className="card shadow-lg p-4 mb-5 bg-white rounded" style={{ maxWidth: 600, margin: "40px auto" }}>
                <div className="card-body text-center">
                    <h1 className="card-title mb-4 text-primary fw-bold">About the Notebook App</h1>
                    <p className="card-text fs-5">
                        This application is designed to help you manage your notes efficiently.
                    </p>
                    <p className="card-text fs-5">
                        Features include creating, editing, and deleting notes, as well as organizing them into categories.
                    </p>
                    <p className="card-text fs-5">
                        We hope you find it useful for your daily note-taking needs!
                    </p>
                </div>
            </div>
        </div>
    )
}
