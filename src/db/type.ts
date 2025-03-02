export type Project = {
    id: string
    name: string
    category: string
    type: string
    period: string
    authority : string
    url: string[]
    github: string
    image_url: string[]
    summary: string
    main_function: string[]
    my_part: string[]
    meaning: string
    frontend: string
    backend: string
    database: string
    deployment: string
    mobile_app: string
    solution: string
} | null

export type Projects = Project[]