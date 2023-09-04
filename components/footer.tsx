import { siteConfig } from '@/config/site';
import { LanguageContext } from '@/context/language/LanguageContext';
import { Link } from '@nextui-org/react'
import React, { useContext } from 'react'

export const Footer = () => {
    const { createdBy } = siteConfig;
    const {language} = useContext(LanguageContext)
    return (
        <footer className="w-full flex items-center justify-center py-3">
            <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://portfolio-sotacode.vercel.app/"
                title="nextui.org homepage"
            >
                <span className="text-default-600">{createdBy[language]}</span>
                <p className="text-primary">SotaCode</p>
            </Link>
        </footer>
    )
}
