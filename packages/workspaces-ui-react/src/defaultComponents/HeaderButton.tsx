import React from "react";

const HeaderButton: React.FC<{ title: string, className: string, children: React.ReactNode, id?: string }> = ({ title, className, children, id, ...props }) => {
    return (
        <li {...props} title={title} className={className} id={id}>
            {children}
        </li>
    )
};

export default HeaderButton;
