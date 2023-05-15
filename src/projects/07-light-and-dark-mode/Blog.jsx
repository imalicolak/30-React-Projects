import React, { useContext } from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import { ThemeContext } from './context/theme-context'
function Blog() {
    const { theme, changeTheme } = useContext(ThemeContext)

    return (
        <div className="container p-1">
            <Title text={`My Blog with ${theme} Theme`} />
            <span style={{ position: 'absolute', top: 10, right: 10 }}>
                <Button
                    text={theme === 'dark' ? 'Light' : 'Dark'}
                    btnClass={`${theme === 'dark' && 'btn-light'} btn-sm`}
                    onClick={changeTheme}
                />
            </span>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dicta! Nisi dolore magni perferendis voluptatem sequi quaerat voluptate aperiam praesentium quidem, exercitationem
                voluptatibus culpa obcaecati reiciendis officia distinctio dolorum. Cupiditate?
            </p>
        </div>
    )
}

export default Blog
