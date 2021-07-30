import React from 'react'

export const Footer = () => {
    let footerStyle ={
        position: 'sticky',
        bottom: '0px',
        width: '100%'

    }
    return (
        <footer className="bg-dark text-light p-2 mt-4" style={footerStyle}>
            <p className="text-center">
                Copyright &copy; profists.com
            </p>
        </footer>
    )
}
