import styles from './Banner.module.css'
import Switch from 'react-switch'

export const Banner = ({ theme,setState }) => {
    return (
        <header className={theme ? styles.bannerBlueGreen : styles.bannerRed} >
            <img src={theme ? '/images/banner-blue-green.png' : '/images/banner-red.png'} alt='logo' />
            <Switch
                className={styles.switchTheme}
                onChange={() => { setState(!theme) }}
                checked={theme}
                checkedIcon={false}
                uncheckedIcon={false}
                onColor='#F2D06B' 
                offColor='#AEF2EB'
                onHandleColor='#F2889B'
                offHandleColor='#F2C572'
                height={10}
                width={40}
                handleDiameter={20}
            />
        </header>
    )
}
