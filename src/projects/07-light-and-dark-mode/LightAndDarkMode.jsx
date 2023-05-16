import React, { useEffect, useState } from 'react'
import Blog from './Blog'
import { ThemeContext, themes } from './context/theme-context'

function LightAndDarkMode() {
    const [theme, setTheme] = useState(themes.light)

    function changeTheme() {
        console.log(theme)
        theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
        console.log(`Button Theme is now ${theme}`)
    }
    let docBody = document.body
    useEffect(() => {
        switch (theme) {
            case themes.light:
                //     console.log(docBody)
                docBody.classList.remove('bg-dark')
                docBody.classList.remove('text-light')
                docBody.classList.add('bg-light')
                docBody.classList.add('text-dark')
                break
            case themes.dark:
                console.log(docBody)

                docBody.classList.remove('bg-light')
                docBody.classList.remove('text-dark')
                docBody.classList.add('bg-dark')
                docBody.classList.add('text-light')
                break
        }
    }, [theme])
    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <Blog />
        </ThemeContext.Provider>
    )
}

export default LightAndDarkMode
