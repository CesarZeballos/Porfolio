
export interface IRoleProps {
    title: string,
    description: string
}

export interface IRole {
    index: number,
    title: string,
    description: string
}

export interface ISkill {
    index: number,
    name: string,
    icon: React.ReactElement
}

export interface ITools {
    color: string
    skills: ISkill
}

export interface IStrength {
    index: number,
    name: string,
    description: string,
    icon: React.ReactElement
}

export interface IPropChildren {
    children: React.ReactNode
}

export interface IExperience {
    index: number, 
    name: string,
    description1: string,
    description2: string
}

export interface ICertificate {
    index: number,
    imagen: string,
    title: string,
}

export interface IContact {
    name: string,
    email: string,
    message: string
}

export interface IContactError {
    name: string,
    email: string,
    message: string
}

export interface IPortfolio {
    index: number,
    title: string,
    type: string,
    description: string,
    image: string,
    github?: string,
    vercel?: string,
    figma?: string,
    behance?: string

}