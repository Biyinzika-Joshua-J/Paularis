/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:true,
        mdxRs:true,
        //serverComponentsExternalPackages:['postresql']
    }
}

module.exports = nextConfig
