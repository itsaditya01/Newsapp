import React, { Component } from 'react'

export default function Loading() {

    return (
        <div className="container loading d-flex align-items-center justify-content-center" style={{ width: '100%' }}>
            <img src="./loading2.gif" alt="loading" className="py-10" style={{ width: '50px', height: '50px' }} />
        </div>
    )

}
