declare module '*.svg?inline' {
    const content: any
    export default content
}

declare module '*.svg?' {
    const content: any
    export default content
}

declare module '*.png' {
    const content: any
    export default content
}

declare module '*.jpg' {
    const content: any
    export default content
}

declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGAElement>>;
    const src: string;
    export default src;
}