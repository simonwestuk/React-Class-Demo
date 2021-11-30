import React from 'react'

import {Button} from 'react-bootstrap'


function HomeScreen() {
    return (
        <div>
           
            <div className="bg-banner">
                <div className="banner-content">
                    <h1 className="heading-text text-center">welcome to toy land!</h1>
                    <Button variant="light" className="px-5 btn-block">see our toys!</Button>
                </div>
            </div>

        </div>
    )
}

export default HomeScreen
